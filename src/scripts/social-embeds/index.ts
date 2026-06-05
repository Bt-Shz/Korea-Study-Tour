/**
 * Social embed fallback detection
 *
 * - Instagram: embed.js only (no host probe); render poll 400ms, timeout 15s
 * - Twitter/X: embed iframes only (no favicon/CDN host probe); timeout 12s
 * - Facebook: post plugin iframes only (no connect.facebook.net probe — Pixel
 *   scripts are unrelated and often blocked while embeds still work); timeout 12s
 *
 * Lazy init when panel is visible via IntersectionObserver rootMargin 400px
 */
import { setupFacebook } from './facebook';
import { setupInstagram } from './instagram';
import { setupTwitter } from './twitter';

let initialized = false;

function init(): void {
  if (initialized) return;
  initialized = true;
  setupInstagram();
  setupTwitter();
  setupFacebook();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
