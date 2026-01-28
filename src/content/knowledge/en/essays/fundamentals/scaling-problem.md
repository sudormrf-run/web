---
title: The Action Data Scaling Problem
description: Why VLA cannot scale as easily as LLMs
tags: [scaling, action-data, challenge]
category: essays
order: 4
related:
  - evaluation-problem.md
  - ../insights/teleoperation.md
  - ../insights/simulation-world-model.md

# Authorship
createdBy:
  name: Jong Hyun Park
  email: jhpark@sudormrf.run
lastEditedBy:
  name: Jong Hyun Park
  email: jhpark@sudormrf.run
lastEditedAt: 2026-01-29
---

## The Core Problem

Physical AI is receiving significant attention in the media today. This is because it seems possible to extend LLMs to implement VLA, which could impact a massive labor market.

However, there are challenges that make it difficult for VLA to follow LLM's success formula directly:

- **Action data doesn't exist on the internet**, making immediate scaling impossible.
- **Evaluation requires operating physical robots**, with significant risks of hardware failure or environmental destruction (like breaking dishes...).
- Beyond these, there are many other challenges including **fundamental understanding of Physical Intelligence**, difficulties in implementing tactile sensing, and challenges in mass-producing dexterous hardware.

---

## Differences from LLMs

| Aspect | LLM | VLA |
|--------|-----|-----|
| Data Source | Internet (unlimited) | Real robot actions (limited) |
| Collection Cost | Low | High |
| Labeling | Automatic (next token) | Manual or complex process |
| Evaluation | Can be automated | Requires physical robot operation |

---

## Various Solution Approaches

To solve these problems, various companies and research groups are trying different approaches.

| Approach | Organization | Description |
|----------|--------------|-------------|
| [Simulation](../insights/simulation-world-model) | NVIDIA | Produce, augment, and evaluate data with physics simulation (Omniverse) and World Model (Cosmos) |
| [Teleoperation](../insights/teleoperation) | Tesla, Google, Physical Intelligence, Galaxea | Direct data collection |
| [Non-Teleop](../insights/non-teleop-data) | UMI, Generalist, Sunday Robotics | Learning from Non-Teleop data |
| [Community](../insights/community-driven) | HuggingFace | Community-driven data collection with open-source spirit |
| World Model | 1X | Evaluation automation |
| Distributed Evaluation | Academia | OXE, RoboArena, etc. |
| Other | Various | Action extraction from human videos, egocentric data collection equipment, etc. |

---

## Personal Reflections

Last summer, while hosting HuggingFace's LeRobot hackathon in Seoul, I felt both hope and challenges for the community-driven approach.

We are currently facing the massive problem of the physical world, with the hint of Scaling and various efforts to solve it all mixed together.

In these confusing times, I believe there are many opportunities and would like to share and discuss different perspectives on this topic.

---

## Next Document

Another challenge as difficult as data collection exists: Evaluation.

**Next: [The Challenge of Evaluation](evaluation-problem)**
