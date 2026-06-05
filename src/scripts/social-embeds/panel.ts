import { whenVisible } from './visibility';

/**
 * Run callback only when the platform tab panel is shown and the embed wrapper
 * is near the viewport. Avoids measuring zero-size iframes inside hidden panels.
 */
export function whenPlatformReady(wrapper: HTMLElement, callback: () => void): void {
  const panel = wrapper.closest<HTMLElement>('[data-social-panel]');
  let started = false;

  const tryStart = () => {
    if (started) return;
    if (panel?.hidden) return;

    whenVisible(wrapper, () => {
      if (started) return;
      started = true;
      callback();
    });
  };

  if (!panel) {
    whenVisible(wrapper, () => {
      if (started) return;
      started = true;
      callback();
    });
    return;
  }

  tryStart();

  const observer = new MutationObserver(tryStart);
  observer.observe(panel, { attributes: true, attributeFilter: ['hidden'] });
}

/** True when the embed wrapper's platform panel is visible (if any). */
export function isPlatformPanelVisible(wrapper: HTMLElement): boolean {
  const panel = wrapper.closest<HTMLElement>('[data-social-panel]');
  return !panel?.hidden;
}
