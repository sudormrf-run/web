---
title: Galaxea Humanoid
description: R1 Series wheeled dual-arm humanoid robot from Galaxea AI
tags: [galaxea, r1, humanoid, wheeled, teleoperation, research, affordable]
category: hardware
---

# Galaxea Humanoid

> Home > Hardware > Humanoids > Galaxea

<!-- Image pending: ![Galaxea R1](../../assets/hardware/humanoids/galaxea.png) -->

---

## Overview

| Item | Details |
|------|---------|
| Manufacturer | Galaxea AI (星海图, Beijing, China) |
| Type | Wheeled Dual-arm Humanoid |
| Founded | September 2023 (team from Tsinghua/Stanford) |
| Computing | NVIDIA Jetson AGX Orin 32GB |
| Price Range | $27,500 ~ $40,000 (varies by model) |
| Key Customers | Huawei, Volkswagen, Samsung, ByteDance, Stanford, MIT [^1] |

> **Note**: Price and specification information is as of Q1 2025 and may change.

[^1]: [Forbes via Yahoo Finance - Galaxea AI Raises $100M](https://finance.yahoo.com/news/beijings-galaxea-ai-raises-100-000126844.html)

---

## Key Significance

The Galaxea R1 series holds important significance as an **affordable research humanoid platform**.

### Improved Research Accessibility

- **Reasonable Price**: Starting at approximately $27,500 (199,000 RMB) for R1 Pro, significantly cheaper than Figure 02 ($100K+) or Unitree H1 ($90,000)
- **Full Features**: Despite low price, offers full specs including 26 DoF, 7 HD cameras, LiDAR, force sensors
- **Various Teleoperation**: Easy data collection with Isomorphic and VR remote operation support

### Advantages of Wheel-Based Design

- **Stability**: No risk of falling compared to walking types
- **Data Quality**: Can collect manipulation data on stable platform
- **Practicality**: Immediately usable in research/industrial environments

### Ecosystem Support

- Over 40 corporate/research institution customers secured
- Adopted by AI research groups including Physical Intelligence, Stanford, MIT
- Used for algorithm training, robot deployment, Embodied AI data collection

---

## Product Lineup Comparison

> **Legend**: O = Supported, X = Not Supported, N/A = Information Not Available

| Item | R1 Pro | R1 | R1 Lite |
|------|--------|-----|---------|
| DoF | 26 | 24 | 23 |
| Arms | Dual 7-axis | Dual 6-axis (A1) | Dual 6-axis |
| Payload | 10kg | N/A | N/A |
| Reach | 64cm | 70cm | 70cm |
| Max Height | 2m | 2m | 1.7m |
| Gripper | Multi-joint | G1 Gripper | 2-finger |
| Cameras | 7 HD + LiDAR | 7 HD + LiDAR | Dual |
| Wrist Camera | O | X | X |
| Force Sensor | O | X | X |
| Voice Interaction | O | X | X |
| VR Teleop | O | O | X |
| Isomorphic Teleop | O | O | O |
| Price | ~$27,500 | N/A | ~$40,000 |

> **Note**: R1 Lite is priced higher than R1 Pro because R1 Lite is sold as a fully assembled data collection-dedicated platform, while R1 Pro is the base price for research/development. Actual prices may vary by configuration.

### R1 Pro Details

| Item | Spec |
|------|------|
| DoF | 26 DoF |
| Arm Configuration | Dual 7-DoF, 10kg payload each |
| Reach | 64cm (single arm), floor to 2m reach |
| Sensors | 7 HD cameras + 1 LiDAR + wrist cameras |
| Force Sensor | Integrated |
| Computing | NVIDIA Jetson AGX Orin 32GB (200 TOPS) |
| Chassis | 3-wheel vector steering |
| Teleoperation | Isomorphic + VR |
| Price | ~199,000 RMB (~$27,500) |

### R1 Details

| Item | Spec |
|------|------|
| DoF | 24 DoF |
| Arm Configuration | Dual 6-DoF Galaxea A1 arms |
| Gripper | Galaxea G1 Gripper |
| Torso | 4-DoF |
| Reach | 70cm |
| Max Height | 2m |
| Chassis | 3-wheel vector steering |
| Sensors | 7 HD cameras + 1 LiDAR |
| Expandability | External sensor interface support |

### R1 Lite Details

| Item | Spec |
|------|------|
| DoF | 23 DoF |
| Arm Configuration | Dual 6-axis |
| Reach | 70cm |
| Base Height | 128cm |
| Max Height (extended) | 1.7m |
| Weight | 96kg |
| Movement Speed | 5.4 km/h |
| Sensors | 360-degree LiDAR + Dual cameras |
| Gripper | 2-finger |
| Teleoperation | Isomorphic |
| Use | Data collection platform |
| Price | ~$40,000 |

---

## Teleoperation

The Galaxea R1 series supports two teleoperation methods.

### Isomorphic Remote Operation (R1-T Platform)

R1-T is a dedicated remote operation platform designed as a miniature replica of R1.

| Feature | Description |
|---------|-------------|
| Full-body Mapping | All joints 1:1 synchronized |
| Precision | Millimeter level |
| Response Speed | Millisecond level |
| Force Feedback | Force transmission from robot to operator |

**Use Cases:**
- High-precision manipulation data collection
- Delicate task training demos
- Research dataset construction

### VR Remote Operation

Immersive remote operation system using Meta Quest 3 VR headset.

| Feature | Description |
|---------|-------------|
| Headset | Meta Quest 3 |
| Hand Tracking | Supported |
| Visual Feedback | Real-time streaming from robot head camera |
| Full-body Sync | Supported |
| Precision | Millimeter level |

**Operation Methods:**
- Control robot arms with hand movements
- First-person view through head camera
- Hold B button for 2+ seconds to exit

### Standard Remote Controller

Analog stick-based standard controller also supported.

| Function | Description |
|----------|-------------|
| Chassis Movement | Analog sticks |
| Torso Control | Supported |
| Emergency Stop | Supported |
| Mode Switching | SWA/SWB/SWC/SWD switches |

---

## Company Information

### Galaxea AI (星海图)

| Item | Details |
|------|---------|
| Founded | September 2023 |
| Headquarters | Beijing/Suzhou, China |
| Mission | "Serving 10 billion humans with 10 billion robots" |
| Valuation | $700M (as of 2025) [^2] |
| Total Investment | ~1.5 billion RMB (~$100M+) [^2] |

[^2]: [Benzinga - Galaxea AI Raises $100M at $700M Valuation](https://www.benzinga.com/news/topics/25/08/47431117/beijings-galaxea-ai-raises-100-million-at-700-million-valuation-says-humanoids-will-enter-homes-in-le)

### Founding Team

- **Jiyang Gao (高继扬)** - CEO [^3]
  - Tsinghua EE undergraduate, USC PhD
  - Waymo, Momenta autonomous driving experience
  - Google, SenseTime internships

- **Huazhe Xu** - Co-founder/CSO [^3]
  - Stanford Postdoc, UC Berkeley PhD
  - Tsinghua Assistant Professor
  - CoRL'23 Best System Paper Award

[^3]: [The Wire China - Gao Jiyang Profile](https://www.thewirechina.com/whos_who/gao-jiyang-高继扬/)

### Investors

Over 30 investors including Meituan, IDG Capital, Baidu Ventures participated. [^2]

### AI Model

**G0 Model** - Galaxea's self-developed AI model
- Language understanding
- Reasoning execution
- Complex task execution (e.g., making bed)

### Future Plans

- Bipedal walking humanoid planned for release in 2026
- Goal of popularizing home humanoids within 10 years

---

## Technology Stack

### Hardware

| Component | Specification |
|-----------|---------------|
| Computing | NVIDIA Jetson AGX Orin 32GB |
| CPU | 8-core |
| GPU | 200 TOPS |
| Chassis | 3-wheel vector steering |
| Sensors | LiDAR, HD cameras, force sensors |

### Software

| Item | Support |
|------|---------|
| ROS1 | O |
| ROS2 | O |
| SDK | Python, C++ |
| Documentation | Official guides provided |

---

## Competitor Comparison

| Robot | Manufacturer | Type | Price | DoF |
|-------|--------------|------|-------|-----|
| R1 Pro | Galaxea | Wheeled | ~$27,500 | 26 |
| G1 | Unitree | Walking | ~$16,000 | 23 |
| H1 | Unitree | Walking | ~$90,000 | N/A |
| Figure 02 | Figure AI | Walking | ~$100,000+ | N/A |

---

## See Also

- [Hardware List](../index.md)
- [Galaxea Arms](../arms/galaxea-arms.md)
- [Unitree Humanoid](unitree-humanoid.md)

---

## References

- [Galaxea Dynamics Official Site](https://galaxea-dynamics.com/)
- [Galaxea Official Documentation](https://docs.galaxea-ai.com/)
- [Galaxea User Guide](https://userguide-galaxea.github.io/Product_User_Guide/)
- [Galaxea R1 Pro Product Page](https://galaxea-dynamics.com/products/galaxea-r1-pro)
- [VR Teleop Tutorial](https://docs.galaxea-dynamics.com/Guide/R1Pro/vr_teleop/ros2/R1Pro_VR_Teleop_Usage_Tutorial_ros2/)
- [Isomorphic Teleop Tutorial](https://docs.galaxea-ai.com/Guide/R1Pro/isomorphic_teleop/R1Pro_Teleop_Usage_Tutorial/)
- [Forbes: Galaxea AI Raises $100M](https://finance.yahoo.com/news/beijings-galaxea-ai-raises-100-000126844.html)
- [Robotuo: R1 Series Announcement](https://robotuo.com/2025/01/05/galaxea-ai-announces-the-launch-of-the-r1-series-humanoid-robots/)
