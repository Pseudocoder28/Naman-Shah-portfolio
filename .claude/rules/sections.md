---
paths:
  - "src/components/sections/**"
  - "src/components/nav/**"
---

# Nav and sections

Everything here is HTML and CSS with GSAP. The 3D stage adds depth behind it, but nothing here depends on the stage.

## Nav
- Left: "Naman" in EB Garamond, linking to the top. From 1024px wide the stage's chip riffle sits beside it, in a slot that holds its size from the first paint.
- Right: Hand History, The Board, Showdown, a folded-newspaper icon to the morning paper at /straight (from 640px wide; the phone sheet lists The Morning After instead), a Résumé button, a ⌘K button (Ctrl K on Windows and Linux) and, in phase 3, a sound toggle.
- Transparent over the hero. After the hero it sits on rail #3A3329 at 90% opacity with a light backdrop blur.
- Under 768px the links move into a sheet opened by a menu button. The Résumé button stays visible.
- There is no login and no sign up.

## The Deal (hero)
- Full viewport height. A left-aligned copy block over the room: the name as the display heading, the tagline, then two buttons: "View the hand" (scrolls to The Player) and "Résumé" (opens the PDF in a new tab). Under them lies a folded morning paper, a little askew with a corner turned down: the masthead and "Not a card player? The same story, in plain print.", a link to /straight that straightens and lifts under the pointer.
- The deal waits for the visitor: a "Deal the hand" button over the table, or a click anywhere on the table that isn't a link or a button. On the static tier the same button deals the 2D hand instead. Then the camera pushes in for the spring, and the two hole cards land face down at the player's seat, one on the other, as the camera drops to the player's view.
- The hole cards wait face down. While the pointer is over them, their near ends lift together to show both indices, and they lie back down when it leaves. A "Show the hand" button takes the deal button's place: hovering or focusing it lifts them the same way, and it, or a click anywhere that isn't on a control, spreads them and turns them face up. Keyboard focus moves to "View the hand" when the button goes. The board's streets deal whether or not the hand is face up.
- A quiet scroll cue at the bottom: a thin brass line that grows downward and disappears after the first scroll.
- Static tier (phones, reduced motion, a lost context): the still plate with the copy block, and the same two buttons deal a 2D hand over the table: two cards dealt in face down, then turned face up with a 2D flip. Under reduced motion both steps are a 150ms fade. Without JavaScript the 2D hand lies face up.

## The Player (about)
- A cream panel with ink text laid over the felt, as in the reference frames: the heading, the three-sentence blurb, then education (school, program, place and dates) and skills (each group with its items as small outlined tags) under it, with the stats panel beside them.
- The stats panel is a brass-framed panel #363430 in IBM Plex Mono with up to four rows, label on the left and value on the right. Values count up once when the panel enters the viewport. Under reduced motion they appear at their final value.
- Phase 2: a small toggle on the panel opens the performance HUD.

## Hand History (experience)
- One playing card per role, dealt left to right in a row on desktop and in a horizontal scroll-snap row on phones.
- Face: the suit from content in the corners, then company, role, dates and the one-sentence result.
- Activating a card (click, Enter or Space) flips it to the back, which lists the details and tags. Each card is a button with aria-expanded, and the back content is in the DOM.
- A one-line suit legend sits under the row. Suits no card holds yet show as open seats, a dashed outline round their meaning, and while any are open the drawing line from content follows, with its "Deal me in" link to the email address.

## The Board (projects)
- Five cards laid out as a real board: three for the flop, a small gap, the turn, a small gap, the river. Street names (Flop, Turn, River) sit above in small EB Garamond.
- The board starts empty, each card's place a faint brass outline. The equity readout's button deals the flop, then the turn, then the river, each street preceded by a burn card that slides off to the side. Under reduced motion, or if the board is already in view when the motion pass runs, it starts fully dealt.
- Face: rank and suit from content in the corners, the project name, the one-line pitch, the metric and stack tags.
- Activating a card opens the project sheet: an accessible dialog on a cream panel with the details markdown, the stack and the links.
- The equity readout sits under the board, as one strip on a wide screen, and updates as each street lands.
- Phones (under 768px) also get the board at a glance, since the row of full cards only ever shows one and a half at a time: all five cards small in one row under their street names, face down until their street is dealt, then turned over with a 2D flip. The readout and its deal button sit right under them, so a deal and its equity share the screen, and the full cards follow under the readout as the swipeable row, dealt the same way. motion.ts measures the section, not the row, to decide whether the board starts dealt.
- The project sheet shows the metric in card red under the pitch.

## The Cashes (awards)
- Between The Board and The Table: the hand's winnings so far. One cream ticket per award in a grid, biggest first.
- Each ticket: the year on a stub behind a brass perforation, then the contest name, the result in card red, the optional note and "See the field".
- Activating a ticket opens a sheet like The Board's: an accessible dialog on a cream panel with what the contest is, the field's official numbers (Naman's own result first, in card red) and a link to the source. Only numbers the source publishes go in, so no invented medians or percentiles.
- Reachable from the palette. It stays out of the nav, which has no room for a fourth link at 768px.

## The Table (leadership)
- The student council story on the left: org, role, dates and the summary.
- On the right, one chip stack per committee, each labeled with its name in HTML. With member counts for every team the heights are proportional and the counts show; without them every stack stands the same height and no count shows. The stacks become 3D in phase 2 and can be flicked in phase 3.

## Showdown (contact)
- The heading, the inviting sentence from content, then four large chips as buttons: Email (copies the address and shows "Email copied"), GitHub, LinkedIn and Résumé.
- A hint below: "Press ⌘K for everything else" (Ctrl K on Windows and Linux).
- The footer follows, with a link to the morning paper at /straight for visitors who don't play.

## The seat question
- A first visit asks "Do you play poker?" in a dialog over the hero. See .claude/rules/paper.md.
