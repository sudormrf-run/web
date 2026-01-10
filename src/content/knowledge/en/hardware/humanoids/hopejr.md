---
title: HopeJR
description: Low-cost open-source full-size humanoid robot co-developed by HuggingFace and The Robot Studio
tags: [hopejr, huggingface, the-robot-studio, low-cost, open-source, humanoid, lerobot, 3d-printed, teleoperation, dexterous-hands]
category: hardware
last_updated: 2026-01-09
---

# HopeJR

> Home > Hardware > Humanoids > HopeJR

<!-- Image placeholder: Remove this line if no actual image file or add image -->
<!-- Image pending: ![HopeJR](../../assets/hardware/humanoids/hopejr.png) -->

---

## Overview

HopeJR is an open-source full-size humanoid robot co-developed by HuggingFace and The Robot Studio. Officially announced on May 29, 2025[^1], it aims to democratize humanoid robots with a groundbreaking price of approximately $3,000.

| Item | Spec | Source |
|------|------|--------|
| Development | HuggingFace + The Robot Studio | [^1] |
| Designers | Rob Knight (The Robot Studio), Martino Russi (HuggingFace) | [^2] |
| DoF | 66 (66 independent degrees of freedom) | [^1][^2] |
| Structure | Primarily 3D printed plastic parts | [^2] |
| Target Price | ~$3,000 (estimated, may vary by tariffs and region) | [^1] |
| Expected Release | Late 2025 ~ Early 2026 (at time of announcement) | [^1] |
| License | Apache 2.0 (software) | [^2] |

> **Note**: Price and release dates are as of May 2025 announcement and subject to change. Check the [official GitHub repository](https://github.com/TheRobotStudio/HOPEJr) for latest information.

---

## Key Significance

The emergence of HopeJR symbolizes the **Democratization** of humanoid robot research.

### Price Comparison (as of May 2025)

| Robot | Price | Notes | Source |
|-------|-------|-------|--------|
| **HopeJR** | **~$3,000** | Open-source DIY | [^1] |
| Unitree G1 | ~$16,000 | Commercial product | [^1] |
| Tesla Optimus | $20,000+ | Unconfirmed target price | [^1] |

> **Note**: Above price information is based on TechCrunch reports. Actual retail prices may vary.

HopeJR targets significantly lower prices than existing commercial humanoid robots, providing an environment where university labs, startups, and individual developers can all experiment with full-size humanoids.

### Research Ecosystem Expansion

- **VLA Data Collection**: Large-scale dataset sharing through HuggingFace Hub
- **Model Training**: End-to-end learning pipeline through LeRobot
- **Reproducible Research**: Anyone can experiment with identical hardware

> "Open-source robots that anyone can assemble, reconfigure, and understand are important so that robotics isn't dominated by dangerous black-box systems from a few large corporations."
> — Clem Delangue, HuggingFace CEO[^1]

---

## Open-Source Philosophy

HopeJR was designed as a fully open-source project[^2].

### Disclosure Scope

| Component | Public | Description |
|-----------|--------|-------------|
| Hardware Design | O | CAD files, BOM (Bill of Materials) |
| 3D Print Files | O | STL files provided |
| URDF Model | O | Robot model for simulation |
| Software | O | Apache 2.0 license |
| Firmware | O | Including custom PCB |

### Design Philosophy

1. **DIY Assembly**: Custom PCB design that can be assembled without soldering[^2]
2. **Low-cost Parts**: 3D printable plastic structure
3. **Modular Design**: Easy part replacement and repair
4. **AI Calibration**: Compensate for low-cost hardware "elasticity" with AI

> "Low-cost hardware is inherently less robust and 'bouncy', but we can compensate for this by leveraging AI software performance improvements. This can be safer for interaction with humans."
> — The Robot Studio[^2]

---

## Key Features

### Dexterous Hands

- Multiple underactuated DoF per finger
- Precision grasping support
- Improved finger design for various object manipulation[^2]

### Walking Ability

- Bipedal walking
- Natural movement utilizing 66 DoF[^1]

### Teleoperation

- **Sensor Gloves**: Hand motion tracking with 1:1 joint mapping[^3]
- **Exoskeleton**: Arm motion control exoskeleton[^3]
- **Diametric Hall Encoder**: Precise angle measurement for each joint[^3]
- Project Homunculus-based teleop kit[^3]

---

## LeRobot Integration

HopeJR integrates with HuggingFace's LeRobot platform[^3].

> **Important**: Commands and settings below are based on LeRobot official documentation. May change with version updates, so check the [LeRobot HopeJR official documentation](https://huggingface.co/docs/lerobot/en/hope_jr) for latest information.

### Installation (as of May 2025 documentation)

Clone the LeRobot repository and install with HopeJR dependencies:

```bash
# 1. Clone LeRobot repository
git clone https://github.com/huggingface/lerobot.git
cd lerobot

# 2. Create virtual environment (recommended)
python -m venv venv
source venv/bin/activate  # Windows: venv\Scripts\activate

# 3. Install with HopeJR dependencies
pip install -e ".[hopejr]"
```

### Supported Features[^3]

| Feature | Command | Description |
|---------|---------|-------------|
| Find Port | `lerobot-find-port` | USB device port search |
| Calibration | `lerobot-calibrate` | Hands, arms, gloves, exoskeleton calibration |
| Teleoperation | `lerobot-teleoperate` | Real-time remote control |
| Data Recording | `lerobot-record` | Demo data collection |
| Replay | `lerobot-replay` | Recorded episode playback |
| Training | `lerobot-train` | Policy training (ACT, etc.) |

### Workflow

```
[Teleoperation] -> [Data Recording] -> [HuggingFace Hub Upload]
                                         |
                                         v
[Robot Inference] <- [Policy Training] <- [Dataset Download]
```

### Calibration Structure[^3]

**Hand Calibration**:
- Thumb: CMC, MCP, PIP, DIP
- Index~Pinky: Radial flexor, Ulnar flexor, PIP/DIP

**Arm Calibration**:
- Shoulder: pitch, yaw, roll
- Elbow: flex
- Wrist: pitch, yaw, roll

---

## Teleoperation System

### Sensor Gloves (Homunculus Glove)

The sensor gloves are equipped with Diametric Hall Encoders at each finger joint for precise angle measurement[^3].

```bash
# Glove calibration example (check port with lerobot-find-port)
lerobot-calibrate \
    --teleop.type=homunculus_glove \
    --teleop.port=/dev/tty.usbmodemXXXXX \
    --teleop.id=red \
    --teleop.side=right
```

### Exoskeleton (Homunculus Arm)

Arm control exoskeleton that maps 7 DoF (shoulder 3 + elbow 1 + wrist 3) movements 1:1[^3].

```bash
# Exoskeleton calibration example (check port with lerobot-find-port)
lerobot-calibrate \
    --teleop.type=homunculus_arm \
    --teleop.port=/dev/tty.usbmodemXXXXX \
    --teleop.id=black
```

---

## Timeline

| Date | Event | Source |
|------|-------|--------|
| 2024 | LeRobot platform launched | [^4] |
| April 2025 | HuggingFace acquires Pollen Robotics | [^4] |
| May 29, 2025 | HopeJR official announcement | [^1] |
| Late 2025 (target) | First unit shipment expected | [^1] |
| Early 2026 (target) | Full-scale delivery expected | [^1] |

> **Note**: Shipment schedule is the target at time of announcement; check [official website](https://github.com/TheRobotStudio/HOPEJr) for latest information.

---

## Related Products

### Reachy Mini

Desktop robot announced alongside by HuggingFace, expected to release at $250~$300 (may vary by tariffs)[^1]. Can be used for head movement, voice recognition, and AI test platform.

---

## See Also

- [Hardware List](../index.md)
- [LeRobot Arms](../arms/lerobot-arms.md)
- [Reachy](reachy.md)
- [SmolVLA](../../models/smolvla.md)

---

## References

[^1]: TechCrunch, "Hugging Face unveils two new humanoid robots" (2025-05-29) - https://techcrunch.com/2025/05/29/hugging-face-unveils-two-new-humanoid-robots/

[^2]: GitHub, "TheRobotStudio/HOPEJr" - https://github.com/TheRobotStudio/HOPEJr

[^3]: HuggingFace, "LeRobot HopeJR Documentation" - https://huggingface.co/docs/lerobot/en/hope_jr

[^4]: HuggingFace Blog, "Pollen Robotics Acquisition" - https://huggingface.co/blog/hugging-face-pollen-robotics-acquisition

### Additional Materials

- [Analytics Insight: Meet HopeJR](https://www.analyticsinsight.net/news/meet-hopejr-the-open-source-humanoid-from-hugging-face-in-just-3000)
- [IOT World Today: Hugging Face Unveils $3,000 Humanoid Robot](https://www.iotworldtoday.com/robotics/hugging-face-unveils-3-000-humanoid-robot-that-can-walk-pickup-things)
