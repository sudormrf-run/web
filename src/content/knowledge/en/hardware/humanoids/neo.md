---
title: 1X NEO
description: Consumer home humanoid robot from 1X Technologies
tags: [1x, neo, humanoid, redwood-ai, home-robot, tendon-drive, consumer]
category: hardware
company: 1X Technologies
origin: Norway
---

# 1X NEO

> Home > Hardware > Humanoids > NEO

<!-- Image pending: ![1X NEO](../../assets/hardware/humanoids/neo.png) -->

---

## Overview

**1X NEO** is a **consumer home humanoid robot** developed by Norway-based robotics company **1X Technologies**. Backed by OpenAI investment, 1X aims to create robots that can safely coexist with humans, combining their proprietary tendon-driven system with the Redwood AI VLA model to present a humanoid optimized for home environments.

| Item | Spec | Source |
|------|------|--------|
| Manufacturer | 1X Technologies | [1] |
| Headquarters | Moss, Norway (relocated to Palo Alto, USA in 2024) | [3][4] |
| Height | Approximately 165-168cm (5'5"-5'6") | [1][5] |
| Weight | Approximately 30kg (66 lbs) | [1] |
| Lifting Capacity | 68kg (150 lbs) or more (per announcement) | [1] |
| Carrying Capacity | Approximately 25kg (55 lbs) | [1] |
| Hand DoF | 22 DOF (total 75 DOF announced) | [1] |
| Movement Speed | Walking approximately 4km/h, max approximately 12km/h | [1] |
| Battery | 842Wh, approximately 4 hours operation (per announcement) | [1] |
| Charging Time | Approximately 24 minutes (fast charging, per announcement) | [1] |
| Noise Level | Approximately 22dB (per announcement) | [1] |
| Water Resistance | Hands: IP68, Body: IP44 (per announcement) | [1] |
| Drive Method | Tendon Drive | [1] |
| AI Model | Redwood AI | [2] |
| Target Price | $20,000 (monthly $499 subscription option) | [1][6] |

> **Note**: Some specs may vary slightly by source; figures above are based on 1X official announcements.

---

## Key Significance

NEO's key significance is the **attempt to enter the consumer home market with a humanoid**. While existing humanoid robots were limited to industrial or research use, NEO was designed from the start to target **ordinary homes**.

### New Paradigm for Home Robots

- **Accessible Price**: The target price of $20,000 is at the automotive level, purchasable by general households like premium home appliances
- **Safety-First Design**: Designed to operate safely in environments with children, pets, and elderly
- **Progressive Learning**: Performs basic tasks at launch, capabilities expand through software updates over time
- **Human-in-the-Loop**: Unknown tasks are guided remotely by 1X Expert to learn new tasks

### Why Home Use?

The home environment is one of the most challenging environments in robotics:
- **Unstructured Environment**: Object placement changes daily
- **Diverse Objects**: Thousands of different items
- **Human Interaction**: Responding to unpredictable human behavior
- **Safety Requirements**: Protecting vulnerable family members

NEO directly addresses these challenges, aiming for a **data flywheel** effect: More NEOs operating in homes generate more data, which improves Redwood AI, and improved AI makes better NEOs.

---

## Safety Design

NEO's safety design philosophy is based on **Intrinsic Safety**. Rather than relying solely on software control, the hardware itself is designed to be safe.

### Tendon Drive System

1X's Tendon Drive System is NEO's core safety technology [1]:

| Feature | Description |
|---------|-------------|
| Structure | High-torque-density motors + flexible polymer tendons |
| Backdrivability | High backdrivability (approximately 95% per announcement) |
| Shock Absorption | Low impact force, smooth movement |
| Biomimicry | Mimics human muscle-tendon structure |

**Why Tendon Drive?**

Traditional robots have motors directly connected to joints, resulting in high rigidity. This transmits high impact force during collisions. In contrast, tendon drive:

1. **Natural Compliance**: Tendons absorb shocks, naturally yielding during collisions
2. **Smooth Movement**: Low jerk prevents sudden movements
3. **Quiet Operation**: Low noise suitable for home environments
4. **High Torque Density**: Achieves high lifting capacity while maintaining safety

### Additional Safety Features

- **Soft Shell**: Deformable shell covered with 3D lattice polymer
- **Pinch Prevention**: All joints covered to prevent external access
- **Situational Awareness**: Environmental perception through vision and audio systems
- **Remote Guidance**: Human-in-the-loop approach for handling unknown situations

---

## Version History

| Version | Release | Key Features | Source |
|---------|---------|--------------|--------|
| **NEO Beta** | August 2024 | Initial prototype, basic bipedal walking demonstration | [5] |
| **NEO Gamma** | February 2025 | Enhanced dexterity, refined design, strengthened Redwood AI integration | [5] |
| **NEO (Consumer)** | October 2025 | Consumer version pre-orders start, US delivery scheduled for 2026 | [6] |

> **Note**: Refer to official announcement materials for exact release dates.

---

## Redwood AI Integration

**Redwood AI** is a Vision-Language-Action (VLA) model developed in-house by 1X, serving as NEO's "brain" [2].

### Technical Architecture (Per Announcement)

| Component | Description |
|-----------|-------------|
| Model Size | Transformer-based (refer to official announcement for specific parameter count) |
| Execution Environment | NEO onboard GPU (per announcement) |
| Execution Speed | Several Hz level (approximately 5Hz per announcement) |
| Input | Pre-trained language embeddings + vision tokens + proprioceptive embeddings |
| Output | Action generation through Diffusion Policy |

### Key Feature: Whole-Body Control

Redwood's biggest technical differentiator is **integrated control of locomotion and manipulation**:

- Most robot systems: Separate walking (locomotion) and manipulation
- Redwood: Single model controls entire body

Actions made possible:
- Bending hip and spine while reaching to pick up clothes from floor
- Balancing while supporting with one hand when opening heavy door
- Carrying objects while climbing stairs

### Input Processing

```
[Language Embeddings] + [Vision Tokens] + [Proprioceptive Embeddings]
                    ↓
            Transformer Blocks
                    ↓
              Latent Representation Vector
                    ↓
            Diffusion Policy
                    ↓
              NEO Action Output
```

### Voice Control

- Utilizes offboard Speech-to-Speech LLM
- Extracts user intent from conversation context
- Vectorizes commands with sentence encoder
- Inputs to Redwood model for execution

### Learning and Generalization

- **Data Sources**: Teleoperated and autonomous episodes from EVE and NEO platforms
- **Learning from Failure**: Utilizes not only success but also failure data
- **Robust Generalization**: Can pick up unseen objects from various positions

---

## 1X Technologies Company Information

| Item | Details |
|------|---------|
| Founded | 2014 (formerly Halodi Robotics) |
| Founder/CEO | Bernt Bornich (Bernt Bornich) |
| Headquarters | Founded in Moss, Norway, later relocated to Palo Alto, USA |
| Key Investors | OpenAI, Tiger Global, EQT Ventures, Samsung NEXT |
| Total Investment | Over $137M (as of 2024) |

### Investment History

| Time | Round | Amount | Key Investors | Source |
|------|-------|--------|---------------|--------|
| March 2023 | Series A2 | $23.5M | OpenAI Startup Fund (lead), Tiger Global | [4] |
| January 2024 | Series B | $100M | EQT Ventures, Samsung NEXT | [4] |

### Partnership with OpenAI

1X contacted OpenAI in the summer of 2022, before the release of ChatGPT. They subsequently integrated OpenAI's language models and embodied learning models into robots to build a system that understands and learns from natural language commands [4].

---

## See Also

- [Hardware List](../index.md)
- [1X Technologies](../../companies/1x.md)
- [Redwood AI](../../models/redwood-ai.md)
- [Tendon Drive System](../../fundamentals/actuation/tendon-drive.md)

---

## References

1. [1X Technologies Official - NEO Home Robot](https://www.1x.tech/discover/neo-home-robot)
2. [1X Technologies Official - Redwood AI](https://www.1x.tech/discover/redwood-ai)
3. [1X Technologies Official - About](https://www.1x.tech/about)
4. [TechCrunch - OpenAI-backed 1X raises another $100M](https://techcrunch.com/2024/01/11/openai-backed-1x-raises-another-100m-for-the-race-to-humanoid-robots/)
5. [The Robot Report - NEO humanoid designed for household use](https://www.therobotreport.com/1x-announces-pre-order-launch-neo-humanoid-robot/)
6. [Business Wire - 1X Launches NEO](https://www.businesswire.com/news/home/20251027434628/en/1X-Launches-NEO-The-Robot-Redefining-Life-at-Home)
