export function probeImage(url: string, timeoutMs: number): Promise<boolean> {
  return new Promise((resolve) => {
    const img = new Image();
    let settled = false;

    const finish = (ok: boolean) => {
      if (settled) return;
      settled = true;
      clearTimeout(timer);
      img.onload = null;
      img.onerror = null;
      resolve(ok);
    };

    const timer = window.setTimeout(() => finish(false), timeoutMs);

    img.onload = () => finish(true);
    img.onerror = () => finish(false);
    img.src = url;
  });
}

export function probeScript(url: string, timeoutMs: number): Promise<boolean> {
  return new Promise((resolve) => {
    const script = document.createElement('script');
    let settled = false;

    const finish = (ok: boolean) => {
      if (settled) return;
      settled = true;
      clearTimeout(timer);
      script.remove();
      resolve(ok);
    };

    const timer = window.setTimeout(() => finish(false), timeoutMs);

    script.async = true;
    script.onload = () => finish(true);
    script.onerror = () => finish(false);
    script.src = url;
    document.head.appendChild(script);
  });
}

export async function probeHosts(
  imageUrls: string[],
  scriptUrl: string | null,
  timeoutMs: number,
): Promise<boolean> {
  const probes: Promise<boolean>[] = imageUrls.map((url) => probeImage(url, timeoutMs));
  if (scriptUrl) {
    probes.push(probeScript(scriptUrl, timeoutMs));
  }
  const results = await Promise.all(probes);
  return results.every(Boolean);
}
