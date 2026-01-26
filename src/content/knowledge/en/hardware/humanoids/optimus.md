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

Tesla Optimus is a general-purpose humanoid robot under development by Tesla. First announced on August 19, 2021 at AI Day (with an actor in a robot suit, no actual prototype), it applies End-to-End neural network technology accumulated from Tesla's FSD (Full Self-Driving) to robotics. The biggest differentiator is the **low-price strategy through mass production**, targeting $20K-$30K compared to existing humanoid robots that cost $100K-$250K.

### Confirmed Specs (Gen 2 Basis)

| Item | Spec | Notes |
|------|------|-------|
| Manufacturer | Tesla | - |
| Height | 5'8" (173cm) ~ 5'11" (180cm) | Varies by source |
| Weight | 104 lbs (47kg) | 10kg lighter than Gen 1, December 2023 |
| Total DoF | 28 (body) + 11 (each hand) | 40+ electromechanical actuators total |
| Hand DoF | 11 | Gen 2 (December 2023) |
| Lifting Capacity | 45 lbs (20kg, carry) | Design target |
| Walking Speed | ~5 mph (8 km/h) | Gen 2 basis |
| Battery | 2.3 kWh (52V) | ~8 hours operation, 100W idle / 500W max walking |
| Sensors | 8 autopilot cameras, IMU, force/torque sensors, foot pressure sensors | Tesla FSD-based vision system |

### Enhanced Hand Specs (October 2024 "We, Robot" Event Demo)

| Item | Spec | Notes |
|------|------|-------|
| Hand DoF | 22 (+ wrist/forearm 3) | Tendon drive system |
| Hand Actuators | 17 linear actuators | Moved to forearm, reducing hand size |
| Running Speed | ~6-8 mph (~10-13 km/h) | December 2, 2025 demo video (unofficial, flight phase confirmed) |

*Note: 22 DoF hands first demonstrated at October 2024 We, Robot event. Gen 3 (V3) mass production officially started January 21, 2026*

### Target Specs (Based on Tesla Announcements)

| Item | Target Value | Notes |
|------|--------------|-------|
| Target Price | $20,000 - $30,000 | Elon Musk announcement at We, Robot 2024, at mass production [3] |
| Target COGS | $20,000 | Tesla's cost of goods sold target at scale |
| General Sales | 2027 onwards | After initial factory/enterprise deployment |

---

## Key Significance

The most significant aspect of Tesla Optimus is **demonstrating the possibility of mass production of humanoid robots**.

### Why is Mass Production Important?

1. **Price Revolution**: Existing humanoid robots (Atlas $140K+ estimated, Figure 01 $150K+ estimated) were expensive equipment usable only for special purposes. Tesla targets $20K-$30K price range leveraging automotive production know-how. [3]

2. **Vertical Integration**: Tesla is almost the only company that can produce batteries, electric motors, AI chips, and software all in-house. This vertical integration is the key to cost reduction.

3. **Production Scale Targets** (Based on Tesla announcements): [3]
   - 2025: Target 5,000-10,000 units → Actual: hundreds of units (less than 1/10 of target)
   - 2026: 50,000-100,000 units target, Gen 3 line at Fremont
   - Long-term: Musk's vision of 1 million → 10 million units/year (Giga Texas facility planned)

4. **Economic Impact**: Elon Musk forecasts that Optimus will account for 80% of Tesla's corporate value, even mentioning the possibility of Universal Basic Income (UBI) through labor replacement. [4]

---

## Generation Comparison

| Version | Release Date | Key Features | Hand DoF | Status |
|---------|--------------|--------------|----------|--------|
| **Bumble-C** | Sept 2022 (AI Day) | First untethered walk, waving demo, some off-the-shelf parts | - | Completed |
| **Optimus (Gen 1)** | Sept 2022 (AI Day) | Initial prototype, Tesla-designed parts, 2.3kWh battery | 11 | Completed |
| **Gen 2** | Dec 13, 2023 | 30% faster walking (8 km/h), 10kg lighter (47kg), 2-DoF neck, egg handling demo | 11 | Completed |
| **22 DoF Hands** | Oct 2024 (We, Robot) | 22 DoF tendon-driven hands, bartending/object handoff demo (teleoperated) | 22 | Demonstrated |
| **Gen 3 (V3)** | Jan 21, 2026 | Mass production started, 22 DoF hands integrated, running capable, 10-12 km/h walking | 22 | In Production |

*Source: Tesla AI Day announcements, We, Robot event, Q3 2025 earnings call [2]*

### 2024-2025 Major Improvements

- **2x Hand Dexterity Increase**: Expanded from 11 DoF to 22 DoF (demonstrated at Oct 2024 We, Robot event)
- **Tendon Drive System**: Actuators moved to forearm, achieving movements close to human hand (27 DoF)
- **Flexible Glove**: Adaptive grip when grasping objects
- **Running Capability**: Dec 2, 2025 video showed ~6-8 mph (10-13 km/h) running, flight phase confirmed
- **Improved Manipulation**: Demonstration of delicate tasks like picking up eggs, pouring drinks, object handoff, playing catch
- **Teleoperation**: We, Robot event bartending, conversations used remote control (Bloomberg report, Tesla engineer confirmed)

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

| Date | Milestone | Status |
|------|-----------|--------|
| Aug 19, 2021 | Optimus concept announced at AI Day (actor in robot suit) | Completed |
| Sept 2022 | First prototypes unveiled at AI Day 2022 (Bumble-C, Optimus Gen 1) | Completed |
| Dec 13, 2023 | Gen 2 revealed, 30% faster walking, egg handling demo | Completed |
| July 2024 | Gen 2 publicly exhibited at Shanghai World AI Conference | Completed |
| Oct 10, 2024 | "We, Robot" event: 22 DoF hands demo, 36+ units displayed, teleoperation used | Completed |
| 2025 | Pilot deployment at Tesla factories (hundreds of units), December running demo released | Completed |
| Jan 21, 2026 | Gen 3 (V3) mass production started at Fremont factory (Tesla official) | In Progress |
| End of 2026 | Target thousands of units deployed, 1 million/year production line | Goal |
| 2027 | General sales start, Giga Texas 10 million/year facility planned | Goal |

*Note: 2025 target production (5,000-10,000 units) was not achieved. As of July 2025, actual production was only hundreds of units, less than 1/10 of target.*

### Production Infrastructure (Per Announcements)

- **Fremont Factory**: Pilot line operational, Gen 3 production line expansion in 2026, 1 million units/year target
- **Giga Texas**: Construction started November 2025, 10 million units/year production facility planned (confirmed via drone footage)
- **Long-term Vision**: At Tesla 2025 Shareholder Meeting, Musk announced "fastest production ramp of any large complex manufactured product ever"

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
| **Weight** | ~47kg (Gen 2) | ~80kg (est.) | ~60kg (est.) | ~65kg |
| **Price** | $20-30K (target) | Not for sale (research) | $100K+ (est.) | ~$250K (est.) |
| **Commercialization** | 2026 production started | 2026 Hyundai deployment | Pilot in progress | Pilot in progress |
| **Strength** | Price, production scale | Dynamic motion capability | General manipulation | Logistics validation |

*Source: Combined industry analysis [7], [8]*

### Tesla's Differentiators

1. **Price**: 5-10x cheaper than competitors' target price
2. **Production Scale**: Utilizing automotive mass production know-how
3. **AI Technology**: End-to-End neural network validated in FSD
4. **Vertical Integration**: In-house production of batteries, motors, chips, SW

---

## Limitations and Challenges

1. **Dynamic Capabilities**: Insufficient dynamic movements like jumping, spinning compared to Atlas (improving with December 2025 running demo)
2. **Actual Deployment Delays**: 2025 target production (5,000-10,000 units) not achieved (actual: hundreds of units)
3. **Autonomy Validation**: We, Robot event teleoperation controversy, fully autonomous task capability unverified
4. **Versatility Validation**: Unverified task performance capability in actual diverse environments
5. **Safety**: Safety regulations and certifications needed for human collaboration

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
- [Figure Humanoid](figure)
