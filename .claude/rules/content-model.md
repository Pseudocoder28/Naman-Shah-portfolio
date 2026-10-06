---
paths:
  - "content.md"
  - "src/content/**"
---

# Content model

content.md is the source Naman edits. src/content mirrors it as typed data validated with zod. When they disagree, content.md wins: update src/content to match and never the other way round. A missing field renders nothing. Never fill a gap with invented text.

- site: name, tagline, title, description, email, github, linkedin, resumePath (public/resume.pdf), url
- player: blurb (three sentences at most), stats (label, value, optional note; four at most, only numbers Naman can defend), education (school, program, place, dates) and skills (group and items), shown in The Player and the morning paper's profile
- hand: hole (exactly two cards written like "As" and "Ks"), used by the equity readout
- experience: company, role, start, end, location, result (one sentence), hook (one line with numbers, the morning paper's fact for the job), details (up to three bullets), tags, suit
- board: exactly five projects, each with street (flop, flop, flop, turn, river), card (rank and suit, like "Qh"), name, pitch (one line), metric (one number with its unit), stack (tags), links (label and href) and details (markdown for the project sheet)
- cashes (awards in profile.json): name, full (the contest's full name, or what it is when the name says nothing, shown on the ticket so nobody needs to know the acronym), year, result (the score or rank), note (one short sentence), about (what the contest is), stats (label and value, from the source only), source (label and https href); biggest first, so a reader who stops after one sees the best one
- table: org, role, dates, summary, teams (name and an optional member count; give every team a count or none, and never invent one), highlights (a short title and what happened, in Naman's words), lesson (one or two sentences) and hook (one line with numbers, the morning paper's fact for the council)
- showdown: one inviting sentence
- drawing: the line under Hand History's suit legend while some suits have no card yet, and its link label
- straight: the morning paper's own words: masthead, motto, place, price, the eight pages (id, label, name, optional headline and deck), the classified ads (title, body, the contacts they link to), the back page (body, link label, photo caption), the seat question (question, note, yes, no) and the footer line on the poker page

The build must fail with a clear message when:
- the board doesn't have exactly three flop cards, one turn and one river
- the seven cards (hole plus board) aren't all valid and distinct
- a link isn't https or mailto
- an experience suit isn't one of spades, hearts, diamonds, clubs

Suits in Hand History mean something. Spades: quant and trading. Hearts: product and full-stack. Diamonds: data and research. Clubs: infrastructure. Show a small legend once.
