const DEFAULT_TIMEOUT_MS = 4000;

export async function probeUrl(url: string, timeoutMs = DEFAULT_TIMEOUT_MS): Promise<boolean> {
  const controller = new AbortController();
  const timeout = window.setTimeout(() => controller.abort(), timeoutMs);

  try {
    await fetch(url, {
      cache: 'no-store',
      mode: 'no-cors',
      signal: controller.signal,
    });
    return true;
  } catch {
    return false;
  } finally {
    window.clearTimeout(timeout);
  }
}
