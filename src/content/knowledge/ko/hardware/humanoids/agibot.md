---
title: Agibot (智元机器人)
description: 중국 Zhiyuan Robotics의 범용 휴머노이드 로봇 및 GO-1 Foundation Model
tags: [agibot, zhiyuan, humanoid, china, go-1, foundation-model, teleoperation, industrial-robotics, shanghai]
category: hardware

# Authorship
createdBy:
  name: 박종현
  email: jhpark@sudormrf.run
lastEditedBy:
  name: 박종현
  email: jhpark@sudormrf.run
lastEditedAt: 2026-01-15
---

# Agibot (智元机器人)

> Home > Hardware > Humanoids > Agibot

<!-- 이미지 placeholder - 실제 이미지 추가 필요 -->
<!-- Image pending: ![Agibot](../../assets/hardware/humanoids/agibot.png) -->

---

## Overview

| 항목 | 내용 |
|------|------|
| 제조사 | Agibot / Zhiyuan Robotics (智元机器人) |
| 본사 | 상하이 푸둥신구 |
| 설립 | 2023년 2월 |
| 창업자 | Peng Zhihui (彭志辉), Deng Taihua - 前 Huawei "Top Minds" 프로그램 |
| 투자자 | Sequoia Capital China, Hillhouse Capital, BYD, JD.com |
| 밸류에이션 | $1B+ (2024년 유니콘 달성) |

---

## 스펙

### 주요 모델 라인업

| 모델 | 형태 | DoF | 높이 | 무게 | 가격 | 용도 |
|------|------|-----|------|------|------|------|
| A2 | 이족 휴머노이드 | 49 | 169cm | 55kg | - | 범용/산업 |
| A2 Ultra | 이족 휴머노이드 (고급형) | 49 | 169cm | - | - | 범용/텔레오퍼레이션 |
| A2 Lite | 이족 휴머노이드 (보급형) | - | - | - | - | 범용/텔레오퍼레이션 |
| A2 Youth | 이족 휴머노이드 | 23 | - | - | ~$23K | 엔터테인먼트 |
| G1/G2 | 휠 휴머노이드 | 26 | 130-180cm (조절) | 150kg | ~$60K | 산업/상업 |
| X1 Lingxi | 반신 휴머노이드 | 27 | 130cm | - | ~$14K | 인터랙션 |
| RAISE A1 | 이족 휴머노이드 | 49 | 175cm | 53kg | - | 산업 |

### G 시리즈 상세 스펙 (26 DoF)

| 항목 | 스펙 |
|------|------|
| 총 DoF | 26 |
| 양팔 | 7 DoF x 2 = 14 DoF |
| 허리 | 3 DoF (굽힘/신장, 회전) |
| 하체/힙 | 2 DoF (동적 자세 변경) |
| 헤드/기타 | 7 DoF (수평/수직 회전 포함, 공식 사양 기준) |
| 팔 | 7 DoF 힘제어 (전관절 토크센서), 힘제어 정확도 >0.5N |
| 페이로드 | 팔당 5kg |
| 그리퍼 | 모듈형 (표준 그리퍼 / 6 DoF 덱스터러스 핸드) |
| SkillHand | 12 능동 DoF + 5 수동 DoF, 손끝 비전센서 내장 |
| 카메라 | 8개 고해상도 (3D 인식), RGBD (전/후방) |
| 센서 | LiDAR, 6축 힘센서 (양팔) |
| 컴퓨팅 | 200 TOPS (온디바이스 AI) |
| 인증 | IP42, -15°C ~ 50°C 극한환경, 130+ 부품 테스트 통과 |

---

## 핵심 의의

Agibot은 **중국 산업용 휴머노이드 로봇의 대표주자**로, 다음과 같은 차별점을 보유:

### 1. 대량 생산 체계 구축
- **2024년 12월**: 962대 생산 달성
- **2025년 1월**: 1,000대 범용 로봇 생산
- **2025년 12월**: 5,000대 대량 생산 달성
  - A 시리즈: 1,742대
  - X 시리즈: 1,846대
  - G 시리즈: 1,412대

### 2. 실산업 배치 완료
8개 핵심 상업 영역에 배치:
- 안내/리셉션 서비스
- 엔터테인먼트/공연
- **스마트 제조**
- **물류 분류**
- 보안 점검
- 상업 청소
- 데이터 수집/훈련
- 연구/교육

### 3. 중국/미국/EU 인증 (2025.05)
글로벌 시장 진출을 위한 3대 지역 인증 획득으로 해외 시장 확대 기반 마련.

---

## GO-1 Foundation Model

### 개요
**Genie Operator-1 (GO-1)** - 2025년 3월 발표된 범용 Embodied Foundation Model. Agibot이 주장하는 바에 따르면 "첫 번째 범용 Embodied 기반 대형 모델"로 포지셔닝. ([AIBase](https://www.aibase.com/news/16123))

### 아키텍처: ViLLA (Vision-Language-Latent-Action)
고품질 데이터셋과 대규모 비디오 데이터를 효과적으로 활용하여 일반화 능력을 극대화하는 새로운 아키텍처.

### 학습 방식
- **AgiBot World 데이터셋** 기반: 100만+ 실세계 조작 궤적
- 인간 비디오 데이터로부터 학습
- 100+ 시나리오 (40% 가정환경, 20% 산업환경)

### 핵심 성능
| 지표 | 내용 |
|------|------|
| 성공률 향상 | 기존 모델 대비 **+32%** |
| 일반화 | 최소 데이터로 새로운 태스크 적응 (Zero-shot/Few-shot) |
| 전이 학습 | "One-Brain-Multiple-Forms" - 다양한 로봇 플랫폼 간 전이 |
| 지속 학습 | 실세계 실행 데이터로 지속적 개선 |

### 주요 태스크
- 음료 배달/물 따르기
- 테이블 정리
- 식사 준비
- 게스트 인사

---

## 텔레오퍼레이션

### VR 텔레오퍼레이션 키트
A2 Ultra/A2 Lite 호환 VR 제어 시스템.

| 기능 | 설명 |
|------|------|
| 실시간 모션 매핑 | 인간 팔 동작을 로봇 팔이 실시간 추종 |
| 멀티 제스처 전환 | 3가지 프리셋 제스처 빠른 전환 |
| 덱스터러스 핸드 제어 | 손가락 동작 동기화로 정밀 파지 |
| 저지연 인터랙션 | 부드러운 비디오 피드백 |
| 안전 보호 | 관절 한계 및 충돌 감지 내장 |

### 전신 모션 캡처
- VR 헤드셋 제어
- 전신 모션 캡처 제어
- 밀리초 단위 지연

### AgiBot World 데이터 수집
- **4,000+ m² 전용 시설**
- 100대 로봇 동시 운용
- 3,000+ 물리 객체
- 가정/산업/슈퍼마켓/오피스 환경 재현
- **일일 수만 건 모션 데이터 생성**

---

## Real-World Reinforcement Learning

### 산업 현장 Real-World RL 배치
**2025년 11월** - Longcheer Technology와의 파일럿 프로젝트로 실제 산업 환경에서 강화학습 적용. Agibot에 따르면 "실제 산업 로보틱스에서 Real-World RL의 첫 적용"이라고 발표. ([PRNewswire](https://www.prnewswire.com/news-releases/agibot-achieves-first-real-world-deployment-of-reinforcement-learning-in-industrial-robotics-302601935.html))

### 핵심 장점
| 항목 | 내용 |
|------|------|
| 학습 시간 | 수 주 → **약 10분**으로 단축 |
| 적응성 | 부품 위치/공차 변화 자동 보상 (Agibot 주장: 100% 태스크 완료율) |
| 유연성 | 커스텀 지그/툴링 없이 빠른 재훈련으로 태스크 변경 |

### 확장 계획
소비자 전자제품 및 자동차 부품 생산으로 확대 예정.

---

## 자체 기술 스택

### AimRT 미들웨어
ROS(Robot Operating System)보다 빠르고 효율적인 자체 개발 미들웨어.

### Lingqu OS
**2025년 7월** 출시된 Embodied Intelligent Operating System.
- 첫 산업 배치 및 지속적 현장 운영 지원.

### 온디바이스 AI
- 200 TOPS 처리 성능
- 얼굴 인식 정확도 96%
- 실시간 음성 명령 이해
- 로컬 LLM 기반 자연스러운 대화 (클라우드 의존성 없음)

---

## 제휴 및 배치 사례

| 파트너 | 내용 |
|--------|------|
| Pepsi | "Fizzbot" 커스텀 A2 휴머노이드 앰배서더 |
| Fulin Precision | A2-W 휠형 휴머노이드 ~100대 주문 |
| Longcheer Technology | Real-World RL 파일럿 배치 |
| JD.com | 투자 및 이커머스 판매 채널 |

---

## 경쟁 포지션

| 차별점 | 설명 |
|--------|------|
| 대중 시장 타겟 | 다양한 가격대 제품군 ($14K ~ $60K+) |
| 직접 판매 | 자체 이커머스 + JD.com 채널 |
| 주요 경쟁사 | Unitree Robotics (연구/파워유저 타겟) |

---

## References

- [Agibot 공식 웹사이트](https://www.agibot.com/)
- [Agibot About Us](https://www.agibot.com/about_Zhiyuan)
- [AgiBot - Wikipedia](https://en.wikipedia.org/wiki/AgiBot)
- [The Rise of AgiBot (Zhiyuan Shanghai Robotics) - Mike Kalil](https://mikekalil.com/blog/agibot-zhiyuan-robotics/)
- [AgiBot World Dataset - Mike Kalil](https://mikekalil.com/blog/agibot-world/)
- [GO-1 Foundation Model - AIBase](https://www.aibase.com/news/16123)
- [AgiBot G2 Industrial Robot](https://humanoidroboticstechnology.com/industry-news/agibot-launches-g2-humanoid-robot-for-industrial-grade-automation/)
- [AgiBot Real-World RL Deployment - PRNewswire](https://www.prnewswire.com/news-releases/agibot-achieves-first-real-world-deployment-of-reinforcement-learning-in-industrial-robotics-302601935.html)

---

## See Also

- [하드웨어 목록](../index.md)
