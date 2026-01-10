---
title: VLA Faces Difficult Scaling & Evaluation Challenges
description: An essay on the core challenges of Physical AI
tags: [essay, scaling, evaluation, opinion]
category: essays
author: Jonghyun Park (CEO, sudoremove)
date: 2026-01
related:
  - scaling-problem.md
  - evaluation-problem.md
  - teleoperation.md
---

# VLA Faces Difficult Scaling & Evaluation Challenges

> Home > Essays > VLA Scaling Essay

---

Hello, I'm Jonghyun Park, CEO of sudoremove.

Physical AI has been gaining significant attention across many media outlets lately.
The reason is that VLA (Vision-Language-Action) models seem achievable by extending LLMs, and if so, they could have a massive impact on the labor market.

---

## Why VLA Cannot Simply Follow LLM's Success Formula

However, there are several reasons why VLA cannot simply replicate LLM's success formula.

- **Action data doesn't exist on the internet**, making immediate scaling impossible.
- **Evaluation requires running physical robots and observing their behavior**, which carries significant risks of hardware failure or environmental damage (e.g., breaking dishes...).
- Beyond these, there are many other challenges including **fundamental understanding of Physical Intelligence**, difficulties in implementing tactile sensing, and challenges in mass-producing dexterous hardware.

---

## Various Solution Approaches

To address these problems, different companies and research groups are taking varied approaches.

| Approach | Organization | Description |
|----------|--------------|-------------|
| [Simulation](../simulation-world-model.md) | NVIDIA | Data generation, augmentation, and evaluation through physics simulation (Omniverse) and World Model (Cosmos) |
| [Teleoperation](../teleoperation.md) | Tesla, Google, Physical Intelligence, Galaxea | Direct data collection |
| [Non-Teleop](../non-teleop-data.md) | UMI, Generalist, Sunday Robotics | Training with non-teleoperated data |
| [Community](../community-driven.md) | HuggingFace | Community-driven data collection with open-source spirit |
| World Model | 1X | Evaluation automation |
| Distributed Evaluation | Academia | OXE, RoboArena, etc. |
| Others | Various | Extracting actions from human videos, egocentric data collection devices, etc. |

---

## Personal Reflections

Last summer, while hosting the HuggingFace LeRobot hackathon in Seoul, I experienced both the hopes and challenges of the community-driven approach firsthand.

We are at a moment where the hint of Scaling stands before the massive problem of the physical world, with various efforts to solve it all intertwined.

I believe there are many opportunities in this chaotic present, and I want to share perspectives and discuss these topics with many people.

---

## See Also

- [Action Data Scaling Problem](../scaling-problem.md)
- [Challenges of Evaluation](../evaluation-problem.md)
- [Solutions](../teleoperation.md)
