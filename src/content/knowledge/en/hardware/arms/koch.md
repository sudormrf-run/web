---
title: Koch v1.1
description: Low-cost open-source DIY robot arm designed by Alexander Koch, officially supported by HuggingFace LeRobot
tags: [koch, low-cost, diy, lerobot, dynamixel, xl430, xl330, open-source, 3d-print, teleoperation, imitation-learning]
category: hardware
created: 2024-04-01
updated: 2025-01-09

# Authorship
createdBy:
  name: Jong Hyun Park
  email: jhpark@sudormrf.run
lastEditedBy:
  name: Jong Hyun Park
  email: jhpark@sudormrf.run
lastEditedAt: 2026-01-15
---

# Koch v1.1

> Home > Hardware > Arms > Koch

<!-- Image pending: ![Koch](../../assets/hardware/arms/koch.png) -->

---

## Overview

Koch v1.1 is an improved version of the low-cost open-source robot arm **designed by Alexander Koch** and **refined by HuggingFace engineer Jess Moss**. For approximately $250-$480, you can build a Leader-Follower teleoperation system with complete integration with the LeRobot framework.

| Item | Details |
|------|---------|
| **Original Designer** | Alexander Koch (Co-founder of Tau Robotics) |
| **v1.1 Improvements** | Jess Moss (HuggingFace) |
| **License** | Open Source (GitHub public) |
| **Type** | 6-DoF low-cost 3D printed robot arm |
| **DoF** | 6 (Shoulder Pan, Shoulder Lift, Elbow, Wrist Flex, Wrist Roll, Gripper) |
| **Motors** | Dynamixel XL430-W250-T + XL330-M288-T |
| **Parts Cost** | ~$258 (Follower) / ~$183 (Leader) / ~$441 (pair) |
| **Release Date** | Original: Early 2024, v1.1: July 2024 |

---

## Key Significance

### Low-Cost Data Collection Platform for VLA Research

The most important contribution of the Koch robot arm is **dramatically lowering the data collection cost for VLA (Vision-Language-Action) research**.

1. **Ultra-low-cost Hardware**: 1/100 the cost compared to existing research robot arms (Franka $30K+, UR $25K+)
2. **Fully Open Source**: CAD files, SolidWorks models, BOM, and control code all publicly available
3. **3D Printing Based**: Manufacturable with standard FDM printers (Prusa, Ender, Bambu)
4. **LeRobot Integration**: Perfect compatibility with HuggingFace's robotics ML framework

### Tau Robotics' Vision

Alexander Koch presented the vision of **"millions of robot arms learning in the real world"** through Tau Robotics. This low-cost robot arm is the core hardware for that vision, enabling distributed data collection and large-scale imitation learning.

> "We are building a general AI for robots. We start by building millions of robot arms that learn in the real world."
> - Alexander Koch, Tau Robotics

---

## Technical Specifications

### Motor Configuration

#### Follower Arm (Controlled Target)

| Joint | Motor | Quantity | Torque | Features |
|-------|-------|----------|--------|----------|
| Shoulder Pan | XL430-W250-T | 1 | 1.4 N.m | High torque, base rotation |
| Shoulder Lift | XL430-W250-T | 1 | 1.4 N.m | High torque, shoulder lift |
| Elbow Flex | XL330-M288-T | 1 | 0.52 N.m | Lightweight (18g) |
| Wrist Flex | XL330-M288-T | 1 | 0.52 N.m | Lightweight (18g) |
| Wrist Roll | XL330-M288-T | 1 | 0.52 N.m | Lightweight (18g) |
| Gripper | XL330-M288-T | 1 | 0.52 N.m | Lightweight (18g) |

**Design Philosophy**: XL430 motors are about 2x more powerful than XL330, used for shoulder joints supporting heavy loads. XL330s are ultra-lightweight at 18g to minimize arm end inertia.

#### Leader Arm (Teleoperation Controller)

| Joint | Motor | Quantity | Features |
|-------|-------|----------|----------|
| All joints | XL330-M077-T | 6 | 5V unified, simplified assembly |

The Leader arm is configured with a **handle and trigger** instead of a gripper for intuitive control by human operators.

### Dynamixel Motor Details

| Model | Voltage | Stall Torque | Weight | Price |
|-------|---------|--------------|--------|-------|
| XL430-W250-T | 11.1V | 1.4 N.m | 57.2g | ~$50 ($27.50 on sale) |
| XL330-M288-T | 5.0V | 0.52 N.m | 18g | ~$24 |
| XL330-M077-T | 5.0V | 0.34 N.m | 18g | ~$24 |

---

## Bill of Materials (BOM)

### Follower Arm (Controlled Target)

| Part | Quantity | Price (USD) | Notes |
|------|----------|-------------|-------|
| Dynamixel XL430-W250-T | 2 | $100 | Shoulder joints (high torque) |
| Dynamixel XL330-M288-T | 4 | $96 | Elbow, wrist, gripper |
| XL330 Frame & Idler Wheel Set | 1 | $10 | 4pc set, use 2-3 |
| XL430 Idler Wheel Set | 1 | $7 | |
| Waveshare Serial Bus Servo Driver | 1 | $10 | USB-C connection |
| 12V to 5V Voltage Reducer | 1 | $10 | Voltage conversion for XL330 |
| 12V Power Supply | 1 | $12 | Main power |
| Table Clamp | 1 | $6 | Mounting |
| Wires/Connectors | - | $7 | Wiring |
| **Total** | | **~$258** | 3D printing cost separate |

### Leader Arm (Teleoperation Controller)

| Part | Quantity | Price (USD) | Notes |
|------|----------|-------------|-------|
| Dynamixel XL330-M077-T | 6 | $144 | Unified for all joints |
| XL330 Frame | 1 | $7 | |
| XL330 Idler Wheel Set | 1 | $10 | |
| Waveshare Serial Bus Servo Driver | 1 | $10 | |
| 5V Power Supply | 1 | $6 | Leader uses 5V only |
| Table Clamp | 1 | $6 | |
| **Total** | | **~$183** | 3D printing cost separate |

### Total System Cost

| Configuration | Cost | Use Case |
|---------------|------|----------|
| Follower only | ~$258 | Autonomous control research |
| Leader + Follower | ~$441 | Teleoperation data collection |
| Dual arm system | ~$882 | Bimanual manipulation |

### Where to Buy

- **ROBOTIS**: [Koch v1.1 Leader Kit](https://robotis.us/koch-v1-1-low-cost-robot-arm-leader/), [Follower Kit](https://www.robotis.us/koch-v1-1-low-cost-robot-arm-follower/)
- **PartaBot**: Complete products and parts kits
- **Tau Robotics**: [Waiting list](https://tau-robotics.com) - One-stop package

> **Tip**: ROBOTIS official shop frequently offers 10% discount codes.

---

## v1.0 vs v1.1 Comparison

| Item | v1.0 (Original) | v1.1 (Improved) |
|------|-----------------|-----------------|
| **Designer** | Alexander Koch | Jess Moss (HuggingFace) |
| **Assembly Difficulty** | Medium (soldering required) | Low (no soldering required) |
| **Voltage Converter** | Manual adjustment needed | Pre-set DC converter |
| **Screw Interference** | Some present | Fixed |
| **Unnecessary Materials** | Present | Removed |
| **Hole Sizes** | Non-standard | Standardized |
| **Plastic Screws** | Used | Removed (replaced with metal screws) |
| **Leader Board Platform** | None | Added |
| **CAD Format** | STL only | STL + SolidWorks (easier community contribution) |

### Key Improvements in v1.1

1. **No Soldering**: DC converter replacement improves accessibility for general users
2. **Standardization**: Unified hole sizes and screw specifications reduce assembly errors
3. **SolidWorks Models**: Easier community modification and contribution
4. **LeRobot Optimization**: ML workflow optimization by HuggingFace engineers

---

## Assembly and Build

### 3D Printing Requirements

| Item | Recommended Specs |
|------|-------------------|
| **Material** | PLA+, ABS, PETG (reasonably strong plastic) |
| **Nozzle** | 0.4mm |
| **Layer Height** | 0.2mm |
| **Infill** | ~30% |
| **Support** | Gripper only |

**Recommended Printers**: Prusa Mini+, Bambu P1, Creality Ender 3

### Assembly Process

1. **3D Printing**: Print all structural parts with STL files
2. **Motor Setup**: Set unique IDs (1-6) and 1M baudrate for each motor with Dynamixel Wizard
3. **Voltage Converter Connection**: 12V → 5V conversion (for XL330 on Follower)
4. **Serial Bus Connection**: Connect motors in daisy chain
5. **Board Mounting**: Mount controller board to base
6. **Calibration**: Set joint ranges with LeRobot

### Power Configuration

| Arm | Voltage | Reason |
|-----|---------|--------|
| Leader | 5V | All XL330-M077 motors use 5V |
| Follower | 12V + 5V | XL430 uses 12V, XL330 uses 5V (with converter) |

> **Warning**: Applying 12V to Leader risks motor damage

---

## LeRobot Ecosystem Integration

### Installation

There are two ways to install LeRobot:

#### Method 1: Source Installation (Recommended - for development/contribution)

```bash
# Clone repository
git clone https://github.com/huggingface/lerobot.git
cd lerobot

# Create and activate virtual environment
python -m venv .venv
source .venv/bin/activate  # Linux/macOS
# .venv\Scripts\activate   # Windows

# Install with Dynamixel SDK
pip install -e ".[dynamixel]"
```

#### Method 2: pip Installation (Simple use)

```bash
pip install "lerobot[dynamixel]"
```

> **Note**: Both methods install CLI commands (`lerobot-find-port`, `lerobot-calibrate`, etc.). With source installation, you can also run via `python lerobot/scripts/...`.

### Finding Ports

```bash
lerobot-find-port
```

#### macOS Output Example

```
Finding all available ports for the MotorBus.
['/dev/tty.usbmodem575E0032081', '/dev/tty.usbmodem575E0031751']
Remove the USB cable from your MotorsBus and press Enter when done.
...
The port of this MotorsBus is /dev/tty.usbmodem575E0032081
```

- Leader arm: `/dev/tty.usbmodem<SERIAL_A>`
- Follower arm: `/dev/tty.usbmodem<SERIAL_B>`

#### Linux Output Example

```
Finding all available ports for the MotorBus.
['/dev/ttyACM0', '/dev/ttyACM1']
Remove the USB cable from your MotorsBus and press Enter when done.
...
The port of this MotorsBus is /dev/ttyACM1
```

- Leader arm: `/dev/ttyACM0` or `/dev/ttyACM1`
- Follower arm: remaining port

### Linux USB Permission Setup

USB device access permissions are required. **Using the `dialout` group is recommended for security**:

#### Recommended: Add to dialout group (permanent, safe)

```bash
# Add current user to dialout group
sudo usermod -aG dialout $USER

# Log out and log back in to apply
# Or reboot
```

#### Alternative: Add udev rules (permanent, safe)

```bash
# Create udev rule file (dialout group based, security recommended)
# For Waveshare board and general USB-serial adapters
cat << 'EOF' | sudo tee /etc/udev/rules.d/99-dynamixel.rules
# Waveshare Serial Bus Servo Driver (CH340/CH341)
SUBSYSTEM=="tty", ATTRS{idVendor}=="1a86", ATTRS{idProduct}=="7523", GROUP="dialout", MODE="0660"
SUBSYSTEM=="tty", ATTRS{idVendor}=="1a86", ATTRS{idProduct}=="5523", GROUP="dialout", MODE="0660"
# FTDI USB-serial adapters
SUBSYSTEM=="tty", ATTRS{idVendor}=="0403", GROUP="dialout", MODE="0660"
# CP210x USB-serial adapters
SUBSYSTEM=="tty", ATTRS{idVendor}=="10c4", GROUP="dialout", MODE="0660"
# Generic CDC ACM devices
SUBSYSTEM=="tty", KERNEL=="ttyACM*", GROUP="dialout", MODE="0660"
EOF

# Reload udev rules
sudo udevadm control --reload-rules
sudo udevadm trigger
```

> **Note**: The above rules only allow access for users in the `dialout` group. You must add your user to the `dialout` group.

#### Temporary Solution (development/testing only, security caution)

```bash
# Warning: world-writable permissions, security risk
# Use only temporarily in development environment

# CDC ACM devices (typically Koch board)
sudo chmod 666 /dev/ttyACM0
sudo chmod 666 /dev/ttyACM1

# USB-serial adapters (some environments)
sudo chmod 666 /dev/ttyUSB0
sudo chmod 666 /dev/ttyUSB1
```

> **Security Warning**: `chmod 666` grants read/write permissions to all users. Use `dialout` group or udev rules in production environments.

### Motor Setup

```bash
# Follower arm motor ID setup
# macOS example
lerobot-setup-motors \
    --robot.type=koch_follower \
    --robot.port=/dev/tty.usbmodem575E0031751

# Linux example
lerobot-setup-motors \
    --robot.type=koch_follower \
    --robot.port=/dev/ttyACM0

# Leader arm motor ID setup
# macOS example
lerobot-setup-motors \
    --teleop.type=koch_leader \
    --teleop.port=/dev/tty.usbmodem575E0032081

# Linux example
lerobot-setup-motors \
    --teleop.type=koch_leader \
    --teleop.port=/dev/ttyACM1
```

### Calibration

Calibration is **essential for neural network transfer between robots**. For policies trained on one robot to work on another, they must return the same values at the same physical positions.

```bash
# Follower arm calibration
# Replace <PORT> with actual port (e.g., /dev/ttyACM0 or /dev/tty.usbmodem...)
lerobot-calibrate \
    --robot.type=koch_follower \
    --robot.port=<PORT> \
    --robot.id=my_koch_follower

# Leader arm calibration
lerobot-calibrate \
    --teleop.type=koch_leader \
    --teleop.port=<PORT> \
    --teleop.id=my_koch_leader
```

### Teleoperation and Data Collection

> **Important**: In the commands below, replace `<FOLLOWER_PORT>` and `<LEADER_PORT>` with actual ports:
> - macOS: `/dev/tty.usbmodem...`
> - Linux: `/dev/ttyACM0`, `/dev/ttyACM1` or `/dev/ttyUSB0`, `/dev/ttyUSB1`

> **Note**: `robot.type` and `teleop.type` use `koch_follower` and `koch_leader` as in motor setup/calibration above.

#### With Source Installation (from lerobot directory)

```bash
# Teleoperation test (control Follower with Leader)
python lerobot/scripts/control_robot.py teleoperate \
    --robot.type=koch_follower \
    --robot.port=<FOLLOWER_PORT> \
    --teleop.type=koch_leader \
    --teleop.port=<LEADER_PORT> \
    --robot.cameras="{'cam': {'type': 'opencv', 'index': 0}}"

# Record dataset
python lerobot/scripts/control_robot.py record \
    --robot.type=koch_follower \
    --robot.port=<FOLLOWER_PORT> \
    --teleop.type=koch_leader \
    --teleop.port=<LEADER_PORT> \
    --repo-id=your-username/koch-picking-task

# Train policy
python lerobot/scripts/train.py \
    --policy.type=act \
    --dataset.repo_id=your-username/koch-picking-task
```

#### With pip Installation (module execution)

```bash
# Teleoperation test (control Follower with Leader)
python -m lerobot.scripts.control_robot teleoperate \
    --robot.type=koch_follower \
    --robot.port=<FOLLOWER_PORT> \
    --teleop.type=koch_leader \
    --teleop.port=<LEADER_PORT> \
    --robot.cameras="{'cam': {'type': 'opencv', 'index': 0}}"

# Record dataset
python -m lerobot.scripts.control_robot record \
    --robot.type=koch_follower \
    --robot.port=<FOLLOWER_PORT> \
    --teleop.type=koch_leader \
    --teleop.port=<LEADER_PORT> \
    --repo-id=your-username/koch-picking-task

# Train policy
python -m lerobot.scripts.train \
    --policy.type=act \
    --dataset.repo_id=your-username/koch-picking-task
```

---

## VLA Research Applications

### Imitation Learning Demos

Alexander Koch successfully demonstrated the following tasks with the Koch robot arm:

1. **Simple Picking Task**: Object picking learned from camera images and joint states only
2. **Clothes Folding**: Clothes folding task with dual arm configuration
3. **Multi-Robot Control**: Single neural network controlling multiple robot arms with language conditioning

### Supported Policy Architectures

The following policies can be trained with Koch + LeRobot:

| Policy | Description |
|--------|-------------|
| ACT | Action Chunking with Transformers |
| Diffusion Policy | Diffusion model-based policy |
| SmolVLA | 450M lightweight VLA model |
| TDMPC | Model-based RL |

### Community Data Collection

Koch's low-cost structure enables distributed community data collection:

- **HuggingFace Hub**: 487+ community datasets tagged with `lerobot`
- **Open X-Embodiment**: Can contribute to large-scale robot datasets
- **Tau Robotics**: Vision of millions of robots learning in the real world

---

## Troubleshooting

| Problem | Solution |
|---------|----------|
| Motor not recognized | Check USB cable, power cable, 3-pin cable |
| Waveshare board not recognized | Ensure jumper is set to 'B' channel (USB) |
| Motor ID conflict | Connect only one motor at a time to set ID |
| Linux permission error | Add user to `dialout` group or set udev rules (see above) |
| Calibration failed | Move each joint slowly through full range of motion |
| Insufficient torque | Check power supply, ensure 12V is being supplied properly |

---

## Comparison with SO-100/SO-101

| Item | Koch v1.1 | SO-100/SO-101 |
|------|-----------|---------------|
| **Motors** | Dynamixel XL430/XL330 | Feetech STS3215 |
| **Cost** | ~$440 (pair) | ~$230 (pair) |
| **Torque** | Higher | Medium |
| **Precision** | Higher | Medium |
| **Assembly Difficulty** | Medium | Low |
| **Community** | Growing | Active |
| **LeRobot Support** | Official support | Official support |

**Selection Guide**:
- **Budget priority**: Choose SO-100/SO-101
- **Performance priority**: Choose Koch v1.1
- **Both**: LeRobot compatible, same code works

---

## References

### Official Resources
- [Koch v1.1 GitHub (Jess Moss)](https://github.com/jess-moss/koch-v1-1)
- [Original Low Cost Robot GitHub (Alexander Koch)](https://github.com/AlexanderKoch-Koch/low_cost_robot)
- [LeRobot Koch Documentation](https://huggingface.co/docs/lerobot/en/koch)
- [Koch v1.1 Assembly Video Tutorial](https://youtu.be/8nQIg9BwwTk)

### Where to Buy
- [ROBOTIS - Koch v1.1 Leader](https://robotis.us/koch-v1-1-low-cost-robot-arm-leader/)
- [ROBOTIS - Koch v1.1 Follower](https://www.robotis.us/koch-v1-1-low-cost-robot-arm-follower/)
- [PartaBot - Koch v1.1](https://partabot.com/products/low-cost-robot-arm-koch-v1-0-leader-arm)

### 3D Print Files
- [MakerWorld - Koch V1.1 Follower](https://makerworld.com/en/models/692107-koch-v1-1-follower-robot)
- [MakerWorld - Koch V1.1 Leader](https://makerworld.com/en/models/692099-koch-v1-1-leader-robot)

### Related Projects
- [Tau Robotics](https://tau-robotics.com)
- [LeRobot Framework](https://github.com/huggingface/lerobot)
- [Alexander Koch Twitter](https://x.com/alexkoch_ai)

### Community
- [HuggingFace Discord](https://discord.com/invite/s3KuuzsPFb)
- [Robots That Exist - Koch Info](https://robotsthatexist.com/robots/koch-v1-1)

---

## See Also

- [Hardware List](../index.md)
- [LeRobot Arms (SO-100/SO-101)](lerobot-arms.md)
- [SmolVLA](../../models/smolvla.md)
- [ACT Policy](../../models/act.md)
- [Diffusion Policy](../../models/diffusion-policy.md)
