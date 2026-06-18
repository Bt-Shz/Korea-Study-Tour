import { whenPlatformReady } from './panel';
import { probeUrl } from './probe';
import { toggleGroupFallback } from './toggle';

const PROBE_URL = 'https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FCityU.CS&tabs=timeline&width=500&height=640&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true';

export function setupFacebook(): void {
  const wrapper = document.getElementById('fb-embeds');
  if (!wrapper) return;

  whenPlatformReady(wrapper, () => {
    void probeUrl(PROBE_URL).then((ok) => {
      toggleGroupFallback('fb-fallback', 'fb-embeds', !ok);
    });
  });
}
