---
title: Tesla
description: Tesla's Optimus Humanoid Robot Project
tags: [tesla, optimus, humanoid, teleoperation]
category: companies

# Authorship
createdBy:
  name: Jong Hyun Park
  email: jhpark@sudormrf.run
lastEditedBy:
  name: Jong Hyun Park
  email: jhpark@sudormrf.run
lastEditedAt: 2026-01-26
---

## Overview

Tesla announced the Optimus (Tesla Bot) humanoid robot at AI Day 2021. Leveraging their AI and hardware expertise from automotive manufacturing and autonomous driving, Tesla's core strategy centers on price competitiveness through large-scale in-house production.

| Item | Details |
|------|---------|
| Headquarters | Austin, Texas |
| Founded | 2003 (Robotics: 2021) |
| CEO | Elon Musk |
| Robot | Optimus (Gen 2, Gen 3) |

---

## Optimus

### Generational Progress

| Generation | Announcement | Features |
|------------|-------------|----------|
| Bumble-C | Sept 2022 | First prototype (AI Day 2022) |
| Gen 2 | Dec 2023 | 30% faster walking, 10kg lighter, improved hands |
| Gen 3 | May 2024 announced, Jan 2026 mass production | 22 DoF hands, tendon-driven system |

### Specs (Gen 2, per Tesla announcement)

| Item | Specs |
|------|-------|
| Height | ~173cm (5'8") |
| Weight | ~47kg (10kg lighter than Gen 1) |
| DoF | 28 DoF (body) + 11 DoF (per hand) |
| Walking Speed | ~8km/h (target) |
| Hands | 11 DoF, tactile sensors (Gen 3: 22 DoF)

---

## Data Collection Strategy

### Teleoperation

Tesla operates **teleoperation-based data collection** (based on reports):

- Hired 50+ Data Collection Operators (based on reports)
- Using VR headsets + motion capture suits
- Collecting data while performing real work in their own factories
- Transitioning to vision-based learning from 2025

### Imitation Learning

- Learning behaviors by imitating human actions
- Neural network-based approach similar to FSD (Full Self-Driving)
- Evolving toward end-to-end learning

---

## Production and Deployment

*The following is based on Tesla announcements and reports; subject to change.*

### Internal Deployment (2024-2025)

- Test deployment ongoing in Tesla factories and Palo Alto office
- Performing limited tasks like battery cell moving and sorting
- Hundreds of units produced as of Sept 2024 (for data collection and design testing)

### Announced Roadmap

| Timeline | Announced Plan | Source |
|----------|---------------|--------|
| 2025 | 5,000-10,000 unit production target | Tesla announcement |
| Jan 2026 | Gen 3 mass production begins (Fremont) | Tesla announcement |
| Late 2026 | External sales expected to begin | Elon Musk announcement |
| Long-term | Target price under $20,000 (at scale) | Elon Musk statement |

---

## Differentiators

### Vertical Integration

- In-house AI chips (Dojo, FSD chip)
- Proprietary battery technology
- In-house manufacturing capability

### Economies of Scale

- Leveraging existing automotive manufacturing infrastructure
- Cost reduction through mass production
- Own factories as first customers (dogfooding)

---

## References

- [Tesla AI - Optimus](https://www.tesla.com/AI)
- [Wikipedia - Optimus (robot)](https://en.wikipedia.org/wiki/Optimus_(robot))
- [The Robot Report - Tesla Optimus](https://www.therobotreport.com/tag/tesla-optimus/)

---

## See Also

- [Company List](./)
- [Teleoperation Methods](../essays/insights/teleoperation)
- [Humanoid Design](../essays/insights/humanoid-design)
