---
street: flop
card: Kc
name: Cross-Book
pitch: "Cross-venue arbitrage measurement for Kalshi and Polymarket US: fee-exact, depth-aware price gaps from live order books."
stack: [Python, asyncio, WebSockets, Pandas, Plotly]
links:
  - label: GitHub
    href: https://github.com/Pseudocoder28/Cross-Book
---

The gap between two best prices isn't an edge. Cross-Book walks both order books level by level, charges each venue's taker fee on every fill and stops at the first fill that doesn't pay for itself. One normalized order book serves both venues, a recorder stores every message before it's parsed, and a recorded run replays through the same code. It measures and paper-trades only: no code in it can place an order.
