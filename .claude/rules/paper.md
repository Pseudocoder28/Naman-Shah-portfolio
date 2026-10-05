---
paths:
  - "src/components/paper/**"
  - "src/pages/straight.astro"
  - "src/components/sections/SeatQuestion.astro"
  - "src/lib/seat.ts"
---

# The morning paper (/straight) and the seat question

The site has two versions of the same story. The poker table at / is the main one. Visitors who don't play poker get The Morning After at /straight: the same content printed as a morning newspaper, the day after the game.

## The seat question
- On a first visit to /, a dialog over the table asks "Do you play poker?". Yes is a hand of two cards that fans open under the pointer; choosing it drops both cards toward the table as the panel clears, then deals the hand (the seat:deal event, or data-deal="now" on the root if the motion pass hasn't loaded yet). No is a link to /straight. The answer is remembered in localStorage under "seat".
- src/lib/seat.ts decides whether to ask, and the tests in tests/paper.test.ts cover it. It never asks a visitor with a stored answer, a link to a section (any hash but #the-deal) or ?seat in the URL. The back page's link uses ?seat=poker, which stores the answer and is then removed from the URL.
- SeatQuestion.astro writes that same function into an inline script after the dialog, so the dialog opens as the page parses and the table never flashes up first. Without JavaScript it never opens.
- The footer and the palette ("Read the morning paper") link to /straight from the poker page.

## The paper
- Eight pages on four leaves: A1 front page, B1 business (experience), C1 and C2 technology (projects, two then three), D1 sports (awards as box scores), E1 community (the council), F1 classifieds (contact) and F2 the back page, which points back to the poker table. Only the paper's own words (masthead, page headlines, ads, back page) live under straight in content; everything else comes from the sections it mirrors.
- Every page is real HTML. The 3D is CSS transforms driven by GSAP, so there is no WebGL and nothing needs a fallback image.
- A bar along the top carries the name (back to the front page), Email (copies the address), GitHub, LinkedIn, Résumé and the ⌘K button. The command palette runs here too: its Navigate group lists the paper's pages and turns the book to them, and its last group goes back to the table.
- Book mode: 1100px wide and 760px tall or more, with motion allowed. Shorter screens would set the book's type under 12px, so they get the stack. The head script in straight.astro sets .book-mode before first paint so nothing shifts, and falls back to the stack if the paper's script hasn't arrived in four seconds. The paper is tossed onto the desk once, then leaves turn on the spine by dragging a page, the dog-eared corners, Back and Next, the page tabs, the front page's index or the arrow, Page Up, Page Down, Home and End keys. Only the open pages are focusable; the rest are inert. A status line announces the open pages.
- Stack mode (phones, short screens, reduced motion, no JavaScript): the sheets lie one below another, a little askew, and lie down onto the desk as they scroll in, except under reduced motion.
- Every page fits its sheet at every book-mode size. Check scrollHeight against clientHeight for each [data-sheet] at 1100x760, 1280x800, 1440x900 and 1920x1080 after any content change.
- book.ts holds the page arithmetic (which pages a spread shows, the slide, the stacking, the turn order) and is tested.
- Type: EB Garamond throughout; IBM Plex Mono only for figures and the agate box score. Ink on newsprint cream, card red for kickers and Naman's own numbers. Class names that collide with Tailwind utilities (ring, for one) draw Tailwind's styles, so avoid them.
