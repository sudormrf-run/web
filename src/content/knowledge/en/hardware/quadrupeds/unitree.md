---
title: Unitree Quadrupeds
description: Unitree Robotics' 4-legged walking robot lineup - Global standard for value-oriented research quadrupeds
tags: [unitree, quadruped, go1, go2, go2-w, b1, b2, b2-w, aliengo, research, ros2, sdk, reinforcement-learning, locomotion, sim-to-real, open-x-embodiment, nvidia-isaac, chinese-robotics]
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

- **Pioneer in Quadruped Democratization**: High-performance quadruped popularization at 1/20 ~ 1/2 price of Spot, research accessibility innovation
- **Global Market Leader**: High market share in global quadruped robot market ([PanDaily][pandaily])
- **Research Ecosystem Building**: Standard platform for academic research with official SDK, ROS2 support, active community
- **Vertical Integration Manufacturing**: Cost competitiveness through in-house R&D of core components (motors, reducers, sensors, batteries, etc.)
- **VLA/Locomotion Research Core Platform**: NVIDIA GR00T support, included in Open X-Embodiment dataset
- **Wheeled-Legged Hybrid**: Leading wheel+leg hybrid locomotion with Go2-W, B2-W
- **Major Platform for RL Locomotion Research**: Widely used for sim-to-real research due to affordable price and open SDK

<!-- Image pending: ![Unitree Go2](../../assets/hardware/quadrupeds/unitree.png) -->

*Unitree Go2: The most popular quadruped platform for research*

---

## Overview

| Item | Content |
|------|---------|
| Manufacturer | Unitree Robotics |
| Headquarters | Hangzhou, China |
| Founded | 2016 (Founder: Wang Xingxing) |
| Features | Value, research accessibility, ROS2 support |
| Market Position | Global quadruped market leader |

Unitree Robotics is a Chinese robot company founded by Wang Xingxing in 2016. The company name "Unitree" is a compound of "Universe" and "Tree," meaning a universal technology base branching out to various applications. Founder Wang Xingxing started quadruped research during graduate studies at Shanghai University, worked at DJI, then founded the company to lead the democratization of high-performance quadrupeds.

> **Note**: Price and spec information is based on 2024-2025 official website and may vary by region and time.

---

## Product Lineup

Unitree has a diverse quadruped lineup from consumer/research to industrial. Each model is optimized for specific use cases and price points.

### Complete Lineup Comparison Table

| Model | Release | Price | Weight | Speed | Payload | Runtime | Primary Use |
|-------|---------|-------|--------|-------|---------|---------|-------------|
| **Aliengo** | 2019 | ~$15,000 | 21.5kg | 3.3m/s | 5kg | 2-4 hrs | Research/Dev |
| **Go1 Air** | 2021 | $2,700 | 12kg | 2.5m/s | 3kg | 1 hr | Entry/Hobby |
| **Go1 Pro** | 2021 | $3,500 | 12kg | 3.5m/s | 5kg | 1.5 hrs | Consumer |
| **Go1 Edu** | 2021 | ~$8,500 | 12kg | 3.7m/s | 5kg | 2 hrs | Research/Education |
| **Go2 Air** | 2023 | $1,600 | 15kg | 2.5m/s | 7kg | 1-2 hrs | Next-gen Entry |
| **Go2 Pro** | 2023 | $2,800 | 15kg | 3.5m/s | 8kg | 1-2 hrs | Consumer |
| **Go2 Edu** | 2023 | Inquiry | 15kg | 5m/s | 8kg | 2-4 hrs | Research/Education |
| **Go2-W** | 2024 | $4,500 ~ $14,000 | 18kg | 2.5m/s | 12kg | 1.5-3 hrs | Hybrid |
| **B1** | 2020 | ~$40,000 | 50kg | 1.8m/s | 5kg | 2-4 hrs | Industrial |
| **B2** | 2023 | ~$100,000 | 60kg | 6m/s+ | 40kg | 4-6 hrs | Industrial Premium |
| **B2-W** | 2024 | ~$90,000 | - | 5.56m/s | 40kg | 50km range | Industrial Wheeled |

### Consumer/Research Series

#### Go1 Series (2021)

Go1 is the product that made Unitree famous worldwide. Starting at $2,700, it dramatically lowered the barrier to entry for quadruped research.

| Model | Price | Weight | Max Speed | Payload | Runtime | Key Features |
|-------|-------|--------|-----------|---------|---------|--------------|
| **Go1 Air** | $2,700 | 12kg | 2.5m/s | 3kg | 1 hr | Entry level, basic sensors |
| **Go1 Pro** | $3,500 | 12kg | 3.5m/s | 5kg | 1.5 hrs | Enhanced sensors, ultrasonic |
| **Go1 Edu** | ~$8,500 | 12kg | 3.7m/s | 5kg | 2 hrs | SDK/API access, Jetson |

#### Go2 Series (2023)

Go2 is the successor to Go1, with significantly improved performance and sensors. The 4D LiDAR in particular greatly improves autonomous navigation capabilities.

| Model | Price | Weight | Max Speed | Payload | Runtime | Key Features |
|-------|-------|--------|-----------|---------|---------|--------------|
| **Go2 Air** | $1,600 | 15kg | 2.5m/s | 7kg | 1-2 hrs | Next-gen entry |
| **Go2 Pro** | $2,800 | 15kg | 3.5m/s | 8kg | 1-2 hrs | 4G, ISS 2.0, 4D LiDAR |
| **Go2 Edu** | Inquiry | 15kg | 5m/s | 8kg | 2-4 hrs | Jetson Orin, foot force sensors |
| **Go2-W** | $4,500 ~ $14,000 | 18kg | 2.5m/s | 12kg | 1.5-3 hrs | Wheel+leg hybrid |

### Research Series

#### Aliengo (2019)

Aliengo is Unitree's first serious research-grade quadruped. Released before Go1, it was adopted by academic research communities first.

| Item | Spec |
|------|------|
| Release | 2019 |
| Price | ~$15,000 (Edu version) |
| Weight | 21.5kg |
| Size | 650mm x 320mm x 600mm |
| Max Speed | 3.3m/s |
| Payload | 5kg |
| Joint Torque | 40N.m |
| Runtime | 2-4 hours |
| Computing | NVIDIA Jetson TX2/Xavier NX |
| Features | EtherCAT motor communication, C++ SDK |

**Why Aliengo was used in research:**
- Only affordable research-grade quadruped before Go1
- Early platform for reinforcement learning sim-to-real research
- Adopted by famous labs including UC Berkeley, ETH Zurich
- Experimental platform for various locomotion algorithm papers

### Industrial Series

#### B1 (2020)

B1 is Unitree's first large industrial quadruped.

| Item | Spec |
|------|------|
| Release | 2020 |
| Price | ~$40,000 |
| Weight | 50kg |
| Size | 1080mm x 460mm x 650mm |
| Max Speed | 1.8m/s |
| Payload | 5kg |
| Joint Torque | 180N.m |
| Runtime | 2-4 hours |
| Water/Dust | IP54 |
| Operating Temp | -20C ~ 55C |

#### B2 Series (2023)

B2 is the successor to B1, offering industry-leading performance.

| Model | Price | Weight | Max Speed | Payload | Runtime | Key Features |
|-------|-------|--------|-----------|---------|---------|--------------|
| **B2** | ~$100,000 | 60kg | 6m/s+ | 40kg(moving)/120kg(stationary) | 4-6 hrs | Industrial, IP67 |
| **B2-W** | ~$90,000 | - | 5.56m/s (20km/h) | 40kg | 50km range | 12-inch wheels |

---

## Go2 Detailed Specs

Unitree's most popular research quadruped.

### Physical Specifications

| Item | Spec |
|------|------|
| Size (standing) | 70cm x 31cm x 40cm |
| Size (sitting) | 76cm x 31cm x 20cm |
| Weight | ~15kg (with battery) |
| Materials | Aluminum alloy + engineering plastic |

### Performance

| Item | Spec |
|------|------|
| Max Speed | 5m/s (Edu basis) |
| Climb Angle | 30-40 degrees |
| Stair Height | 15-16cm |
| Joint Torque | ~45N.m |
| Battery | 8000mAh (standard) / 15000mAh (extended) |

### Sensor System

| Item | Spec |
|------|------|
| 4D LiDAR | 360 x 90 degree hemispherical perception, min 0.05m |
| Camera | HD wide-angle |
| IMU | Built-in |
| Foot Force Sensors | Edu models |

### Computing (Edu Model)

| Version | Computing Module | AI Performance |
|---------|------------------|----------------|
| Edu Standard | NVIDIA Jetson Orin Nano 8GB | 40 TOPS |
| Edu Plus | NVIDIA Jetson Orin NX 16GB | 100 TOPS |

---

## B2 Detailed Specs

Industrial high-performance quadruped.

### Physical Specifications

| Item | Spec |
|------|------|
| Size (standing) | 1098mm x 450mm x 645mm |
| Size (sitting) | 880mm x 460mm x 330mm |
| Weight | ~60kg (with battery) |

### Performance

| Item | Spec |
|------|------|
| Max Speed | 6m/s+ |
| Jump Distance | 1.6m+ |
| Joint Torque | 360N.m |
| Climb Angle | 45 degrees+ |
| Obstacle Clearance | 40cm |
| Stairs | 20-25cm continuous climb |

### Load and Durability

| Item | Spec |
|------|------|
| Stationary Load | 120kg+ |
| Moving Load | 40kg+ |
| With 20kg Load | 4 hours, 15km+ |
| Unloaded Continuous | 5 hours, 20km+ |
| Battery | 45Ah (2250Wh), 58V |

### Environmental Adaptation

| Item | Spec |
|------|------|
| Water/Dust | IP67 |
| Operating Temp | -20C ~ 55C |

### Computing

| Item | Spec |
|------|------|
| Base CPU | Intel Core i5/i7 |
| Expansion Options | Jetson Orin NX (up to 3) |
| Sensors | 3D LiDAR, depth camera x2, optical camera x2 |
| Interfaces | 1000M Ethernet x4, USB3.0 x4 |

---

## Wheeled Hybrid (Go2-W, B2-W)

Unitree's innovative wheel+leg hybrid robots.

### Go2-W

| Item | Spec |
|------|------|
| Size | 70cm x 43cm x 50cm |
| Weight | ~18kg |
| Tires | 7-inch pneumatic |
| Max Speed | 2.5m/s |
| Obstacle Clearance | 70cm |
| Climb Angle | 35 degrees |

### B2-W

| Item | Spec |
|------|------|
| Tires | 12-inch pneumatic (225mm) |
| Wheel Torque | 50N.m |
| Max Speed | 5.56m/s (20km/h) |
| Range | 50km with 40kg load |
| Price | ~$90,000 |

---

## Boston Dynamics Spot Comparison

| Item | Unitree Go2 Edu | Unitree B2 | Boston Dynamics Spot |
|------|----------------|------------|---------------------|
| **Price** | ~$8,000 | ~$100,000 | ~$75,000 |
| **Weight** | 15kg | 60kg | 32kg |
| **Payload** | 8kg | 40kg | 14kg |
| **Runtime** | 2-4 hrs | 4-6 hrs | 1.5 hrs |
| **Max Speed** | 5m/s | 6m/s+ | 1.6m/s |
| **Water/Dust** | - | IP67 | IP54 |
| **SDK** | Open | Open | Limited |
| **ROS Support** | Official ROS2 | Official ROS2 | Community |

### Unitree's Key Advantages

- **Price**: Significantly cheaper than Spot, advantageous for research-scale deployment
- **Speed**: B2 at 6+ m/s is top speed class among industrial quadrupeds
- **Runtime**: B2 up to 6 hours for extended operation
- **Openness**: Research-friendly with official SDK, ROS2 support
- **Cost Structure**: Competitive pricing through China manufacturing and vertical integration ([36Kr][36kr])

---

## SDK and Development Environment

Unitree maintains a research-friendly open SDK policy, a key differentiator from competitors.

### Official SDK Overview

```
+----------------------------------------------------------+
|                Unitree SDK Architecture                   |
+----------------------------------------------------------+
|                                                          |
|   Application Layer    Python Script / C++ App / ROS2 Node    |
|        |                                                |
|   SDK Layer     unitree_sdk2 / unitree_ros2            |
|        |                                                |
|   Communication Layer    CycloneDDS (DDS Middleware)    |
|        |                                                |
|   Hardware       Go2 / B2 / H1 Controller               |
|                                                          |
+----------------------------------------------------------+
```

### Official SDKs

| SDK | Language | Description | Supported Robots |
|-----|----------|-------------|------------------|
| **unitree_sdk2** | C++/Python | CycloneDDS-based communication | Go2, B2, H1 |
| **unitree_sdk2_python** | Python | unitree_sdk2 Python bindings | Go2, B2, H1 |
| **unitree_ros2** | C++/Python | ROS2 environment development package | Go2, B2, H1 |
| **unitree_rl_lab** | Python | Isaac Lab-based reinforcement learning | Go2, B2 |
| **unitree_IL_lerobot** | Python | LeRobot framework modification | Go2 |
| **unitree_sdk** | C++ | Legacy SDK (Go1, Aliengo) | Go1, Aliengo |

### Python SDK Usage Example

```python
# unitree_sdk2_python basic usage
from unitree_sdk2py.go2.robot import Go2Robot

robot = Go2Robot()
robot.set_mode("sport")
robot.move(vx=0.5, vy=0.0, vyaw=0.0)  # Forward movement
robot.stand_up()
robot.sit_down()
```

### C++ SDK Features

| Feature | Description |
|---------|-------------|
| **Low-level Control** | Direct joint torque/position/velocity control (Edu models) |
| **High-frequency Control** | Up to 1000Hz control loop |
| **Sensor Access** | IMU, joint state, foot contact sensors |
| **Safety Features** | Emergency stop, torque limits |

### ROS2 Support

Unitree provides the most robust ROS2 support in the industry.

| Item | Content |
|------|---------|
| **DDS Compatibility** | Uses CycloneDDS 0.10.2, direct ROS2 communication possible |
| **Official Package** | `unitree_ros2` (GitHub) |
| **Supported Versions** | ROS2 Humble (LTS), Jazzy |
| **Simulation** | Gazebo Harmonic, Ignition Fortress |

#### ROS2 Topics and Services

```
+----------------------------------------------------------+
|              unitree_ros2 Main Topics/Services            |
+----------------------------------------------------------+
|                                                          |
|  Topics:                                                  |
|    /go2/joint_states        - Joint state (12 DoF)        |
|    /go2/odom                - Odometry                    |
|    /go2/imu                 - IMU data                   |
|    /go2/cmd_vel             - Velocity command            |
|    /go2/lidar               - 4D LiDAR point cloud        |
|    /go2/camera/color        - RGB image                  |
|                                                          |
|  Services:                                                |
|    /go2/sport_mode          - Sport mode switch           |
|    /go2/stand_up            - Stand up                    |
|    /go2/sit_down            - Sit down                    |
|    /go2/emergency_stop      - Emergency stop              |
|                                                          |
+----------------------------------------------------------+
```

### Simulation Environments

| Simulator | Support Level | Features |
|-----------|---------------|----------|
| **NVIDIA Isaac Gym** | Official | Large-scale parallel RL training |
| **NVIDIA Isaac Lab** | Official | Next-gen Isaac, Omniverse integration |
| **Gazebo Harmonic** | Official | ROS2 standard simulator |
| **MuJoCo** | Community | High physics accuracy |
| **PyBullet** | Community | Lightweight RL experiments |
| **Webots** | Community | Educational |

### Community Resources

| Project | Description | Link |
|---------|-------------|------|
| **unitree-go2-ros2** | CHAMP controller + Ignition Fortress | GitHub |
| **go2_robot** | Universidad Rey Juan Carlos IRLab | GitHub |
| **Go2 MCP Server** | LLM natural language command control | GitHub |
| **go2_ros2_ws** | Complete ROS2 workspace | GitHub |
| **unitree_legged_sdk** | Legacy Go1 SDK | GitHub |

### Development Environment Setup Summary

```bash
# Ubuntu 22.04 + ROS2 Humble recommended
# 1. Install ROS2 Humble
sudo apt install ros-humble-desktop

# 2. Install CycloneDDS
sudo apt install ros-humble-rmw-cyclonedds-cpp
export RMW_IMPLEMENTATION=rmw_cyclonedds_cpp

# 3. Clone Unitree ROS2 package
cd ~/ros2_ws/src
git clone https://github.com/unitreerobotics/unitree_ros2

# 4. Build and run
cd ~/ros2_ws && colcon build
source install/setup.bash
ros2 launch unitree_ros2 go2_bringup.launch.py
```

---

## VLA Research Applications

Unitree quadrupeds have established themselves as core platforms for VLA (Vision-Language-Action) and locomotion research.

### NVIDIA GR00T Support

```
+----------------------------------------------------------+
|              NVIDIA GR00T Ecosystem                       |
+----------------------------------------------------------+
|  Isaac Lab    →   GR00T N1 Training   →   Unitree Deploy  |
|  (Simulation)     (Foundation Model)    (Real Robot)       |
+----------------------------------------------------------+
|  - Unitree Go2 simulation environment provided            |
|  - Unitree B2 simulation environment provided             |
|  - Used for cross-embodiment policy transfer research     |
+----------------------------------------------------------+
```

- **GR00T N1 Series Supported Platform**: NVIDIA Isaac Lab provides Unitree robot simulation environments
- **Isaac Lab/Omniverse Simulation**: High-quality Unitree URDF and simulation environments provided
- **Cross-embodiment Learning**: Used for humanoid-quadruped policy transfer research
- **Jetson Orin Equipped**: NVIDIA hardware integration for onboard AI inference

### Open X-Embodiment

Unitree robot data is included in the large-scale robot dataset project led by Google DeepMind.

| Item | Content |
|------|---------|
| Dataset Scale | 22 robot types, 1M+ episodes |
| Unitree Included Data | Go1, Go2 locomotion data |
| Models Used | RT-X, Octo, OpenVLA, etc. |
| Contributing Institutions | UC Berkeley, Stanford, CMU, etc. |

**Research Applications:**
- **RT-X Model**: Generalization ability learning across various robots
- **Octo**: Open-source general robot policy
- **OpenVLA**: Vision-Language-Action model locomotion extension

### Locomotion Research

Unitree is a widely used platform for reinforcement learning-based locomotion research.

#### Key Research Areas

| Area | Description | Representative Research |
|------|-------------|------------------------|
| **Sim-to-Real Transfer** | Policy transfer from simulation to real robot | ETH Zurich, MIT |
| **Terrain Adaptation** | Adaptive walking on various terrains | UC Berkeley |
| **Blind Locomotion** | Walking with proprioception only without vision | CMU |
| **Parkour** | Dynamic movements like obstacle jumping | ETH RSL |
| **Multi-skill Learning** | Various skills with single policy | Stanford |

#### sim-to-real Research Pipeline

```
+----------------------------------------------------------+
|                sim-to-real Research Flow                  |
+----------------------------------------------------------+
|                                                          |
|  [Isaac Gym/Lab]  →  [RL Policy Training]  →  [Domain Random] |
|        |                  |                  |          |
|   Unitree URDF      PPO/SAC etc        Terrain/Friction/Mass     |
|        |                  |                  |          |
|  -------------------------------------------------------- |
|                          |                              |
|              [Unitree Go2/B2 Deployment]                 |
|                          |                              |
|              Zero-shot performance in real environment   |
|                                                          |
+----------------------------------------------------------+
```

#### Representative Research Papers

| Paper | Institution | Robot | Key Contribution |
|-------|-------------|-------|------------------|
| Learning Quadrupedal Locomotion | ETH Zurich | Aliengo | Large-scale sim-to-real |
| Legged Robots that Keep on Learning | UC Berkeley | Go1 | Online adaptation learning |
| Walk These Ways | MIT | Go1 | Various walking styles |
| Extreme Parkour | CMU | Go1 | Parkour motion learning |
| DreamWaQ | KAIST | Go1 | World model-based |

### Why Go2 is Popular in Research

Go2 Edu is currently the most popular research quadruped.

```
+----------------------------------------------------------+
|               Why Go2 is Preferred for Research           |
+----------------------------------------------------------+
|                                                          |
|  1. Price Accessibility                                   |
|     - 1/10 the price of Spot ($75K)                      |
|     - Multi-robot experiments possible (swarm research)   |
|     - Low replacement cost if damaged                     |
|                                                          |
|  2. Open SDK                                              |
|     - Official Python, C++, ROS2 support                 |
|     - Low-level joint control access (Edu version)       |
|     - Active community packages                           |
|                                                          |
|  3. Sufficient Computing Power                            |
|     - Jetson Orin (40-100 TOPS)                          |
|     - Onboard RL policy execution possible               |
|     - Vision-based navigation support                     |
|                                                          |
|  4. Proven Hardware                                       |
|     - Reliability verified with thousands sold           |
|     - Easy parts replacement                              |
|     - Global technical support                            |
|                                                          |
|  5. Rich Simulation Environments                          |
|     - Official Isaac Gym/Lab support                     |
|     - Gazebo, MuJoCo URDF provided                       |
|     - PyBullet community models                           |
|                                                          |
+----------------------------------------------------------+
```

### LLM/VLM Integration Research

Recently, research combining large language models with Unitree robots is active.

| Project | Description |
|---------|-------------|
| **Go2 MCP Server** | Robot control via natural language with Claude/GPT |
| **SayPlan + Unitree** | Long-term task plan execution |
| **LLM-Planner** | Convert natural language commands to robot actions |
| **VLM Navigation** | Vision-language model-based navigation |

### Teleoperation Data Collection

| Method | Equipment | Use |
|--------|-----------|-----|
| **Joystick Control** | PS4/Xbox controller | Basic movement data |
| **App Control** | Unitree official app | Consumer control |
| **VR Teleop** | Quest/Vive | Research precision control |
| **Motion Capture** | Xsens/Noitom | Human motion imitation |

---

## Research Popularity

### Academic Research Adoption

Unitree quadrupeds are widely adopted by universities and research institutions worldwide due to affordable prices and open SDK:

- **Price Accessibility**: Research-scale deployment possible at 1/10 Spot price
- **Multi-robot Experiments**: Affordable price supports swarm robot research
- **Educational Use**: Popular as robotics education platform

### Major Customers

- NVIDIA (since 2020, [36Kr][36kr])
- Google (since 2020, [36Kr][36kr])
- Major university research labs worldwide

---

## Company History

| Year | Event |
|------|-------|
| 2013 | Wang Xingxing starts quadruped research at Shanghai University |
| 2016 | XDog development, Unitree Robotics founded |
| 2017 | Laikago unveiled (named after Laika) |
| 2020 | NVIDIA, Google customers secured, profitable ([36Kr][36kr]) |
| 2021 | Go1 released, consumer quadruped democratization |
| 2023 | Go2 released, B2 announced, H1 humanoid unveiled |
| 2024 | Go2-W released |
| 2025 | Hong Kong IPO under consideration (per reports) |

### Investment Status

- **Recent Round**: Series C-IV (2025 basis)
- **Major Investors**: Alibaba, Tencent, Beijing State-owned Capital Operation and Management Company, etc. ([PitchBook][pitchbook])

---

## Application Areas

### Research & Education

- Locomotion algorithm research
- Reinforcement learning/imitation learning experiments
- Robotics education

### Industrial (B2/B2-W)

- Facility inspection (power plants, chemical plants)
- Construction site monitoring
- Hazardous environment exploration
- Logistics automation

### Consumer (Go1/Go2)

- Tech enthusiasts/developers
- Prototyping
- Entertainment

---

## References

### Official Resources
- [Unitree Go2 Official Page](https://www.unitree.com/go2/)
- [Unitree B2 Official Page](https://www.unitree.com/b2)
- [Unitree Go2-W Official Page](https://www.unitree.com/mobile/go2-w/)
- [Unitree GitHub](https://github.com/unitreerobotics)
- [Unitree SDK2 Documentation](https://support.unitree.com/home/en/developer)

### Technical Reviews
- [IEEE Spectrum - Unitree Go2](https://spectrum.ieee.org/quadruped-robot-unitree-go2)
- [IEEE Spectrum - Go1 Launch Review](https://spectrum.ieee.org/unitrees-go1-robot-dog-looks-pretty-great-costs-just-usd-2700)

### Market Analysis
- [Unitree vs Boston Dynamics Comparison](https://www.inrobots.shop/blogs/buyers-guide/unitree-vs-boston-dynamics)
- [The Rise of Unitree Robotics](https://mikekalil.com/blog/rise-of-unitree/)

### ROS2 Community
- [unitree_ros2 GitHub](https://github.com/unitreerobotics/unitree_ros2)
- [ROS Discourse - Go2 Jazzy Release](https://discourse.openrobotics.org/t/new-open-source-release-for-quadruped-unitree-go2-ros-2-jazzy-x-gazebo-harmonic/43569)

<!-- Reference Links -->
[pandaily]: https://pandaily.com/from-robot-dogs-to-humanoids-the-unlikely-rise-of-unitree-robotics/
[36kr]: https://eu.36kr.com/en/p/3392794880493703
[pitchbook]: https://pitchbook.com/profiles/company/398902-78

---

## See Also

- [Hardware List](../index)
- [Boston Dynamics Spot](spot)
- [ANYbotics ANYmal](anymal)
- [Unitree Humanoids](../humanoids/unitree-humanoid)
- [GR00T](../../models/groot)
