---
title: Pi Series (Physical Intelligence)
description: Physical Intelligence's Vision-Language-Action Model Series - Pi0, Pi0.5, Pi*0.6
tags: [pi-series, physical-intelligence, vla, flow-matching, foundation-model]
category: models

# Authorship
createdBy:
  name: Jong Hyun Park
  email: jhpark@sudormrf.run
lastEditedBy:
  name: Jong Hyun Park
  email: jhpark@sudormrf.run
lastEditedAt: 2026-01-21
---

<div class="author-note">

### Author's Note

- **True Star Researcher Team**. Model series created by Karol Hausman, Chelsea Finn, Sergey Levine, Pete Florence and others who led Google DeepMind's RT series.
- **Exemplary VLA + Teleop Data Approach**. Well demonstrates the approach of building Robot Foundation Models with teleoperation-based data collection and VLA architecture.
- **Open-Source Friendly**. Released weights and code via openpi, enabling general users to fine-tune. 1-20 hours of data is sufficient.
- **Skeptical of Humanoids/Synthetic Data**. Focuses on mobile manipulators over humanoids, real data over synthetic data.
- **Must Follow**. A model series worth continuous attention in the Physical AI field.

</div>

<video src="/assets/models/pi0/olympics.mp4" controls width="100%"></video>
<p align="center"><em>Pi Series: Robot Olympics Challenge (Physical Intelligence)</em></p>

## Key Significance

- **New Paradigm for VLAs**: Flow Matching-based continuous action generation as an alternative to Diffusion/Autoregressive approaches
- **Real Home Environment Generalization**: Pi0.5 works in completely new homes never seen during training
- **Self-Improvement via RL**: Pi*0.6 uses RECAP methodology to learn from real experience
- **Fully Open-Source**: Complete release of model weights, training code via [openpi](https://github.com/Physical-Intelligence/openpi)

---

## Overview

Pi Series is a Vision-Language-Action model series announced by [Physical Intelligence](../companies/physical-intelligence) starting October 2024.

| Item | Details |
|------|---------|
| Company | Physical Intelligence |
| Founded | 2024 |
| GitHub | [Physical-Intelligence/openpi](https://github.com/Physical-Intelligence/openpi) |
| Blog | [pi.website/blog](https://www.pi.website/blog) |

---

## Evolution Timeline

| Date | Name | Description | Doc | Official |
|------|------|-------------|-----|----------|
| 2024.10.31 | **Pi0** | First Generalist Policy, Flow Matching + PaliGemma 3B | [Pi0](pi0) | [Blog](https://www.pi.website/blog/pi0) |
| 2025.01.16 | **FAST** | 5x faster training, DCT + BPE compression | [FAST](fast) | [Research](https://www.pi.website/research/fast) |
| 2025.02.04 | **openpi** | Weights, code released (JAX + PyTorch) | - | [Blog](https://www.pi.website/blog/openpi) |
| 2025.02.26 | **HIRobot** | Human-Robot Interaction research | - | [Research](https://www.pi.website/research/hirobot) |
| 2025.04.22 | **Pi0.5** | Open-World Generalization, Web Data Co-training | [Pi0.5](pi0-5) | [Blog](https://www.pi.website/blog/pi05) |
| 2025.05.28 | **Knowledge Insulation** | 7.5x fewer training steps | - | [Research](https://www.pi.website/research/knowledge_insulation) |
| 2025.06.09 | **Real-Time Chunking** | Real-time control in high-latency environments | - | [Research](https://www.pi.website/research/real_time_chunking) |
| 2025.11.17 | **Pi*0.6** | Self-improvement via RL (RECAP) | [Pi*0.6](pi0-6-star) | [Blog](https://www.pi.website/blog/pistar06) |
| 2025.12.16 | **Human-to-Robot** | Learning from human videos | - | [Research](https://www.pi.website/research/human_to_robot) |

---

## Model Versions

| Version | Released | Key Innovation | Detailed Doc |
|---------|----------|----------------|--------------|
| **Pi0** | 2024.10 | Flow Matching VLA, 50Hz control | [Pi0](pi0) |
| **Pi0.5** | 2025.04 | Open-World generalization, Web data Co-training | [Pi0.5](pi0-5) |
| **Pi*0.6** | 2025.11 | RL self-improvement, RECAP | [Pi*0.6](pi0-6-star) |

---

## Core Innovations

### Flow Matching Architecture

Alternative to Diffusion, efficiently modeling complex multimodal action distributions. Generates 50Hz action chunks.

### FAST Tokenizer

> Detailed doc: [FAST (Fast Action Tokenizer)](fast)

DCT + BPE based action compression achieving **10x compression**, **5x faster training**.

### Knowledge Insulation

> Details: [pi.website/research/knowledge_insulation](https://www.pi.website/research/knowledge_insulation)

Preserves VLM backbone knowledge while learning robotics. **7.5x fewer training steps** via gradient blocking.

### Real-Time Chunking (RTC)

> Details: [pi.website/research/real_time_chunking](https://www.pi.website/research/real_time_chunking)

Maintains real-time control in high-latency environments (200ms+) using inpainting approach.

### RECAP

> Detailed doc: [Pi*0.6](pi0-6-star)

RL with Experience & Corrections via Advantage-conditioned Policies. Self-improvement through demonstrations + autonomous experience + coaching.

---

## Open Source

### openpi Repository

| Model | Description |
|-------|-------------|
| Pi0 base | Pretrained model for fine-tuning |
| Pi0-FAST base | FAST tokenizer applied version |
| Pi0 DROID | Franka single arm fine-tuned |
| Pi0 ALOHA | Bimanual manipulation fine-tuned |

- **JAX**: Official implementation
- **PyTorch**: HuggingFace LeRobot integration
- **Fine-tuning**: 1-20 hours data, Consumer GPU capable

---

## Research Publications

### Blog Posts

| Date | Title |
|------|-------|
| 2024.10.31 | [Pi0: Our First Generalist Policy](https://www.pi.website/blog/pi0) |
| 2025.02.04 | [Open Sourcing Pi0](https://www.pi.website/blog/openpi) |
| 2025.04.22 | [Pi0.5: Open-World Generalization](https://www.pi.website/blog/pi05) |
| 2025.11.17 | [Pi*0.6: Learning from Experience](https://www.pi.website/blog/pistar06) |

### Research

| Date | Title |
|------|-------|
| 2025.01.16 | [FAST: Efficient Robot Action Tokenization](https://www.pi.website/research/fast) |
| 2025.02.26 | [HIRobot: Interactive Learning](https://www.pi.website/research/hirobot) |
| 2025.05.28 | [Knowledge Insulation](https://www.pi.website/research/knowledge_insulation) |
| 2025.06.09 | [Real-Time Action Chunking](https://www.pi.website/research/real_time_chunking) |
| 2025.12.16 | [Human-to-Robot Transfer](https://www.pi.website/research/human_to_robot) |

### Papers

| Model | Link |
|-------|------|
| Pi0 | [arXiv:2410.24164](https://arxiv.org/abs/2410.24164) |
| Pi0.5 | [arXiv:2504.16054](https://arxiv.org/abs/2504.16054) |
| Pi*0.6 | [arXiv:2511.14759](https://arxiv.org/abs/2511.14759) |

---

## See Also

- [Pi0](pi0)
- [Pi0.5](pi0-5)
- [Pi*0.6](pi0-6-star)
- [FAST](fast)
- [Physical Intelligence](../companies/physical-intelligence)
