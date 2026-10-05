// When the poker page asks a visitor whether they play. It asks on every load, refreshes included,
// except a return through the back or forward button, which goes back to where they were, and a
// link that already carries the answer as ?seat (the paper's "Take a seat at the table").
export function shouldAsk({ search, navigation }: { search: string; navigation?: string }) {
  if (navigation === 'back_forward') return false;
  return !new URLSearchParams(search).has('seat');
}

/** Whether the paper sends a visitor back to the question: whenever it's refreshed. */
export const backToQuestion = (navigation?: string) => navigation === 'reload';
