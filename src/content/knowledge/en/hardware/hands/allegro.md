---
title: Allegro Hand
description: Wonik Robotics' 4-finger dexterous hand for research
tags:
  - allegro
  - hand
  - dexterous
  - wonik
  - manipulation
  - grasping
  - research
category: hardware

# Authorship
createdBy:
  name: Jong Hyun Park
  email: jhpark@sudormrf.run
lastEditedBy:
  name: Jong Hyun Park
  email: jhpark@sudormrf.run
lastEditedAt: 2026-01-15
---

# Allegro Hand

> Home > Hardware > Hands > Allegro Hand

<!-- Image pending: ![Allegro Hand](../../assets/hardware/hands/allegro.png) -->
<!-- TODO: Image file needs to be added -->

---

## Overview

**Allegro Hand** is a multi-fingered robot hand for research developed by **Wonik Robotics** in South Korea. It was commercialized under license based on technology developed by the Humanoid Robot Hand Research Group at the Korea Institute of Industrial Technology (KITECH).

### Technical Specifications

| Item | Spec |
|------|------|
| Manufacturer | Wonik Robotics |
| Headquarters | Seongnam, Gyeonggi Province, South Korea |
| DoF | 16 (4 fingers x 4 joints) |
| Fingers | 4 (including thumb) |
| Weight | Approximately 1.08 kg |
| Payload | Approximately 5 kg |
| Max Torque | 0.70 Nm |
| Max Joint Speed | 0.11 s/60° |
| Joint Sensor | Potentiometer (resolution: 0.002°) |
| Communication | CAN bus (1 Mbps) |
| Control Frequency | 333 Hz |
| Price Range | $15,000 - $16,000 |

---

## Key Significance

Allegro Hand has established itself as a **standard platform for dexterous manipulation research**:

1. **Accessible Pricing**: At approximately 1/6 the price of Shadow Hand ($100K+), suitable for research lab deployment
2. **Research-Friendly Design**: 16 DoF independent torque control enables complex grasping/manipulation research
3. **Rich Ecosystem**: ROS support, simulation environment integration (MuJoCo, Isaac Gym), various research papers
4. **Anthropomorphic Structure**: 4-finger structure including thumb suitable for human hand movement research

---

## Version History

| Version | Release | Key Features | Notes |
|---------|---------|--------------|-------|
| v1.0 | Early | Basic functionality | Reliability issues reported |
| v2.0 | - | Improved design | Some hardware issues |
| v3.0 | - | Enhanced stability | Continuous improvements |
| v4.0 | Early 2020s | **Major technical/design improvements** | Current main model |
| v5 (3F) | Latest | 9 DoF, 360° tactile sensors | 3-finger version |
| v5 Plus (4F) | Latest | 16 DoF, 360° tactile sensors | 4-finger premium |

### v4.0 Key Improvements

- **Significantly Enhanced Reliability**: Resolved hardware issues from previous versions
- **Improved Usability**: Simplified setup and operation
- **Design Improvements**: Enhanced appearance and structural completeness
- **Expanded Sensor Options**: Various fingertip sensors and attitude/orientation sensors (AHRS) available
- **Software Support**: Improved ROS packages (Python library, 32/64-bit support)

---

## VLA Research Applications

Allegro Hand is widely used in Vision-Language-Action (VLA) and learning-based manipulation research:

### Major Research Cases

| Research Area | Application | Notes |
|---------------|-------------|-------|
| **Imitation Learning** | Data collection via teleoperation, then BC/DAPG training | CMU LEAP Hand comparison study |
| **Reinforcement Learning (RL)** | MuJoCo/Isaac Gym simulation → Sim2Real transfer | Standard platform for policy learning |
| **Visuomotor Diffusion** | Complex in-hand manipulation with visual-motor diffusion policy | Lid turning, etc. |
| **MPC with Forward Models** | In-hand manipulation with forward model-based MPC | Luo et al., 2023 |
| **Grasp Planning** | Grasp planning considering uncertainty | Comparison with Barrett Hand |

### Learning-Based Research Advantages

1. **DAPG (Demo Augmented Policy Gradient)**: Effective policy learning in sparse reward environments
2. **Multimodal Feedback**: Integration of vision, tactile, and proprioception possible
3. **Sim2Real Transfer**: Easy application to actual hardware after simulation training

### Limitations

- Limited finger count compared to Shadow Hand (5 → 4)
- Pre-v5 models lack built-in tactile sensors (separate purchase required)
- No wrist joint (separate robot arm required)

---

## Hardware Connection

### Communication Interface

- **CAN Bus**: 1 Mbps speed, multiple hands can be connected simultaneously
- **Supported CAN Interfaces**: NI USB-8473s, PEAK CAN, etc.
- **Connector**: JST PHD series 20-pin (power and communication)

### Mounting

- Mounting block: Uses 6 M3 flat head screws (3 on each side)
- Compatible with standard robot arms (UR, Franka, KUKA LWR, etc.)

---

## Software Support

| Platform | Support |
|----------|---------|
| ROS/ROS2 | Official support (v1, v2, v4) |
| Windows | Supported |
| Linux | Supported (32/64-bit) |
| MuJoCo | Community models |
| Isaac Gym | Community models |

---

## Purchase Information

- **Price Inquiry**: robotics.biz@wonik.com
- **Warranty**: 90-day hardware warranty
- **Options**: Fingertip sensors, AHRS sensors available separately

---

## References

- [Allegro Hand Official Site](https://www.allegrohand.com/)
- [Wonik Robotics Official Site](https://www.wonikrobotics.com/)
- [Allegro Hand Wiki](http://wiki.wonikrobotics.com/AllegroHandWiki/)
- [ROS Package (v4)](https://github.com/simlabrobotics/allegro_hand_ros_v4)
- [Dexterous Manipulation for Multi-Fingered Robotic Hands With Reinforcement Learning: A Review](https://www.frontiersin.org/journals/neurorobotics/articles/10.3389/fnbot.2022.861825/full)
- [Survey of Learning-Based Approaches for Robotic In-Hand Manipulation](https://www.frontiersin.org/journals/robotics-and-ai/articles/10.3389/frobt.2024.1455431/full)

---

## See Also

- [Hardware List](../index.md)
- [Shadow Hand](shadow-hand.md)
- [LEAP Hand](leap-hand.md)
