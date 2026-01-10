---
title: Reachy Mini
description: Open-source desktop companion robot co-developed by Pollen Robotics and Hugging Face
tags: [reachy, pollen, huggingface, desktop, companion, education, open-source, apache-2.0, smolvlm, raspberry-pi]
category: hardware
created: 2025-05-01
updated: 2026-01-09
---

# Reachy Mini

> Home > Hardware > Misc > Reachy Mini

<!-- Image pending: ![Reachy Mini](../../assets/hardware/misc/reachy-mini.png) -->
<!-- TODO: Add image asset -->

---

## Overview

Reachy Mini is an open-source desktop robot co-developed by **Hugging Face** and **Pollen Robotics**. Starting at $299, it provides an AI robotics experimentation platform accessible to everyone.

| Item | Content |
|------|---------|
| **Development** | Hugging Face + Pollen Robotics |
| **License** | Apache 2.0 |
| **Type** | Desktop companion robot |
| **Height** | 28cm (11 inches) |
| **Weight** | 1.5kg (3.3lbs) |
| **DoF** | 6 (head) + 360-degree body rotation |
| **Price** | $299 (Lite) / $449 (Wireless) |
| **Release** | Summer 2025 (Lite), Fall 2025~2026 (Wireless) |

---

## Key Significance

### Democratization of AI Robotics

Reachy Mini's most important contribution is **opening up the combination of AI and physical robots to general users**.

1. **Low-cost Accessibility**: At $299, accessible to students, hobbyist developers, and educators alike
2. **Fully Open-Source**: Hardware design, software SDK, simulation environment all public
3. **Hugging Face Ecosystem Integration**: Immediate access to 1.7M+ AI models and 400K+ datasets
4. **DIY Learning Experience**: Hands-on STEM education through 2-3 hour assembly process
5. **Embodied AI Platform**: Implementing voice, vision, language models through physical robot

At CES 2026, NVIDIA CEO Jensen Huang demonstrated connecting DGX Spark and Reachy Mini as a **"personal office R2D2"**. This showed that locally-running AI agents can interact in real-time through physical robots. [[1]](#ref-nvidia-reachy)

---

## Pollen Robotics Background

### Company History

| Item | Content |
|------|---------|
| **Founded** | 2016, Bordeaux, France |
| **Founders** | Matthieu Lapeyre, Alice Coucke, Pierre Rouanet (former Inria researchers) |
| **Mission** | Creating open, ethical, and accessible robots |
| **Funding** | EUR 2.5M (~$2.8M) |
| **Acquisition** | April 14, 2025, acquired by Hugging Face [[2]](#ref-techcrunch) |

### Key Product History

1. **Poppy** (early): One of the first 3D-printed open-source humanoid robots
2. **Reachy 1** (2020): ANA XPrize 2nd place
3. **Reachy 2** (current): $70,000 humanoid, used by research institutions including Cornell/CMU
4. **Reachy Mini** (2025): Desktop version for democratization

With Hugging Face's acquisition, approximately 20 Pollen Robotics employees joined, making this Hugging Face's fifth acquisition (after Gradio, XetHub, etc.) and first entry into hardware. [[2]](#ref-techcrunch)

---

## Lite vs Wireless Version Detailed Comparison

| Item | Lite ($299) | Wireless ($449) |
|------|-------------|-----------------|
| **Compute** | External (Mac/Linux required) | Built-in Raspberry Pi 5 |
| **Connection** | USB wired only | WiFi + wired (Ethernet via USB-C adapter) |
| **Power** | Wired power | Battery + wired |
| **Microphones** | 4 | 4 |
| **Speaker** | 5W | 5W |
| **Camera** | Wide-angle camera | Wide-angle camera |
| **Accelerometer** | No | Yes |
| **Autonomy** | PC dependent | Independent operation possible |
| **Shipping Start** | Summer 2025 | Fall 2025~2026 |

### Version Selection Guide

- **Lite Recommended**: Developers/educators who already have a powerful PC and are okay with wired connection
- **Wireless Recommended**: Users needing standalone demos, mobility, or familiar with Raspberry Pi projects

---

## Hardware Specs

### Physical Specifications

| Item | Spec |
|------|------|
| **Height** | 28cm (11 inches) |
| **Width** | 16cm (6.3 inches) |
| **Weight** | 1.5kg (3.3lbs) |
| **Head DoF** | 6 (pan, tilt, roll, etc.) |
| **Body Rotation** | 360-degree continuous rotation |
| **Antennas** | 2 (for animation expression) |

### Sensors and Output

| Component | Spec |
|-----------|------|
| **Eyes** | Expressive LED animations |
| **Camera** | Wide-angle camera (for vision processing) |
| **Microphones** | 4-channel array |
| **Speaker** | 5W output |
| **Accelerometer** | Wireless version only |

### Assembly

Reachy Mini is sold as a DIY kit, typically taking **2-3 hours** to assemble. The assembly process itself provides educational value.

---

## Software Ecosystem

### Python SDK

```python
from reachy_mini import ReachyMini

# Auto connect (USB/localhost or network auto-detect)
reachy = ReachyMini()

# Or force connection mode
reachy = ReachyMini(connection_mode="localhost_only")
reachy = ReachyMini(connection_mode="network")

# Head movement control
reachy.head.look_at(x=0.5, y=0, z=0.3)

# Eye animation
reachy.eyes.set_emotion("happy")

# Camera access
frame = reachy.camera.get_frame()
```

### Supported Programming Languages

| Language | Status |
|----------|--------|
| **Python** | Currently supported (full SDK) |
| **JavaScript** | In development (coming soon) |
| **Scratch** | In development (coming soon) |

### Hugging Face Hub Integration

Reachy Mini is deeply integrated with the Hugging Face ecosystem:

- **1.7M+ AI models** immediately accessible
- **400K+ datasets** available
- **Hugging Face Spaces** for app sharing and community collaboration
- **SmolVLM2-2.2B-Instruct** default local vision model

```python
# Local vision processing with SmolVLM2
# --local-vision flag processes frames periodically
```

### App Development and Deployment

```bash
# App creation tool
reachy-mini-app-assistant create

# Deploy app to Hugging Face Space to share with community
```

---

## Educational Applications

### STEM Education Application Areas

| Field | Content |
|-------|---------|
| **Programming** | Python basics, AI integration, asynchronous programming |
| **AI/ML** | Computer vision, speech recognition, LLM integration |
| **Robotics** | Motion planning, sensor fusion, control systems |
| **HRI** | Human-robot interaction, emotion expression, social robots |

### Target Ages and Environments

| Environment | Recommendations |
|-------------|-----------------|
| **High School+** | Independent Python-based learning possible |
| **Middle School** | Use with teacher or mentor guidance |
| **Elementary** | Suitable after Scratch support (in development) |
| **University/Research Labs** | AI robotics, motion planning, autonomous decision-making experiments |

### Educational Advantages

1. **Hands-on Learning**: Experience abstract AI concepts through physical robot
2. **Visual Feedback**: Immediate robot state confirmation via LED eyes and antennas
3. **Progressive Difficulty**: Web dashboard → Python SDK → Advanced AI integration
4. **Community Learning**: Reference and share other projects on Hugging Face Spaces

---

## CES 2026 Demonstration

### NVIDIA DGX Spark + Reachy Mini

At CES 2026, Jensen Huang demonstrated connecting Reachy Mini with NVIDIA DGX Spark. [[1]](#ref-nvidia-reachy)

| Item | Content |
|------|---------|
| **AI Brain** | NVIDIA DGX Spark (100B parameter model local execution) |
| **Physical Avatar** | Reachy Mini |
| **Model Routing** | Real-time intent-based router (privacy → local, complex reasoning → cloud) |
| **Voice** | Eleven Labs API integration |

### Demonstrated Features

- Grocery list management (eggs, milk, butter)
- Script update delivery via code execution
- Hand-drawn sketch to architectural rendering conversion
- Real-time home monitoring

> "What's amazing is that this is now completely easy. But just a few years ago, this was impossible, unimaginable." - Jensen Huang [[1]](#ref-nvidia-reachy)

---

## Purchase and Shipping

### Status (as of January 2026)

- **Shipped**: 3,000 units shipped through Hugging Face, Pollen Robotics, Seeed Studio collaboration [[3]](#ref-seeed)
- **Development Period**: About 5 months from open-source idea to actual product [[3]](#ref-seeed)

### Where to Buy

| Store | Notes |
|-------|-------|
| **Pollen Robotics Official** | [pollen-robotics.com/reachy-mini](https://www.pollen-robotics.com/reachy-mini/) |
| **Seeed Studio** | Kits and parts |
| **Hugging Face Hub** | Software and models |

---

## System Requirements

### Lite Version

| Item | Requirement |
|------|-------------|
| **OS** | macOS 10.15+ or Linux (Ubuntu 20.04+ recommended) |
| **Python** | 3.8+ |
| **Connection** | USB |
| **Windows** | Coming soon |

### Wireless Version

| Item | Requirement |
|------|-------------|
| **Built-in Compute** | Raspberry Pi 5 |
| **Remote Access** | Web browser (any device) |
| **Network** | WiFi or USB-C Ethernet adapter |

---

## References

### Citation Sources

<a id="ref-nvidia-reachy"></a>
**[1]** [NVIDIA brings agents to life with DGX Spark and Reachy Mini](https://huggingface.co/blog/nvidia-reachy-mini) - Hugging Face Blog, January 2026

<a id="ref-techcrunch"></a>
**[2]** [Hugging Face buys a humanoid robotics startup](https://techcrunch.com/2025/04/14/hugging-face-buys-a-humanoid-robotics-startup/) - TechCrunch, April 14, 2025

<a id="ref-seeed"></a>
**[3]** [Reachy Mini: An Open Journey Built Together](https://www.seeedstudio.com/blog/2026/01/06/reachy-mini-an-open-journey-built-together-with-hugging-face-pollen-robotics-seeed-studio/) - Seeed Studio Blog, January 6, 2026

### Official Documentation
- [Pollen Robotics - Reachy Mini](https://www.pollen-robotics.com/reachy-mini/)
- [Hugging Face Blog - Reachy Mini](https://huggingface.co/blog/reachy-mini)
- [Reachy Mini GitHub SDK](https://github.com/pollen-robotics/reachy_mini)
- [Hugging Face Space - Reachy Mini](https://huggingface.co/spaces/pollen-robotics/Reachy_Mini)

### Development Resources
- [Reachy Mini Developer Center](https://reachymini.net/developers.html)
- [Make and Publish Reachy Mini Apps](https://huggingface.co/blog/pollen-robotics/make-and-publish-your-reachy-mini-apps)

---

## See Also

- [Hardware List](../index.md)
- [Reachy 2](../humanoids/reachy.md)
- [LeRobot Arms](../arms/lerobot-arms.md)
- [SmolVLA](../../models/smolvla.md)
