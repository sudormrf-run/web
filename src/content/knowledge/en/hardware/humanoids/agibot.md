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
lastEditedAt: 2026-01-26
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
| Valuation | $6.4B (as of Oct 2025), Unicorn status achieved in 2024 |

---

## Specifications

### Main Model Lineup

#### A Series (Bipedal Humanoid)

| Model | Form | DoF | Height | Weight | Use |
|-------|------|-----|--------|--------|-----|
| A2 | Interactive Service Robot | 49+ | 175cm | 55kg | Customer Service/Guidance |
| A2 Ultra | Premium (iF/Red Dot Award) | 49+ | 175cm | 55kg | General/Teleoperation |
| A2 Lite | Entry-level | - | - | - | General/Teleoperation |
| A2-W | Wheeled Manufacturing Robot | 22 | 163cm | 230kg | Industrial Flexible Manufacturing |
| A2-Max | Heavy-Duty | - | - | - | High-Payload Industrial Tasks |
| RAISE A1 | First Model (Aug 2023) | 49 | 175cm | 53-55kg | Industrial/R&D |

#### G Series (Wheeled Humanoid)

| Model | Form | DoF | Height | Weight | Runtime | Use |
|-------|------|-----|--------|--------|---------|-----|
| G1 | Wheeled Humanoid | 26 | Adjustable | - | - | General |
| G2 | Industrial Wheeled Humanoid | 26 | Up to 180cm | 185kg | 4 hours | Manufacturing/Logistics/Services |

#### X Series (Upper-body Humanoid)

| Model | Form | DoF | Height | Weight | Price | Use |
|-------|------|-----|--------|--------|-------|-----|
| X1 Lingxi | Open-Source Dev Kit | 34 | 130-133cm | 33-44kg | ~$19.5K | Research/Development |
| X2 Lingxi | General-Purpose Upper-body | 28 | 130cm | 33.8kg | - | Security/Housekeeping/Cleaning |

### A2 Series Detailed Specs

| Item | Spec |
|------|------|
| Total DoF | 49+ |
| Both Arms | 7 DoF x 2 = 14 DoF (force-position hybrid control) |
| Dexterous Hand | 19 DoF (needle-threading precision) |
| SkillHand | 12 active DoF + 5 passive DoF, built-in fingertip vision sensor |
| Walking Speed | Up to 7km/h (3.3m/s) |
| Runtime | 2 hours continuous operation |
| Payload | 5kg per arm, 15kg total |
| Peak Torque | 512Nm (integrated joints), PowerFlow 350Nm |
| Cameras | Microphone array, LiDAR, RGB-D |
| Computing | 200 TOPS (on-device AI) |
| AI Accuracy | 96% intent understanding (noisy environments), 99% face recognition |
| A2 Ultra Reliability | 1,300+ hours continuous walking, 21 months no falls in real environments |

### G2 Series Detailed Specs (26 DoF)

| Item | Spec |
|------|------|
| Total DoF | 26 |
| Both Arms | 7 DoF x 2 = 14 DoF (full-joint torque sensors) |
| Force Control Accuracy | >0.5N |
| Height | Up to 180cm (adjustable) |
| Weight | 185kg |
| Runtime | 4 hours (hot-swappable batteries) |
| Payload | 5kg per arm |
| Sensors | LiDAR, RGB-D, multiple RGB cameras for 360° situational awareness |
| Certification | IP42 indoor rating |
| Environment | -15°C ~ 50°C extreme environments, 130+ parts tested |

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

### 3. World's First Triple-Region Certification (May 2025)
- **AgiBot A2**: World's first humanoid robot with simultaneous China/USA/EU certification
- China CR001 certification: Comprehensive evaluation of mechanical/electrical safety, EMC, functional safety, intelligent performance
- A2 Ultra: 2025 iF Design Award, 2025 Red Dot Award winner

### 4. Guinness World Record (Nov 2025)
- AgiBot A2: **106.286km** continuous walking record achieved

---

## GO-1 Foundation Model

### Overview
**Genie Operator-1 (GO-1)** - A general-purpose Embodied Foundation Model announced in March 2025. According to Agibot, it is positioned as the "first general-purpose Embodied foundation large model." ([AIBase](https://www.aibase.com/news/16123))

### Architecture: ViLLA (Vision-Language-Latent-Action)
A new architecture that maximizes generalization capability by effectively utilizing high-quality datasets and large-scale video data.

### Learning Method
- Based on **AgiBot World dataset**:
  - 1,003,672 trajectories (Beta version)
  - 217 tasks, 87 skills
  - 3,000+ objects, 100+ real-world scenarios
  - Total duration: 2,976.4 hours
- Learning from human video data
- 5 domains: Home, Retail, Industrial, Restaurant, Office

### Core Performance
| Metric | Details |
|--------|---------|
| Success Rate Improvement | **+32%** compared to existing models (46% → 78%) |
| Complex Task Success Rate | 60%+ (long-horizon tasks) |
| Generalization | Adapts to new tasks with minimal data (Zero-shot/Few-shot) |
| Transfer Learning | "One-Brain-Multiple-Forms" - Transfer between various robot platforms |
| Continuous Learning | Continuous improvement with real-world execution data |
| Recognition | IROS 2025 Award Finalist |

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
- 100+ AgiBot G1 robots operating simultaneously
- 3,000+ physical objects
- 5 domain environments recreated: Home/Retail/Industrial/Restaurant/Office
- **Generates tens of thousands of motion data points daily**
- Open source: [GitHub](https://github.com/OpenDriveLab/AgiBot-World), [HuggingFace](https://huggingface.co/agibot-world)

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
- Built on C++20, under 50,000 lines (lightweight vs ROS2's ~200,000 lines)
- Up to 30% latency reduction in multi-node communication vs ROS2
- Multi-protocol support: ROS2/HTTP/gRPC/MQTT/Zenoh
- Plugin compatibility with ROS/ROS2 ecosystems
- Open source

### Lingqu OS
Industry's first Embodied Intelligent Operating System released in **July 2025**.
- Built on AimRT: distributed communication, real-time scheduling, hardware abstraction
- Standardized Intelligent Agent service framework
- Complete toolchain: development/debugging, simulation, data management, model deployment
- Rolling out from Q4 under open co-development model

### On-device AI
- 200 TOPS processing performance
- 96% face recognition accuracy
- Real-time voice command understanding
- Natural conversation based on local LLM (no cloud dependency)

---

## Partnerships and Deployment Cases

| Partner | Details |
|---------|---------|
| Pepsi | "Fizz Bot" branded humanoid (launched with David Beckham, served drinks at 2025 WAIC) |
| Fulin Precision | ~100 units of A2-W wheeled humanoid ordered |
| Longcheer Technology | Real-World RL pilot deployment |
| BYD | Investment and industrial automation/logistics adoption |
| SAIC Motor | Industrial automation/logistics adoption |
| JD.com | Investment and e-commerce sales channel |

---

## Competitive Position

| Differentiator | Description |
|----------------|-------------|
| Global #1 | #1 in global humanoid shipments 2025, 39% market share (5,168 units) |
| Mass Market Target | Diverse price range product lineup ($19.5K ~ $60K+) |
| Direct Sales | Own e-commerce + JD.com channel |
| Main Competitors | Unitree Robotics (32%), Tesla Optimus, Agility Robotics |
| Global Certification | World's first with China/USA/EU triple certification (May 2025) |
| Global Expansion | First overseas experience center in Malaysia, expanding to NA/Europe/Middle East/Japan/Korea/SE Asia |

---

## References

- [Agibot Official Website](https://www.agibot.com/)
- [Agibot About Us](https://www.agibot.com/about_Zhiyuan)
- [AgiBot - Wikipedia](https://en.wikipedia.org/wiki/AgiBot)
- [The Rise of AgiBot (Zhiyuan Shanghai Robotics) - Mike Kalil](https://mikekalil.com/blog/agibot-zhiyuan-robotics/)
- [AgiBot World Dataset - Mike Kalil](https://mikekalil.com/blog/agibot-world/)
- [GO-1 Foundation Model - GlobeNewswire](https://www.globenewswire.com/news-release/2025/03/11/3040608/0/en/AgiBot-GO-1-The-Evolution-of-Generalist-Embodied-Foundation-Model-from-VLA-to-ViLLA.html)
- [AgiBot World GitHub](https://github.com/OpenDriveLab/AgiBot-World)
- [AgiBot World HuggingFace](https://huggingface.co/agibot-world)
- [AgiBot G2 Industrial Robot - Robots International](https://www.robotsinternational.com/Agibot-G2-General-Purpose-Wheeled-Humanoid-Robot.htm)
- [AgiBot Real-World RL Deployment - PRNewswire](https://www.prnewswire.com/news-releases/agibot-achieves-first-real-world-deployment-of-reinforcement-learning-in-industrial-robotics-302601935.html)
- [AgiBot 5,000 Units Production - PRNewswire](https://www.prnewswire.com/news-releases/agibot-announces-the-rollout-of-its-5-000th-mass-produced-humanoid-robot-302635127.html)
- [AgiBot A2 China/USA/EU Certification - ECNS](http://www.ecns.cn/m/news/cns-wire/2025-05-30/detail-iherwsih6789577.shtml)
- [AgiBot Global Market Share #1 - TechNode](https://technode.com/2026/01/09/chinas-agibot-leads-global-humanoid-robot-shipments-in-2025-omdia-says/)

---

## See Also

- [Hardware List](./)
