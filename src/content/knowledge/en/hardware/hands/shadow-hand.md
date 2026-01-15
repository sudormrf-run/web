---
title: Shadow Dexterous Hand
description: High-DoF tendon-driven dexterous robot hand for research
tags: [shadow, hand, dexterous, tendon, tactile, manipulation, research, uk]
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

# Shadow Dexterous Hand

> Home > Hardware > Hands > Shadow Hand

<!-- Image pending: ![Shadow Hand](../../assets/hardware/hands/shadow-hand.png) -->

---

## Overview

| Item | Spec | Source |
|------|------|--------|
| Manufacturer | Shadow Robot Company (London, UK) | [^1] |
| Founded | 1987 | [^1] |
| Commercialized | 2005 | [^2] |
| DoF | 20 degrees of freedom, 24 movements | [^3] |
| Motors | 20 | [^3] |
| Sensors | 129+ (up to 1kHz sampling) | [^3] |
| Drive Method | Tendon-driven | [^3] |
| Communication | EtherCAT (100Mbps) | [^3] |
| Software | Full ROS integration | [^3] |
| Price | Approximately 110,000 euros (including installation, training, support, as of 2023) | [^4] |

---

## Key Significance

**Shadow Dexterous Hand is one of the most widely adopted standard platforms in the dexterous manipulation research field.** [^2]

- **Highest Level DoF**: One of the few robot hands on the market offering 24 movements and 20 DoF [^3]
- **Human-Hand-Like Structure**: High flexibility with each finger able to move laterally independently [^3]
- **Long Track Record**: Since commercialization in 2005, adopted by major research institutions including NASA, OpenAI, Google DeepMind, and Carnegie Mellon [^2]
- **Major Platform for AI/ML Research**: Widely used in reinforcement learning-based dexterous manipulation research [^5][^6]

---

## Design Philosophy

### Biomimetic Design

The core philosophy of Shadow Hand is **faithfully reproducing the anatomical structure of the human hand**. [^3]

**Tendon-Driven System**
- Transmits force through tendons like the human musculoskeletal system
- Implements natural and flexible movement
- Enables independent yet coordinated control of each joint
- Continuous force transmission from wrist to fingertips

**Sensor Architecture**
- 129+ sensors mimic human hand proprioception and tactile sense [^3]
- Provides various sensory information including position, force, and temperature
- High-speed sampling up to 1kHz enables real-time control

**Finger Structure**
- 5 fingers (including thumb, 4 fingers + opposable thumb)
- Independent adduct/abduct movement for each finger
- Joint structure similar to human

---

## Detailed Specs

### Drive System [^3]

| Item | Specification |
|------|---------------|
| Motor Count | 20 |
| Torque Loop Frequency | 5kHz (inside motor unit) |
| Control Method | Position control (host PC), ROS-based custom control possible |

### Sensor System [^3]

| Sensor Type | Description |
|-------------|-------------|
| PST (Pressure Sensor Tactiles) | Standard equipped, fingertip pressure detection, 11-bit ADC |
| BioTac Sensors (option) | SynTouch LLC partnership, force/micro-vibration/temperature detection [^7] |
| Joint Position Sensors | Detects each joint position |
| Force Sensors | Measures tendon tension |

**BioTac Sensor Details** [^7]
- 24 taxels (tactile elements)
- 100Hz sampling
- Overall fluid pressure and temperature change detection
- Form and mechanical properties similar to human fingertips

### Communication and Interface [^3]

- **EtherCAT Bus**: 100Mbps Ethernet-based industrial communication
- **Full ROS Integration**: ROS nodes and messages provided
- **Self-Contained System**: All actuation and sensing built into hand and forearm

---

## Product Lineup

### Shadow Dexterous Hand E Series [^3]

**Standard Research Model**

- 24 movements, 20 DoF
- 5-finger structure
- 129+ sensors
- ROS integration
- Price: Approximately 110,000 euros (approximately $180,000 with BioTac, as of 2023) [^4]

### Shadow DEX-EE Series [^8]

**For Long-Duration Reinforcement Learning Experiments (Developed in collaboration with Google DeepMind)**

DEX-EE was developed over 5 years at Google DeepMind's request, a **next-generation hand optimized for reinforcement learning experiments**. [^8]

| Item | Spec |
|------|------|
| Finger Count | 3 (robust 3-finger design) |
| Size | Approximately 50% larger than human hand |
| Motors | 15 maxon DCX16 DC motors |
| Durability Testing | 1,000+ hours |

**Sensor System (per finger)** [^8]
- 5 tendon force sensors
- 5 motor encoders
- 4 joint angle sensors
- 3 IMUs (Inertial Measurement Units)
- 36 taxels (middle/proximal phalanx tactile sensors)
- 50 FPS 640x480 stereo video (distal phalanx tactile sensor)

**Design Features**
- Withstands repeated impacts and aggressive use during policy learning
- Modular structure supports alternative finger layouts
- Smooth torque control at all joints
- Long-duration continuous experiments without hardware failure

---

## Major Research Cases

### 1. OpenAI: Learning In-Hand Object Manipulation (2018)

**Paper**: "Learning Dexterous In-Hand Manipulation" [^5]

- Trained with reinforcement learning in simulation, then transferred to real Shadow Hand
- Important research in Sim-to-Real Transfer field
- Achieved 13 consecutive rotations median in object reorientation task
- Natural behaviors like finger gaiting, multi-finger coordination emerged without human demonstration

### 2. OpenAI: Solving Rubik's Cube with Robot Hand (2019)

**Paper**: "Solving Rubik's Cube with a Robot Hand" [^6]

- **Solving Rubik's Cube with single robot hand** - unprecedented complexity manipulation
- Developed Automatic Domain Randomization (ADR) algorithm
- Training scale: 64 NVIDIA V100 GPUs, 920 worker machines
- Cumulative experience: approximately 13,000 years (similar scale to OpenAI Five)
- Development period: May 2017 ~ October 2019 (approximately 2.5 years)

### 3. Google DeepMind: DEX-EE Development Collaboration [^8]

- 5-year collaboration with Shadow Robot to develop DEX-EE
- Solved hardware durability issues in reinforcement learning experiments
- Achieved both rich sensor data and robustness

### 4. Other Major Research

**Grasping in the Dark (ICRA 2021)** [^9]
- Grasping objects of various shapes/sizes/weights using only BioTac tactile sensors
- Closed-loop grasping with classical control without prior knowledge

**Google Brain: Deep Dynamics Models** [^10]
- Multi-object manipulation learning with only 4 hours of real robot data
- Task planning based on DDM (Deep Dynamics Models)

---

## Limitations and Considerations

| Limitation | Description |
|------------|-------------|
| High Price | Over 110,000 euros (research budget acquisition required) [^4] |
| Maintenance | Regular management of tendon-based system required |
| Learning Curve | Initial setup and operation learning needed for complex system |
| Experiment Environment | Pre-DEX-EE models vulnerable to long-duration RL experiments |

---

## Shadow Robot Company Introduction

| Item | Details | Source |
|------|---------|--------|
| Founded | 1987 (Richard Greenhill, started in London attic) | [^1] |
| Official Registration | 1997 (triggered by robot leg component commission) | [^2] |
| Headquarters | London, UK | [^1] |
| Branches | Bristol, Madrid | [^1] |
| Notable | One of the UK's longest-running robot companies | [^1] |

**Major Customers**: NASA, ESA, OpenAI, Google DeepMind, Carnegie Mellon, UCL, University of Bielefeld, GSK, etc. (per official site and Wikipedia) [^1][^2]

---

## See Also

- [Hardware List](../index)
- [LEAP Hand](leap-hand) - Low-cost open-source alternative to Shadow Hand
- [Allegro Hand](allegro)
- [GEX Series](gex)

---

## References

### Official Sites

- [Shadow Robot Company Official Site](https://shadowrobot.com/) [^1]
- [Dexterous Hand Series Product Page](https://shadowrobot.com/dexterous-hand-series/) [^3]
- [DEX-EE Series Product Page](https://shadowrobot.com/dex-ee_series/) [^8]
- [Technical Specification PDF (Updated June 2024)](https://www.shadowrobot.com/wp-content/uploads/2024/06/20240610-UPDATED-shadow_dexterous_hand_e_technical_specification.pdf)

### Core Papers

- Akkaya et al. (2019). "Solving Rubik's Cube with a Robot Hand." arXiv:1910.07113. [Paper Link](https://arxiv.org/abs/1910.07113) [^6]
- Andrychowicz et al. (2020). "Learning Dexterous In-Hand Manipulation." The International Journal of Robotics Research. [arXiv:1808.00177](https://arxiv.org/abs/1808.00177) [^5]

### Related Materials

- [OpenAI: Learning Dexterity Blog](https://openai.com/index/learning-dexterity/)
- [IEEE Spectrum: New Shadow Hand Can Take a Beating](https://spectrum.ieee.org/robot-hand-shadow-robot-company)
- [Shadow Robot Blog: How Much Does a Robot Hand Cost?](https://shadowrobot.com/blog/how-much-does-a-robot-hand-cost/) [^4]

---

## Footnotes

[^1]: Shadow Robot Company Official Site (https://shadowrobot.com/)
[^2]: Shadow Hand Wikipedia and company history (https://en.wikipedia.org/wiki/Shadow_Hand)
[^3]: Shadow Dexterous Hand Technical Specification (https://www.shadowrobot.com/wp-content/uploads/2024/06/20240610-UPDATED-shadow_dexterous_hand_e_technical_specification.pdf)
[^4]: Shadow Robot Blog: How Much Does a Robot Hand Cost? (https://shadowrobot.com/blog/how-much-does-a-robot-hand-cost/)
[^5]: Andrychowicz et al. (2020). "Learning Dexterous In-Hand Manipulation." arXiv:1808.00177
[^6]: Akkaya et al. (2019). "Solving Rubik's Cube with a Robot Hand." arXiv:1910.07113
[^7]: SynTouch BioTac sensor integration information (https://shadowrobot.com/news/company-news/biotac-sensors/)
[^8]: Shadow DEX-EE Series Official Page (https://shadowrobot.com/dex-ee_series/)
[^9]: "Grasping in the Dark: Compliant Grasping using Shadow Dexterous Hand and BioTac Tactile Sensor" (ICRA 2021)
[^10]: Google Brain Deep Dynamics Models research (https://shadowrobot.com/blog/machine-learning-innovation/)
