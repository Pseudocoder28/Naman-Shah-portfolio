---
street: flop
card: 7d
name: Fast Flag
pitch: An AI race control assistant that recommends the flag the moment a crash happens.
metric: Safety Car called in 1.0 s, against race control's 28.3 s
stack: [Python, FastF1, IsolationForest, LightGBM]
links:
  - label: GitHub
    href: https://github.com/Pseudocoder28/Fast-Flag
---

Built at FormulaTech Hacks 2026. It replays historical FastF1 data tick by tick and never sees the future. Detectors, an anomaly model and a crash-risk model feed a rules engine that makes the flag call with a reason a steward can check.

On a race the models never saw, the 2026 Azerbaijan GP:

- Safety Car called in a median 1.0 s, against race control's 28.3 s.
- Double yellow in 1.4 s against 5.7 s, and yellow in 3.2 s against 4.0 s.
- 7 of 10 incidents caught at 0.6 false alarms per race hour. A plain speed threshold needs 16.6 per hour to catch 8.

Both models trained on 20 races. The anomaly model, an IsolationForest, learned normal driving without seeing a single crash. The LightGBM risk model, 10 s ahead, scores 13 times the chance level.

Across 62 crashes, every second a flag waits lets about 0.12 cars drive past the wreck at racing speed. On the Safety Car, Fast Flag gives race control a 27-second head start.
