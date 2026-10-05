# content.md

The single source of every word on the site. Replace each TODO, delete any line you don't want shown and keep only numbers you'd defend in an interview. Lines marked DRAFT are starting points to rewrite in your own voice. Never put a phone number here: the page is public.

## site
- name: Naman
- tagline: Computer Science at the University of Waterloo, class of 2031. Quant development and software engineering. (DRAFT)
- title: Naman Shah | Quant development and software engineering
- description: Naman Shah studies Computer Science at the University of Waterloo and builds quant and software systems. (DRAFT)
- email: n45shah@uwaterloo.ca
- github: https://github.com/Pseudocoder28
- linkedin: https://www.linkedin.com/in/namanshah2008
- resumePath: /resume.pdf
- url: TODO (none yet, the site runs on Vercel's default URL. Add it once there's a domain.)

## player
- blurb (DRAFT, three sentences at most): I study Computer Science co-op at the University of Waterloo and graduate in May 2031. I build systems where data meets markets, from a cross-venue arbitrage monitor for prediction markets to the research data pipeline and backtester for the UW Stocks Club. I'm looking for quant development and software engineering co-op roles.
- stats (four at most):
  - Graduating: May 2031
  - ISC grade 12: 99.25%
  - Euclid 2026: 94/100
  - Council led: 75

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
Awards and competition results, newest and biggest first.
- ISC grade 12, 2026: 99.25%. State topper and 4th in India.
- Euclid, 2026: 94/100. Top 50 of almost 24,000 entrants.
- Euclid, 2025: 89/100. Top 150 of over 27,000 entrants.
- AMC 12A, 2025: 144/150. Qualified for the AIME.
- CSMC, 2025: 60/60. A perfect score, ranked 1st globally.
- CCC Junior, 2025: 73/75.
- CCC Senior, 2026: 39/75. Honour roll.

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

## showdown
- line (DRAFT): If you're hiring for quant development or software engineering co-op roles, I'd like to hear from you.
