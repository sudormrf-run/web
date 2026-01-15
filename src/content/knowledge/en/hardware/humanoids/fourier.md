---
title: Fourier Humanoid
description: Fourier's GR Series - Chinese humanoid robot with medical/rehabilitation background
tags:
  - fourier
  - gr-1
  - gr-2
  - gr-3
  - humanoid
  - fsa-actuator
  - medical-robotics
  - rehabilitation
created: 2024-01-01
updated: 2026-01-09
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

# Fourier Humanoid

> Home > Hardware > Humanoids > Fourier

<!-- Image pending: ![Fourier GR-2](../../assets/hardware/humanoids/fourier.png) -->

---

## Overview

Fourier is a Chinese robotics company founded in Shanghai in 2015, which started with medical rehabilitation robots and expanded into general-purpose humanoid robots. Founder Alex Gu is from Shanghai Jiao Tong University and previously worked at National Instruments. The company is named after French mathematician Joseph Fourier.

Fourier established its position in the rehabilitation robot field by launching China's first commercial lower-limb exoskeleton robot Fourier X1 in 2017 ([Exoskeleton Report](https://exoskeletonreport.com/2017/03/chinese-technology-company-fourier-intelligence-announces-first-exoskeleton-fourier-x1/)), and in 2023 unveiled **China's first mass-produced humanoid robot** through the GR-1 ([Robot Report](https://www.therobotreport.com/fourier-intelligence-launches-production-version-of-gr-1-humanoid-robot/)).

| Item | Details |
|------|---------|
| Manufacturer | Fourier |
| Headquarters | Zhangjiang Hi-Tech Park, Shanghai, China |
| Founded | 2015 |
| Background | Medical/Rehabilitation Robots (Exoskeletons) |
| Investors | IDG Capital, Saudi Aramco, Guoxin Investment, Prosperity7 ([Wikipedia](https://en.wikipedia.org/wiki/Fourier_(company))) |
| Recent Funding | Series E - approximately 800 million yuan (~$110M, early 2025) ([Wikipedia](https://en.wikipedia.org/wiki/Fourier_(company))) |

---

## Key Significance

Fourier's most significant contribution is **applying medical rehabilitation expertise to humanoid robots**.

### Why is Medical/Rehabilitation Background Important?

1. **Understanding Human Body**: 10 years of developing rehabilitation robots accumulated deep understanding of human joints, muscles, and movement patterns. This knowledge is directly reflected in humanoid design.

2. **Safety-First Design**: Rehabilitation robots are in direct contact with patients, making safety paramount. This DNA is embedded in the GR series' force control and collision detection.

3. **FSA Actuator**: Actuator technology accumulated during exoskeleton development evolved into the Fourier Smart Actuator (FSA). A high-performance actuator integrating motor, driver, reducer, and encoder into a single module.

4. **2024 Business Separation** ([Robot Report](https://www.therobotreport.com/fourier-intelligence-rebrands-fourier-fourier-rehab/)):
   - **Fourier Rehab**: Existing medical/rehabilitation robot business (2,000+ institutions in 40 countries)
   - **Fourier**: Focus on general-purpose humanoid robot development

5. **Care-bot Vision**: Positioning GR-3 as a "Care-bot" in 2025, targeting the care robot market leveraging their medical/rehabilitation background.

---

## Product Lineup

### GR-1 (2023)

China's first mass-produced humanoid robot. Unveiled at the Shanghai World Artificial Intelligence Conference (WAIC) in July 2023.

| Item | Spec |
|------|------|
| Height | 165cm (5ft 5in) |
| Weight | 55kg (121 lb) |
| Total DoF | 40 |
| Hand DoF (both hands) | 11 |
| Max Torque | 300 Nm (hip joint) |
| Walking Speed | 5 km/h (3.1 mph) |
| Payload | 50 kg |
| Price | $150,000 - $170,000 (estimated) |
| Sensors | Depth cameras (head, torso) |

**Key Features**:
- FSA 1.0 actuator equipped
- Rehabilitation center testing conducted (patient exercise assistance, weight support)
- Limited deliveries to universities and AI company research

### GR-2 (2024)

Second-generation humanoid released in October 2024, with significantly improved hand dexterity and battery life.

| Item | Spec |
|------|------|
| Height | 175cm (5ft 9in) |
| Weight | 63kg (139 lb) |
| Total DoF | 53 |
| Hand DoF (both hands) | 24 (12 x 2) |
| Max Torque | 380 Nm |
| Battery Runtime | Up to 2 hours |
| Single Arm Payload | 3 kg |
| Tactile Sensors | 6 array-type |
| Price | Not disclosed (refer to GR-1 estimate) |

**Key Improvements**:
- **FSA 2.0 Actuator**: Composed of 7 types of FSA 2.0 modules
- **Tactile Sensors**: Force sensing, object shape/material recognition, real-time grip adjustment
- **Removable Battery**: 2x capacity compared to GR-1
- **Development Platform**: ROS, NVIDIA Isaac Lab, MuJoCo support
- **Programming**: VR remote control, lead-through teaching support

### GR-3 (2025)

Latest model unveiled in August 2025, demonstrated at CES 2026 ([Interesting Engineering](https://interestingengineering.com/ai-robotics/fouriers-gr-3-humanoid-at-ces-2026)). Optimized for human-centered interaction with "Care-bot" concept.

| Item | Spec |
|------|------|
| Height | 165cm |
| Weight | 71kg (156 lb) |
| Total DoF | 55 |
| Positioning | Care-bot |

---

## FSA Actuator Technology

Fourier Smart Actuator (FSA) is Fourier's core competitive advantage. It integrates motor, driver, reducer, and encoder into a single module, reducing size while improving performance and reliability.

### FSA Architecture

```
[Motor] + [Driver] + [Reducer] + [Encoder] → [Single FSA Module]
                                              ↓
                                        High torque density
                                        Compact design
                                        Cost efficiency
```

### FSA Control Modes

| Mode | Description |
|------|-------------|
| Passthrough | Input commands directly transmitted to actuator |
| Velocity Ramping | Smooth speed control |
| Position Filtering | Jitter reduction |
| Trapezoidal Trajectory | Precise and controlled movement |
| Torque Ramping | Torque application rate control |

### FSA 2.0 Specifications (GR-2)

| Item | Spec |
|------|------|
| Max Acceleration | 6,000 - 10,000 RPM/s |
| Max Speed | 1,000 - 3,000 RPM |
| Motor Pole Pairs | 7, 10, or 21 pole pairs |
| Peak Torque | 380 Nm |

**FSA Advantages**:
- Smaller than existing servo systems
- Improved performance reliability
- Cost reduction (key to mass-produced humanoids)
- High-precision posture control

---

## Software Platform

### SDK and Framework Support

| Platform | Support |
|----------|---------|
| ROS | O |
| NVIDIA Isaac Lab | O |
| MuJoCo | O |
| VR Remote Control | O |
| Lead-through Teaching | O |

### Development Features

- **Pre-optimized Modules**: Machine vision, path planning, force feedback control APIs provided
- **NVIDIA Collaboration**: Simulation-based reinforcement learning using Isaac Gym
- **Open Source**: Fourier N1 (released 2025) is China's first verified open-source humanoid ([Wikipedia](https://en.wikipedia.org/wiki/Fourier_(company)))

---

## Rehabilitation/Medical Applications

Fourier's differentiator is its actual application experience in the medical field.

### Existing Rehabilitation Robot Lineup

| Product | Use |
|---------|-----|
| Fourier X1/X2 | Lower-limb exoskeleton (gait rehabilitation) |
| ArmMotus | Upper limb rehabilitation |
| WristMotus | Wrist rehabilitation |
| AnkleMotus | Ankle rehabilitation |

### GR-1 Medical Testing

- **Rehabilitation Center Pilot**: Physical therapist assistance, range of motion training guidance
- **Weight Support**: Partial patient weight support while maintaining balance
- **Applications**: Elderly care, post-surgery recovery programs, stroke/spinal cord injury rehabilitation

### Global Deployment

- Over 40 countries
- Over 2,000 hospitals/medical institutions
- 10 years of accumulated clinical data

---

## Generation Comparison

| Item | GR-1 | GR-2 | GR-3 |
|------|------|------|------|
| Release | July 2023 | October 2024 | August 2025 |
| Height | 165cm | 175cm | 165cm |
| Weight | 55kg | 63kg | 71kg |
| DoF (total) | 40 | 53 | 55 |
| Hand DoF (both hands) | 11 | 24 | - |
| Max Torque | 300 Nm | 380 Nm | - |
| Actuator | FSA 1.0 | FSA 2.0 | - |
| Tactile Sensors | X | O (6 arrays) | - |
| Battery | Basic | 2x capacity, removable | - |
| Positioning | Research/Medical | General-purpose | Care-bot |

---

## Competitive Comparison

| Item | Fourier GR-2 | Unitree H1 | Figure 02 | Tesla Optimus |
|------|--------------|------------|-----------|---------------|
| **Background** | Medical/Rehabilitation | Quadruped | Startup | Automotive/AI |
| **DoF (total)** | 53 | - | - | 40+ |
| **Hand DoF (both hands)** | 24 | - | 48 | 44 |
| **Height** | 175cm | 180cm | 165cm | 173cm |
| **Price** | Not disclosed (GR-1: $150-170K est.) | ~$90K | $100K+ | $20-30K (target) |
| **Strength** | Medical validation, FSA | Value | VLA (Helix) | Mass production |
| **SDK** | ROS/Isaac | - | - | Proprietary |

### Fourier's Differentiators

1. **Medical Background**: 10 years of rehabilitation robot development experience
2. **FSA Actuator**: Self-developed high-performance integrated actuator
3. **Safety**: Safety-first design derived from patient contact experience
4. **China Market Advantage**: Local manufacturing, government support, rapid mass production system

---

## Limitations and Challenges

1. **Dynamic Capabilities**: Lacking dynamic agility like jumping and spinning compared to Boston Dynamics Atlas
2. **Global Awareness**: Lower recognition in US/Europe markets compared to Unitree, Figure
3. **AI Technology**: Limited public information on VLA/Foundation Model compared to Figure Helix, Tesla
4. **Price**: Need to respond to Unitree's low-price offensive amid intensifying competition

---

## References

### Official Materials
- [Fourier Official Site](https://fftai.com/) - Company and product information
- [Fourier GR-2 Product Page](https://www.fftai.com/products-gr2) - GR-2 detailed specifications
- [Fourier GR-1 Product Page](https://www.fftai.com/products-gr1) - GR-1 detailed specifications
- [FSA Documentation](https://fftai.github.io/fsa/fsa/) - Fourier Smart Actuator reference guide

### Technical Analysis
- [NVIDIA Spotlight: Fourier Isaac Gym](https://developer.nvidia.com/blog/spotlight-fourier-trains-humanoid-robots-for-real-world-roles-using-nvidia-isaac-gym/) - NVIDIA Isaac Gym use case
- [Robot Report: GR-2 Launch](https://www.therobotreport.com/fourier-launches-gr-2-humanoid-software-platform/) - GR-2 and software platform analysis
- [Robot Report: GR-1 Production](https://www.therobotreport.com/fourier-intelligence-launches-production-version-of-gr-1-humanoid-robot/) - GR-1 production version analysis

### Company Background
- [Wikipedia: Fourier](https://en.wikipedia.org/wiki/Fourier_(company)) - Company history and overview
- [Robot Report: Fourier Rebranding](https://www.therobotreport.com/fourier-intelligence-rebrands-fourier-fourier-rehab/) - 2024 business separation
- [KrASIA: Rehabilitation Robot Startup](https://kr-asia.com/robots-devices-give-patients-a-chance-to-walk-again-inside-chinas-startups) - Startup background

### Latest News
- [Interesting Engineering: GR-3 at CES 2026](https://interestingengineering.com/ai-robotics/fouriers-gr-3-humanoid-at-ces-2026) - GR-3 Care-bot unveiling
- [Standard Bots: Humanoid Robots 2025](https://standardbots.com/blog/humanoid-robot) - 2025 humanoid robot market analysis

---

## See Also

- [Hardware List](../index.md)
- [Unitree Humanoid](unitree-humanoid.md)
- [Tesla Optimus](optimus.md)
- [Figure Humanoid](figure.md)
