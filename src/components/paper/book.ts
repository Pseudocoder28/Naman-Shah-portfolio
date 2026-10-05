// The morning paper's page arithmetic, kept apart from the DOM so it can be tested. Pages sit two
// to a leaf: page 2i on the front of leaf i and page 2i + 1 on its back. A spread is how many
// leaves have been turned, from 0 (the front page alone) to the number of leaves (the back page alone).

/** The spread a page is open in: a front lies on the right of spread i, a back on the left of i + 1. */
export const spreadOf = (page: number) => (page % 2 === 0 ? page / 2 : (page + 1) / 2);

/** The pages open at a spread, left to right: the back of the last turned leaf, then the next front. */
export function openPages(spread: number, leaves: number) {
  const pages: number[] = [];
  if (spread > 0) pages.push(2 * spread - 1);
  if (spread < leaves) pages.push(2 * spread);
  return pages;
}

/**
 * How far the paper slides, in percent of its open width, so what's open sits in the middle. Closed
 * on the front page, only the right half shows; closed on the back page, only the left half.
 */
export const shift = (spread: number, leaves: number) => (spread === 0 ? -25 : spread === leaves ? 25 : 0);

/** Stacking order at rest: unturned leaves with the next one on top, turned leaves with the last one on top. */
export const depth = (leaf: number, spread: number, leaves: number) => (leaf < spread ? leaf + 1 : leaves - leaf);

/** The leaves to turn to get from one spread to another, in the order they turn. */
export function leavesBetween(from: number, to: number) {
  const leaves: number[] = [];
  if (to > from) for (let i = from; i < to; i++) leaves.push(i);
  else for (let i = from - 1; i >= to; i--) leaves.push(i);
  return leaves;
}
