---
title: Octo
description: UC Berkeley's Open-Source Generalist Robot Foundation Model
tags: [octo, berkeley, stanford, cmu, open-source, foundation-model, transformer, diffusion]
category: models
---

# Octo

> Home > Models > Octo

---

## Key Significance

- **Ultra-Lightweight High Performance**: 93M parameters achieving similar performance to 55B RT-2-X - highest efficiency per parameter
- **Diffusion-Based Action Generation**: Transformer + Diffusion combination for handling multimodal action distribution
- **Practical Fine-tuning**: Adapts to new robots/tasks with ~100 demonstrations on consumer GPU in just hours
- **Flexible I/O**: Task specification via language instructions or goal images, supports various observation/action spaces
- **Fully Open-Source**: Complete release of checkpoints, training code, and fine-tuning scripts
- **Open X-Embodiment Utilization**: Pretrained on 800K episodes from 25 datasets
- **Standard for Fast Adaptation**: Used as benchmark when needing to quickly adapt to new robot platforms

![Octo Architecture](../assets/models/octo/octo_architecture.jpg)
<p align="center"><em>Octo Architecture: Transformer Encoder + Diffusion Decoder Structure</em></p>

---

## Overview

Octo is an open-source generalist robot policy jointly developed by UC Berkeley, Stanford, and CMU. Pretrained on 800K episodes from the Open X-Embodiment dataset, it can be quickly fine-tuned on various robot platforms.

| Item | Details |
|------|---------|
| Published | May 2024 (RSS 2024) |
| Affiliation | UC Berkeley, Stanford, CMU |
| Paper | [arXiv:2405.12213](https://arxiv.org/abs/2405.12213) |
| Project | [octo-models.github.io](https://octo-models.github.io/) |
| GitHub | [github.com/octo-models/octo](https://github.com/octo-models/octo) |
| License | Open Source |

---

## Model Variants

| Model | Parameters | Use Case |
|-------|------------|----------|
| **Octo-Small** | 27M | Lightweight, fast experiments |
| **Octo-Base** | 93M | Higher performance |

---

## Architecture

Octo is a **Transformer-based Diffusion Policy**.

```
+-------------------------------------------------------------+
|                      Octo Architecture                       |
+-------------------------------------------------------------+
|  Inputs:                                                    |
|  +----------+  +----------+  +----------+                   |
|  | Images   |  | Language |  | Goal     |                   |
|  | (multi)  |  | Instruct |  | Image    |                   |
|  +----+-----+  +----+-----+  +----+-----+                   |
|       |             |             |                          |
|       +-------------+-------------+                          |
|                     |                                        |
|              +------v------+                                 |
|              | Transformer |                                 |
|              |   Encoder   |                                 |
|              +------+------+                                 |
|                     |                                        |
|              +------v------+                                 |
|              |  Diffusion  |                                 |
|              |   Decoder   |                                 |
|              +------+------+                                 |
|                     |                                        |
|              +------v------+                                 |
|              |   Action    |                                 |
|              |  Sequence   |                                 |
|              +-------------+                                 |
+-------------------------------------------------------------+
```

**Supported Features:**
- Task specification via natural language instruction or goal image
- Observation history
- Multimodal action distribution through diffusion decoding

---

## Training Data

| Item | Details |
|------|---------|
| Dataset | Open X-Embodiment |
| Episodes | 800K |
| Number of Datasets | 25 |
| Robot Types | Various (single arm, bimanual, etc.) |
| Sensors | Camera, proprioception, etc. |

---

## Performance

### Zero-Shot (Pretrained Environment)

| Robot | Success Rate |
|-------|--------------|
| WidowX | 50% |
| UR5 | 70% |
| RT-1 Robot | 80% |

**Comparison:**
- Superior to RT-1-X
- Similar to RT-2-X (55B) (but Octo is only 93M)

### After Fine-tuning (Average across 6 tasks)

| Model | Success Rate |
|-------|--------------|
| **Octo** | **72%** |
| VC-1 | 15% |

→ **52% improvement** over second-best baseline

---

## Fine-tuning Capabilities

Octo's key strength is **fast adaptation**.

| Adaptable Element | Examples |
|-------------------|----------|
| New Observations | Force-torque, proprioception |
| New Action Spaces | Joint position control |
| New Robots | Bimanual systems, etc. |

**Requirements:**
- ~100 target demonstrations
- Few hours on general consumer GPU

---

## Key Advantages

| Feature | Description |
|---------|-------------|
| **Open-Source** | Complete release of checkpoints, training code, fine-tuning scripts |
| **Flexibility** | Supports various observation/action spaces |
| **Efficiency** | 93M parameters achieving 55B model-level performance |
| **Practicality** | Fine-tuning possible on consumer GPU |

---

## Comparison with RT-X

| Item | Octo | RT-1-X | RT-2-X |
|------|------|--------|--------|
| Parameters | 93M | ~35M | 55B |
| Open-Source | O | O | X |
| Performance | High | Medium | High |
| Fine-tuning | Easy | Medium | Difficult |

---

## Released Resources

- Pretrained checkpoints (27M, 93M)
- Fine-tuning scripts
- Complete pretraining pipeline
- Evaluation code

---

## References

- [Project Page](https://octo-models.github.io/)
- [arXiv Paper](https://arxiv.org/abs/2405.12213)
- [GitHub](https://github.com/octo-models/octo)
- [TechXplore Article](https://techxplore.com/news/2024-06-source-generalist-robot.html)

---

## See Also

- [Model List](index.md)
- [OpenVLA](openvla.md)
- [RT](rt.md)
