---
title: PSYONIC Ability Hand
description: Advanced bionic hand with multi-touch sensing and haptic feedback
tags: [psyonic, ability-hand, bionic, prosthetic, haptic-feedback, touch-sensing, robotics]
category: hardware
last_updated: 2025-01

# Authorship
createdBy:
  name: Jong Hyun Park
  email: jhpark@sudormrf.run
lastEditedBy:
  name: Jong Hyun Park
  email: jhpark@sudormrf.run
lastEditedAt: 2026-01-15
---

# PSYONIC Ability Hand

<!--
  Image placeholder
  TODO: Add assets/hardware/hands/ability-hand.png file before deployment
  Recommended: Use PSYONIC official product image or CC-licensed image
  If no image available, comment out or delete the line below
-->
<!-- Image pending: ![Ability Hand](../../assets/hardware/hands/ability-hand.png) -->

---

## Overview

| Item | Spec |
|------|------|
| Manufacturer | PSYONIC (HQ: San Diego, California; relocated from Champaign, IL in 2022) |
| Founder | Aadeel Akhtar, PhD (PhD Neuroscience, MS Electrical & Computer Engineering - UIUC) |
| Year Founded | 2015 (founded at University of Illinois at Urbana-Champaign) |
| Weight | ~490g (approximately 20% lighter than average adult hand) |
| Grip Strength | 66N (14.8 lbs) |
| Max Axial Lifting Load | 50 lbs recommended, 79 lbs max |
| Finger Closure Time | 0.2 seconds (200ms, 2x+ faster than competitors) |
| Battery | 7.4V 2200mAh LiPo, 6-8 hours depending on usage |
| Charging | USB-C, approximately 1 hour for full charge |
| IP Rating | IP64 (complete dust protection, splash resistant - not submersible) |
| Grip Patterns | 32 (19 pre-defined, additional customization available) |
| Construction | Carbon fiber case + 6 brushless DC motors |
| Consumer Price | $15,500 (manufacturing cost ~$1,800) |

---

## Key Significance

**The first commercial bionic hand with multi-touch sensing capability** [^1][^2]

PSYONIC Ability Hand is a prosthetic that commercialized multi-touch sensing functionality [^1][^2], an innovative product that allows users to actually "feel" when grasping objects. While traditional prosthetics only provided mechanical movement, Ability Hand delivers tactile information to users through pressure sensors on fingertips and haptic vibration feedback.

> PSYONIC's official website and IEEE Spectrum introduce it as "world's first touch-sensing bionic hand".

### Founding Background

Founder Dr. Aadeel Akhtar was inspired by an experience at age 7 when he met a girl in Pakistan who had lost her leg and was using a tree branch as a crutch. [^3] This experience led him to study neural engineering and develop a mission to create affordable, advanced prosthetics accessible to everyone.

In the summer of 2014, Akhtar traveled to Quito, Ecuador with the Range of Motion Project (ROMP) as a graduate student to test the first 3D-printed prosthetic hand prototype. When fitted to Juan Suquillo, who lost his hand approximately 35 years earlier in the Ecuador-Peru war, he was able to pinch his thumb and index finger together for the first time, saying "part of me has returned."

---

## Technical Innovations

### 1. Multi-Touch Sensing System

- **Pressure Sensors**: Built-in pressure sensors in thumb, index, and pinky fingers
- **Haptic Feedback**: Conveys pressure information through vibration upon object contact
- **Contact Reflex**: Automatic stop upon detecting object contact to prevent damage to delicate objects

### 2. EMG + AI Control System

- **EMG Sensors**: Detect electrical signals from residual arm muscles
- **AI Processing**: Analyzes electromyogram signals and converts them to natural hand movements
- **Socket Sensors**: 2 sensors detect, amplify, and convert muscle movements to electrical signals

### 3. Durability Design

- **Carbon Fiber Case**: Lightweight and sturdy structure
- **Rubber/Silicone Fingers**: Flexibly responds to impact, prevents damage
- **IP64 Waterproof**: Protection from everyday splashes and dust

### 4. Finger Actuation

- **5-Finger Independent Flexion/Extension**: All fingers move individually
- **Powered Thumb Rotation**: Electric thumb rotation + manual adjustment available
- **6 Motors**: Precise multi-axis control

### 5. Connectivity

- **Bluetooth App**: Grip settings and control via iOS/Android app
- **OTA Updates**: Wireless software updates
- **Open API**: Full system integration support for research

---

## Pricing and Insurance

> **Note**: Prices and insurance information below are as of 2024, and actual costs and insurance coverage may vary depending on individual circumstances, insurance plans, and regions. Contact PSYONIC or your insurance company directly for specific information.

| Category | Price (as of 2024) |
|----------|-------------------|
| Consumer Price | $15,500 |
| Manufacturing Cost | ~$1,800 |
| Expected After Insurance | $10,000 - $20,000 (varies by insurance terms) |
| Competitor Premium Prosthetics | $50,000 - $150,000 |

### Insurance Coverage (US)

According to PSYONIC's official announcement [^1]:
- **Medicare**: Eligible for Medicare coverage as an FDA-approved medical device
- **Private Insurance**: Covered by most US health insurance plans

> **Note**: Insurance coverage and out-of-pocket costs vary depending on individual plan's DME (Durable Medical Equipment) coverage terms.

---

## Robotics Research Applications

PSYONIC Ability Hand is actively utilized not only as a prosthetic but also in robotics research.

> "The same hand that is fitted on humans is also fitted on robots" - Aadeel Akhtar [^4]

### NASA

- **Valkyrie Humanoid Robot**: Space-relevant manipulation research (e.g., ISS-style console controls)
- Research on hands for humanoid astronaut robots

### Meta

- **Robot Learning Research**: Utilizing human-like form factor and rich hardware capabilities
- Used as a **dexterous manipulation** research platform

> "Ability Hand's human-like form factor and robust, feature-rich hardware provides exciting and unique potential as a platform for robot learning and dexterous manipulation research." - Mustafa Mukadam, PhD (Meta Research Scientist) [^5]

### Apptronik

- **Apollo Humanoid Robot**: Ability Hand integration demonstrated at 2023 IEEE Robotics and Automation Conference; Apollo officially launched November 2023
- Apollo specs: Height 1.7m (5'9"), Weight 73kg (160lbs), 25kg (55lbs) lifting capacity, ~4 hours operation on swappable battery
- Exploring Ability Hand utilization in humanoid robot production lines
- Apptronik history: Founded from UT Austin Human Centered Robotics Lab after NASA DARPA Robotics Challenge collaboration

### Research Product Release

PSYONIC has released Ability Hand separately for robotics researchers worldwide. [^5]

- **Open API**: Full system integration possible (BLE, I2C, UART, RS485 communication protocols)
- **Fast Speed**: 200ms closure time
- **Multi-Touch**: 30 touch sensor values streaming, suitable for tactile feedback research
- **Durability**: Suitable for repeated testing in research environments
- **Research Institutions**: Currently used at Georgia Tech, UIUC, Northwestern, ETH Zurich, Shirley Ryan Ability Lab, and more

---

## Company Status

> **Note**: Business information below is based on publicly available materials as of June 2024, and latest information may have changed.

### Shark Tank Investment (February 2024) [^6]

- **Original Ask**: $1,000,000 (2% equity, $50M valuation)
- **Final Investment**: $1,000,000 (6% equity)
- **Investors**: Lori Greiner, Daymond John, Kevin O'Leary (3-shark joint deal)
- **Valuation Structure**: Combination of common and advisory shares, setting valuation at $50M [^6]
- **Valuation as of June 2024**: ~$65M

### Growth Status (as of 2024)

- **Employees**: ~20-37 (engineers, physicians, social workers, public health experts)
- **Facility**: 22,000 sq.ft. in San Diego (5x larger than previous facility)
- **Production**: 500 units per year (2024, up from 100; targeting 1,000 annually)
- **Funding**: $4.1M equity crowdfunding in January 2024 (StartEngine)

### Future Development Plans

- **Direct Neural Stimulation**: Collaboration with Navy Hospital + UCSD for bone and nerve integration research
  - Goal to implement sensation like feeling from actual hand through direct neural stimulation rather than vibration feedback
- **Additional Products**: Wrist, elbow, knee, and ankle in development

---

## Awards and Recognition

- **MIT Technology Review 35 Innovators Under 35** (2021) - Aadeel Akhtar [^3]
- **Newsweek "America's 50 Greatest Disruptors"** - Visionaries changing the world

---

## See Also

- [Hardware List](./)
- [Inspire Hand](inspire)

---

## References

[^1]: [PSYONIC Official Website](https://www.psyonic.io/)
[^2]: [IEEE Spectrum - Bionic Hand Gives Amputees Sense of Touch](https://spectrum.ieee.org/bionic-hand-simulates-touch)
[^3]: [MIT Technology Review - Aadeel Akhtar](https://www.technologyreview.com/innovator/aadeel-akhtar/)
[^4]: [Interesting Engineering - US firm's bionic hand with multi-touch sensation](https://interestingengineering.com/innovation/bionic-hand-offers-32-grips-sensations)
[^5]: [PSYONIC - Ability Hand for Robots](https://www.psyonic.io/robots)
[^6]: [CNBC - How prosthetics startup Psyonic landed $1 million Shark Tank offer](https://www.cnbc.com/2024/02/28/shark-tank-how-prosthetics-startup-psyonic-landed-1-million-offer.html)

---

*Information in this document was originally written as of January 2025 and fact-checked/updated in January 2026. Please refer to the official website for the latest information.*
