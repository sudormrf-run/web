---
title: SharpaWave
description: A 22 active DoF human-scale robotic hand with high-resolution tactile-array claims for dexterous manipulation
tags: [sharpa, sharpawave, hand, dexterous, tactile, humanoid, flower]
category: hardware
subcategory: hands
thumbnail: https://www.sharpa.com/cdn/shop/files/preview_images/0620e345389f4e4cb8441e5b2bd3187c.thumbnail.0000000000_2000x.jpg?v=1769761805

# Authorship
createdBy:
  name: Jong Hyun Park
  email: jhpark@sudormrf.run
lastEditedBy:
  name: Jong Hyun Park
  email: jhpark@sudormrf.run
lastEditedAt: 2026-05-17
---

# SharpaWave

<iframe width="100%" style="aspect-ratio: 16/9;" src="https://www.youtube.com/embed/GcTUlOHvdOs" title="SharpaWave Official Product Video" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

## One-line judgment

**SharpaWave is a high-DoF hand worth tracking for flower manipulation if its tactile stack is as accessible as the public claims suggest.** It should not be treated as a first-choice purchase until pricing, delivery, SDK access, and raw tactile data access are confirmed.

## Key Specs

| Item | Value | Interpretation |
|------|-------|----------------|
| Degrees of freedom | 22 active DoF | Very large posture space |
| Scale | 1:1 human scale | Good geometric fit for human tools and objects |
| Fingertip force | More than 20 N | Enough for stems/tools; needs force limits for petals |
| Gesture speed | More than 4 Hz | Fast regrasp and gesture changes may be possible |
| Tactile sensing | Dynamic Tactile Array, claimed 1000+ tactile pixels per fingertip | Attractive for petal/stem contact datasets |
| Durability claims | 2.5M press cycles, 3200 impacts at 30 g | Worth evaluating for repeated contact experiments |

## Meaning for Flower Work

The hard part of floral automation is not simply closing a hand. The robot must know how hard it is pressing, whether it is slipping, and which surface it is contacting. If SharpaWave exposes usable tactile streams, it could support datasets for stem compression, petal contact, and wrapping-paper slip.

Good first experiments:

- Measure stem compression thresholds
- Detect slip on wrapping paper and ribbons
- Apply force-cap policies on petal contact
- Compare the same object set against a soft gripper

## Strengths

- 22 active DoF gives a large hand-posture vocabulary.
- The product is positioned around tactile manipulation, which aligns with delicate object handling.
- The Sharpa North integration gives a reference direction for full-body manipulation.

## Risks

- Public material is mostly manufacturer, award, and press information. Purchase terms and SDK rights need direct confirmation.
- Fingertip force may be excessive for petals unless low-force control is reliable.
- If high-resolution tactile data is not available as a raw stream, research value drops sharply.

## Integration Checklist

- Confirm price, lead time, warranty, and research purchase availability.
- Confirm tactile raw data rate and access through ROS/SDK/API.
- Check fingertip-pad replacement and cleaning.
- Verify wrist payload and cable routing on the target arm.
- Test stability of force and position control modes.

## References

- [SharpaWave official page](https://www.sharpa.com/pages/wave)
- [CES Innovation Awards 2026 - SharpaWave](https://www.ces.tech/ces-innovation-awards/2026/sharpawave/)
- [Humanoid Guide - SharpaWave](https://humanoid.guide/product/sharpawave/)
