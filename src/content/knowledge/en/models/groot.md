---
title: GR00T (Project GR00T)
description: NVIDIA's Humanoid Robot Foundation Model Series
tags: [groot, nvidia, humanoid, foundation-model, vla]
category: models

# Authorship
createdBy:
  name: Jong Hyun Park
  email: jhpark@sudormrf.run
lastEditedBy:
  name: Jong Hyun Park
  email: jhpark@sudormrf.run
lastEditedAt: 2026-01-20
---

<div class="author-note">

### Author's Note

- **First open humanoid VLA**. GR00T N1 opened the era of open foundation models for humanoid robots.
- **Practical Dual-System architecture**. A representative example of human cognition-inspired System 1/2 separation applied to real robot VLA.
- **Demonstrated synthetic data potential**. Showed the viability of a training pipeline that reduces teleop dependency through Isaac Sim physics simulation + Neural Trajectory generation.

</div>

## Overview

| Item | Details |
|------|---------|
| Initial Announcement | March 2024 (GTC 2024) |
| N1 Open-Source Release | March 2025 (GTC 2025) |
| Company | [NVIDIA](../companies/nvidia) |
| GitHub | [NVIDIA/Isaac-GR00T](https://github.com/NVIDIA/Isaac-GR00T) |
| License | Apache 2.0 |

---

## Version History

| Item | [N1](groot-n1) | [N1.5](groot-n1-5) | [N1.6](groot-n1-6) |
|------|----------------|--------------------|--------------------|
| **Announced** | 2025.03 GTC | 2025.05 Computex | 2025.09 CoRL |
| **Parameters** | 2.2B | 3B | 3B |
| **VLM** | Eagle2-1B | Eagle 2.5 (Frozen) | Cosmos-Reason-2B |
| **DiT Layers** | 16 | 16 | **32** |
| **Action Space** | Absolute | Absolute | **Relative** |
| **Key Improvement** | First open-source | FLARE, 2x language compliance | Scale-up, Loco-manipulation |

---

## Dual-System Architecture

![GR00T N1 Architecture](../assets/models/groot/groot_n1_architecture.png)
<p align="center"><em>GR00T N1 Architecture: System 2 (VLM) + System 1 (DiT) Dual-System Structure</em></p>

Inspired by human cognition principles (Kahneman, 2011):

| System | Role | Implementation |
|--------|------|----------------|
| **System 2** (Slow) | Environment understanding, planning | Vision-Language Model |
| **System 1** (Fast) | Convert plans to precise motions | Diffusion Transformer |

---

## References

- [NVIDIA Developer - Isaac GR00T](https://developer.nvidia.com/isaac/gr00t)
- [GitHub - Isaac-GR00T](https://github.com/NVIDIA/Isaac-GR00T)
- [GR00T N1 Paper (arXiv:2503.14734)](https://arxiv.org/abs/2503.14734)

---

## See Also

### GR00T Series
- [GR00T N1](groot-n1) - First Open-Source Model
- [GR00T N1.5](groot-n1-5) - Language Understanding Improvement, FLARE
- [GR00T N1.6](groot-n1-6) - Scale Expansion, Loco-manipulation

### Related Models
- [Eagle](eagle) - VLM for N1, N1.5
- [Cosmos](cosmos) - VLM for N1.6
- [DreamGen](dreamgen) - Synthetic Data Generation

### Related People
- [Yuke Zhu](../people/yuke-zhu) - NVIDIA GEAR Lab Co-Lead
- [Jim Fan](../people/jim-fan) - NVIDIA GEAR Lab Co-Lead
