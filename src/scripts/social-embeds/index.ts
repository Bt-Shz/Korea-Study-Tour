/**
 * Social embed fallback detection
 *
 * - Instagram: embed.js only (no host probe); render poll 400ms, timeout 15s
 * - Twitter/X: embed iframes only (no favicon/CDN host probe); timeout 12s
 * - YouTube/Facebook: static local fallbacks so blocked regions do not show
 *   empty third-party iframe boxes
 *
 * Lazy init when panel is visible via IntersectionObserver rootMargin 400px
 */
import { setupInstagram } from './instagram';
import { setupTwitter } from './twitter';

let initialized = false;

function init(): void {
  if (initialized) return;
  initialized = true;
  setupInstagram();
  setupTwitter();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
