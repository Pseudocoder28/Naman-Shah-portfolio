# Brief: turn the template into Naman Shah's portfolio

This repo started as a copy of https://github.com/paramshah07/portfolio-claude-setup (Param's poker-table portfolio).
Keep the design, stack and rules in CLAUDE.md and .claude/rules, but every word, link and asset must be Naman's.
Nothing of Param's (name, employers, projects, emails, domain, OG image, résumé) may remain. Never invent numbers or claims:
use only what is below, and leave gaps empty or mark them TODO in content.md.

`public/resume.pdf` is already Naman's résumé. `public/og.jpg` was removed; regenerate it for Naman with scripts/make-og.mjs.

## site
- name: Naman
- full name: Naman Shah
- tagline (draft): Computer Science at the University of Waterloo, class of 2031. Quant development and software engineering.
- email: n45shah@uwaterloo.ca
- github: https://github.com/Pseudocoder28
- linkedin: https://www.linkedin.com/in/namanshah2008
- resumePath: /resume.pdf
- url: none yet (deploy on Vercel's default URL)
- Do not publish his phone number on the page.

## education (use in the blurb/stats)
- University of Waterloo, Bachelor of Computer Science Co-op, Sept 2026 to May 2031
- SNV International School, India, ICSE / ISC 2026
- ISC 12th grade: 99.25%, State Topper, 4th in the country (India)

## awards (NEW SECTION, the template has none)
Add an awards section in the poker style (for example "Chips won" or "The cashes"), between The Board and The Table or wherever fits the hand's flow. Add it to content.md, the zod schema, nav/palette as appropriate, and .claude/rules/sections.md + content-model.md.
- ISC 12th grade 2026: 99.25%, State Topper, 4th in the country (India)
- Euclid 2026: 94/100, top 50 of almost 24,000 entrants
- Euclid 2025: 89/100, top 150 of over 27,000 entrants
- AMC 12A 2025: 144/150 (AIME qualified)
- CSMC 2025: 60/60, perfect score, global rank 1
- CCC Junior 2025: 73/75
- CCC Senior 2026: 39/75, Honour Roll

## experience (two entries)
### UW Stocks Club
- role: Quantitative Developer
- start: Apr 2026, end: present, location: Waterloo, Canada
- suit: spades (quant and trading)
- bullets:
  - Built a Python data pipeline ingesting daily OHLCV bars, corporate actions and fundamentals for 1,000+ US equities via the LSEG API into a Parquet store, with automated checks for missing data, split/dividend adjustments and survivorship bias. It is the core data infrastructure for all club research.
  - Developed a performance attribution engine decomposing returns into sector, factor and security selection effects using Brinson-Fachler attribution and multi-factor regression, with ex-ante and ex-post risk metrics across all systematic strategies.
  - Designed an event-driven backtesting engine in Python simulating 20 years of history across 1,000+ tickers, modelling transaction costs, slippage and point-in-time data to prevent lookahead bias.
- tags: Python, LSEG API, Parquet, Pandas

### Agropac Pvt Ltd
- role: Software Engineer
- start: Apr 2025, end: Jun 2025, location: India
- suit: hearts (product and full-stack)
- bullets:
  - Built backend services in Java and Spring for an in-house ERP covering inventory, orders and invoicing, procurement, production and a sales pipeline.
  - Owned authentication and role-based authorization across multiple sites, so each user reached only the records their role allowed.
  - Built an internal LLM assistant using RAG over ERP data, letting executives query inventory, invoicing, procurement, production, HR and sales in plain English.
- tags: Java, Spring, RAG, LLM

## board (exactly five projects)
Read each repo's README for details, stack and metrics. Only use metrics the README states.
1. Cross-Book: https://github.com/Pseudocoder28/Cross-Book . Cross-venue arbitrage measurement for Kalshi and Polymarket US: fee-exact, depth-aware price gaps, live order books, recorder and replay. Measures and paper-trades only. Stack: Python, asyncio, WebSockets, Kalshi API, Polymarket CLOB API, Pandas, NumPy, Plotly.
2. Blur (Blurr): https://github.com/Pseudocoder28/Blur . Real-time video redaction: a live WebRTC stream through YOLOv8 and OpenCV on a FastAPI server, blurring documents, ID cards, bystanders and on-screen text frame by frame. Stack: Python, FastAPI, aiortc, OpenCV, YOLOv8, React, TypeScript, Firebase.
3. Fast Flag: https://github.com/Pseudocoder28/Fast-Flag . AI race control assistant (FormulaTech Hacks 2026). Metric from README: median crash-to-Safety-Car call 1.0 s vs race control's 28.3 s on an unseen race.
4. Investing Made Easy (EasyInvest ETF): https://github.com/Pseudocoder28/Investing-made-easy . User-input ETF portfolio tool for non-technical investors with a performance dashboard.
5. LooLoop: https://github.com/Saarthi09/LooLoop . Naman is the top contributor (21 of 31 commits). Helps new university students find nearby events by voice or questionnaire and join event circles. Sources: Ticketmaster, UWaterloo, WUSA; Supabase Auth.
Assign cards so hole + board are seven distinct valid cards and the streets are flop, flop, flop, turn, river. Keep a small poker story like the template's.

## table (leadership)
- org: SNV Group of Schools
- role: Student President
- dates: September 2024 to September 2025
- summary: Led a 75-member student council representing more than 2,000 students.
- teams (committees): Discipline, Cultural, Well-being, Literary, Sports. Member counts per committee were NOT given. Do not invent them: either render five equal, unlabelled-height stacks with the committee names (noting the council total of 75), or ask the user for the counts (they must add up to 75 if given). The zod schema currently requires a positive member count per team, so adjust it to make members optional.

## skills
Languages: Python, Java, JavaScript, TypeScript, C, C++, C#, SQL, Bash, R. Frameworks: Spring, FastAPI, Flask, Django, Node, React, Angular. AI/ML: TensorFlow, XGBoost, OpenCV, YOLO, ONNX Runtime, CNNs, LSTMs, reinforcement learning, time series forecasting. Tools: Linux, Git, Docker, Kubernetes, Jenkins, AWS (SageMaker, EC2, S3), Airflow, MongoDB, PostgreSQL.

## git
Commit as Pseudocoder28 <121393795+Pseudocoder28@users.noreply.github.com>, no AI co-author trailers.
