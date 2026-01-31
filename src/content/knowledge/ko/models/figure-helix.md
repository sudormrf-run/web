---
title: Figure Helix
description: Figure AI의 휴머노이드 로봇용 VLA 모델
tags: [figure-helix, figure-ai, humanoid, vla, figure-02, figure-03, helix-02]
category: models

# Authorship
createdBy:
  name: 박종현
  email: jhpark@sudormrf.run
lastEditedBy:
  name: 박종현
  email: jhpark@sudormrf.run
lastEditedAt: 2026-01-30
---

<div class="author-note">

### 필자의 의견

- Helix 02는 단일 신경망으로 전신을 제어하는 최초의 휴머노이드 VLA입니다.
- 4분간 61개 연속 동작을 리셋 없이 수행하며, 체리피킹이 아닌 실전 가능성을 입증했습니다.
- System 0/1/2 3단계 아키텍처로 1kHz까지 제어 주파수를 높인 점이 인상적입니다.

</div>

## 핵심 의의

- **최초의 전신 자율 휴머노이드**: 픽셀에서 직접 전신을 제어하는 단일 신경망 시스템
- **가장 긴 자율 태스크**: 4분간 61개 연속 loco-manipulation 동작, 리셋이나 인간 개입 없음
- **3단계 아키텍처**: System 0(1kHz) + System 1(200Hz) + System 2(의미적 추론)
- **새로운 센서**: Palm 카메라와 3g까지 감지하는 촉각 센서
- **10만 줄 대체**: 손으로 작성한 109,504줄의 C++ 코드를 1천만 파라미터 신경망으로 대체

<div class="video-embed">
<iframe width="100%" height="400" src="https://www.youtube.com/embed/lQsvTrRTBRs" title="Figure Helix 02 - Official Demo" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>
<p align="center"><em>Figure Helix 02 공식 데모 영상 (2026.01)</em></p>

---

## Overview

| 항목 | 내용 |
|------|------|
| 최신 버전 | Helix 02 (2026년 1월) |
| 회사 | Figure AI |
| 블로그 | [figure.ai/news/helix-02](https://www.figure.ai/news/helix-02) |
| 로봇 | Figure 02 |

---

## Helix 02 (2026.01)

### 주요 발전

Helix 02는 **"픽셀에서 직접 전신을 제어하는 단일 신경망 시스템"** 을 갖춘 최초의 휴머노이드입니다.

| 항목 | Helix (2025.02) | Helix 02 (2026.01) |
|------|-----------------|---------------------|
| 제어 범위 | 상체 위주 | 전신 (보행 + 조작 통합) |
| 아키텍처 | System 1/2 | System 0/1/2 |
| 최고 주파수 | 200Hz | 1kHz |
| 촉각 센서 | 없음 | 3g 감지 가능 |
| Palm 카메라 | 없음 | 있음 |

### 4분 연속 자율 태스크

주방 전체에서 식기세척기 로딩/언로딩을 수행:

| 항목 | 수치 |
|------|------|
| 연속 동작 시간 | 4분 |
| 연속 loco-manipulation 동작 | 61개 |
| 리셋/인간 개입 | 없음 |

### 정밀 조작 데모

- 병뚜껑 돌려 열기 (토크 제어)
- 약통에서 개별 알약 꺼내기 (가려진 상태에서)
- 주사기로 정확히 5ml 분배
- 어수선한 통에서 작은 금속 조각 분리

---

## Architecture: System 0/1/2

Helix 02는 3단계 계층적 아키텍처를 사용합니다.

<video src="/assets/models/figure-helix/helix_02.mp4" controls width="100%" style="border-radius: 8px; margin: 1rem 0;"></video>
<p align="center"><em>Helix 02 System 0/1/2 아키텍처 설명</em></p>

### System 0 (S0) - 물리적 실행 레이어

| 항목 | 내용 |
|------|------|
| 주파수 | 1 kHz |
| 파라미터 | 1천만 개 |
| 학습 데이터 | 1,000+ 시간의 인간 모션 데이터 |
| 시뮬레이션 | 200,000+ 병렬 환경 (도메인 랜덤화) |
| 대체 코드 | 109,504줄의 수작업 C++ 코드 |

실시간 밸런스와 접촉 관리를 담당합니다.

### System 1 (S1) - 비주모터 제어

| 항목 | 내용 |
|------|------|
| 주파수 | 200 Hz |
| 아키텍처 | Transformer (System 2 latent 조건부) |
| 구조 | "Pixels-to-whole-body" (모든 센서 → 모든 액추에이터) |

**센서 입력:**
- Head 카메라
- Palm 카메라
- 손끝 촉각 센서
- 고유수용감각 (Proprioception)

**액추에이터 출력:**
- 다리, 몸통, 머리, 팔, 손목, 개별 손가락 전체

### System 2 (S2) - 의미적 추론

- 시각 장면과 언어 명령 처리
- 고수준 행동 시퀀싱 ("식기세척기로 걸어가서 열어")
- 저수준 조정 없이 latent 목표 생성

---

## 새로운 하드웨어

### Palm 카메라

- 손바닥에 장착된 카메라
- 머리 시점에서 가려진 물체에 대한 시각적 피드백 제공

### 촉각 센서

- **민감도**: 3g의 힘까지 감지 (클립 하나를 느낄 수 있을 정도)
- 5개 손가락 전체에 힘 조절 그립 가능

---

## Helix (2025.02) - 초기 버전

![Helix Architecture](/assets/models/figure-helix/helix_architecture.png)
<p align="center"><em>Helix 아키텍처: System 1 (200Hz 저수준 제어) + System 2 (7-9Hz 고수준 계획)</em></p>

### 핵심 특징

- 최초의 휴머노이드 전신 고속 제어 VLA
- 상체(손목, 몸통, 머리, 개별 손가락)를 200Hz로 제어
- 듀얼 로봇 동시 제어

### Table-to-Dishwasher 태스크

| 항목 | 수치 |
|------|------|
| 이동 거리 | 130+ 피트 |
| 고유 상호작용 | 33회 |
| 물체 수 | 21개 (섬세한 식기 포함) |

---

## Hardware: Figure 02

| 항목 | 스펙 |
|------|------|
| 자유도 | 35 DoF |
| 손 | 인간형 손목, 손, 손가락 |
| 컴퓨팅 | NVIDIA RTX GPU (이전 대비 3배) |
| 카메라 | Head 6× RGB + Palm 카메라 (Helix 02) |
| 촉각 센서 | 손끝 (Helix 02) |
| 손 페이로드 | 최대 25kg |

---

## Hardware: Figure 03 (2025.10)

Figure 03은 가정용으로 설계된 3세대 휴머노이드 로봇입니다.

### Figure 02 vs Figure 03

| 항목 | Figure 02 | Figure 03 |
|------|-----------|-----------|
| 타겟 환경 | 산업용 (BMW 공장) | 가정용 |
| 무게 | 기준 | 9% 경량화 |
| 외장 | 하드 머신드 파츠 | 소프트 텍스타일 + 멀티밀도 폼 |
| 배터리 | - | 5시간 런타임, 2kW 무선 충전 |
| 데이터 전송 | - | 10 Gbps mmWave |

### 비전 시스템

| 항목 | 스펙 |
|------|------|
| 총 카메라 | 8개 (Head 6개 + Palm 2개) |
| 프레임레이트 | 2배 향상 |
| 레이턴시 | 1/4로 감소 |
| 시야각 | 60% 확대 |

### 촉각 센서

- 손끝 센서: 3g의 힘까지 감지 (클립 무게 수준)
- 자체 개발 1세대 촉각 센서

### 배터리 및 충전

| 항목 | 스펙 |
|------|------|
| 모델 | F.03 배터리 |
| 런타임 | ~5시간 |
| 충전 | 2kW 무선 유도 충전 (발바닥 코일) |
| 인증 | UN38.3, UL 표준 목표 |
| 데이터 오프로드 | 10 Gbps mmWave (플릿 학습용) |

### 안전 설계

- 소프트 텍스타일로 덮여 있음 (세탁 가능, 도구 없이 탈착)
- 멀티밀도 폼으로 끼임점 제거
- 옵션: 절단 방지 의류
- 측면 스크린 커스터마이징 가능 (플릿 브랜딩)

### 제조: BotQ

| 항목 | 내용 |
|------|------|
| 현재 생산 능력 | 연간 12,000대 |
| 4년 목표 | 총 100,000대 |
| 제조 방식 | CNC → 다이캐스팅, 사출성형, 스탬핑으로 전환 |
| 예상 가격 | ~$20,000 |

---

## Figure AI 히스토리

| 시기 | 이벤트 |
|------|--------|
| 2022 | Figure 01 - 최초 프로토타입, 이족보행, 물류/창고 타겟 |
| 2024.08 | Figure 02 - 산업용 배포, BMW 공장 테스트 |
| 2025.02 | Helix - 최초의 휴머노이드 전신 VLA |
| 2025.10 | Figure 03 - 가정용 휴머노이드, 소프트 디자인 |
| 2026.01 | Helix 02 - 전신 자율, System 0/1/2 아키텍처 |

---

## Funding & Partnerships

| 시기 | 내용 |
|------|------|
| 2024.01 | BMW 파트너십 (자동차 제조 배포) |
| 2024.02 | $675M 펀딩 (기업가치 $2.6B) |
| 투자자 | Jeff Bezos, Microsoft, NVIDIA, Intel, Amazon, OpenAI |

---

## References

- [Figure AI - Helix 02](https://www.figure.ai/news/helix-02)
- [Figure AI - Figure 03](https://www.figure.ai/news/introducing-figure-03)
- [Figure AI - Helix](https://www.figure.ai/news/helix)
- [Helix Logistics](https://www.figure.ai/news/helix-logistics)
- [Figure AI Wikipedia](https://en.wikipedia.org/wiki/Figure_AI)

---

## See Also

- [모델 목록](/knowledge/models/)
- [GR00T](groot)
- [pi0](pi0)
