---
title: LeKiwi
description: Officially supported low-cost LeRobot mobile manipulator combining an SO-101 arm with a Kiwi-drive base
tags: [lekiwi, lerobot, mobile-manipulator, so101, kiwi-drive, raspberry-pi, low-cost, teleoperation, vla]
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

# LeKiwi

## One-line judgment

**LeKiwi is a low-cost pilot platform for validating the LeRobot data and inference loop, not the final bouquet-making robot.** Mobility is useful, but the single SO-101 arm limits reach, payload, and bimanual work.

## Overview

**LeKiwi** is a low-cost mobile manipulator that mounts an SO-101 arm on a three-wheel holonomic Kiwi-drive base. It is supported in the official Hugging Face LeRobot docs and uses a Raspberry Pi 5 robot plus a laptop for teleoperation, camera streaming, and dataset recording.

| Item | Details |
|------|---------|
| Developer | SIGRobotics-UIUC community project |
| Type | Low-cost mobile manipulator |
| Configuration | SO-101 arm + 3-wheel Kiwi base + Raspberry Pi 5 |
| LeRobot support | Official docs for teleoperation and recording |
| Cameras | Workspace RGB camera + wrist RGB camera recommended |
| Cost | Low-cost DIY SO-101-based build; public BOM/source starts in the few-hundred-dollar class |
| Main use | Mobile manipulation, table-side positioning, low-cost data collection |

---

## Fit for Flower Handling and Bouquet Making

LeKiwi is better understood as a **low-cost workflow validation platform** than as the main dexterous hardware for bouquet assembly.

| Criterion | Assessment |
|----------|------------|
| Bimanual work | Poor fit. The base configuration is a single SO-101 arm. |
| Reach/payload | Limited. Suitable for moving one or two flowers, small tools, or validating camera/action pipelines. |
| Mobility | Strong. Useful for moving between a table, shelf, and material tray. |
| Dexterity | SO-101 gripper level. Not enough for stem cutting or precise wrapping by itself. |
| Price | Very low. Failure cost is small, useful for early software tests. |
| Customization | High. DIY Raspberry Pi and LeRobot stack are easy to modify. |
| Risk | Final bouquet-making requires more reach, force, durability, and bimanual coordination. |

**Recommended role**: pilot platform for validating LeRobot data collection and inference loops.  
**Not recommended as**: the final main robot for real bouquet assembly.

---

## LeRobot Workflow

The official LeKiwi docs cover:

1. Raspberry Pi setup
2. SO-101 arm and base connection
3. Robot-laptop networking
4. Teleoperation
5. Camera streaming
6. Dataset recording

That makes LeKiwi useful before deploying a custom VLA policy to more expensive hardware. It can verify the camera input, action output, and dataset format in the same LeRobot pipeline.

---

## Adoption Judgment

| Goal | Judgment |
|------|----------|
| LeRobot onboarding | Strong fit |
| Mobile manipulation research | Good fit |
| Main flower-handling platform | Insufficient |
| Low-cost data collection | Good fit |
| Bimanual bouquet assembly | Poor fit |

If purchased, LeKiwi should be treated as a **small smoke-test robot for the VLA experiment stack**, not as the final manipulation robot. It can de-risk data recording, training, and inference before buying OpenArm, ALOHA, Reachy 2, or other larger platforms.

---

## References

- [Hugging Face LeRobot - LeKiwi](https://huggingface.co/docs/lerobot/main/en/lekiwi)
- [SIGRobotics-UIUC/LeKiwi GitHub](https://github.com/SIGRobotics-UIUC/LeKiwi)
- [LeRobot GitHub](https://github.com/huggingface/lerobot)

---

## See Also

- [Hardware Index](/knowledge/hardware/)
- [LeRobot Arms](../arms/lerobot-arms)
- [Mobile ALOHA](mobile-aloha)
- [OpenArm](../arms/openarm)
