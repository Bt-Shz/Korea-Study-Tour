import { existsSync, readdirSync, readFileSync, statSync, writeFileSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { siteBase } from '../src/config/base.mjs';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const distDir = path.join(root, 'dist');
const normalizedBase = siteBase === '/' ? '' : siteBase.replace(/\/$/, '');

if (!existsSync(distDir)) {
  throw new Error('dist/ does not exist. Run astro build before making dist portable.');
}

const textExtensions = new Set(['.html', '.css', '.js']);

function walk(dir) {
  return readdirSync(dir).flatMap((entry) => {
    const fullPath = path.join(dir, entry);
    return statSync(fullPath).isDirectory() ? walk(fullPath) : [fullPath];
  });
}

function splitSuffix(url) {
  const match = url.match(/^([^?#]*)([?#].*)?$/);
  return {
    pathname: match?.[1] ?? url,
    suffix: match?.[2] ?? '',
  };
}

function toPosix(filePath) {
  return filePath.split(path.sep).join('/');
}

function relativeUrl(fromFile, targetFile) {
  let relative = toPosix(path.relative(path.dirname(fromFile), targetFile));
  if (!relative.startsWith('.')) {
    relative = `./${relative}`;
  }
  return relative;
}

function stripBase(pathname) {
  if (!normalizedBase) return pathname;
  if (pathname === normalizedBase || pathname === `${normalizedBase}/`) return '/';
  if (pathname.startsWith(`${normalizedBase}/`)) return pathname.slice(normalizedBase.length) || '/';
  return pathname;
}

function resolveInternalUrl(url, fromFile) {
  if (!url.startsWith('/') || url.startsWith('//')) return url;

  const { pathname, suffix } = splitSuffix(url);
  const cleanPath = stripBase(decodeURIComponent(pathname));
  const directTarget = path.join(distDir, cleanPath);
  const routeTarget = path.join(distDir, cleanPath, 'index.html');

  if (existsSync(directTarget) && statSync(directTarget).isFile()) {
    return `${relativeUrl(fromFile, directTarget)}${suffix}`;
  }

  if (existsSync(routeTarget)) {
    return `${relativeUrl(fromFile, routeTarget)}${suffix}`;
  }

  // Keep unknown absolute URLs unchanged rather than guessing.
  return url;
}

function rewriteHtml(content, filePath) {
  return content
    .replace(/\bcontent=("|')([^"']*;\s*url=)\/(?!\/)([^"']*)\1/gi, (match, quote, prefix, url) => {
      const rewritten = resolveInternalUrl(`/${url}`, filePath);
      return `content=${quote}${prefix}${rewritten}${quote}`;
    })
    .replace(/\b(href|src|action)=("|')\/(?!\/)([^"']*)\2/g, (match, attr, quote, url) => {
      const rewritten = resolveInternalUrl(`/${url}`, filePath);
      return `${attr}=${quote}${rewritten}${quote}`;
    })
    .replace(/\bsrcset=("|')([^"']*)\1/g, (match, quote, value) => {
      const rewritten = value
        .split(',')
        .map((candidate) => {
          const trimmed = candidate.trim();
          const [url, descriptor] = trimmed.split(/\s+/, 2);
          if (!url?.startsWith('/') || url.startsWith('//')) return candidate;
          return [resolveInternalUrl(url, filePath), descriptor].filter(Boolean).join(' ');
        })
        .join(', ');
      return `srcset=${quote}${rewritten}${quote}`;
    })
    .replace(/(["'`])\/(images|_astro|favicon\.ico|favicon\.svg)\/?([^"'`]*)\1/g, (match, quote, first, rest) => {
      const separator = first.startsWith('favicon') ? '' : '/';
      const rewritten = resolveInternalUrl(`/${first}${separator}${rest}`, filePath);
      return `${quote}${rewritten}${quote}`;
    });
}

function rewriteCss(content, filePath) {
  return content.replace(/url\((["']?)\/(?!\/)([^"')]+)\1\)/g, (match, quote, url) => {
    const rewritten = resolveInternalUrl(`/${url}`, filePath);
    return `url(${quote}${rewritten}${quote})`;
  });
}

function rewriteJavaScript(content, filePath) {
  return content.replace(/(["'`])\/(images|_astro|favicon\.ico|favicon\.svg)\/?([^"'`]*)\1/g, (match, quote, first, rest) => {
    const separator = first.startsWith('favicon') ? '' : '/';
    const rewritten = resolveInternalUrl(`/${first}${separator}${rest}`, filePath);
    return `${quote}${rewritten}${quote}`;
  });
}

for (const filePath of walk(distDir)) {
  const extension = path.extname(filePath);
  if (!textExtensions.has(extension)) continue;

  const before = readFileSync(filePath, 'utf8');
  const after =
    extension === '.html'
      ? rewriteHtml(before, filePath)
      : extension === '.css'
        ? rewriteCss(before, filePath)
        : rewriteJavaScript(before, filePath);

  if (after !== before) {
    writeFileSync(filePath, after);
  }
}

console.log('Made dist/ portable with relative internal URLs.');
