---
title: LEAP Hand
description: Low-cost 3D printed dexterous hand - Human-like hand for robot learning developed at CMU
tags: [leap, hand, low-cost, 3d-print, dexterous, cmu, open-source, dynamixel, vla]
category: hardware
created: 2024-01-09

# Authorship
createdBy:
  name: Jong Hyun Park
  email: jhpark@sudormrf.run
lastEditedBy:
  name: Jong Hyun Park
  email: jhpark@sudormrf.run
lastEditedAt: 2026-01-15
---

# LEAP Hand

> Home > Hardware > Hands > LEAP Hand

<!-- Image needed: Download from LEAP Hand official site and add -->
<!-- Image pending: ![LEAP Hand](../../assets/hardware/hands/leap-hand.png) -->

---

## Overview

**LEAP Hand** (Low-cost, Efficient, and AnthroPomorphic Hand) is an open-source dexterous robot hand developed by researchers Kenneth Shaw, Ananye Agarwal, and Deepak Pathak at Carnegie Mellon University (CMU). Presented at RSS 2023, it was designed to increase accessibility for robot learning research.

### LEAP Hand V1 Specs (RSS 2023)

| Item | Spec | Source |
|------|------|--------|
| Degrees of Freedom (DoF) | 16 DoF (4 DoF per finger) | [Shaw et al., 2023] |
| Motors | Dynamixel XC330 (Full) / XL330 (Lite) | [ROBOTIS] |
| Price | ~$2,000 (Full) / ~$700 (Lite) | [v1.leaphand.com] |
| Assembly Time | Under 4 hours | [Shaw et al., 2023] |
| Weight | 595g (4-finger configuration) | [Shaw et al., 2023] |
| Size | Approximately 30% larger than human hand | [Shaw et al., 2023] |
| Grip Strength | 19.5 N (Pull-out Force Test) | [Shaw et al., 2023] |
| Cost Comparison | 1/8 of Allegro Hand, 1/50 of Shadow Hand | [Shaw et al., 2023] |

> **Note**: Specs above are for LEAP Hand V1. See separate section for V2 series.

---

## Key Significance

### Democratization of Dexterous Manipulation

The greatest significance of LEAP Hand is the **democratization of high-performance dexterous manipulation research**.

Problems with existing dexterous hands:
- **Shadow Hand**: At $100,000+, only accessible to large research institutions
- **Allegro Hand**: At $16,000, still high barrier to entry
- High costs hindering progress in manipulation research

Value provided by LEAP Hand:
- Provides equal or better performance at **$2,000**
- Assemblable with only a **3D printer** and **driver**
- Enables researchers worldwide to start dexterous manipulation research
- Also usable for educational purposes (Lite version $700)

> "LEAP Hand significantly outperforms its closest competitor Allegro Hand in all experiments while being 1/8th of the cost."
> — [Shaw et al., RSS 2023](https://www.roboticsproceedings.org/rss19/p089.pdf)

---

## Design Philosophy

### 1. Anthropomorphic Kinematics

LEAP Hand adopted a kinematic design that mimics the anatomical structure of the human hand while transcending it.

**Finger Structure (4 DoF per finger):**
- **MCP-1**: Flexion/Extension
- **MCP-2**: Adduction/Abduction
- **PIP**: Proximal interphalangeal joint
- **DIP**: Distal interphalangeal joint

**Key Innovation - Universal Abduction-Adduction Mechanism:**
- Human hands can only move fingers laterally when spread
- LEAP Hand maintains all degrees of freedom **regardless of finger position**
- Motors placed at MCP joints ensure maximum flexibility in any pose

### 2. Strength & Durability

Performance metrics reported in RSS 2023 paper:

- Can support 2kg weight on single fingertip for over 1 hour [Shaw et al., 2023, Section V-A]
- Joint angle error under 0.05 radians during repetitive motion [Shaw et al., 2023, Section V-B]
- No overheating during long-term high-torque output
- Power density: 1.045 N×DOF/(cm²) [Shaw et al., 2023, Table II]

### 3. Manufacturing Accessibility

| Manufacturing Element | Details |
|----------------------|---------|
| 3D Printer | Can use Ender 3 (approx. $200) |
| Materials | PLA plastic + Ninjaflex (fingertips) |
| Print Time | All parts under 24 hours |
| Additional Parts | Robotis reinforced plastic brackets |

---

## Assembly Guide

### Required Equipment

1. **3D Printer**: Direct drive recommended (e.g., Ender 3 S1 Pro)
2. **Filament**: PLA (structure) + TPU/Ninjaflex (fingertips)
3. **Driver**: Basic hand tools
4. **Dynamixel Motor Set**: XC330 (Full) or XL330 (Lite)

### Assembly Steps (approximately 4 hours)

1. **Print Parts** (24 hours, prepare in advance)
   - Use Cura slicer Regular Quality settings
   - Print all STL files

2. **Palm Assembly** (~1 hour)
   - Install MCP motor mounts
   - Wire routing

3. **Finger Assembly** (~2 hours)
   - Assemble 4 joints per finger
   - Connect Dynamixel motors
   - Attach flexible tips

4. **Integration and Testing** (~1 hour)
   - Complete assembly
   - Set motor IDs
   - Test API connection

### Software Setup

**Installation (install directly from GitHub):**

```bash
# Clone LEAP Hand API repository
git clone https://github.com/leap-hand/LEAP_Hand_API.git
cd LEAP_Hand_API

# Install Python dependencies (see python folder in repository)
cd python
pip install -r requirements.txt
```

**Basic Usage Example:**

```python
# Official API example (see main.py)
# Check port with Dynamixel Wizard and configure

from leap_hand import LeapNode
import numpy as np

# Port configuration (varies by system)
leap = LeapNode(port="/dev/ttyUSB0")

# Read joint angles
current_position = leap.read_pos()  # 16 joint positions (radians)

# Set target position (16 DoF)
target_angles = np.zeros(16)  # Home position
leap.set_allegro(target_angles)
```

> **Note**: Above code is a conceptual example. See examples in `python/` folder of [official GitHub repository](https://github.com/leap-hand/LEAP_Hand_API) for exact API usage.

**Supported Environments:**
- Python, C++, ROS/ROS2
- Other languages also possible based on Dynamixel SDK
- Isaac Gym/Lab simulation environments provided

**When Using ROS:**

```bash
# Run LEAP Hand ROS node (leap_hand_ros package)
# Build with catkin in ros/ folder of repository
roslaunch leap_hand_ros example.launch
```

---

## VLA Research Applications

### Design Optimized for Robot Learning

LEAP Hand is not just hardware, but a **platform designed for robot learning research**.

#### 1. Teleoperation Data Collection

- Software provided for real-time mirroring of human hand movements
- Enables collection of high-quality demo data for VLA model training
- Skills learned from YouTube videos can be transferred to actual robots

#### 2. Simulation-to-Real Transfer (Sim-to-Real)

- Tuned Isaac Gym/Lab simulation environments provided
- URDF models published for compatibility with various simulators
- Direct transfer to actual hardware after simulation training

#### 3. Reinforcement Learning Experiments

| Input | Output | Frequency |
|-------|--------|-----------|
| Joint angles (16) | Target joint angles (16) | 20 Hz |

- Position, Current, Current-based Position, Velocity control modes supported
- Maximum current limit adjustable (300mA → 550mA)

#### 4. VLA Research Cases

- **Various Object Manipulation**: Soup cans, mustard bottles, mugs, baseballs, drills, etc.
- **Complex Task Execution**: Opening drawers, stacking cups, rotating boxes
- **Multi-task Learning**: Performing multiple manipulation tasks with single policy

---

## Version Comparison: V1 vs V2 Series

> **Important**: V1 and V2 are separate product lines. V2 is not an "upgrade" of V1 but a product with different design philosophy.

| Item | V1 (2023)[^1] | V2 (2024)[^2] | V2 Advanced (2024)[^3] |
|------|---------------|---------------|------------------------|
| Price | ~$2,000 | ~$200 | ~$300 |
| DoF | 16 | 8 | 17 |
| Assembly Time | 4 hours | 2 hours | 3 hours |
| Structure | Traditional Rigid | Hybrid Rigid-Soft | Hybrid Rigid-Soft |
| Target | Research (high-performance) | Education/Demo | Research (high-compliance) |
| Official Site | [v1.leaphand.com](https://v1.leaphand.com) | [v2.leaphand.com](https://v2.leaphand.com) | [v2-adv.leaphand.com](https://v2-adv.leaphand.com) |

[^1]: Shaw et al., "LEAP Hand: Low-Cost, Efficient, and Anthropomorphic Hand for Robot Learning", RSS 2023
[^2]: Official V2 website (v2.leaphand.com)
[^3]: Official V2 Advanced website (v2-adv.leaphand.com)

### V2 Series Features

- **Hybrid Rigid-Soft Structure**: Combination of 3D printed flexible and rigid structures
- **High Compliance**: Natural adaptation on contact with objects
- **Dramatic Cost Reduction**: Approximately 1/10 price compared to V1
- **V2 Advanced**: Added actuated joints in palm (17 DoF), human-like MCP kinematics

> **Price Note**: Prices above are based on official site information as of 2024 and may change.

---

## References

### Papers

- Shaw, K., Agarwal, A., & Pathak, D. (2023). **LEAP Hand: Low-Cost, Efficient, and Anthropomorphic Hand for Robot Learning**. *Robotics: Science and Systems (RSS) 2023*.
  - [PDF](https://www.roboticsproceedings.org/rss19/p089.pdf)
  - [arXiv](https://arxiv.org/abs/2309.06440)

### Official Resources

- **Project Website**: [v1.leaphand.com](https://v1.leaphand.com) | [v2.leaphand.com](https://v2.leaphand.com)
- **GitHub**: [github.com/leap-hand](https://github.com/leap-hand/LEAP_Hand_API)
- **Parts Purchase**: [ROBOTIS LEAP Hand Bundle](https://www.robotis.us/leap-hand-bundle-xc330/)

### CMU Related

- [CMU News: Lending a Hand](https://www.cs.cmu.edu/news/2023/leap-hand)
- Kenneth Shaw Master's Thesis: [CMU-RI-TR-24-02](https://www.ri.cmu.edu/app/uploads/2024/05/RI_MSR_Thesis_kshaw_2023-1.pdf)

---

## See Also

- [Hardware List](../index)
- [GEX Series](gex)
- [Shadow Hand](shadow-hand)
