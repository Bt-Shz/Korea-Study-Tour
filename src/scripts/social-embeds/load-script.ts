const SCRIPT_CACHE: Record<string, Promise<HTMLScriptElement>> = {};

export function loadScriptOnce(
  src: string,
  attrs?: Record<string, string>,
): Promise<HTMLScriptElement> {
  if (SCRIPT_CACHE[src]) {
    return SCRIPT_CACHE[src];
  }

  const existing = document.querySelector<HTMLScriptElement>(`script[src="${src}"]`);
  if (existing) {
    SCRIPT_CACHE[src] = Promise.resolve(existing);
    return SCRIPT_CACHE[src];
  }

  SCRIPT_CACHE[src] = new Promise((resolve, reject) => {
    const script = document.createElement('script');
    script.src = src;
    script.async = true;

    if (attrs) {
      for (const [key, value] of Object.entries(attrs)) {
        script.setAttribute(key, value);
      }
    }

    script.onload = () => resolve(script);
    script.onerror = () => reject(new Error(`Failed to load ${src}`));
    document.head.appendChild(script);
  });

  return SCRIPT_CACHE[src];
}
