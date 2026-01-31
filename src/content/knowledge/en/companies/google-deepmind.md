---
title: Google DeepMind
description: Google DeepMind's Robotics Research
tags: [google, deepmind, gemini-robotics, rt1, rt2, rt-x]
category: companies

# Authorship
createdBy:
  name: Jong Hyun Park
  email: jhpark@sudormrf.run
lastEditedBy:
  name: Jong Hyun Park
  email: jhpark@sudormrf.run
lastEditedAt: 2026-01-26
---

## Overview

Google DeepMind is a pioneer in robotics AI, leading key advancements in VLA models from RT-1 to Gemini Robotics. The current organization was formed in April 2023 through the merger of Google Brain and DeepMind.

| Item | Details |
|------|---------|
| Headquarters | London, UK (Global HQ) |
| Major Office | Mountain View, CA |
| Founded | 2010 (DeepMind), 2023 (merger) |
| CEO | Demis Hassabis |
| Robotics Lead | Carolina Parada (Head of Robotics) |

---

## Key Models

### Timeline

| Date | Model | Key Contribution |
|------|-------|-----------------|
| 2022.12 | RT-1 | First large-scale Robotics Transformer |
| 2023.07.28 | RT-2 | Popularized VLA concept, "Action as Language" |
| 2023.10 | RT-X | Open X-Embodiment (33 research labs collaboration) |
| 2025.03.12 | Gemini Robotics | Gemini 2.0-based VLA |
| 2025.06.24 | Gemini Robotics On-Device | Local execution VLA |
| 2025.09.25 | Gemini Robotics 1.5 | Enhanced VLA/VLM, Agentic capabilities |

### RT-1 (2022.12)

- Trained on 130K episodes (collected over 17 months using 13 robots)
- Generalized to 700+ tasks using Transformer architecture
- 97% success rate (on trained tasks; generalization performance is lower)

### RT-2 (2023.07)

- Vision-Language-Action (VLA) model
- Popularized outputting actions as language tokens
- Two variants based on PaLI-X (55B) and PaLM-E (12B)
- Emergent capabilities: Understanding abstract commands, Chain-of-thought reasoning

### RT-X / Open X-Embodiment (2023.10)

- Collaboration of 33 research labs (21 institutions)
- 22 robot types, 1M+ trajectories, 150K+ tasks, 500+ skills
- Largest open-source real robot dataset
- RT-1-X: 50% performance improvement, RT-2-X: 3x performance improvement

### Gemini Robotics (2025.03.12)

- VLA based on Gemini 2.0
- Gemini Robotics-ER: Specialized VLM model for spatial reasoning
- Partnerships announced with Apptronik, Agility Robotics, Boston Dynamics

### Gemini Robotics On-Device (2025.06.24)

- Lightweight VLA for local execution (no internet required)
- Fast task adaptation with 50-100 demonstrations
- Tested on ALOHA, Franka FR3, and Apollo humanoid

### Gemini Robotics 1.5 (2025.09.25)

- Most powerful VLA model with "think before acting" capability
- Cross-embodiment learning: ALOHA2 to Franka to Apollo transfer
- Gemini Robotics-ER 1.5: SOTA on spatial understanding benchmarks, available via Gemini API

---

## Research Approach

### Foundation Model Method

```
[Large-scale Pre-training] → [Fast Fine-tuning] → [New Task Adaptation]
```

### Core Principles

1. **Scaling**: More data, larger models
2. **Multimodal**: Integration of Vision + Language + Action
3. **Cross-robot**: Training/deployment across diverse robots
4. **Collaboration**: Open research like Open X-Embodiment

---

## Partnerships

| Partner | Details |
|---------|---------|
| Apptronik | Applying Gemini Robotics to Apollo humanoid (announced Dec 2024) |
| Boston Dynamics | Gemini Robotics-powered Atlas humanoid collaboration (announced Jan 2026) |
| Agility Robotics | Gemini Robotics for Digit robot, trusted tester (announced Mar 2025) |

---

## References

- [Google DeepMind - Gemini Robotics](https://deepmind.google/models/gemini-robotics/)
- [RT-2 Paper](https://robotics-transformer2.github.io/)
- [Open X-Embodiment](https://robotics-transformer-x.github.io/)
- [arXiv: Gemini Robotics](https://arxiv.org/abs/2503.20020)

---

## See Also

- [Company List](/knowledge/companies/)
- [RT Series](/knowledge/models/rt)
- [Gemini Robotics](/knowledge/models/gemini-robotics)
