# content.md

The single source of every word on the site. Replace each TODO, delete any line you don't want shown and keep only numbers you'd defend in an interview. Never put a phone number here: the page is public.

## site
- name: Naman Shah
- tagline: First-year Computer Science at Waterloo. I build the data pipelines, backtesters and market tools that quant work runs on.
- title: Naman Shah | Quant development and software engineering
- description: Naman Shah is a first-year Computer Science student at Waterloo who builds data pipelines, backtesters and market tools for quant work.
- email: n45shah@uwaterloo.ca
- github: https://github.com/Pseudocoder28
- linkedin: https://www.linkedin.com/in/namanshah2008
- resumePath: /resume.pdf
- url: https://naman-shah-portfolio.vercel.app

## player
- blurb (three sentences at most): I'm a first-year Computer Science co-op student at Waterloo. Most of what I build sits between data and markets: the data pipeline and backtester the UW Stocks Club does its research on, and Cross-Book, which works out what a Kalshi and Polymarket price gap is really worth after fees and depth. I'm looking for a quant development or software engineering co-op.
- stats (four at most, each with an optional note in plain words):
  - Graduating: May 2031
  - Grade 12 board exams: 99.25% (note: ISC, India: top of the state and 4th in the country)
  - Euclid 2026: 94/100 (note: Waterloo's math contest: top 50 of almost 24,000)
  - Student council led: 75 members (note: Representing more than 2,000 students)

## hand
- hole: 7h 2s

## experience
Suits: spades for quant and trading, hearts for product and full-stack, diamonds for data and research, clubs for infrastructure.

### UW Stocks Club
- role: Quantitative Developer
- start: Apr 2026
- end: present
- location: Waterloo, Canada
- result: Built the data pipeline that is the core data infrastructure for all of the club's research.
- details:
  - Ingests daily OHLCV bars, corporate actions and fundamentals for 1,000+ US equities through the LSEG API into a Parquet store, with automated checks for missing data, split and dividend adjustments and survivorship bias.
  - Developed a performance attribution engine that splits returns into sector, factor and security selection effects with Brinson-Fachler attribution and multi-factor regression, plus ex-ante and ex-post risk metrics across every systematic strategy.
  - Designed an event-driven backtesting engine that simulates 20 years of history across 1,000+ tickers, modelling transaction costs, slippage and point-in-time data to prevent lookahead bias.
- tags: Python, LSEG API, Parquet, Pandas
- suit: spades

### Agropac Pvt Ltd
- role: Software Engineer
- start: Apr 2025
- end: Jun 2025
- location: India
- result: Built backend services in Java and Spring for an in-house ERP covering inventory, orders and invoicing, procurement, production and the sales pipeline.
- details:
  - Owned authentication and role-based authorization across multiple sites, so each user reached only the records their role allowed.
  - Built an internal LLM assistant using RAG over the ERP's data, letting executives ask about inventory, invoicing, procurement, production, HR and sales in plain English.
- tags: Java, Spring, RAG, LLM
- suit: hearts

## drawing
Shown under the suit legend while some suits have no card yet. Rewrite it once every suit is in the hand.
- line: Two suits down, two to draw. If your team works in data, research or infrastructure, you're holding the diamonds and clubs I'm missing.
- cta (a link to the email address): Deal me in

## board
Exactly five projects: three on the flop, one on the turn and one on the river. The two hole cards plus these five must all be different. The cards tell a story: seven-deuce offsuit, the worst starting hand in poker, pairs its seven on the flop, makes two pair on the turn and fills up on the river.

### flop: Kc
- name: Cross-Book
- pitch: Cross-venue arbitrage measurement for Kalshi and Polymarket US: fee-exact, depth-aware price gaps from live order books.
- metric: TODO (one number with its unit, only once the README states one)
- stack: Python, asyncio, WebSockets, Pandas, Plotly
- links:
  - GitHub: https://github.com/Pseudocoder28/Cross-Book
- details: The gap between two best prices isn't an edge. Cross-Book walks both order books level by level, charges each venue's taker fee on every fill and stops at the first fill that doesn't pay for itself. One normalized order book serves both venues, a recorder stores every message before it's parsed, and a recorded run replays through the same code. It measures and paper-trades only: no code in it can place an order.

### flop: Qd
- name: Blurr
- pitch: Real-time video redaction that blurs documents, ID cards, bystanders and on-screen text out of a live call, frame by frame.
- stack: Python, FastAPI, aiortc, OpenCV, YOLOv8, React, TypeScript, Firebase
- links:
  - GitHub: https://github.com/Pseudocoder28/Blur
- details: The camera feed streams over WebRTC to a FastAPI and aiortc server, which finds text-shaped regions with an OpenCV pipeline and cards, documents and other people with YOLOv8, then blurs them. Only the blurred video goes on to the other caller, and it's the same video you see in your own preview. Detection runs in a background thread on every second frame so the stream stays real time.

### flop: 7d
- name: Fast Flag
- pitch: An AI race control assistant that spots a crash the moment it happens and recommends the flag. Built at FormulaTech Hacks 2026.
- metric: Safety Car called in 1.0 s, against race control's 28.3 s
- stack: Python, FastF1, IsolationForest, LightGBM
- links:
  - GitHub: https://github.com/Pseudocoder28/Fast-Flag
- details: It replays historical FastF1 data tick by tick and never sees the future. Detectors, an anomaly model and a crash-risk model feed a rules engine that makes the flag call with a reason a steward can check. On a race the models never saw, the 2026 Azerbaijan GP, its median crash-to-Safety-Car call was 1.0 s against race control's 28.3 s, and it caught 7 of 10 incidents at 0.6 false alarms per race hour.

### turn: 2c
- name: Investing Made Easy
- pitch: An ETF portfolio tool that matches a non-technical investor's goals and risk answers to an ETF, with a performance dashboard.
- stack: Python, Pandas, FinQuant, Plotly, Panel
- links:
  - GitHub: https://github.com/Pseudocoder28/Investing-made-easy
- details: A short questionnaire builds the investor's risk profile and sector preferences. ETF data from the FinQuant and EOD APIs is cleaned and matched to that profile, and a dashboard shows the chosen ETF's top holdings, sector and region split, returns by period and prices against its top ten constituents.

### river: 7c
- name: LooLoop
- pitch: Helps new university students find nearby events by voice or questionnaire and join event circles with people going too.
- stack: JavaScript, Node.js, Express, Supabase
- links:
  - GitHub: https://github.com/Saarthi09/LooLoop
- details: Students say what they want, answer a short questionnaire or browse everything. Events from Ticketmaster, the University of Waterloo and WUSA are filtered by interests, time, budget and travel distance, and signed-in students join a circle for each event through Supabase Auth. I'm the top contributor, with 21 of the project's 31 commits.

## cashes
Awards and competition results, newest and biggest first. Each ticket opens a sheet with what the contest is and the field's official numbers. Only numbers from the linked source go in; contests publish means and cutoffs, not medians, so there are none.

### ISC grade 12, 2026: 99.25%. State topper and 4th in India.
- about: The Indian School Certificate exams at the end of grade 12, set by India's CISCE board.
- stats:
  - My score: 99.25%
  - My rank: 1st in the state, 4th in India
  - Students who sat it: About 103,000
- source: Deccan Herald, CISCE 2026 results: https://deccanherald.com/education/cisce-results-2026-icse-class-10-pass-percentage-at-9918-isc-class-12-at-9914-3986176

### Euclid, 2026: 94/100. Top 50 of almost 24,000 entrants.
- about: The University of Waterloo's contest for students in their last year of high school: 10 questions in 2.5 hours, out of 100.
- stats:
  - My score: 94/100
  - My placing: Top 50
  - Contestants: 23,985
  - Average score: 52.2
  - Distinction cutoff (top 25%): 66
- source: CEMC, 2026 Euclid results: https://cemc.uwaterloo.ca/sites/default/files/documents/2026/2026_Euclid_Results.pdf

### Euclid, 2025: 89/100. Top 150 of over 27,000 entrants.
- about: The University of Waterloo's contest for students in their last year of high school: 10 questions in 2.5 hours, out of 100.
- stats:
  - My score: 89/100
  - My placing: Top 150
  - Average score: 54.8
  - Distinction cutoff (top 25%): 68
- source: CEMC, 2025 Euclid results: https://cemc.uwaterloo.ca/sites/default/files/documents/2025/2025EuclidResults.pdf

### AMC 12A, 2025: 144/150. Top 5% distinction. Qualified for the AIME.
- about: The Mathematical Association of America's 25-question, 75-minute contest for grade 12 and below, out of 150.
- stats:
  - My score: 144/150
  - My award: Distinction (top 5%)
  - Average score: 64.44
  - AIME qualifying cutoff: 96
  - Distinction cutoff (top 5%): 127.5
- source: MAA cutoffs, as reported by Think Academy: https://www.thethinkacademy.com/blog/2025-amc-10-and-amc-12-cutoff-scores-qualification-thresholds/

### CSMC, 2025: 60/60. A perfect score, ranked 1st globally.
- about: The Canadian Senior Mathematics Contest, the University of Waterloo's contest for senior high school students, out of 60.
- stats:
  - My score: 60/60
  - My rank: 1st
  - Contestants: 15,153
  - Average score: 28.6
  - Distinction cutoff (top 25%): 35
- source: CEMC, 2025 CSMC and CIMC results: https://cemc.uwaterloo.ca/sites/default/files/documents/2025/2025CSIMCResultsBooklet.pdf

### CCC Senior, 2026: 39/75. Honour roll.
- about: The harder division of the Canadian Computing Competition: five programming problems in three hours, out of 75.
- stats:
  - My score: 39/75
  - Contestants: 2,439
  - Average score: 15.56
  - Distinction cutoff (top 25%): 26
  - Honour roll band: 39 to 44
- source: CEMC, 2026 CCC results: https://cemc.uwaterloo.ca/sites/default/files/documents/2026/2026CCCResults.pdf

## table
- org: SNV Group of Schools, student council
- role: Student President
- dates: September 2024 to September 2025
- summary: Led a 75-member student council representing more than 2,000 students across five committees.
- teams (five committees adding up to the council's 75):
  - Sports: 21
  - Discipline: 20
  - Literary: 12
  - Well-being: 11
  - Cultural: 11

## straight
The non-poker version at /straight: the same story as a morning newspaper. The jobs, projects, awards and council come from the sections above; only the paper's own words live here.
- masthead: The Morning After
- motto: Everything from last night's table, minus the cards.
- place: Waterloo, Ontario
- price: Free for recruiters
- pages (label, name, then an optional headline):
  - A1 Front page
  - B1 Business: Two jobs, one habit: build the thing everyone else relies on
  - C1 Technology: Five projects, every line of code public
  - C2 Technology: Continued from C1
  - D1 Sports: Box scores
  - E1 Community: Student president steers a 75-member council
  - F1 Classifieds: Help wanted, and other notices
  - F2 Back page: Prefer cards?
- classifieds (title, body, then the contacts the ad links to):
  - Wanted: one co-op term: First-year Computer Science student at Waterloo seeks a quant development or software engineering co-op. (links to email)
  - Lost: two suits: Diamonds and clubs. Finder works in data, research or infrastructure. Reward: one keen co-op student. (links to email)
  - Free to a good home: One résumé. One page. Every link live. (links to resume)
  - Open daily: Code on GitHub, the rest on LinkedIn. (links to github and linkedin)
- back page (under a photo of the room captioned "The table, last night. The chips were still warm."): Last night this same story was dealt as one hand of poker at a private table: the jobs as the hand history, the projects as the board and the awards as the cashes. You don't need to know the game to sit down. Link: Take a seat at the table
- the question on a first visit to the poker page: Do you play poker? Note: This site is one hand of poker. If cards aren't your thing, the same story is printed as a morning paper. Buttons: Yes, deal me in / No, give it to me straight
- note on the poker page, linking here: Not a card player? The same story, in plain print.

## showdown
- line: Hiring for a quant development or software engineering co-op? Send me an email.
