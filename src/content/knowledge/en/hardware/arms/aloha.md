---
title: ALOHA
description: Low-cost open-source bimanual teleoperation platform
tags:
  - aloha
  - bimanual
  - teleoperation
  - stanford
  - trossen
  - viperx
  - act
  - imitation-learning
  - open-source
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

# ALOHA

> Home > Hardware > Arms > ALOHA

<!-- Image pending: ![ALOHA](../../assets/hardware/arms/aloha.png) -->
<!-- TODO: Image file needs to be added -->

---

## Overview

| Item | Details |
|------|---------|
| Full Name | A Low-cost Open-source Hardware System for Bimanual Teleoperation |
| Developer | Stanford IRIS Lab (Chelsea Finn) + Trossen Robotics |
| Key Researchers | Tony Z. Zhao, Zipeng Fu, Chelsea Finn |
| Publication | RSS 2023 |
| Configuration | ViperX 300 arms x 2 (Follower) + WidowX 250 arms x 2 (Leader) |
| Total Cost | Approximately $32,000 (including webcams, laptop) |
| Size | L121.9 x W101.6 x H203.2 cm |
| Applications | VLA data collection, bimanual manipulation research, imitation learning |

---

## Key Significance

### 1. Standard Platform for VLA Research

ALOHA is not just hardware, but has established itself as **core infrastructure for modern robot imitation learning research**. At a price of $32,000, it provides performance comparable to commercial bimanual robots ($200,000+), revolutionizing research accessibility.

### 2. Original Platform for ACT (Action Chunking with Transformers)

ALOHA was **designed as the platform for ACT algorithm development**. To address the compounding error problem of simple behavior cloning, it enabled an innovative approach of predicting **action sequences (action chunks)** rather than single actions.

### 3. Major Data Source for Open X-Embodiment

In the **Open X-Embodiment dataset** (22 robots, 1M+ trajectories) led by Google DeepMind, ALOHA is one of the platforms providing **the richest bimanual manipulation data**. It serves as a key data source for RT-X model training.

### 4. Open Source Ecosystem

Hardware designs, software, and data collection code are all publicly available, enabling replication and extension by research labs worldwide.

---

## Importance of Bimanual Manipulation

Human bimanual manipulation demonstrates capabilities beyond the simple sum of two arms. This originates from **spatio-temporal coordination**.

### Tasks Requiring Bimanual Operation

| Task Type | Examples |
|-----------|----------|
| Stabilization-Manipulation | Holding object with one arm, screwing with the other |
| Cooperative Transport | Carrying large boxes, trays |
| Tool Use | Sweeping with broom, pushing with mop |
| Cooking | Mixing ingredients, opening lids, stir-frying with spatula |
| Assembly | Tying zip ties, chain assembly |

### Coordination Paradigms

- **Leader-Follower**: Primary arm leads the task, secondary arm supports
- **Synergistic**: Both arms cooperate equally for simultaneous tasks

---

## Hardware Configuration

### Complete Cost Breakdown

| Component | Cost | Notes |
|-----------|------|-------|
| ViperX 300 x 2 + WidowX 250 x 2 | ~$9,680 | 2 followers + 2 leaders set |
| Cameras, sensors, mounts | ~$5,000 | Wrist cameras + external views |
| Laptop (with GPU) | ~$5,000 | Consumer-grade GPU |
| Frame and other hardware | ~$12,320 | Aluminum extrusion, cables, power, etc. |
| **Total** | **~$32,000** | Can reduce further with 3D printing |

> **Note**: Costs based on [original paper](https://arxiv.org/abs/2304.13705) and [Trossen Robotics](https://www.trossenrobotics.com/viperx-aloha) pricing (2023). May vary by exchange rate and purchase timing.

### ViperX 300 Specifications

| Spec | Value |
|------|-------|
| Degrees of Freedom | 6 DoF |
| Reach | 750mm |
| Payload | 750g |
| Motors | DYNAMIXEL X-Series |
| Waist/Shoulder | XM540-W270 (4096 level feedback, ±0.1mm repeatability) |
| Wrist/Gripper | XM430-W350 (enhanced thermal management) |

### Camera System

| Version | Camera | Features |
|---------|--------|----------|
| ALOHA (Original) | Consumer webcams | RGB, multiple viewpoints |
| ALOHA 2 | Intel RealSense D405 | Wide FOV, depth, global shutter |

### Gripper

- **Follower**: Parallel gripper with enhanced grip tape
- **Leader (ALOHA 2)**: Replaced with XC430-W150-T motor (low-friction metal gears)

---

## Teleoperation Method

ALOHA's teleoperation uses **backdriving-based puppeteering**.

### Operating Principle

```
User → Physical manipulation of leader arm → Read joint positions → Synchronize follower arm
```

1. **Physical Backdriving**: User directly moves leader arm (WidowX) by hand
2. **Real-time Synchronization**: Leader joint positions immediately reflected to follower (ViperX)
3. **Data Collection**: RGB images + joint states recorded simultaneously

### Key Advantages

| Advantage | Description |
|-----------|-------------|
| Intuitiveness | Natural interface of directly moving robot arm |
| Low Latency | Lower latency compared to joystick/VR controllers |
| Force Feedback | Sensing physical resistance enables delicate manipulation |
| Low Cost | Uses only existing arm encoders without additional sensors |

### Required Environment

- 6+ USB3 ports (4 robots + 2 cameras)
- Connection instability possible when using USB hub

---

## ALOHA Version Comparison

| Item | ALOHA (Original) | ALOHA 2 |
|------|------------------|---------|
| Release | 2023 (RSS) | 2024 |
| Gripper | High friction | Low-friction rail design |
| Gravity Compensation | Rubber bands | Passive kinematic mechanism |
| Camera | Webcam | Intel RealSense D405 |
| Frame | Basic | 20x20mm aluminum extrusion |
| Durability | Moderate | Enhanced |

---

## Extension to Mobile ALOHA

Mobile ALOHA is an extended version with ALOHA mounted on a **mobile base (AgileX Tracer)**.

| Item | Details |
|------|---------|
| Base | AgileX Tracer AGV (~$7,000) |
| Movement Method | User physically connected to system, backdrivin wheels |
| Data | Base velocity + arm puppeteering recorded simultaneously |
| Learning | Autonomous execution possible with 50 demonstrations |

### Mobile ALOHA Training Task Examples

- Putting pot in cabinet
- Calling elevator
- Pushing in chair
- Stir-frying shrimp
- Cleaning wine spill
- High-five

See [Mobile ALOHA](../mobile/mobile-aloha.md) for details.

---

## VLA Research Applications

ALOHA is a key evaluation/training platform for various VLA (Vision-Language-Action) models.

### ACT (Action Chunking with Transformers)

| Item | Details |
|------|---------|
| Core Idea | Predict **action sequences (chunks)** instead of single actions |
| Architecture | Conditional VAE + Transformer Encoder/Decoder |
| Problem Solved | Reduces compounding error by factor of k (k = chunk length) |
| Performance | 80-90% success rate with 10-minute demonstration |
| Tasks | Fine-grained bimanual manipulation like opening transparent cups, battery insertion |

### OpenVLA

| Item | Details |
|------|---------|
| Parameters | 7B |
| Base | Llama 2 + DINOv2 + SigLIP |
| Training Data | 970k real robot demonstrations (including ALOHA) |
| Performance | 16.5% higher success rate than RT-2-X (55B) |

### Physical Intelligence Pi Series

| Model | Features |
|-------|----------|
| Pi-0 | 3B PaLiGemma VLM + 300M Diffusion action expert |
| Pi-0-FAST | Speed improved with tokenized action output |
| Pi-0.5 | Open-world generalization through heterogeneous data co-training |

Pi-0 is benchmarked on various robot platforms including ALOHA, significantly outperforming existing baselines like OpenVLA, Octo.

### OpenVLA-OFT

Achieves **high-frequency language-based control** with 7B VLA policy on ALOHA. 97.1% success rate on LIBERO benchmark, surpassing Pi-0, Diffusion Policy, etc.

---

## Software Ecosystem

| Package | Details |
|---------|---------|
| ROS / ROS 2 | Drivers, URDF, Gazebo simulation |
| MoveIt | Motion planning support |
| LeRobot | Hugging Face robot learning library integration |
| ACT Code | Official training/inference code released |

---

## References

### Papers

- [Learning Fine-Grained Bimanual Manipulation with Low-Cost Hardware (ACT, RSS 2023)](https://arxiv.org/abs/2304.13705)
- [ALOHA 2: An Enhanced Low-Cost Hardware for Bimanual Teleoperation](https://arxiv.org/abs/2405.02292)
- [Mobile ALOHA: Learning Bimanual Mobile Manipulation with Low-Cost Whole-Body Teleoperation](https://arxiv.org/abs/2401.02117)
- [Open X-Embodiment: Robotic Learning Datasets and RT-X Models](https://arxiv.org/abs/2310.08864)
- [OpenVLA: An Open-Source Vision-Language-Action Model](https://arxiv.org/abs/2406.09246)
- [Pi-0: A Vision-Language-Action Flow Model for General Robot Control](https://arxiv.org/abs/2410.24164)

### Project Sites

- [ALOHA Official Page](https://tonyzhaozh.github.io/aloha/)
- [ALOHA 2 Official Page](https://aloha-2.github.io/)
- [Mobile ALOHA Official Page](https://mobile-aloha.github.io/)
- [Stanford IRIS Lab](https://irislab.stanford.edu/)
- [Open X-Embodiment](https://robotics-transformer-x.github.io/)

### GitHub

- [tonyzhaozh/aloha](https://github.com/tonyzhaozh/aloha)
- [google-deepmind/open_x_embodiment](https://github.com/google-deepmind/open_x_embodiment)
- [Physical-Intelligence/openpi](https://github.com/Physical-Intelligence/openpi)

### Hardware Purchase

- [Trossen Robotics - ViperX ALOHA](https://www.trossenrobotics.com/viperx-aloha)
- [Trossen Robotics - WidowX ALOHA Set](https://www.trossenrobotics.com/widowx-aloha-set)
- [Trossen Robotics - ALOHA Solo](https://www.trossenrobotics.com/aloha-solo)

---

## See Also

- [Hardware List](../index.md)
- [Mobile ALOHA](../mobile/mobile-aloha.md)
- [ACT](../../models/act.md)
- [WidowX / Interbotix](widowx.md)
- [OpenVLA](../../models/openvla.md)
