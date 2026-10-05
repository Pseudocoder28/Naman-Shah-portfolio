// Whether the poker page asks a visitor if they play. Only on a first visit that lands on the top
// of the page: a link to a section, a seat already taken or ?seat in the URL skips the question.
export type Seat = 'poker' | 'straight';

export function shouldAsk({ stored, hash, search }: { stored: string | null; hash: string; search: string }) {
  if (stored === 'poker' || stored === 'straight') return false;
  if (hash && hash !== '#' && hash !== '#the-deal') return false;
  return !new URLSearchParams(search).has('seat');
}
