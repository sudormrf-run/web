---
title: Franka Research 3 (FR3)
description: Reference platform for AI and robotics research - Next-generation evolution of Franka Panda
tags: [franka, research3, fr3, cobot, research, arm, torque-sensor, force-control, vla, manipulation, fci, ros2]
category: hardware
author: Physical AI Knowledge Base
created: 2024-01-01
updated: 2026-01-09

# Authorship
createdBy:
  name: Jong Hyun Park
  email: jhpark@sudormrf.run
lastEditedBy:
  name: Jong Hyun Park
  email: jhpark@sudormrf.run
lastEditedAt: 2026-01-15
---

# Franka Research 3 (FR3)

> Home > Hardware > Arms > Franka Research 3

<!-- Image pending: ![Franka Research 3](../../assets/hardware/arms/franka-research3.png) -->
<!-- If image file is unavailable, refer to official image: https://franka.de/franka-research-3 -->

---

## Overview

Franka Research 3 (FR3) is a next-generation 7-axis collaborative robot developed by Franka Robotics (formerly Franka Emika) in Germany, an evolved version of the original Franka Panda. With **torque sensors embedded in all joints** and support for 1kHz real-time control, it has established itself as the de facto Reference Platform for AI and robotics research. As of February 2025, more than 1,000 units have been deployed to major research institutions worldwide [^agile-1000], used for VLA (Vision-Language-Action) model training, force control research, and human-robot interaction research.

[^agile-1000]: [Franka Robotics achieves production of 1,000th FR3 (2025.02)](https://www.agile-robots.com/en/news/detail/franka-robotics-celebrates-production-of-1000th-franka-research-3-robot/)

### Core Specifications Table

| Item | Franka Research 3 (FR3) | Franka Panda (Legacy) |
|------|-------------------------|----------------------|
| **Manufacturer** | Franka Robotics (under Agile Robots AG) | Franka Emika |
| **Degrees of Freedom (DoF)** | 7-axis | 7-axis |
| **Payload** | 3 kg | 3 kg |
| **Reach** | 855 mm | 850 mm |
| **Repeatability** | ±0.1 mm (ISO 9283) | ±0.1 mm |
| **Workspace Coverage** | 94.5% | - |
| **Maximum End-Effector Speed** | 2 m/s | 2 m/s |
| **Control Frequency** | 1 kHz | 1 kHz |
| **Joint Speed (J1-4)** | 150°/s | 150°/s |
| **Joint Speed (J5-7)** | 301°/s | 301°/s |
| **Robot Weight** | 17.8 kg | 18 kg |
| **Controller Weight** | 7 kg | - |
| **Force Resolution** | < 0.05 N | < 0.05 N |
| **Protection Rating** | IP40 (robot) / IP20 (controller) | IP30 |
| **Operating Temperature** | +5°C ~ +45°C (optimal: 15-25°C) | +15°C ~ +25°C |
| **Power** | 100-240V AC, 50-60Hz, 80W | - |
| **Price** | ~$40,000+ | ~$30,000+ (discontinued) |

Above specifications based on official datasheet and product page. [^fr3-specs]

[^fr3-specs]: [Franka Research 3 Official Page](https://franka.de/franka-research-3), [Generation Robots FR3 Product Page](https://www.generationrobots.com/en/403992-7-axis-franka-research-3-robotic-arm-fci-licence.html)

### Joint Rotation Range

| Joint | Minimum | Maximum |
|-------|---------|---------|
| Joint 1 | -166° | +166° |
| Joint 2 | -101° | +101° |
| Joint 3 | -166° | +166° |
| Joint 4 | -176° | -4° |
| Joint 5 | -166° | +166° |
| Joint 6 | -1° | +215° |
| Joint 7 | -166° | +166° |

Joint ranges based on Franka Research 3 Datasheet v1.1. [^fr3-datasheet]

[^fr3-datasheet]: [Franka Research 3 Datasheet v1.1 (2022.08)](https://download.franka.de/Franka-Research-3_Datasheet_v1.1_August2022.pdf)

---

## Key Significance

### 1. Reference Platform for AI and Robotics Research

Franka Research 3 has been adopted as the **de facto standard research platform** by major universities and research institutes worldwide. World-leading institutions such as MIT, Stanford, CMU, and Oxford Robotics Institute use FR3 as core research equipment, forming the foundation for data collection for VLA model training.

### 2. Core Platform for VLA/Imitation Learning Research

Franka robot data constitutes a core portion of large-scale robot learning datasets including Open X-Embodiment and DROID. In recent research, VLA models using FR3 have achieved **over 99% success rates** on LIBERO benchmark and precision manipulation tasks (GPU insertion/removal) [^self-improving-vla], demonstrating capability for uninterrupted operation for over 1 hour.

[^self-improving-vla]: [Self-Improving VLA with PLD (2025)](https://www.wenlixiao.com/self-improve-VLA-PLD/)

### 3. Popularization of Torque Control-Based Precision Force Control

With torque sensors embedded in all 7 joints, **real-time external force estimation** and **collision detection** are possible. This enables implementation of advanced force control techniques such as impedance control and compliance control, with intuitive hand guiding functionality also supported.

### 4. Research-Friendly Openness

1kHz real-time control is available through FCI (Franka Control Interface), supporting various development environments including libfranka C++ library, ROS 2, and MATLAB/Simulink. Researchers can freely implement from low-level control to high-level tasks.

---

## Key Improvements Over Panda

### Hardware Improvements

| Item | Panda | FR3 | Improvement |
|------|-------|-----|-------------|
| **Reach** | 850 mm | 855 mm | 5mm increase |
| **Workspace Coverage** | Undisclosed | 94.5% | Optimized kinematics |
| **Weight** | 18 kg | 17.8 kg | 200g weight reduction |
| **Joint Marking** | None | X/Y axis markings | Intuitive setup |
| **Design** | - | Modern aesthetics | Ergonomic improvements |
| **Protection Rating** | IP30 | IP40 | Improved dust protection |

### Software Improvements

1. **Desk API**: REST interface for programmatic robot control (brake release, FCI activation, safety violation reset, etc.)
2. **On-site Torque Sensor Recalibration**: Researchers can calibrate torque sensors directly (maintains consistent sensitivity throughout lifecycle)
3. **ROS 2 Jazzy Support**: Full compatibility with latest ROS 2 framework
4. **MoveIt 2 Integration**: Full support for latest motion planning framework
5. **OTA Updates**: Over-the-air software update support

---

## Control Interface (FCI)

Franka Control Interface (FCI) is FR3's core low-level control interface, providing 1kHz real-time control through the libfranka C++ library.

### Control Modes (5 types)

```
┌─────────────────────────────────────────────────────────────────┐
│          Franka Control Interface (FCI) Control Modes           │
├─────────────────────────────────────────────────────────────────┤
│  1. Joint Torque Control                                        │
│     └─ Direct joint torque command with gravity and friction    │
│        compensation                                             │
│                                                                 │
│  2. Joint Position Control                                      │
│     └─ Joint space position command                             │
│                                                                 │
│  3. Joint Velocity Control                                      │
│     └─ Direct joint velocity command                            │
│                                                                 │
│  4. Cartesian Pose Control                                      │
│     └─ Cartesian space position/orientation command             │
│                                                                 │
│  5. Cartesian Velocity Control                                  │
│     └─ Cartesian velocity command                               │
└─────────────────────────────────────────────────────────────────┘
```

### 1kHz Sensor Data Access

Real-time access to the following data:

- **Joint Data**: Position (q), velocity (dq), link-side torque sensor signal (τ)
- **External Force Estimation**: External torque and force estimates (τ_ext, F_ext)
- **Collision Information**: Collision detection and contact information
- **Robot Model**: Inertia matrix M(q), Coriolis term C(q,dq), gravity vector g(q), Jacobian J(q)

### Asynchronous Joint Position Updates

The latest FCI supports asynchronous joint position updates, enabling more flexible and compliant control workflows.

---

## Programming Interfaces (3 Levels)

FR3 provides three levels of programming interfaces depending on research purpose.

### 1. Desk (High-level)

**Workflow-based Visual Programming Interface**

- Browser-based GUI with drag and drop programming
- Quick prototyping without programming knowledge
- Suitable for human-robot interaction research, demos, experiment setup
- Extensible through Research Apps

### 2. RIDE (Mid-level)

**Robot Integrated Development Environment**

- Custom Desk Apps development environment
- External sensor and other feature connections
- **Lingua Franka**: Domain-specific language (DSL) for state machine programming
- **ride-cli**: Command line interface for development
- Suitable for research not requiring millisecond-level reactions (task planning, path planning, perception-based manipulation)

### 3. FCI (Low-level)

**Franka Control Interface - Real-time Low-level Control**

- Based on libfranka C++ library
- 1kHz real-time control command transmission
- Essential for motion control research, advanced control algorithm development
- Enables custom impedance control, force control implementation

### Desk API (REST Interface)

Programmatic control added in 2025 update:

```
POST /api/brakes/release    # Release brakes
POST /api/fci/activate      # Activate FCI
POST /api/safety/clear      # Clear safety violations
```

- Automated research workflow implementation
- Enables unattended experiment environment setup
- Documentation accessible at `<robot IP>/deskapi`

---

## Safety Features

FR3 complies with ISO 10218 and ISO/TS 15066 safety standards as a collaborative robot.

### Core Safety Mechanisms

1. **Collision Detection**
   - Real-time external force detection based on 7-joint torque sensors
   - Immediate collision response with fast control loop (1kHz)
   - Software-based virtual walls/workspace limits

2. **Power and Force Limiting**
   - Force/pressure limits based on ISO/TS 15066
   - Custom safety rule configuration
   - Self-damage prevention through internal monitoring

3. **Safety Feature Configuration**
   - Custom safety rule implementation (worker protection)
   - Speed, force, workspace limit programming
   - Remote safety violation reset (Desk API)

4. **Hand Guiding**
   - Intuitive manual manipulation based on torque sensors
   - Smooth compliance control

---

## VLA Research Applications

FR3 is one of the most widely used robot platforms in VLA (Vision-Language-Action) model research.

### Major Research Results

| Research | Achievement | FR3 Usage |
|----------|-------------|-----------|
| **Self-Improving VLA (2025)** | Over 99% success rate, 1-hour uninterrupted GPU insertion/removal | Core experimental platform |
| **PLD Post-Training** | 99% on LIBERO benchmark, 50%+ improvement on SimplerEnv | Real robot validation |
| **CoT-VLA (2025)** | 46.7% relative performance improvement (53.7% → 78.8%) | Franka-Tabletop evaluation |
| **ReBot (2025)** | 17% Octo, 20% OpenVLA performance improvement | Real-to-Sim-to-Real validation |

### Major Datasets

| Dataset | Scale | FR3/Panda Usage |
|---------|-------|-----------------|
| **Open X-Embodiment** | 1M+ episodes | Core data source |
| **DROID** | 76,000+ demos | Major collection platform |
| **BridgeData V2** | 60,000+ trajectories | Partially included |
| **LIBERO** | 130 tasks | PyBullet simulation |
| **Franka Kitchen** | Various tasks | dm_control based |

### Simulation Environments

- **MuJoCo**: Official Franka support
- **Isaac Sim**: NVIDIA Omniverse-based USD assets provided
- **LIBERO**: PyBullet-based long-horizon manipulation benchmark
- **panda-gym**: OpenAI Gym compatible RL environment
- **RLBench**: CoppeliaSim-based 100+ tasks

---

## Software Ecosystem

### Official Support

| Platform | Support Level | Description |
|----------|---------------|-------------|
| **libfranka** | Official | C++ real-time control library |
| **franka_ros2** | Official | ROS 2 Control integration |
| **ROS 2 Jazzy** | Official (2025) | Full latest ROS 2 support |
| **MoveIt 2** | Official (2025) | Motion planning framework |
| **MATLAB/Simulink** | Official | Control system design |
| **MuJoCo** | Official | Physics simulation |

### Community Tools

| Tool | Description |
|------|-------------|
| **Franky** | High-level Python/C++ control library |
| **franka-interface** | CMU iamlab's libfranka wrapper |
| **panda-gym** | OpenAI Gym compatible reinforcement learning environment |

---

## Comparison with Other Robots

| Item | FR3 | UR5e | KUKA LWR | Kinova Gen3 |
|------|-----|------|----------|-------------|
| **DoF** | 7 | 6 | 7 | 7 |
| **Payload** | 3 kg | 5 kg | 7 kg | 4 kg |
| **Reach** | 855 mm | 850 mm | 800 mm | 902 mm |
| **Repeatability** | ±0.1 mm | ±0.03 mm | ±0.1 mm | ±0.1 mm |
| **Torque Sensors** | All joints | None | All joints | None |
| **Force Control** | Native | External F/T required | Native | Limited |
| **1kHz Control** | Supported | Limited | Supported | Not supported |
| **ROS 2 Support** | Excellent | Good | Good | Good |
| **VLA Ecosystem** | Largest | Moderate | Moderate | Moderate |
| **Price** | ~$40K | ~$35K | ~$100K | ~$35K |

### FR3's Differentiators

1. **Native Torque Control**: Precise force control with torque sensors embedded in all joints
2. **VLA Research Ecosystem**: Largest research community and datasets
3. **Open API**: 1kHz real-time control and full dynamics model access
4. **Research-Friendly**: Three-tier interfaces (Desk, RIDE, FCI) supporting various research levels

---

## AI Companion (Optional)

**Franka AI Companion** is an edge computing solution that can be used with FR3.

- NVIDIA GPU accelerated computation
- Integration with 1kHz real-time control
- AI/robotics research workflow acceleration
- Experiment environment setup without separate workstation

---

## Company History

| Year | Event |
|------|-------|
| 2016 | Franka Emika GmbH founded (Munich) |
| 2017 | German Future Prize winner, Panda release |
| 2018 | Time "50 Best Inventions" selection |
| 2022 | Franka Research 3 (FR3) release |
| 2023.08 | Preliminary insolvency filing due to shareholder dispute |
| 2023.11 | Acquired by Agile Robots AG (~32 million euros) |
| 2025.02 | FR3 1,000 units production achieved |
| 2025 | ROS 2 Jazzy, MoveIt 2, Desk API support |

### Current Status (2025)

- **Ownership**: Agile Robots AG (Munich, Softbank/Foxconn investment)
- **Brand**: Franka Robotics
- **Product Line**: Franka Research 3, Franka Production 3
- **Support**: Continuous OTA updates and technical support

---

## Purchase and Implementation Guide

### Pricing Information

- **Franka Research 3 + FCI License**: ~$40,000+
- **Franka Hand (Gripper)**: Separate purchase
- **AI Companion**: Separate quote
- **Educational Institution Discount**: Contact required

### Required Infrastructure

- Stable mounting surface (minimize vibration)
- Real-time Linux PC (Ubuntu recommended)
- Ethernet connection (10Gbps recommended)
- Controller installation space: 355 x 483 x 89 mm

### Purchase Locations

- [Franka Robotics Official](https://franka.de/)
- [Generation Robots](https://www.generationrobots.com/)
- [Clearpath Robotics](https://store.clearpathrobotics.com/)

---

## References

### Official Materials
- [Franka Research 3 Official Page](https://franka.de/franka-research-3)
- [Franka Research 3 Datasheet (PDF)](https://download.franka.de/Franka-Research-3_Datasheet_v1.1_August2022.pdf)
- [Franka Document Center](https://franka.de/documents)
- [libfranka Documentation](https://frankarobotics.github.io/docs/)
- [libfranka GitHub](https://github.com/frankarobotics/libfranka)
- [RIDE CLI Documentation](https://download.franka.de/ride-cli-doc/overview.html)

### Academic Materials
- [The Franka Emika Robot: A Reference Platform for Robotics Research and Education](https://www.researchgate.net/publication/358870212)
- [Self-Improving VLA with PLD](https://www.wenlixiao.com/self-improve-VLA-PLD/)
- [Vision-Language-Action Models Survey](https://vla-survey.github.io/)

### News/Updates
- [Franka Research 3: Unveiling New Features (2025)](https://franka.de/news/franka-research-3-unveiling-new-features)
- [Franka Robotics 1,000th FR3 Production Achievement](https://www.agile-robots.com/en/news/detail/franka-robotics-celebrates-production-of-1000th-franka-research-3-robot/)
- [Agile Robots Acquisition of Franka Emika](https://www.therobotreport.com/agile-robots-acquires-franka-emika/)

### Simulation/Datasets
- [Open X-Embodiment](https://robotics-transformer-x.github.io/)
- [DROID Dataset](https://droid-dataset.github.io/)
- [LIBERO Benchmark](https://libero-project.github.io/)
- [panda-gym GitHub](https://github.com/qgallouedec/panda-gym)

---

## See Also

- [Hardware List](../index)
- [Franka Panda](franka-panda)
- [OpenVLA](../../models/openvla)
- [Open X-Embodiment](../../datasets/open-x-embodiment)
