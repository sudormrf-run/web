---
title: Inspire Hand
description: INSPIRE-ROBOTS dexterous hand - Robot hand recreating human hand precision
tags: [inspire, hand, dexterous, china, beijing, rh56, f1, humanoid, unitree]
category: hardware
date: 2026-01-09
---

# Inspire Dexterous Hand

> Home > Hardware > Hands > Inspire Hand

<!-- Image placeholder: actual image file needs to be added to assets folder -->
<!-- Image pending: ![Inspire Hand](../../assets/hardware/hands/inspire-hand.png) -->

---

## Overview

**INSPIRE-ROBOTS** is a company specializing in micro high-precision motion control components, founded in Beijing, China in 2016.[^1] They successfully developed their first-generation micro linear servo actuator in the first year, and have since accumulated unique technical expertise in micro size, high precision, and force control fields.[^1] Currently, they supply products to over 20 countries via DHL.[^1]

### Core Specifications

| Item | Details | Source |
|------|---------|--------|
| Manufacturer | INSPIRE-ROBOTS (Beijing, founded 2016) | [^1] |
| DoF | 6 | [^2] |
| Motor Joints | 12 | [^2] |
| Repeatability | ±0.20mm | [^2] |
| Force Resolution | 0.5N | [^2] |
| Payload | 3kg | [^2] |
| Pressure Sensors | 6 (integrated) | [^2] |
| Interface | GX12 aviation plug | [^2] |

---

## Key Significance

The INSPIRE Dexterous Hand is notable for **achieving industrial-grade precision while maintaining human hand size and appearance**.[^2] The combination of 6 degrees of freedom and 12 motor joints implements hybrid position/force control algorithms, enabling precise grasping motions similar to the human hand.[^2]

Particularly, **official integration with Unitree G1 humanoid robot** demonstrates its value as a practical platform for physical AI research.[^3] ROS plugin support and RS485/CAN communication interfaces enable flexible integration in both research and industrial environments.[^2]

The adaptive grasping function based on linear servo drives enables safe manipulation of objects of various shapes and materials, making it suitable for a wide range of applications including service robots, educational robots, and prosthetics.[^1]

---

## Product Lineup

### RH56 Series

| Model | Features | Main Applications | Source |
|-------|----------|-------------------|--------|
| **RH56BFX** | High-speed movement, precision interaction ("The Pianist") | Precision manipulation, musical instrument demonstration | [^1] |
| **RH56DFX** | Strong grip, moderate speed, integrated force sensors | Grasping tasks, prosthetics | [^1] |

#### RH56DFX Detailed Specs

| Item | Spec | Source |
|------|------|--------|
| Thumb Grip Force | 15N | [^3] |
| Palm Grip Force | 10N | [^3] |
| Thumb Rotation | >65 degrees @ 107 deg/s | [^3] |
| Thumb Flexion Speed | 70 deg/s | [^3] |
| Finger Flexion Speed | 260 deg/s | [^3] |
| Weight | 540g | [^2] |
| Operating Voltage | DC24V ±10% | [^2] |
| Idle Current | 0.2A | [^2] |
| Max Current | 2A | [^2] |
| Communication | RS485 | [^2] |

### F1 Series (Advanced)

The F1 series is a premium line with significantly enhanced structural rigidity through full metal body and integrated skeleton design.[^1]

| Item | Spec | Source |
|------|------|--------|
| Communication | 1kHz high-speed real-time (EtherCAT + RS485) | [^1] |
| Static Passive Load | 30kg | [^1] |
| Fingertip Grip Force | 15N | [^1] |
| Sensors | 24 multi-dimensional (tactile/force/position/temperature) | [^1] |
| Degrees of Freedom | 6 DoF | [^1] |
| Number of Joints | 12 | [^1] |
| Weight | 620 ± 10g | [^1] |
| Operating Voltage | 24V - 48V | [^1] |
| Idle Current (RS485) | 194 ± 10mA @ 24V | [^1] |
| Idle Current (EtherCAT) | 210 ± 10mA @ 24V | [^1] |
| Max Current | 5A | [^1] |
| Quality Testing | Passed 20 standardized tests | [^1] |

#### F1 Series Key Features

- **Full Metal Body**: Maximum durability with integrated skeleton design [^1]
- **Hidden Wiring**: Clean appearance with innovative internal wiring [^1]
- **Multi-Sensor System**: 4 categories, 24 groups of sensors (tactile, force, position, temperature) [^1]
- **Multi-Mode Control**: Supports various control strategies [^1]

---

## Competitive Product Comparison

The table below is based on official materials from each manufacturer. Some items marked "N/A" due to lack of public information.

| Item | INSPIRE RH56 | Shadow Dexterous Hand | PSYONIC Ability Hand |
|------|--------------|----------------------|---------------------|
| **Degrees of Freedom** | 6 DoF, 12 joints [^2] | 24 DoF (20 actuated) [^4] | 6 motors [^5] |
| **Weight** | 540g (DFX) / 620g (F1) [^1][^2] | 4.3kg [^4] | 490g [^5] |
| **Motor Count** | 12 [^2] | 20 [^4] | 6 [^5] |
| **Sensors** | 6 (DFX) / 24 (F1) [^1][^2] | 100+ @ 1kHz [^4] | Pressure sensors + haptic feedback [^5] |
| **ROS Support** | O [^2] | O [^4] | X (Bluetooth app) [^5] |
| **Communication Speed** | 1kHz (F1) [^1] | 1kHz [^4] | N/A |
| **Main Applications** | Service robots, prosthetics [^1] | Research/AI [^4] | Prosthetics [^5] |
| **Price Range** | Vendor inquiry required | Vendor inquiry required | Vendor inquiry required |
| **Features** | Humanoid integration optimized [^3] | Highest precision/research use [^4] | Touch feedback [^5] |

**Note**: Contact each vendor directly for accurate pricing.

---

## Technical Features

### Drive Method

- **Linear Servo Drive**: Based on micro linear servo actuators [^1]
- **Linkage Drive**: Linked mechanism mimicking human hand tendon system [^2]
- **Hybrid Control**: Simultaneous application of position and force control [^2]

### Sensing System

| Sensor Type | RH56 Series | F1 Series | Source |
|-------------|-------------|-----------|--------|
| Force Sensors | 6 integrated | 24 groups | [^1][^2] |
| Position Sensors | O | O | [^2] |
| Tactile Sensors | - | O | [^1] |
| Temperature Sensors | - | O | [^1] |

### Control Algorithms

- **Adaptive Grasping**: Automatic grip adjustment based on object shape [^2]
- **Force Feedback Control**: Delicate manipulation based on real-time force sensor [^2]
- **Position Accuracy**: ±0.20mm repeatability [^2]

---

## Compatibility

### Unitree G1 Integration

INSPIRE RH56 series officially supports integration with Unitree G1 humanoid robot.[^3]

- **Control Topic**: `rt/inspire/cmd` (MotorCmds message) [^3]
- **State Topic**: `rt/inspire/state` (MotorStates message) [^3]
- **Control Method**: Joint-level control (12 motor array) [^3]
- **Supported Parameters**: q (joint position) [^3]

```bash
# Unitree RH56DFX Inspire Hand Controller
git clone https://github.com/unitreerobotics/DFX_inspire_service
```

### Communication Interfaces

| Interface | RH56 Series | F1 Series | Source |
|-----------|-------------|-----------|--------|
| RS485 | O | O | [^1][^2] |
| CAN | O | - | [^2] |
| EtherCAT | - | O | [^1] |
| ROS Plugin | O | O | [^2] |

### Supported Platforms

- **Unitree G1**: Official integration support [^3]
- **Unitree H1**: Official integration support [^6]
- **Other Humanoids**: Connectable via RS485/CAN interface [^2]
- **Research Arms**: Standard communication protocol support [^2]

---

## Application Fields

- **Humanoid Robots**: Integration with humanoid platforms like Unitree G1/H1 [^3][^6]
- **Service Robots**: Object manipulation in everyday environments [^1]
- **Research/Education**: University labs, robotics centers [^1]
- **Prosthetics**: Rehabilitation and assistive devices [^1]
- **Industrial Automation**: Delicate assembly work [^1]

---

## References

### Primary Sources

[^1]: INSPIRE-ROBOTS Store. https://inspire-robots.store/
[^2]: INSPIRE-ROBOTS. "THE DEXTEROUS HAND RH56 SERIES USER MANUAL." https://en.inspire-robots.com/wp-content/uploads/2024/02/INSPIRE-ROBOTS-THE-DEXTEROUS-HAND-RH56-SERIES-USER-MANUAL.pdf
[^3]: Unitree Robotics. "Inspire DFX Dexterous Hand - G1 Developer Documentation." https://support.unitree.com/home/en/G1_developer/inspire_dfx_dexterous_hand
[^4]: Shadow Robot Company. "Shadow Dexterous Hand Technical Specification." https://www.shadowrobot.com/wp-content/uploads/2022/03/shadow_dexterous_hand_e_technical_specification.pdf
[^5]: PSYONIC. "Ability Hand." https://www.psyonic.io/ability-hand
[^6]: Unitree Robotics. "Dexterous Hand - H1 Developer Documentation." https://support.unitree.com/home/en/H1_developer/Dexterous_hand

### Additional References

- INSPIRE-ROBOTS Official Site: https://en.inspire-robots.com
- GitHub unitreerobotics/DFX_inspire_service: https://github.com/unitreerobotics/DFX_inspire_service

---

## See Also

- [Hardware List](../index.md)
- [Ability Hand](ability.md)
- [Shadow Dexterous Hand](shadow.md)
