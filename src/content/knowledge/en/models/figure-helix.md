---
title: Figure Helix
description: Figure AI's VLA Model for Humanoid Robots
tags: [figure-helix, figure-ai, humanoid, vla, figure-02, figure-03, helix-02]
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

- Helix 02 is the first humanoid VLA to control the full body with a single neural network.
- Performing 61 sequential actions over 4 minutes without resets proves real-world capability, not cherry-picked demos.
- Impressive that they've pushed control frequency to 1kHz with the three-layer System 0/1/2 architecture.

</div>

## Key Significance

- **First Full-Body Autonomous Humanoid**: Single neural system that controls the full body directly from pixels
- **Longest Autonomous Task**: 4-minute continuous operation with 61 sequential loco-manipulation actions, no resets or human intervention
- **Three-Layer Architecture**: System 0 (1kHz) + System 1 (200Hz) + System 2 (semantic reasoning)
- **New Sensors**: Palm cameras and tactile sensors detecting forces as small as 3g
- **Replaces 100K Lines**: 10-million parameter neural network replaces 109,504 lines of hand-engineered C++ code

<div class="video-embed">
<iframe width="100%" height="400" src="https://www.youtube.com/embed/lQsvTrRTBRs" title="Figure Helix 02 - Official Demo" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>
<p align="center"><em>Figure Helix 02 Official Demo Video (2026.01)</em></p>

---

## Overview

| Item | Details |
|------|---------|
| Latest Version | Helix 02 (January 2026) |
| Company | Figure AI |
| Blog | [figure.ai/news/helix-02](https://www.figure.ai/news/helix-02) |
| Robot | Figure 02 |

---

## Helix 02 (2026.01)

### Key Advancements

Helix 02 is the first humanoid with **"a single neural system that controls the full body directly from pixels."**

| Feature | Helix (2025.02) | Helix 02 (2026.01) |
|---------|-----------------|---------------------|
| Control Range | Upper body focused | Full body (locomotion + manipulation integrated) |
| Architecture | System 1/2 | System 0/1/2 |
| Max Frequency | 200Hz | 1kHz |
| Tactile Sensors | None | Detects 3g forces |
| Palm Cameras | None | Yes |

### 4-Minute Continuous Autonomous Task

Dishwasher loading/unloading across an entire kitchen:

| Item | Value |
|------|-------|
| Continuous Operation Time | 4 minutes |
| Sequential Loco-manipulation Actions | 61 |
| Resets/Human Intervention | None |

### Dexterity Demonstrations

- Unscrewing bottle caps with torque control
- Extracting individual pills from organizers despite occlusion
- Dispensing precisely 5ml from syringes
- Singulating small metal pieces from cluttered bins

---

## Architecture: System 0/1/2

Helix 02 uses a three-layer hierarchical architecture.

<video src="/assets/models/figure-helix/helix_02.mp4" controls width="100%" style="border-radius: 8px; margin: 1rem 0;"></video>
<p align="center"><em>Helix 02 System 0/1/2 Architecture Explanation</em></p>

### System 0 (S0) - Physical Execution Layer

| Item | Details |
|------|---------|
| Frequency | 1 kHz |
| Parameters | 10 million |
| Training Data | 1,000+ hours of human motion data |
| Simulation | 200,000+ parallel environments with domain randomization |
| Replaced Code | 109,504 lines of hand-engineered C++ |

Handles real-time balance and contact management.

### System 1 (S1) - Visuomotor Control

| Item | Details |
|------|---------|
| Frequency | 200 Hz |
| Architecture | Transformer conditioned on System 2 latents |
| Structure | "Pixels-to-whole-body" (all sensors → all actuators) |

**Sensor Inputs:**
- Head cameras
- Palm cameras
- Fingertip tactile sensors
- Proprioception

**Actuator Outputs:**
- Complete joint control: legs, torso, head, arms, wrists, individual fingers

### System 2 (S2) - Semantic Reasoning

- Processes visual scenes and language commands
- Sequences high-level behaviors ("Walk to dishwasher and open it")
- Generates latent goals without specifying low-level coordination

---

## New Hardware Capabilities

### Palm Cameras

- Cameras mounted on palms
- Enable in-hand visual feedback when objects are occluded from head perspective

### Tactile Sensors

- **Sensitivity**: Detects forces as small as 3g ("sensitive enough to feel a paperclip")
- Force-modulated grasping across five-fingered hands

---

## Helix (2025.02) - Initial Version

![Helix Architecture](/assets/models/figure-helix/helix_architecture.png)
<p align="center"><em>Helix Architecture: System 1 (200Hz low-level control) + System 2 (7-9Hz high-level planning)</em></p>

### Key Features

- First full-body high-speed control VLA for humanoids
- Controls upper body (wrists, torso, head, individual fingers) at 200Hz
- Dual robot simultaneous control

### Table-to-Dishwasher Task

| Item | Value |
|------|-------|
| Distance Traveled | 130+ feet |
| Unique Interactions | 33 |
| Number of Objects | 21 (including delicate dishes) |

---

## Hardware: Figure 02

| Item | Spec |
|------|------|
| DoF | 35 DoF |
| Hands | Human-like wrists, hands, fingers |
| Computing | NVIDIA RTX GPU (3x previous) |
| Cameras | Head 6x RGB + Palm cameras (Helix 02) |
| Tactile Sensors | Fingertips (Helix 02) |
| Hand Payload | Up to 25kg |

---

## Hardware: Figure 03 (2025.10)

Figure 03 is the third-generation humanoid robot designed for home environments.

### Figure 02 vs Figure 03

| Feature | Figure 02 | Figure 03 |
|---------|-----------|-----------|
| Target Environment | Industrial (BMW factory) | Home |
| Weight | Baseline | 9% lighter |
| Exterior | Hard machined parts | Soft textiles + multi-density foam |
| Battery | - | 5-hour runtime, 2kW wireless charging |
| Data Transfer | - | 10 Gbps mmWave |

### Vision System

| Item | Spec |
|------|------|
| Total Cameras | 8 (Head 6 + Palm 2) |
| Frame Rate | 2x improved |
| Latency | Reduced to 1/4 |
| Field of View | 60% wider |

### Tactile Sensors

- Fingertip sensors: Detect forces as small as 3g (paperclip weight)
- Custom-developed first-generation tactile sensors

### Battery & Charging

| Item | Spec |
|------|------|
| Model | F.03 Battery |
| Runtime | ~5 hours |
| Charging | 2kW wireless inductive charging (foot coils) |
| Certification | UN38.3, targeting UL standard |
| Data Offload | 10 Gbps mmWave (for fleet learning) |

### Safety Design

- Covered in soft textiles (washable, tool-free removal)
- Multi-density foam eliminates pinch points
- Optional: Cut-resistant garments
- Customizable side screens (fleet branding)

### Manufacturing: BotQ

| Item | Details |
|------|---------|
| Current Capacity | 12,000 units/year |
| 4-Year Goal | 100,000 total units |
| Manufacturing | Shift from CNC to die-casting, injection molding, stamping |
| Expected Price | ~$20,000 |

---

## Figure AI History

| Date | Event |
|------|-------|
| 2022 | Figure 01 - First prototype, bipedal, targeting logistics/warehousing |
| 2024.08 | Figure 02 - Industrial deployment, BMW factory testing |
| 2025.02 | Helix - First full-body humanoid VLA |
| 2025.10 | Figure 03 - Home humanoid, soft design |
| 2026.01 | Helix 02 - Full-body autonomy, System 0/1/2 architecture |

---

## Funding & Partnerships

| Timing | Details |
|--------|---------|
| 2024.01 | BMW partnership (automotive manufacturing deployment) |
| 2024.02 | $675M funding (valuation $2.6B) |
| Investors | Jeff Bezos, Microsoft, NVIDIA, Intel, Amazon, OpenAI |

---

## References

- [Figure AI - Helix 02](https://www.figure.ai/news/helix-02)
- [Figure AI - Figure 03](https://www.figure.ai/news/introducing-figure-03)
- [Figure AI - Helix](https://www.figure.ai/news/helix)
- [Helix Logistics](https://www.figure.ai/news/helix-logistics)
- [Figure AI Wikipedia](https://en.wikipedia.org/wiki/Figure_AI)

---

## See Also

- [Model List](./)
- [GR00T](groot)
- [pi0](pi0)
