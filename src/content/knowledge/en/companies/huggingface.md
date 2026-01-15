---
title: HuggingFace
description: HuggingFace - LeRobot and the Open-Source Robotics Community
tags: [huggingface, lerobot, smolvla, open-source, community]
category: companies

# Authorship
createdBy:
  name: Jong Hyun Park
  email: jhpark@sudormrf.run
lastEditedBy:
  name: Jong Hyun Park
  email: jhpark@sudormrf.run
lastEditedAt: 2026-01-15
---

## Overview

HuggingFace is the "GitHub" of AI models and datasets, bringing the open-source revolution to robotics through the LeRobot project. With SmolVLA and community datasets, they aim to make robotics AI accessible to everyone.

| Item | Details |
|------|---------|
| Headquarters | New York, NY / Paris, France |
| Founded | 2016 |
| CEO | Clément Delangue |
| Robotics Lead | Rémi Cadène |
| Core Projects | LeRobot, SmolVLA |

---

## LeRobot

### Project Introduction

LeRobot is an open-source project to democratize robotics AI.

```
🤗 LeRobot

"Making AI for Robotics more accessible
 with end-to-end learning"
```

### Core Components

| Component | Description |
|-----------|-------------|
| Models | ACT, Diffusion Policy, SmolVLA, etc. |
| Datasets | 487+ community-shared datasets (as of June 2025) |
| Hardware Support | SO100, Koch, Unitree G1, etc. |
| Tools | Training, evaluation, visualization pipelines |

### Supported Hardware

- SO100, SO101 (low-cost arms)
- LeKiwi (mobile base)
- Koch (bimanual)
- Unitree G1 (humanoid)
- HopeJR, OMX, EarthRover, and more

---

## SmolVLA

### Overview

A **450M parameter** [VLA](../models/index.md#vla-vision-language-action) released in June 2025:

| Item | Details |
|------|---------|
| Parameters | 450M |
| Feature | Runs on MacBook |
| Training Data | 10M frames (community data) |
| Architecture | VLM + Flow Matching |

### Performance

```
SmolVLA-450M ≈ Equivalent performance to 10× larger VLAs
             + Superior to ACT (LIBERO, Meta-World)
             + 30% faster with async inference
```

### Efficiency

| Factor | Feature |
|--------|---------|
| Training | Trainable on single GPU |
| Inference | Runs on consumer GPU/CPU |
| Fine-tuning | ~50 episodes, ~4 hours (A100) |

---

## Community Activities

### LeRobot Hackathons

| Hackathon | Details |
|-----------|---------|
| 2024 #1 | First community hackathon |
| 2025 #2 | Focus on low-cost hardware |
| Outcomes | Diverse environment dataset sharing |

### Dataset Hub

```
HuggingFace Hub
└── lerobot/ (tag)
    ├── pusht_v2 (simulation)
    ├── aloha_static_* (ALOHA data)
    ├── so100_* (community collected)
    └── ... (487+ datasets)
```

### Community Contributions

- Researchers and hobbyists worldwide sharing data
- Diverse environments (labs, living rooms, warehouses)
- Standardized formats for interoperability

---

## Philosophy: Democratizing AI

### Application to Robotics

```
LLM Democratization (HuggingFace Success)
├── Model Sharing → Hub
├── Training Tools → Transformers
└── Datasets → Datasets

Robotics Democratization (LeRobot Goal)
├── Model Sharing → lerobot/models
├── Training Tools → LeRobot library
└── Datasets → lerobot-tagged datasets
```

### Emphasis on Low-Cost Hardware

| Equipment | Cost |
|-----------|------|
| SO100 arm | ~$300 |
| LeKiwi base | ~$200 |
| Full setup | ~$500-1000 |

→ "Lowering barriers to entry for robotics research"

---

## Roadmap

*Below is compiled from public announcements and GitHub activity; may not be the official roadmap.*

| Timeline | Milestone |
|----------|-----------|
| 2024 | LeRobot project launch |
| 2024-25 | Community dataset growth |
| 2025.06 | [SmolVLA](../models/smolvla.md) release |
| 2025+ | More efficient models, broader hardware support (expected) |

---

## References

- [HuggingFace LeRobot](https://huggingface.co/lerobot)
- [LeRobot GitHub](https://github.com/huggingface/lerobot)
- [SmolVLA Blog](https://huggingface.co/blog/smolvla)
- [SmolVLA Paper](https://arxiv.org/abs/2506.01844)

---

## See Also

- [Company List](index.md)
- [SmolVLA](../models/smolvla.md)
- [Community-Driven Approach](../solutions/community-driven.md)
- [ACT](../models/act.md)
