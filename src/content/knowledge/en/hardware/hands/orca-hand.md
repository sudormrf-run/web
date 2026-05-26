---
title: ORCA Hand
description: An ETH Zurich/ORCA Dexterity open-source dexterous hand family focused on low-cost reproducibility and tactile variants
tags: [orca, hand, dexterous, open-source, eth-zurich, tactile, imitation-learning, flower]
category: hardware
subcategory: hands
thumbnail: https://humanoid.guide/wp-content/uploads/2026/03/OrcaHand-robot-hand-by-OrcaHand-Humanoid-Huide-435x435.webp

# Authorship
createdBy:
  name: Jong Hyun Park
  email: jhpark@sudormrf.run
lastEditedBy:
  name: Jong Hyun Park
  email: jhpark@sudormrf.run
lastEditedAt: 2026-05-17
---

# ORCA Hand

## One-line judgment

**ORCA Hand is the candidate for starting dexterous learning experiments with a reproducible, lower-cost hand instead of buying a high-end commercial platform.** For flower work, its value is strongest when you expect to modify fingertips, compliance, or tactile sensing.

## Key Specs

| Item | Value | Interpretation |
|------|-------|----------------|
| ORCA v1 DoF | 17 DoF, 16 finger + 1 wrist | Enables hand and wrist posture experiments |
| Material cost | Under 2,000 CHF | Much lower entry cost than Shadow/Allegro class hands |
| Assembly target | Under 8 hours | Plausible for lab-built deployments |
| Learning experiment | Reported 7h17m and about 2,000 grasp cycles | Small-dataset policy experiments are plausible |
| 2026 family | Lite 9 DoF, Hand 17 DoF, Touch 17 DoF | Budget and tactile needs can be separated |
| Touch sensing | Reported 351 taxels per hand | Candidate for stem/petal contact classification |

## Meaning for Flower Work

ORCA's strongest point is not a finished commercial spec sheet; it is an open, modifiable hand platform. Flower manipulation will likely need fingertip shape changes, softer pads, and contact-sensing experiments, so a reproducible open design is a real advantage.

Best initial tasks:

- Grasp a single stem or stem bundle
- Hold folded wrapping paper in place
- Pull ribbon or tape ends without slipping
- Train a tactile classifier for "too much force"

## Strengths

- Papers and project material make the design intent and reproduction path relatively transparent.
- The low-cost/open direction makes fingertip modification, added sensors, and part replacement easier to justify.
- The Touch line is relevant for tactile datasets around stems, petals, and soft contact.

## Risks

- A build-it-yourself route introduces quality variation and maintenance work.
- ORCA Dexterity's 2026 product line needs direct confirmation for availability, lead time, SDK, and support.
- Flower-shop realities such as moisture, debris, pollen, and pad wear cannot be inferred from paper specs alone.

## Integration Checklist

- Decide whether the project needs a purchasable product or a lab-built open-source hand.
- Confirm CAD, BOM, firmware, control code, and license coverage.
- For tactile variants, verify raw tactile-stream access and calibration tooling.
- Measure fingertip-pad wear and replacement cost after repeated grasping.

## References

- [ETH Soft Robotics Lab - ORCA Hand](https://srl.ethz.ch/platforms/srh/orcahand.html)
- [ORCA Hand: An Anthropomorphic Robotic Hand for Learning Dexterous Manipulation](https://arxiv.org/abs/2504.04259)
- [ORCA Dexterity](https://www.orcahand.com/)
- [RoboHorizon - ORCA Dexterity 2026 line report](https://robohorizon.com/en-us/news/2026/03/orca-dexterity-drops-3-open-source-robotic-hands-starting-at-1500/)
- [Humanoid Guide - OrcaHand](https://humanoid.guide/product/orcahand/)
