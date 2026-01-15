---
title: Franka Emika Panda
description: The standard for research collaborative robots - 7-axis torque sensor-based high-precision manipulator
tags: [franka, panda, cobot, research, arm, torque-sensor, force-control, vla, manipulation]
category: hardware
author: Physical AI Knowledge Base
created: 2024-01-01
updated: 2025-01-09

# Authorship
createdBy:
  name: Jong Hyun Park
  email: jhpark@sudormrf.run
lastEditedBy:
  name: Jong Hyun Park
  email: jhpark@sudormrf.run
lastEditedAt: 2026-01-15
---

# Franka Emika Panda

> Home > Hardware > Arms > Franka Panda

<!-- Image pending: ![Franka Panda](../../assets/hardware/arms/franka-panda.png) -->

---

## Overview

Franka Emika Panda is a 7-axis collaborative robot (cobot) developed in Munich, Germany. With **torque sensors embedded in all joints**, it implements human-level tactile sensing and force control, making it an innovative research robot platform. Selected as one of Time magazine's "50 Best Inventions" in 2018, it has become the de facto standard platform for VLA (Vision-Language-Action) and robot learning research.

### Core Specifications Table

| Item | Franka Panda | Franka Research 3 (FR3) |
|------|--------------|-------------------------|
| **Manufacturer** | Franka Emika (Germany, now Agile Robots) | Franka Emika |
| **Degrees of Freedom (DoF)** | 7-axis | 7-axis |
| **Payload** | 3 kg | 3 kg |
| **Reach** | 850 mm | 855 mm |
| **Repeatability** | ±0.1 mm | ±0.1 mm |
| **Maximum Speed** | 2 m/s (end effector) | 2 m/s |
| **Robot Weight** | 18 kg | 18 kg |
| **Control Frequency** | 1 kHz | 1 kHz |
| **Force Resolution** | < 0.05 N | < 0.05 N |
| **Force Accuracy** | 0.8 N (relative) | 0.8 N |
| **Force Repeatability** | 0.15 N | 0.15 N |
| **Workspace Coverage** | - | 94.5% |
| **Price** | ~$30K+ (educational discounts available) | ~$40K+ |

---

## Key Significance

### 1. Democratization of Research Robots
At launch, Franka Panda disrupted the market dominated by large, heavy, and expensive industrial robots with its revolutionary price of approximately $10,500. This enabled precision manipulation research at universities and research institutes worldwide, with world-leading institutions such as MIT, Stanford, and Oxford Robotics Institute adopting it as their standard platform.

### 2. Data Collection Standard for VLA/Robot Learning
Used as a core collection platform for large-scale robot learning datasets including Open X-Embodiment, DROID, and BridgeData, it has become the foundation for training state-of-the-art VLA models like OpenVLA, RT-X, and Octo.

### 3. Popularization of Torque Sensor-Based Force Control
While traditional industrial robots focused on position control, Franka Panda embeds torque sensors in all 7 joints, enabling real-time **impedance control** and **collision detection**.

---

## Design Philosophy

### "Robotics for Everyone"

Franka Emika founders Sami Haddadin and Simon Haddadin designed Panda with the vision of **"robots that safely collaborate with humans"**.

#### Core Design Principles

1. **Human-Centric Design**
   - 7-axis design implements kinematic structure similar to human arm
   - Lightweight design at 18kg, 3.6 times human arm weight (approximately 5kg)
   - Designed as collaborative robot, capable of close proximity work with humans when proper risk assessment and safety settings are applied (ISO 10218, ISO/TS 15066 compliance required)

2. **Implementation of Tactile Sensing**
   - Torque sensors embedded in all joints (Link-side torque sensing)
   - Force resolution below 0.05N for detecting fine contacts
   - Real-time external force estimation and collision detection algorithms

3. **Research-Friendly Openness**
   - Franka Control Interface (FCI): 1kHz real-time control API
   - Real-time access to joint position, velocity, torque, external force estimates
   - Provides inertia matrix, gravity vector, Jacobian, Coriolis terms
   - ROS, ROS2, MATLAB/Simulink integration support

4. **Torque Control First Philosophy**
   - Traditional robots: Current overload check → Difficult to sense force
   - Franka: Strain gauge-based direct torque measurement → Precise force control
   - Compliance control enables flexible object manipulation

### DLR Legacy

Franka's technical roots lie in the **German Aerospace Center (DLR)** lightweight robot (LWR) research. Sami Haddadin researched human-robot interaction safety at DLR, and this experience is directly reflected in Panda's collision detection and response algorithms.

---

## Technical Details

### Torque Sensor System

**Joint 1-7: Link-side Torque Sensors**

End-effector Cartesian force estimation performance (per official datasheet):
- Force Resolution: < 0.05 N
- Relative Force Accuracy: 0.8 N
- Force Repeatability: 0.15 N

**Real-time Data (1 kHz):**
- Joint positions (q)
- Joint velocities (dq)
- Link-side torque (tau_ext)
- External force estimation (F_ext)
- Inertia matrix M(q)
- Coriolis term C(q, dq)
- Gravity vector g(q)
- Jacobian J(q)

### Control Interface (FCI)

Franka Control Interface provides the following through libfranka library:

- **Position Control**: Joint space and Cartesian space
- **Velocity Control**: Direct joint velocity command
- **Torque Control**: Direct joint torque command (impedance control implementation)
- **Hybrid Control**: Position/force hybrid control

---

## VLA Research Applications

Franka Panda is one of the most widely used robot platforms in VLA (Vision-Language-Action) model research.

### Major Datasets

| Dataset | Scale | Franka Usage | Description |
|---------|-------|--------------|-------------|
| **Open X-Embodiment** | 1M+ episodes | Major source | 22 robot types, Franka is core |
| **DROID** | 76,000+ demos | Core platform | Various manipulation demonstrations |
| **BridgeData V2** | 60,000+ trajectories | Partially included | Tabletop manipulation data |
| **LIBERO** | 130 tasks | Simulation | PyBullet-based Franka simulator |
| **Franka Kitchen** | Various tasks | Dedicated | dm_control-based kitchen environment |
| **panda-gym** | 5 tasks | Dedicated | OpenAI Gym integrated RL environment |

### Major VLA Models and Papers

#### OpenVLA (2024)
- Trained on Open X-Embodiment 970K trajectories
- Demonstrates fine-tuned policy on Franka Panda video
- Standard benchmark for open-source VLA models

#### ReBot (2025)
- Real-to-Sim-to-Real data augmentation technique
- 17% improvement on Octo, 20% improvement on OpenVLA in Franka Panda experiments

#### CoT-VLA (2025)
- Introduces Visual Chain-of-Thought reasoning
- 46.7% relative performance improvement on Franka-Tabletop demo fine-tuning (53.7% → 78.8%)

#### LoLA (2025)
- Long Horizon Latent Action Learning
- LIBERO benchmark and real Franka robot evaluation
- Introduces State-Aware Latent Re-representation module

#### RT-X / Octo
- Google DeepMind's Robot Transformer series
- Open X-Embodiment based, utilizes Franka data

### Simulation Environments

- **LIBERO**: PyBullet-based long-horizon language-conditioned manipulation benchmark
- **panda-gym**: OpenAI Gym compatible RL environment (reach, push, slide, pick & place, stack)
- **RLBench**: CoppeliaSim-based 100+ task benchmark
- **Isaac Sim**: NVIDIA Omniverse-based Franka USD assets provided

---

## Comparison with Other Robots

| Item | Franka Panda | UR5e | Sawyer | KUKA LWR |
|------|--------------|------|--------|----------|
| **DoF** | 7 | 6 | 7 | 7 |
| **Payload** | 3 kg | 5 kg | 4 kg | 7 kg |
| **Reach** | 850 mm | 850 mm | 1,260 mm | 800 mm |
| **Repeatability** | ±0.1 mm | ±0.03 mm | ±0.1 mm | ±0.1 mm |
| **Torque Sensors** | All joints | None | Per joint | All joints |
| **Force Control** | Native | External F/T required | Limited | Native |
| **1kHz Control** | Supported | Limited | Not supported | Supported |
| **ROS Support** | Excellent | Good | Discontinued | Good |
| **Research Ecosystem** | Largest | Moderate | Limited | Moderate |
| **Price** | ~$30K+ | ~$35K+ | Discontinued | ~$100K+ |

### Franka's Differentiators

1. **Native Torque Control**: UR5 only performs current-based overload checking, making precise force tasks difficult
2. **Research Ecosystem**: De facto standard platform for state-of-the-art research including VLA and imitation learning
3. **Open API**: 1kHz real-time control and full dynamics model access
4. **Safety**: Advanced safety algorithms based on DLR collision research

---

## Company History and Current Status

### Founding Team

- **Sami Haddadin**: Co-founder, Robotics/AI Professor (TUM MIRMI founding director, 2018-2025)
- **Simon Haddadin**: Co-founder, CEO (physician background, DLR researcher)
- **Sven Parusel**: Co-founder

### Major Milestones

| Year | Event |
|------|-------|
| 2016 | Franka Emika GmbH founded (Munich) |
| 2017 | German Future Prize (Deutscher Zukunftspreis) winner |
| 2018 | Time "50 Best Inventions" selection, 2,000 units shipped in first year |
| 2020 | National Geographic feature |
| 2022 | Franka Research 3 (FR3) release |
| 2023.08 | Preliminary insolvency filing due to shareholder dispute |
| 2023.11 | Acquired by Agile Robots AG (approximately 32 million euros) |

### Current Status (2024-2025)

- **Ownership**: Agile Robots AG (Munich, Softbank/Foxconn investment)
- **Employees**: Approximately 100 maintained
- **Product Line**: Franka Research 3, Franka Production 3 continue sales
- **Note**: Legal disputes regarding patents occurred during acquisition process

---

## Purchase and Implementation Guide

### Pricing Information
- **Franka Research 3**: $40,000+ (educational institution discounts available)
- **Franka Production 3**: Industrial use, separate quote
- **Additional Costs**: Gripper, mounting, training, support

### Required Infrastructure
- Stable mounting surface (minimize vibration)
- Real-time Linux PC (Ubuntu recommended)
- Network connection (Franka Control Interface)

### Alternative Considerations
- **Research**: Franka FR3 (when torque control needed), UR5e (versatility priority)
- **Educational**: Start with panda-gym, LIBERO simulation
- **Low Budget**: Used Panda, or simulation only

---

## References

### Official Materials
- [Franka Emika Official Website](https://franka.de/)
- [Franka Research 3 Datasheet (PDF)](https://download.franka.de/Franka-Research-3_Datasheet_v1.1_August2022.pdf)
- [libfranka Documentation](https://frankaemika.github.io/docs/)

### Academic Materials
- [The Franka Emika Robot: A Reference Platform for Robotics Research and Education](https://www.researchgate.net/publication/358870212_The_Franka_Emika_Robot_A_Reference_Platform_for_Robotics_Research_and_Education)
- [On the Interaction Force Sensing Accuracy of Franka Emika Panda Robot (IEEE)](https://ieeexplore.ieee.org/document/9589424)
- [Dynamic Identification of the Franka Emika Panda Robot (HAL)](https://inria.hal.science/hal-02265293v1/document)

### VLA/Robot Learning Research
- [OpenVLA: An Open-Source Vision-Language-Action Model](https://openvla.github.io/)
- [ReBot: Real-to-Sim-to-Real Robotic Video Synthesis (arXiv)](https://arxiv.org/html/2503.14526v1)
- [CoT-VLA: Visual Chain-of-Thought Reasoning (arXiv)](https://arxiv.org/html/2503.22020v1)
- [LoLA: Long Horizon Latent Action Learning (arXiv)](https://arxiv.org/html/2512.20166)
- [panda-gym: Open-source environments for robotic learning (arXiv)](https://arxiv.org/abs/2106.13687)

### Simulation/Datasets
- [Open X-Embodiment Dataset](https://robotics-transformer-x.github.io/)
- [DROID Dataset](https://droid-dataset.github.io/)
- [LIBERO Benchmark](https://libero-project.github.io/)
- [panda-gym GitHub](https://github.com/qgallouedec/panda-gym)
- [Isaac Sim Robot Assets](https://docs.isaacsim.omniverse.nvidia.com/4.5.0/assets/usd_assets_robots.html)

### News/Analysis
- [IEEE Spectrum: Franka - A Robot Arm That's Safe, Low Cost, and Can Replicate Itself](https://spectrum.ieee.org/franka-a-robot-arm-thats-safe-low-cost-and-can-replicate-itself)
- [Agile Robots Acquires Franka Emika (The Robot Report)](https://www.therobotreport.com/agile-robots-acquires-franka-emika/)
- [Franka Emika Insolvency News (The Robot Report)](https://www.therobotreport.com/cobot-arm-maker-franka-emika-files-for-insolvency/)

---

## See Also

- [Hardware List](../index)
- [Franka Research 3](franka-research3)
- [Open X-Embodiment](../../datasets/open-x-embodiment)
- [OpenVLA](../../models/openvla)
