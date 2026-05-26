---
title: WUJI Hand
description: A 20 active DoF direct-drive dexterous hand with ROS 2/SDK integration and a strong payload-to-weight profile
tags: [wuji, hand, dexterous, 20-dof, ros2, tactile, manipulation, flower]
category: hardware
subcategory: hands
thumbnail: https://docs.wuji.tech/_next/static/media/structure-schematic-2025-11.50f32115.png

# Authorship
createdBy:
  name: Jong Hyun Park
  email: jhpark@sudormrf.run
lastEditedBy:
  name: Jong Hyun Park
  email: jhpark@sudormrf.run
lastEditedAt: 2026-05-17
---

# WUJI Hand

## One-line judgment

**WUJI Hand looks like a strong candidate when the goal is to attach a high-DoF hand to a real robot arm and start collecting manipulation data quickly.** Its low mass and ROS 2/SDK support are attractive, but petal-level manipulation still needs careful force limiting, contact sensing validation, and soft fingertip treatment.

## Key Specs

| Item | Value | Interpretation |
|------|-------|----------------|
| Degrees of freedom | 20 active DoF | Large posture space across fingers |
| Weight | 580 ± 10 g, excluding cables | Plausible for compact 6/7-axis arms |
| Fingertip force | 15 N | Enough for stems and tools; too much for petals without limits |
| Static grasp load | 10 kg | Large holding margin |
| Durability | 300,000+ unloaded grasp cycles | Worth testing for repeated data collection |
| Interface | USB 2.0, SDK, ROS 2 | Integration path for ROS and learning stacks |
| Feedback | 1000 Hz joint state, Hall sensor, torque/position/current/temp | Useful for policy logs and diagnostics |

## Meaning for Flower Work

WUJI Hand is not automatically a human-like floral arranger. Its best first tasks are stem bundle grasping, ribbon positioning, paper-fold handling, and tool use, where finger posture matters more than ultra-soft contact. Direct petal contact should be treated as a separate research target with soft covers, force limits, and contact-aware policies.

Practical experiment order:

1. Grasp and release stem bundles
2. Pick wrapping-paper corners
3. Hold tape or ribbon ends
4. Add vision/contact policies with petal no-touch zones

## Strengths

- 20 active DoF gives more grasp expression than simple two-finger grippers.
- The 580 g class makes it plausible for OpenArm, xArm, Galaxea A1, and similar research arms.
- ROS 2 and SDK documentation reduce early integration friction.
- 1000 Hz state feedback is useful for imitation-learning datasets.

## Risks

- Fingertip force is high for petals, so mechanical compliance or soft covers may be required.
- Published values are manufacturer specs; backlash, heat, noise, and repeatability need bench tests.
- Tactile-policy work depends on the actual sensor quality, calibration flow, and data access.

## Integration Checklist

- Confirm ROS 2 package compatibility with the target OS and distro.
- Check availability of URDF, joint limits, and calibration files.
- Verify mount, cable, power, and communication clearance on the target arm.
- Test whether fingertip covers or soft pads can be replaced.
- Measure temperature and zero drift during long data-collection sessions.

## References

- [WUJI Hand Overview](https://docs.wuji.tech/docs/en/wuji-hand/latest/overview/)
- [WUJI Hand ROS 2 Configuration](https://docs.wuji.tech/docs/en/wuji-hand/latest/ros2-user-guide/configuration/)
- [WUJI Hand SDK Tutorial](https://docs.wuji.tech/docs/en/wuji-hand/latest/sdk-user-guide/tutorial/)
