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
lastEditedAt: 2026-01-26
---

# Agibot (智元机器人)

> Home > Hardware > Humanoids > Agibot

<!-- 이미지 placeholder - 실제 이미지 추가 필요 -->
<!-- Image pending: ![Agibot](/assets/hardware/humanoids/agibot.png) -->

---

## Overview

| 항목 | 내용 |
|------|------|
| 제조사 | Agibot / Zhiyuan Robotics (智元机器人) |
| 본사 | 상하이 푸둥신구 |
| 설립 | 2023년 2월 |
| 창업자 | Peng Zhihui (彭志辉), Deng Taihua - 前 Huawei "Top Minds" 프로그램 |
| 투자자 | Sequoia Capital China, Hillhouse Capital, BYD, JD.com |
| 밸류에이션 | $6.4B (2025년 10월 기준), 2024년 유니콘 달성 |

---

## 스펙

### 주요 모델 라인업

#### A 시리즈 (이족 휴머노이드)

| 모델 | 형태 | DoF | 높이 | 무게 | 용도 |
|------|------|-----|------|------|------|
| A2 | 인터랙티브 서비스 로봇 | 49+ | 175cm | 55kg | 고객 서비스/안내 |
| A2 Ultra | 고급형 (iF/Red Dot 수상) | 49+ | 175cm | 55kg | 범용/텔레오퍼레이션 |
| A2 Lite | 보급형 | - | - | - | 범용/텔레오퍼레이션 |
| A2-W | 휠형 제조 로봇 | 22 | 163cm | 230kg | 산업 유연 제조 |
| A2-Max | 중장비형 | - | - | - | 고하중 산업 작업 |
| RAISE A1 | 최초 모델 (2023.08) | 49 | 175cm | 53-55kg | 산업/R&D |

#### G 시리즈 (휠 휴머노이드)

| 모델 | 형태 | DoF | 높이 | 무게 | 런타임 | 용도 |
|------|------|-----|------|------|--------|------|
| G1 | 휠 휴머노이드 | 26 | 조절 가능 | - | - | 범용 |
| G2 | 산업용 휠 휴머노이드 | 26 | 최대 180cm | 185kg | 4시간 | 제조/물류/서비스 |

#### X 시리즈 (반신 휴머노이드)

| 모델 | 형태 | DoF | 높이 | 무게 | 가격 | 용도 |
|------|------|-----|------|------|------|------|
| X1 Lingxi | 오픈소스 개발자 키트 | 34 | 130-133cm | 33-44kg | ~$19.5K | 연구/개발 |
| X2 Lingxi | 범용 반신 로봇 | 28 | 130cm | 33.8kg | - | 보안/가사/청소 |

### A2 시리즈 상세 스펙

| 항목 | 스펙 |
|------|------|
| 총 DoF | 49+ |
| 양팔 | 7 DoF x 2 = 14 DoF (힘-위치 하이브리드 제어) |
| 덱스터러스 핸드 | 19 DoF (바늘 꿰기 수준 정밀도) |
| SkillHand | 12 능동 DoF + 5 수동 DoF, 손끝 비전센서 내장 |
| 보행 속도 | 최대 7km/h (3.3m/s) |
| 런타임 | 2시간 연속 운용 |
| 페이로드 | 팔당 5kg, 전체 15kg |
| 피크 토크 | 512Nm (통합 관절), PowerFlow 350Nm |
| 카메라 | 마이크 어레이, LiDAR, RGB-D |
| 컴퓨팅 | 200 TOPS (온디바이스 AI) |
| AI 정확도 | 96% 의도 이해 (소음 환경), 99% 얼굴 인식 |
| A2 Ultra 신뢰성 | 1,300시간+ 연속 보행, 실환경 21개월 무전복 |

### G2 시리즈 상세 스펙 (26 DoF)

| 항목 | 스펙 |
|------|------|
| 총 DoF | 26 |
| 양팔 | 7 DoF x 2 = 14 DoF (전관절 토크센서) |
| 힘제어 정확도 | >0.5N |
| 높이 | 최대 180cm (조절 가능) |
| 무게 | 185kg |
| 런타임 | 4시간 (핫스왑 배터리) |
| 페이로드 | 팔당 5kg |
| 센서 | LiDAR, RGB-D, 360도 상황 인식용 다중 RGB |
| 인증 | IP42 실내등급 |
| 인증 | -15°C ~ 50°C 극한환경, 130+ 부품 테스트 통과 |

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

### 3. 세계 최초 3대 지역 인증 (2025.05)
- **AgiBot A2**: 세계 최초로 중국/미국/EU 3개 지역 동시 인증 획득
- 중국 CR001 인증: 기계/전기 안전, EMC, 기능 안전, 지능 성능 종합 평가
- A2 Ultra: 2025 iF Design Award, 2025 Red Dot Award 수상

### 4. 기네스 세계 기록 (2025.11)
- AgiBot A2: **106.286km** 연속 보행 기록 달성

---

## GO-1 Foundation Model

### 개요
**Genie Operator-1 (GO-1)** - 2025년 3월 발표된 범용 Embodied Foundation Model. Agibot이 주장하는 바에 따르면 "첫 번째 범용 Embodied 기반 대형 모델"로 포지셔닝. ([AIBase](https://www.aibase.com/news/16123))

### 아키텍처: ViLLA (Vision-Language-Latent-Action)
고품질 데이터셋과 대규모 비디오 데이터를 효과적으로 활용하여 일반화 능력을 극대화하는 새로운 아키텍처.

### 학습 방식
- **AgiBot World 데이터셋** 기반:
  - 1,003,672개 궤적 (Beta 버전)
  - 217개 태스크, 87개 스킬
  - 3,000+ 물체, 100+ 실환경 시나리오
  - 총 2,976.4시간 분량
- 인간 비디오 데이터로부터 학습
- 5개 도메인: 가정, 소매, 산업, 레스토랑, 오피스

### 핵심 성능
| 지표 | 내용 |
|------|------|
| 성공률 향상 | 기존 모델 대비 **+32%** (46% → 78%) |
| 복잡 태스크 성공률 | 60%+ (장기 시퀀스 태스크) |
| 일반화 | 최소 데이터로 새로운 태스크 적응 (Zero-shot/Few-shot) |
| 전이 학습 | "One-Brain-Multiple-Forms" - 다양한 로봇 플랫폼 간 전이 |
| 지속 학습 | 실세계 실행 데이터로 지속적 개선 |
| 수상 | IROS 2025 Award Finalist |

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
- 100대+ AgiBot G1 로봇 동시 운용
- 3,000+ 물리 객체
- 5개 도메인 환경 재현: 가정/소매/산업/레스토랑/오피스
- **일일 수만 건 모션 데이터 생성**
- 오픈소스: [GitHub](https://github.com/OpenDriveLab/AgiBot-World), [HuggingFace](https://huggingface.co/agibot-world)

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
- C++20 기반, 50,000줄 미만 (ROS2 ~200,000줄 대비 경량)
- ROS2 대비 멀티노드 통신 지연 최대 30% 감소
- ROS2/HTTP/gRPC/MQTT/Zenoh 등 다중 프로토콜 지원
- ROS/ROS2 생태계와 플러그인 호환
- 오픈소스 공개

### Lingqu OS
**2025년 7월** 출시된 업계 최초 Embodied Intelligent Operating System.
- AimRT 기반 분산 통신, 실시간 스케줄링, 하드웨어 추상화
- 표준화된 Intelligent Agent 서비스 프레임워크
- 개발/디버깅, 시뮬레이션, 데이터 관리, 모델 배포 툴체인 포함
- 오픈 공동 개발 모델로 Q4부터 롤아웃

### 온디바이스 AI
- 200 TOPS 처리 성능
- 얼굴 인식 정확도 96%
- 실시간 음성 명령 이해
- 로컬 LLM 기반 자연스러운 대화 (클라우드 의존성 없음)

---

## 제휴 및 배치 사례

| 파트너 | 내용 |
|--------|------|
| Pepsi | "Fizz Bot" 브랜드 휴머노이드 (David Beckham과 런칭, 2025 WAIC 음료 서빙) |
| Fulin Precision | A2-W 휠형 휴머노이드 ~100대 주문 |
| Longcheer Technology | Real-World RL 파일럿 배치 |
| BYD | 투자 및 산업 자동화/물류 채택 |
| SAIC Motor | 산업 자동화/물류 채택 |
| JD.com | 투자 및 이커머스 판매 채널 |

---

## 경쟁 포지션

| 차별점 | 설명 |
|--------|------|
| 글로벌 1위 | 2025년 전 세계 휴머노이드 출하량 1위, 시장점유율 39% (5,168대) |
| 대중 시장 타겟 | 다양한 가격대 제품군 ($19.5K ~ $60K+) |
| 직접 판매 | 자체 이커머스 + JD.com 채널 |
| 주요 경쟁사 | Unitree Robotics (32%), Tesla Optimus, Agility Robotics |
| 글로벌 인증 | 세계 최초 중국/미국/EU 3개 지역 동시 인증 (2025.05) |
| 해외 진출 | 말레이시아 첫 해외 체험센터, 북미/유럽/중동/일본/한국/동남아 확대 |

---

## References

- [Agibot 공식 웹사이트](https://www.agibot.com/)
- [Agibot About Us](https://www.agibot.com/about_Zhiyuan)
- [AgiBot - Wikipedia](https://en.wikipedia.org/wiki/AgiBot)
- [The Rise of AgiBot (Zhiyuan Shanghai Robotics) - Mike Kalil](https://mikekalil.com/blog/agibot-zhiyuan-robotics/)
- [AgiBot World Dataset - Mike Kalil](https://mikekalil.com/blog/agibot-world/)
- [GO-1 Foundation Model - GlobeNewswire](https://www.globenewswire.com/news-release/2025/03/11/3040608/0/en/AgiBot-GO-1-The-Evolution-of-Generalist-Embodied-Foundation-Model-from-VLA-to-ViLLA.html)
- [AgiBot World GitHub](https://github.com/OpenDriveLab/AgiBot-World)
- [AgiBot World HuggingFace](https://huggingface.co/agibot-world)
- [AgiBot G2 Industrial Robot - Robots International](https://www.robotsinternational.com/Agibot-G2-General-Purpose-Wheeled-Humanoid-Robot.htm)
- [AgiBot Real-World RL Deployment - PRNewswire](https://www.prnewswire.com/news-releases/agibot-achieves-first-real-world-deployment-of-reinforcement-learning-in-industrial-robotics-302601935.html)
- [AgiBot 5,000대 생산 달성 - PRNewswire](https://www.prnewswire.com/news-releases/agibot-announces-the-rollout-of-its-5-000th-mass-produced-humanoid-robot-302635127.html)
- [AgiBot A2 중국/미국/EU 인증 - ECNS](http://www.ecns.cn/m/news/cns-wire/2025-05-30/detail-iherwsih6789577.shtml)
- [AgiBot 글로벌 시장점유율 1위 - TechNode](https://technode.com/2026/01/09/chinas-agibot-leads-global-humanoid-robot-shipments-in-2025-omdia-says/)

---

## See Also

- [하드웨어 목록](/knowledge/hardware/humanoids/)
