---
title: Robotiq Adaptive Grippers
description: Industrial cobot grippers centered on the 2F-85, 2F-140, and 3-Finger Adaptive Gripper
tags: [robotiq, gripper, 2f-85, 2f-140, 3-finger, adaptive-gripper, ur, cobot, flowers]
category: hardware
created: 2026-05-17
updated: 2026-05-17

# Authorship
createdBy:
  name: 박종현
  email: jhpark@sudormrf.run
lastEditedBy:
  name: 박종현
  email: jhpark@sudormrf.run
lastEditedAt: 2026-05-17
---

# Robotiq Adaptive Grippers

<iframe width="100%" style="aspect-ratio: 16/9;" src="https://www.youtube.com/embed/LQukPCgaeFg" title="Robotiq Adaptive Grippers Official Introduction" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

## One-line judgment

**Robotiq is better treated as a robust work gripper for stem bundles, tools, and fixtures than as a petal-handling hand.** With soft tips and force limits, it becomes a practical support gripper for a flower-work cell.

## Overview

**Robotiq Adaptive Grippers** are among the most common commercial grippers used in cobot cells. They do not provide humanoid-hand dexterity, but they are strong candidates for tool holding, stem-bundle fixturing, and stable integration with industrial robot arms.

| Model | Notes |
|------|-------|
| 2F-85 | 85mm stroke, compact adaptive two-finger gripper |
| 2F-140 | 140mm stroke, better for larger objects and bundles |
| 3-Finger Adaptive Gripper | Three-finger adaptive gripper with multiple grasp modes |

---

## Fit for Flower Handling and Bouquet Making

| Criterion | Assessment |
|----------|------------|
| Stem-bundle holding | Good. 2F-140 or 3-Finger is more suitable. |
| Tool holding | Good. Industrial durability helps with cutters, fixtures, and jigs. |
| Petal protection | Medium by default. Low force and soft pads are required. |
| Dexterous manipulation | Low. Fine flower orientation may require a second hand or fixture. |
| Integration | Very strong. UR, xArm, Franka, ROS/Modbus materials are common. |
| Price | Quote/reseller-based. Check mounts and controller costs. |

**Recommended role**: robust work gripper for a flower-handling cell.  
**Main caveat**: default grip forces can be excessive for flowers; design soft fingertips and force limits from the start.

---

## Adoption Tips

1. Start with **stem bundles, wrapping paper, tools, and fixtures**, not direct petal contact.
2. Design silicone/foam pads, V-groove pads, or replaceable fingertips.
3. In a VLA action space, record width, speed, and force as low-dimensional gripper actions.
4. Compare against OnRobot Soft Gripper or custom soft grippers for petal-heavy contact tasks.

---

## References

- [Robotiq 2F-85/2F-140 Adaptive Robot Gripper](https://robotiq.com/products/2f85-140-adaptive-robot-gripper)
- [Robotiq 3-Finger Adaptive Gripper product sheet](https://robotiq.com/hubfs/Product-sheets/3-Finger-Adaptive-Robot-Gripper/Product_sheet-3F-EN.pdf)
- [ROS-Industrial Robotiq](https://github.com/ros-industrial/robotiq)

---

## See Also

- [OnRobot Soft Gripper](onrobot-soft-gripper)
- [LEAP Hand](leap-hand)
- [Allegro Hand](allegro)
