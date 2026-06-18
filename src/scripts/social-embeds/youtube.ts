import { whenPlatformReady } from './panel';
import { probeUrl } from './probe';
import { toggleGroupFallback } from './toggle';

const PROBE_URL = 'https://www.youtube.com/generate_204';

export function setupYouTube(): void {
  const wrapper = document.getElementById('youtube-embeds');
  if (!wrapper) return;

  whenPlatformReady(wrapper, () => {
    void probeUrl(PROBE_URL).then((ok) => {
      toggleGroupFallback('youtube-fallback', 'youtube-embeds', !ok);
    });
  });
}
