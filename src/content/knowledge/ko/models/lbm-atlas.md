---
title: LBM (Large Behavior Model)
description: Boston Dynamics와 Toyota Research Institute의 Atlas용 전신 제어 모델
tags: [lbm, boston-dynamics, toyota-research-institute, atlas, diffusion-transformer, humanoid]
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

- LBM은 보행과 조작을 단일 모델로 통합 제어하는 최초의 상용 휴머노이드 시스템입니다.
- "시연할 수 있으면 학습할 수 있다"는 접근이 인상적입니다. 로프 묶기, 천 펼치기 같은 변형 가능한 물체 조작도 동일한 학습 파이프라인으로 처리합니다.
- Boston Dynamics의 하드웨어 + TRI의 AI 역량이 결합된 강력한 협업 사례입니다.

</div>

## 핵심 의의

- **전신 단일 모델 제어**: 보행, 균형, 조작을 분리하지 않고 하나의 정책으로 통합 제어
- **450M Diffusion Transformer**: Flow Matching 기반, 30Hz 이미지 입력, 48 타임스텝 액션 청크
- **언어 조건부 멀티태스크**: 단일 정책으로 로프 묶기, 타이어 조작, 천 펼치기 등 다양한 태스크 수행
- **VR 텔레오퍼레이션**: 스테레오 HMD + 양손 매핑 + 발 트래커로 직관적 데이터 수집
- **Cross-Embodiment**: Atlas, Atlas MTS, TRI Ramen 플랫폼에서 공유 학습

---

## Overview

| 항목 | 내용 |
|------|------|
| 발표 | 2025년 8월 20일 |
| 회사 | Boston Dynamics + Toyota Research Institute (TRI) |
| 블로그 | [bostondynamics.com/blog](https://bostondynamics.com/blog/large-behavior-models-atlas-find-new-footing/) |
| 로봇 | Atlas (50 DoF), Atlas MTS (29 DoF) |
| 리더 | Scott Kuindersma, Russ Tedrake |

LBM(Large Behavior Model)은 Boston Dynamics와 Toyota Research Institute가 공동 개발한 휴머노이드 전신 제어 모델입니다. 2024년 10월 파트너십 발표 이후, 2025년 8월 Atlas에서의 성과를 공개했습니다.

---

## Architecture

### 모델 스펙

| 항목 | 스펙 |
|------|------|
| 파라미터 | 450M |
| 아키텍처 | Diffusion Transformer |
| 목적 함수 | Flow Matching |
| 입력 주파수 | 30 Hz (이미지) |
| 액션 청크 | 48 타임스텝 (1.6초) |
| 실행 | 사이클당 ~24 액션 |

### 입력 모달리티

- **이미지**: HDR 스테레오 헤드 마운트 카메라 (30Hz)
- **고유수용감각**: 관절 상태, 힘/토크 센서
- **언어 프롬프트**: 태스크 목표 지정

### 전신 통합 제어

기존 휴머노이드들이 보행/균형 제어와 조작 제어를 분리했다면, LBM은 **손과 발을 거의 동일하게 취급**하여 단일 모델로 전신을 제어합니다.

---

## Training Pipeline

### 4단계 학습 프로세스

| 단계 | 내용 |
|------|------|
| 1. 데이터 수집 | VR 텔레오퍼레이션 + MPC 컨트롤러 |
| 2. 처리 | 데이터 어노테이션, QA, ML 파이프라인용 큐레이션 |
| 3. 학습 | 멀티태스크, 언어 조건부 신경망 정책 |
| 4. 평가 | 체계적 테스트 및 반복 개선 |

### VR 텔레오퍼레이션 시스템

| 기능 | 설명 |
|------|------|
| 스테레오 HMD | 공간 인식을 위한 헤드 마운트 카메라 피드 |
| 양손 매핑 | 1:1 직관적 바이매뉴얼 제어 |
| 발 트래커 | 동적 재배치 및 스테핑 가능 |
| 햅틱 피드백 | 실시간 촉각 피드백 + AR 오버레이 |

> "유동적이고 역동적이며 섬세한" 제어가 정지 및 이동 조작 태스크 모두에서 가능합니다.

---

## Capabilities

### 전신 조정

- 보행, 스테핑, 스탠스 구성
- 웅크리기, 균형 유지
- 22lb(10kg) 물체 들기

### 섬세한 조작

- 그립, 리그립, 물체 관절 조작
- **변형 가능한 물체**: 로프 묶기, 천 펼치기, 타이어 조작
- 전통적 로봇 프로그래밍으로는 극도로 어려운 태스크

### 반응적 복구

- 예상치 못한 방해에 지능적으로 대응
- 떨어진 부품, 닫힌 상자 등에 자동 적응
- **알고리즘 변경 없이** 학습 예시로부터 자동 발현

### 속도 적응

- 추론 시 1.5x-2x 속도 조절 가능
- 재학습 없이 액션 타이밍 예측 조정

---

## Hardware: Atlas

### Atlas (전신)

| 항목 | 스펙 |
|------|------|
| 자유도 | 50 DoF |
| 그리퍼 | 듀얼 7-DoF |
| 카메라 | HDR 스테레오 헤드 마운트 |

### Atlas MTS (상체)

| 항목 | 스펙 |
|------|------|
| 자유도 | 29 DoF |
| 용도 | 상체 조작 테스트 |

두 플랫폼 모두 **동일한 하드웨어/소프트웨어**를 공유하여 Cross-Embodiment 학습이 가능합니다.

---

## Cross-Embodiment 학습

LBM은 여러 로봇 플랫폼에서 공유 학습합니다:

| 플랫폼 | 설명 |
|--------|------|
| Atlas | Boston Dynamics 전신 휴머노이드 |
| Atlas MTS | 29-DoF 상체 변형 |
| TRI Ramen | Toyota Research Institute 플랫폼 |

멀티태스크 배칭으로 공유 정책 개선이 가능합니다.

---

## 핵심 철학

> **"시연할 수 있으면 학습할 수 있다"**

- 딱딱한 블록 쌓기든 티셔츠 접기든 **동일한 학습 프로세스**
- 새로운 조작 행동 개발에 더 이상 **"고급 학위와 수년간의 경험"이 필요하지 않음**
- 데이터 기반 접근으로 텔레오퍼레이션 가능한 **거의 모든 다운스트림 태스크**에 적용 가능

---

## Boston Dynamics & TRI 파트너십

| 시기 | 이벤트 |
|------|--------|
| 2024.10 | BD-TRI 파트너십 발표 |
| 2025.08 | LBM + Atlas 데모 공개 |

### 리더십

- **Scott Kuindersma**: Boston Dynamics AI Institute
- **Russ Tedrake**: Toyota Research Institute

---

## 다른 VLA와의 비교

| 모델 | 파라미터 | 아키텍처 | 전신 통합 | Cross-Embodiment |
|------|---------|---------|----------|------------------|
| LBM | 450M | Diffusion Transformer | O | O |
| [π0](pi0) | 3.3B | Flow Matching + VLM | X (상체) | O |
| [Figure Helix 02](figure-helix) | - | System 0/1/2 | O | X |
| [GR00T N1](groot-n1) | 2.2B | Dual-System | O | O |

---

## References

- [Boston Dynamics - Large Behavior Models](https://bostondynamics.com/blog/large-behavior-models-atlas-find-new-footing/)
- [Toyota Research Institute - LBM Announcement](https://www.tri.global/news/ai-powered-robot-boston-dynamics-and-toyota-research-institute-takes-key-step-towards-general)
- [IEEE Spectrum - Boston Dynamics Atlas LBM](https://spectrum.ieee.org/boston-dynamics-atlas-scott-kuindersma)

---

## See Also

- [모델 목록](./)
- [Figure Helix](figure-helix) - 또 다른 전신 VLA
- [GR00T N1](groot-n1) - NVIDIA 휴머노이드 VLA
