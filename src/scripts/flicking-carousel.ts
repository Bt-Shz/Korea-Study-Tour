// Reusable photo carousel powered by @egjs/flicking, with MUI-style numbered
// pagination. Mirrors the egjs Reactive-API "Pagination" demo, ported from
// React/MUI to vanilla so it works inside Astro markdown + .astro components.
//
// Usage: drop the markup below anywhere (markdown or an .astro file) and call
// initFlickingCarousels() once after the DOM is ready.
//
//   <div class="flicking-carousel" data-flicking>
//     <div class="flicking-viewport">
//       <div class="flicking-camera">
//         <div class="flicking-panel"><img src="…" alt="" loading="lazy" /></div>
//         …
//       </div>
//     </div>
//     <nav class="flicking-pagination" aria-label="Carousel pagination"></nav>
//   </div>

import Flicking from '@egjs/flicking';

const READY = 'data-flicking-ready';

/**
 * MUI-Pagination item model: a list of page numbers interleaved with
 * 'start-ellipsis' / 'end-ellipsis' gaps, given siblingCount=1, boundaryCount=1.
 */
function paginationRange(current: number, count: number): Array<number | 'ellipsis'> {
  const boundaryCount = 1;
  const siblingCount = 1;

  // Small page counts: no ellipsis needed.
  if (count <= 7) {
    return Array.from({ length: count }, (_, i) => i + 1);
  }

  const startPages = [1];
  const endPages = [count];

  const siblingsStart = Math.max(
    Math.min(current - siblingCount, count - boundaryCount - siblingCount * 2 - 1),
    boundaryCount + 2,
  );
  const siblingsEnd = Math.min(
    Math.max(current + siblingCount, boundaryCount + siblingCount * 2 + 2),
    count - boundaryCount - 1,
  );

  const middle: Array<number> = [];
  for (let i = siblingsStart; i <= siblingsEnd; i++) middle.push(i);

  return [
    ...startPages,
    ...(siblingsStart > boundaryCount + 2 ? (['ellipsis'] as const) : siblingsStart === boundaryCount + 2 ? [boundaryCount + 1] : []),
    ...middle,
    ...(siblingsEnd < count - boundaryCount - 1 ? (['ellipsis'] as const) : siblingsEnd === count - boundaryCount - 1 ? [count - boundaryCount] : []),
    ...endPages,
  ];
}

function buildPagination(
  nav: HTMLElement,
  count: number,
  current: number,
  circular: boolean,
  onSelect: (index: number) => void,
) {
  nav.replaceChildren();

  const makeBtn = (label: string, opts: { disabled?: boolean; active?: boolean; ariaLabel?: string }) => {
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'flicking-page';
    btn.textContent = label;
    if (opts.active) {
      btn.classList.add('flicking-page--active');
      btn.setAttribute('aria-current', 'true');
    }
    if (opts.disabled) btn.disabled = true;
    btn.setAttribute('aria-label', opts.ariaLabel ?? label);
    return btn;
  };

  // Prev arrow — never disabled when the carousel loops
  const prev = makeBtn('‹', { disabled: !circular && current === 0, ariaLabel: 'Previous slide' });
  prev.classList.add('flicking-page--arrow');
  prev.addEventListener('click', () => onSelect(current - 1));
  nav.appendChild(prev);

  // Numbered pages (+ ellipses)
  for (const item of paginationRange(current + 1, count)) {
    if (item === 'ellipsis') {
      const dots = document.createElement('span');
      dots.className = 'flicking-page flicking-page--ellipsis';
      dots.textContent = '…';
      dots.setAttribute('aria-hidden', 'true');
      nav.appendChild(dots);
      continue;
    }
    const page = makeBtn(String(item), {
      active: item - 1 === current,
      ariaLabel: `Go to slide ${item}`,
    });
    page.addEventListener('click', () => onSelect(item - 1));
    nav.appendChild(page);
  }

  // Next arrow — never disabled when the carousel loops
  const next = makeBtn('›', { disabled: !circular && current === count - 1, ariaLabel: 'Next slide' });
  next.classList.add('flicking-page--arrow');
  next.addEventListener('click', () => onSelect(current + 1));
  nav.appendChild(next);
}

/** Scale + fade panels by their distance from centre for a focused-slide feel. */
function applyTween(flicking: Flicking) {
  for (const panel of flicking.panels) {
    const dist = Math.min(Math.abs(panel.progress), 1);
    const el = panel.element;
    el.style.transform = `scale(${(1 - dist * 0.16).toFixed(3)})`;
    el.style.opacity = (1 - dist * 0.5).toFixed(2);
    el.classList.toggle('flicking-panel--focused', dist < 0.5);
  }
}

export function initFlickingCarousels(root: ParentNode = document) {
  const carousels = root.querySelectorAll<HTMLElement>('.flicking-carousel[data-flicking]');

  carousels.forEach((carousel) => {
    if (carousel.hasAttribute(READY)) return;
    carousel.setAttribute(READY, '');

    const viewport = carousel.querySelector<HTMLElement>('.flicking-viewport');
    const nav = carousel.querySelector<HTMLElement>('.flicking-pagination');
    if (!viewport || !nav) return;

    // Loop only when there are enough panels to clone a seamless ring.
    // With < 3 panels we fall back to a bounded (finite) carousel so the
    // first/last arrows still make sense and Flicking doesn't warn.
    const count = viewport.querySelectorAll('.flicking-panel').length;
    const loop = count >= 3;

    const flicking = new Flicking(viewport, {
      align: 'center',
      circular: loop,
      bound: !loop,
      moveType: 'snap',
      preventDefaultOnDrag: true,
      duration: 350,
      easing: (x: number) => 1 - Math.pow(1 - x, 3),
    });

    const render = (current: number) => {
      buildPagination(nav, count, current, loop, (index) => {
        // Circular: wrap so prev-from-first / next-from-last loop around.
        // Bounded: clamp to the valid range.
        const target = loop
          ? ((index % count) + count) % count
          : Math.max(0, Math.min(count - 1, index));
        flicking.moveTo(target).catch(() => {});
      });
    };

    render(flicking.index);
    applyTween(flicking);

    // Update pagination the instant a move begins (snappy, MUI-like feedback).
    flicking.on('willChange', (e) => render(e.index));
    flicking.on('changed', (e) => render(e.index));
    flicking.on('move', () => applyTween(flicking));
    flicking.on('ready', () => applyTween(flicking));
  });
}
