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
lastEditedAt: 2026-01-15
---

## Key Significance

- **New Paradigm for VLAs**: Flow Matching-based continuous action generation as an alternative to Diffusion/Autoregressive approaches
- **Real Home Environment Generalization**: Pi0.5 works in completely new homes never seen during training - new standard for robot generalization
- **Self-Improvement via RL**: Pi*0.6 uses RECAP methodology to learn from real experience and continuously improve performance
- **Star Team Startup**: Founded by key researchers from Google DeepMind RT series (Karol Hausman, Chelsea Finn, Sergey Levine, Pete Florence)
- **Fully Open-Source**: Complete release of model weights, training code, PyTorch/JAX implementation via openpi
- **Revolutionary Efficiency**: 5x faster training with FAST tokenizer, 7.5x fewer training steps with Knowledge Insulation
- **24-Hour Continuous Operation**: Pi*0.6 demonstrated espresso making 5:30am-11:30pm, folding 50 new laundry items continuously

---

## Overview

Pi Series is a Vision-Language-Action model series announced by Physical Intelligence starting October 2024. Founded by key researchers who led Google DeepMind's RT series, they presented a new VLA paradigm based on Flow Matching.

| Item | Details |
|------|---------|
| Company | Physical Intelligence |
| Founded | 2024 |
| Founders | Karol Hausman, Chelsea Finn, Sergey Levine, Pete Florence, etc. |
| GitHub | [Physical-Intelligence/openpi](https://github.com/Physical-Intelligence/openpi) |
| Blog | [pi.website/blog](https://www.pi.website/blog) |

---

## Evolution Timeline

```
2024.10 ------- Pi0 ------------------------------------------
                |  First Generalist Policy
                |  Flow Matching + PaliGemma 3B
                |  8 robots, 68 tasks
                |
2025.01 ------- FAST Tokenizer -------------------------------
                |  5x faster training
                |  DCT + BPE compression
                |
2025.02 ------- Open Source (openpi) -------------------------
                |  Weights, code released
                |  JAX + PyTorch (LeRobot)
                |
2025.04 ------- Pi0.5 ----------------------------------------
                |  Open-World Generalization
                |  Works in new homes
                |  Web Data Co-training
                |
2025.05 ------- Knowledge Insulation -------------------------
                |  7.5x fewer training steps
                |  Gradient blocking to preserve VLM knowledge
                |
2025.06 ------- Real-Time Chunking (RTC) ---------------------
                |  Real-time control even in high-latency environments
                |  Inpainting-based approach
                |
2025.11 ------- Pi*0.6 ---------------------------------------
                   Self-improvement via RL
                   RECAP: Learning from experience
                   90%+ success rate, 2x throughput
```

---

## Model Versions

| Version | Released | Key Innovation | Detailed Doc |
|---------|----------|----------------|--------------|
| **Pi0** | 2024.10 | Flow Matching VLA, 50Hz control | [Pi0](pi0.md) |
| **Pi0.5** | 2025.04 | Open-World generalization, Web data | [Pi0.5](pi0-5.md) |
| **Pi*0.6** | 2025.11 | RL self-improvement, RECAP | [Pi*0.6](pi0-6-star.md) |

---

## Core Innovations

### 1. Flow Matching Architecture

Alternative to Diffusion, efficiently modeling continuous distributions:

| Feature | Description |
|---------|-------------|
| Continuous Distribution | Handles complex multimodal action distributions |
| High-Frequency Control | Generates 50Hz action chunks |
| Transformer Integration | Natural combination with VLM |

### 2. FAST Tokenizer

Efficiently compresses action sequences:

```
Raw Actions -> DCT Transform -> BPE Encoding -> 30-60 Tokens
                   |                |
            (JPEG/MP3 method)    (LLM method)
```

- **10x compression**: Compared to existing tokenization
- **5x faster training**: Compared to Diffusion-based Pi0
- **Dexterous tasks**: Enables precise high-frequency control

### 3. Knowledge Insulation

Preserves VLM's internet knowledge while learning robotics:

| Problem | Solution |
|---------|----------|
| Action Expert -> VLM backpropagation | Gradient Blocking |
| Robot training damaging language understanding | Simultaneous Discrete Action learning |
| Result | 7.5x fewer training steps |

### 4. RECAP (RL with Experience & Corrections)

Core of Pi*0.6 - Learning from experience:

```
+-------------------------------------------------------------+
|                    RECAP Learning Loop                       |
+-------------------------------------------------------------+
|                                                              |
|  +----------+     +----------+     +----------+              |
|  | Demo     | --> | Autonomous| --> | Coaching |             |
|  | (Demo)   |     | (Deploy) |     |(Coaching)|             |
|  +----------+     +----+-----+     +----------+              |
|                        |                                     |
|                        v                                     |
|              +----------------+                              |
|              | Value Function | <- Predicts success prob     |
|              +-------+--------+    per situation             |
|                      |                                       |
|                      v                                       |
|              +-------------------+                           |
|              | Advantage Cond.   | <- Reinforces good actions|
|              +-------------------+                           |
+-------------------------------------------------------------+
```

### 5. Real-Time Chunking (RTC)

Real-time control in high-latency environments:

- **Problem**: Large VLAs take time for inference, world changes meanwhile
- **Solution**: Inpainting approach to maintain executing actions from previous chunk
- **Result**: Maintains precision and speed even at high latency

---

## Training Data & Scale

### Pi0 Training Data

| Item | Details |
|------|---------|
| Robot Platforms | 8 (UR5e, Franka, Trossen, ARX, etc.) |
| Tasks | 68 |
| External Data | Open X-Embodiment |

### Pi0.5 Co-training Data

| Data Type | Purpose |
|-----------|---------|
| Web Data | Image captioning, Visual QA, Object detection |
| Language Demonstrations | Step-by-step instruction learning |
| Subtask Commands | High-level semantic labels |
| Robot Actions | Multi-embodiment learning |

---

## Performance Highlights

### Pi0 vs Baselines

| Task | Pi0 | OpenVLA | Octo |
|------|-----|---------|------|
| Bussing (UR5e) | **97%** | 0% | 4% |
| Shirt Folding | **100%** | 0% | 0% |
| Grocery Bagging | **79%** | 0% | 0% |

### Pi*0.6 Improvements

| Metric | Improvement |
|--------|-------------|
| Success Rate | **90%+** |
| Throughput | **2x or more** |
| Failure Rate | **2x+ reduction** |

### Real-World Deployment

| Task | Achievement |
|------|-------------|
| Espresso Making | 5:30am-11:30pm continuous operation |
| Laundry Folding | 50 new items processed continuously |
| Box Assembly | 59 chocolate packaging boxes (factory) |

---

## Open Source Ecosystem

### openpi Repository

| Model | Description |
|-------|-------------|
| Pi0 base | Pretrained model for fine-tuning |
| Pi0-FAST base | FAST tokenizer applied version |
| Pi0 DROID | Franka single arm fine-tuned |
| Pi0 ALOHA | Bimanual manipulation fine-tuned |
| Pi0 Libero | Simulation environment fine-tuned |

### Framework Support

| Framework | Support |
|-----------|---------|
| JAX | Official implementation |
| PyTorch | HuggingFace LeRobot integration |

### Fine-tuning Requirements

- **Data**: 1-20 hours sufficient
- **Hardware**: Consumer GPU capable

---

## Team Background

Previous achievements of Physical Intelligence founding team:

| Person | Previous Affiliation | Key Contributions |
|--------|---------------------|-------------------|
| [Karol Hausman](../people/karol-hausman.md) | Google DeepMind | RT-1, RT-2 Lead |
| [Chelsea Finn](../people/chelsea-finn.md) | Stanford/Google | MAML, Robotics Transformer |
| [Sergey Levine](../people/sergey-levine.md) | UC Berkeley/Google | RL, Robot Learning |
| [Pete Florence](../people/pete-florence.md) | Google DeepMind | Dense Descriptors |

---

## Research Publications

### Blog Posts (Chronological)

| Date | Title | Type |
|------|-------|------|
| 2024.10.31 | [Pi0: Our First Generalist Policy](https://www.pi.website/blog/pi0) | Blog |
| 2025.01.16 | [FAST: Efficient Robot Action Tokenization](https://www.pi.website/research/fast) | Research |
| 2025.02.04 | [Open Sourcing Pi0](https://www.pi.website/blog/openpi) | Blog |
| 2025.04.22 | [Pi0.5: Open-World Generalization](https://www.pi.website/blog/pi05) | Blog |
| 2025.05.28 | [Knowledge Insulation](https://www.pi.website/research/knowledge_insulation) | Research |
| 2025.06.09 | [Real-Time Action Chunking](https://www.pi.website/research/real_time_chunking) | Research |
| 2025.11.17 | [Pi*0.6: Learning from Experience](https://www.pi.website/blog/pistar06) | Blog |

### Papers

- [Pi0: A Vision-Language-Action Flow Model for General Robot Control](https://arxiv.org/abs/2410.24164)
- [Pi*0.6 Technical Report](https://www.pi.website/download/pistar06.pdf)

---

## Impact

Impact of Pi Series on the robotics field:

1. **Flow Matching Validation**: Established as practical alternative to Diffusion
2. **Open-World Standard Setting**: New standard for generalization beyond the lab
3. **RL Self-Improvement**: Continuous performance improvement even after deployment
4. **Open-Source Ecosystem**: Foundation for subsequent research like SmolVLA, LeRobot
5. **Industry Application**: 24-hour operation demonstrated in actual factory/home environments

---

## See Also

- [Model List](index.md)
- [Pi0](pi0.md)
- [Pi0.5](pi0-5.md)
- [Pi*0.6](pi0-6-star.md)
- [Physical Intelligence](../companies/physical-intelligence.md)
- [Diffusion Policy](diffusion-policy.md)

### Related People
- [Karol Hausman](../people/karol-hausman.md)
- [Chelsea Finn](../people/chelsea-finn.md)
- [Sergey Levine](../people/sergey-levine.md)
- [Pete Florence](../people/pete-florence.md)
