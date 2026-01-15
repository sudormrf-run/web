---
title: Figure Humanoid
description: Figure AI's high-performance humanoid robots - Figure 01, 02, 03 generational evolution
tags: [figure, humanoid, helix, vla, bmw, brett-adcock, figure-01, figure-02, figure-03]
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

## Overview

Figure AI is a US robotics company founded in 2022 by Brett Adcock, focused on developing AI-powered general-purpose humanoid robots. Led by serial entrepreneur Adcock, who founded Archer Aviation and Vettery, Figure AI has rapidly emerged as a leader in the humanoid market. [^wiki]

<!-- Image pending: ![Figure 02](../../assets/hardware/humanoids/figure.png) -->

| Item | Content |
|------|---------|
| Company | Figure AI, Inc. |
| Founder | Brett Adcock (CEO) |
| Founded | 2022 |
| Headquarters | Sunnyvale, California |
| VLA Model | Helix (Vision-Language-Action model) |
| Target Market | Industrial (manufacturing, logistics), Home |

---

## Key Significance

Figure AI humanoids have significant importance in the Physical AI field:

- **First Commercial Humanoid Manufacturing Deployment** (Figure AI claim): General-purpose humanoid deployed on actual production line at BMW factory [^bmw]
- **Vertical Integration AI Strategy**: Transitioned from OpenAI partnership to in-house Helix VLA development (February 2025) [^techcrunch]
- **High-Performance Hardware-Software Integration**: Combination of Helix VLA capable of 200Hz full-body control with optimized hardware [^helix]
- **Aggressive Cost Reduction Target**: Targeting 90% parts cost reduction in Figure 03, aiming for under $20,000 at mass production [^figure03]
- **Large-Scale Production Infrastructure**: BotQ factory targeting 12,000 units annually (announced March 2025) [^wiki]
- **Proven Industrial Performance**: Contributed to production of over 30,000 X3s at BMW factory [^bmw]

---

## Generational Comparison

| Item | Figure 01 (2023) | Figure 02 (2024) | Figure 03 (2025) |
|------|------------------|------------------|------------------|
| **Purpose** | Prototype | Industrial pilot | Commercial mass production |
| **Height** | ~170cm | ~170cm | 168cm (5'6") |
| **Weight** | - | ~66kg | 60kg (-9%) |
| **Hand DoF** | Basic gripper | 16 DoF | Improved design |
| **Total DoF** | - | 35 DoF | 35+ DoF |
| **Hand Payload** | - | 25kg | 25kg |
| **Cameras** | Basic | 6x RGB | 8x (including 2 palm) |
| **Battery** | - | Integrated | 2.3 kWh (5 hours) |
| **Charging** | Wired | Wired | Wireless induction (2kW) |
| **Computing** | Basic | NVIDIA RTX dual | Dual GPU (S1/S2) |
| **Manufacturing** | Handmade | CNC machining | Die-casting/injection molding |
| **Target Price** | - | $100K+ | Under $20K (target) |

*Source: Wikipedia, Figure AI official announcements*

---

## Figure 01

Figure AI's first humanoid robot officially announced in March 2023. [^wiki]

### Key Features

- **Bipedal Robot**: Targeting logistics and warehouse operations
- **Basic Manipulation Capabilities**: Climbing stairs, lifting boxes, using tools
- **OpenAI Integration**: Voice conversation and reasoning capabilities using large language models
- **Human-Level Dexterity**: Capable of performing tasks requiring precision and coordination

---

## Figure 02

2nd generation humanoid announced August 6, 2024, marking the serious stage for industrial deployment. [^wiki]

### Key Features

| Item | Spec |
|------|------|
| Hand DoF | 16 (5-finger both hands) |
| Total DoF | 35 |
| Hand Payload | Up to 25kg |
| Cameras | 6x RGB |
| Computing | Dual NVIDIA RTX GPU (3x previous) |
| Sensors | RGB cameras, IMU (Inertial Measurement Unit), gyroscope, force sensors, non-contact sensing, microphones, speakers |

### Major Improvements

- Cable integrated design in limbs
- Battery integrated in torso
- Onboard VLM (Vision Language Model)
- Real-time perception, decision-making, execution capable

---

## Figure 03

3rd generation humanoid announced October 2025, mass production model targeting both home and commercial use. [^figure03]

### Physical Specifications

| Item | Spec |
|------|------|
| Height | 168cm (5'6") |
| Weight | 60kg (Figure 02 -9%) |
| Battery | 2.3 kWh (custom) |
| Operating Time | About 5 hours (300 minutes) |
| Charging | Wireless induction 2kW (foot coils) |
| Data Transfer | 10 Gbps mmWave |

### Sensor System

- **Cameras**: 8 (6 main + 2 palm)
- **Tactile Sensors**: Custom sensors on fingertips (sensing down to 3g - paper clip weight)
- **Vision System**: 2x frame rate, 1/4 latency, 60% wider FOV

### Audio System

- Speakers: 2x size, 4x output
- Microphones: Repositioned for improved clarity
- Real-time speech-to-speech conversation support

### Safety Features

- Multi-density foam for pinch point protection
- Soft textile exterior (instead of hard metal)
- UN38.3 certified battery (BMS, cell, interconnect, pack level protection)

### Manufacturing Innovation

- **Manufacturing Method Transition**: CNC machining -> die-casting, injection molding, stamping
- **Parts Cost Reduction Target**: 90% reduction
- **Target Price**: Under $20,000 (at mass production)
- **Wrist Redesign**: Lessons learned from BMW deployment reflected, distribution board and dynamic cabling removed

---

## Helix VLA

Helix is Figure AI's in-house developed VLA (Vision-Language-Action) model announced February 2025. Figure AI introduces Helix as "the first VLA for high-speed continuous control of a humanoid's full body." [^helix]

### Architecture

**System 1 / System 2 Dual System Structure**:

| System | Role | Frequency | Parameters |
|--------|------|-----------|------------|
| System 2 (S2) | High-level planning, VLM | 7-9 Hz | 7B |
| System 1 (S1) | Low-level control, real-time | 200 Hz | 80M |

### Key Features

- **35 DoF Control**: Full upper body control including fingers, wrists, torso, head
- **Figure AI's Claimed Firsts**:
  - First VLA for high-speed continuous humanoid full-body control
  - First VLA for dual robot simultaneous control
  - First VLA running fully onboard on embedded low-power GPU
- **Learning Efficiency**: Trained on approximately 500 hours of teleoperation demos
- **Versatility**: No task-specific adaptation needed, single weights for various tasks

### Representative Performance: Table-to-Dishwasher

| Item | Value |
|------|-------|
| Distance Traveled | 130+ feet |
| Unique Interactions | 33 |
| Objects Handled | 21 (including delicate dishware) |

According to Figure AI, evaluated as "the most complex task ever performed autonomously by a robot." [^helix]

---

## Industrial Deployment

### BMW Factory Pilot (2024-2025)

According to Figure AI, this is the first commercial deployment of a general-purpose humanoid in an automotive production facility. [^bmw] [^bmwpress]

| Item | Content |
|------|---------|
| Location | BMW Spartanburg Plant (South Carolina) |
| Duration | 11 months |
| Robots Deployed | 2 Figure 02 units |
| Work Hours | 5 days/week, 10-hour shifts |
| Total Operating Hours | 1,250 hours |

### Results

- **Parts Processed**: Over 90,000 sheet metal parts loaded
- **Production Contribution**: Contributed to over 30,000 BMW X3 production
- **Task Description**: Pick sheet metal parts from racks/bins and place on welding equipment

### Performance Requirements

| Item | Standard |
|------|----------|
| Placement Accuracy | Within 5mm tolerance |
| Single Motion Time | 2 seconds |
| Part Loading Time | 37 seconds |
| Full Cycle Time | 84 seconds |
| Success Rate Target | 99% per shift |

### Lessons Learned

Key lessons from BMW deployment reflected in Figure 03 design:
- **Forearm Issues**: Most frequent hardware failure point -> Wrist electronics completely redesigned in Figure 03
- **Thermal Management**: Issues due to tight packaging and agility requirements -> Distribution board and dynamic cabling removed

---

## Funding and Valuation

### Investment History

| Period | Round | Amount | Valuation | Key Investors |
|--------|-------|--------|-----------|---------------|
| 2023 | Series A | ~$70M | - | Early investors |
| 2024.02 | Series B | $675M | $2.6B | Jeff Bezos, Microsoft, NVIDIA, Intel, Amazon, OpenAI |
| 2025.09 | Series C | $1B | $39B | Intel, NVIDIA, Qualcomm, T-Mobile, Salesforce, Brookfield |

*Source: [Wikipedia](https://en.wikipedia.org/wiki/Figure_AI), [PRNewswire](https://www.prnewswire.com/news-releases/figure-raises-675m-at-2-6b-valuation-and-signs-collaboration-agreement-with-openai-302074897.html)*

**Cumulative Funding**: Approximately $1.7B+ (Series A + B + C)

### OpenAI Partnership

- **February 2024**: Collaboration agreement with OpenAI, joint development of next-generation AI models for humanoids [^seriesb]
- **February 2025**: Partnership ended, transitioned to in-house AI development [^techcrunch]
- **Reason**: "To solve Embodied AI at scale in the real world, you need to vertically integrate robot AI" - Brett Adcock

---

## Future Plans

- **BotQ Factory**: Announced March 2025, targeting 12,000 units annually [^wiki]
- **100,000 units within 4 years** plan (roadmap)
- **Home Market Entry**: Figure 03's household helper role (laundry, cleaning, dishwasher, etc.) [^figure03]

---

## Glossary

| Term | Description |
|------|-------------|
| VLA | Vision-Language-Action model. AI model integrating visual input, language understanding, and action output |
| VLM | Vision-Language Model. AI model that understands images and text together |
| DoF | Degrees of Freedom. Number of independent directions a robot can move |
| IMU | Inertial Measurement Unit. Sensor measuring acceleration and angular velocity |
| FOV | Field of View. Range a camera can see |

---

## References

[^wiki]: [Figure AI Wikipedia](https://en.wikipedia.org/wiki/Figure_AI)
[^helix]: [Figure AI - Helix Announcement](https://www.figure.ai/news/helix)
[^figure03]: [Figure 03 Announcement](https://www.figure.ai/news/introducing-figure-03)
[^bmw]: [Figure AI - BMW Production Contribution](https://www.figure.ai/news/production-at-bmw)
[^bmwpress]: [BMW Official Press Release](https://www.press.bmwgroup.com/global/article/detail/T0444265EN/successful-test-of-humanoid-robots-at-bmw-group-plant-spartanburg)
[^seriesb]: [Series B Funding Announcement](https://www.prnewswire.com/news-releases/figure-raises-675m-at-2-6b-valuation-and-signs-collaboration-agreement-with-openai-302074897.html)
[^techcrunch]: [Figure drops OpenAI - TechCrunch](https://techcrunch.com/2025/02/04/figure-drops-openai-in-favor-of-in-house-models/)

**Additional References**:
- [Figure AI Official Site](https://www.figure.ai/)
- [Brett Adcock Wikipedia](https://en.wikipedia.org/wiki/Brett_Adcock)

---

## See Also

- [Hardware List](../index)
- [Figure AI](../../companies/figure)
- [Figure Helix](../../models/figure-helix)
- [Tesla Optimus](optimus)
