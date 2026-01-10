---
title: Apptronik Apollo
description: Apptronik's general-purpose humanoid robot - Safety-first collaborative robot inheriting NASA Valkyrie technology lineage
tags:
  - apptronik
  - apollo
  - humanoid
  - nasa
  - valkyrie
  - cobot
  - mercedes-benz
  - force-control
created: 2024-01-01
updated: 2026-01-09
category: hardware
---

# Apptronik Apollo

> Home > Hardware > Humanoids > Apollo

<!-- Image pending: ![Apollo](../../assets/hardware/humanoids/apollo.png) -->

---

## Overview

Apptronik Apollo is a general-purpose humanoid robot developed by Apptronik, headquartered in Austin, Texas. The company was founded in 2016 as a spinoff from UT Austin's Human Centered Robotics Lab by a team that participated in developing NASA's Valkyrie robot. The core philosophy is **human-centered safe collaborative robotics**. The biggest differentiators are safe human-robot collaboration through Force Control architecture and the **target price of under $50K**.

| Item | Spec |
|------|------|
| Manufacturer | Apptronik (Austin, Texas) |
| Height | 5'8" (173cm) |
| Weight | 160 lbs (72.6kg) |
| Payload | 55 lbs (25kg) |
| Battery | 4 hours (hot-swappable) |
| Uptime | 22 hours/day (with battery swap) |
| Target Price | <$50,000 |
| Sensors | Stereo vision, torque sensors, IMU |

---

## Key Significance

The most significant aspect of Apollo is presenting **humanoids as practical industrial collaborative robots (Cobots)**.

### Why is Apollo Important?

1. **NASA Technology Lineage**: The Apptronik founding team participated in developing NASA's Valkyrie (R5) robot for the 2013 DARPA Robotics Challenge. CTO Nick Paine is from the NASA-JSC Valkyrie DRC team, bringing robust robot design experience for extreme environments to Apollo.

2. **Force Control Architecture**: Unlike traditional industrial robots, Apollo detects and responds to external forces in real-time through torque sensors in each joint. This is a key element of Collaborative Robot (Cobot) design, aimed at safe collaboration with humans.

3. **Modular Design**: Apollo is designed modularly to be mountable on legs, wheels, or fixed platforms. This means the configuration can be flexibly changed according to use case.

4. **Economic Accessibility**: Targeting under $50,000 BOM (Bill of Materials) cost, pursuing economically feasible levels for industrial sites compared to existing humanoids ($100K-$250K).

---

## Company Background: Apptronik

### Founding Story

- **2013**: Participated in NASA's Valkyrie robot project for DARPA Robotics Challenge
- **2016**: Spun out from UT Austin Human Centered Robotics Lab to establish Apptronik
- **Founders**: Dr. Nicholas Paine (CTO), Dr. Luis Sentis (Scientific Advisor), and 4 co-founders
- **Mission**: Developing "robots that help humans, not replace them"

### Funding Status

| Period | Amount | Key Investors |
|--------|--------|---------------|
| ~2024 | $28M | Early investment |
| 2025.02 | $350M (Series A Round 1) | B Capital, Capital Factory, Google |
| 2025.03 | +$53M (Series A Additional) | Mercedes-Benz, etc. (Total $403M) |

- Mercedes-Benz invested "low-to-mid double-digit euros (~$10-14M)" in the Series A additional round (Reuters report)
- Google participated in Series A

---

## Design Philosophy

### Human-Centric Design

Apollo was designed on the clear philosophy of "human-centered robotics."

```
[Traditional Non-Collaborative Industrial Robots]
- Precise position control priority
- Ignores external collisions, maintains path
- Generally requires safety cage
- Works in space separated from humans

[Apollo's Force Control]
- Real-time external force detection through torque sensors
- Responds flexibly to collisions
- Reduced safety cage requirements (collaborative robot design)
- Goal: collaboration in same space as humans
```

### Key Design Principles

1. **Safety First**: Safe interaction with humans through Force Control architecture
2. **Human Environment Compatible**: Human-like size (5'8", 160 lbs) to minimize facility modifications
3. **Practicality Focus**: Focus on reliability and task performance rather than flashy movements
4. **LED Face**: Human-friendly interface providing status display and interaction cues

### Proprietary Technology: Linear Electric Actuators

- Proprietary linear electric actuators developed over 13+ generations
- Reduced complexity, cost savings, improved reliability
- Developed safe actuator control system in collaboration with Texas Instruments

---

## Mercedes-Benz Partnership

### 2024.03: Commercial Agreement

Apptronik and Mercedes-Benz announced a **major commercial deployment partnership** for Apollo.

| Item | Content |
|------|---------|
| Announcement Date | March 15, 2024 |
| Significance | Apptronik major commercial partnership, Mercedes-Benz humanoid pilot |
| Test Locations | Berlin-Marienfelde Digital Factory Campus, Hungary factory |

### Application Areas

1. **Parts Delivery**: Transporting parts to assembly lines
2. **Kitting Work**: Carrying parts boxes for assembly
3. **Quality Inspection**: Performing parts inspection

### 2025.03: Mercedes-Benz Investment and Expansion

- Mercedes-Benz directly invested in Apptronik Series A (~$10-14M)
- Production Director Joerg Burzer: "Planning to expand deployment to other factories"
- One of the **early large-scale pilots** where humanoids actually collaborate with human workers in automotive production

---

## Industrial Application Areas

### Primary Target: Manufacturing and Logistics

| Application Area | Task Examples |
|------------------|---------------|
| Automotive Manufacturing | Parts transport, assembly kit delivery, quality inspection |
| Logistics/Warehouse | Tote carrying, picking, palletizing |
| Electronics Manufacturing | Delicate parts assembly, inspection |

### Secondary Target: Service and Care

- **Hospitality**: Hotel, restaurant service support
- **Healthcare**: Hospital logistics, patient assistance
- **Elderly Care**: Long-term goal of elderly care support

CEO Jeff Cardenas: "We've reached the point where the economics work. Factories and warehouses are the first step with pilot funding, and production scale-up will lower prices further."

---

## Competitive Comparison

| Item | Apptronik Apollo | Tesla Optimus | Figure 02 | Agility Digit |
|------|------------------|---------------|-----------|---------------|
| **Philosophy** | Safe collaboration, Force Control | Mass production, End-to-End AI | General manipulation | Logistics specialized |
| **Height** | 173cm | 173cm | ~175cm | ~175cm |
| **Weight** | 72.6kg | 57kg | ~60kg | ~65kg |
| **Payload** | 25kg | 20kg | 20kg | 16kg |
| **Target Price** | <$50K | $20-30K | $100K+ | ~$250K |
| **Battery** | 4 hours (hot-swap) | 8 hours | ~5 hours | ~4 hours |
| **Strength** | Safety, NASA lineage | Price, production scale | Hand dexterity | Logistics validation |

### Apollo's Differentiators

1. **Force Control**: Torque sensor-based safe collaboration design
2. **Payload**: 25kg, higher than major competitor humanoids (Optimus 20kg, Digit 16kg)
3. **Hot-Swap Battery**: Minimize charging wait time with battery swaps (22 hours/day uptime possible)
4. **Modular Design**: Various configurations available (legs/wheels/fixed)
5. **NASA Technology**: Proven technology from Valkyrie robot development experience

---

## Limitations and Challenges

1. **Dynamic Capabilities**: Lacking dynamic movement demonstrations like running, jumping compared to Atlas, Optimus
2. **AI Capabilities**: Google participated in Series A, but no proprietary VLA model
3. **Production Scale**: 2026 mass production plan announced with Jabil, actual production verification needed
4. **Market Competition**: May be disadvantaged in price competition with Tesla ($20-30K target)

---

## Timeline

| Period | Event |
|--------|-------|
| 2013 | NASA Valkyrie project participation (DARPA Robotics Challenge) |
| 2016 | Apptronik spinoff from UT Austin |
| 2022 | NASA humanoid commercialization partnership agreement |
| 2023.08 | Apollo humanoid unveiled |
| 2024.03 | Mercedes-Benz commercial pilot contract signed |
| 2025.01 | Apollo work demonstration at CES 2025 |
| 2025.02-03 | Series A $403M close ($350M + additional $53M, Mercedes-Benz, Google participation) |
| 2026 | Target mass production start with Jabil |

---

## References

### Official Materials
- [Apptronik Official Site](https://apptronik.com/) - Company and product information
- [Apollo Product Page](https://apptronik.com/apollo) - Apollo detailed specs
- [Apptronik About Us](https://apptronik.com/about-us) - Company history and team

### Mercedes-Benz Partnership
- [Apptronik-Mercedes Partnership Announcement](https://apptronik.com/news-collection/apptronik-and-mercedes-benz-enter-commercial-agreement) - Official press release
- [Reuters: Mercedes-Benz Apptronik Investment](https://www.reuters.com/technology/mercedes-benz-takes-stake-humanoid-robot-maker-apptronik-2025-03-04/) - 2025 investment report

### Technical Analysis
- [IEEE Spectrum: Apptronik Apollo](https://spectrum.ieee.org/humanoid-robot-apptronik-apollo) - Technical detailed analysis
- [TI-Apptronik Collaboration](https://www.ti.com/about-ti/company/case-study/apptronik.html) - Actuator safety system
- [Apollo Spec Comparison](https://qviro.com/product/apptronik/apollo/specifications) - Detailed spec data

### News and Analysis
- [TechCrunch: Apollo at CES 2025](https://techcrunch.com/2025/01/09/apptroniks-apollo-humanoid-robot-gets-to-work-at-ces-2025/) - CES 2025 demonstration
- [TechCrunch: $350M Series A](https://techcrunch.com/2025/02/13/apptronik-raises-350m-to-build-humanoid-robots-with-help-from-google/) - 2025.02 Series A funding
- [Apptronik $403M Series A Close](https://apptronik.com/news-collection/apptronik-closes-additional-series-a-funding) - 2025.03 additional round
- [Robot Report: Apollo Unveiling](https://www.therobotreport.com/apptronik-unveils-apollo-humanoid-robot/) - Initial unveiling analysis

### NASA Connection
- [NASA-Apptronik Partnership](https://www.iotworldtoday.com/robotics/nasa-apptronik-partner-to-commercialize-humanoid-robots) - NASA collaboration background

---

## See Also

- [Hardware List](../index.md)
- [Tesla Optimus](optimus.md)
- [Figure Humanoid](figure.md)
- [Agility Digit](digit.md)
- [Boston Dynamics Atlas](atlas.md)
