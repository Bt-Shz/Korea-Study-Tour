export function whenVisible(target: Element, callback: () => void): void {
  if (!('IntersectionObserver' in window)) {
    callback();
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          observer.disconnect();
          callback();
          break;
        }
      }
    },
    { rootMargin: '400px 0px' },
  );

  observer.observe(target);
}
