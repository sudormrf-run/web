---
title: Unitree
description: Unitree Robotics - China's Low-Cost Robot Hardware Manufacturer
tags: [unitree, hardware, quadruped, humanoid, g1, h1, h2, r1, china]
category: companies

# Authorship
createdBy:
  name: Jong Hyun Park
  email: jhpark@sudormrf.run
lastEditedBy:
  name: Jong Hyun Park
  email: jhpark@sudormrf.run
lastEditedAt: 2026-01-26
---

## Overview

Unitree Robotics (杭州宇树科技有限公司, Hangzhou Yushu Technology Co., Ltd.) is a Chinese robot hardware manufacturer producing affordable yet high-performance quadruped robots and humanoids. They are leading price innovation with the G1 humanoid starting at $13,500 and the $5,900 R1.

| Item | Details |
|------|---------|
| Headquarters | Hangzhou, China |
| Founded | August 26, 2016 (by Wang Xingxing) |
| CEO | Wang Xingxing (born 1990) |
| Valuation | Series C: ~$1.3B (Jun 2025), IPO Target: $7B |
| Core Products | Go2, B2, G1, H1, H2, R1 |

---

## Product Lineup

### Quadruped Robots

| Model | Purpose | Price |
|-------|---------|-------|
| Go2 Air | Consumer | ~$1,600 |
| Go2 Pro | Research | ~$2,800 |
| Go2 EDU | Education/Research | ~$11,800 |
| B2 | Industrial | ~$100,000 |
| B2-W | Wheel hybrid | - |

### Humanoid Robots

| Model | Specs | Price |
|-------|-------|-------|
| R1 | 1.21m, 25kg, 26 DoF | ~$5,900 (Released Jul 2025) |
| G1 | 1.27m, 35kg, 23-43 DoF | $13,500+ (Base), $43,500+ (EDU) |
| H1 | 1.8m, 47kg | ~$90,000 |
| H2 | 1.8m, 70kg, 31 DoF | ~$29,900 (Unveiled Oct 2025, Delivery Apr 2026) |

---

## G1 Humanoid

### Specs

| Item | Value |
|------|-------|
| Height | 127cm (size of an 8-year-old) |
| Weight | 35kg |
| DoF | 23-43 DoF (depending on configuration) |
| Walking Speed | 2m/s (4.5 MPH) |
| Sensors | 3D LiDAR (LIVOX MID-360), Intel RealSense D435, 4-mic array |
| Hands | Dex3 force-controlled hands (EDU Ultimate) |
| Computing | NVIDIA Jetson Orin (EDU, 100 TOPS) |
| Price | Base $13,500 / EDU Standard $43,500 |

### Features

- **Foldable Design**: Compact for transportation
- **Affordable Price**: Starting at $13,500 (revolutionary compared to other humanoids)
- **RL-Based**: Imitation/reinforcement learning applied
- **Payload**: Up to 3kg per arm

---

## H1 Humanoid

### Specs

| Item | Value |
|------|-------|
| Height | 180cm |
| Weight | 47kg |
| Max Torque | 360N.m |
| Running Speed | 3.3m/s (world record) |
| Price | ~$90,000 |

### Achievements

- **World's Fastest Humanoid**: 3.3m/s (7.38 mph) running - Guinness World Record (Mar 2024)
- **2025 World Humanoid Robot Games 4 Golds** (Beijing: 400m/1500m/100m hurdles/4x100m relay)
- 1500m World Record: 6:34.40
- Competition Top Speed: 4.78m/s (internal tests exceed 5m/s)
- Autonomous walking on complex terrain
- First humanoid backflip without hydraulics (Mar 2024)

---

## R1 Humanoid

### Specs

| Item | Value |
|------|-------|
| Height | 121cm |
| Weight | 25kg |
| DoF | 26 DoF |
| Sensors | Binocular camera, 4-mic array |
| Battery | Swappable, ~1 hour |
| Price | ~$5,900 (39,999 yuan) |
| Released | July 2025 |

### Features

- **Most Affordable Full-Size Humanoid**: $5,900 makes it accessible for individual developers/education
- **Athletic Focus**: Cartwheels, handstands, front handsprings, kung-fu moves
- **Lightweight Design**: 25kg ideal for R&D testing
- **Target Market**: Individual developers, early-stage research teams, education

---

## H2 Humanoid

### Specs

| Item | Value |
|------|-------|
| Height | 180cm |
| Weight | 70kg |
| DoF | 31 DoF (3-DoF waist, 2-DoF neck) |
| Payload | Normal 7kg, Peak 21kg |
| Joint Torque | 360 N.m (legs) |
| Computing | Intel Core i5/i7, NVIDIA Jetson Orin NX (optional) |
| Battery | Quick-swap, ~3 hours |
| Price | Commercial $29,900 / EDU (contact sales) |
| Delivery | April 2026 expected |

### Features

- **H1 Successor**: More degrees of freedom and improved manipulation
- **Two Variants**: Commercial (deployment-ready), EDU (full development rights)
- **Dance/Kung-Fu**: Flexible waist and neck joints enable fluid movements
- **Precise Manipulation**: Advanced robotic hands for delicate object handling

---

## Technical Features

### Imitation & Reinforcement Learning

```
[Human Motion Demo] → [Imitation Learning] → [Initial Policy]
                                                   │
                                       [RL Fine-tuning]
                                                   │
                                            [Final Policy]
```

### Hardware Strengths

| Strength | Description |
|----------|-------------|
| Price Competitiveness | Low-cost Chinese manufacturing |
| High-Performance Motors | Self-developed high-torque motors |
| Vertical Integration | End-to-end design and manufacturing |
| Mass Production | Scalable production lines |

---

## Security Vulnerability (Disclosed Sep 2025)

*The following was disclosed by security researchers Andreas Makris and Kevin Finisterre in September 2025.*

**CVE-2025-60250 (UniPwn)**:
- **Vulnerability**: Hard-coded AES key in BLE Wi-Fi configuration interface
- **Severity**: Medium (allows root-level takeover)
- **Affected Models**: Go2, B2, G1, H1, R1
- **Risk**: Wormable - infected robots can automatically compromise nearby Unitree robots
- **Data Transmission**: G1 confirmed to send data to China every 5 minutes
- **Response**: Unitree issued statement on Sep 29, 2025; firmware updates in progress
- **Recommended Mitigations**: Use isolated Wi-Fi networks, disable Bluetooth

---

## Market Strategy

### Price Innovation

```
Boston Dynamics Atlas: ~$1,000,000+
Figure 02:            ~$50,000
Tesla Optimus target: ~$20,000
Unitree H2:          ~$29,900
Unitree G1:          ~$13,500
Unitree R1:          ~$5,900  <- Most affordable
```

### Target Markets

- **Research/Education**: Affordable research platform
- **Industrial**: B2 series for logistics/inspection
- **Consumer**: Go2 for companion robot market

---

## IPO Outlook

| Item | Details |
|------|---------|
| Expected Valuation | $7B (target) |
| Series C (Jun 2025) | ~$1.3B (700M yuan / $99M raised) |
| Total Raised | ~$263.6M |
| Market | Shanghai STAR Market |
| Timeline | Q2 2026 (expected) |
| Pre-IPO Tutoring | Completed Nov 2025 (4 months) |
| Key Investors | Alibaba, Tencent, China Mobile, Geely, Ant Group, HongShan Capital |
| Profitability | Profitable since 2020, revenue exceeds 1B yuan ($140M) |

---

## References

- [Unitree Robotics](https://www.unitree.com/)
- [Unitree Shop](https://shop.unitree.com/)
- [The Robot Report - G1](https://www.therobotreport.com/unitree-robotics-unveils-g1-humanoid-for-16k/)
- [Wikipedia - Unitree](https://en.wikipedia.org/wiki/Unitree_Robotics)

---

## See Also

- [Company List](/knowledge/companies/)
- [Humanoid Design](/knowledge/essays/insights/humanoid-design)
- [Tesla](tesla)
