---
title: Figure Helix
description: Figure AI's VLA Model for Humanoid Robots
tags: [figure-helix, figure-ai, humanoid, vla, figure-02]
category: models

# Authorship
createdBy:
  name: Jong Hyun Park
  email: jhpark@sudormrf.run
lastEditedBy:
  name: Jong Hyun Park
  email: jhpark@sudormrf.run
lastEditedAt: 2026-01-15
---

<div class="author-note">

### Author's Note

- Impressive that they released a 1-hour continuous operation video, proving real-world VLA capability rather than just cherry-picked demos.
- Looking forward to Figure AI's continued hardware and model announcements.

</div>

## Key Significance

- **First Full-Body High-Speed Control VLA for Humanoids**: First VLA to continuously control entire upper body at high speed including wrists, torso, head, and individual fingers
- **Ultra-High Control Frequency**: System 1 (low-level control) operates at 200Hz for precise real-time manipulation
- **Dual Robot Simultaneous Control**: Two Figure 02 robots simultaneously solving shared long-horizon manipulation tasks
- **Most Complex Autonomous Task**: In Table-to-Dishwasher, traveled 130+ feet, 33 interactions, handling 21 objects (including delicate dishes)
- **Commercial Deployment Stage**: Deployed on Figure 02 currently being tested at BMW factory
- **Major Investment Raised**: $675M funding from Jeff Bezos, Microsoft, NVIDIA, OpenAI, etc. (valuation $2.6B)
- **System 1/2 Architecture**: Efficient architecture separating high-level planning (7-9Hz) and low-level control (200Hz)

<div class="video-embed">
<iframe width="100%" height="400" src="https://www.youtube.com/embed/lkc2y0yb89U" title="Figure Helix - Official Demo" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>
<p align="center"><em>Figure Helix Official Demo Video</em></p>

---

## Overview

Helix is a generalist VLA model announced by Figure AI in February 2025, integrating perception, language understanding, and learned control to solve several longstanding challenges in robotics. It is the first VLA to continuously control a humanoid's full body at high speed.

| Item | Details |
|------|---------|
| Announced | February 2025 |
| Company | Figure AI |
| Blog | [figure.ai/news/helix](https://www.figure.ai/news/helix) |
| Robot | Figure 02 (Helix version) |

---

## Key Innovations

### First Full-Body High-Speed Control VLA

Helix is the **first VLA** to continuously control the entire humanoid upper body at high speed:
- Wrists
- Torso
- Head
- Individual fingers

### Dual Robot Simultaneous Control

Two robots operate **simultaneously**:
- Solving shared long-horizon manipulation tasks
- Handling previously unseen objects

---

## Architecture

**System 1 / System 2 Structure** (Dual-system)

![Helix Architecture](/assets/models/figure-helix/helix_architecture.png)
<p align="center"><em>Helix Architecture: System 1 (200Hz low-level control) + System 2 (7-9Hz high-level planning)</em></p>

| System | Role | Frequency |
|--------|------|-----------|
| System 2 | High-level planning | 7-9 Hz |
| System 1 | Low-level control | 200 Hz |

---

## Hardware: Figure 02 (Helix)

| Item | Spec |
|------|------|
| DoF | 35 DoF |
| Hands | Human-like wrists, hands, fingers |
| Computing | NVIDIA RTX GPU (3x previous) |
| Cameras | 6x RGB |
| Hand Payload | Up to 25kg |

---

## Performance

### Table-to-Dishwasher Task

"The most complex task autonomously performed by a robot":

| Item | Value |
|------|-------|
| Distance Traveled | 130+ feet |
| Unique Interactions | 33 |
| Number of Objects | 21 (including delicate dishes) |

### Dexterous Manipulation

- Two wine glasses in one hand (without breaking)
- Wine glass insertion into dishwasher
- Picking up 2 utensils with one hand

---

## Figure AI History

### Figure 01 (2022)
- First prototype
- Bipedal robot
- Targeting logistics/warehousing

### Figure 02 (2024.08)
- Industrial deployment stage
- BMW factory testing (South Carolina)

### Helix Announcement (2025.02)
- Figure 02 + Helix VLA
- Performing household tasks

---

## Funding & Partnerships

| Timing | Details |
|--------|---------|
| 2024.01 | BMW partnership (automotive manufacturing deployment) |
| 2024.02 | $675M funding (valuation $2.6B) |
| Investors | Jeff Bezos, Microsoft, NVIDIA, Intel, Amazon, OpenAI |

---

## References

- [Figure AI - Helix](https://www.figure.ai/news/helix)
- [Helix Logistics](https://www.figure.ai/news/helix-logistics)
- [Figure AI Wikipedia](https://en.wikipedia.org/wiki/Figure_AI)
- [The Robot Report](https://www.therobotreport.com/figure-humanoid-robots-demonstrate-helix-model-household-chores/)

---

## See Also

- [Model List](index)
- [GR00T](groot)
- [pi0](pi0)
