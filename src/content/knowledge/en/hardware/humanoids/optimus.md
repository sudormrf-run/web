---
title: Tesla Optimus
description: Tesla's general-purpose humanoid robot - End-to-End AI-based robot targeting mass production
tags:
  - tesla
  - optimus
  - humanoid
  - end-to-end
  - neural-network
  - mass-production
created: 2024-01-01
updated: 2026-01-09
sources:
  - tesla.com/AI
  - standardbots.com
  - notateslaapp.com
  - briandcolwell.com
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

# Tesla Optimus

> Home > Hardware > Humanoids > Optimus

<!-- Image pending: ![Tesla Optimus](../../assets/hardware/humanoids/optimus.png) -->

*Information in this document is as of January 2026; specs and plans are based on Tesla announcements and industry analysis.*

---

## Overview

Tesla Optimus is a general-purpose humanoid robot under development by Tesla. First announced at AI Day 2021, it applies End-to-End neural network technology accumulated from Tesla's FSD (Full Self-Driving) to robotics. The biggest differentiator is the **low-price strategy through mass production**, targeting $20K-$30K compared to existing humanoid robots that cost $100K-$250K.

### Confirmed Specs (Gen 3 Basis)

| Item | Spec | Source |
|------|------|--------|
| Manufacturer | Tesla | - |
| Height | 5'8" (173cm) | [1] |
| Weight | 125 lbs (57kg) | [1] |
| Total DoF | 40+ | [2] |
| Hand DoF | 22 (+ wrist/forearm 3) | [2] |
| Hand Actuators | 17 linear actuators | [2] |
| Lifting Capacity | 45 lbs (carry) | [1] |
| Running Speed | ~8.4 km/h (5.2 mph) | [2] |
| Battery Life | ~8 hours (estimated) | [1] |
| Sensors | RGB camera, depth camera, IMU, force/torque sensors | [1] |

### Target Specs (Based on Tesla Announcements)

| Item | Target Value | Notes |
|------|--------------|-------|
| Target Price | $20,000 - $30,000 | Elon Musk announcement, at mass production [3] |
| Initial Sales Price | $40,000 - $50,000 | Estimated before economies of scale [3] |

---

## Key Significance

The most significant aspect of Tesla Optimus is **demonstrating the possibility of mass production of humanoid robots**.

### Why is Mass Production Important?

1. **Price Revolution**: Existing humanoid robots (Atlas $140K+ estimated, Figure 01 $150K+ estimated) were expensive equipment usable only for special purposes. Tesla targets $20K-$30K price range leveraging automotive production know-how. [3]

2. **Vertical Integration**: Tesla is almost the only company that can produce batteries, electric motors, AI chips, and software all in-house. This vertical integration is the key to cost reduction.

3. **Production Scale Targets** (Based on Tesla announcements): [3]
   - 2025: 5,000 - 10,000 units (target, achievement unconfirmed)
   - 2026: 50,000 - 100,000 units (target)
   - 2027 onwards: Over 1 million units annually (long-term target)

4. **Economic Impact**: Elon Musk forecasts that Optimus will account for 80% of Tesla's corporate value, even mentioning the possibility of Universal Basic Income (UBI) through labor replacement. [4]

---

## Generation Comparison

| Version | Period | Key Features | Hand DoF | Status |
|---------|--------|--------------|----------|--------|
| **Gen 1** | 2022 | Initial prototype, basic walking demonstration | 11 | Completed |
| **Gen 2** | 2023 | Improved walking, weight reduction, improved hand dexterity | 11 | Completed |
| **Gen 3** | 2024-25 | 22 DoF hands, tendon drive, flexible glove, running capable | 22 | Pilot deployment |

*Source: Tesla AI Day announcements, [2]*

### Gen 3 Major Improvements

- **2x Hand Dexterity Increase**: Expanded from 11 DoF to 22 DoF [2]
- **Tendon Drive System**: Implements human-like finger movements
- **Flexible Glove**: Adaptive grip when grasping objects
- **Running Capability**: True running at 5.2 mph (with flight phase) [2]
- **Improved Manipulation**: Demonstration of delicate tasks like picking up eggs, folding shirts

---

## AI Approach

Tesla Optimus AI is based on **End-to-End neural network** approach validated in FSD (Full Self-Driving). [5]

### End-to-End Architecture

```
[Camera Input] → [Single Neural Network] → [Motor Control Output]
     ↑              ↑              ↓
 Raw Pixels    Learned Repr.    Steering/Actions
```

- **Modular vs End-to-End**: Traditional robots design perception-planning-control modules separately. Tesla has a single neural network handle everything
- **FSD Technology Transfer**: Experience of replacing 300,000 lines of C++ code with neural networks in FSD v12 applied to Optimus [5]
- **Neural World Simulator**: Both FSD and Optimus learn and verify in the same "neural world simulator" [6]

### Vision-Centric Approach

- **No LiDAR Used**: Only camera-based perception system (consistent with Tesla philosophy)
- **Bot Brain**: Single Tesla SoC handles all computation
- **Foundation Model**: "Foundation Model Architecture" that handles various tasks with a single model

### Data Advantage

- Collecting actual work data at Tesla factories
- Know-how from billions of miles of real-world data accumulated from FSD
- Transfer learning between simulation and real environments

---

## Deployment Status

### Current State (As of January 2026)

| Period | Milestone | Status |
|--------|-----------|--------|
| 2024 | Started internal test deployment at Tesla factories | Completed |
| 2025 | Gen 3 prototype revealed, factory pilot expansion | In progress |
| 2026 Q1 | Gen 3 production-intent prototype reveal expected | Scheduled |
| 2026 | Target deployment of thousands, limited commercial sales start | Goal |

*Note: Whether 2025 target production volume (5,000-10,000 units) was achieved is not officially confirmed [7]*

### Production Infrastructure (Per Announcements)

- **Giga Texas**: Optimus dedicated production line preparation (Tesla announcement)
- **Fremont Factory**: Target 1 million units annually (long-term plan)
- **Future Plans**: Target facilities capable of producing 10 million units annually by 2027 [3]

### Initial Application Areas

1. **Inside Tesla Factories**: Replacing repetitive, dangerous tasks
2. **General Manufacturing**: Assembly, logistics, inspection work
3. **Home Use**: Long-term goal of supporting household chores

---

## Competitive Comparison

*Prices are estimates; actual commercial prices may differ*

| Item | Tesla Optimus | Boston Dynamics Atlas | Figure 01/02 | Agility Digit |
|------|---------------|----------------------|--------------|---------------|
| **Philosophy** | Mass production, practicality | Research, dynamic agility | Workplace automation | Logistics specialized |
| **Drive** | Electric actuators | Electric (formerly hydraulic) | Electric | Electric |
| **Weight** | 57kg | ~80kg (est.) | ~60kg (est.) | ~65kg |
| **Price** | $20-30K (target) | $140-150K (est.) | $150-200K (est.) | ~$250K (est.) |
| **Commercialization** | 2026 start (target) | 2026 Hyundai deployment | Pilot in progress | Pilot in progress |
| **Strength** | Price, production scale | Dynamic motion capability | General manipulation | Logistics validation |

*Source: Combined industry analysis [7], [8]*

### Tesla's Differentiators

1. **Price**: 5-10x cheaper than competitors' target price
2. **Production Scale**: Utilizing automotive mass production know-how
3. **AI Technology**: End-to-End neural network validated in FSD
4. **Vertical Integration**: In-house production of batteries, motors, chips, SW

---

## Limitations and Challenges

1. **Dynamic Capabilities**: Insufficient dynamic movements like jumping, spinning compared to Atlas
2. **Actual Deployment Delays**: Uncertainty about achieving 2025 target production
3. **Versatility Validation**: Unverified task performance capability in actual diverse environments
4. **Safety**: Safety regulations and certifications needed for human collaboration

---

## References

### Source Numbers

1. [Tesla Robot Price in 2026](https://standardbots.com/blog/tesla-robot) - Standard Bots comprehensive analysis
2. [Tesla Optimus Gen 3 Analysis](https://www.notateslaapp.com/news/3281/teslas-robotic-moonshot-optimus-gen-3) - Gen 3 technical analysis
3. [Tesla Eyes $20K Price Target](https://www.notateslaapp.com/news/3314/tesla-eyes-20k-price-target-for-optimus-extremely-fast-production-ramp) - Production and price plans
4. [Tesla Shifts to AI](https://carboncredits.com/tesla-shifts-from-evs-to-ai-musk-says-robots-will-be-80-of-company-value/) - Musk quote
5. [Tesla's End-to-End Deep Learning](https://www.thinkautonomous.ai/blog/tesla-end-to-end-deep-learning/) - End-to-End architecture analysis
6. [Tesla AI Chief Details Unified World Simulator](https://www.humanoidsdaily.com/news/tesla-ai-chief-details-unified-world-simulator-for-fsd-and-optimus) - FSD-Optimus integrated simulator
7. [Boston Dynamics Atlas vs Tesla Optimus](https://briandcolwell.com/boston-dynamics-atlas-vs-teslas-optimus-comparing-modern-humanoid-robots/) - Major humanoid comparison
8. [Humanoid Robots Comparison](https://xpert.digital/en/robot-comparison/) - Industry comparison analysis

### Official Materials

- [Tesla AI & Robotics](https://www.tesla.com/AI) - Tesla official AI page
- [Tesla AI Day Video](https://www.youtube.com/watch?v=j0z4FweCy4M) - Optimus announcement video

---

## See Also

- [Hardware List](../index)
- [Tesla](../../companies/tesla)
- [Boston Dynamics Atlas](atlas)
- [Figure 01](figure-01)
- [End-to-End Learning](../../fundamentals/end-to-end)
