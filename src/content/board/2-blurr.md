---
street: flop
card: Qd
name: Blurr
pitch: Real-time video redaction that blurs documents, ID cards, bystanders and on-screen text out of a live call, frame by frame.
stack: [Python, FastAPI, aiortc, OpenCV, YOLOv8, React, TypeScript, Firebase]
links:
  - label: GitHub
    href: https://github.com/Pseudocoder28/Blur
---

The camera feed streams over WebRTC to a FastAPI and aiortc server, which finds text-shaped regions with an OpenCV pipeline and cards, documents and other people with YOLOv8, then blurs them. Only the blurred video goes on to the other caller, and it's the same video you see in your own preview. Detection runs in a background thread on every second frame so the stream stays real time.
