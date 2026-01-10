---
title: Agility Digit
description: Agility Robotics' industrial bipedal humanoid robot
tags: [agility, digit, humanoid, industrial, logistics, amazon, gxo, cassie]
category: hardware
---

# Agility Digit

> Home > Hardware > Humanoids > Digit

<!-- Image pending: ![Digit](../../assets/hardware/humanoids/digit.png) -->

---

## Terminology

| Abbreviation | Definition |
|--------------|------------|
| DoF | Degrees of Freedom |
| AMR | Autonomous Mobile Robot |
| RaaS | Robot-as-a-Service |
| PoC | Proof of Concept |
| VLA | Vision-Language-Action |

---

## Overview

| Item | Content |
|------|---------|
| Manufacturer | Agility Robotics |
| Headquarters | Albany, Oregon / Pittsburgh, Pennsylvania |
| Founded | 2015 (Oregon State University spinoff) |
| Market | Industrial, logistics, warehouse automation |
| Key Partners | Amazon, GXO Logistics |

---

## Key Significance

Agility Robotics' Digit is **one of the first humanoid robots commercially deployed in logistics environments**. In Fall 2025, it demonstrated the industrial practicality of humanoid robots by moving over 100,000 totes at GXO logistics centers [^1]. The key competitive advantage is that it can operate on stairs, narrow corridors, and irregular terrain where wheel-based AMRs cannot go, and can be deployed in existing human-designed facilities without separate infrastructure changes.

> Note: Agility Robotics markets Digit as the "industry's first commercially deployed humanoid" [^2], though this is based on full-time commercial operations in logistics/warehouse sector. Competitors are also conducting various forms of pilot deployments.

---

## Company History: From Oregon State to RoboFab

### Founders and Origins

| Founder | Role | Background |
|---------|------|------------|
| Jonathan Hurst | Chief Robot Officer | Oregon State University Professor, CMU PhD |
| Damion Shelton | Chairman of the Board | CMU PhD, Hurst's classmate |
| Mikhail Jones | VP of Software | Oregon State graduate |

Agility Robotics was spun off from Oregon State University's **Dynamic Robotics Lab** in 2015 [^3]. Founder Jonathan Hurst obtained his robotics PhD from CMU, then researched **the physics of legged locomotion** at OSU and co-founded the OSU Robotics Institute.

### Cassie: Digit's Predecessor

Cassie was Agility's first robot, designed inspired by the leg mechanics of **ostriches and cassowaries**.

| Item | Content |
|------|---------|
| Development Funding | DARPA $1M grant, 16 months [^4] |
| Features | Pure bipedal robot without upper body/cognitive system |
| Record | World's first 5K run completion, 2021, approximately 53 minutes [^5] |
| Use | Sold to universities/research institutions as research platform |

> "We weren't trying to replicate the appearance of animals, but rather replicating the techniques animals use for agile, efficient, and robust locomotion." - Jonathan Hurst [^4]

---

## Digit Version History

| Version | Period | Key Features | Source |
|---------|--------|--------------|--------|
| Digit V1 | 2019 | First humanoid version, upper body/arms added | [^3] |
| Digit V2 | 2020-2021 | Last-mile delivery research collaboration with Ford (reported) | [^3] |
| Digit (Commercial) | 2023 | Logistics-specialized design, improved End Effector | [^10] |
| Digit (Next-gen) | 2024 | Battery expansion, payload increase | [^6] |

---

## Technical Specifications

> Note: Specs below are collected from various sources and may vary by version. All units are standardized to SI (metric) with imperial units noted where needed.

### Physical Specifications

| Item | Spec | Source |
|------|------|--------|
| Height | 175 cm (5'9") | [^7] |
| Weight | 65 kg (143 lbs) | [^7] |
| Walking Speed | 5 km/h | [^7] |
| Payload | 16 kg (35 lbs), Next-gen: 23 kg (50 lbs) | [^6][^7] |
| Price | Approximately $250,000 (pilot program basis, reported) | [^8] |

### Degrees of Freedom (DoF)

| Version | DoF Configuration | Source |
|---------|-------------------|--------|
| Initial | 16 DoF (legs 5x2 + arms 3x2) | [^9] |
| Commercial | 28 DoF | [^7] |
| Latest | 32 DoF (legs 6x2 + arms 7x2 + grippers 1x2 + waist 2 + neck 2) | [^7] |

*DoF configuration varies by version; figures may differ by source*

### Battery and Power

| Item | Spec | Source |
|------|------|--------|
| Battery Type | Custom 1.2kWh Li-Po | [^7] |
| Walking Time | 1.5 hours (initial) → 4 hours (2024 version) | [^6] |
| Standby Time | 3 hours | [^7] |
| Work:Charge Ratio | 4:1 (reported) | [^6] |
| Auto Docking | Supported (added 2024) | [^6] |

### Sensors and Computing

| Item | Content | Source |
|------|---------|--------|
| Navigation | LiDAR | [^7] |
| Depth Sensing | Intel RealSense x 4 | [^7] |
| IMU | MEMS IMU | [^7] |
| Proprioception | Absolute/Incremental encoders | [^7] |
| Computing | Intel i7 dual CPU | [^7] |
| Expansion Bay | Intel NUC / NVIDIA Jetson mountable | [^7] |

### End Effector (Gripper)

Digit adopts a **modular End Effector** approach [^10]:

- **Suction Gripper**: For flat surfaces of plastic totes/boxes
- **MT 2 (Manipulation Tool 2)**: Newly introduced 2024
- Interchangeable design depending on task

> Note: Compared to competitors (Tesla Optimus, Figure 02), **dexterous hand** technology is relatively simple; Agility focuses on logistics-specialized grippers

---

## Amazon Partnership

Amazon invested in Agility Robotics through the **Amazon Industrial Innovation Fund** [^11].

### Deployment Stages

| Stage | Period | Content | Notes |
|-------|--------|---------|-------|
| Phase 1 | 2023-2024 | Pilot program (Sumner, WA, etc.) | Confirmed [^11] |
| Phase 2 | 2025 | Expansion to 10+ logistics centers | Plan, reported [^8] |

### Initial Use Case

**Tote Recycling**: High-repetition task of collecting and moving empty totes after all inventory has been picked [^11]

### Results (Reported)

| Metric | Value | Notes |
|--------|-------|-------|
| Task Success Rate | 98% | After 18 months testing, estimate [^8] |
| Hourly Cost | $10-12 | Compared to human worker $30, estimate [^8] |

*Note: Above figures are from third-party analysis reports, not Agility official announcements*

---

## GXO Deployment: Humanoid Commercialization Case in Logistics

### Deployment Overview

| Item | Content |
|------|---------|
| Location | Flowery Branch, Georgia (Atlanta suburbs) |
| Customer | SPANX omnichannel logistics center |
| Contract | Multi-year RaaS contract |
| Start | Late 2023 PoC → 2024 full deployment |

*Source: [^12]*

### 100K Tote Milestone (Fall 2025)

Digit demonstrated the following by achieving **movement of over 100,000 totes** [^1]:

1. **High-Volume Processing**: Industrial-level throughput
2. **Reliability**: Operation within live fulfillment workflows
3. **ROI Potential**: Direction toward long-term ROI validation

### Tasks Performed

- Picking up/putting down totes from Cobot AMRs
- Loading items onto conveyors
- Stacking containers at various floor positions

### Orchestration

Manages Digit fleet through **Agility Arc** cloud platform, integrated with AMR vendors like MiR, Zebra Robotics [^2].

---

## RoboFab: Humanoid-Dedicated Manufacturing Facility

| Item | Content | Source |
|------|---------|--------|
| Location | Salem, Oregon (about 50km from engineering center) | [^13] |
| Area | Approximately 6,500 m² (70,000 sq ft) | [^13] |
| Opening | Late 2023 | [^13] |
| Maximum Production Capacity | 10,000 units annually (target) | [^13] |
| Employment Plan | 500 people (at max production) | [^14] |

### Production System Features

- Designed so each subassembly completes at the same time
- **Simultaneous Assembly**: Entire robot assembled simultaneously then moves to final test
- **Scalable**: Production increase by replicating each work cell
- High-rate manufacturing possible without line shutdown

### Production Roadmap

| Period | Target |
|--------|--------|
| Year 1 | Hundreds of units (8 per shift) |
| Scale-up | Thousands of units (2026 target) |
| Maximum | 10,000 units annually |

---

## Strategic Partnerships

| Partner | Period | Content | Source |
|---------|--------|---------|--------|
| Amazon | 2023 | Investment and warehouse deployment | [^11] |
| GXO Logistics | 2023-2024 | Logistics sector RaaS contract | [^12] |
| Zion Solutions | 2024.05 | Logistics/supply chain system integration | [^15] |
| Ricoh USA | 2024.09 | Installation, service, customer support | [^15] |
| MiR / Zebra | 2025 | AMR integration | [^2] |

---

## Competitive Positioning

### Strengths

- **Early Commercial Deployment Experience**: Most advanced real operational experience in logistics sector
- **Logistics Specialization**: Focus on industrial rather than general-purpose
- **Production Infrastructure**: Mass production capability through RoboFab

### Challenges

- **Hand Technology**: Simpler gripper compared to competitors (limitations when expanding beyond logistics)
- **AI Capabilities**: Room for advancement in End-to-End neural network approaches
- **Versatility**: Need to verify expandability beyond logistics areas

### Competitor Comparison

| Company | Approach | Status |
|---------|----------|--------|
| Agility | Logistics specialized, gradual expansion | Commercial operations |
| Tesla | General-purpose, mass production target | Pilot stage |
| Figure | High-performance AI (Helix VLA) | Testing |
| 1X | Home/general-purpose | Development |

*Comparison is as of 2025, based on each company's announcements and reports*

---

## Market Outlook

### Labor Shortage Response

The logistics industry faces increasing volumes and persistent labor shortages, driving demand for humanoid automation solutions like Digit [^16].

### 2025-2026 Outlook (Industry Estimates)

> Note: Forecasts below are based on industry analysts and reports; actual results may differ

- **Industrial**: Hundreds to thousands of units expected [^16]
- **Consumer**: Expected in 2-4 years [^16]

---

## References

[^1]: [Digit 100K Tote Achievement Announcement](https://www.agilityrobotics.com/content/digit-moves-over-100k-totes) - Agility Robotics Official
[^2]: [Agility Robotics Official Solutions Page](https://www.agilityrobotics.com/solution)
[^3]: [Contrary Research: Agility Robotics Analysis](https://research.contrary.com/company/agility-robotics)
[^4]: [Oregon State: Cassie Steps into the Limelight](https://engineering.oregonstate.edu/all-stories/cassie-steps-limelight)
[^5]: [Oregon State Cassie 5K Achievement](https://news.oregonstate.edu/news/bipedal-robot-developed-oregon-state-makes-history-learning-run-completing-5k)
[^6]: [Agility Robotics New Innovations Announcement](https://www.agilityrobotics.com/content/agility-robotics-announces-new-innovations-for-market-leading-humanoid-robot-digit)
[^7]: [Livium Digit Specifications](https://livium.com/humanoids/digit-v2) / [QVIRO Digit Specifications](https://qviro.com/product/agility-robotics/digit/specifications)
[^8]: [Scaling Deep: Agility Robotics Analysis](https://www.scalingdeep.tech/p/how-agility-robotics-convinced-amazon) - Third-party analysis
[^9]: [Robots Guide: Digit](https://robotsguide.com/robots/digit)
[^10]: [Agility Robotics Next Generation Digit Announcement](https://agilityrobotics.com/content/agility-robotics-launches-next-generation-digit)
[^11]: [Amazon Partnership Announcement](https://www.aboutamazon.com/news/operations/amazon-introduces-new-robotics-solutions)
[^12]: [GXO Multi-year Contract](https://gxo.com/news_article/gxo-signs-industry-first-multi-year-agreement-with-agility-robotics/)
[^13]: [RoboFab Official Page](https://www.agilityrobotics.com/about/robofab) / [RoboFab Opening Announcement](https://www.agilityrobotics.com/content/opening-robofab-worlds-first-factory-for-humanoid-robots)
[^14]: [OPB: Corvallis robotics company Salem factory](https://www.opb.org/article/2023/09/24/oregon-state-university-robotics-digit-technology-education-business/)
[^15]: [Contrary Research: Agility Robotics Partnership Analysis](https://research.contrary.com/company/agility-robotics) - Third-party analysis
[^16]: [Humanoid Robots 2025-2026 Outlook](https://www.winssolutions.org/humanoid-robots-2025-2026-reality-hype/) - Industry analysis

---

## See Also

- [Hardware List](../index.md)
- [Figure Humanoid](figure.md)
- [Tesla Optimus](optimus.md)
