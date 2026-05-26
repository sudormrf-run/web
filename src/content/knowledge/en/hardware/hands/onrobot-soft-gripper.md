---
title: OnRobot Soft Gripper
description: Industrial soft gripper for flowers, food, and irregular fragile objects
tags: [onrobot, soft-gripper, compliant-gripper, delicate-handling, flowers, food-grade, cobot]
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

# OnRobot Soft Gripper

## One-line judgment

**For actually grasping flowers without damage, OnRobot Soft Gripper may be more practical than a dexterous hand as the first end-effector.** It is weak at in-hand manipulation, but its compliant contact is exactly the point.

## Overview

**OnRobot Soft Gripper** is a commercial soft gripper for food, produce, and irregular fragile objects. It is not a dexterous humanoid hand, but for real flower handling, the ability to hold petals and stems without damage may matter more than high-DoF in-hand manipulation.

| Item | Details |
|------|---------|
| Manufacturer | OnRobot |
| Type | Soft cup/finger cobot gripper |
| Public price | Quote-based |
| Payload | Published up to about 2.2kg |
| Grip range | Product family covers roughly 11-118mm |
| Sensing | Compliance-focused, not rich tactile skin |
| Integration | OnRobot Quick Changer and major cobot ecosystems |

---

## Fit for Flower Handling and Bouquet Making

| Criterion | Assessment |
|----------|------------|
| Petal/stem damage | Very strong. Soft contact is the main advantage. |
| Holding stem bundles | Good. Lower damage risk than rigid parallel grippers. |
| In-hand manipulation | Low. It will not finely rotate flowers inside the hand. |
| Tool use | Limited. Robotiq or other industrial grippers are better for cutters/tools. |
| VLA data collection | Feasible if end-effector actions are logged through the arm control stack. |
| Customization | Medium. Commercial ecosystem is less hackable than LEAP or open-source hands. |

**Recommended role**: first end-effector candidate for actually holding flowers without damage.  
**Main caveat**: not suitable if the research target is high-DoF finger action learning.

---

## Adoption Judgment

OnRobot Soft Gripper is a practical match for OpenArm, xArm, UR, and Franka-style cells when the first goals are **holding stem bundles, maintaining flower orientation, and fixing wrapping paper**. In early bouquet-making experiments, a compliant gripper may deliver useful results faster than an expensive dexterous hand.

---

## References

- [OnRobot Soft Gripper](https://onrobot.com/us/products/soft-gripper)
- [OnRobot Downloads](https://onrobot.com/us/downloads)

---

## See Also

- [Robotiq Adaptive Grippers](robotiq-grippers)
- [LEAP Hand](leap-hand)
- [Ability Hand](ability)
