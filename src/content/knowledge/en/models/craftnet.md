---
title: CraftNet
description: Sharpa's Tactile-based Vision-Tactile-Language-Action (VTLA) Model
tags: [craftnet, sharpa, vtla, tactile, fine-manipulation, hierarchical]
category: models

# Authorship
createdBy:
  name: Jong Hyun Park
  email: jhpark@sudormrf.run
lastEditedBy:
  name: Jong Hyun Park
  email: jhpark@sudormrf.run
lastEditedAt: 2026-01-30
---

<div class="author-note">

### Author's Note

- CraftNet is the first commercial model to fully integrate tactile sensing into a VLA.
- The System 0/1/2 hierarchy is similar to Figure Helix 02, but differentiated by its specialization in tactile feedback.
- The key innovation is 100Hz high-frequency tactile control for solving the "last millimeter" problem.

</div>

## Key Significance

- **First Commercial VTLA**: Vision-Tactile-Language-Action, integrating tactile as a core modality
- **Three-Layer Hierarchical Architecture**: System 2 (~1Hz) + System 1 (~10Hz) + System 0 (~100Hz)
- **Solves "The Last Millimeter"**: High-frequency tactile feedback loop for post-contact fine manipulation
- **Synthetic Tactile Data**: Enriches simulation, teleoperation, and internet video with tactile information
- **SharpaWave Integration**: Combined with tactile hand featuring 1,000+ tactile pixels and 0.005N sensitivity

<div class="video-embed">
<iframe width="100%" height="400" src="https://www.youtube.com/embed/W7q-qlj4EFc" title="Sharpa CES 2026 Demo" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>
<p align="center"><em>Sharpa CES 2026 Demo - North Humanoid with CraftNet</em></p>

---

## Overview

| Item | Details |
|------|---------|
| Announced | 2025 |
| Company | Sharpa (Singapore) |
| Blog | [sharpa.com/blogs/news](https://www.sharpa.com/blogs/news/sharpa-announces-craftnet-a-hierarchical-vtla-model-for-fine-manipulation) |
| Robot | North Humanoid |
| Hardware | SharpaWave Tactile Hand |

CraftNet is a hierarchical Vision-Tactile-Language-Action (VTLA) model developed by Sharpa, designed for fine manipulation tasks.

---

## Architecture: System 0/1/2

CraftNet is a hierarchical system operating across three frequency bands.

![CraftNet Architecture](/assets/models/craftnet/craftnet.webp)
<p align="center"><em>CraftNet Architecture: System 0/1/2 Hierarchical Structure</em></p>

### System 2 (Reasoning Brain) - ~1 Hz

| Item | Details |
|------|---------|
| Role | Task decomposition, long-horizon planning |
| Base | Vision-Language Model |
| Feature | Open-source VLM interface |

- Decomposes human instructions into sequential sub-tasks
- High-level reasoning and decision-making
- Leverages open-source VLMs pre-trained on internet-scale data

### System 1 (Motion Brain) - ~10 Hz

| Item | Details |
|------|---------|
| Role | Motion planning, coarse action control |
| Base | Foundation Model |
| Feature | Pre-contact approach optimization |

- Plans trajectories for object approach
- Trained on public/private domain data
- Transforms System 2 goals into executable motions

### System 0 (Interaction Brain) - ~100 Hz

| Item | Details |
|------|---------|
| Role | Super high-frequency fine-motor control |
| Base | Tactile feedback model |
| Feature | Real-time contact adjustment |

- **Key Differentiator**: Real-time tactile feedback processing
- Continuously adjusts hand/finger positions during contact
- Handles grasping, sliding, and complex assembly tasks

---

## Core Technology: Tactile Integration

### Limitations of Existing VLAs

Existing VLAs focus on vision-based trajectory generation with three limitations:

1. **No Tactile**: Using only vision without force and tactile feedback
2. **No Post-Contact Control**: Unable to handle "the last millimeter" of manipulation
3. **Unrealistic Simulation**: Force/compliance patterns in simulated data don't match reality

### CraftNet's Solutions

| Problem | Solution |
|---------|----------|
| No Tactile | Integrates force/tactile feedback alongside vision |
| No Post-Contact Control | System 0's 100Hz high-frequency feedback loop |
| Data Scarcity | Enriches existing data with synthetic tactile information |

---

## Data Strategy

### Synthetic Tactile Data

CraftNet enriches data from various sources with tactile information:

| Data Source | Processing Method |
|-------------|-------------------|
| Simulation | Corrects unrealistic force/compliance patterns |
| Teleoperation | Joint training of System 0/1 with high-quality data |
| Internet Video | Adds synthetic tactile information |

### Asynchronous Multi-Frequency Inference

- Three systems operate independently at different frequencies
- Temporal decoupling enables efficient computation

---

## Hardware: SharpaWave

CraftNet is designed to work with Sharpa's SharpaWave tactile hand.

### Specifications

| Item | Spec |
|------|------|
| DoF | 22 DoF (active) |
| Tactile Technology | Dynamic Tactile Array (DTA) |
| Tactile Pixels | 1,000+ per fingertip |
| Pressure Sensitivity | 0.005 N |
| Force Sensing | 6-axis |
| Durability | 1 million grip cycles |
| Feature | Modular finger replacement |

### Dynamic Tactile Array (DTA)

- **"Feel by Seeing"** vision-tactile fusion technology
- Miniature camera in each fingertip
- Handles feather-light contact to heavy load manipulation

---

## Hardware: North Humanoid

Sharpa's humanoid robot equipped with CraftNet.

- Unveiled at CES 2026
- Demonstrated fully autonomous ping-pong rallies
- Equipped with SharpaWave hands

---

## Company: Sharpa

| Item | Details |
|------|---------|
| Founded | 2024 |
| Headquarters | Singapore |
| R&D | Shanghai |
| Business | Mountain View, USA |
| Award | CES 2026 Innovation Award (Robotics) |

### Milestones

| Date | Event |
|------|-------|
| 2024 | Sharpa founded |
| 2025.10 | SharpaWave demonstrated at IROS 2025 |
| 2025.10 | SharpaWave mass production and shipping begins |
| 2025.11 | CES 2026 Innovation Award received |
| 2026.01 | North humanoid unveiled at CES 2026 |

---

## Comparison with Other Hierarchical VLAs

| Model | System 2 | System 1 | System 0 | Tactile |
|-------|----------|----------|----------|---------|
| CraftNet | ~1Hz (VLM) | ~10Hz (Motion) | ~100Hz (Tactile) | Yes |
| [Figure Helix 02](figure-helix) | Semantic Reasoning | 200Hz (Visuomotor) | 1kHz (Balance) | Yes |
| [GR00T N1](groot-n1) | 10Hz (Eagle VLM) | 120Hz (DiT) | - | No |

---

## References

- [Sharpa - CraftNet Announcement](https://www.sharpa.com/blogs/news/sharpa-announces-craftnet-a-hierarchical-vtla-model-for-fine-manipulation)
- [Sharpa - SharpaWave Mass Production](https://www.sharpa.com/blogs/news/ai-robotmaker-sharpa-reaches-key-milestone-of-mass-production)
- [Sharpa - CES 2026 Award](https://www.sharpa.com/blogs/news/singapores-sharpa-wins-ces-2026-innovation-award-for-groundbreak-ai-robotic-hand-sharpawave)

---

## See Also

- [Model List](./)
- [Figure Helix](figure-helix) - Another hierarchical VLA
- [The Need for Tactile Sensing](../essays/insights/tactile-sensing)
