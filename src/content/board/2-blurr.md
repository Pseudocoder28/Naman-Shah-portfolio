---
street: flop
card: Qd
name: Blurr
pitch: Real-time video redaction that blurs documents, ID cards, bystanders and on-screen text out of a live call, frame by frame.
metric: 4 kinds of sensitive content, blurred live
stack: [Python, FastAPI, aiortc, OpenCV, YOLOv8, React, TypeScript, Firebase]
links:
  - label: GitHub
    href: https://github.com/Pseudocoder28/Blur
---

The camera feed streams over WebRTC to a FastAPI and aiortc server that blurs it before it reaches the other caller. What you see in your own preview is exactly what they get.

- Blurs 4 kinds of content: lines of text, ID-shaped cards, documents and everyone in frame but you.
- Text is found by an OpenCV pipeline. Objects are found by YOLOv8n at a 0.5 confidence threshold, loaded once and shared by every call.
- Detection runs in a background thread on every second frame and reuses the latest boxes in between, so the stream stays real time.
- Each box is padded and covered with a 41×41 Gaussian blur. Everything outside the boxes is left alone.
- Calls are peer-to-peer WebRTC, with Firebase Firestore as the signaling channel.
