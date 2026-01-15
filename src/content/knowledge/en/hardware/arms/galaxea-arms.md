---
title: Galaxea Arms (A1/A1X/A1Y)
description: Galaxea AI's lightweight force-controlled robot arms - High-performance low-cost manipulators for Embodied AI research
tags: [galaxea, a1, a1x, a1y, arm, force-control, lightweight, teleoperation, embodied-ai, vla, research]
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

# Galaxea Arms (A1/A1X/A1Y)

> Home > Hardware > Arms > Galaxea Arms

<!-- Image pending: ![Galaxea A1](../../assets/hardware/arms/galaxea-arm.png) -->
<!-- Image placeholder: Add galaxea-arm.png to assets/hardware/arms/ -->

---

## Overview

| Item | Details |
|------|---------|
| Manufacturer | Galaxea AI (星海图, Beijing, China) |
| Product Line | A1 (High-performance), A1X/A1Y (Lightweight dual configuration) |
| DoF | 6 |
| Design Philosophy | Lightweight + Force Control + High-speed motion |
| Price Range | A1XY: $2,999 ~ $3,999 (A1/A1X-T separate inquiry) |
| Main Applications | Embodied AI research, VLA learning, Teleoperation, Education |

---

## Key Significance

### Core Hardware for Embodied AI Research

Galaxea Arms is a **force-controlled robot arm designed for Embodied AI research** with the following key significance:

1. **Force Control Capability**: Planetary gear motors in each joint provide precise torque and force feedback. Enables delicate object manipulation and safe human-robot interaction
2. **Extreme Speed**: 10 m/s end-effector linear velocity, 40 m/s^2 acceleration for high-speed motion support [^1] - Maximizes research data collection efficiency
3. **Accessible Pricing**: At $3,000~$4,000 for A1XY, approximately 1/10 the cost of Franka ($30,000+)
4. **Complete Ecosystem**: Integrated research platform with R1 humanoid, G1 gripper, and G0 VLA model

### Positioning vs Franka/xArm

| Item | Galaxea A1 | Franka Research 3 | xArm 7 |
|------|------------|-------------------|--------|
| Price | Inquiry | ~$30,000 | ~$10,500 |
| DoF | 6 | 7 | 7 |
| Payload | 3.5kg (max) | 3kg | 3.5kg |
| Reach | 700mm | 850mm | 700mm |
| Force Control | All joints | All joints | Limited |
| Max Speed | 10 m/s | 1.5 m/s | 1 m/s |
| Weight | 6kg | 18kg | 13.7kg |
| Company Status | Active | Filed for insolvency in 2023 | Active |

**Galaxea A1 Differentiators**:
- **Overwhelming Speed**: 5-10x faster end-effector speed compared to competitors, enabling high-speed manipulation research
- **Extremely Lightweight**: At 6kg, easy to move and install
- **Lowest-cost Force Control**: Most affordable among all-joint force-controlled arms

---

## Company Introduction

### Galaxea AI (星海图)

| Item | Details |
|------|---------|
| Founded | September 2023 |
| Headquarters | Beijing, China |
| Valuation | $700M (as of 2025) |
| Mission | "Serving 10 billion humans with 10 billion robots" |
| Key Investors | Meituan, IDG Capital, Ant Group, Baidu Ventures |
| Major Customers | Huawei, Volkswagen, Samsung, ByteDance, Stanford, MIT, Physical Intelligence |

Galaxea AI is an Embodied AI company founded by scientists from Tsinghua University and Stanford University. CEO **Jiyang Gao (高继扬)** has autonomous driving experience from Waymo and Momenta, while co-founder **Huazhe Xu** completed his PhD at UC Berkeley, postdoc at Stanford, and is currently an assistant professor at Tsinghua University.

**Core Capabilities**:
- Full lineup of robot arms (A-Series), grippers (G-Series), and humanoids (R-Series)
- **G0 VLA Model**: Self-developed Vision-Language-Action model
- **Open-World Dataset**: Over 500 hours of real-world manipulation data

---

## Product Lineup

### A1 (High-Performance Force-Controlled Arm)

| Item | Spec |
|------|------|
| DoF | 6 |
| Weight | 6 kg |
| Payload | 2kg (rated) / 3.5kg (max) |
| Reach | 700 mm |
| Repeatability | 1 mm |
| Max End-Effector Speed | 10 m/s |
| Max End-Effector Acceleration | 40 m/s^2 |
| Rated Voltage | 48V |
| Rated Current | 6A (max 10A) |
| Size (Extended) | 775 x 128 x 237 mm |
| Size (Folded) | 449 x 128 x 277 mm |
| Interface | USB 2.0 |

**Joint Specifications**:

| Joint | Range of Motion | Rated Torque |
|-------|-----------------|--------------|
| Joint 1 | [-165deg, +165deg] | 20 Nm |
| Joint 2 | [0deg, 180deg] | 20 Nm |
| Joint 3 | [-190deg, 0deg] | 9 Nm |
| Joint 4 | [-165deg, +165deg] | 3 Nm |
| Joint 5 | [-95deg, +95deg] | 3 Nm |
| Joint 6 | [-105deg, +105deg] | 3 Nm |

### A1X (Human-Wrist Configuration)

| Item | Spec |
|------|------|
| DoF | 6 |
| Weight | 4.2 kg |
| Payload | 3kg (rated, 0.6m reach) / 5kg (max) |
| Repeatability | 0.05 mm |
| Max End-Effector Speed | 5 m/s |
| Max End-Effector Acceleration | 38 m/s^2 |
| Feature | Human wrist-like dexterity |

**A1X Joint Ranges**:
- Joint 1: 330deg (Yaw), 600mm radius
- Joint 2: 180deg (Pitch)
- Joint 3: 190deg (Pitch)
- Joint 4: 180deg (Pitch)
- Joint 5/6: 330deg (Roll)

### A1Y (Low-Inertia Configuration)

| Item | Spec |
|------|------|
| DoF | 6 |
| Weight | 4.2 kg |
| Payload | 3kg (rated) / 5kg (max) |
| Repeatability | 0.05 mm |
| Feature | Lightweight, low-inertia performance |

**A1Y Joint Ranges** (Joints 4-6 differ from A1X):
- Joint 4: 330deg (Roll)
- Joint 5: 210deg (Pitch)
- Joint 6: 330deg (Roll)

### A1X vs A1Y Comparison

| Item | A1X | A1Y |
|------|-----|-----|
| Design Purpose | Wrist dexterity | Low-inertia performance |
| Joint 4 | Pitch 180deg | Roll 330deg |
| Joint 5 | Roll 330deg | Pitch 210deg |
| Suitable For | Complex rotational motions | Fast linear motions |

### A1XY (Dual Configuration Package)

A1X and A1Y configurations provided as a **single interchangeable package**. Maximizes flexibility by allowing wrist configuration changes based on research needs.

**Price**: $2,999 (sale) / $3,999 (regular)

---

## Force Control

The core differentiator of Galaxea Arms is **all-joint force control capability**.

### Technical Implementation

| Feature | Description |
|---------|-------------|
| Actuators | 6 planetary gear motors |
| Torque Sensing | All joints |
| Feedback | Real-time torque/force feedback |
| Impedance Control | Supported |
| Compliance | Adjustable |

### Use Case Scenarios

1. **Delicate Manipulation**: Handling fragile objects like eggs, fruits
2. **Safe Collaboration**: Collision detection/response when working in shared space with humans
3. **Adaptive Gripping**: Grasping that adapts to various shapes/materials
4. **Force-based Learning**: Demonstration collection including force data for Imitation Learning

---

## End Effectors

### Galaxea G1 Gripper

| Item | Spec |
|------|------|
| Type | Parallel 2-finger gripper |
| Length | 145 mm |
| Opening Range | 0 - 100 mm |
| Grip Force | 100 N |
| Control | Includes joint motor |

### Dexterous Hand (Optional)

| Item | Spec |
|------|------|
| DoF | 6 |
| Number of Joints | 12 |
| Weight | 540 g |
| Repeatability | 0.20 mm |
| Finger Grip Force | 10 N (max) |

---

## Teleoperation

### A1X-T Isomorphic Teleop Device

An intuitive remote manipulation device utilizing an isomorphic replica of the A1X arm.

| Feature | Description |
|---------|-------------|
| Mapping | 1:1 joint synchronization |
| Feedback | Bidirectional force feedback |
| Precision | Millimeter level |
| Application | High-quality demonstration data collection |

### R1 Platform Integrated Teleop

Additional teleop options when using dual A1 arms on R1 humanoid:

- **Meta Quest 3 VR**: Immersive first-person view manipulation
- **Standard Remote Controller**: Analog stick-based control

---

## Software and SDK

### Official Resources

| Item | Link |
|------|------|
| Official Documentation | [docs.galaxea-ai.com](https://docs.galaxea-ai.com/) |
| User Guide | [userguide-galaxea.github.io](https://userguide-galaxea.github.io/Product_User_Guide/) |
| GitHub | [github.com/OpenGalaxea](https://github.com/OpenGalaxea) |

### Supported Frameworks

| Framework | Support |
|-----------|---------|
| ROS 1 | O |
| ROS 2 | O |
| Python SDK | O |
| C++ SDK | O |

---

## VLA Research Applications

### G0 Dual-System VLA Model

Galaxea has open-sourced its self-developed **G0 VLA model**.

| Component | Role |
|-----------|------|
| G0-VLM (System 2) | Multimodal planning (Vision-Language Model) |
| G0-VLA (System 1) | Precise motion execution (Vision-Language-Action) |

**Features**:
- Two systems operate **asynchronously** at different frequencies
- 3-stage learning: Cross-embodiment pretraining → Single-embodiment pretraining → Task-specific fine-tuning

### Galaxea Open-World Dataset

| Item | Spec |
|------|------|
| Total Duration | Over 500 hours |
| Number of Tasks | Over 150 |
| Number of Scenes | Over 50 |
| Collection Platform | Galaxea R1 Lite (dual A1 arms) |
| Feature | Consistent data from single embodiment |

**Dataset Characteristics**:
- Collected in real home/office environments
- Includes long-horizon tasks
- Optimized for few-shot generalization research

### Research Use Cases

1. **Imitation Learning**: High-quality demonstration collection via teleoperation
2. **VLA Fine-tuning**: Task-specific fine-tuning based on G0 model
3. **Sim-to-Real**: Policy transfer from simulation to real robot
4. **Mobile Manipulation**: Mobile manipulation research on R1 platform

---

## Purchase Guide

### Recommendations by Purpose

| Purpose | Recommended Model | Reason |
|---------|-------------------|--------|
| Embodied AI Research | A1 | Force control, high-speed, high payload |
| Education/Entry | A1XY | Low cost, dual configuration |
| Data Collection | A1X-T + A1X | Isomorphic teleop |
| Humanoid Research | R1 + A1 | Full platform integration |

### Pricing Information (as of 2025)

| Product | Regular Price | Sale Price |
|---------|---------------|------------|
| A1XY | $3,999 | $2,999 |
| A1 | Inquiry | - |
| A1X-T (Teleop) | Inquiry | - |

### Where to Buy

- [Galaxea Dynamics Official](https://galaxea-dynamics.com/)
- [Foxtech Store](https://store.foxtech.com/)
- [Foxtech Robotics](https://www.foxtechrobotics.com/)

---

## References

### Official Resources

- [Galaxea Dynamics Official Site](https://galaxea-dynamics.com/)
- [Galaxea AI Official Documentation](https://docs.galaxea-ai.com/)
- [Galaxea User Guide](https://userguide-galaxea.github.io/Product_User_Guide/)
- [A1 Hardware Guide](https://docs.galaxea-ai.com/Guide/A1/A1_Hardware_Guide/)
- [OpenGalaxea GitHub](https://github.com/OpenGalaxea)

### Research Papers

- [Galaxea Open-World Dataset and G0 Dual-System VLA Model (arXiv:2509.00576)](https://arxiv.org/abs/2509.00576)

### News and Articles

- [Forbes: Galaxea AI Raises $100M at $700M Valuation](https://finance.yahoo.com/news/beijings-galaxea-ai-raises-100-000126844.html)
- [Crunchbase: Galaxea AI Profile](https://www.crunchbase.com/organization/xinghaitu)

### Product Pages

- [Foxtech: A1 Force-Control Arm](https://www.foxtechrobotics.com/galaxea-a1-lightweight-high-dynamics-force-control-robotic-arm.html)
- [Foxtech: A1XY Dual-Configuration Arm](https://www.foxtechrobotics.com/galaxea-a1xy-embodied-intelligence-companion)

[^1]: A1 Hardware Guide - [docs.galaxea-ai.com](https://docs.galaxea-ai.com/Guide/A1/A1_Hardware_Guide/)

---

## See Also

- [Hardware List](../index)
- [Galaxea Humanoid](../humanoids/galaxea)
- [xArm Series](xarm)
- [Franka Research 3](franka-research3)
