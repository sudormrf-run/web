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

<div class="author-note">

### Author's Note

- **Proved the potential of VLM + Flow Matching Action Expert**. Demonstrated the viability of combining a pretrained VLM backbone with a Flow Matching-based Action Expert, inspiring many subsequent works to adopt similar approaches.
- **Pioneer of General Robot Policy**. First case to show actual success on cross-embodiment and dexterous tasks.
- **Proved teleop-based real data training works**. Demonstrated that collecting large-scale teleoperation data enables general-purpose robot policies.

</div>

## Key Significance

- **Flow Matching-based VLA Design**: Introduced a new VLA design combining pretrained VLM with Flow Matching-based continuous action generation
- **VLM Knowledge Transfer to Robots**: Leverages PaliGemma (3B) VLM's internet-scale knowledge for dexterous manipulation
- **50Hz High-Frequency Control**: Generates 50 motor commands per second via Action Chunking
- **8 Robot Platforms**: Learns across diverse embodiments including single arm, bimanual, and mobile manipulators
- **Dominates OpenVLA/Octo**: Overwhelming performance advantage over existing open-source VLAs in complex dexterous tasks
- **Open-Source Release**: Complete release of weights, training code, JAX/PyTorch implementation via openpi

![Pi0 Overview](/assets/models/pi0/pi0.png)
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

![Pi0 Zero-shot Performance Comparison](/assets/models/pi0/pi0-results.png)
<p align="center"><em>Pi0 Zero-shot Performance vs OpenVLA/Octo on Complex Dexterous Tasks</em></p>

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
| [Pi0.5](pi0-5) | 2025.04 | Open-world generalization |
| [Pi*0.6](pi0-6-star) | 2025.11 | RL self-improvement |

Full series overview: [Pi Series](pi-series)

---

## References

- [Physical Intelligence Blog - Pi0](https://www.pi.website/blog/pi0)
- [arXiv Paper](https://arxiv.org/abs/2410.24164)
- [GitHub - openpi](https://github.com/Physical-Intelligence/openpi)
- [Open Sourcing Pi0](https://www.pi.website/blog/openpi)
- [HuggingFace Blog](https://huggingface.co/blog/pi0)

---

## See Also

- [Pi Series](pi-series)
- [Pi0.5](pi0-5)
- [Pi*0.6](pi0-6-star)
- [Physical Intelligence](/knowledge/companies/physical-intelligence)
- [Diffusion Policy](diffusion-policy)

### Related People
- [Karol Hausman](/knowledge/people/karol-hausman) - Physical Intelligence Co-founder
- [Chelsea Finn](/knowledge/people/chelsea-finn) - Physical Intelligence Co-founder
- [Sergey Levine](/knowledge/people/sergey-levine) - Physical Intelligence Co-founder
- [Pete Florence](/knowledge/people/pete-florence) - Physical Intelligence Co-founder
