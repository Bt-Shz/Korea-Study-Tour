const externalUrlPattern = /^(?:[a-z][a-z\d+.-]*:|\/\/|#)/i;

function normalizeBase(base) {
  return base === '/' ? '' : base.replace(/\/$/, '');
}

function prefixUrl(value, base) {
  if (typeof value !== 'string' || !value.startsWith('/') || externalUrlPattern.test(value)) {
    return value;
  }

  const normalizedBase = normalizeBase(base);
  if (!normalizedBase) return value;
  if (value === normalizedBase || value.startsWith(`${normalizedBase}/`)) return value;
  return value === '/' ? `${normalizedBase}/` : `${normalizedBase}${value}`;
}

function prefixSrcset(value, base) {
  if (typeof value !== 'string') return value;

  return value
    .split(',')
    .map((candidate) => {
      const trimmed = candidate.trim();
      const [url, descriptor] = trimmed.split(/\s+/, 2);
      const rewritten = prefixUrl(url, base);
      return [rewritten, descriptor].filter(Boolean).join(' ');
    })
    .join(', ');
}

function rewriteRawHtml(value, base) {
  return value
    .replace(/\b(href|poster|src)=("|')\/(?!\/)([^"']*)\2/g, (_match, attr, quote, url) => {
      return `${attr}=${quote}${prefixUrl(`/${url}`, base)}${quote}`;
    })
    .replace(/\bsrcset=("|')([^"']*)\1/g, (_match, quote, srcset) => {
      return `srcset=${quote}${prefixSrcset(srcset, base)}${quote}`;
    });
}

function visit(node, base) {
  if (!node || typeof node !== 'object') return;

  if (node.type === 'html' && typeof node.value === 'string') {
    node.value = rewriteRawHtml(node.value, base);
  }

  if (node.type === 'image' || node.type === 'link') {
    node.url = prefixUrl(node.url, base);
  }

  if (Array.isArray(node.children)) {
    for (const child of node.children) {
      visit(child, base);
    }
  }
}

export function remarkBasePath(options = {}) {
  const base = options.base || '/';
  return (tree) => visit(tree, base);
}
