---
street: flop
card: Kc
name: Cross-Book
pitch: "Cross-venue arbitrage measurement for Kalshi and Polymarket US: fee-exact, depth-aware price gaps from live order books."
metric: 500+ automated tests
stack: [Python, asyncio, WebSockets, Pandas, Plotly]
links:
  - label: GitHub
    href: https://github.com/Pseudocoder28/Cross-Book
---

The gap between two best prices isn't an edge. Cross-Book walks both order books level by level, charges each venue's taker fee on every fill and stops at the first fill that doesn't pay for itself.

- One normalized order book for both venues, in integer ticks of $0.0001, so live Kalshi books with fractional counts fit.
- Fees are worked out with exact fractions, then rounded the way each venue documents: Kalshi up to the next tick, Polymarket US half-even to the cent.
- Every raw message is recorded before it's parsed, and a recorded run replays through the same code on the recorded clock.
- A keyboard-driven terminal UI with 8 pages, from the live depth monitor to the control plane, where every action is validated and audited.
- 394 Python tests and 109 frontend tests, with the parsers tested on captured venue payloads.

It measures and paper-trades only: no code in it can place an order.
