import { loadScriptOnce } from './load-script';
import { toggleGroupFallback } from './toggle';
import { whenPlatformReady } from './panel';

const INSTAGRAM_SCRIPT = 'https://www.instagram.com/embed.js';
const RENDER_TIMEOUT_MS = 15000;
const POLL_INTERVAL_MS = 400;

declare global {
  interface Window {
    instgrm?: { Embeds: { process: () => void } };
  }
}

function hasInstagramIframe(wrapper: HTMLElement): boolean {
  return wrapper.querySelector('.instagram-media iframe') !== null;
}

function hidePerEmbedFallbacks(wrapper: HTMLElement): void {
  wrapper.querySelectorAll<HTMLElement>('.insta-fallback').forEach((el) => {
    el.style.display = 'none';
  });
}

export function setupInstagram(): void {
  const wrapper = document.getElementById('instagram-embeds');
  if (!wrapper) return;

  const embeds = wrapper.querySelectorAll('.instagram-media');
  if (!embeds.length) return;

  let started = false;

  whenPlatformReady(wrapper, () => {
    if (started) return;
    started = true;

    let settled = false;

    const showFallback = () => {
      if (settled) return;
      settled = true;
      toggleGroupFallback('instagram-fallback', 'instagram-embeds', true);
    };

    const showEmbeds = () => {
      if (settled) return;
      settled = true;
      toggleGroupFallback('instagram-fallback', 'instagram-embeds', false);
      hidePerEmbedFallbacks(wrapper);
    };

    const pollStart = Date.now();

    const poll = window.setInterval(() => {
      if (hasInstagramIframe(wrapper)) {
        clearInterval(poll);
        clearTimeout(timeout);
        showEmbeds();
        return;
      }

      if (Date.now() - pollStart >= RENDER_TIMEOUT_MS) {
        clearInterval(poll);
        showFallback();
      }
    }, POLL_INTERVAL_MS);

    const timeout = window.setTimeout(() => {
      clearInterval(poll);
      showFallback();
    }, RENDER_TIMEOUT_MS);

    loadScriptOnce(INSTAGRAM_SCRIPT)
      .then(() => {
        window.instgrm?.Embeds.process();
      })
      .catch(() => {
        clearInterval(poll);
        clearTimeout(timeout);
        showFallback();
      });
  });
}
