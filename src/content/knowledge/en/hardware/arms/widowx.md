---
title: Interbotix / WidowX
description: Trossen Robotics research robot arm series - Standard hardware for VLA and Embodied AI research
tags: [interbotix, widowx, viperx, trossen, dynamixel, research, aloha, open-x-embodiment, vla, lerobot]
category: hardware
last_updated: 2026-01-09

# Authorship
createdBy:
  name: Jong Hyun Park
  email: jhpark@sudormrf.run
lastEditedBy:
  name: Jong Hyun Park
  email: jhpark@sudormrf.run
lastEditedAt: 2026-01-15
---

# Interbotix / WidowX

> Home > Hardware > Arms > WidowX

<!-- Image placeholder: actual image file needs to be added to assets folder -->
<!-- Image pending: ![WidowX Arms](../../assets/hardware/arms/widowx.png) -->

---

## Overview

Interbotix is a research robot arm brand developed by Trossen Robotics, providing a series of high-precision manipulators based on ROBOTIS Dynamixel servo motors. The WidowX and ViperX series are robot arm platforms widely used for VLA (Vision-Language-Action) model training, teleoperation data collection, and Embodied AI research. They have been adopted by major robot learning projects including ALOHA, BridgeData V2, and Open X-Embodiment.

| Item | Details | Source |
|------|---------|--------|
| Manufacturer | [Trossen Robotics](https://www.trossenrobotics.com/) | Official site |
| Founded | 2005, by Matt Trossen | [Tracxn](https://tracxn.com/d/companies/trossen-robotics) |
| Headquarters | Downers Grove, Illinois, USA | [CBInsights](https://www.cbinsights.com/company/trossen-robotics) |
| Motors | ROBOTIS Dynamixel X-Series | [Official docs](https://docs.trossenrobotics.com/interbotix_xsarms_docs/) |
| Price Range | $2,000 - $6,500 (as of 2024, subject to change) | [Product page](https://www.trossenrobotics.com/robotic-arms.aspx) |
| Main Applications | Research, Education, ML/AI data collection | - |

---

## Company Introduction: Trossen Robotics

Trossen Robotics is a robotics company founded in 2005 by Matt Trossen, supplying robot hardware to research labs and educational institutions for over 20 years[^1]. They manufacture and distribute research manipulators, unmanned ground vehicles (UGV), and ML/AI integrated research kits, and are particularly famous for their Interbotix brand utilizing ROBOTIS Dynamixel servos.

By supplying hardware for the ALOHA project and Open X-Embodiment dataset, they have established a central position in the Embodied AI research community.

[^1]: Trossen Robotics company profile referenced from business databases including Tracxn, CBInsights, Crunchbase. Detailed metrics like employee count and revenue may vary by database.

---

## Product Lineup

### X-Series Arms (Basic Lineup)

Specifications below are based on [official Interbotix documentation](https://docs.trossenrobotics.com/interbotix_xsarms_docs/specifications.html), and prices are approximate reference prices as of 2024.

| Model | DoF | Reach | Payload | Servo Configuration | Price (ref) | Features |
|-------|-----|-------|---------|---------------------|-------------|----------|
| **PincherX-100** | 4 | 335mm | 50g | XL430 | ~$500 | Entry-level, compact |
| **PincherX-150** | 4 | 450mm | 50g | XL430 | ~$600 | Entry-level, extended reach |
| **ReactorX-150** | 5 | 450mm | 100g | XM430/XL430 | ~$1,200 | Intermediate, wrist rotation |
| **ReactorX-200** | 5 | 550mm | 150g | XM430/XL430 | ~$1,500 | Intermediate, extended reach |
| **WidowX-200** | 5 | 550mm | 200g | XM430-W350, XL430-W250 | ~$2,500 | Research standard |
| **WidowX-250** | 5 | 650mm | 250g | XM430-W350, XL430-W250 | ~$3,000 | Research extended |
| **WidowX-250 6DoF** | 6 | 650mm | 250g | XM430-W350, XL430-W250 | ~$3,550 | ALOHA Leader arm |
| **ViperX-250** | 5 | 650mm | 450g | XM540-W270, XM430-W350 | ~$4,500 | High payload |
| **ViperX-300** | 5 | 750mm | 750g | XM540-W270, XM430-W350 | ~$5,500 | High performance |
| **ViperX-300 6DoF** | 6 | 750mm | 750g | XM540-W270, XM430-W350 | ~$6,130 | ALOHA Follower arm |

> **Note**: Prices may vary; check [official site](https://www.trossenrobotics.com/) for latest pricing.

### Detailed Spec Comparison

Specifications below are excerpted from official documentation ([WidowX-200](https://docs.trossenrobotics.com/interbotix_xsarms_docs/specifications/wx200.html), [WidowX-250](https://docs.trossenrobotics.com/interbotix_xsarms_docs/specifications/wx250.html), [ViperX-300 6DoF](https://docs.trossenrobotics.com/interbotix_xsarms_docs/specifications/vx300s.html)).

| Item | WidowX-200 | WidowX-250 | ViperX-300 6DoF |
|------|------------|------------|-----------------|
| Degrees of Freedom | 5 DoF | 5 DoF | 6 DoF |
| Max Reach | 550mm | 650mm | 750mm |
| Total Span | 1100mm | 1300mm | 1500mm |
| Payload | 200g | 250g | 750g |
| Repeatability | 1mm | 1mm | 1mm |
| Accuracy | 5-8mm | 5-8mm | 5-8mm |
| Gripper Opening | 30-74mm | 30-74mm | 42-116mm |
| Servo Count | 7 | 8 | 9 |
| Wrist Rotation | Supported | Supported | Supported |

> **Payload Note**: Official documentation recommends 50% or less extension when using maximum payload.

### AI Series (Released 2025)

Trossen Robotics announced a new AI hardware lineup specialized for ML/VLA research in 2025. Information below references [WidowX AI official page](https://www.trossenrobotics.com/widowx-ai) and [Trossen AI page](https://www.trossenrobotics.com/ai).

| Model | Features | Main Applications |
|-------|----------|-------------------|
| **WidowX AI** | 6DoF, 700mm reach, 1.5kg payload, 1mm accuracy, iNerve controller | ML/VLA research base platform |
| **Solo AI** | Leader-Follower configuration, teleoperation specialized | Optimized for data collection |
| **Mobile AI** | AgileX Tracer mobile base integration | Mobile Manipulation research |
| **Stationary AI** | 4-arm compound workstation | Large-scale multi-arm experiments |

WidowX AI is available in three configurations: Base, Leader, and Follower, with the Follower version equipped with Intel RealSense D405 depth camera. According to the official site, shipping started from mid-April 2025.

---

## Dynamixel Servo Technology

The core of Interbotix robot arms is ROBOTIS Dynamixel X-Series smart servo motors. Specifications below reference [ROBOTIS e-Manual](https://emanual.robotis.com/) and [Interbotix official documentation](https://docs.trossenrobotics.com/interbotix_xsarms_docs/).

### Key Features

| Feature | Description |
|---------|-------------|
| **Position Resolution** | 4096 positions (approximately 0.088 degrees) |
| **PID Control** | User-definable PID parameters |
| **Feedback** | Real-time monitoring of position, velocity, current, temperature, voltage |
| **Communication** | TTL or RS-485 (varies by model), 1Mbps default baudrate |
| **Compliance** | Software-based compliance settings |

### Servo Models Used

- **XL430-W250**: Small, lightweight, for gripper and wrist joints
- **XM430-W350**: Medium, for intermediate joints, high torque-to-weight ratio
- **XM540-W270**: Large, for base and shoulder joints, maximum torque

### U2D2 Controller

All Interbotix arms connect to PC via ROBOTIS U2D2 interface. As a USB to TTL converter, it provides direct access to Dynamixel Wizard software and ROS/ROS2.

---

## Software Ecosystem

### ROS/ROS2 Support

Support status below is based on [Interbotix official documentation](https://docs.trossenrobotics.com/interbotix_xsarms_docs/). ROS distribution EOL (End of Life) status may change over time.

| Version | Status | Notes |
|---------|--------|-------|
| ROS Melodic | Supported (Legacy) | Ubuntu 18.04, EOL 2023 |
| ROS Noetic | Supported | Ubuntu 20.04, final ROS1 LTS |
| ROS2 Galactic | Supported (Legacy) | EOL November 2022 |
| ROS2 Humble | Supported (Recommended) | Ubuntu 22.04 LTS, supported until 2027 |
| ROS2 Rolling | Supported | Development rolling release |

> **Recommended**: ROS2 Humble recommended for new projects.

### Provided Packages

- **URDF/Meshes**: Accurate inertia models included
- **Driver Nodes**: Physical robot control and joint state publishing
- **MoveIt Integration**: Motion planning support
- **Gazebo Simulation**: Simulation environment provided
- **MuJoCo Models**: Physics simulation (including ALOHA 2)

### AI/ML Framework Integration (AI Series)

- **Hugging Face LeRobot**: Data pipelines and model training
- **OpenPI (Physical Intelligence)**: Pi0, Pi0.5 policy training and inference
- **NVIDIA Isaac**: Simulation and deployment
- **Pre-trained Model Support**: ALOHA, BiACT, OCTO, Crossformers, etc.

---

## Key Significance

### 1. Low-Cost High-Performance Research Platform

Interbotix robot arms provide research-quality precision (1mm repeatability) and reliability at the $2,000-$6,500 price range. This is significantly lower cost compared to traditional industrial robot arms, enabling academia and startups to conduct large-scale data collection and VLA research.

### 2. Open Source Ecosystem

All hardware designs, drivers, and URDF models are open-sourced. All code is accessible from the [interbotix](https://github.com/interbotix) repositories on GitHub and continuously improved through community contributions.

### 3. Standardized Hardware

Major robot learning datasets including ALOHA, BridgeData V2, and Open X-Embodiment were all collected with Interbotix arms. This allows researchers to directly test and fine-tune pre-trained models on the same hardware.

### 4. Democratization of Embodied AI Research

From Mobile ALOHA systems (approximately $32,000, per ALOHA 2 paper) to single arms, various options are available for different budgets, enabling more researchers to participate in Embodied AI research.

---

## VLA Research Applications

### ALOHA / Mobile ALOHA

ALOHA (A Low-cost Open-source Hardware System for Bimanual Teleoperation) developed by Stanford's Tony Z. Zhao, Zipeng Fu, and Chelsea Finn research team is built around Interbotix arms[^2].

| Component | Hardware | Role |
|-----------|----------|------|
| Leader Arms | WidowX-250 6DoF x 2 | Human teleoperator input |
| Follower Arms | ViperX-300 6DoF x 2 | Actual task execution |
| Mobile Base | AgileX Tracer | Movement (Mobile ALOHA) |
| Cameras | 2 wrist + 1 top | Visual input |

ALOHA 2 provides improved performance, ergonomics, and robustness, with all hardware designs and MuJoCo models open-sourced.

[^2]: Fu et al., "ALOHA 2: An Enhanced Low-Cost Hardware for Bimanual Teleoperation", 2024. https://aloha-2.github.io/

**Key Papers:**
- Zhao et al., "Learning Fine-Grained Bimanual Manipulation with Low-Cost Hardware" (RSS 2023)
- Fu et al., "Mobile ALOHA: Learning Bimanual Mobile Manipulation with Low-Cost Whole-Body Teleoperation" (2024)

### BridgeData V2

A large-scale robot manipulation dataset collected by UC Berkeley RAIL Lab[^3].

| Item | Details |
|------|---------|
| Robot | WidowX-250 6DoF |
| Trajectories | 60,096 |
| Environments | 24 |
| Skills | 13 |
| Control Frequency | 5Hz |
| Average Trajectory Length | 38 timesteps |

Includes various basic manipulation skills such as pick-and-place, pushing, sweeping, drawer/door manipulation, block stacking, and clothes folding. Collected via VR controller teleoperation and is a core component of the Open X-Embodiment dataset.

[^3]: Walke et al., "BridgeData V2: A Dataset for Robot Learning at Scale", CoRL 2023. https://rail-berkeley.github.io/bridgedata/

**Key Papers:**
- Walke et al., "BridgeData V2: A Dataset for Robot Learning at Scale" (CoRL 2023)

### Open X-Embodiment

The world's largest open-source robot dataset led by Google DeepMind, collected from 34 research labs[^4].

| Item | Details |
|------|---------|
| Total Trajectories | 1M+ |
| Robot Types | 22 embodiments |
| Skills | 500+ |
| Tasks | 150,000+ |
| Data Format | RLDS (TFRecord) |

The Bridge dataset collected with WidowX is a core component of Open X-Embodiment and plays an important role in cross-robot transfer for RT-X model training. Research has confirmed that skills learned from WidowX data transfer to Google Robot.

[^4]: Open X-Embodiment Collaboration, "Open X-Embodiment: Robotic Learning Datasets and RT-X Models", arXiv:2310.08864, 2023.

**Key Papers:**
- Open X-Embodiment Collaboration, "Open X-Embodiment: Robotic Learning Datasets and RT-X Models" (2023)

### OpenVLA

Open-source VLA model developed by Stanford and UC Berkeley research teams[^5].

| Item | Details |
|------|---------|
| Parameters | 7B |
| Training Data | Open X-Embodiment 970k trajectories |
| Base Models | Llama 2 + DINOv2 + SigLIP |
| Training Infrastructure | 64x A100 GPU, 15 days |

Achieved **16.5% higher success rate** compared to RT-2-X (55B) across 29 evaluation tasks on WidowX and Google Robot embodiments. Shows particularly strong performance on BridgeData V2 WidowX tasks.

Supports efficient fine-tuning through LoRA and lightweight deployment through quantization, enabling operation on consumer-grade GPUs.

[^5]: Kim et al., "OpenVLA: An Open-Source Vision-Language-Action Model", arXiv:2406.09246, 2024.

**Key Papers:**
- Kim et al., "OpenVLA: An Open-Source Vision-Language-Action Model" (2024)

### Pi0 (Physical Intelligence)

VLA flow model for general robot control developed by Physical Intelligence[^6].

| Item | Details |
|------|---------|
| Base Model | PaliGemma VLM |
| Training Data | 7 robot platforms, 68 tasks |
| Control Frequency | Up to 50Hz |
| Action Generation | Flow Matching (Diffusion variant) |

Demonstrated zero-shot and fine-tuning performance on complex real-world tasks such as laundry folding, table cleaning, grocery bagging, and box assembly. Supports cross-embodiment learning across various robot types including single arms, dual arms, and mobile manipulators.

Released OpenPI framework as open-source in February 2025, fully integrated with Trossen AI hardware.

[^6]: Black et al., "Pi0: A Vision-Language-Action Flow Model for General Robot Control", arXiv:2410.24164, 2024.

**Key Papers:**
- Black et al., "Pi0: A Vision-Language-Action Flow Model for General Robot Control" (2024)

---

## See Also

- [Hardware List](../index)
- [ALOHA](aloha)
- [Dynamixel Servos](../actuators/dynamixel)
- [Open X-Embodiment](../../datasets/open-x-embodiment)

---

## References

### Official Documentation
- [Trossen Robotics Official Site](https://www.trossenrobotics.com/)
- [Interbotix X-Series Arms Documentation](https://docs.trossenrobotics.com/interbotix_xsarms_docs/)
- [Interbotix GitHub](https://github.com/interbotix)
- [WidowX AI Product Page](https://www.trossenrobotics.com/widowx-ai)
- [ROBOTIS Dynamixel e-Manual](https://emanual.robotis.com/)

### Datasets
- [Open X-Embodiment Dataset](https://robotics-transformer-x.github.io/)
- [BridgeData V2](https://rail-berkeley.github.io/bridgedata/)

### Papers
- [ALOHA 2: An Enhanced Low-Cost Hardware for Bimanual Teleoperation](https://aloha-2.github.io/)
- [Mobile ALOHA: Learning Bimanual Mobile Manipulation](https://arxiv.org/abs/2401.02117)
- [OpenVLA: An Open-Source Vision-Language-Action Model](https://openvla.github.io/)
- [Open X-Embodiment: Robotic Learning Datasets and RT-X Models](https://arxiv.org/abs/2310.08864)
- [Pi0: A Vision-Language-Action Flow Model](https://arxiv.org/abs/2410.24164)
- [BridgeData V2: A Dataset for Robot Learning at Scale](https://arxiv.org/abs/2308.12952)

### Software
- [Hugging Face LeRobot](https://github.com/huggingface/lerobot)
- [OpenPI (Physical Intelligence)](https://github.com/Physical-Intelligence/openpi)
