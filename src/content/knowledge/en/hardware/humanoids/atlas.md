---
title: Boston Dynamics Atlas
description: Advanced humanoid robot from Boston Dynamics - from DARPA project to commercial deployment
tags: [atlas, boston-dynamics, humanoid, hyundai, darpa]
category: hardware

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

Atlas is an advanced humanoid robot developed by Boston Dynamics. Originally created for the DARPA Robotics Challenge in 2013, Atlas has evolved through multiple generations and transitioned from hydraulic to fully electric systems in 2024.

<!-- Image pending: ![Atlas](/assets/hardware/humanoids/atlas.png) -->

| Item | Details |
|------|---------|
| Company | Boston Dynamics (Hyundai subsidiary) |
| First Unveiled | July 11, 2013 |
| Current Version | Electric Atlas (2024) |
| Status | Commercial deployment (2025-2026) |

---

## Development History

### Timeline

| Year | Milestone |
|------|-----------|
| 2011 | Fukushima disaster highlights need for disaster-response robots |
| 2012 | DARPA selects Boston Dynamics for development |
| 2013.07 | First Atlas unveiled (hydraulic, 1.88m, 149kg) |
| 2015.06 | DARPA Robotics Challenge Finals - 7 teams compete with Atlas |
| 2016.02 | Next Generation Atlas unveiled (1.75m, 82kg) |
| 2024.04 | Hydraulic Atlas retired, Electric Atlas announced |
| 2025 | Hyundai factory pilot begins |
| 2026.01 | Commercial version unveiled at CES |

---

## Specifications Comparison

| Item | Original Atlas (2013) | Next-Gen Atlas (2016) | Electric Atlas (2024) |
|------|----------------------|----------------------|-----------------------|
| Height | 1.88m (6'2") | 1.75m (5'9") | 1.9m (6.2 ft) |
| Weight | 149kg (330 lbs) | 82kg (180 lbs) | 90kg (198 lbs) |
| DoF | 28 | 28 | 56 (360° rotary joints) |
| Reach | - | - | 2.3m (7.5 ft) |
| Lift Capacity | - | - | 50kg instant, 30kg sustained |
| Temperature Range | - | - | -20° to 40°C |
| Power | Hydraulic (tethered) | Hydraulic (battery) | Electric (battery) |
| IP Rating | - | - | IP67 |
| Battery Life | - | ~1 hour | ~4 hours |

---

## Electric Atlas (2024)

### Key Improvements

- **Full Redesign**: Complete transition from hydraulic to electric, titanium/aluminum frame (3D printing)
- **Enhanced Mobility**: Strength exceeding human capabilities, 56 DoF with 360° rotation joints
- **4-Finger Hands**: Tactile sensing in fingers and palms
- **Battery System**: Dual battery packs, ~4 hour runtime, autonomous battery swap
- **Computing**: NVIDIA Jetson Thor platform (800 TFLOPS AI performance)
- **Machine Learning**: Simulation-trained for irregular object manipulation

### AI Capabilities

- Learns physical principles and quickly adapts to new tasks
- Operates autonomously with minimal supervision
- Human-level responsiveness to slips and weight changes
- Real-time adaptation rather than fixed programming

---

## Commercial Deployment

### Hyundai Factory (2025-2026)

| Item | Details |
|------|---------|
| Location | Hyundai Georgia Mega Factory (HMGMA), Robotics Metaplant Application Center (RMAC) |
| Start | 2025 pilot testing |
| Status | RMAC opening in 2026 |
| Partners | Hyundai, Google DeepMind (Gemini Robotics AI integration) |
| Future Plans | Task sequencing by 2028, assembly operations by 2030 |

### Deployment Plans

- 2026: All Atlas deployments pre-committed (Hyundai RMAC, Google DeepMind)
- Production: Boston Dynamics HQ (future factory planned for 30,000 units annually)
- Supply Chain: Hyundai Mobis supplying actuators
- Target sectors: Automotive manufacturing, logistics

---

## Technical Features

### Strengths

1. **Dynamic Balance**: World-leading bipedal locomotion
2. **Dexterous Manipulation**: Complex object handling
3. **Robust Design**: Industrial-grade durability
4. **Advanced Perception**: Multi-sensor integration

### Unique Capabilities

- Parkour and acrobatic movements
- Recovery from pushes and stumbles
- Whole-body coordination
- Complex terrain navigation

---

## Glossary

| Term | Description |
|------|-------------|
| DoF | Degrees of Freedom - number of independent movement axes |
| DARPA | Defense Advanced Research Projects Agency |
| HMGMA | Hyundai Motor Group Metaplant America - Hyundai Georgia Mega Factory |
| RMAC | Robotics Metaplant Application Center |
| IP67 | Ingress Protection rating (protected against 1m water submersion for 30 min) |
| Hydraulic | Power system using pressurized fluid |
| Electric | Power system using electric motors and batteries |

---

## References

- [Boston Dynamics Atlas Page](https://bostondynamics.com/atlas/)
- [Atlas Wikipedia](https://en.wikipedia.org/wiki/Atlas_(robot))
- [Electric New Era for Atlas](https://bostondynamics.com/blog/electric-new-era-for-atlas/)
- [IEEE Spectrum - Hello Electric Atlas](https://spectrum.ieee.org/atlas-humanoid-robot)
- [DARPA Timeline](https://www.darpa.mil/about-us/timeline/debut-atlas-robot)

---

## See Also

- [Hardware List](/knowledge/hardware/)
- [Tesla Optimus](optimus)
- [Figure Humanoid](figure)
- [Agility Digit](digit)
