---
title: Galbot
description: Synthetic Data First 전략으로 대규모 상용 배포를 달성한 중국 로보틱스 유니콘
tags: [galbot, graspvla, synthetic-data, china, dexterity, vla]
category: companies

# Authorship
createdBy:
  name: 조준호
  email: junho@sudormrf.run
lastEditedBy:
  name: 조준호
  email: junho@sudormrf.run
lastEditedAt: 2026-01-26
---

## Overview

Galbot(银河通用机器人, Galaxy General Robotics)은 중국 기반의 full-stack 로보틱스 유니콘으로, **"Synthetic First, Real Data as a Complement"** 철학으로 VLA 분야 최초의 대규모 상용 배포를 달성했습니다. 99% synthetic + <1% real data로 production-ready 시스템을 구축합니다.

| 항목 | 내용 |
|------|------|
| 설립 | 2023년 5월 |
| 본사 | Beijing, China (Haidian District) |
| R&D 센터 | Beijing, Shenzhen, Suzhou, Hong Kong |
| 공동 창업자 | He Wang (왕허, CTO), TengZhou Yao (야오텅저우) |
| 연계 기관 | Beijing Academy of AI (BAAI), PKU EPIC Lab |
| 펀딩 | 총 $800M+ (2025년 12월 기준) |
| 기업가치 | $3B (2025년 12월 기준) |
| 미션 | "Make robots for every industry and every home" |

**He Wang (왕허)**: 1992년생, Tsinghua University 졸업 후 Stanford University에서 박사학위 취득(2021, 지도교수: Leonidas J. Guibas). 현재 Peking University CFCS 조교수이자 PKU EPIC Lab 설립자.

---

## 주요 제품

### Galbot G1

세미 휴머노이드 모바일 매니퓰레이터:

| 항목 | 사양 |
|------|------|
| 높이 | 173cm |
| 무게 | 85kg |
| 팔 span | 190cm |
| 최대 도달 높이 | 240cm |
| Payload | 5kg (단일 팔) |
| 배터리 | 10시간 연속 작동 |
| 처리 가능 품목 | 5,000+ 종류 |

### Galbot S1

산업용 중량급 로봇 (2025년 출시):

| 항목 | 사양 |
|------|------|
| Payload | 50kg (양팔 연속) |
| 용도 | 제조업, 중공업 |

---

## 핵심 성과

### 상용 배포

| 항목 | 수치 |
|------|------|
| Galbot Store | 30+ 중국 도시 |
| 스마트 약국/창고 | 30+ 완전 무인 |
| 창고 내 인력 | 0명 |
| MTBF | 1개월+ |
| 연속 작업 | 10시간/충전 |

### 주요 파트너십

- **제조업**: CATL, Bosch, Toyota, Hyundai
- **헬스케어**: Xuanwu Hospital (환자실, 약국, 안내 시스템)

### GraspVLA 성능 (LIBERO Zero-shot)

| 모델 | Long | Goal | Object | 조건 |
|------|------|------|--------|------|
| OpenVLA | 33.7% | 56.6% | 65.4% | fine-tuned |
| π0 | 62.7% | 79.4% | 93.8% | fine-tuned |
| **GraspVLA** | **82.0%** | **91.2%** | **94.1%** | **zero-shot** |

> Fine-tuning 없이 fine-tuned 모델들을 능가

---

## 기술 아키텍처

### Cerebrum-Cerebellum 구조

인간의 뇌 구조를 모방한 이중 시스템:

| 구성요소 | 역할 | 구현 |
|----------|------|------|
| **Cerebrum (대뇌)** | High-level policy - *무엇을* 할지 | VLA (Imitation + Web Grounding) |
| **Cerebellum (소뇌)** | Low-level motor - *어떻게* 할지 | RL 기반 100Hz control |

### GraspVLA

| 컴포넌트 | 사양 |
|----------|------|
| Vision Encoder | DINO-v2 + SigLIP |
| LLM Backbone | InternLM2 1.8B |
| Action Expert | Flow Matching |
| 학습 데이터 | 1B synthetic + 100M+ web grounding |
| 학습 비용 | ~$5,000 (160×RTX 4090, 10일) |

---

## 데이터 전략

### Synthetic Data Pipeline

```
Scene Synthesis
    ↓
Trajectory Generation
  ├─ Physics-based Energy Optimization (DexGraspNet)
  ├─ Human Videos → Synthetic (GenHOI)
  └─ Large-Scale RL (UniDexGrasp++)
    ↓
Validation & Rendering
  ├─ MuJoCo physics validation
  └─ Isaac Sim ray-tracing
    ↓
Sim2Real Transfer (1B frames 수렴)
```

### Scaling Law 발견

- **1B frames**에서 sim/real 성능 커브 수렴
- 데이터 규모 증가 시 sim2real gap 감소
- Teleoperation으로는 불가능한 규모

### 데이터 규모

| 데이터 유형 | 규모 |
|-------------|------|
| Synthetic trajectories | Billion-scale |
| DexGraspNet 2.0 grasps | 426M |
| Web grounding (GRIT) | 100M+ bboxes |
| Real data 비중 | <1% |

---

## 연구 포트폴리오

### Grasping

| 연구 | 학회 | 핵심 |
|------|------|------|
| [DexGraspNet](https://pku-epic.github.io/DexGraspNet/) | ICRA 2023 Finalist | Million-scale dexterous grasp |
| [UniDexGrasp++](https://pku-epic.github.io/UniDexGrasp++/) | ICCV 2023 Finalist | Large-scale RL, policy distillation |
| [DexGraspNet 2.0](https://pku-epic.github.io/DexGraspNet2.0/) | CoRL 2024 | 7 embodiments, 426M grasps |
| [Dexonomy](https://pku-epic.github.io/Dexonomy/) | RSS 2025 | 100+ grasp taxonomy |
| [GraspVLA](https://pku-epic.github.io/GraspVLA-web/) | 2025 | Billion-scale synthetic VLA |

### Sim2Real 해결

| 연구 | 핵심 |
|------|------|
| [DexNDM](https://meowuu7.github.io/DexNDM/) | World model로 sim2real gap 보정 |

**DexNDM 접근법**:
1. 시뮬레이터에서 generalist policy 학습
2. 소량의 real data로 neural dynamics model 학습
3. Back-propagation으로 sim2real gap 수정 (미분 가능)

### Navigation

| 연구 | 핵심 |
|------|------|
| [NavFoM](https://pku-epic.github.io/NavFoM-Web/) | Cross-embodiment navigation foundation model |
| [TrackVLA](https://pku-epic.github.io/TrackVLA-web/) | 30분+ human tracking |

---

## 6대 역량 평가

| 축 | 평가 | 근거 |
|-----|------|------|
| Long-horizon | ✓ | Cloth folding 등 deformable manipulation sim2real |
| Precision | ✓ | DexNDM으로 드라이버, 망치 등 정밀 in-hand manipulation |
| Deployment Robustness | ✓ | MTBF 1개월+, 30+ 무인 창고 운영 |
| Multi-task | ✓ | GraspVLA zero-shot 82% (LIBERO) |
| Cross-embodiment | ✓ | 7 hand embodiment 지원 |
| Zero-shot | ✓ | π0 fine-tuned 능가 |

---

## 한계점

### 명시적 한계 (발표에서 인정)

| 한계 | 설명 |
|------|------|
| Task Scope | Grasping 특화, generalist는 아직 |
| Dexterous Sim2Real | 초기에 실패 → DexNDM으로 해결 |
| Specialist vs Generalist | Motion control은 아직 specialist policy |

### 분석적 한계

| 한계 | 설명 |
|------|------|
| Pure Sim2Real 아님 | Web grounding (100M+ real images) 포함 |
| 원리 설명 부족 | 왜 1B frames에서 수렴하는지 이론적 설명 없음 |
| Embodiment 일반화 | Franka Panda 중심, cross-robot transfer 제한적 |

---

## vs 경쟁사

| 항목 | Galbot | Physical Intelligence | Figure |
|------|--------|----------------------|--------|
| 배포 규모 | **30+ 도시 + 30+ 창고** | 연구 데모 | 연구 데모 |
| 데이터 전략 | 99% synthetic | Cross-embodiment real | VLA (Helix) |
| 강점 | 상용 배포 유일 | 범용성 추구 | 산업용 최적화 |
| 한계 | Grasping 특화 | Zero-shot 약함 | 가정용 미지원 |

---

## References

- [Galbot 공식 웹사이트](https://www.galbot.com/)
- [PKU EPIC Lab](https://pku-epic.github.io/)
- [GraspVLA Paper](https://arxiv.org/abs/2505.03233)
- [DexGraspNet 2.0 Paper](https://arxiv.org/abs/2410.23004)
- [DexNDM Paper](https://arxiv.org/abs/2510.08556)

---

## See Also

- [회사 목록](./)
- [Physical Intelligence](./physical-intelligence)
- [pi0](../models/pi0) - 비교 대상 VLA
- [Diffusion Policy](../models/diffusion-policy)
