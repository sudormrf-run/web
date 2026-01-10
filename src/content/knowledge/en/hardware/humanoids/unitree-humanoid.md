---
title: Unitree Humanoid
description: Complete guide to Unitree Robotics humanoid robots - R1, G1, H1, H2 Series
tags: [unitree, humanoid, g1, h1, h2, r1, embodied-ai, groot, affordable-robotics]
category: hardware
date: 2026-01-09
---

# Unitree Humanoid

> Home > Hardware > Humanoids > Unitree

<!-- Image pending: ![Unitree G1](../../assets/hardware/humanoids/unitree-humanoid.png) -->

---

## Overview

> **Data as of**: January 2026. Prices and specifications are subject to change.

| Item | Details |
|------|---------|
| **Manufacturer** | Unitree Robotics |
| **Headquarters** | Hangzhou, China |
| **Founded** | August 2016 |
| **Founder** | Wang Xingxing |
| **Specialty** | Quadruped robots, Humanoid robots |
| **Market Share** | 60-70% of global quadruped robot shipments [^1] |
| **Valuation** | $1.4B+ (2025 Series C) [^2] |

[^1]: [Unitree Robotics - Wikipedia](https://en.wikipedia.org/wiki/Unitree_Robotics)
[^2]: Series C funding round, June 2025 - [Wikipedia](https://en.wikipedia.org/wiki/Unitree_Robotics)

### Company History

Unitree Robotics originated when founder Wang Xingxing began quadruped robot research during his graduate studies at Shanghai University in 2013. After developing the first prototype XDog in 2016, he worked at DJI before founding Unitree in August of the same year.

**Key Milestones:**
- **2017**: Laikago quadruped unveiled (named after Soviet space dog Laika)
- **2021**: Go1 released - world's first consumer-grade quadruped robot ($2,700)
- **2023**: Go2 released - equipped with 4D LiDAR and AI large models
- **2024**: H1 humanoid unveiled, G1 mass production started
- **2025**: R1 entry-level humanoid announced, H2 next-generation model unveiled
- **2026**: R1 official shipment started

---

## Key Significance

### Democratization of Research Accessibility

The greatest significance of Unitree humanoids is their **Price-Performance Ratio**:

| Comparison | Price | Unitree Alternative | Savings |
|------------|-------|---------------------|---------|
| Boston Dynamics Atlas | Not for sale (research) | H1 (~$100,000) | - |
| Figure 01 | $30,000-$150,000 (est.) | G1 ($16,000~) | ~50-90% |
| Tesla Optimus | $20,000-$30,000 (planned) | R1 ($5,900~) | ~70-80% |

**Impact on Research Community:**
1. **University Lab Accessibility**: $16,000 G1 is purchasable within most university research budgets
2. **Repeated Experiments Possible**: Low price enables acquisition of multiple robots
3. **Open Development Environment**: Easy customization with ROS2, Python, C++ support
4. **Fast Parts Supply**: Excellent parts accessibility based on Chinese manufacturing

### From Quadruped to Humanoid

Unitree applies technology accumulated from Go1, Go2 quadruped robots to humanoids:
- **High-torque Motor Technology**: M107 self-developed joint motor (up to 360N.m)
- **Control Algorithms**: Reinforcement learning-based gait control
- **Sensor Integration**: LiDAR + depth camera fusion

---

## Product Lineup Details

### Complete Comparison Table

> **DoF Calculation Basis**: Only body DoF listed (excluding hands). Variants with hands are referenced in separate sections.

| Model | Price | Height | Weight | Body DoF | Max Speed | Target |
|-------|-------|--------|--------|----------|-----------|--------|
| **R1** | $5,900~ | 121cm | 25kg | 24 | - | Education, Entry |
| **R1 EDU** | ~$16,000 | 121cm | 25kg | 26 | - | Research, Development |
| **G1 Basic** | $16,000~ | 132cm | 35kg | 23 | 2 m/s | Consumer, Entry |
| **G1 EDU Standard** | $42,000~ | 132cm | 35kg | 23 | 2 m/s | Research, Development |
| **G1 EDU Plus** | $52,000~ | 132cm | 35kg | 29 | 2 m/s | Research, Development |
| **G1 EDU Ultimate** | $64,000-$74,000 | 132cm | 35kg | 23 | 2 m/s | Research, Development |
| **H1** | ~$100,000 | 180cm | 47kg | 19 | 3.3 m/s | Advanced Research |
| **H1-2** | ~$129,000 | 152cm | 70kg | 27 | 1.5-5 m/s | Industrial, Research |
| **H2** | $30,000~ | 182cm | 70kg | 31 | - | Industrial, Commercial |

> **Hand DoF Reference**: Dex3-1 3-finger (6 DoF/hand, 12 DoF both hands), Inspire 5-finger (6 DoF/hand, 12 DoF both hands), Revo 2 Basic (6 DoF/hand, 12 DoF both hands)

---

### R1 Series (Entry-Level)

**R1** - Ultra-low-cost Humanoid

| Item | R1 | R1 EDU |
|------|-----|--------|
| **Price** | $5,900~ | ~$16,000 |
| **DoF** | 24 (legs 6x2, arms 5x2, waist 2) | 26 (head 2 added) |
| **Size** | 1210 x 357 x 190 mm | Same |
| **Weight** | ~25 kg | ~25 kg |
| **Computing** | 8-core CPU | NVIDIA Jetson Orin |
| **Sensors** | Stereo camera, 4-mic array | Same |
| **Communication** | Wi-Fi 6, Bluetooth 5.2 | Same |
| **Battery** | ~1 hour (quick-swap) | Same |
| **Release** | January 2026 | January 2026 |

**Features:**
- Selected as TIME Magazine "Best Inventions of 2025" [^4]
- Dynamic movements including side flips, handstands, spinning kicks possible
- Voice/image interaction through large language model integration

[^4]: [TIME Best Inventions 2025](https://time.com/collection/best-inventions-2025/)

**R1 EDU Variants (Total DoF with hands):**
- **R1 EDU U3**: Dex3-1 3-finger hands (body 26 + both hands 12 = 38 DoF)
- **R1 EDU U5**: Revo 2 Basic 5-finger hands (body 26 + both hands 12 = 38 DoF)

---

### G1 Series (Mainstream)

**G1** - Most Popular Research Platform

| Item | G1 Basic | G1 EDU Standard | G1 EDU Plus | G1 EDU Ultimate |
|------|----------|-----------------|-------------|-----------------|
| **Price** | $16,000~ | $42,000~ | $52,000~ | $64,000-$74,000 |
| **Body DoF** | 23 | 23 | 29 | 23 |
| **Computing** | - | 100 TOPS | 100 TOPS | 100 TOPS |
| **Hands** | None | None | None | Dex3-1/Inspire |
| **Development** | Not available | C++/Python/ROS2 | C++/Python/ROS2 | C++/Python/ROS2 |

**G1 Common Specifications:**

| Item | Spec |
|------|------|
| **Height** | 132 cm |
| **Weight** | 35 kg |
| **Max Speed** | 2 m/s |
| **Joint Torque** | Up to 120 N.m |
| **Battery** | 9000 mAh (quick-swap), ~2 hours |
| **Control Loop** | 500 Hz |
| **Arm Payload** | Up to 3 kg |

**Sensor Configuration:**
- **LiDAR**: LIVOX MID-360 3D LiDAR (360-degree scan)
- **Depth Camera**: Intel RealSense D435i
- **Audio**: 4-microphone array
- **IMU**: Gyroscope + Accelerometer
- **Joints**: Dual encoders (position/torque feedback)

**G1 EDU Ultimate Variants (Total DoF with hands):**
| Variant | Hand Type | Total DoF (body 23 + hands) | Price |
|---------|-----------|------------------------------|-------|
| U3 | Dex3-1 3-finger | 35 (23+12) | $64,000~ |
| U4 | Dex3-1 + tactile sensors | 35 (23+12) | $66,000~ |
| U5 | Inspire 5-finger | 35 (23+12) | $66,000~ |
| U5-1 | Top configuration | 35 (23+12) | $74,000~ |

---

### H1 Series (Premium)

**H1 / H1-2** - High-performance Research Platform

| Item | H1 | H1-2 |
|------|-----|------|
| **Price** | ~$100,000 | ~$129,000 |
| **DoF** | 19 | 27 (arms 7x2, legs 6x2, waist 1) |
| **Height** | ~180 cm | 152 cm (1520 mm) |
| **Weight** | ~47 kg | ~70 kg |
| **Speed** | 3.3 m/s | 1.5-5 m/s |
| **Torque** | - | 360 N.m (M107 motor) |
| **Battery** | - | 864 Wh (quick-swap) |

**H1 Series Features:**
- Holds 2024 humanoid walking speed record (3.3 m/s) [^3]
- Full-size humanoid platform widely used in research community
- Easy custom AI implementation with open development environment

[^3]: [Unitree H1 Official Page](https://www.unitree.com/h1/)

**Sensors (H1-2):**
- LIVOX MID-360 LiDAR (omnidirectional scan)
- Intel RealSense D435 depth camera
- 360-degree environmental awareness

---

### H2 (Next Generation)

**H2** - Industrial Commercialization Target

| Item | Spec |
|------|------|
| **Price** | $30,000~ (base model) |
| **DoF** | 31 |
| **Size** | 1820 x 456 x 218 mm |
| **Weight** | ~70 kg |
| **Computing** | 2070 TOPS |
| **Torque** | 360 N.m |

**Improvements vs H1-2:**

| Item | H1-2 | H2 |
|------|------|-----|
| **Waist DoF** | 1 | 3 (serial stack) |
| **Neck DoF** | 0 (fixed) | 2 (pitch/yaw) |
| **Ankle** | Standard | Quasi-serial remote drive |
| **Leg Length** | Reference | Longer stride |
| **Battery** | Reference | Longer operation time |

**H2 Design Philosophy:**
Unlike the H1 series, H2 is designed with **Industrial Deployment** as the goal:
- Enclosed design
- Turnkey solution oriented
- Defined use cases for enterprise customers

---

## VLA Research Applications

### NVIDIA GR00T Integration

Unitree G1 is a **core platform for NVIDIA's GR00T (Generalist Robot 00 Technology) project**.

**G1 Performance by GR00T Version:** [^5]

| Metric | GR00T N1 | GR00T N1.5 | GR00T N1.6 |
|--------|----------|------------|------------|
| Known Object Success Rate | 44.0% | 98.8% | 99%+ |
| New Object Generalization | Limited | Good | Good+ |
| Training Data | 1,000 episodes | 1,000 episodes | 1,000+ episodes |
| Key Improvements | Basic | Test-time RTC | Cross-embodiment |

[^5]: [NVIDIA GR00T N1.5](https://research.nvidia.com/labs/gear/gr00t-n1_5/) / [N1.6](https://research.nvidia.com/labs/gear/gr00t-n1_6/)

**NVIDIA Official Support:**
1. **Isaac GR00T N1.6**: Open VLA model, includes G1 loco-manipulation task pre-training
2. **GR00T-WholeBodyControl**: G1 whole-body control policy, teleoperation stack
3. **PhysicalAI-Robotics-GR00T-Teleop-G1**: HuggingFace dataset (1,000 trajectories)

**Supported Tasks:**
- Fruit pick-and-place (apple, pear, star fruit, grape)
- Language command-based manipulation
- Whole-Body Locomanipulation

### LeRobot Framework

Compatible with HuggingFace's LeRobot framework:
- Data collection and training pipeline
- Algorithm support including ACT, Diffusion Policy
- Open-source community contributions

### Major Research Applications

| Research Institution | Model Used | Research Area |
|---------------------|------------|---------------|
| NVIDIA Research | G1 | GR00T VLA model development |
| University Labs (many) | G1, H1 | Reinforcement learning locomotion, manipulation |
| Robot Startups | H1-2 | Industrial application prototyping |

---

## Competitive Comparison

### Price-Performance Positioning

| Manufacturer | Model | Price | Body DoF | Features |
|--------------|-------|-------|----------|----------|
| **Unitree** | G1 | $16,000~ | 23-29 | Value, research accessibility |
| **Unitree** | H1 | ~$100,000 | 19-27 | Speed record holder |
| Tesla | Optimus | $20,000-$30,000 (planned) | - | Mass production goal |
| Figure AI | Figure 02/03 | $30,000-$150,000 (est.) | - | Industrial deployment validation |
| Boston Dynamics | Atlas (Electric) | Not for sale | - | Best dynamic movements |
| Agility Robotics | Digit | - | - | Logistics specialized |

### Unitree's Differentiators

1. **Actually Purchasable**: Only product line immediately purchasable compared to other competitors
2. **Price Transparency**: Clear price disclosure (competitors are quote-based)
3. **Developer Friendly**: Rich ROS2, SDK, example code
4. **Fast Iteration**: New model release every year
5. **Parts Accessibility**: Easy repair/replacement based on Chinese manufacturing

### Market Outlook

Goldman Sachs Forecast [^6]:
- **Base Case**: 1.4 million humanoid shipments by 2035
- **Bull Case**: 1 million shipments by 2031

Unitree is securing strong position in the low-price market and preempting the research/education market.

[^6]: Goldman Sachs Humanoid Robot Market Report, 2025 - [BotInfo.ai Summary](https://botinfo.ai/articles/humanoid-robot)

---

## Purchase Guide

### Recommendations by Use Case

| Use Case | Recommended Model | Budget |
|----------|------------------|--------|
| Education/Entry | R1 | $5,900~ |
| Hobby/Prototyping | R1 EDU | $16,000~ |
| University Research Lab | G1 EDU Standard | $42,000~ |
| VLA/Manipulation Research | G1 EDU Ultimate | $64,000-$74,000 |
| Full-size Humanoid Research | H1-2 | $129,000~ |
| Industrial Pilot | H2 | $30,000~ |

### Official Retailers

- **Unitree Official Store**: shop.unitree.com
- **RobotShop**: Official distributor
- **Roboworks**: US/Europe supply

---

## References

### Official Materials
- [Unitree Robotics Official Site](https://www.unitree.com)
- [Unitree G1 Product Page](https://www.unitree.com/g1/)
- [Unitree H1 Product Page](https://www.unitree.com/h1/)
- [Unitree R1 Product Page](https://www.unitree.com/R1/)
- [Unitree H2 Introduction](https://www.unitree.com/mobile/H2/)

### NVIDIA GR00T Integration
- [NVIDIA Isaac GR00T GitHub](https://github.com/NVIDIA/Isaac-GR00T)
- [GR00T-WholeBodyControl GitHub](https://github.com/NVlabs/GR00T-WholeBodyControl)
- [PhysicalAI-Robotics-GR00T-Teleop-G1 Dataset](https://huggingface.co/datasets/nvidia/PhysicalAI-Robotics-GR00T-Teleop-G1)
- [GR00T N1.5 Research Page](https://research.nvidia.com/labs/gear/gr00t-n1_5/)
- [GR00T N1.6 Research Page](https://research.nvidia.com/labs/gear/gr00t-n1_6/)

### Additional Materials
- [Unitree Robotics Wikipedia](https://en.wikipedia.org/wiki/Unitree_Robotics)
- [RobotShop H2 Overview](https://community.robotshop.com/blog/show/unitree-h2-overview-new-features-key-differences-from-the-h1-h1-2)

---

## See Also

- [Hardware List](../index.md)
- [Unitree Quadrupeds](../quadrupeds/unitree.md)
- [GR00T Model](../../models/vla/groot.md)
- [Figure Humanoid](figure.md)
- [Tesla Optimus](tesla-optimus.md)
