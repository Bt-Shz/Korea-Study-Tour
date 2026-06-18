const SCRIPT_CACHE: Partial<Record<string, Promise<HTMLScriptElement>>> = {};

export function loadScriptOnce(
  src: string,
  attrs?: Record<string, string>,
): Promise<HTMLScriptElement> {
  const cached = SCRIPT_CACHE[src];
  if (cached) {
    return cached;
  }

  const existing = document.querySelector<HTMLScriptElement>(`script[src="${src}"]`);
  if (existing) {
    const promise = Promise.resolve(existing);
    SCRIPT_CACHE[src] = promise;
    return promise;
  }

  const promise = new Promise<HTMLScriptElement>((resolve, reject) => {
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

  SCRIPT_CACHE[src] = promise;
  return promise;
}
