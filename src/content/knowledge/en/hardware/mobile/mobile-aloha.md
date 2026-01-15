---
title: Mobile ALOHA
description: Stanford IRIS Lab's low-cost whole-body teleoperation mobile bimanual manipulation platform
tags: [mobile-aloha, stanford, bimanual, teleoperation, mobile, aloha, co-training, imitation-learning, agilex, viperx]
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

## Key Significance

- **Democratization of Mobile Bimanual Manipulation**: Implemented ~$32,000 platform vs existing $200,000+ mobile manipulators - greatly improved research accessibility
- **Whole-Body Teleoperation**: Enables complex household tasks that require moving while using both arms, beyond tabletop manipulation
- **Co-Training Paradigm**: Achieves 80-90% success rate with only 50 demonstrations by jointly training with existing static ALOHA datasets
- **Open-Source Ecosystem**: Complete disclosure of hardware design, software, 3D printing files, assembly tutorials
- **Practical Household Robot Research**: Demonstrated potential for general household robots through real-life task demonstrations like cooking, cleaning, elevator calling

<!-- Image pending: ![Mobile ALOHA](../../assets/hardware/mobile/mobile-aloha.png) -->

---

## Overview

Mobile ALOHA is a low-cost whole-body teleoperation system developed by Stanford IRIS Lab. By mounting the existing tabletop-only ALOHA system on a mobile base, it enables learning complex tasks that simultaneously perform locomotion and bimanual manipulation.

| Item | Spec |
|------|------|
| Development | Stanford IRIS Lab |
| Authors | Zipeng Fu*, Tony Z. Zhao*, Chelsea Finn |
| Publication | arXiv: January 2024 / CoRL 2024 presentation |
| Base | AgileX Tracer AGV |
| Arms | ViperX 300 6-DoF x 2 (follower) + WidowX 250 x 2 (leader) |
| Gripper | Custom parallel gripper (3D printed) |
| Cameras | Wrist x 2 + front 1 (Logitech C922x) |
| Compute | Laptop (RTX 3070 Ti, i7-12800H) |
| Total Cost | ~$32,000 |
| Paper | [arXiv:2401.02117](https://arxiv.org/abs/2401.02117) |
| Project | [mobile-aloha.github.io](https://mobile-aloha.github.io/) |

---

## Hardware Configuration

### Mobile Base: AgileX Tracer AGV

> Source: [AgileX TRACER Documentation](https://docs.trossenrobotics.com/agilex_tracer_docs/specifications.html)

| Item | Spec |
|------|------|
| Drive | 2-wheel differential drive + 4 freewheel casters |
| Motors | 150W brushless servo x 2 |
| Max Speed | 1.6 m/s (human walking speed) |
| Payload | 100 kg |
| Size (L x W x H) | 702 x 610 x 169 mm |
| Ground Clearance | 30 mm |
| Obstacle Crossing | 10 mm height, 8 degree slope |
| Operating Time | Up to 4 hours (100kg load) |
| Price | ~$7,000 |

### Robot Arms: ViperX 300 6-DoF

> Source: [Trossen Robotics ViperX 300](https://www.trossenrobotics.com/viperx-300)

| Item | Spec |
|------|------|
| Configuration | 2 followers (for autonomous execution) |
| Arm DoF | 6-DoF (arm body) |
| Gripper | 1-DoF (open/close) |
| **Arm+Gripper Total DoF** | **7-DoF per arm** |
| Horizontal Reach | 75 cm (base center to gripper) |
| Total Span | 150 cm |
| Working Payload | 750 g |
| Servos | DYNAMIXEL XM540-W270-R, XM430-W350-R |
| Resolution | 4096 positions |
| Material | 20mm x 40mm extruded aluminum |
| Price | ~$6,130 x 2 |

### Teleoperation Leader Arms: WidowX 250 6-DoF

| Item | Spec |
|------|------|
| Configuration | 2 leaders (for data collection) |
| Features | 3D printed ergonomic handles |
| Use | Used only for demonstration data collection |
| Price | ~$3,550 x 2 |

### Sensors and Compute

| Item | Spec |
|------|------|
| Cameras | Logitech C922x x 3 |
| Resolution | 640 x 480 |
| Control Frequency | 50 Hz (camera streaming and policy execution) |
| Placement | 2 wrist + 1 front |
| Compute | Consumer-grade laptop |
| GPU | NVIDIA RTX 3070 Ti (8GB VRAM) |
| CPU | Intel i7-12800H |
| Communication | USB serial (arms) + CAN bus (base) |

### Power System

| Item | Spec |
|------|------|
| Battery | 1.26 kWh |
| Weight | 14 kg |
| Position | Bottom of base (doubles as counterweight) |
| Features | Untethered wireless operation |

---

## Cost Breakdown (~$32,000)

> Source: [Mobile ALOHA Project Page](https://mobile-aloha.github.io/), [Trossen Robotics](https://www.trossenrobotics.com/)

| Component | Price (USD) | Notes |
|-----------|-------------|-------|
| AgileX Tracer AGV | ~$7,000 | Mobile base |
| ViperX 300 6-DoF x 2 | ~$12,260 | Follower arms |
| WidowX 250 6-DoF x 2 | ~$7,100 | Leader arms (for teleop) |
| Battery (1.26kWh) | ~$2,000 | Estimate |
| Cameras (C922x x 3) | ~$300 | RGB webcams |
| 3D Printed Parts | ~$500 | Grippers, mounts, etc. |
| Other Hardware | ~$2,840 | Brackets, cables, etc. |
| **Total** | **~$32,000** | Officially stated on project page |

> Comparison: Existing commercial mobile manipulators (e.g., Clearpath + dual arms) are $200,000+

---

## Physical Specifications

> Source: [Mobile ALOHA Project Page](https://mobile-aloha.github.io/)

| Item | Spec |
|------|------|
| Footprint | 90 cm x 135 cm |
| Arm Reach Height | 65 cm ~ 200 cm |
| Arm Forward Extension | 100 cm (from base) |
| Total Weight | 75 kg |
| Pull Force | 100 N @ 1.5 m height |
| Movement Speed | Up to 1.6 m/s |

---

## Differences from Static ALOHA

| Item | ALOHA (Static) | Mobile ALOHA |
|------|----------------|--------------|
| Base | Fixed table | AgileX Tracer (mobile) |
| Action Dimensions | 14-DoF (arms+grippers) | 16-DoF (arms+grippers + base velocity) |
| Task Range | Tabletop manipulation | Full indoor environment |
| Teleop Method | Hand-operate leader arms | Whole-body teleop (walk while manipulating) |
| Cost | ~$20,000 | ~$32,000 |
| Load | Fixed | Self-balancing (using battery weight) |

### Action Space Expansion

> DoF Explanation: Each ViperX 300 arm is 6-DoF (arm) + 1-DoF (gripper) = 7-DoF

```
ALOHA: 14-DoF joint positions
       [arm1(6) + gripper1(1) + arm2(6) + gripper2(1)]

Mobile ALOHA: 16-DoF
       [arm1(6) + gripper1(1) + arm2(6) + gripper2(1) + base_linear_vel(1) + base_angular_vel(1)]
```

This design allows existing imitation learning algorithms to be applied with minimal modification.

---

## Co-Training: Core Technique

### Motivation

Mobile bimanual manipulation datasets are sparse, but static bimanual manipulation data is abundant. Co-training improves performance by training these two types of data together.

### Method

```
Training Data = Mobile ALOHA demos (50) + Static ALOHA datasets (existing)

Mobile data: Full 16-DoF actions
Static data: 14-DoF actions (base velocity padded with 0)
```

### Effect

| Condition | Average Success Rate |
|-----------|---------------------|
| Mobile data only | ~50% |
| With co-training | **~84%** |
| Improvement | **+34%p** |

---

## Demonstrated Tasks

> Source: [arXiv:2401.02117](https://arxiv.org/abs/2401.02117) Table 1

### Success Rates (50 demos, with co-training)

| Task | Success Rate | Description |
|------|--------------|-------------|
| Wipe Wine | **95%** | Wipe wine spill |
| Call Elevator | **95%** | Call elevator and board |
| Use Cabinet | **85%** | Open wall cabinet and store pot |
| High Five | **85%** | High five |
| Rinse Pan | **80%** | Rinse pan at kitchen sink |
| Push Chairs | **80%** | Organize chairs |
| Cook Shrimp | **40%** | Stir-fry shrimp (75 sec, only 20 demos used) |

### Task Categories

**Cooking**
- Stir-fry and serve shrimp
- Handle pots/pans
- Rinse at sink

**Cleaning/Organizing**
- Wipe wine spill
- Push chairs to organize
- Store items in cabinet
- Use vacuum cleaner

**Navigation + Manipulation**
- Press elevator button and board
- Transport items between rooms

**Interaction**
- High five
- Hand items to people

---

## Technical Details

### Supported Algorithms

| Algorithm | Description |
|-----------|-------------|
| [ACT](../../models/act) | Action Chunking Transformer |
| Diffusion Policy | Diffusion-based action generation |
| VINN | Visual Imitation through Nearest Neighbors |

### Simulation Environments

- Transfer Cube
- Bimanual Insertion

### Training Settings

| Item | Value |
|------|-------|
| Number of Demos | 50/task |
| Control Frequency | 50 Hz |
| Image Resolution | 640 x 480 |
| Number of Cameras | 3 (2 wrist + 1 front) |

---

## Open-Source Resources

### Public Materials

| Resource | Link |
|----------|------|
| Paper | [arXiv:2401.02117](https://arxiv.org/abs/2401.02117) |
| Project Page | [mobile-aloha.github.io](https://mobile-aloha.github.io/) |
| GitHub (Hardware) | [mobile-aloha](https://github.com/MarkFzp/mobile-aloha) |
| GitHub (Algorithms) | [act-plus-plus](https://github.com/MarkFzp/act-plus-plus) |
| Assembly Tutorial | Included in project page |
| 3D Printing Files | Included in GitHub |

### Tutorial Contents

- 3D printing guide
- Assembly sequence
- Software installation
- Calibration methods
- Teleoperation usage

---

## Research Team and Support

### Authors

| Name | Role |
|------|------|
| [Zipeng Fu](https://zipengfu.github.io/) | Co-first author |
| [Tony Z. Zhao](../people/tony-zhao) | Co-first author |
| [Chelsea Finn](../people/chelsea-finn) | Advisor |

### Support

- Stanford Robotics Center
- Steve Cousins
- Stanford IRIS Lab members

---

## Subsequent Developments

### ALOHA 2 (Google DeepMind, 2024)

Google DeepMind announced improved hardware version:
- Improved rigidity and precision
- Improved gripper design
- Better cable management

### Commercialization

Trossen Robotics sells ALOHA kits:
- ALOHA Solo
- ALOHA Bimanual Kit
- Mobile ALOHA compatible parts

---

## Significance and Impact

### Academic Impact

- **Co-training Effect Proven**: Performance improvement possible with related task data
- **Low-cost Research Platform**: High-quality research possible at $32K
- **Reproducibility**: Complete open-source enables replication in labs worldwide

### Industrial Implications

> "Mobile ALOHA has demonstrated something unique: relatively cheap robot hardware can solve really complex problems." - Lerrel Pinto, NYU

- Demonstrated feasibility of household robots
- Complex tasks possible even with low-cost hardware
- Dramatically reduced data collection costs

---

## References

### Paper

```bibtex
@article{fu2024mobile,
  author    = {Fu, Zipeng and Zhao, Tony Z. and Finn, Chelsea},
  title     = {Mobile ALOHA: Learning Bimanual Mobile Manipulation
               with Low-Cost Whole-Body Teleoperation},
  journal   = {arXiv preprint arXiv:2401.02117},
  year      = {2024},
  note      = {Presented at CoRL 2024}
}
```

### Links

- [Mobile ALOHA Project Page](https://mobile-aloha.github.io/)
- [arXiv Paper](https://arxiv.org/abs/2401.02117)
- [GitHub - Hardware](https://github.com/MarkFzp/mobile-aloha)
- [GitHub - ACT++](https://github.com/MarkFzp/act-plus-plus)
- [Stanford News](https://news.stanford.edu/stories/2024/04/mobile-aloha-robot-is-a-quick-learner)
- [MIT Technology Review](https://www.technologyreview.com/2024/01/15/1086592/watch-this-robot-cook-shrimp-and-clean-autonomously/)

---

## See Also

- [Hardware List](../index)
- [ALOHA (Static)](../arms/aloha)
- [ACT](../../models/act)
- [Tony Zhao](../../people/tony-zhao)
- [Chelsea Finn](../../people/chelsea-finn)
