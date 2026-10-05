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
- On a first visit to /, a dialog over the table asks "Do you play poker?". Yes is a hand of two cards that fans open under the pointer; choosing it drops both cards toward the table as the panel clears, then deals the hand (the seat:deal event, or data-deal="now" on the root if the motion pass hasn't loaded yet). No is a link to /straight. It asks on every load of /, refreshes included; nothing is remembered.
- src/lib/seat.ts decides whether to ask, and the tests in tests/paper.test.ts cover it. It asks unless the visitor came back with the back or forward button, or the link carries ?seat (the paper's "Take a seat at the table" uses ?seat=poker), which is then removed from the URL so a refresh asks again.
- Refreshing /straight sends the visitor back to / and its question, from an inline head script before anything paints (backToQuestion in seat.ts). Arriving at /straight any other way, including a typed or shared link, stays on the paper.
- SeatQuestion.astro writes that same function into an inline script after the dialog, so the dialog opens as the page parses and the table never flashes up first. Without JavaScript it never opens.
- The footer and the palette ("Read the morning paper") link to /straight from the poker page.

## The paper
- Eight pages on four leaves: A1 front page, B1 business (experience), C1 and C2 technology (projects, two then three), D1 education (the schools, then the contests as an agate box score), E1 community (the council), F1 classifieds (contact) and F2 the back page, which points back to the poker table. Only the paper's own words (masthead, page headlines, ads, back page) live under straight in content; everything else comes from the sections it mirrors.
- Every page is real HTML. The 3D is CSS transforms driven by GSAP, so there is no WebGL and nothing needs a fallback image.
- A bar along the top carries the name (back to the front page), Email (copies the address), GitHub, LinkedIn, Résumé and the ⌘K button. The command palette runs here too: its Navigate group lists the paper's pages and turns the book to them, and its last group goes back to the table.
- Book mode: 1200px wide and 800px tall or more, with motion allowed. Each page is 0.88 as wide as it's tall and as tall as the desk allows, and its type is set from that height, from a 15px floor to 22px on a big screen (about 18.6px at 1440x900). Below 1200x800 the pages can't hold their stories at that floor, so smaller screens get the stack, whose type runs from 16px on a phone to 19px on a laptop. The head script in straight.astro sets .book-mode before first paint so nothing shifts, and falls back to the stack if the paper's script hasn't arrived in four seconds. The paper is tossed onto the desk once, then leaves turn on the spine by dragging a page, the dog-eared corners, Back and Next, the page tabs, the front page's index or the arrow, Page Up, Page Down, Home and End keys. Only the open pages are focusable; the rest are inert. A status line announces the open pages.
- Stack mode (phones, short screens, reduced motion, no JavaScript): the sheets lie one below another, a little askew, and lie down onto the desk as they scroll in, except under reduced motion.
- Every page fits its sheet at every book-mode size. Check scrollHeight against clientHeight for each [data-sheet] at 1200x800, 1280x800, 1536x864, 1440x900 and 1920x1080 after any content change.
- book.ts holds the page arithmetic (which pages a spread shows, the slide, the stacking, the turn order) and is tested.
- Stories are short on the page: a headline, one line and one fact with a number (the job's hook, the project's metric), in card red, plus a "Read the full story" button: an ink pill with an arrow, red and nudged forward under the pointer, so nobody misses that there's more. Contest names in the box score carry a red arrow for the same reason. Clicking a story, or that link, lifts the full story into the reading lens: a modal dialog that rises from where the story lay, tipping toward the reader, at 17 to 21px. It holds more than the page: a job's every point as bullets with its tools as chips; a project's README-sourced write-up with its numbers, stack and links; the profile's blurb, roles, every stat with its note, education and skills. Close, Esc or a click on the desk puts it back, and focus returns to the story. The full story lives in a details element under the short one, so without JavaScript it opens in place. Contest rows in the box score open their contest (what it is, every published figure and the source) the same way; without JavaScript a details element under the table lists them all.
- The front page stands alone: the name, the tagline, the roles, every stat (the figures three across with their notes, and a date stat like Graduating on one line above them), and the index of pages in two columns. The bar above carries the contacts, and the profile opens in the lens.
- Type: three styles throughout (headlines, body and small grey), one column, no italics. EB Garamond throughout; IBM Plex Mono only for figures and the agate box score. Ink on newsprint cream, card red for kickers and Naman's own numbers. Class names that collide with Tailwind utilities (ring, for one) draw Tailwind's styles, so avoid them.
