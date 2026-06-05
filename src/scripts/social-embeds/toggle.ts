export function toggleGroupFallback(
  fallbackId: string,
  wrapperId: string,
  showFallback: boolean,
): void {
  const fallback = document.getElementById(fallbackId);
  const wrapper = document.getElementById(wrapperId);

  if (fallback) {
    fallback.hidden = !showFallback;
  }

  if (wrapper) {
    wrapper.hidden = showFallback;
  }
}
