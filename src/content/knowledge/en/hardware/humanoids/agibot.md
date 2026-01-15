---
title: Agibot (Zhiyuan Robotics)
description: General-purpose humanoid robot and GO-1 Foundation Model from China's Zhiyuan Robotics
tags: [agibot, zhiyuan, humanoid, china, go-1, foundation-model, teleoperation, industrial-robotics, shanghai]
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

# Agibot (Zhiyuan Robotics)

> Home > Hardware > Humanoids > Agibot

<!-- Image placeholder - actual image needs to be added -->
<!-- Image pending: ![Agibot](../../assets/hardware/humanoids/agibot.png) -->

---

## Overview

| Item | Details |
|------|---------|
| Manufacturer | Agibot / Zhiyuan Robotics (智元机器人) |
| Headquarters | Pudong New District, Shanghai |
| Founded | February 2023 |
| Founders | Peng Zhihui (彭志辉), Deng Taihua - Former Huawei "Top Minds" program |
| Investors | Sequoia Capital China, Hillhouse Capital, BYD, JD.com |
| Valuation | $1B+ (unicorn status achieved in 2024) |

---

## Specifications

### Main Model Lineup

| Model | Form | DoF | Height | Weight | Price | Use |
|-------|------|-----|--------|--------|-------|-----|
| A2 | Bipedal Humanoid | 49 | 169cm | 55kg | - | General/Industrial |
| A2 Ultra | Bipedal Humanoid (Premium) | 49 | 169cm | - | - | General/Teleoperation |
| A2 Lite | Bipedal Humanoid (Entry) | - | - | - | - | General/Teleoperation |
| A2 Youth | Bipedal Humanoid | 23 | - | - | ~$23K | Entertainment |
| G1/G2 | Wheeled Humanoid | 26 | 130-180cm (adjustable) | 150kg | ~$60K | Industrial/Commercial |
| X1 Lingxi | Upper-body Humanoid | 27 | 130cm | - | ~$14K | Interaction |
| RAISE A1 | Bipedal Humanoid | 49 | 175cm | 53kg | - | Industrial |

### G Series Detailed Specs (26 DoF)

| Item | Spec |
|------|------|
| Total DoF | 26 |
| Both Arms | 7 DoF x 2 = 14 DoF |
| Waist | 3 DoF (bending/extension, rotation) |
| Lower Body/Hip | 2 DoF (dynamic posture change) |
| Head/Other | 7 DoF (including horizontal/vertical rotation, per official specs) |
| Arms | 7 DoF force control (full-joint torque sensors), force control accuracy >0.5N |
| Payload | 5kg per arm |
| Gripper | Modular (standard gripper / 6 DoF dexterous hand) |
| SkillHand | 12 active DoF + 5 passive DoF, built-in fingertip vision sensor |
| Cameras | 8 high-resolution (3D perception), RGBD (front/rear) |
| Sensors | LiDAR, 6-axis force sensors (both arms) |
| Computing | 200 TOPS (on-device AI) |
| Certification | IP42, -15°C ~ 50°C extreme environments, 130+ parts tested |

---

## Key Significance

Agibot is a **leading Chinese industrial humanoid robot** with the following differentiators:

### 1. Mass Production System Established
- **December 2024**: 962 units produced
- **January 2025**: 1,000 general-purpose robots produced
- **December 2025**: 5,000 units mass production achieved
  - A Series: 1,742 units
  - X Series: 1,846 units
  - G Series: 1,412 units

### 2. Real Industrial Deployment Completed
Deployed in 8 key commercial areas:
- Guidance/Reception services
- Entertainment/Performance
- **Smart Manufacturing**
- **Logistics Sorting**
- Security Inspection
- Commercial Cleaning
- Data Collection/Training
- Research/Education

### 3. China/USA/EU Certification (May 2025)
Obtained certification in 3 major regions for global market expansion.

---

## GO-1 Foundation Model

### Overview
**Genie Operator-1 (GO-1)** - A general-purpose Embodied Foundation Model announced in March 2025. According to Agibot, it is positioned as the "first general-purpose Embodied foundation large model." ([AIBase](https://www.aibase.com/news/16123))

### Architecture: ViLLA (Vision-Language-Latent-Action)
A new architecture that maximizes generalization capability by effectively utilizing high-quality datasets and large-scale video data.

### Learning Method
- Based on **AgiBot World dataset**: 1M+ real-world manipulation trajectories
- Learning from human video data
- 100+ scenarios (40% home environment, 20% industrial environment)

### Core Performance
| Metric | Details |
|--------|---------|
| Success Rate Improvement | **+32%** compared to existing models |
| Generalization | Adapts to new tasks with minimal data (Zero-shot/Few-shot) |
| Transfer Learning | "One-Brain-Multiple-Forms" - Transfer between various robot platforms |
| Continuous Learning | Continuous improvement with real-world execution data |

### Key Tasks
- Beverage delivery/pouring water
- Table clearing
- Meal preparation
- Guest greeting

---

## Teleoperation

### VR Teleoperation Kit
VR control system compatible with A2 Ultra/A2 Lite.

| Feature | Description |
|---------|-------------|
| Real-time Motion Mapping | Robot arm follows human arm movements in real-time |
| Multi-gesture Switching | Quick switching between 3 preset gestures |
| Dexterous Hand Control | Precision grasping through finger movement synchronization |
| Low-latency Interaction | Smooth video feedback |
| Safety Protection | Built-in joint limits and collision detection |

### Full-body Motion Capture
- VR headset control
- Full-body motion capture control
- Millisecond-level latency

### AgiBot World Data Collection
- **4,000+ m² dedicated facility**
- 100 robots operating simultaneously
- 3,000+ physical objects
- Home/Industrial/Supermarket/Office environments recreated
- **Generates tens of thousands of motion data points daily**

---

## Real-World Reinforcement Learning

### Industrial Real-World RL Deployment
**November 2025** - Pilot project with Longcheer Technology applying reinforcement learning in actual industrial environments. According to Agibot, this is "the first application of Real-World RL in actual industrial robotics." ([PRNewswire](https://www.prnewswire.com/news-releases/agibot-achieves-first-real-world-deployment-of-reinforcement-learning-in-industrial-robotics-302601935.html))

### Key Advantages
| Item | Details |
|------|---------|
| Learning Time | Reduced from weeks → **approximately 10 minutes** |
| Adaptability | Automatic compensation for part position/tolerance changes (Agibot claims: 100% task completion rate) |
| Flexibility | Quick retraining for task changes without custom jigs/tooling |

### Expansion Plans
Planned expansion to consumer electronics and automotive parts production.

---

## Proprietary Technology Stack

### AimRT Middleware
Self-developed middleware faster and more efficient than ROS (Robot Operating System).

### Lingqu OS
Embodied Intelligent Operating System released in **July 2025**.
- Supports first industrial deployment and continuous field operations.

### On-device AI
- 200 TOPS processing performance
- 96% face recognition accuracy
- Real-time voice command understanding
- Natural conversation based on local LLM (no cloud dependency)

---

## Partnerships and Deployment Cases

| Partner | Details |
|---------|---------|
| Pepsi | "Fizzbot" custom A2 humanoid ambassador |
| Fulin Precision | ~100 units of A2-W wheeled humanoid ordered |
| Longcheer Technology | Real-World RL pilot deployment |
| JD.com | Investment and e-commerce sales channel |

---

## Competitive Position

| Differentiator | Description |
|----------------|-------------|
| Mass Market Target | Diverse price range product lineup ($14K ~ $60K+) |
| Direct Sales | Own e-commerce + JD.com channel |
| Main Competitor | Unitree Robotics (targeting research/power users) |

---

## References

- [Agibot Official Website](https://www.agibot.com/)
- [Agibot About Us](https://www.agibot.com/about_Zhiyuan)
- [AgiBot - Wikipedia](https://en.wikipedia.org/wiki/AgiBot)
- [The Rise of AgiBot (Zhiyuan Shanghai Robotics) - Mike Kalil](https://mikekalil.com/blog/agibot-zhiyuan-robotics/)
- [AgiBot World Dataset - Mike Kalil](https://mikekalil.com/blog/agibot-world/)
- [GO-1 Foundation Model - AIBase](https://www.aibase.com/news/16123)
- [AgiBot G2 Industrial Robot](https://humanoidroboticstechnology.com/industry-news/agibot-launches-g2-humanoid-robot-for-industrial-grade-automation/)
- [AgiBot Real-World RL Deployment - PRNewswire](https://www.prnewswire.com/news-releases/agibot-achieves-first-real-world-deployment-of-reinforcement-learning-in-industrial-robotics-302601935.html)

---

## See Also

- [Hardware List](../index)
