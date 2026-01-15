---
title: Gemini Robotics
description: Google DeepMind's Gemini 2.0-based Robotics Model
tags: [gemini-robotics, google, deepmind, gemini, vla]
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

- **Pinnacle of Large LLM-Based VLAs**: Representative case of applying internet-scale knowledge to robotics based on Gemini 2.0
- **Cross-Embodiment Support**: Single model supports various robot forms from bimanual stationary (ALOHA, Franka) to humanoids (Apptronik Apollo)
- **System 1/2 Architecture**: In Gemini Robotics 1.5, "Think before action" - high-level reasoning/judgment in cloud, real-time action generation on-device
- **On-Device Version**: Network-independent low-latency inference considering actual deployment environments
- **CoRL 2025 Live Demo**: Operated booths at the conference where general attendees could directly experience actual operation
- **Expanded Data vs RT Series**: Training data scale significantly expanded compared to RT-1/2, though specific numbers undisclosed
- **Industry Partnerships**: Major humanoid companies like Boston Dynamics, Agility Robotics participating as trusted testers

![Gemini Robotics Overview](../assets/models/gemini-robotics/Gemini-robotics-overview.png)
<p align="center"><em>Gemini Robotics: Gemini 2.0-based VLA Model Family</em></p>

---

## Overview

Gemini Robotics is a Gemini 2.0-based robotics model series announced by Google DeepMind in March 2025. It adds physical actions as a new output modality to directly control robots.

| Item | Details |
|------|---------|
| Announced | March 12, 2025 |
| Base | Gemini 2.0 |
| Paper | [arXiv:2503.20020](https://arxiv.org/abs/2503.20020) |
| Official | [deepmind.google/models/gemini-robotics](https://deepmind.google/models/gemini-robotics/) |

---

## Model Family

### Gemini Robotics (Base)

VLA model that adds physical action output to Gemini 2.0.

### Gemini Robotics-ER

Version with **Embodied Reasoning** capabilities.
- Advanced spatial understanding
- Robotics program execution support

### Gemini Robotics On-Device (2025.06)

Most powerful VLA model that runs locally on robotic devices.

| Feature | Description |
|---------|-------------|
| Local Execution | Network independent |
| Low Latency | Suitable for latency-sensitive applications |
| Robustness | Intermittent/zero connectivity environments |

### Gemini Robotics 1.5

Most powerful version.
- Visual information → Motor command conversion
- "Think before action"
- Transparent display of work process

---

## Core Capabilities

Three essential characteristics for robotics AI:

| Characteristic | Description |
|----------------|-------------|
| **General** | Adapts to various situations |
| **Interactive** | Quickly responds to instructions/environmental changes |
| **Dexterous** | Performs delicate tasks with fingers |

---

## Performance

**2x+ performance over SOTA VLA on generalization benchmarks**

### Performable Tasks

- Origami
- Packing lunch box
- Preparing salad
- Other precision manipulation tasks

---

## Robot Compatibility

Single model supports various robot forms:

| Robot Type | Examples |
|------------|----------|
| Bimanual Stationary | ALOHA, Bi-arm Franka |
| Humanoid | Apptronik Apollo |

---

## Industry Partners

### Trusted Testers (Gemini Robotics-ER)
- Agile Robots
- Agility Robots
- Boston Dynamics
- Enchanted Tools

### Strategic Partner
- **Apptronik**: Developing next-generation humanoid with Gemini 2.0

---

## Relationship with RT Series

| Model | Period | Features |
|-------|--------|----------|
| RT-1 | 2022 | First Robotics Transformer |
| RT-2 | 2023 | First VLA (PaLM-E based) |
| RT-X | 2023 | Multi-robot |
| Gemini Robotics | 2025 | Gemini 2.0 based, most powerful |

---

## References

- [Google DeepMind - Gemini Robotics](https://deepmind.google/models/gemini-robotics/)
- [Blog - Gemini Robotics](https://deepmind.google/blog/gemini-robotics-brings-ai-into-the-physical-world/)
- [Blog - On-Device](https://deepmind.google/discover/blog/gemini-robotics-on-device-brings-ai-to-local-robotic-devices/)
- [arXiv Paper](https://arxiv.org/abs/2503.20020)
- [How Google Built Gemini Robotics](https://blog.google/products/gemini/how-we-built-gemini-robotics/)

---

## See Also

- [Model List](index)
- [RT](rt)
- [Google DeepMind](../companies/google-deepmind)
