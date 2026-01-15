---
title: Pi0 (pi-zero)
description: Physical Intelligence's First Generalist Policy - Flow Matching Based VLA
tags: [pi0, physical-intelligence, flow-matching, vla, foundation-model, paligemma]
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

# Pi0 (pi-zero)

> Home > Models > [Pi Series](pi-series.md) > Pi0

---

## Key Significance

- **Successful Application of Flow Matching**: First successful application of flow matching to robotics as an alternative to Diffusion
- **VLM Knowledge Transfer to Robots**: Leverages PaliGemma (3B) VLM's internet-scale knowledge for dexterous manipulation
- **50Hz High-Frequency Control**: Generates 50 motor commands per second via Action Chunking
- **8 Robot Platforms**: Learns across diverse embodiments including single arm, bimanual, and mobile manipulators
- **Dominates OpenVLA/Octo**: Overwhelming performance advantage over existing open-source VLAs in complex dexterous tasks
- **Open-Source Release**: Complete release of weights, training code, JAX/PyTorch implementation via openpi

![Pi0 Overview](../assets/models/pi0/pi0.png)
<p align="center"><em>Pi0 Architecture: PaliGemma VLM + Flow Matching Action Expert</em></p>

---

## Overview

Pi0 (pi-zero) is the first general-purpose robot foundation model announced by Physical Intelligence in October 2024 after 8 months of development. Founded by researchers who led Google DeepMind's RT series, they presented a new VLA paradigm based on Flow Matching.

| Item | Details |
|------|---------|
| Published | October 31, 2024 |
| Company | Physical Intelligence |
| Paper | [arXiv:2410.24164](https://arxiv.org/abs/2410.24164) |
| Blog | [pi.website/blog/pi0](https://www.pi.website/blog/pi0) |
| GitHub | [Physical-Intelligence/openpi](https://github.com/Physical-Intelligence/openpi) |

---

## Architecture

Pi0 is a **VLM + Flow Matching Action Expert** hybrid architecture.

```
+-------------------------------------------------------------+
|                      Pi0 Architecture                        |
+-------------------------------------------------------------+
|                                                              |
|   +----------------------------------------------------+    |
|   |              PaliGemma VLM (3B)                    |    |
|   |         Internet-scale Semantic Knowledge          |    |
|   |    * Image understanding    * Language instruction |    |
|   +------------------------+---------------------------+    |
|                            |                                 |
|                            v                                 |
|   +----------------------------------------------------+    |
|   |            Action Expert (+300M)                   |    |
|   |    * Proprioceptive states processing              |    |
|   |    * Bidirectional attention between action tokens |    |
|   |    * Separate Transformer weights                  |    |
|   +------------------------+---------------------------+    |
|                            |                                 |
|                            v                                 |
|   +----------------------------------------------------+    |
|   |              Flow Matching                         |    |
|   |    * Continuous action distribution generation     |    |
|   |    * Multimodal action handling                    |    |
|   |    * 50Hz high-frequency control                   |    |
|   +----------------------------------------------------+    |
|                                                              |
+-------------------------------------------------------------+
```

### Model Specifications

| Component | Spec |
|-----------|------|
| VLM Backbone | PaliGemma (3B) |
| Action Expert | +300M parameters |
| Total Parameters | ~3.3B |
| Control Frequency | 50Hz |
| Action Horizon | 50 steps (1 second) |

### What is Flow Matching?

Alternative to Diffusion for modeling continuous distributions:

| Feature | Description |
|---------|-------------|
| Continuous Distribution | Handles complex multimodal action distributions |
| Efficiency | Faster sampling than Diffusion |
| Transformer Integration | Natural combination with VLM |
| High-Frequency Control | Suitable for action chunk generation |

### Action Expert

Module handling robot control separately from VLM:

- **300M additional parameters**: Separate Transformer weights
- **Proprioceptive processing**: Robot state information encoding
- **Bidirectional attention**: Ensures consistency between action tokens
- **Continuous output**: Generates continuous commands via flow matching

---

## Training Data

### Pi Dataset

Dexterous manipulation data directly collected by Physical Intelligence:

| Item | Details |
|------|---------|
| Total Data | 10,000+ hours |
| Robot Platforms | 8 |
| Tasks | 68 |

### Supported Robot Platforms

| Robot | Type |
|-------|------|
| UR5e | Single arm |
| Bimanual UR5e | Bimanual |
| Franka | Single arm |
| Bimanual Trossen | Bimanual |
| Bimanual ARX | Bimanual |
| Mobile Trossen | Mobile manipulator |
| Mobile Fibocom | Mobile manipulator |

### Task Examples

- Laundry folding
- Coffee preparation
- Grocery bagging
- Table bussing
- Cable routing
- Box assembly
- Power plug insertion

### External Data

- **Open X-Embodiment (OXE)**: Includes various robot data
- **Internet Pretraining**: Visual-language knowledge via PaliGemma VLM

---

## Performance

### vs OpenVLA, Octo (Zero-shot)

Comparison on complex multi-stage dexterous tasks:

| Task | Pi0 | Pi0-Small | OpenVLA | Octo |
|------|-----|-----------|---------|------|
| Bussing Easy (UR5e) | **97.1%** | 44.3% | 0% | 4.3% |
| Bussing Hard (UR5e) | **87.5%** | 33.3% | 0% | 0% |
| Shirt Folding (Bi-ARX) | **100%** | 50% | 0% | 0% |
| Grocery Bagging (UR5e) | **78.6%** | 27.1% | 0% | 0% |
| Toast from Toaster | **75%** | 0% | 0% | 0% |

### Effect of VLM Pre-training

| Comparison | Result |
|------------|--------|
| Pi0 (full) vs Pi0-Small | **2x+ performance improvement** |
| Reason | Visual-language knowledge from VLM pretraining |

### Key Insights

- **OpenVLA/Octo at 0%**: Fail on complex dexterous tasks
- **Only Pi0 succeeds**: Effectiveness of Flow matching + VLM combination
- **Generalization ability**: Consistent performance across various robots

---

## Capabilities

### Zero-shot Performance

Tasks performable with pretraining alone:

- Manipulation in settings similar to training environment
- Following language instructions
- Basic object manipulation

### After Fine-tuning

Specialization with small additional data:

| Task | Required Data |
|------|---------------|
| Laundry folding | ~few hours |
| Box assembly | ~few hours |
| Complex manipulation | 1-20 hours |

### Adaptive Behavior

- Recovery after human intervention
- Retry after failure
- Handling various object shapes

---

## Deployment Modes

### 1. Zero-shot

```
Language instruction -> Pi0 -> Robot action
```

- Use immediately without additional training
- Suitable for tasks within training distribution

### 2. Fine-tuning

```
Small demonstration data -> Pi0 fine-tuning -> Specialized Pi0
```

- 1-20 hours of data sufficient
- Adapts to new tasks/environments

### 3. Language-Conditioned

```
High-level VLM planning -> Pi0 execution
```

- External VLM generates high-level plan
- Pi0 handles low-level execution

---

## Open Source Release

Released through openpi repository in February 2025:

### Released Models

| Model | Description |
|-------|-------------|
| Pi0 base | Pretrained model for fine-tuning |
| Pi0-FAST base | FAST tokenizer applied (5x faster training) |
| Pi0 DROID | Franka single arm fine-tuned |
| Pi0 ALOHA | Bimanual manipulation fine-tuned |
| Pi0 Libero | Simulation environment fine-tuned |

### Provided Resources

- JAX original implementation
- PyTorch implementation (HuggingFace LeRobot)
- Fine-tuning scripts
- Inference code

### Pi0-FAST

Autoregressive version with FAST tokenizer applied:

| Feature | Details |
|---------|---------|
| Training Speed | 5x faster |
| Language Understanding | Better instruction following |
| Inference Cost | 4-5x higher |

---

## Variants

| Variant | Method | Features |
|---------|--------|----------|
| **Pi0** | Flow Matching | Fast inference, continuous action |
| **Pi0-FAST** | Autoregressive | Fast training, better language understanding |
| **Pi0-Small** | Flow Matching | No VLM, lightweight |

---

## Subsequent Versions

Evolved versions after Pi0:

| Version | Released | Key Improvements |
|---------|----------|------------------|
| [Pi0.5](pi0-5.md) | 2025.04 | Open-world generalization |
| [Pi*0.6](pi0-6-star.md) | 2025.11 | RL self-improvement |

Full series overview: [Pi Series](pi-series.md)

---

## References

- [Physical Intelligence Blog - Pi0](https://www.pi.website/blog/pi0)
- [arXiv Paper](https://arxiv.org/abs/2410.24164)
- [GitHub - openpi](https://github.com/Physical-Intelligence/openpi)
- [Open Sourcing Pi0](https://www.pi.website/blog/openpi)
- [HuggingFace Blog](https://huggingface.co/blog/pi0)

---

## See Also

- [Pi Series](pi-series.md)
- [Pi0.5](pi0-5.md)
- [Pi*0.6](pi0-6-star.md)
- [Physical Intelligence](../companies/physical-intelligence.md)
- [Diffusion Policy](diffusion-policy.md)

### Related People
- [Karol Hausman](../people/karol-hausman.md) - Physical Intelligence Co-founder
- [Chelsea Finn](../people/chelsea-finn.md) - Physical Intelligence Co-founder
- [Sergey Levine](../people/sergey-levine.md) - Physical Intelligence Co-founder
- [Pete Florence](../people/pete-florence.md) - Physical Intelligence Co-founder
