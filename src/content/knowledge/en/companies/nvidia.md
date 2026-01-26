---
title: NVIDIA
description: NVIDIA's Robotics Infrastructure - Isaac, Omniverse, Cosmos, GR00T, Jetson
tags: [nvidia, omniverse, cosmos, simulation, world-model, isaac, groot, jetson, gear-lab]
category: companies

# Authorship
createdBy:
  name: Jong Hyun Park
  email: jhpark@sudormrf.run
lastEditedBy:
  name: Jong Hyun Park
  email: jhpark@sudormrf.run
lastEditedAt: 2026-01-26
---

## Overview

NVIDIA goes beyond GPUs to provide core infrastructure for robotics AI. They are building a full-stack robotics solution spanning simulation (Omniverse), world models (Cosmos), humanoid models (GR00T), development platforms (Isaac), and edge computing (Jetson).

| Item | Details |
|------|---------|
| Headquarters | Santa Clara, CA |
| CEO | Jensen Huang |
| Robotics Research Lab | GEAR Lab (Generalist Embodied Agent Research) |
| Core Products | Isaac, Omniverse, Cosmos, GR00T, Jetson |

---

## GEAR Lab

The core organization leading NVIDIA's Physical AI research.

| Item | Details |
|------|---------|
| Full Name | Generalist Embodied Agent Research |
| Co-Leaders | Jim Fan, Yuke Zhu |
| Research Areas | Foundation Models, World Models, Embodied AI |

### Key People

- **Jim Fan**: NVIDIA Robotics Director & Distinguished Scientist. Stanford Ph.D., OpenAI's first intern
- **Yuke Zhu**: Associate Professor at UT Austin, NVIDIA Director & Distinguished Research Scientist. Leads RPL Lab

---

## Isaac Platform

An end-to-end platform for robot development.

### Isaac Sim

| Feature | Description |
|---------|-------------|
| Physics Engine | PhysX 5 based |
| Rendering | RTX ray tracing |
| Sensor Simulation | Camera, LiDAR, IMU |
| Integration | ROS 2, USD support |

### Isaac Lab

Reinforcement learning/imitation learning training environment:
- GPU-parallel simulation
- Domain Randomization
- Sim-to-Real pipeline

### Isaac Lab-Arena (2026)

Simulation evaluation framework announced at CES 2026:
- Integrates Libero, RoboCasa, RoboTwin benchmarks
- Virtual validation of robot capabilities

---

## Omniverse

A physically accurate digital twin platform.

### Core Features

| Feature | Description |
|---------|-------------|
| USD | Universal Scene Description |
| RTX | Real-time ray tracing |
| PhysX | Physics simulation |
| Nucleus | Collaborative data layer |

### Robotics Applications

```
[Real Factory] ──3D Scan──→ [Digital Twin] ──Simulation──→ [Robot Training]
                                  ↓
                            [Real Deployment]
```

---

## Cosmos

### World Foundation Model

World model platform announced at CES in January 2025.

| Item | Details |
|------|---------|
| Purpose | World Model for Physical AI |
| Training Data | 20M hours of video (9,000 trillion tokens) |
| Model Types | Nano, Super, Ultra |
| Applications | Robotics, autonomous driving |

### Core Capabilities

- **Physical Future Prediction**: Predicting what happens next
- **Synthetic Data Generation**: Training data augmentation
- **Reasoning**: Simulating action consequences

Jensen Huang: "The ChatGPT moment for robotics is coming"

---

## GR00T (Project)

### Humanoid Foundation Model

| Item | Details |
|------|---------|
| Announcement | GTC 2024 (March 2024) |
| Name Meaning | Generalist Robot 00 Technology |
| Target | Humanoid robots |
| Architecture | Dual-System (System 1 + System 2) |

### Dual-System Architecture

Inspired by principles of human cognition:
- **System 1**: Fast-thinking (actions/skills) - Diffusion Transformer
- **System 2**: Slow-thinking (reasoning/planning) - Vision-Language Model

### GR00T N1 (March 2025)

Open-source humanoid VLA announced at GTC 2025:
- Vision-Language-Action model
- Cross-embodiment support
- Available on Hugging Face (nvidia/GR00T-N1-2B)

### GR00T N1.5 (June 2025)

Announced at COMPUTEX 2025:
- GR00T-Dreams synthetic data generation
- RTX PRO 6000 system integration

### GR00T N1.6 (September 2025)

Announced at CoRL 2025:
- Cosmos Reason integration
- Enhanced reasoning capabilities

---

## Newton Physics Engine

### Open-Source Physics Engine

| Item | Details |
|------|---------|
| Announcement | GTC 2025 (March 2025) |
| Co-Developed By | NVIDIA, Google DeepMind, Disney Research |
| Governance | Linux Foundation |
| Built On | NVIDIA Warp, OpenUSD |

### Performance

- 152x faster than MuJoCo MJX for humanoid locomotion
- 313x faster for manipulation tasks (on RTX 4090)

---

## Jetson Hardware

### Jetson Thor

| Item | Details |
|------|---------|
| Announcement | GTC 2024 (March 2024) |
| Availability | August 2025 |
| Architecture | Blackwell GPU |
| Performance | 2070 TFLOPS (FP4) |
| Memory | 128GB |
| Power | 40W - 130W |

### Pricing

- Developer Kit: $3,499
- T5000 module: $2,999 (at 1,000 units)

### Jetson T4000 (2026)

Announced at CES 2026:
- Blackwell architecture based
- $1,999 (at 1,000 units)
- Upgrade path for Jetson Orin customers

---

## Partnerships

### Humanoid Partners

| Company | Robot | Collaboration |
|---------|-------|---------------|
| Boston Dynamics | Atlas | Jetson Thor integration announced |
| Figure AI | Figure 02 | Using Isaac/Omniverse |
| Agility Robotics | Digit | Jetson Thor planned for Digit Gen 6 |
| 1X Technologies | NEO | GR00T platform |
| Apptronik | Apollo | Isaac simulation |
| Unitree Robotics | - | GR00T partner |
| XPENG Robotics | - | GR00T partner |
| Sanctuary AI | - | GR00T N1 early access |
| Fourier Intelligence | - | Cosmos early adopter |

### Automotive/Industrial Partners

- Mercedes-Benz (factory digital twin)
- BMW (manufacturing simulation)
- Johnson & Johnson MedTech (surgical robot simulation)

### Research Partners

- Google DeepMind (Newton co-development)
- Disney Research (Newton co-development, robot characters)
- Hugging Face (LeRobot integration)

---

## Strategic Position

```
                  ┌─────────────────┐
                  │     Cosmos      │ ← World Model
                  │ (Physical Pred) │
                  └────────┬────────┘
                           │
┌──────────┐      ┌────────▼────────┐      ┌──────────┐
│  Isaac   │──────│   Omniverse     │──────│  GR00T   │
│  (SDK)   │      │  (Simulation)   │      │ (Model)  │
└──────────┘      └────────┬────────┘      └──────────┘
                           │
                  ┌────────▼────────┐
                  │  Jetson Thor    │ ← Hardware
                  │ (Edge Inference)│
                  └─────────────────┘
```

NVIDIA's strategy is to dominate the **infrastructure layer** of robotics AI. They have 2M+ robotics developers and 150+ partner ecosystem.

---

## References

- [NVIDIA Isaac](https://developer.nvidia.com/isaac)
- [NVIDIA Omniverse](https://www.nvidia.com/en-us/omniverse/)
- [NVIDIA Cosmos](https://www.nvidia.com/en-us/ai/cosmos/)
- [Project GR00T](https://developer.nvidia.com/project-groot)
- [NVIDIA GEAR Lab](https://research.nvidia.com/labs/gear/)
- [Newton Physics Engine](https://developer.nvidia.com/newton-physics)
- [Jetson Thor](https://www.nvidia.com/en-us/autonomous-machines/embedded-systems/jetson-thor/)

---

## See Also

- [Company List](./)
- [GR00T](../models/groot)
- [Simulation & World Model](../essays/insights/simulation-world-model)
