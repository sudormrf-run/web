---
title: OpenArm
description: Enactic's open-source 7-DoF humanoid arm and officially supported LeRobot bimanual manipulation platform
tags: [openarm, enactic, lerobot, bimanual, open-source, humanoid-arm, force-feedback, teleoperation, vla]
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

# OpenArm

## One-line judgment

**OpenArm is the strongest first-tier main experiment platform candidate for bouquet-making VLA work.** Official LeRobot support, bimanual configuration, 7-DoF reach, and a low BOM line up well, but final performance depends on the end-effector and sensing stack.

## Overview

**OpenArm** is an open-source 7-DoF humanoid robot arm led by Enactic in Japan. It is listed in the official Hugging Face LeRobot robot documentation and exposes single-arm and bimanual leader-follower workflows through `openarm_follower`, `openarm_leader`, `bi_openarm_follower`, and `bi_openarm_leader`.

| Item | Details |
|------|---------|
| Lead | Enactic |
| Type | 7-DoF humanoid robot arm |
| LeRobot support | Official docs for single-arm/bimanual teleoperation and dataset recording |
| Actuation | Damiao QDD motors, CAN/CAN-FD |
| Payload | 4.1kg nominal, 6.0kg peak per arm before end-effector weight |
| Price | About $6,500 BOM for a complete bimanual system |
| Openness | CAD, URDF/xacro, CAN control, ROS 2, teleoperation repos |
| Main use | Contact-rich manipulation, bimanual data collection, imitation learning, VLA policy experiments |

---

## Fit for Flower Handling and Bouquet Making

OpenArm is one of the most interesting purchase candidates among officially supported LeRobot platforms. It has much more reach and payload than SO-101, is much cheaper than Reachy 2 or industrial dual-arm cells, and the bimanual setup is exposed directly through LeRobot commands.

| Criterion | Assessment |
|----------|------------|
| Bimanual work | Strong fit. `bi_openarm_follower` is documented for bimanual leader-follower control. |
| Reach for floral tasks | Strong fit. Human-scale arm proportions make tabletop stem alignment, wrapping, and handoff tasks practical. |
| Dexterity | The arm is capable, but delicate petals/stems will depend on the end-effector. Consider soft pads, LEAP/Allegro, or Robotiq-style grippers. |
| Durability | The project describes aluminum and stainless steel structural parts for repeated data collection. |
| Price | Around $6.5k BOM for bimanual hardware is very aggressive for research-grade dual-arm manipulation. |
| Customization | Very high. Hardware files, simulation, ROS 2, and CAN control are open. |
| Risk | Newer ecosystem than ALOHA or Franka. Confirm assembled-unit availability and lead time before purchase. |

**Recommended role**: first-tier experimental platform for bouquet-making VLA data collection.  
**Main caveat**: delicate grasping quality will depend heavily on gripper choice and tactile/vision setup.

---

## LeRobot Integration

LeRobot documents both single-arm and bimanual leader-follower setups for OpenArm. The important part is the workflow, not copying long command blocks into the hardware note.

| Flow | Meaning |
|------|---------|
| `openarm_follower` / `openarm_leader` | Validate the camera-action data loop with one arm |
| `bi_openarm_follower` / `bi_openarm_leader` | Collect bimanual demonstrations for bouquet work |
| `lerobot-record` | Save datasets in the Hugging Face Hub flow for ACT, SmolVLA, pi0-style, or custom VLA experiments |

Use the [LeRobot OpenArm docs](https://huggingface.co/docs/lerobot/main/openarm) for exact commands, since command-line flags can change across versions.

---

## Hardware and Software Stack

| Component | Details |
|-----------|---------|
| DoF | 7-DoF per arm |
| Communication | CAN/CAN-FD |
| Control | Position control, gravity compensation, teleoperation, force-feedback-oriented design |
| Simulation | MuJoCo and Isaac Sim/Isaac Lab repositories |
| ROS | ROS 2 packages available |
| Hardware license | OpenArm hardware repo uses CERN-OHL-S-2.0 |
| Software license | Main software repos use Apache 2.0 |

OpenArm is not just a low-cost arm. Its value is that it is an **open hardware stack shaped around VLA data collection**. With a bimanual leader setup, human demonstrations for flower trimming and bouquet assembly can be collected in the same LeRobot pipeline used for ACT, SmolVLA, pi0-style policies, and future custom VLA inference.

---

## Purchase Checklist

1. Confirm assembled or DIY kit supplier and lead time.
2. Prepare CAN-FD adapters, power, emergency stop, and table mounting.
3. Keep any cutting tool tests inside a physical safety cell.
4. Start with the default gripper, then switch to soft pads, compliant grippers, or dexterous hands if stem damage is high.
5. Validate the single-arm `openarm_follower` pipeline before expanding to `bi_openarm_follower`.

---

## References

- [Hugging Face LeRobot - OpenArm](https://huggingface.co/docs/lerobot/main/openarm)
- [OpenArm Official Site](https://openarm.dev/)
- [OpenArm GitHub](https://github.com/enactic/openarm)
- [OpenArm Hardware Docs](https://docs.openarm.dev/hardware/)
- [LeRobot Policy Deployment](https://huggingface.co/docs/lerobot/main/inference)

---

## See Also

- [Hardware Index](/knowledge/hardware/)
- [LeRobot Arms](lerobot-arms)
- [ALOHA](aloha)
- [Reachy 2](/knowledge/hardware/humanoids/reachy)
