---
title: UFACTORY xArm Series
description: Accessible research/education robot arms - Cost-effective alternative to Franka
tags: [xarm, ufactory, cobot, research, arm, vla, open-x-embodiment, lerobot]
category: hardware
last_verified: 2025-01
---

# UFACTORY xArm Series

> Home > Hardware > Arms > xArm

<!-- Image pending: ![xArm](../../assets/hardware/arms/xarm.png) -->

> **Note**: Prices and specifications may vary by region and time. Please refer to the [UFACTORY official site](https://www.ufactory.us/) for the latest information.

---

## Overview

| Item | Details |
|------|---------|
| Manufacturer | UFACTORY (Shenzhen, China) |
| Year Founded | 2013 [^1] |
| Type | Collaborative Robot |
| Features | Cost-effectiveness, Research accessibility, Open-source SDK |
| Global Sales | 80+ countries (per official announcement) [^1] |

---

## Company Introduction

UFACTORY is a robot manufacturing startup founded in 2013 in Shenzhen, China [^1]. They gained recognition by launching **uArm**, the world's first desktop open-source robot arm, on Kickstarter, and the uArm Swift PRO raised over $1 million in crowdfunding platforms [^2].

Their core strategy is to leverage Shenzhen's manufacturing ecosystem to offer industrial-grade technology at accessible prices for the research/education market. Investors include **Tencent AI Accelerator** and **Sinovation Ventures** [^2].

---

## Key Significance

### Democratization of Research Accessibility

The xArm series is a product line that significantly lowered the barrier to entry for robot research:

1. **Price Competitiveness**: Provides similar specifications at approximately 1/2 to 1/3 the price of existing research robots [^3]
2. **Research-Grade Precision**: Capable of performing research-level manipulation tasks based on repeatability specifications
3. **7-Axis Option**: xArm 7 offers flexibility similar to the human arm with 7 degrees of freedom
4. **Complete SDK Support**: Official Python, C++, ROS/ROS2 support [^4]

### Comparison with Franka

| Item | Franka Research 3 | xArm 7 |
|------|-------------------|--------|
| Price Range | High (research institution quote) | Mid-low (~$10,000s) [^3] |
| Payload | 3kg [^5] | 3.5kg [^3] |
| Repeatability | 0.1mm [^5] | 0.1mm [^3] |
| Degrees of Freedom | 7 DoF | 7 DoF |
| Torque Sensing | Built into all joints [^5] | Optional (external sensor) |
| ROS Support | ROS, ROS 2 | ROS, ROS 2 [^4] |

> **Note**: Franka Emika filed for insolvency in 2023 and was acquired by Agile Robots. Currently operating as Franka Robotics and support status may change. Check official channels for latest information.

Franka has advantages in hardware features like all-joint torque sensing, but xArm is being used as a research alternative due to accessible pricing and stable support.

---

## Product Lineup

> Specifications below are based on UFACTORY official materials. For accurate specifications, please refer to the [official product page](https://www.ufactory.us/).

| Model | Axes | Payload | Reach | Repeatability | Max Speed | Weight | Price (USD) |
|-------|------|---------|-------|---------------|-----------|--------|-------------|
| **Lite 6** | 6 | 600g | 440mm | 0.5mm | 500mm/s | ~7kg | $2,999~ [^6] |
| **xArm 5** | 5 | 3kg | 700mm | 0.1mm | 330mm/s | ~11kg | $5,000~ [^3] |
| **xArm 6** | 6 | 5kg | 700mm | 0.1mm | 1m/s | ~12kg | $8,000~ [^3] |
| **xArm 7** | 7 | 3.5kg | 700mm | 0.1mm | 1m/s | ~14kg | $10,000~ [^3] |
| **UFACTORY 850** | 6 | 5kg | 850mm | 0.02mm | 1m/s | ~20kg | $8,999~ [^7] |

### Model-Specific Features

#### Lite 6
- **Entry/Education**: Start robot research at the lowest price
- **Lightweight Design**: Easy to move and install
- **Integrated Control Box**: Space-saving design
- **Suitable For**: Lab automation, education, touchscreen testing

#### xArm 5
- **5-Axis Entry Model**: Entry version of industrial robots
- **3kg Payload**: Can perform most research manipulation tasks
- **Value**: Most economical full-size model in the series

#### xArm 6
- **6-Axis Standard Model**: Most versatile choice
- **5kg Payload**: Highest payload in the series
- **1m/s Speed**: Fast task execution

#### xArm 7
- **7-Axis Premium Model**: Human arm-like degrees of freedom
- **Redundant Joint**: Advantageous for obstacle avoidance, singularity avoidance
- **AI/CV Research Optimized**: Ideal for VLA model training

#### UFACTORY 850
- **Latest Flagship Model**: Extended workspace
- **Extended Reach**: 850mm for wider work area
- **Highest Precision**: Top level in the series (see specifications table above) [^7]
- **Industrial-Grade Harmonic Drive**: 24/7 operation design
- **DC/AC Options**: Supports both mobile platforms (DC) and fixed installation (AC)

### Common Features

- **Carbon Fiber + Aluminum Structure**: Lightweight design
- **Industrial Harmonic Drives**: Durability and precision
- **Multi-turn Absolute Encoders**: Precise position control
- **Web-based UFACTORY Studio**: Windows, macOS, Ubuntu support
- **Blockly-based Visual Programming**: Control robots without coding

---

## Software and SDK

### Official SDKs

| SDK | Description | Link |
|-----|-------------|------|
| **xArm-Python-SDK** | Python-based control API | [GitHub](https://github.com/xArm-Developer/xArm-Python-SDK) |
| **xArm-CPLUS-SDK** | C++-based control API | [GitHub](https://github.com/xArm-Developer/xArm-CPLUS-SDK) |
| **xarm_ros** | ROS 1 package | [GitHub](https://github.com/xArm-Developer/xarm_ros) |
| **xarm_ros2** | ROS 2 package (Gazebo, MoveIt support) | [GitHub](https://github.com/xArm-Developer/xarm_ros2) |

### Code Example

```python
from xarm.wrapper import XArmAPI

arm = None  # Initialize for cleanup on connection failure

try:
    # Connect to robot (modify IP address for your environment)
    arm = XArmAPI('192.168.1.113')  # or serial: 'COM5'

    # Initialize
    arm.motion_enable(enable=True)
    arm.set_mode(0)
    arm.set_state(0)

    # Move to position (units: mm, degrees)
    arm.set_position(x=300, y=0, z=200, roll=180, pitch=0, yaw=0)

except Exception as e:
    print(f"Error: {e}")
    if arm and arm.connected:
        arm.emergency_stop()  # Emergency stop

finally:
    # Cleanup: only perform if connected
    if arm and arm.connected:
        arm.motion_enable(enable=False)
        arm.disconnect()
```

> **Caution**: When controlling real robots, be familiar with safety procedures and always keep the emergency stop button accessible. See [UFACTORY documentation](https://docs.ufactory.cc/) for detailed safety guides.

### ROS 2 Support Features

- MoveIt 2 integration
- Gazebo simulation
- Velocity control mode (firmware 1.6.8+)
- RealSense D435i integration demo

---

## VLA Research Applications

### Open X-Embodiment Dataset

xArm is one of the major robot platforms in the **Open X-Embodiment** dataset [^8]:

- One of 22 robot platforms in the dataset (alongside Franka, WidowX, Google Robot, etc.)
- Includes various forms such as single-arm manipulators, dual-arm robots, and mobile platforms
- Total 1M+ trajectories, 527 manipulation skills (21 institutions participating) [^8]

> **Source**: Based on Open X-Embodiment paper (arXiv:2310.08864). Dataset is continuously updated, so see [official project page](https://robotics-transformer-x.github.io/) for latest figures.

### RT-X and VLA Models

Major models trained on Open X-Embodiment data:

| Model | Description |
|-------|-------------|
| **RT-1-X** | Cross-embodiment generalist policy |
| **RT-2-X** | Vision-Language-Action model |
| **OpenVLA** | 7B parameter open-source VLA [^9] |

Diverse robot data including xArm is used for **cross-embodiment generalization** research in these models.

### LeRobot Framework

Hugging Face's **LeRobot** project provides xArm-related datasets [^10]:

- **Pre-trained Models**: Diffusion Policy, ACT, VQ-BeT, etc.
- **Standardized Data Loaders**: Supports various robot formats
- **Hugging Face Hub Datasets**:
  - `lerobot/xarm_lift_medium`
  - `lerobot/xarm_push_medium_replay_image`

```python
# Loading xArm dataset in LeRobot
from datasets import load_dataset

dataset = load_dataset("lerobot/xarm_lift_medium")
print(dataset)
```

### Research Use Cases

1. **Imitation Learning**: Demonstration data collection and policy learning
2. **Sim-to-Real Transfer**: Transfer from Gazebo simulation to real robot
3. **Multi-task Learning**: Learning various manipulation tasks
4. **Foundation Model Fine-tuning**: Fine-tuning pre-trained models like OpenVLA

---

## Accessories and Peripherals

| Accessory | Purpose |
|-----------|---------|
| xArm Gripper | Standard 2-finger gripper |
| xArm Vacuum Gripper | Vacuum suction gripper |
| BIO Gripper | Flexible gripping |
| 6-Axis Force Torque Sensor | Force/torque feedback |
| Linear Motor | Linear extension rail |

---

## Purchase Guide

### Recommendations by Research Purpose

| Purpose | Recommended Model | Reason |
|---------|-------------------|--------|
| Education/Entry | Lite 6 | Lowest price, lightweight |
| General Research | xArm 6 | Balanced performance and price |
| VLA/AI Research | xArm 7 | 7DoF flexibility, Franka alternative |
| Industrial Applications | UFACTORY 850 | Highest precision, extended reach |

### Where to Buy

- **Official Site**: [UFACTORY US](https://www.ufactory.us/)
- **Global Distributors**: RobotShop, Top3DShop, Generation Robots
- **Korea**: Contact official site or check local distributors

---

## References

### Official Resources

- [UFACTORY Official Site](https://www.ufactory.us/)
- [UFACTORY Technical Documentation](https://docs.ufactory.cc/)
- [xArm Python SDK - GitHub](https://github.com/xArm-Developer/xArm-Python-SDK)
- [xArm ROS 2 Package - GitHub](https://github.com/xArm-Developer/xarm_ros2)
- [UFACTORY GitHub Organization](https://github.com/xArm-Developer)

### Research Papers and Projects

- [Open X-Embodiment: Robotic Learning Datasets and RT-X Models (arXiv:2310.08864)](https://arxiv.org/abs/2310.08864)
- [Open X-Embodiment Project Page](https://robotics-transformer-x.github.io/)
- [OpenVLA - GitHub](https://github.com/openvla/openvla)
- [LeRobot - Hugging Face](https://github.com/huggingface/lerobot)

### Additional Resources

- [xArm - ROS Wiki](https://robots.ros.org/xarm/)
- [UFACTORY - Crunchbase](https://www.crunchbase.com/organization/ufactory)

---

## Footnotes

[^1]: Based on UFACTORY official information and Crunchbase profile
[^2]: Kickstarter campaigns and investment information (Tracxn, CBInsights)
[^3]: Based on UFACTORY official site and distributors (RobotShop, Top3DShop) (verified January 2025). Prices may vary
[^4]: UFACTORY official documentation (docs.ufactory.cc)
[^5]: Franka Robotics official specifications
[^6]: UFACTORY Lite 6 official product page
[^7]: UFACTORY 850 official product page and RobotShop
[^8]: Open X-Embodiment: Robotic Learning Datasets and RT-X Models (arXiv:2310.08864)
[^9]: OpenVLA GitHub and related papers
[^10]: LeRobot GitHub and Hugging Face Hub

---

## See Also

- [Hardware List](../index.md)
- [Franka Emika](franka.md)
- [WidowX](widowx.md)
