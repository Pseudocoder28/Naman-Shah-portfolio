---
street: flop
card: 7d
name: Fast Flag
pitch: An AI race control assistant that spots a crash the moment it happens and recommends the flag. Built at FormulaTech Hacks 2026.
metric: Safety Car called in 1.0 s, against race control's 28.3 s
stack: [Python, FastF1, IsolationForest, LightGBM]
links:
  - label: GitHub
    href: https://github.com/Pseudocoder28/Fast-Flag
---

It replays historical FastF1 data tick by tick and never sees the future. Detectors, an anomaly model and a crash-risk model feed a rules engine that makes the flag call with a reason a steward can check. On a race the models never saw, the 2026 Azerbaijan GP, its median crash-to-Safety-Car call was 1.0 s against race control's 28.3 s, and it caught 7 of 10 incidents at 0.6 false alarms per race hour.
