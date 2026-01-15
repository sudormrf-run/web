---
title: PSYONIC Ability Hand
description: 멀티터치 감지 및 햅틱 피드백을 지원하는 첨단 바이오닉 핸드
tags: [psyonic, ability-hand, bionic, prosthetic, haptic-feedback, touch-sensing, robotics]
category: hardware
last_updated: 2025-01

# Authorship
createdBy:
  name: 박종현
  email: jhpark@sudormrf.run
lastEditedBy:
  name: 박종현
  email: jhpark@sudormrf.run
lastEditedAt: 2026-01-15
---

# PSYONIC Ability Hand

<!--
  이미지 플레이스홀더
  TODO: 배포 전 assets/hardware/hands/ability-hand.png 파일 추가 필요
  권장 이미지: PSYONIC 공식 제품 이미지 또는 CC 라이선스 이미지 사용
  이미지가 없을 경우 아래 라인을 주석 처리하거나 삭제하세요.
-->
<!-- Image pending: ![Ability Hand](../../assets/hardware/hands/ability-hand.png) -->

---

## Overview

| 항목 | 스펙 |
|------|------|
| 제조사 | PSYONIC (샌디에이고, 캘리포니아) |
| 설립자 | Aadeel Akhtar, PhD (신경과학/전기공학) |
| 설립년도 | 2015년 |
| 무게 | 490g (성인 평균 손 무게 이하) |
| 파지력 | 66N (14.8 lbs) |
| 손가락 폐쇄 시간 | 0.2초 (경쟁사 대비 2배 속도) |
| 배터리 | 2200mAh LiPo |
| 충전 | USB-C, 약 1시간 완충 |
| 방수등급 | IP64 (먼지/물 튀김 보호) |
| 그립 패턴 | 32개 (19개 사전 정의) |
| 구조 | 카본 파이버 케이스 + 6개 모터 |

---

## 핵심 의의

**멀티터치 감지 기능을 탑재한 최초의 상용 바이오닉 핸드** [^1][^2]

PSYONIC Ability Hand는 멀티터치 감지 기능을 상용화한 의수로 [^1][^2], 사용자가 물체를 잡을 때 실제로 "느낄 수" 있게 해주는 혁신적인 제품이다. 기존 의수가 단순히 기계적 움직임만 제공했다면, Ability Hand는 손끝의 압력 센서와 햅틱 진동 피드백을 통해 사용자에게 촉각 정보를 전달한다.

> PSYONIC 공식 웹사이트 및 IEEE Spectrum에서 "world's first touch-sensing bionic hand"로 소개되고 있음.

### 창립 배경

창립자 Aadeel Akhtar 박사는 7세 때 파키스탄에서 다리를 잃고 나뭇가지를 목발로 사용하던 소녀를 만난 경험이 계기가 되었다. [^3] 이 경험은 그가 신경공학을 연구하고 모든 사람이 접근할 수 있는 저렴한 첨단 의수를 개발하겠다는 사명으로 이어졌다.

2014년 에콰도르에서 첫 프로토타입 테스트가 진행되었고, 1989년 지뢰 폭발로 손을 잃은 전직 군인 Juan Suquillo에게 의수를 착용시켰을 때, 그는 "나의 일부가 돌아왔다"고 말했다.

---

## 기술적 혁신

### 1. 멀티터치 센싱 시스템

- **압력 센서**: 엄지, 검지, 새끼손가락에 압력 센서 내장
- **햅틱 피드백**: 물체 접촉 시 진동으로 압력 정보 전달
- **접촉 반사(Contact Reflex)**: 물체 접촉 감지 시 자동 정지로 섬세한 물체 파손 방지

### 2. EMG + AI 제어 시스템

- **EMG 센서**: 잔존 팔의 근육 전기 신호 감지
- **AI 처리**: 근전도 신호를 분석하여 자연스러운 손 동작으로 변환
- **소켓 센서**: 2개의 센서가 근육 움직임을 감지, 증폭, 전기 신호로 변환

### 3. 내구성 설계

- **카본 파이버 케이스**: 가볍고 튼튼한 구조
- **고무/실리콘 손가락**: 충격에 유연하게 대응, 파손 방지
- **IP64 방수**: 일상적인 물 튀김과 먼지로부터 보호

### 4. 손가락 구동

- **5손가락 독립 굴곡/신전**: 모든 손가락이 개별적으로 움직임
- **전동 엄지 회전**: 엄지의 전기적 회전 + 수동 조절 가능
- **6개 모터**: 정밀한 다축 제어

### 5. 연결성

- **Bluetooth 앱**: iOS/Android 앱으로 그립 설정 및 제어
- **OTA 업데이트**: 무선 소프트웨어 업데이트
- **Open API**: 연구용 전체 시스템 통합 지원

---

## 가격 및 보험

> **주의**: 아래 가격과 보험 정보는 2024년 기준이며, 실제 비용 및 보험 적용 여부는 개인 상황, 보험 플랜, 지역에 따라 다를 수 있습니다. 구체적인 정보는 PSYONIC 또는 해당 보험사에 직접 문의하시기 바랍니다.

| 구분 | 가격 (2024년 기준) |
|------|------|
| 시장가 | $25,000 - $50,000 |
| 경쟁사 고급 의수 | $50,000 - $150,000 |

### 보험 적용 (미국)

PSYONIC 공식 발표에 따르면 [^1]:
- **Medicare**: FDA 승인을 받은 의료 기기로서 Medicare 적용 대상
- **민간 보험**: 대부분의 미국 의료보험에서 보장 가능

> **참고**: 보험 적용 여부와 본인 부담금은 개별 플랜의 DME(Durable Medical Equipment) 커버리지 조건에 따라 달라집니다.

---

## 로보틱스 연구 활용

PSYONIC Ability Hand는 의수뿐 아니라 로보틱스 연구 분야에서도 활발히 활용되고 있다.

> "사람에게 장착되는 것과 동일한 손이 로봇에도 장착됩니다" - Aadeel Akhtar [^4]

### NASA

- **Valkyrie 휴머노이드 로봇**: 국제우주정거장(ISS) 콘솔 제어 연구
- 인간형 우주 비행사 로봇의 손 역할 연구

### Meta

- **로봇 학습 연구**: 인간형 폼팩터와 풍부한 하드웨어 기능 활용
- **정교한 조작(Dexterous Manipulation)** 연구 플랫폼으로 활용

> "Ability Hand의 인간형 폼팩터와 강력하고 기능이 풍부한 하드웨어는 로봇 학습과 정교한 조작 연구 플랫폼으로서 흥미롭고 독특한 잠재력을 제공합니다." - Mustafa Mukadam, PhD (Meta 연구 과학자) [^5]

### Apptronik

- **Apollo 휴머노이드 로봇**: 2023년 IEEE Robotics and Automation 컨퍼런스에서 Ability Hand 통합 시연
- Apollo 사양: 높이 1.7m (5'9"), 무게 73kg (160lbs)
- 휴머노이드 로봇 양산 라인에서 Ability Hand 활용 가능성 탐구
- Apptronik 연혁: UT Austin 로봇공학자들이 NASA DARPA Robotics Challenge 협력 후 설립

### 연구용 제품 출시

PSYONIC은 전 세계 로보틱스 연구자들을 위해 Ability Hand를 연구용으로 별도 출시하였다. [^5]

- **Open API**: 전체 시스템 통합 가능
- **빠른 속도**: 200ms 폐쇄 시간
- **멀티터치**: 촉각 피드백 연구에 적합
- **내구성**: 연구 환경의 반복 테스트에 적합

---

## 회사 현황

> **참고**: 아래 비즈니스 정보는 2024년 6월 기준 공개된 자료를 바탕으로 작성되었으며, 최신 정보는 변경되었을 수 있습니다.

### Shark Tank 투자 (2024년 2월) [^6]

- **투자금**: $1,000,000 (6% 지분)
- **투자자**: Lori Greiner, Daymond John, Kevin O'Leary
- **협상 기업가치**: $50,000,000

### 성장 현황 (2024년 기준)

- **직원**: 30명 이상 (엔지니어, 의사, 사회복지사, 공중보건 전문가)
- **시설**: 샌디에이고 5,000 sq.ft. (확장 계획 발표)
- **생산량**: 연 1,000대 (10,000대 목표)
- **펀딩**: 2024년 $4.1M 시드 펀딩

### 향후 개발 계획

- **신경 직접 자극**: Navy Hospital + UCSD와 협력하여 뼈와 신경 통합 연구
  - 진동 피드백이 아닌 신경 직접 자극으로 실제 손에서 느끼는 것 같은 감각 구현 목표
- **추가 제품**: 손목, 팔꿈치, 무릎, 발목 개발 진행 중

---

## 수상 및 인정

- **MIT Technology Review 35 Innovators Under 35** (2021) - Aadeel Akhtar [^3]
- **Newsweek "America's 50 Greatest Disruptors"** - 세상을 바꾸는 비전가

---

## See Also

- [하드웨어 목록](../index)
- [Inspire Hand](inspire)

---

## References

[^1]: [PSYONIC 공식 웹사이트](https://www.psyonic.io/)
[^2]: [IEEE Spectrum - Bionic Hand Gives Amputees Sense of Touch](https://spectrum.ieee.org/bionic-hand-simulates-touch)
[^3]: [MIT Technology Review - Aadeel Akhtar](https://www.technologyreview.com/innovator/aadeel-akhtar/)
[^4]: [Interesting Engineering - US firm's bionic hand with multi-touch sensation](https://interestingengineering.com/innovation/bionic-hand-offers-32-grips-sensations)
[^5]: [PSYONIC - Ability Hand for Robots](https://www.psyonic.io/robots)
[^6]: [CNBC - How prosthetics startup Psyonic landed $1 million Shark Tank offer](https://www.cnbc.com/2024/02/28/shark-tank-how-prosthetics-startup-psyonic-landed-1-million-offer.html)

---

*이 문서의 정보는 2025년 1월 기준으로 작성되었습니다. 최신 정보는 공식 웹사이트를 참조하세요.*
