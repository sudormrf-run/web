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
lastEditedAt: 2026-01-15
---

## Overview

Tesla announced the Optimus (Tesla Bot) humanoid robot at AI Day 2021. Leveraging their AI and hardware expertise from automotive manufacturing and autonomous driving, Tesla's core strategy centers on price competitiveness through large-scale in-house production.

| Item | Details |
|------|---------|
| Headquarters | Austin, Texas |
| Founded | 2003 (Robotics: 2021) |
| CEO | Elon Musk |
| Robot | Optimus (Gen 1, Gen 2) |

---

## Optimus

### Generational Progress

| Generation | Announcement | Features |
|------------|-------------|----------|
| Bumblebee | Sept 2022 | First prototype |
| Gen 1 | Dec 2023 | Improved walking |
| Gen 2 | Dec 2024 | Increased DoF, improved hands |

### Specs (Gen 2, per Tesla announcement)

| Item | Specs |
|------|-------|
| Height | ~173cm |
| Weight | ~57kg |
| DoF | 28 DoF (body) + 22 DoF (hands) |
| Walking Speed | ~8km/h |
| Fingers | 11 DoF, tactile sensors |

---

## Data Collection Strategy

### Teleoperation

Tesla operates a large-scale **teleoperation team** (based on reports):

- Operating a teleoperator team of hundreds
- Using VR headsets + motion capture suits
- Collecting data while performing real work in their own factories

### Imitation Learning

- Learning behaviors by imitating human actions
- Neural network-based approach similar to FSD (Full Self-Driving)
- Evolving toward end-to-end learning

---

## Production and Deployment

*The following is based on Tesla announcements and reports; subject to change.*

### Internal Deployment

- Test deployment ongoing in Tesla factories
- Performing limited tasks like battery cell moving and sorting

### Announced Roadmap

| Timeline | Announced Plan | Source |
|----------|---------------|--------|
| 2025 | Target for external sales | Elon Musk announcement |
| Long-term | Target price $20,000-30,000 | Tesla AI Day |

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

- [Company List](index)
- [Teleoperation Methods](../solutions/teleoperation)
- [Humanoid Design](../deep-dives/humanoid-design)
