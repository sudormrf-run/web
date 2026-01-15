---
title: Noetix Bumi
description: World's lowest-cost small humanoid robot - Innovative affordable robot for education and consumer markets
tags: [noetix, bumi, low-cost, consumer, education, humanoid, china, bipedal]
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

# Noetix Bumi

> Home > Hardware > Humanoids > Noetix Bumi

<!-- Image pending: ![Noetix Bumi](../../assets/hardware/humanoids/noetix-bumi.png) -->

---

## Key Significance

Noetix Bumi is a product that **achieved a high-performance bipedal humanoid robot at under $1,400** [1][4]. As a case that proves humanoid robots can be made available to the public at a price cheaper than flagship smartphones, it is evaluated as a milestone symbolizing the democratization of Physical AI.

- **Price Innovation**: Significantly cheaper than existing high-performance humanoid robots (Unitree H2 ~$16,000) [8]
- **Vertical Integration Strategy**: Cost reduction through self-developed controllers and actuators [2]
- **Educational Accessibility**: Greatly lowered the barrier to entry for robot research for students, researchers, and hobbyist developers [1]
- **Mass Production Potential**: Easy to scale up utilizing supply chains within China [2]

---

## Manufacturer: Noetix Robotics

### Company Overview

| Item | Information |
|------|-------------|
| Official Name | Songyan Dynamics Beijing Technology Co., Ltd. (Songyan Dynamics) |
| Founded | September 2023, Beijing [7] |
| Founder | Jiang Zheyuan - Dropped out of PhD program at Tsinghua University Electronic Engineering [7] |
| Team | 40+ members from top universities including Tsinghua, Zhejiang University, USC [7] |
| Vision | Short-term: "Xiaomi of robots", Long-term: "Apple of robots" [7] |

### Founder Background

Founder Jiang Zheyuan (27 years old) completed his undergraduate degree at Tsinghua University's Electronic Engineering Department and took a leave of absence during his PhD program in 2023 to start Noetix [7]. With the goal of commercializing humanoid robot technology, he assembled a young engineering team and succeeded in rapidly developing from research robots to mass-producible consumer products [1][7].

### Funding Status

| Round | Amount | Key Investors |
|-------|--------|---------------|
| Pre-B (2025.10) | ~$41M (RMB 300M) | FG Venture (lead), Vertex Ventures, CRRC Beijing, OR Capital, Everpine Capital [2] |
| Total Rounds | 5 | 24 investors including Hangzhou Dongfang Jiafu, Jiadao Valley Investment, United Pioneers Capital |
| Valuation | ~$200M | Approximately 3x increase after N2 half-marathon success in April 2025 (per reports) [2][7] |

---

## Technical Specifications

### Physical Specs

| Item | Spec | Source |
|------|------|--------|
| Height | 94cm (~3.1 feet) | [1][4] |
| Weight | 12kg (26.5 lbs) | [1][4] |
| Degrees of Freedom (DOF) | 21 DOF | [8] |
| Battery | 48V, 3.5Ah+ | [1] |
| Runtime | 1-2 hours (depending on usage pattern) | [1] |
| Price | ¥9,998 (~$1,370) | [1][3] |

### DOF Configuration

21 DOF supports complex movements including bipedal walking, upper body manipulation, and head movements [8]. Although the specific joint distribution is not disclosed, based on typical humanoid configurations, it is estimated to be distributed as follows:

- **Lower Body**: Knee flexion, hip rotation, ankle joints - bipedal walking and balance
- **Upper Body**: Elbow flexion, shoulder joints - upper body movement
- **Torso/Head**: Torso rotation, head motion - dynamic movements and interaction

*The above distribution is an estimate; exact specs require manufacturer confirmation*

Note: Lower than Unitree H2 (31 DOF) but higher than basic educational robots, reflecting a consumer-oriented design philosophy [8].

### Control System

- **Self-developed Domain Controller**: Internal design without relying on third-party suppliers [2]
- **Motion Control Algorithm**: Hybrid approach of Imitation Learning + Reinforcement Learning (per reports) [1][8]
- **Sensors**: Camera-based vision, voice recognition [1]

### Motor Capabilities

According to official announcements and reports [1][4]:
- Stable bipedal walking
- Jumping (single leg, both feet)
- Dance movements
- Dynamic balance maintenance
- Object recognition and interaction

---

## Cost Optimization Strategy

Key strategies by which Noetix achieved the $1,400 price (per TechNode reports) [2]:

### 1. Vertical Integration

Instead of purchasing standard control boards and actuators from third parties, Noetix designs these core modules internally. This enables:
- Elimination of supplier premiums
- Close hardware-software optimization
- Motor controller customization specialized for Bumi's motion profile

### 2. Lightweight Composite Materials

- Base: Composite materials
- Reinforcement: Selective metal use only where needed
- Result: 12kg weight reduction enables smaller motors and batteries -> additional cost savings

### 3. Utilizing Domestic Supply Chains

- Parts procurement to assembly all conducted within China
- Minimized tariffs, logistics, communication costs
- Maximized scale advantages in mass production

### 4. Self-developed Low-cost Actuators

- Developed actuators optimized for consumer grade instead of expensive industrial actuators
- Set durability-cost balance point

---

## Target Markets

### 1. Education Market

- **Graphical Programming**: Drag-and-drop programming support for children [1]
- **Open Programming Interface**: Low-level control access for university robotics programs and researchers [8]
- **Affordable Practice Platform**: Students can test algorithms on actual humanoids

### 2. Consumer/Home Use

- **Voice Interaction**: For companion and educational scenarios [1]
- **Compact Size**: 94cm suitable for home environments [3]
- **Entertainment**: Dance, movement demonstrations

### 3. Research/Developers

- Motion control algorithm testing
- Machine learning model development
- Human-robot interaction paradigm research

---

## Market Response

### Sales Performance (November 2025, per reports)

- **Over 100 units sold within 1 hour** of JD.com launch [1]
- **First 500 units sold out in 2 days** (during Double-11, Double-12 shopping festivals) [1]
- Pre-order period: November 11 - December 12, 2025 [8]

---

## Related Product: N2 Humanoid

Information about Noetix's larger humanoid robot N2 [7]:

| Item | Spec |
|------|------|
| Height | 1.2m |
| Weight | 29-30kg |
| Price | ¥39,900 (~$5,500) |
| Max Speed | 3.5m/s (10km/h) |
| Capabilities | Backflip, large strides, running, jumping, dancing |

### April 2025 Beijing Half Marathon

At the world's first humanoid half marathon (21.1km), N2 **achieved 2nd place** (3 hours 37 minutes) [5][6]:
- 1st: Tien Kung (Beijing Humanoid Robot Innovation Centre) - 2 hours 40 minutes
- 2nd: **Noetix N2** - 3 hours 37 minutes
- 3rd: DroidUp X02 - 4 hours 50 minutes

As a result of this achievement, Noetix reportedly received **over 1,000 orders within a month**, and the company valuation increased [5].

---

## Limitations and Considerations

- **Durability Tests Not Disclosed**: Detailed durability test results or IP rating not announced [8]
- **API Documentation**: Complete open API documentation absent (openness emphasized but detailed specs limited) [8]
- **Battery Replacement Needed**: Battery swap required for long-duration operation (confirmed during N2 marathon) [5]
- **Consumer Support System**: Service infrastructure verification needed as it's early stage of mass market entry

---

## Competitor Comparison

| Product | Manufacturer | Height | Price (USD) | DOF | Features |
|---------|--------------|--------|-------------|-----|----------|
| **Bumi** | Noetix | 94cm | ~$1,370 | 21 | Lowest-cost consumer, education market target |
| N2 | Noetix | 1.2m | ~$5,500 | N/A | High-performance, marathon 2nd place |
| H2 | Unitree | 1.8m | ~$16,000 | 31 | Industrial, high DOF |

*Note: Prices are as of announcement date and subject to change*

---

## References

1. TechNode - [China's Noetix Robotics unveils $1,370 humanoid robot "Bumi"](https://technode.com/2025/10/22/chinas-noetix-robotics-unveils-1370-humanoid-robot-bumi/)
2. TechNode - [After new funding, Noetix Robotics explains how it built a humanoid robot cheaper than an iPhone](https://technode.com/2025/10/27/after-new-funding-noetix-robotics-explains-how-it-built-a-humanoid-robot-cheaper-than-an-iphone/)
3. SCMP - [Chinese robotics start-up Noetix debuts 'family-friendly' US$1,400 humanoid](https://www.scmp.com/tech/tech-trends/article/3330046/chinese-robotics-start-noetix-debuts-family-friendly-us1400-humanoid)
4. Interesting Engineering - [China unveils world's cheapest humanoid robot under $1,400](https://interestingengineering.com/innovation/bumi-worlds-cheapest-humanoid-robot)
5. Asia Times - [Chinese humanoid robots get reality check in half-marathon debut](https://asiatimes.com/2025/04/chinese-humanoid-robots-get-reality-check-in-half-marathon-debut/)
6. People's Daily - [Robots, go. World's first humanoid half marathon heralds new era of intelligence](http://en.people.cn/n3/2025/0421/c90000-20304847.html)
7. TMTPost - [Startup NOETIX Robotics Launches Affordable Humanoid Robot Capable of Backflips](https://en.tmtpost.com/post/7497178)
8. OriginOfBots - [Bumi by Noetix Robotics: Price, Details, Review 2026](https://www.originofbots.com/robot/bumi-by-noetix-robotics-details-specifications-rating)
9. Robotics and Automation News - [Beijing startup Noetix Robotics launches consumer-grade humanoid robot at $1,400](https://roboticsandautomationnews.com/2025/10/22/beijing-startup-noetix-robotics-launches-consumer-grade-humanoid-robot-at-1400/95731/)

---

## See Also

- [Hardware List](../index)
- [Unitree H2](unitree-h2)
- [Low-cost Humanoid Trends](../../trends/low-cost-humanoids)
