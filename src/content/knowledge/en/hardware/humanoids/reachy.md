---
title: Reachy 2
description: Pollen Robotics' open-source humanoid robot platform
tags: [reachy, pollen-robotics, humanoid, open-source, orbita, ros2, teleoperation, maxon, apache-2.0]
category: hardware
last_updated: 2025-01-09

# Authorship
createdBy:
  name: Jong Hyun Park
  email: jhpark@sudormrf.run
lastEditedBy:
  name: Jong Hyun Park
  email: jhpark@sudormrf.run
lastEditedAt: 2026-01-15
---

# Reachy 2

> Home > Hardware > Humanoids > Reachy 2

<!-- Image pending: ![Reachy 2](../../assets/hardware/humanoids/reachy.png) -->

---

## Overview

**Reachy 2** is a humanoid robot released in October 2024 by [Pollen Robotics](https://www.pollen-robotics.com/), headquartered in Bordeaux, France. **Software is fully open-source**, and some hardware designs are also public (see license structure). It was designed for Embodied AI research, human-robot interaction, and teleoperation, and was reportedly acquired by Hugging Face in April 2025. [^hf-acquisition]

| Item | Spec | Source |
|------|------|--------|
| Manufacturer | Pollen Robotics (Bordeaux, France) | [Official Site](https://www.pollen-robotics.com/about-us/) |
| Release | October 2024 (per reports) | [The Robot Report](https://www.therobotreport.com/pollen-robotics-debuts-reachy-2-humanoid-at-ces-2025/) |
| Total DoF | 18 (7-DoF arm x 2 + 3-DoF neck + 1-DoF antenna) | [Official Documentation](https://docs.pollen-robotics.com/) |
| Height | 136-166cm (adjustable) | [Datasheet](https://www.pollen-robotics.com/wp-content/uploads/2025/02/Reachy2-Dual-arms-with-mobile-base-Datasheet-1.pdf) |
| Weight | 50kg | [Datasheet](https://www.pollen-robotics.com/wp-content/uploads/2025/02/Reachy2-Dual-arms-with-mobile-base-Datasheet-1.pdf) |
| Arm Payload | 3kg (per arm) | [Datasheet](https://www.pollen-robotics.com/wp-content/uploads/2025/02/Reachy2-Dual-arms-with-mobile-base-Datasheet-1.pdf) |
| Price | $70,000 USD (per January 2025 report) | [Decrypt](https://decrypt.co/315184/the-worlds-first-factory-ready-open-source-humanoid-robot) |

---

## License Structure

Reachy 2 has different licenses applied depending on the component.

| Component | License | Verification Method |
|-----------|---------|---------------------|
| Python SDK (reachy2-sdk) | Apache 2.0 | [GitHub LICENSE file](https://github.com/pollen-robotics/reachy2-sdk) |
| ROS2 Core (reachy2_core) | Apache 2.0 | [GitHub LICENSE file](https://github.com/pollen-robotics/reachy2_core) |
| VR Teleoperation App | Apache 2.0 | [GitHub LICENSE file](https://github.com/pollen-robotics/Reachy2Teleoperation) |
| Orbita Firmware | Apache 2.0 | [GitHub LICENSE file](https://github.com/pollen-robotics/Orbita_3d_R1) |
| Orbita Electronics/Cable Design | CC-BY-SA-NC (unofficial forum info) | [Pollen Forum](https://forum.pollen-robotics.com/t/orbita-presentation/20) |
| URDF Model | Apache 2.0 | [GitHub (reachy2_core)](https://github.com/pollen-robotics/reachy2_core) |

> **Note**:
> - The CC-BY-SA-NC license for Orbita electronics/cable design was confirmed from community forum posts; verification with official license files needed
> - Check Orbita patent ([FR3141363A1](https://patents.google.com/patent/FR3141363A1)) for commercial hardware replication
> - License and disclosure scope of CAD files requires separate verification

---

## Key Significance

### Software Open-Source Humanoid Platform

The main significance of Reachy 2 is that it's a humanoid platform where the **software stack is completely open-source**. Hardware has some publicly released components like URDF models, but the entire hardware is not open-source.

1. **Software Open-Source**: Full ROS2-based software stack, Python SDK, and Unity VR app released under Apache 2.0 license [^ros2-discourse]
2. **Hardware Transparency**: URDF models and control interfaces public on GitHub (some hardware designs are limited)
3. **Research Institution Adoption**: According to Hugging Face blog, adopted by Cornell, Carnegie Mellon, CNRS, CEA, etc. [^hf-acquisition]
4. **Hugging Face Integration**: AI model training and deployment support through LeRobot framework integration

> "Pollen is the open-source hardware expert, and we (Hugging Face) are the open-source software experts. That complementarity was obvious." - Hugging Face Blog [^hf-acquisition]

---

## Orbita Actuator

Orbita is a patented technology self-developed by Pollen Robotics, the key component enabling Reachy's natural and flexible movements. [^orbita-medium]

### Orbita 3D (Neck, Wrist)

| Item | Spec | Source |
|------|------|--------|
| DoF | 3-DoF parallel mechanism | [Official Documentation](https://docs.pollen-robotics.com/hardware-guide/specifications/motors-actuators/) |
| Motors | Maxon DC brushless (40W x 3) | [Official Documentation](https://docs.pollen-robotics.com/hardware-guide/specifications/motors-actuators/) |
| Control | FOC (Field Oriented Control) | [Pollen Forum](https://forum.pollen-robotics.com/t/orbita-presentation/20) |
| Communication | EtherCAT | [Pollen Forum](https://forum.pollen-robotics.com/t/orbita-presentation/20) |
| Feature | Quaternion-based control (instead of Euler angles) | [Pollen Forum](https://forum.pollen-robotics.com/t/orbita-presentation/20) |

### Orbita 2D (Shoulder, Elbow)

| Item | Spec | Source |
|------|------|--------|
| DoF | 2-DoF parallel mechanism | [Official Documentation](https://docs.pollen-robotics.com/hardware-guide/specifications/motors-actuators/) |
| Motors | Maxon DC brushless (90-120W) | [Maxon Blog](https://www.maxongroup.com/en-us/knowledge-and-support/blog/reachy-2-the-open-source-humanoid-robot-257768) |
| Speed | 50rpm (nominal) | [Official Documentation](https://docs.pollen-robotics.com/hardware-guide/specifications/motors-actuators/) |

### Technical Innovation

- **Parallel Mechanism**: 3 concentric stage motor shafts simultaneously drive 3 discs
- **Compact Form Factor**: Miniaturized design placeable anywhere on the robot body
- **Patent**: [FR3141363A1](https://patents.google.com/patent/FR3141363A1) - Pollen Robotics stated this is the only patent filed for negotiations with industrial partners [^orbita-medium]

---

## Hardware

### Arms and Gripper

| Part | Spec | Source |
|------|------|--------|
| Arm Configuration | 7-DoF x 2, bio-inspired design with human proportions | [Datasheet](https://www.pollen-robotics.com/wp-content/uploads/2025/02/Reachy2-Dual-arms-with-mobile-base-Datasheet-1.pdf) |
| Motors | Maxon DC brushless (90-120W) | [Maxon Blog](https://www.maxongroup.com/en-us/knowledge-and-support/blog/reachy-2-the-open-source-humanoid-robot-257768) |
| Gripper | Torque-controlled parallel gripper | [Official Documentation](https://docs.pollen-robotics.com/) |
| Payload | 3kg/6.6lbs (per arm) | [Datasheet](https://www.pollen-robotics.com/wp-content/uploads/2025/02/Reachy2-Dual-arms-with-mobile-base-Datasheet-1.pdf) |

### Sensors and Vision

| Sensor | Spec | Source |
|--------|------|--------|
| Stereo Camera | IMX296 global shutter x 2 | [Humanoid.guide](https://humanoid.guide/product/reachy-2/) |
| Depth Camera | Orbbec Gemini 336 RGB-D (torso) | [Humanoid.guide](https://humanoid.guide/product/reachy-2/) |
| ToF Sensor | Luxonis OAK-FFC-ToF | [Humanoid.guide](https://humanoid.guide/product/reachy-2/) |
| LiDAR | RPLIDAR S2 (mobile base option) | [Datasheet](https://www.pollen-robotics.com/wp-content/uploads/2025/02/Reachy2-Dual-arms-with-mobile-base-Datasheet-1.pdf) |
| Audio | Spatial audio support | [Official Site](https://www.pollen-robotics.com/reachy/) |

### Configuration Options

Reachy 2 is available in 4 configurations:

| Configuration | Description |
|---------------|-------------|
| Single Arm + Fixed Base | Basic research use |
| Dual Arm + Fixed Base | Bimanual manipulation research |
| Single Arm + AMR Base | Mobile single manipulation |
| Dual Arm + AMR Base | Full mobile manipulation |

The mobile base features 3 omniwheels and multiple sensors. [^pollen-reachy]

---

## Software

### ROS2 Support

- **ROS2 Foxy** fully integrated [^ros2-discourse]
- `reachy2_core`: URDF, launch files, Gazebo simulation assets
- `reachy2_sdk_server`: gRPC-ROS2 bridge server
- Docker one-line installation support

### Python SDK

```python
# Installation
pip install reachy2-sdk

# Basic usage example
from reachy2_sdk import ReachySDK
reachy = ReachySDK(host='reachy.local')
reachy.head.look_at(x=0.5, y=0, z=0.4)
```

- Windows/Mac/Linux support
- Python >= 3.6
- Jupyter notebook examples provided

### VR Teleoperation

| Item | Spec | Source |
|------|------|--------|
| Platform | Unity LTS 2022.3 | [GitHub](https://github.com/pollen-robotics/Reachy2Teleoperation) |
| Supported HMD | Meta Quest 2, Quest 3 (Quest Link required) | [Official Documentation](https://docs.pollen-robotics.com/teleoperation/) |
| Latency | 125ms (glass-to-glass, per report) | [Humanoid.guide](https://humanoid.guide/product/reachy-2/) |
| Video Streaming | GStreamer-based | [GitHub](https://github.com/pollen-robotics/Reachy2Teleoperation) |
| Features | Stereo 3D vision, spatial audio, emotion expression (antenna) | [Official Documentation](https://docs.pollen-robotics.com/teleoperation/) |

VR teleoperation is ideal for remote manipulation research and AI data collection, allowing real-time control of the robot's arms, hands, and head.

---

## Version Comparison

| Item | Reachy 1 (2020) | Reachy 2 (2024) |
|------|-----------------|-----------------|
| Weight | 7kg | 50kg |
| Arm Payload | ~1kg | 3kg |
| Motors | DC motors | Maxon DC brushless (90-120W) |
| Actuators | Basic servos | Orbita 2D/3D parallel mechanism |
| Vision | 2 cameras (macro/wide) | IMX296 stereo + RGB-D + ToF |
| Gripper | Basic gripper | Torque-controlled parallel gripper |
| Software | ROS1 | ROS2 Foxy |
| Mobile Base | Limited | AMR option (omniwheel, LiDAR) |
| Awards | ANA XPrize 2nd place | - |

*Source: [ROBOTS Guide](https://robotsguide.com/robots/reachy), [Pollen Robotics](https://www.pollen-robotics.com/reachy/)*

### Major Improvements

1. **Enhanced Payload**: Increased to 3kg per arm for real task performance
2. **Orbita Actuators**: Maxon motor integration for more natural and precise movements
3. **Enhanced Sensing**: RGB-D, ToF sensor additions for improved depth perception
4. **Modular Design**: Easy alternative gripper and mobile base integration
5. **VR Teleoperation**: 125ms low-latency real-time remote manipulation

---

## Pollen Robotics Company Background

| Item | Information | Source |
|------|-------------|--------|
| Founded | 2016 | [PitchBook](https://pitchbook.com/profiles/company/472286-89) |
| Location | Bordeaux, France | [Official Site](https://www.pollen-robotics.com/about-us/) |
| Founders | Pierre Rouanet, Matthieu Lapeyre (former Inria Flowers team) | [Official Site](https://www.pollen-robotics.com/about-us/) |
| Employees | ~23 (Tracxn 2025 basis) | [Tracxn](https://tracxn.com/d/companies/pollen-robotics/__xh3z_zYG-k1xa3vjhpsvnYRz3_ga-k01M3RHO1_oxx0) |
| Total Investment | $2.61M (PitchBook report) | [PitchBook](https://pitchbook.com/profiles/company/472286-89) |
| Acquisition | April 2025 by Hugging Face (reported) | [Hugging Face Blog](https://huggingface.co/blog/hugging-face-pollen-robotics-acquisition) |

### History

- **2016**: Pollen Robotics founded
- **2017**: Poppy (first 3D-printed open-source humanoid) released
- **2020**: Reachy 1 released, ANA XPrize 2nd place
- **2024**: Reachy 2 released (October)
- **2025**: Reachy 2 debuted at CES 2025, acquired by Hugging Face (April, per reports)

*Source: [Hugging Face Blog](https://huggingface.co/blog/hugging-face-pollen-robotics-acquisition), [PitchBook](https://pitchbook.com/profiles/company/472286-89)*

### Philosophy

> "Technology should be open, ethical, and accessible. The company must work for people and the world, not the other way around."

*Source: [Pollen Robotics About Us](https://www.pollen-robotics.com/about-us/)*

---

## Adoption Status

According to Hugging Face blog, the Reachy platform has been deployed and used in over 20 countries with hundreds of units. [^hf-acquisition]

**Major Institutions** (per Hugging Face blog and The Robot Report):
- Hugging Face
- Accenture
- CEA (French Atomic Energy Commission)
- CNRS (French National Centre for Scientific Research)
- Ecole Polytechnique
- Cornell University
- Carnegie Mellon University

*Source: [Hugging Face Blog](https://huggingface.co/blog/hugging-face-pollen-robotics-acquisition), [The Robot Report](https://www.therobotreport.com/pollen-robotics-debuts-reachy-2-humanoid-at-ces-2025/)*

---

## References

### Official Materials
- [Pollen Robotics Official Site](https://www.pollen-robotics.com/)
- [Reachy 2 Product Page](https://www.pollen-robotics.com/reachy/)
- [Reachy 2 Official Documentation](https://docs.pollen-robotics.com/)
- [Reachy 2 Datasheet (PDF)](https://www.pollen-robotics.com/wp-content/uploads/2025/02/Reachy2-Dual-arms-with-mobile-base-Datasheet-1.pdf)

### GitHub Repositories
- [reachy2-sdk](https://github.com/pollen-robotics/reachy2-sdk) - Python SDK
- [reachy2_core](https://github.com/pollen-robotics/reachy2_core) - ROS2 core packages and URDF
- [reachy2_sdk_server](https://github.com/pollen-robotics/reachy2_sdk_server) - SDK server
- [Reachy2Teleoperation](https://github.com/pollen-robotics/Reachy2Teleoperation) - Unity VR app
- [Orbita_3d_R1](https://github.com/pollen-robotics/Orbita_3d_R1) - Orbita actuator

### Technical Materials
- [Orbita Patent (FR3141363A1)](https://patents.google.com/patent/FR3141363A1)
- [Orbita Introduction (Medium)](https://medium.com/pollen-robotics/orbita-is-turning-heads-literally-d10d378550e2)
- [Maxon Motor Integration Case](https://www.maxongroup.com/en-us/knowledge-and-support/blog/reachy-2-the-open-source-humanoid-robot-257768)
- [Pollen Community Forum - Orbita Presentation](https://forum.pollen-robotics.com/t/orbita-presentation/20)

### News and Reviews
- [Hugging Face's Pollen Robotics Acquisition](https://huggingface.co/blog/hugging-face-pollen-robotics-acquisition)
- [CES 2025 Reachy 2 Announcement (The Robot Report)](https://www.therobotreport.com/pollen-robotics-debuts-reachy-2-humanoid-at-ces-2025/)
- [ROS Discourse - Reachy 2 ROS2 Stack Release](https://discourse.openrobotics.org/t/reachy-2-humanoid-full-ros-2-dev-stack-now-open-source-one-line-docker-sim-python-sdk/43362)

---

## Footnotes

[^hf-acquisition]: Hugging Face. (2025, April). "Hugging Face to sell open-source robots thanks to Pollen Robotics acquisition." https://huggingface.co/blog/hugging-face-pollen-robotics-acquisition
[^ros2-discourse]: Open Robotics Discourse. (2024). "Reachy 2 humanoid – full ROS 2 dev stack now open-source." https://discourse.openrobotics.org/t/reachy-2-humanoid-full-ros-2-dev-stack-now-open-source-one-line-docker-sim-python-sdk/43362
[^orbita-medium]: Pollen Robotics. "Orbita: A 3D joint for robotic head motion realism." Medium. https://medium.com/pollen-robotics/orbita-is-turning-heads-literally-d10d378550e2
[^pollen-reachy]: Pollen Robotics. "Reachy 2 - The first open-source humanoid robot." https://www.pollen-robotics.com/reachy/

---

## See Also

- [Hardware List](../index)
- [Reachy Mini](../misc/reachy-mini)
