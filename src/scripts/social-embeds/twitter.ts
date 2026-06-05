import { isPlatformPanelVisible, whenPlatformReady } from './panel';
import { toggleGroupFallback } from './toggle';

const RENDER_TIMEOUT_MS = 12000;
const MIN_IFRAME_SIZE = 120;
const POLL_INTERVAL_MS = 500;

function iframeRendered(iframe: HTMLIFrameElement): boolean {
  const rect = iframe.getBoundingClientRect();
  return rect.width >= MIN_IFRAME_SIZE && rect.height >= MIN_IFRAME_SIZE;
}

function countRendered(iframes: HTMLIFrameElement[]): number {
  return iframes.filter(iframeRendered).length;
}

export function setupTwitter(): void {
  const wrapper = document.getElementById('twitter-embeds');
  if (!wrapper) return;

  const iframes = Array.from(wrapper.querySelectorAll<HTMLIFrameElement>('.twitter-iframe'));
  if (!iframes.length) return;

  whenPlatformReady(wrapper, () => {
    let settled = false;
    let timeoutId = 0;
    let pollId = 0;

    const clearWatchers = () => {
      window.clearTimeout(timeoutId);
      window.clearInterval(pollId);
    };

    const showFallback = () => {
      if (settled) return;
      settled = true;
      clearWatchers();
      toggleGroupFallback('twitter-fallback', 'twitter-embeds', true);
    };

    const showEmbeds = () => {
      if (settled) return;
      settled = true;
      clearWatchers();
      toggleGroupFallback('twitter-fallback', 'twitter-embeds', false);
    };

    const evaluate = () => {
      if (settled || !isPlatformPanelVisible(wrapper)) return;

      if (countRendered(iframes) > 0) {
        showEmbeds();
      }
    };

    timeoutId = window.setTimeout(() => {
      if (settled) return;
      if (countRendered(iframes) > 0) {
        showEmbeds();
      } else {
        showFallback();
      }
    }, RENDER_TIMEOUT_MS);

    iframes.forEach((iframe) => {
      iframe.addEventListener('load', evaluate);
    });

    pollId = window.setInterval(evaluate, POLL_INTERVAL_MS);
    evaluate();
  });
}
