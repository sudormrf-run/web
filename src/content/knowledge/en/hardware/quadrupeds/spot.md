---
title: Boston Dynamics Spot
description: The standard in industrial quadruped walking robots - Quadruped achieving large-scale commercial deployment
tags: [boston-dynamics, spot, quadruped, industrial, inspection, mobile-manipulation, hyundai]
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

Summary of Spot's significance in the Physical AI field:

- **Pioneer in Commercial Quadrupeds**: General sales started in 2020, large-scale deployment in industrial sites
- **Industrial Validation of Legged Robotics**: Case that proved value in actual industrial sites beyond lab demos
- **Mobile Manipulation Platform**: Combines mobility and manipulation with Spot Arm
- **Extension as Research Platform**: Supports academic research ecosystem with SDK release and RL Researcher Kit
- **Physical AI Data Collection**: Potential for use as a platform for collecting diverse real-world data

<!-- Image pending: ![Spot](../../assets/hardware/quadrupeds/spot.png) -->
<p align="center"><em>Boston Dynamics Spot - Industrial 4-legged walking robot</em></p>

---

## Overview

Spot is a commercial quadruped walking robot developed by Boston Dynamics. Since starting general sales in 2020, it has been utilized for inspection and data collection tasks in various industries including construction, energy, manufacturing, and mining.

| Item | Content |
|------|---------|
| Manufacturer | Boston Dynamics (Hyundai Motor Group subsidiary) |
| Headquarters | Waltham, Massachusetts, USA |
| Release | 2020 (general sales) |

---

## Boston Dynamics History

### Founding and Development

| Year | Milestone | Source |
|------|-----------|--------|
| 1992 | Founded by Marc Raibert as spinoff from MIT Leg Laboratory | [Wikipedia](https://en.wikipedia.org/wiki/Boston_Dynamics) |
| 2005 | BigDog development started with DARPA funding | [Wikipedia](https://en.wikipedia.org/wiki/Boston_Dynamics) |
| 2013 | Acquired by Google (Alphabet) | [Wikipedia](https://en.wikipedia.org/wiki/Boston_Dynamics) |
| 2017 | Acquired by SoftBank | [SoftBank official announcement](https://group.softbank/en/news/press/20201211_0) |
| 2019 | Early version of Spot unveiled | [Boston Dynamics](https://bostondynamics.com/) |
| 2020 | Spot commercial sales started | [Boston Dynamics](https://bostondynamics.com/products/spot/) |
| 2021.06 | Hyundai Motor Group acquisition completed | [Boston Dynamics official announcement](https://bostondynamics.com/news/hyundai-motor-group-completes-acquisition-of-boston-dynamics-from-softbank/) |
| 2024 | Electric Atlas humanoid unveiled | [Wikipedia](https://en.wikipedia.org/wiki/Boston_Dynamics) |

### Key Figures

- **Marc Raibert**: Founder, former MIT/CMU professor, Leg Laboratory founder

### Ownership Structure (as of June 2021)

As of the acquisition completion in June 2021, Hyundai Motor Group holds 80% and SoftBank holds 20% stake. ([Boston Dynamics official announcement](https://bostondynamics.com/news/hyundai-motor-group-completes-acquisition-of-boston-dynamics-from-softbank/))

---

## Technical Specs

> **Source**: Specs below are based on [Boston Dynamics official spec sheet](https://bostondynamics.com/wp-content/uploads/2020/10/spot-specifications.pdf). Check official documents for latest information.

### Body Specs

| Item | Spec |
|------|------|
| Weight | 32.5 kg (71.7 lbs) |
| Size (LxWxH) | 1,100 x 500 x 840 mm (standing) |
| Payload | 14 kg (30 lbs) |
| Battery | 605 Wh lithium-ion |
| Runtime | Approximately 90 minutes (varies by conditions) |
| Max Speed | 1.6 m/s |
| Water/Dust | IP54 |
| Operating Temperature | -20C ~ 45C |

### Mobility Capabilities

| Item | Spec |
|------|------|
| Max Slope | 30 degrees |
| Stair Height | Up to 300 mm (11.8 in) |
| Detection Range | 4 m (13 ft) |
| Pose Recovery | Automatic self-righting |

### Sensors and Perception

- 5 stereo cameras (360-degree view)
- LiDAR option (for mapping and autonomous navigation)
- IMU (Inertial Measurement Unit)
- Various payload sensors mountable

---

## Spot Arm

> **Source**: [Spot Arm Specifications - Boston Dynamics Support](https://support.bostondynamics.com/s/article/Spot-Arm-Specifications-151694)

A 6-DoF manipulator mountable on Spot, enabling mobile manipulation tasks.

| Item | Spec |
|------|------|
| Degrees of Freedom (DoF) | 6 + gripper |
| Arm Weight | 8 kg |
| Arm Length | 985 mm (fully extended) |
| Max Height | 1,800 mm (robot standing) |
| Max Lift | 11 kg (24.3 lbs) |
| Continuous Lift (0.5m) | 5 kg (11 lbs) |
| Drag Capability | Up to 25 kg (on carpet) |

### Gripper Sensors

- 4K RGB camera
- ToF (Time of Flight) sensor
- IMU

### Use Examples

- Valve/lever operation
- Opening doors
- Object pickup and placement
- Drag operations

---

## SDK and Software

### Spot SDK

> **Source**: [Spot SDK Documentation](https://dev.bostondynamics.com/) (accessed January 2025)

Boston Dynamics provides a comprehensive Python SDK.

| Component | Description |
|-----------|-------------|
| Python Client | Robot control and sensor access |
| GraphNav | Autonomous navigation and mapping |
| Autowalk | Mission recording and replay |
| Mission Service | Complex autonomous behavior definition |

### Autonomous Features

```
[Map Recording] -> [Autowalk Creation] -> [Autonomous Execution]
     |              |              |
 GraphNav       Waypoint      Dynamic Replanning
                Action Definition      Obstacle Avoidance
```

- **Autowalk**: Mission recording and automatic replay
- **GraphNav**: Topology-based autonomous navigation
- **Dynamic Replanning**: Automatic new obstacle avoidance
- **Auto Charging**: Docking station integration

### Scout

Web-based fleet management software:

- Remote robot monitoring
- Mission scheduling
- Collected data management
- Multi-robot management

---

## Industrial Applications

### Key Application Areas (Examples)

Key application areas based on Boston Dynamics and partner cases:

| Field | Application Examples |
|-------|---------------------|
| Construction | Site progress monitoring, 3D scanning, safety inspection |
| Energy/Utilities | Power plant inspection, substation monitoring, pipeline inspection |
| Manufacturing | Factory patrol, equipment condition inspection, thermal inspection |
| Mining | Underground tunnel inspection, environmental monitoring |
| Public Safety | Hazardous environment exploration, explosive disposal support |

### Inspection Features (depending on options)

- Equipment anomaly detection with thermal camera
- Automatic gauge/dial reading
- Gas leak detection
- 3D point cloud generation
- Acoustic anomaly detection

---

## Pricing and Configuration

> **Note**: Prices are approximate publicly available information; actual prices may vary significantly by configuration, region, and contract terms. Contact Boston Dynamics for accurate quotes.

| Package | Estimated Price Range | Included |
|---------|----------------------|----------|
| Explorer Kit | Starting ~$75,000 | Robot, 1 battery, charger, controller, basic SW |
| Spot Arm Addition | Additional cost | 6-DoF arm, gripper |
| Enterprise Options | $100,000+ | LiDAR, advanced autonomous SW, Scout license |

---

## Use as Research Platform

### Academic Research Ecosystem

Boston Dynamics operates programs for academic institutions, with many universities using Spot as a research platform. See [Boston Dynamics Academia Program](https://bostondynamics.com/industry/academia-education/) for details.

### ROS 2 Integration

```
+-------------------------------------------+
|           spot_ros2 Package               |
+-------------------------------------------+
|  - Boston Dynamics SDK wrapper            |
|  - Joint-level control support            |
|  - Sensor data publishing                 |
|  - Navigation stack integration           |
+-------------------------------------------+
```

- **spot_ros2**: Maintained by BDAI (Robotics and AI Institute) ([GitHub](https://github.com/bdaiinstitute/spot_ros2))
- Clearpath Robotics official ROS package provided
- Low-level control research possible with Joint-level API

### RL Researcher Kit

Co-developed by Boston Dynamics, NVIDIA, AI Institute ([IEEE Spectrum](https://spectrum.ieee.org/boston-dynamics-research-spot)):

| Component | Description |
|-----------|-------------|
| Joint-level API | Direct individual joint control |
| Jetson AGX Orin | Onboard AI computation payload |
| NVIDIA Isaac Lab | Spot simulation environment |
| RL Policy Control | Locomotion policy customization |

### Research Application Areas (Examples)

- Autonomous navigation and SLAM research
- Reinforcement learning-based locomotion
- Mobile manipulation research
- Human-Robot Interaction
- Foundation Model application research

---

## Competitive Product Comparison (Reference)

> **Note**: Comparison below is approximate reference based on public information. Competitor specs and prices change frequently, so check each manufacturer's official materials for accurate information.

| Item | Spot | Unitree B2 | ANYmal |
|------|------|------------|--------|
| Manufacturer | Boston Dynamics | Unitree | ANYbotics |
| Primary Market | Industrial inspection | Industrial/research | Industrial inspection |
| SDK Public | O | O | Limited |
| Integrated Arm Option | O (Spot Arm) | X | X |

### Spot's Key Differentiators

- **Mature Ecosystem**: SDK, Scout, partner integration
- **Real-world Operation Experience**: Years of industrial site deployment experience
- **Spot Arm**: Integrated manipulation solution

---

## Significance from Physical AI Perspective

### Potential as Data Collection Platform

```
Real-world Data Collection:
+-----------------------------------------------------+
|  [Spot Sensors]     [Autonomous Navigation]     [Manipulation Data]       |
|       |              |               |              |
|    RGB/Depth      Path Data      Arm Trajectory         |
|       |              |               |              |
|  ------------------------------------------------   |
|           Foundation Model Training Data              |
+-----------------------------------------------------+
```

### VLA/Foundation Model Research Perspective

- Potential for data collection across various real-world scenarios
- Integrated learning data of autonomous navigation + manipulation
- Industrial site specialized task data

### Hyundai's Robotics Strategy

Hyundai Motor Group is expanding into the robotics field through the Boston Dynamics acquisition.

---

## References

### Official Documents
- [Boston Dynamics Spot Official Page](https://bostondynamics.com/products/spot/)
- [Spot SDK Documentation](https://dev.bostondynamics.com/)
- [GitHub - boston-dynamics/spot-sdk](https://github.com/boston-dynamics/spot-sdk)
- [Spot Specifications PDF](https://bostondynamics.com/wp-content/uploads/2020/10/spot-specifications.pdf)
- [Spot Arm Specifications](https://support.bostondynamics.com/s/article/Spot-Arm-Specifications-151694)

### ROS Integration
- [spot_ros2 GitHub](https://github.com/bdaiinstitute/spot_ros2)
- [Clearpath ROS Package](https://clearpathrobotics.com/blog/2020/09/clearpath-robotics-releases-ros-package-for-boston-dynamics-spot-robot/)

### Company Information
- [Hyundai Acquisition Announcement](https://bostondynamics.com/news/hyundai-motor-group-completes-acquisition-of-boston-dynamics-from-softbank/)
- [Boston Dynamics Wikipedia](https://en.wikipedia.org/wiki/Boston_Dynamics)
- [Boston Dynamics Academia Program](https://bostondynamics.com/industry/academia-education/)

### Technical Analysis
- [IEEE Spectrum - Hyundai Acquires Boston Dynamics](https://spectrum.ieee.org/hyundai-buys-boston-dynamics)
- [IEEE Spectrum - Spot RL Researcher Kit](https://spectrum.ieee.org/boston-dynamics-research-spot)

---

## See Also

- [Hardware List](../index)
- [Unitree Quadrupeds](unitree)
- [ANYmal](anymal)

### Related Hardware
- [Boston Dynamics Stretch](../mobile/stretch)
- [Mobile ALOHA](../mobile/mobile-aloha)

### Related Companies
- [NVIDIA](../../companies/nvidia) - Isaac Lab, RL Researcher Kit collaboration
- [Unitree](../../companies/unitree) - Competing quadruped manufacturer
