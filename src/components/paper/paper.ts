// The morning paper's motion. On a wide screen with motion allowed, the head script has already set
// .book-mode, so the paper is a book: leaves turn on their spine by drag, by the dog-eared corners,
// by the arrow keys and from the page tabs. Everywhere else the sheets stack and only settle onto
// the desk as they scroll in.
import { gsap } from 'gsap';
import { depth, leavesBetween, openPages, shift, spreadOf } from './book';

const root = document.documentElement;
const book = document.querySelector<HTMLElement>('[data-book]');
const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;

if (book && root.classList.contains('book-mode')) openBook(book);
else if (book && !reduce) settleSheets(book);

function openBook(book: HTMLElement) {
  const paper = book.querySelector<HTMLElement>('[data-paper]')!;
  const leaves = [...book.querySelectorAll<HTMLElement>('[data-leaf]')];
  const sheets = [...book.querySelectorAll<HTMLElement>('[data-sheet]')];
  const controls = book.querySelector<HTMLElement>('[data-controls]')!;
  const status = book.querySelector<HTMLElement>('[data-status]')!;
  const count = leaves.length;
  const TURN = 0.9;
  let spread = 0;
  let turning: gsap.core.Timeline | undefined;

  // The paper takes over its transform from the stylesheet, which drew it closed on the front page.
  gsap.set(paper, { x: 0, xPercent: shift(0, count), rotationX: 4 });
  controls.hidden = false;
  for (const corner of book.querySelectorAll<HTMLElement>('.corner')) corner.hidden = false;

  // A leaf darkens toward its fold as it lifts, most when it stands upright.
  const lift = (leaf: HTMLElement) => () => {
    const angle = Math.abs(gsap.getProperty(leaf, 'rotationY') as number);
    leaf.style.setProperty('--lift', String(Math.sin((angle / 180) * Math.PI)));
  };

  // Only the open pages take focus and reach screen readers. The rest are inert until they turn up.
  const announce = () => {
    const open = openPages(spread, count);
    sheets.forEach((sheet, i) => {
      const shown = open.includes(i);
      sheet.inert = !shown;
      sheet.toggleAttribute('aria-hidden', !shown);
    });
    for (const button of controls.querySelectorAll<HTMLElement>('[data-goto]'))
      button.setAttribute('aria-current', String(open.includes(Number(button.dataset.goto))));
    for (const step of controls.querySelectorAll<HTMLButtonElement>('.step'))
      step.disabled = step.dataset.turn === '1' ? spread === count : spread === 0;
    status.textContent = `Showing ${open.map((i) => sheets[i].querySelector('.page-foot')?.textContent).join(' and ')}`;
  };

  const rest = () => leaves.forEach((leaf, i) => (leaf.style.zIndex = String(depth(i, spread, count))));

  function go(target: number) {
    target = gsap.utils.clamp(0, count, target);
    if (target === spread) return;
    const order = leavesBetween(spread, target);
    const forward = target > spread;
    turning?.progress(1);
    spread = target;
    announce();
    turning = gsap.timeline({ onComplete: rest });
    order.forEach((i, k) => {
      // Each leaf rides over the one before it, so a run of pages fans across the spine.
      turning!
        .set(leaves[i], { zIndex: count + 10 + k }, k * 0.12)
        .to(leaves[i], { rotationY: forward ? -180 : 0, duration: TURN, ease: 'power2.inOut', onUpdate: lift(leaves[i]) }, k * 0.12);
    });
    turning.to(paper, { xPercent: shift(target, count), duration: TURN, ease: 'power2.inOut' }, 0);
  }

  // Corners and the Back and Next buttons turn one page; the tabs and the front page's index jump.
  book.addEventListener('click', (event) => {
    const target = event.target as Element;
    const turn = target.closest<HTMLElement>('[data-turn]');
    const tab = target.closest<HTMLElement>('[data-goto]');
    const link = target.closest<HTMLAnchorElement>('a[href^="#p-"]');
    if (turn) go(spread + Number(turn.dataset.turn));
    else if (tab) go(spreadOf(Number(tab.dataset.goto)));
    else if (link) {
      event.preventDefault();
      go(spreadOf(sheets.findIndex((sheet) => `#${sheet.id}` === link.hash)));
    }
  });

  // The bar's name goes back to the front page, and the palette turns to any page it's asked for.
  document.querySelector('[data-front]')?.addEventListener('click', (event) => {
    event.preventDefault();
    go(0);
  });
  document.addEventListener('palette:go', (event) => {
    const page = sheets.findIndex((sheet) => sheet.id === (event as CustomEvent<string>).detail);
    if (page < 0) return;
    event.preventDefault();
    go(spreadOf(page));
    const heading = sheets[page].querySelector<HTMLElement>('h1, h2');
    if (!heading) return;
    heading.tabIndex = -1;
    heading.focus({ preventScroll: true });
  });

  addEventListener('keydown', (event) => {
    if (event.altKey || event.metaKey || event.ctrlKey || (event.target as Element).closest('input, textarea, select')) return;
    const step = { ArrowRight: 1, PageDown: 1, ArrowLeft: -1, PageUp: -1 }[event.key];
    if (step) go(spread + step);
    else if (event.key === 'Home') go(0);
    else if (event.key === 'End') go(count);
    else return;
    event.preventDefault();
  });

  // Dragging a page across the spine turns it, following the pointer. Let go past a third of the
  // way, or with a flick, and it finishes; otherwise it falls back. Links and buttons still click.
  let drag: { leaf: HTMLElement; index: number; forward: boolean; x: number; t: number; angle: number } | undefined;
  let dragged = false;
  paper.addEventListener('pointerdown', (event) => {
    const sheet = (event.target as Element).closest<HTMLElement>('[data-sheet]');
    if (event.button !== 0 || !sheet || (event.target as Element).closest('a, button')) return;
    // A front page lies on the right and turns forward; a back page lies on the left and turns back.
    const page = sheets.indexOf(sheet);
    const forward = page % 2 === 0;
    const index = Math.floor(page / 2);
    turning?.progress(1);
    drag = { leaf: leaves[index], index, forward, x: event.clientX, t: performance.now(), angle: 0 };
    dragged = false;
  });
  addEventListener('pointermove', (event) => {
    if (!drag) return;
    const dx = event.clientX - drag.x;
    if (!dragged && Math.abs(dx) < 8) return;
    if (!dragged) {
      dragged = true;
      root.classList.add('dragging');
      drag.leaf.style.zIndex = String(count + 20);
    }
    const width = paper.getBoundingClientRect().width / 2;
    drag.angle = gsap.utils.clamp(0, 180, ((drag.forward ? -dx : dx) / width) * 180);
    gsap.set(drag.leaf, { rotationY: drag.forward ? -drag.angle : -180 + drag.angle });
    lift(drag.leaf)();
  });
  addEventListener('pointerup', (event) => {
    if (!drag) return;
    const { leaf, forward, angle, x, t } = drag;
    drag = undefined;
    root.classList.remove('dragging');
    if (!dragged) return;
    const speed = Math.abs(event.clientX - x) / (performance.now() - t);
    if (angle > 60 || speed > 0.8) go(spread + (forward ? 1 : -1));
    else gsap.to(leaf, { rotationY: forward ? 0 : -180, duration: 0.5, ease: 'power3.out', onUpdate: lift(leaf), onComplete: rest });
  });
  // A drag ends in a click on whatever was under the pointer. That click isn't a choice.
  paper.addEventListener('click', (event) => dragged && (event.stopPropagation(), (dragged = false)), true);

  // The paper leans a touch toward the pointer, as if picked up to read.
  const tiltX = gsap.quickTo(paper, 'rotationX', { duration: 1.2, ease: 'power3.out' });
  const tiltY = gsap.quickTo(paper, 'rotationY', { duration: 1.2, ease: 'power3.out' });
  addEventListener('pointermove', (event) => {
    if (drag) return;
    tiltX(4 - (event.clientY / innerHeight - 0.5) * 3);
    tiltY((event.clientX / innerWidth - 0.5) * 4);
  });

  announce();

  // The one orchestrated moment: the paper is tossed onto the desk and settles.
  gsap.from(paper, { y: -90, rotationX: 38, rotationZ: -5, scale: 0.94, duration: 1.2, ease: 'power3.out' });
  gsap.from(book.querySelector('.chips'), { autoAlpha: 0, y: 12, duration: 0.6, delay: 0.7, ease: 'power3.out' });
  root.classList.remove('intro');
  root.classList.add('book-ready');
}

// Stacked sheets lie down onto the desk as they scroll into view. Sheets already on screen stay put.
async function settleSheets(book: HTMLElement) {
  const { ScrollTrigger } = await import('gsap/ScrollTrigger');
  gsap.registerPlugin(ScrollTrigger);
  for (const sheet of book.querySelectorAll<HTMLElement>('[data-sheet]')) {
    if (sheet.getBoundingClientRect().top < innerHeight) continue;
    gsap.from(sheet, {
      rotationX: 14,
      y: 40,
      autoAlpha: 0,
      transformPerspective: 1200,
      transformOrigin: '50% 100%',
      duration: 0.9,
      ease: 'power3.out',
      scrollTrigger: { trigger: sheet, start: 'top 90%', once: true },
    });
  }
}
