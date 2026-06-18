/**
 * Social embed fallback detection
 *
 * - Instagram: embed.js only (no host probe); render poll 400ms, timeout 15s
 * - Twitter/X: host probe + iframe render check; timeout 12s
 * - YouTube/Facebook: host probe before trusting the iframe
 *
 * Lazy init when panel is visible via IntersectionObserver rootMargin 400px
 */
import { setupFacebook } from './facebook';
import { setupInstagram } from './instagram';
import { setupTwitter } from './twitter';
import { setupYouTube } from './youtube';

let initialized = false;

function init(): void {
  if (initialized) return;
  initialized = true;
  setupInstagram();
  setupTwitter();
  setupYouTube();
  setupFacebook();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
