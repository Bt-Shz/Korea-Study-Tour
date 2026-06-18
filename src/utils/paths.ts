const base = import.meta.env.BASE_URL || '/';
const normalizedBase = base === '/' ? '' : base.replace(/\/$/, '');
const externalUrlPattern = /^(?:[a-z][a-z\d+.-]*:|\/\/|#)/i;

export function withBase(path: undefined): undefined;
export function withBase(path: null): null;
export function withBase(path: string): string;
export function withBase(path: string | null | undefined): string | null | undefined;
export function withBase(path: string | null | undefined) {
  if (!path || externalUrlPattern.test(path) || !path.startsWith('/')) return path;
  if (!normalizedBase) return path;
  if (path === normalizedBase || path.startsWith(`${normalizedBase}/`)) return path;
  if (path === '/') return base;
  return `${normalizedBase}${path}`;
}

export function stripBase(path: string) {
  if (!normalizedBase) return path;
  if (path === normalizedBase || path === `${normalizedBase}/`) return '/';
  if (path.startsWith(`${normalizedBase}/`)) return path.slice(normalizedBase.length) || '/';
  return path;
}
