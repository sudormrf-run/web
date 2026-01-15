---
title: Clone Robotics Hand
description: Biomimetic dexterous hand based on hydraulic artificial muscles
tags: [clone, hydraulic, myofiber, dexterous, biomimetic, artificial-muscle, hand]
category: hardware
created: 2025-02-01
updated: 2026-01-09

# Authorship
createdBy:
  name: Jong Hyun Park
  email: jhpark@sudormrf.run
lastEditedBy:
  name: Jong Hyun Park
  email: jhpark@sudormrf.run
lastEditedAt: 2026-01-15
---

# Clone Robotics Hand

> Home > Hardware > Hands > Clone Hand

<!-- Image pending: ![Clone Hand](../../assets/hardware/hands/clone-hand.png) -->

---

## Overview

Clone Robotics Hand is a biomimetic robot hand based on **hydraulic artificial muscles (Myofiber)** developed by Polish-American startup Clone Robotics. Developed over 8+ years of R&D, this technology takes an approach of directly replicating the anatomical structure of the human hand, unlike traditional electric motor or cable-based systems.

| Item | Spec |
|------|------|
| Manufacturer | Clone Robotics (Poland/USA) |
| Degrees of Freedom (DoF) | 27 (same as human hand) |
| Weight | Under 2 pounds (~900g) |
| Grip Strength | 6.8kg (15 lbs) |
| Force per Fiber | 1kg (for 3g fiber) |
| Contraction Rate | Over 30% (no load) |
| Contraction Response Time | Under 50ms |
| Production Cost | ~$2,800 |
| Durability | 650,000+ cycles (no fatigue) |

---

## Key Significance

The most important technical significance of Clone Hand is the adoption of **biomimetic hydraulic approach**.

### Electric/Tendon Method vs Hydraulic Method

| Characteristic | Electric/Cable Method | Clone Hydraulic Method |
|---------------|----------------------|------------------------|
| Drive Principle | Motor + gears/pulleys | Hydraulic pump + artificial muscles |
| Degrees of Freedom | 16-24 DoF | 27 DoF (same as human) |
| Backdrivability | Limited | Complete antagonistic muscle structure |
| Compliance | Hardware rigidity | Natural flexibility |
| Durability | Gear/cable wear | 650K+ cycles |
| Movement | Mechanical | Human-like |

Existing robot hands (Shadow Hand, Allegro, etc.) use electric motors and cable/tendon systems to drive fingers. While this method enables precise control, it has limitations in reproducing the natural movement and compliance of the human hand.

Clone directly mimics the **antagonistic muscle structure of human muscles**, where each joint operates by being pulled and relaxed by two Myofibers. This enables natural hand movement along with **shock absorption** and **safe object manipulation**.

---

## Myofiber Technology

### Operating Principle

Myofiber is Clone Robotics' core technology - **hydraulic artificial muscles**. In small tube form, it contracts when water is pressurized and relaxes when depressurized.

| Item | Specification |
|------|---------------|
| Drive System | 500W water pump |
| Valves | 36 electro-hydraulic valves |
| Contraction Speed | Under 50ms |
| Contraction Rate | Over 30% (no load) |
| Single Fiber Force | 1kg (3g fiber) |
| Materials | Carbon fiber bones, ligament-type tethers |
| Durability | 650,000+ test cycles |

### Neural Joint V2 Controller

In November 2025, Clone unveiled the **Neural Joint V2 Controller**. This controller uses neural networks trained on human hand movement videos to **understand the motion itself** rather than pre-defined commands and reproduce it.

- Training Data: Hours of human hand movement videos
- Method: Neural network-based motion generation
- Advantage: Natural motion transfer, adaptive control

---

## Protoclone Integration

Clone Hand is integrated into Clone Robotics' full-body android projects **Protoclone V1** and **Clone Alpha**.

### Protoclone V1 Specifications

| Item | Spec |
|------|------|
| Degrees of Freedom | 200+ DoF (upper body 164 DoF) |
| Myofibers | ~1,000 |
| Sensors | 500+ (4 depth cameras, 70 IMUs, 320 pressure sensors) |
| Skeleton | 206 polymer bones (mimicking human anatomy) |
| Computing | NVIDIA Jetson Thor + Cybernet model |
| Cooling | Water-based "sweat" system |
| Production Plan | 279 Alpha units (2025) |
| Target Price | ~$20,000 (2026 mass production) |

### Upper Body DoF Distribution

Protoclone's upper body 164 DoF is distributed as follows (both arms):

| Body Part | DoF | Notes |
|-----------|-----|-------|
| Shoulders | 20 | Both sides combined |
| Spine | ~36 | 6 DoF/vertebra x ~6 segments |
| Wrists/Elbows | 12 | 6 DoF x both sides |
| Hands (Clone Hand) | 54 | 27 DoF x both sides |
| **Total** | ~122+ | Major upper body joints |

*Note: 164 DoF includes minor joints beyond the main joints above*

Protoclone targets household and commercial tasks (cooking, cleaning, etc.) and represents a milestone in biomimetic robotics.

---

## Feature Summary

- **Complete Biomimetic Design**: Perfect reproduction of human hand's 27 DoF
- **Hydraulic Artificial Muscles**: More natural movement compared to electric motors
- **Antagonistic Muscle Structure**: Backdrivability and compliance secured
- **Excellent Durability**: 650,000+ cycles (no fatigue)
- **Neural Joint V2**: AI-based motion learning controller
- **Teleoperation**: Remote manipulation support via sensor gloves

---

## Competitor Comparison

| Characteristic | Clone Hand | Shadow Hand | Allegro Hand |
|---------------|------------|-------------|--------------|
| Drive Method | Hydraulic (Myofiber) | Electric motor + tendon | Electric motor |
| Degrees of Freedom | 27 DoF | 20 DoF (24 movements) | 16 DoF |
| Weight | ~900g | ~4kg | ~1.1kg |
| Compliance | High (inherent) | Medium | Medium |
| Naturalness | High | Medium | Medium |
| Price | ~$2,800 | ~$110,000+ | ~$15,000 |

---

## Company Information

Clone Robotics was co-founded in 2021 by **Dhanush Radhakrishnan** (CEO) and **Lukasz Kozlik** (Lead Engineer). Headquarters is in Warsaw, Poland, with offices also in the US.

Kozlik posted the first prototype video on YouTube in 2019, which went viral, and after 8+ years of R&D, completed the current Myofiber technology. Manufacturing in Poland significantly reduced development and production costs compared to the US.

---

## References

- [Clone Robotics Official Site](https://clonerobotics.com/)
- [Clone Hand Product Page](https://clonerobotics.com/hand/)
- [Clone Android Page](https://clonerobotics.com/android/)
- [Clone Company Information](https://clonerobotics.com/company/)

---

## See Also

- [Hardware List](../index.md)
- [Shadow Hand](shadow-hand.md)
- [Allegro Hand](allegro.md)
