---
title: VLA Robot Candidates for Flower Trimming and Bouquet Making
description: Compares purchasable robot candidates for real flower trimming and bouquet-making tasks across LeRobot support, bimanual manipulation, reach, dexterity, durability, price, open-source status, and customization.
category: essays
tags:
  - VLA
  - LeRobot
  - robot hardware
  - bouquet making
  - manipulation
date: 2026-05-17
order: 2
thumbnail: "https://img.youtube.com/vi/fEz2Xa7tA6w/mqdefault.jpg"
related:
  - hardware
  - hardware/arms/openarm
  - hardware/mobile/lekiwi
  - hardware/arms/aloha
  - hardware/humanoids/reachy
  - hardware/hands/onrobot-soft-gripper
  - hardware/hands/robotiq-grippers
  - hardware/hands/wuji-hand
  - hardware/hands/orca-hand
  - hardware/hands/sharpa-wave
  - hardware/humanoids/sharpa-north

createdBy:
  name: Jong Hyun Park
  email: jhpark@sudormrf.run
lastEditedBy:
  name: Jong Hyun Park
  email: jhpark@sudormrf.run
lastEditedAt: 2026-05-17
---

## Summary

Flower trimming and bouquet making are harder than simple pick-and-place. The task includes aligning stem lengths, removing leaves, orienting flowers, holding a bundle with one hand while manipulating wrap or string with the other, and potentially using tools. The main buying criteria are **bimanual manipulation**, **workspace reach**, **swappable grippers/hands**, **data collection pipeline**, and **customization headroom**.

| Priority | Candidate | First judgment |
|---:|------|----------|
| 1 | [OpenArm](/knowledge/hardware/arms/openarm) | Strongest combination of official LeRobot support, 7-DoF bimanual arms, low cost, and open-source design. |
| 2 | [ALOHA / ALOHA 2](/knowledge/hardware/arms/aloha) | Strongest ACT/VLA research reproduction and bimanual data collection ecosystem. |
| 3 | [Galaxea R1 Pro / A1 dual](/knowledge/hardware/arms/galaxea-arms) | Purchasable high-performance bimanual/mobile option with force-control advantages. |
| 4 | [Reachy 2](/knowledge/hardware/humanoids/reachy) | Official LeRobot support, VR teleoperation, and humanoid bimanual form factor. |
| 5 | Dual [xArm 7](/knowledge/hardware/arms/xarm) | Good reach and payload for the price, but the bimanual VLA stack needs custom integration. |
| 6 | Dual [Franka Research 3](/knowledge/hardware/arms/franka-research3) | Excellent force control and research ecosystem, with high budget and integration cost. |
| 7 | [Unitree G1 EDU](/knowledge/hardware/humanoids/unitree-humanoid) | Interesting LeRobot-supported humanoid candidate, but walking and safety complexity is high for table flower work. |

The practical path is to first validate the **LeRobot record/train/inference loop with SO-101 or LeKiwi**, then select **OpenArm, ALOHA 2, Galaxea R1 Pro, or Reachy 2** as the main experiment platform.

<iframe width="100%" height="360" src="https://www.youtube.com/embed/fEz2Xa7tA6w" title="VLA robotics background" frameborder="0" allowfullscreen></iframe>

## Source Basis for This Update

The shortlist is not based on manufacturer copy alone. It is cross-checked against these sources:

| Source | How it was used |
|------|-----------|
| Hugging Face LeRobot official docs | Filter robots that are easier to put into record/train/inference workflows |
| Humanoid Guide / HumanoidSpecs hands directory | Broad recent scan of hands and grippers |
| Robot Manipulation hardware list | Wider research-manipulation hardware context |
| Manufacturer/lab official docs | Spec and integration checks for WUJI, ORCA, SharpaWave, and North |
| Papers and preprints | Evidence for open-source reproducibility, especially ORCA |

## Evaluation Criteria

| Criterion | Why it matters |
|------|-------------|
| Purchasability | Demo-only robots are excluded because the goal is to train and deploy a custom VLA. |
| LeRobot support | It shortens the path to recording, training, Hub sharing, and policy deployment. |
| Bimanual manipulation | Bouquet work often needs one hand to hold while the other aligns, ties, wraps, or uses tools. |
| Reach/payload | The robot must cover flowers, scissors, wrapping paper, vases, and trays on a tabletop. |
| Dexterity | Contact surface, force control, and end-effector options matter for avoiding damage. |
| Durability | Repeated data collection stresses motors, gears, frames, and cables. |
| Open-source/customization | Cameras, custom grippers, safety interlocks, and VLA inference need direct integration. |
| Price | Cameras, compute, grippers, safety cells, and spare parts add to the robot cost. |

## Official LeRobot Candidates

| Candidate | Purchase/build path | Bimanual fit | Flower-task fit | Main risk |
|------|-------------|--------|----------------|-------------|
| [SO-101](/knowledge/hardware/arms/lerobot-arms) | Very good low-cost DIY/kit path | Single or leader-follower pair | Entry point for data pipeline | Reach, torque, and durability are limited |
| [Koch v1.1](/knowledge/hardware/arms/koch) | Good Dynamixel-based DIY/kit path | Dual setup possible | Low-cost teleop practice | Payload and stiffness are limited |
| [LeKiwi](/knowledge/hardware/mobile/lekiwi) | Good SO-101 plus mobile base path | Single arm by default | Mobile manipulation pipeline validation | No bimanual coordination |
| [OpenArm](/knowledge/hardware/arms/openarm) | Good open-source BOM path | Official bimanual type support | First-choice main experiment candidate | Young ecosystem and supply/build risk |
| [Reachy 2](/knowledge/hardware/humanoids/reachy) | Quoted, high-cost purchase | Bimanual plus mobile base | Strong humanoid bouquet-work candidate | Price, procurement, and gripper dexterity |
| [Unitree G1](/knowledge/hardware/humanoids/unitree-humanoid) | Basic/EDU purchasable | Humanoid bimanual arms | Humanoid VLA demo candidate | EDU access, safety, and shorter arm reach |

## Main Platform Comparison

| Candidate | Reach/payload | Dexterity | Price band | Open/custom | VLA fit | Judgment |
|------|---------------|----------|--------|-----------------|------------|------|
| OpenArm | 7-DoF, 4.1kg nominal/6kg peak per arm | Needs end-effector selection | About $6.5K bimanual BOM | Very high | Official LeRobot support | First candidate to verify procurement for |
| ALOHA 2 | ViperX-based, about 750mm reach/light payload | Default and improved grippers | About $20K+ | High | ACT/VLA research standard | Strong for paper reproduction and live content |
| Galaxea R1 Pro | Dual 7-DoF arms, kg-class per arm | G1 gripper/force control | About $70K for R1 Pro | Medium-high | Native VLA/ROS ecosystem | Saves time at higher cost |
| Reachy 2 | Dual 7-DoF arms, 3kg per arm | Default gripper may need replacement | High, quoted | Open-source software | Official LeRobot support | Strong humanoid UX and VR teleop |
| Dual xArm 7 | 700mm/3.5kg | Wide gripper options | About $22K+ for two arms | Good SDK/ROS | Custom integration required | Robust cell candidate for the price |
| Dual Franka Research 3 | 855mm/3kg with joint torque sensing | Excellent force control | Very high | Strong research ecosystem | Very high data quality | Premium candidate if budget allows |
| Dual UR5e/UR10e | 850-1300mm / 5-12.5kg | Many industrial grippers | Used/quoted | Strong ROS2 | Custom integration required | Durable but needs extra sensing for delicacy |

## Hand and Gripper Candidates

| Candidate | Character | Recommended use |
|------|------|----------|
| [OnRobot Soft Gripper](/knowledge/hardware/hands/onrobot-soft-gripper) | Silicone soft gripper | Direct flower grasping and wrapping-paper holding |
| [Robotiq 2F/3F](/knowledge/hardware/hands/robotiq-grippers) | Industrial parallel/3-finger grippers | Holding stem bundles, tools, and fixtures |
| [LEAP Hand](/knowledge/hardware/hands/leap-hand) | 16-DoF open-source dexterous hand | In-hand alignment and dexterity research |
| [WUJI Hand](/knowledge/hardware/hands/wuji-hand) | 20 active DoF, ROS 2/SDK, around 580 g | High-DoF experiments on stems, tools, and wrapping paper |
| [ORCA Hand](/knowledge/hardware/hands/orca-hand) | 17 DoF open-source hand, Touch line | Fingertip modification and tactile datasets |
| [SharpaWave](/knowledge/hardware/hands/sharpa-wave) | 22 active DoF and high-resolution tactile-array claims | Petal/stem contact classification and force-cap research |
| [Allegro Hand](/knowledge/hardware/hands/allegro) | 16-DoF commercial research hand | Higher-end dexterous manipulation |
| [Ability Hand](/knowledge/hardware/hands/ability) | Prosthetic hand with touch sensing | Reducing damage to petals and stems |

The pragmatic first test is not an expensive dexterous hand. Mount **OnRobot Soft Gripper or Robotiq 2F with replaceable silicone pads** on OpenArm/ALOHA/xArm and measure flower damage. Move to LEAP Hand, WUJI Hand, ORCA Hand, SharpaWave, Ability Hand, or Allegro Hand only if in-hand rotation, tactile force caps, or fine orientation becomes necessary.

## Watch-Only Candidate

| Candidate | Judgment |
|------|------|
| [Sharpa North](/knowledge/hardware/humanoids/sharpa-north) | Reference platform for SharpaWave hands on a wheeled full-body robot. Keep it as a watch candidate until SDK, pricing, lead time, and safety access are public enough to evaluate. |

## Buying Scenarios

### Budget-Constrained

1. Validate LeRobot record/train/inference with SO-101 or LeKiwi.
2. Source or build bimanual OpenArm.
3. Add silicone pads and simple force/pressure sensing to the base gripper.
4. Collect data in stages: single flower pick, stem alignment, then simple tying.

### Research-Reproduction

1. Buy or build ALOHA 2 / Trossen ALOHA.
2. Reproduce ACT/ALOHA baselines.
3. Fine-tune OpenVLA, SmolVLA, or pi0-style policies.
4. Define bouquet making as an ALOHA-style benchmark.

### Time-Saving

1. Request quotes for Galaxea R1 Pro or Reachy 2.
2. Collect human demonstrations through VR/isomorphic teleoperation.
3. Connect LeRobot or a custom ROS2 data conversion pipeline.
4. Validate VLA inference inside a safety cell.

## Archive Version

The longer live-content research report is also available in the [Archive version](/archive/flower-manipulation-robot-candidates).

## References

- [Hugging Face LeRobot](https://github.com/huggingface/lerobot)
- [LeRobot LeKiwi](https://huggingface.co/docs/lerobot/main/en/lekiwi)
- [LeRobot OpenArm](https://huggingface.co/docs/lerobot/main/en/openarm)
- [LeRobot Reachy 2](https://huggingface.co/docs/lerobot/main/en/reachy2)
- [LeRobot Unitree G1](https://huggingface.co/docs/lerobot/main/en/unitree_g1)
- [ALOHA](https://tonyzhaozh.github.io/aloha/)
- [ALOHA 2](https://aloha-2.github.io/)
- [Galaxea R1 Pro](https://galaxea-dynamics.com/products/galaxea-r1-pro)
- [OnRobot Soft Gripper](https://onrobot.com/us/products/soft-gripper)
- [Robotiq 2F-85/2F-140 Adaptive Robot Gripper](https://robotiq.com/products/2f85-140-adaptive-robot-gripper)
- [WUJI Hand Overview](https://docs.wuji.tech/docs/en/wuji-hand/latest/overview/)
- [ETH Soft Robotics Lab - ORCA Hand](https://srl.ethz.ch/platforms/srh/orcahand.html)
- [ORCA Hand paper](https://arxiv.org/abs/2504.04259)
- [ORCA Dexterity](https://www.orcahand.com/)
- [SharpaWave](https://www.sharpa.com/pages/wave)
- [Sharpa North](https://www.sharpa.com/pages/north)
- [Humanoid Guide - Robot Hands & Grippers](https://humanoid.guide/hands/)
- [Robot Manipulation - Hardware](https://www.robot-manipulation.org/hardware)
