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
- education (in The Player and the morning paper's profile):
  - University of Waterloo: Bachelor of Computer Science, co-op, Waterloo, Canada, Sept 2026 to May 2031
  - SNV International School: ICSE and ISC, India, 2026
- skills (in The Player and the morning paper's profile):
  - Languages: Python, Java, JavaScript, TypeScript, C, C++, C#, SQL, Bash, R
  - Frameworks: Spring, FastAPI, Flask, Django, Node, React, Angular
  - AI and ML: TensorFlow, XGBoost, OpenCV, YOLO, ONNX Runtime, CNNs, LSTMs, reinforcement learning, time series forecasting
  - Tools: Linux, Git, Docker, Kubernetes, Jenkins, AWS (SageMaker, EC2, S3), Airflow, MongoDB, PostgreSQL

## hand
- hole: 7h 2s

## experience
Suits: spades for quant and trading, hearts for product and full-stack, diamonds for data and research, clubs for infrastructure.

### UW Stocks Club
- role: Quantitative Developer
- start: Apr 2026
- end: present
- location: Waterloo, Canada
- result: Built the data pipeline all of the club's research runs on, so every strategy starts from data that's already been checked.
- details:
  - Pulls daily prices, corporate actions and fundamentals for 1,000+ US equities from the LSEG API into Parquet, checked for gaps, splits, dividends and survivorship bias, so no backtest looks good by forgetting the companies that didn't make it.
  - Built a performance attribution engine (Brinson-Fachler and multi-factor regression, with ex-ante and ex-post risk), so the club sees why each strategy made money and not only whether it did.
  - Designed an event-driven backtester that replays 20 years across 1,000+ tickers with costs, slippage and point-in-time data, so a strategy only trades on what it could have known that day.
- hook (one line with numbers, for the morning paper): 1,000+ US equities and 20 years of history under every club strategy
- tags: Python, LSEG API, Parquet, Pandas
- suit: spades

### Agropac Pvt Ltd
- role: Software Engineer
- start: Apr 2025
- end: Jun 2025
- location: India
- result: Built backend services for an in-house ERP and an AI assistant on top, so executives get answers by asking in plain English.
- details:
  - Built Java and Spring services for inventory, orders, invoicing, procurement, production and sales, so 6 parts of the business ran on one system.
  - Owned sign-in and role-based access across multiple sites, so each user reached only the records their role allowed.
  - Built an LLM assistant with RAG over the ERP's data, so an executive with a question about stock, invoices, production, HR or sales just asks it in plain English.
- hook (one line with numbers, for the morning paper): 6 parts of the business on one ERP, and an assistant executives just ask in plain English
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
- pitch: Finds the Kalshi and Polymarket price gaps that still pay after every fee and level of depth.
- metric: 500+ automated tests
- stack: Python, asyncio, WebSockets, Pandas, Plotly
- links:
  - GitHub: https://github.com/Pseudocoder28/Cross-Book
- details:
  The gap between two best prices isn't an edge. Cross-Book walks both order books level by level, charges each venue's taker fee on every fill and stops at the first fill that doesn't pay for itself.

  - One normalized order book for both venues, in integer ticks of $0.0001, so live Kalshi books with fractional counts fit.
  - Fees are worked out with exact fractions, then rounded the way each venue documents: Kalshi up to the next tick, Polymarket US half-even to the cent.
  - Every raw message is recorded before it's parsed, so any run replays through the same code on the recorded clock.
  - A keyboard-driven terminal UI with 8 pages, from the live depth monitor to the control plane, where every action is validated and audited.
  - 394 Python tests and 109 frontend tests, with the parsers tested on captured venue payloads.

  It measures and paper-trades only: no code in it can place an order.

### flop: Qd
- name: Blurr
- pitch: Blurs IDs, documents, bystanders and screen text out of live video before anyone sees them.
- metric: 4 kinds of sensitive content, blurred live
- stack: Python, FastAPI, aiortc, OpenCV, YOLOv8, React, TypeScript, Firebase
- links:
  - GitHub: https://github.com/Pseudocoder28/Blur
- details:
  The camera feed streams over WebRTC to a FastAPI and aiortc server that blurs it before it reaches the other caller. What you see in your own preview is exactly what they get.

  - Blurs 4 kinds of content: lines of text, ID-shaped cards, documents and everyone in frame but you.
  - Text is found by an OpenCV pipeline. Objects are found by YOLOv8n at a 0.5 confidence threshold, loaded once and shared by every call.
  - Detection runs in a background thread on every second frame and reuses the latest boxes in between, so the stream stays real time.
  - Each box is padded and covered with a 41×41 Gaussian blur. Everything outside the boxes is left alone.
  - Calls are peer-to-peer WebRTC, with Firebase Firestore as the signaling channel.

### flop: 7d
- name: Fast Flag
- pitch: An AI race control assistant that recommends the flag the moment a crash happens.
- metric: Safety Car called in 1.0 s, against race control's 28.3 s
- stack: Python, FastF1, IsolationForest, LightGBM
- links:
  - GitHub: https://github.com/Pseudocoder28/Fast-Flag
- details:
  Built at FormulaTech Hacks 2026. It replays historical FastF1 data tick by tick and never sees the future. Detectors, an anomaly model and a crash-risk model feed a rules engine that makes the flag call with a reason a steward can check.

  On a race the models never saw, the 2026 Azerbaijan GP:

  - Safety Car called in a median 1.0 s, against race control's 28.3 s.
  - Double yellow in 1.4 s against 5.7 s, and yellow in 3.2 s against 4.0 s.
  - 7 of 10 incidents caught at 0.6 false alarms per race hour. A plain speed threshold needs 16.6 per hour to catch 8.

  Both models trained on 20 races. The anomaly model, an IsolationForest, learned normal driving without seeing a single crash. The LightGBM risk model, 10 s ahead, scores 13 times the chance level.

  Across 62 crashes, every second a flag waits lets about 0.12 cars drive past the wreck at racing speed. On the Safety Car, Fast Flag gives race control a 27-second head start.

### turn: 2c
- name: Investing Made Easy
- pitch: Matches a non-technical investor to an ETF from a short questionnaire, no code needed.
- metric: 8 dashboard views
- stack: Python, Pandas, FinQuant, Plotly, Panel
- links:
  - GitHub: https://github.com/Pseudocoder28/Investing-made-easy
- details:
  Built for older investors who are interested in markets but not in code. A short questionnaire weighs their interest in each sector and their tolerance for risk into a profile, then matches it to an ETF.

  - ETF data from the FinQuant and EOD APIs, cleaned and merged.
  - Returns for the past 5 years, and the investment projected 5 years forward.
  - Risk in plain numbers: expected return, volatility, Sharpe ratio, beta and alpha.
  - A dashboard with 8 views, from the top 10 holdings and the split by sector and region to daily prices against those holdings and a map of where they're headquartered.

### river: 7c
- name: LooLoop
- pitch: Helps new students find something to do nearby, and someone to go with, by voice or questionnaire.
- metric: Top contributor, 21 of 31 commits
- stack: JavaScript, Node.js, Express, Supabase
- links:
  - GitHub: https://github.com/Saarthi09/LooLoop
- details:
  Built to help new university students find something to do and someone to go with. I wrote 21 of the project's 31 commits, more than anyone else.

  - Events from Ticketmaster, the University of Waterloo and WUSA, searched together and filtered by interests, time, budget, travel distance and place.
  - Voice works in the browser: speech becomes text there and a local parser turns it into filters. No recording is sent to the server.
  - Signed-in students join a circle for each event, kept in Supabase.
  - One source failing never fails the feed: the others still return, with a warning.

## cashes
Awards and competition results, biggest first, so a reader who stops after one sees the best one. Each ticket opens a sheet with what the contest is and the field's official numbers. Only numbers from the linked source go in; contests publish means and cutoffs, not medians, so there are none.

### CSMC, 2025: 60/60. A perfect score, ranked 1st globally.
- about: The Canadian Senior Mathematics Contest, the University of Waterloo's contest for senior high school students, out of 60.
- stats:
  - My score: 60/60
  - My rank: 1st
  - Contestants: 15,153
  - Average score: 28.6
  - Distinction cutoff (top 25%): 35
- source: CEMC, 2025 CSMC and CIMC results: https://cemc.uwaterloo.ca/sites/default/files/documents/2025/2025CSIMCResultsBooklet.pdf

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
- summary: Led a 75-member student council across five committees, the voice of more than 2,000 students.
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
  - B1 Education: Student tops a field of 15,153, then the whole state
  - C1 Business: Two jobs, one habit: build the thing everyone else relies on
  - D1 Technology: Five projects, every line of code public
  - D2 Technology: Continued from D1
  - E1 Community: Student president leads 75 and speaks for more than 2,000
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
