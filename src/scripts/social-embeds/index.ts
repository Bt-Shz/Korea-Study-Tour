/**
 * Social embed fallback detection
 *
 * - Instagram: embed.js only (no host probe); render poll 400ms, timeout 15s
 * - Twitter/X: embed iframes only (no favicon/CDN host probe); timeout 12s
 * - YouTube/Facebook: native iframes; fallback only on iframe error
 *
 * Lazy init when panel is visible via IntersectionObserver rootMargin 400px
 */
import { setupInstagram } from './instagram';
import { setupTwitter } from './twitter';
import { toggleGroupFallback } from './toggle';

let initialized = false;

function init(): void {
  if (initialized) return;
  initialized = true;
  setupInstagram();
  setupTwitter();
  setupNativeIframeFallbacks();
}

function setupNativeIframeFallbacks(): void {
  document
    .querySelectorAll<HTMLIFrameElement>('iframe[data-fallback-target][data-embed-wrapper]')
    .forEach((iframe) => {
      iframe.addEventListener(
        'error',
        () => {
          const fallbackId = iframe.dataset.fallbackTarget;
          const wrapperId = iframe.dataset.embedWrapper;
          if (!fallbackId || !wrapperId) return;
          toggleGroupFallback(fallbackId, wrapperId, true);
        },
        { once: true },
      );
    });
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
