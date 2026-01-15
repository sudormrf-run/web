---
title: Kinova Robotics
description: Canadian-based lightweight collaborative robot manufacturer - Gen3, Gen3 Lite, Link 6
tags: [kinova, gen3, gen3-lite, link6, cobot, research, assistive, arm, canadian]
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

<!-- Image file needed: assets/hardware/arms/kinova.png -->
<!-- Image pending: ![Kinova Gen3](../../assets/hardware/arms/kinova.png) -->

## Overview

Kinova is a service robotics company founded in 2006 in Boisbriand, Quebec, Canada, originally starting with the development of assistive robot arms for people with upper body disabilities. The company was founded when founder Charles Deguire was inspired by the robot arm that his uncle Jaco, who was living in a wheelchair due to muscular dystrophy, had built himself. The first product 'Jaco' was also named after him. ([Wikipedia](https://en.wikipedia.org/wiki/Kinova))

Currently, Kinova has expanded its business into three areas: Assistive, Research, and Industrial, and is used in over 50 countries worldwide and in more than 500 academic and industrial research centers. It has been adopted by world-leading institutions such as Google and Johns Hopkins University. ([Trade Commissioner Canada](https://www.tradecommissioner.gc.ca/canadexport/0004324.aspx))

---

## Key Significance

1. **Pioneer in Assistive Robotics**: Starting with wheelchair-mounted robot arms, developed technology to support daily activities (eating, grooming, taking medication, etc.) for people with upper body disabilities
2. **Infinite Joint Rotation**: All actuators can rotate infinitely without cable wrapping limitations, maximizing manipulation freedom
3. **Built-in Torque Sensors**: Torque sensors built into each joint support force feedback, impedance control, and safe collaborative work
4. **Integrated Vision System**: Gen3 is a research robot arm with built-in 2D/3D vision sensors, optimized for vision-based robot control
5. **Lightweight Portability**: Ultra-lightweight design with installation in under 30 minutes, easy to move between research teams, projects, and environments

---

## Product Lineup

### Gen3 (Research Flagship)

| Item | Gen3 7DoF | Gen3 6DoF |
|------|-----------|-----------|
| Manufacturer | Kinova (Canada) | Kinova (Canada) |
| Degrees of Freedom | 7 DoF | 6 DoF |
| Payload | 4 kg | 4 kg |
| Reach | 902 mm | 891 mm |
| Weight | 8.2 kg | 7.2 kg |
| Vision | Built-in 2D/3D sensor | Built-in 2D/3D sensor |
| Torque Sensors | Built into all joints | Built into all joints |
| Gripper | Robotiq 2F-85/140 compatible | Robotiq 2F-85/140 compatible |

*Source: [Gen3 Official Product Page](https://www.kinovarobotics.com/product/gen3-robots)*

### Gen3 Lite (Education/Entry-level)

| Item | Spec |
|------|------|
| Manufacturer | Kinova (Canada) |
| Degrees of Freedom | 6 DoF |
| Payload | 0.5 kg |
| Reach | 760 mm |
| Weight | 5.4 kg |
| Control Frequency | 1 kHz low-level closed loop |
| Standby Power | 20 W |
| Controller | Built into arm |
| Gripper | Built into arm |
| Setup Time | Under 10 minutes |

*Source: [Gen3 Lite Official Product Page](https://www.kinovarobotics.com/product/gen3-lite-robots)*

### Link 6 (Industrial Collaborative Robot)

| Item | Spec |
|------|------|
| Manufacturer | Kinova (Canada) |
| Degrees of Freedom | 6 DoF |
| Payload | 6 kg |
| Reach | 1000 mm |
| Repeatability | +/-0.1 mm |
| Max Speed | 2 m/s |
| Weight | 23.45 kg |
| Processor | Intel Core i7, 8 GB DDR4, SSD |
| IP Rating | IP54 |
| Operating Temperature | 0~40 °C |
| Force/Torque Sensor | Built-in |
| Features | GPU expansion option, No-code programming |

*Source: [QVIRO Link 6 Specifications](https://qviro.com/product/kinova/link-6/specifications), [Kinova Link 6 Press Release](https://www.prnewswire.com/news-releases/kinova-launches-link-6-the-first-canadian-industrial-collaborative-robot-301507673.html)*

---

## Software and API Support

### Kortex API

Kinova Kortex is the common software platform for the Gen3 product family (Gen3, Gen3 Lite), using Google Protocol Buffer message objects for client-server data exchange.

**Supported Languages and Environments:**
- Python
- C++
- MATLAB / Simulink
- ROS (ros_kortex)
- ROS2 (ros2_kortex)

### ROS2 Support

The ros2_kortex driver implements a ros2_control hardware interface (SystemInterface), providing position, velocity, and effort interfaces for each joint. Twist interface for end-effector is also supported.

**Supported ROS2 Versions:**
- ROS2 Jazzy (Ubuntu 24.04)

**Supported Grippers:**
- Robotiq 2F-85
- Robotiq 2F-140
- Gen3 Lite 2F (built-in)

---

## VLA Research Applications

Kinova Gen3 is being used as a core platform for VLA (Vision-Language-Action) model research:

1. **"Towards Generalist Robot Policies: What Matters in Building Vision-Language-Action Models" (2024)**: Experiments on 20 tasks (opening, closing, button pressing, Pick & Place, etc.) with Gen3 7DoF + Robotiq 2F-85 combination ([arXiv:2412.14058](https://arxiv.org/abs/2412.14058))
2. **Reinforcement Learning Research**: RL-based control research for dynamic equilibrium tasks such as ball balancing and collision avoidance ([IRJMS 2024](https://www.irjms.com/wp-content/uploads/2024/01/Manuscript_IRJMS_0213_WS.pdf))
3. **Mobile Manipulation**: Integrated with Clearpath Robotics mobile platforms for mobile manipulation research
4. **Vision-based Manipulation**: Vision-based robot control research using built-in 2D/3D sensors

**Research Suitability:**
- Lightweight design for quick installation/movement in various environments
- Open API for easy custom control algorithm implementation
- Delicate manipulation with torque sensor-based force control
- Easy integration with existing research ecosystem through ROS/ROS2 support

---

## Pricing (Estimated)

| Model | Estimated Price (USD) |
|-------|----------------------|
| Gen3 7DoF | 25,000–35,000 |
| Gen3 6DoF | 20,000–30,000 |
| Gen3 Lite | 10,000–15,000 |
| Link 6 | Contact for quote |

*Prices vary by configuration, region, and vendor. For accurate pricing, contact [official site](https://www.kinovarobotics.com/).*

---

## References

### Official Materials
- [Kinova Robotics Official Site](https://www.kinovarobotics.com/)
- [Gen3 Product Page](https://www.kinovarobotics.com/product/gen3-robots)
- [Gen3 Lite Product Page](https://www.kinovarobotics.com/product/gen3-lite-robots)
- [Kortex API Documentation](https://docs.kinovarobotics.com/)

### GitHub Repositories
- [ros2_kortex](https://github.com/Kinovarobotics/ros2_kortex) - ROS2 driver
- [ros_kortex](https://github.com/Kinovarobotics/ros_kortex) - ROS driver
- [Kortex API](https://github.com/Kinovarobotics/kortex) - API examples and documentation

### External References
- [Kinova - Wikipedia](https://en.wikipedia.org/wiki/Kinova)
- [Trade Commissioner Canada - Kinova](https://www.tradecommissioner.gc.ca/canadexport/0004324.aspx)
- [QVIRO Link 6 Specifications](https://qviro.com/product/kinova/link-6/specifications)
- [Link 6 Press Release (PRNewswire)](https://www.prnewswire.com/news-releases/kinova-launches-link-6-the-first-canadian-industrial-collaborative-robot-301507673.html)

### Research Papers
- [Towards Generalist Robot Policies (arXiv:2412.14058)](https://arxiv.org/abs/2412.14058)
- [Reinforcement Learning-Based Collision Avoidance (IRJMS 2024)](https://www.irjms.com/wp-content/uploads/2024/01/Manuscript_IRJMS_0213_WS.pdf)

---

## See Also

- [Hardware List](../index)
- [Franka Panda](franka-panda)
- [UR Series](ur-series)
