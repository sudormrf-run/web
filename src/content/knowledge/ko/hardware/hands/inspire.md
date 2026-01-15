---
title: Inspire Hand
description: INSPIRE-ROBOTS의 덱스터러스 핸드 - 인간 손의 정밀함을 재현하는 로봇 핸드
tags: [inspire, hand, dexterous, china, beijing, rh56, f1, humanoid, unitree]
category: hardware
date: 2026-01-09

# Authorship
createdBy:
  name: 박종현
  email: jhpark@sudormrf.run
lastEditedBy:
  name: 박종현
  email: jhpark@sudormrf.run
lastEditedAt: 2026-01-15
---

# Inspire Dexterous Hand

> Home > Hardware > Hands > Inspire Hand

<!-- 이미지 플레이스홀더: 실제 이미지 파일을 assets 폴더에 추가 필요 -->
<!-- Image pending: ![Inspire Hand](../../assets/hardware/hands/inspire-hand.png) -->

---

## Overview

**INSPIRE-ROBOTS**는 2016년 중국 베이징에서 설립된 마이크로 고정밀 모션 제어 컴포넌트 전문 기업이다.[^1] 첫 해에 1세대 마이크로 리니어 서보 액추에이터 개발에 성공했으며, 이후 마이크로 사이즈, 고정밀, 힘 제어 분야에서 독보적인 기술력을 축적해왔다.[^1] 현재 DHL을 통해 20개국 이상에 제품을 공급하고 있다.[^1]

### 핵심 스펙

| 항목 | 내용 | 출처 |
|------|------|------|
| 제조사 | INSPIRE-ROBOTS (베이징, 2016년 설립) | [^1] |
| DoF | 6 | [^2] |
| 모터 조인트 | 12개 | [^2] |
| 반복 정밀도 | ±0.20mm | [^2] |
| 힘 해상도 | 0.5N | [^2] |
| 하중 | 3kg | [^2] |
| 압력 센서 | 6개 (통합형) | [^2] |
| 인터페이스 | GX12 항공 플러그 | [^2] |

---

## 핵심 의의

INSPIRE 덱스터러스 핸드는 **인간 손의 크기와 외관을 유지하면서도 산업용 정밀도를 달성**한 점에서 주목받는다.[^2] 6 자유도와 12개 모터 조인트의 조합으로 하이브리드 위치/힘 제어 알고리즘을 구현하여, 인간 손과 유사한 정밀한 파지 동작이 가능하다.[^2]

특히 **Unitree G1 휴머노이드 로봇과의 공식 통합**은 물리적 AI 연구의 실용적 플랫폼으로서의 가치를 입증한다.[^3] ROS 플러그인 지원과 RS485/CAN 통신 인터페이스는 연구 및 산업 환경 모두에서 유연한 통합을 가능하게 한다.[^2]

선형 서보 드라이브 기반의 적응형 파지 기능은 다양한 형태와 재질의 물체를 안전하게 조작할 수 있게 하며, 이는 서비스 로봇, 교육용 로봇, 의수 등 광범위한 응용 분야에 적합하다.[^1]

---

## 제품 라인업

### RH56 시리즈

| 모델 | 특징 | 주요 용도 | 출처 |
|------|------|----------|------|
| **RH56BFX** | 고속 이동, 정밀 상호작용 ("The Pianist") | 정밀 조작, 악기 연주 시연 | [^1] |
| **RH56DFX** | 강한 그립력, 적당한 속도, 통합 힘 센서 | 파지 작업, 의수 | [^1] |

#### RH56DFX 상세 스펙

| 항목 | 스펙 | 출처 |
|------|------|------|
| 엄지 그립력 | 15N | [^3] |
| 손바닥 그립력 | 10N | [^3] |
| 엄지 회전 | >65도 @ 107도/s | [^3] |
| 엄지 굴곡 속도 | 70도/s | [^3] |
| 손가락 굴곡 속도 | 260도/s | [^3] |
| 무게 | 540g | [^2] |
| 작동 전압 | DC24V ±10% | [^2] |
| 정지 전류 | 0.2A | [^2] |
| 최대 전류 | 2A | [^2] |
| 통신 | RS485 | [^2] |

### F1 시리즈 (Advanced)

F1 시리즈는 풀메탈 바디와 통합 골격 설계로 구조적 강성을 대폭 강화한 프리미엄 라인이다.[^1]

| 항목 | 스펙 | 출처 |
|------|------|------|
| 통신 | 1kHz 고속 실시간 (EtherCAT + RS485) | [^1] |
| 정적 수동 하중 | 30kg | [^1] |
| 손끝 파지력 | 15N | [^1] |
| 센서 | 24개 다차원 (촉각/힘/위치/온도) | [^1] |
| 자유도 | 6 DoF | [^1] |
| 조인트 수 | 12개 | [^1] |
| 무게 | 620 ± 10g | [^1] |
| 작동 전압 | 24V - 48V | [^1] |
| 정지 전류 (RS485) | 194 ± 10mA @ 24V | [^1] |
| 정지 전류 (EtherCAT) | 210 ± 10mA @ 24V | [^1] |
| 최대 전류 | 5A | [^1] |
| 품질 테스트 | 20가지 표준화 테스트 통과 | [^1] |

#### F1 시리즈 핵심 특징

- **풀메탈 바디**: 통합 골격 설계로 내구성 극대화 [^1]
- **히든 와이어링**: 혁신적 내부 배선으로 깔끔한 외관 [^1]
- **다중 센서 시스템**: 4가지 카테고리, 24그룹 센서 (촉각, 힘, 위치, 온도) [^1]
- **다중 모드 제어**: 다양한 제어 전략 지원 [^1]

---

## 경쟁 제품 비교

아래 표는 각 제조사의 공식 자료를 기반으로 작성되었다. 일부 항목은 공개 정보 부재로 "N/A" 표기.

| 항목 | INSPIRE RH56 | Shadow Dexterous Hand | PSYONIC Ability Hand |
|------|--------------|----------------------|---------------------|
| **자유도** | 6 DoF, 12 조인트 [^2] | 24 DoF (20 구동) [^4] | 6 모터 [^5] |
| **무게** | 540g (DFX) / 620g (F1) [^1][^2] | 4.3kg [^4] | 490g [^5] |
| **모터 수** | 12개 [^2] | 20개 [^4] | 6개 [^5] |
| **센서** | 6개 (DFX) / 24개 (F1) [^1][^2] | 100개+ @ 1kHz [^4] | 압력 센서 + 햅틱 피드백 [^5] |
| **ROS 지원** | O [^2] | O [^4] | X (Bluetooth 앱) [^5] |
| **통신 속도** | 1kHz (F1) [^1] | 1kHz [^4] | N/A |
| **주요 용도** | 서비스 로봇, 의수 [^1] | 연구/AI [^4] | 의수 [^5] |
| **가격대** | 벤더 문의 필요 | 벤더 문의 필요 | 벤더 문의 필요 |
| **특징** | 휴머노이드 통합 최적화 [^3] | 최고 정밀도/연구용 [^4] | 터치 피드백 [^5] |

**참고**: 정확한 가격은 각 벤더에 직접 문의 필요.

---

## 기술적 특징

### 구동 방식

- **선형 서보 드라이브**: 마이크로 리니어 서보 액추에이터 기반 [^1]
- **링키지 구동**: 인간 손의 건(腱) 시스템을 모방한 연동 메커니즘 [^2]
- **하이브리드 제어**: 위치 제어와 힘 제어의 동시 적용 [^2]

### 센싱 시스템

| 센서 유형 | RH56 시리즈 | F1 시리즈 | 출처 |
|----------|------------|----------|------|
| 힘 센서 | 6개 통합 | 24그룹 | [^1][^2] |
| 위치 센서 | O | O | [^2] |
| 촉각 센서 | - | O | [^1] |
| 온도 센서 | - | O | [^1] |

### 제어 알고리즘

- **적응형 파지**: 물체 형태에 따른 자동 그립 조절 [^2]
- **힘 피드백 제어**: 실시간 힘 센서 기반 섬세한 조작 [^2]
- **위치 정밀도**: ±0.20mm 반복 정밀도 [^2]

---

## 호환성

### Unitree G1 통합

INSPIRE RH56 시리즈는 Unitree G1 휴머노이드 로봇과 공식 통합을 지원한다.[^3]

- **제어 토픽**: `rt/inspire/cmd` (MotorCmds 메시지) [^3]
- **상태 토픽**: `rt/inspire/state` (MotorStates 메시지) [^3]
- **제어 방식**: 조인트 레벨 제어 (12개 모터 배열) [^3]
- **지원 파라미터**: q (조인트 위치) [^3]

```bash
# Unitree RH56DFX Inspire Hand Controller
git clone https://github.com/unitreerobotics/DFX_inspire_service
```

### 통신 인터페이스

| 인터페이스 | RH56 시리즈 | F1 시리즈 | 출처 |
|-----------|------------|----------|------|
| RS485 | O | O | [^1][^2] |
| CAN | O | - | [^2] |
| EtherCAT | - | O | [^1] |
| ROS Plugin | O | O | [^2] |

### 지원 플랫폼

- **Unitree G1**: 공식 통합 지원 [^3]
- **Unitree H1**: 공식 통합 지원 [^6]
- **기타 휴머노이드**: RS485/CAN 인터페이스 통해 연결 가능 [^2]
- **연구용 암**: 표준 통신 프로토콜 지원 [^2]

---

## 응용 분야

- **휴머노이드 로봇**: Unitree G1/H1 등 휴머노이드 플랫폼 통합 [^3][^6]
- **서비스 로봇**: 일상 환경에서의 물체 조작 [^1]
- **연구/교육**: 대학 연구실, 로보틱스 센터 [^1]
- **의수**: 재활 및 보조 기기 [^1]
- **산업 자동화**: 섬세한 조립 작업 [^1]

---

## References

### 주요 출처

[^1]: INSPIRE-ROBOTS Store. https://inspire-robots.store/
[^2]: INSPIRE-ROBOTS. "THE DEXTEROUS HAND RH56 SERIES USER MANUAL." https://en.inspire-robots.com/wp-content/uploads/2024/02/INSPIRE-ROBOTS-THE-DEXTEROUS-HAND-RH56-SERIES-USER-MANUAL.pdf
[^3]: Unitree Robotics. "Inspire DFX Dexterous Hand - G1 Developer Documentation." https://support.unitree.com/home/en/G1_developer/inspire_dfx_dexterous_hand
[^4]: Shadow Robot Company. "Shadow Dexterous Hand Technical Specification." https://www.shadowrobot.com/wp-content/uploads/2022/03/shadow_dexterous_hand_e_technical_specification.pdf
[^5]: PSYONIC. "Ability Hand." https://www.psyonic.io/ability-hand
[^6]: Unitree Robotics. "Dexterous Hand - H1 Developer Documentation." https://support.unitree.com/home/en/H1_developer/Dexterous_hand

### 추가 참고 자료

- INSPIRE-ROBOTS 공식 사이트: https://en.inspire-robots.com
- GitHub unitreerobotics/DFX_inspire_service: https://github.com/unitreerobotics/DFX_inspire_service

---

## See Also

- [하드웨어 목록](../index)
- [Ability Hand](ability)
- [Shadow Dexterous Hand](shadow)
