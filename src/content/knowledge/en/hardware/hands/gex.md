---
title: GEX Series
description: Ultra-low-cost fully-actuated dexterous hand and teleoperation system
tags: [gex, gx11, ex12, hand, low-cost, dexterous, teleoperation, 3d-print, dynamixel]
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

# GEX Series

> Home > Hardware > Hands > GEX

<!-- TODO: Add image -->
<!-- Image pending: ![GEX Hand](../../assets/hardware/hands/gex.png) -->

---

## Overview

GEX is an ultra-low-cost dexterous manipulation system developed with the goal of **Democratizing Dexterity**. It provides a closed-loop teleoperation framework consisting of the GX11 robot hand and EX12 exoskeleton glove.

| Item | GX11 Hand | EX12 Glove |
|------|-----------|------------|
| DoF | 11 | 12 |
| Price | ~$600 | - |
| Assembly Time | Under 4 hours | - |
| Number of Fingers | 3 (thumb, index, middle) | 3 |
| Cost Comparison | **1/125** of Shadow Hand, **1/20** of Allegro (per paper) | - |

---

## GX11 Hand Detailed Specs

### Mechanical

| Item | Spec |
|------|------|
| DoF Configuration | Thumb 3 DoF + Index 4 DoF + Middle 4 DoF |
| Material | ABS plastic (3D printed) |
| Drive Method | Fully-Actuated |
| Design Base | 3-finger design based on LEAP Hand |

### Actuators

| Item | Spec |
|------|------|
| Motor | Dynamixel XL330-M288-T |
| Torque | 0.53Nm (rated) |
| Gear Ratio | 288:1 |
| Weight | 18g / actuator |
| Size | 24.5 x 33 x 25 mm |

### Sensing and Control

| Item | Spec |
|------|------|
| Encoder | AS5601 (12-bit absolute position) |
| Position Resolution | 0.088° |
| Communication | TTL Multidrop Bus (up to 1Mbps) |
| Power | 5V DC |
| Control Modes | Current/velocity/position control |
| Processor | ARM Cortex-M0+ |

---

## Key Significance

### Democratizing Dexterity

The greatest significance of the GEX project is **dramatically lowering the barrier to entry for dexterous manipulation research**.

Existing problems:
- Shadow Hand ($75K+): Excellent performance but unaffordable for most labs
- Allegro Hand ($12K+): Mid-range price but still high initial cost
- Tendon-driven systems: Difficult maintenance, cable wear issues

GEX solutions:
- **Under $600** manufacturing cost enables anyone to research dexterous hands
- **Fully-actuated** approach eliminates tendon system complexity
- **3D print** based for immediate replication and repair
- **Under 4 hours** assembly for rapid deployment

### Accelerating VLA Research

Proliferation of affordable dexterous hands directly impacts VLA (Vision-Language-Action) research:

1. **Expanded Data Collection**: More labs can generate dexterous manipulation data
2. **Teleoperation Accessibility**: High-quality demonstration data acquisition through EX12 glove integration
3. **Distributed Research**: Inexpensive replication of same platform promotes multi-site research

---

## Design Philosophy

### Why 3 Fingers?

Reasons for adopting 3-finger structure departing from LEAP Hand's 5-finger design:

- **Maximum Flexibility**: Most manipulation tasks achievable with thumb, index, and middle fingers only
- **Human Hand Mimicry**: Reproduces core human grip patterns (precision grip, power grip)
- **Reduced Complexity**: Weight and size optimization, simplified control
- **Cost Reduction**: Reduced BOM cost through fewer actuators

### Fully-Actuated vs Tendon-Driven

| Characteristic | Fully-Actuated (GEX) | Tendon-Driven (Shadow) |
|---------------|----------------------|------------------------|
| State Observability | Fully observable | Errors from cable stretch |
| Kinematics Modeling | Accurate | Nonlinear elements exist |
| Maintenance | Simple | Cable replacement required |
| Force Transmission | Direct | Friction losses |
| Compactness | Relatively larger | Can be compact |

---

## Cost Analysis

### BOM (Bill of Materials) Estimate

> Costs below are estimates based on general market prices; actual costs may vary by vendor/quantity

| Item | Quantity | Unit Price (est.) | Subtotal |
|------|----------|-------------------|----------|
| Dynamixel XL330-M288-T | 11 | ~$50 | ~$550 |
| 3D Printed Parts (ABS) | 1 set | ~$20 | ~$20 |
| AS5601 Encoder | Built-in | - | - |
| Wiring/Connectors | 1 set | ~$15 | ~$15 |
| Other Hardware | - | ~$15 | ~$15 |
| **Total** | | | **~$600** |

*Not included: Controller, power supply, assembly tools*

### Cost Comparison with Other Products

> Paper states 1/125 cost of Shadow Hand, 1/20 of Allegro

| Product | Price (per paper) | Cost Ratio |
|---------|-------------------|------------|
| Shadow Hand | $75,000+ | **125x** |
| Allegro Hand | $12,000+ | **20x** |
| Clone Hand | ~$2,800 | ~5x |
| LEAP Hand | ~$2,000 | ~3x |
| **GEX GX11** | **~$600** | 1x |

*Note: Shadow Hand, Allegro prices reverse-calculated from paper-stated ratios (1/125, 1/20). Actual market prices may vary*

### Total Cost of Ownership (TCO) Perspective

GEX advantages go beyond initial cost:

- **Repair Cost**: Immediate 3D print replacement when damaged (~$20/part)
- **Upgrades**: Modular design allows individual finger replacement
- **Scalability**: Multiple purchases affordable (dual-arm system $1,200)

---

## Assembly and Usage

### Assembly Process

1. **3D Printing** (2-3 hours): Print ABS parts
2. **Motor Installation** (1 hour): Mount Dynamixel actuators
3. **Wiring** (30 min): Connect TTL bus
4. **Calibration** (30 min): Set position zero points

### Teleoperation Setup

GX11 is used in combination with EX12 exoskeleton glove:

- Total **23 DoF** closed-loop system
- High-fidelity control through **kinematics retargeting** algorithm
- Indirect force sensing via **torque estimation** based on current control mode (no separate haptic sensors)

---

## Limitations and Considerations

### Current Limitations

- **3-Finger Limitation**: Tasks requiring 5 fingers not possible
- **Sensing**: No separate tactile sensors (only current-based torque estimation available)
- **Waterproofing/Dustproofing**: Research use, unsuitable for industrial environments
- **Payload**: Heavy object manipulation limited

### Suitable Applications

- Data collection for VLA/reinforcement learning research
- Demonstration learning based on teleoperation
- Educational platforms
- Low-cost prototyping

### Unsuitable Applications

- Industrial production environments
- High-precision assembly tasks
- Long-term continuous operation

---

## References

- **Paper**: Dong, Y., Liu, X., Wan, J., & Deng, Z. (2025). "GEX: Democratizing Dexterity with Fully-Actuated Dexterous Hand and Exoskeleton Glove." [arXiv:2506.04982](https://arxiv.org/abs/2506.04982)
- **Actuator**: [Dynamixel XL330-M288-T](https://emanual.robotis.com/docs/en/dxl/x/xl330-m288/)

---

## See Also

- [Hardware List](../index)
- [LEAP Hand](leap-hand) - Similar low-cost design
- [Shadow Hand](shadow-hand) - High-performance benchmark
- [Allegro Hand](allegro) - Mid-range alternative
