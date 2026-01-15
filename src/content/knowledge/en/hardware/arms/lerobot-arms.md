---
title: LeRobot Arms (SO-100/SO-101)
description: Open-source low-cost research robot arms developed collaboratively by HuggingFace and TheRobotStudio
tags: [lerobot, so100, so101, low-cost, 3d-print, open-source, feetech, sts3215, smolvla, vla]
category: hardware
created: 2025-05-01
updated: 2026-01-09

# Authorship
createdBy:
  name: Jong Hyun Park
  email: jhpark@sudormrf.run
lastEditedBy:
  name: Jong Hyun Park
  email: jhpark@sudormrf.run
lastEditedAt: 2026-01-15
---

# LeRobot Arms (SO-100/SO-101)

> Home > Hardware > Arms > LeRobot Arms

<!-- Image pending: ![LeRobot SO101](../../assets/hardware/arms/lerobot-so101.png) -->

---

## Overview

LeRobot SO-100/SO-101 is an open-source robot arm jointly developed by **HuggingFace** and **TheRobotStudio**. With parts costing approximately $130 and a 3D printing-based design, it provides an accessible robotics research platform for everyone.

| Item | Details |
|------|---------|
| **Development** | HuggingFace + TheRobotStudio |
| **License** | Apache 2.0 |
| **Type** | Low-cost 3D printed robot arm |
| **DoF** | 6 (Base, Shoulder, Elbow, Wrist Flex, Wrist Roll, Gripper) |
| **Parts Cost** | ~$130 (single arm) / ~$230 (Leader-Follower pair) |
| **Release Date** | SO-100: 2024, SO-101: May 2025 |

---

## Key Significance

### Democratization of Robotics Research

The most important contribution of LeRobot SO-100/SO-101 is **dramatically lowering the barrier to entry for robotics research**.

1. **Ultra-low-cost Hardware**: While existing research robot arms cost thousands to tens of thousands of dollars, this can be completed for $130
2. **Fully Open Source**: CAD files, BOM, firmware, and learning framework all publicly available
3. **3D Printing Based**: Manufacturable with standard FDM printers without industrial equipment
4. **Community Ecosystem**: Dataset/model sharing through HuggingFace Hub

This enables university research labs, startups, and individual researchers to participate in VLA (Vision-Language-Action) research. Especially with **SmolVLA** integration, end-to-end robotics learning is possible even on consumer-grade GPUs.

---

## Detailed Comparison: SO-100 vs SO-101

| Item | SO-100 | SO-101 |
|------|--------|--------|
| **Release** | 2024 | May 2025 |
| **Status** | Deprecated | Currently recommended version |
| **Wiring** | Wire breakage issues at Joint 3 | Improved wiring prevents breakage |
| **Assembly** | Gear removal required | No gear removal, simplified assembly |
| **Leader Arm Motors** | Same gear ratio used | Optimized gear ratios per joint |
| **Range of Motion** | Limited due to wiring | Limitations resolved with wiring improvements |
| **RL Support** | Limited | Leader can follow Follower (for RL intervention) |
| **Code Compatibility** | - | Compatible with SO-100 code |

### Key Improvements in SO-101

- **Wiring Stability**: Complete resolution of cable breakage issues at Joint 3
- **Ease of Assembly**: Can assemble directly without gear removal
- **Leader Arm Optimization**: Differentiated gear ratios per joint for self-weight support and manipulation ease
- **Reinforcement Learning Support**: Leader arm can follow Follower arm in real-time for human intervention

---

## Hardware Specifications

> **Source and Verification Date**: Specifications below are based on [Feetech Official Specifications](https://www.seeedstudio.com/STS3215-19kg-cm-7-4V-Serial-Servo-p-6338.html) and [LeRobot SO-101 Documentation](https://huggingface.co/docs/lerobot/so101) (verified May 2025). Check official documentation for latest information.

### STS3215 Servo Motor Specifications

| Item | 7.4V Version | 12V Version |
|------|--------------|-------------|
| **Stall Torque** | 16.5 kg.cm (6V) / 19.5 kg.cm (7.4V) | 30 kg.cm |
| **Rated Torque** | 5 kg.cm | - |
| **Encoder** | 12-bit magnetic encoder (0-4096) | 12-bit magnetic encoder |
| **Rotation Range** | 360-degree continuous rotation, multi-turn support (±7 turns) | Same |
| **Communication** | TTL Serial Bus (bidirectional) | TTL Serial Bus |
| **Gearbox** | Metal gears | Metal gears |
| **Features** | Daisy chain connection, overcurrent protection, temperature/voltage/current feedback | Same |

### Leader Arm Motor Configuration (SO-101)

| Joint | Motor ID | Gear Ratio | Purpose |
|-------|----------|------------|---------|
| Base (Shoulder Pan) | 1 | 1/191 | Base rotation |
| Shoulder Lift | 2 | 1/345 | Shoulder lift |
| Elbow Flex | 3 | 1/191 | Elbow bend |
| Wrist Flex | 4 | 1/147 | Wrist bend |
| Wrist Roll | 5 | 1/147 | Wrist rotation |
| Gripper | 6 | 1/147 | Gripper open/close |

### Follower Arm Motor Configuration

All 6 motors use STS3215 with **1/345 gear ratio** (uniform high-torque configuration)

---

## Bill of Materials (BOM)

> **Pricing Information**: Prices below are based on [SO-ARM100 GitHub BOM](https://github.com/TheRobotStudio/SO-ARM100) and [Seeed Studio](https://www.seeedstudio.com/) (verified May 2025). May vary by exchange rate and supply conditions.

### Leader + Follower Pair (Dual Arm Configuration)

| Part | Quantity | US Price | EU Price | Notes |
|------|----------|----------|----------|-------|
| STS3215 Servo (7.4V, various gear ratios) | 12 | $166.68 | €146.4 | 6 Leader + 6 Follower |
| Motor Control Board | 2 | $21.20 | €22.8 | 1 per arm |
| USB-C Cable (2 pack) | 1 | $7.00 | €7.00 | |
| Power Supply (5V) | 2 | $20.00 | €31.4 | Standard Edition |
| Table Clamp (4pc) | 1 | $9.00 | €9.7 | |
| Screwdriver Set | 1 | $6.00 | €9.00 | Star driver needed |
| **Total** | - | **~$230** | **~€226** | 3D printing cost separate |

### Single Follower Arm

| Part | Quantity | US Price |
|------|----------|----------|
| STS3215 Servo (7.4V, 1/345) | 6 | $83.34 |
| Motor Control Board | 1 | $10.60 |
| USB-C Cable | 1 | $3.50 |
| Power Supply | 1 | $10.00 |
| Miscellaneous (clamps, driver) | 1 | $15.00 |
| **Total** | - | **~$122** |

### Where to Buy

- **US**: PartaBot (includes assembled products)
- **Global**: Seeed Studio ($220 motor kit, 3D printed parts +$35)
- **Other**: WowRobo, RobotShop

---

## Assembly and Build

### 3D Printing Requirements

| Item | Recommended Specs |
|------|-------------------|
| **Material** | PLA+ (basic), PETG or Nylon (high-temp environments) |
| **Nozzle** | 0.4mm (0.2mm layer) or 0.6mm (0.4mm layer) |
| **Infill** | 15% or more (35% or more for load-bearing areas) |
| **Support** | Full, except for slopes over 45 degrees |
| **Bed Size** | Minimum 205×250mm (Prusa) or 220×220mm (Ender) |

**Recommended Printers**: Prusa MINI+, Creality Ender 3, Bambu Lab series

**Outsourcing Cost Reference (EU)**:
- Follower arm only: ~€50
- Leader + Follower pair: ~€105

### Assembly Process

1. **Motor Pre-setup**: Set unique ID and baudrate for each motor
2. **Leader Arm Assembly**: Sequential assembly of joints 1-6, motor horn attachment
3. **Follower Arm Assembly**: Same process, motor installation order important
4. **Wiring Connection**: Connect motors in daisy chain method
5. **Calibration**: Set center point and range of motion for each joint
6. **Camera Mounting** (optional): Camera mount on Follower arm

### Power Supply Notes

| Edition | Leader Arm | Follower Arm |
|---------|------------|--------------|
| Standard | 5V | 5V |
| Pro | 5V | 12V |

> **Warning**: Mixing up Leader and Follower voltages risks servo motor damage

### Calibration

Calibration is **essential for transfer learning of neural networks**. For policies learned on one robot to work on another, they must return the same values at the same physical positions.

```bash
# Follower arm calibration
lerobot-calibrate \
    --robot.type=so101_follower \
    --robot.port=/dev/ttyACM0 \
    --robot.id=my_follower

# Leader arm calibration
lerobot-calibrate \
    --teleop.type=so101_leader \
    --teleop.port=/dev/ttyACM1 \
    --teleop.id=my_leader
```

---

## LeRobot Ecosystem

### LeRobot Framework

LeRobot is a **PyTorch-based robotics learning framework** developed by HuggingFace.

#### Installation Method 1: PyPI (Recommended)

```bash
# Install from PyPI (includes Feetech SDK)
pip install "lerobot[feetech]"

# CLI commands (default settings)
lerobot teleoperate --robot.type=so101
lerobot record --robot.type=so101 --repo-id=your-username/your-dataset
lerobot train --policy.type=act --dataset.repo_id=your-username/your-dataset

# Explicit port/camera specification (when multiple devices or defaults don't work)
lerobot teleoperate --robot.type=so101 --robot.port=/dev/ttyACM0
lerobot teleoperate --robot.type=so101 \
    --robot.port=/dev/ttyACM0 \
    --robot.cameras="{'cam': {'type': 'opencv', 'index': 0}}"
```

> **Note**: `--robot.port` can be verified with `lerobot-find-port` command. Specify index with `--robot.cameras` if there are multiple cameras.

#### Installation Method 2: Source Build (for development/customization)

```bash
# Clone and install from source
git clone https://github.com/huggingface/lerobot.git
cd lerobot
pip install -e ".[feetech]"

# Run scripts directly
python lerobot/scripts/control_robot.py teleoperate \
    --robot.type=so101 \
    --robot.cameras="{'cam': {'type': 'opencv', 'index': 0}}"

python lerobot/scripts/control_robot.py record \
    --robot.type=so101 \
    --repo-id=your-username/your-dataset

python lerobot/scripts/train.py \
    --policy.type=act \
    --dataset.repo_id=your-username/your-dataset
```

### HuggingFace Hub Integration

- **Dataset Sharing**: 487+ community datasets public with `lerobot` tag
- **Model Sharing**: Upload/download trained policy models
- **10M+ Frames**: Diverse environment data used for SmolVLA pretraining

### Supported Policy Architectures

- **ACT (Action Chunking with Transformers)**: Basic Imitation Learning
- **Diffusion Policy**: Diffusion model-based policy
- **SmolVLA**: Vision-Language-Action model
- **TDMPC**: Model-based RL

---

## VLA Research Applications

### SmolVLA Integration

**SmolVLA** is a lightweight Vision-Language-Action model with 450M parameters, providing optimized integration with SO-100/SO-101.

| Item | Details |
|------|---------|
| **Parameters** | 450M |
| **Training Data** | 10M frames (487 community datasets) |
| **Hardware Requirements** | Consumer-grade GPU, MacBook support |
| **Inference Speed** | 30% improvement with async inference, 2x throughput |

### Performance on SO-100/SO-101

SmolVLA's community dataset pretraining **improved success rate from 51.7% to 78.3%** on SO-100 physical robot benchmarks.

> **Source**: [SmolVLA: A Vision-Language-Action Model for Affordable and Efficient Robotics](https://arxiv.org/abs/2506.01844) (arXiv:2506.01844, June 2025). The figures report 51.7% success rate with task-specific training only, 78.3% with community dataset pretraining added.

```python
# SmolVLA fine-tuning example
from lerobot.common.policies.smolvla import SmolVLAPolicy

policy = SmolVLAPolicy.from_pretrained("lerobot/smolvla_base")
# Fine-tune with custom dataset
```

### Research Use Cases

1. **Imitation Learning**: Demo data collection via Leader-Follower teleoperation
2. **Reinforcement Learning**: Human-in-the-loop RL with Leader following Follower functionality
3. **Sim2Real**: Transfer from Isaac Sim/Lab simulation learning to real robot
4. **Multimodal Learning**: End-to-end learning of camera + language commands + actions

### Dual Arm Mobile Robot Configuration

| Component | Quantity | Purpose |
|-----------|----------|---------|
| SO-101 Arms | 2 | Bimanual manipulation |
| LeKiwi Base | 1 | Mobile platform |
| Anker 300Wh Battery | 1 | Power |
| Wrist RGB Cameras | 2 | Visual feedback |
| Head Depth Camera (2-DoF neck) | 1 | Environment perception |
| **Total Cost** | - | **~$660** |

---

## Troubleshooting

### Common Issues

| Problem | Solution |
|---------|----------|
| Motor not recognized | Check power/USB cables, set Waveshare board to 'B' channel jumper |
| Calibration failed | Move each joint slowly through full range of motion |
| Insufficient torque | Upgrade Follower to 12V power supply (Pro edition) |

### Linux USB Permission Setup (Recommended Method)

USB serial device access permission issues are best resolved by adding to the `dialout` group:

```bash
# Add user to dialout group (recommended, permanent, safest)
sudo usermod -aG dialout $USER
# Log out and log back in for changes to take effect
```

#### Using udev Rules (Alternative)

For more fine-grained control over specific devices, you can use udev rules:

```bash
# 1. Check USB adapter Vendor/Product ID
lsusb

# Or check with actual device path (replace ttyUSB0, ttyACM0 with your device)
udevadm info -a -n /dev/ttyUSB0 | grep -E "idVendor|idProduct"
# Or
udevadm info -a -n /dev/ttyACM0 | grep -E "idVendor|idProduct"

# 2. Create udev rule (dialout group ownership, 0660 permissions)
# CH340 adapter example (1a86:7523) - replace with your adapter ID
echo 'SUBSYSTEM=="tty", ATTRS{idVendor}=="1a86", ATTRS{idProduct}=="7523", GROUP="dialout", MODE="0660"' | \
  sudo tee /etc/udev/rules.d/99-lerobot-serial.rules

# 3. Apply rules
sudo udevadm control --reload-rules
sudo udevadm trigger
```

> **Note**:
> - `MODE="0666"` or `chmod 666` makes devices writable by all users and is not recommended for security reasons.
> - udev rules with `GROUP="dialout"` require **user to be in dialout group** for access. Run the `usermod -aG dialout` command above first.

**Common USB-Serial Adapter IDs**:
- CH340/CH341: `1a86:7523`
- CP210x: `10c4:ea60`
- FTDI: `0403:6001`

### Finding USB Ports

```bash
lerobot-find-port
# Follow prompts to disconnect/connect cables to identify ports
```

---

## References

### Official Documentation
- [LeRobot SO-101 Documentation](https://huggingface.co/docs/lerobot/so101)
- [LeRobot SO-100 Documentation](https://huggingface.co/docs/lerobot/so100) (Deprecated)
- [LeRobot GitHub Repository](https://github.com/huggingface/lerobot)
- [SO-ARM100 GitHub (TheRobotStudio)](https://github.com/TheRobotStudio/SO-ARM100)

### SmolVLA
- [SmolVLA Paper (arXiv:2506.01844)](https://arxiv.org/abs/2506.01844)
- [SmolVLA Blog Post](https://huggingface.co/blog/smolvla)
- [SmolVLA Base Model](https://huggingface.co/lerobot/smolvla_base)

### Where to Buy
- [Seeed Studio SO-101 Kit](https://www.seeedstudio.com/)
- [Seeed Studio Wiki - SO10x Guide](https://wiki.seeedstudio.com/lerobot_so100m/)

### Community
- [HuggingFace Discord](https://discord.com/invite/s3KuuzsPFb)
- [LeRobot Datasets Hub](https://huggingface.co/datasets?other=lerobot)

---

## See Also

- [Hardware List](../index)
- [SmolVLA](../../models/smolvla)
- [Koch](koch)
- [ACT Policy](../../models/act)
