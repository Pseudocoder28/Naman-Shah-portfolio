import { expect, test } from 'vitest';
import { depth, leavesBetween, openPages, shift, spreadOf } from '../src/components/paper/book';
import { backToQuestion, shouldAsk } from '../src/lib/seat';

// Eight pages on four leaves, as the morning paper prints them.
const LEAVES = 4;

test('opens the front page alone, then facing pairs, then the back page alone', () => {
  expect(openPages(0, LEAVES)).toEqual([0]);
  expect(openPages(1, LEAVES)).toEqual([1, 2]);
  expect(openPages(3, LEAVES)).toEqual([5, 6]);
  expect(openPages(4, LEAVES)).toEqual([7]);
});

test('finds the spread every page is open in', () => {
  for (let page = 0; page < 2 * LEAVES; page++) expect(openPages(spreadOf(page), LEAVES)).toContain(page);
});

test('slides a closed paper so its one page sits in the middle', () => {
  expect(shift(0, LEAVES)).toBe(-25);
  expect(shift(2, LEAVES)).toBe(0);
  expect(shift(4, LEAVES)).toBe(25);
});

test('stacks the leaf about to turn on top of each pile', () => {
  // At spread 2, leaf 1 was turned last and leaf 2 turns next.
  const z = [0, 1, 2, 3].map((leaf) => depth(leaf, 2, LEAVES));
  expect(z[1]).toBeGreaterThan(z[0]);
  expect(z[2]).toBeGreaterThan(z[3]);
});

test('turns leaves forward in order and back in reverse', () => {
  expect(leavesBetween(0, 3)).toEqual([0, 1, 2]);
  expect(leavesBetween(3, 1)).toEqual([2, 1]);
  expect(leavesBetween(2, 2)).toEqual([]);
});

test('asks on every load, refreshes and section links included', () => {
  expect(shouldAsk({ search: '' })).toBe(true);
  expect(shouldAsk({ search: '', navigation: 'navigate' })).toBe(true);
  expect(shouldAsk({ search: '', navigation: 'reload' })).toBe(true);
});

test("doesn't ask on the way back or when the link already answers", () => {
  expect(shouldAsk({ search: '', navigation: 'back_forward' })).toBe(false);
  expect(shouldAsk({ search: '?seat=poker', navigation: 'navigate' })).toBe(false);
});

test('sends a refreshed paper back to the question, and nothing else', () => {
  expect(backToQuestion('reload')).toBe(true);
  expect(backToQuestion('navigate')).toBe(false);
  expect(backToQuestion('back_forward')).toBe(false);
  expect(backToQuestion(undefined)).toBe(false);
});
