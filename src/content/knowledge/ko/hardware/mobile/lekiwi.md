---
title: LeKiwi
description: SO-101 암과 키위 드라이브 베이스를 결합한 LeRobot 공식 지원 저가 모바일 매니퓰레이터
tags: [lekiwi, lerobot, mobile-manipulator, so101, kiwi-drive, raspberry-pi, low-cost, teleoperation, vla]
category: hardware
created: 2026-05-17
updated: 2026-05-17

# Authorship
createdBy:
  name: 박종현
  email: jhpark@sudormrf.run
lastEditedBy:
  name: 박종현
  email: jhpark@sudormrf.run
lastEditedAt: 2026-05-17
---

# LeKiwi

## 한 줄 판단

**LeKiwi는 최종 꽃다발 제작 로봇이 아니라 LeRobot 데이터 수집/추론 루프를 싸게 검증하는 파일럿 장비다.** 이동성은 좋지만 단일 SO-101 암의 리치와 힘 때문에 본 작업 플랫폼으로 보기는 어렵다.

## Overview

**LeKiwi**는 SO-101 로봇 암을 3륜 홀로노믹 키위 드라이브 베이스 위에 올린 저가 모바일 매니퓰레이터다. Hugging Face LeRobot 공식 문서에서 지원하며, Raspberry Pi 5 기반 로봇과 노트북을 연결해 텔레오퍼레이션, 카메라 스트리밍, 데이터 수집을 수행한다.

| 항목 | 내용 |
|------|------|
| 개발 | SIGRobotics-UIUC 커뮤니티 프로젝트 |
| 유형 | 저가 모바일 매니퓰레이터 |
| 구성 | SO-101 암 + 3륜 키위 드라이브 + Raspberry Pi 5 |
| LeRobot 지원 | 공식 문서 지원, teleoperation/recording |
| 카메라 | 작업 공간 RGB 카메라 + 손목 RGB 카메라 구성 권장 |
| 비용 | SO-101 기반 저가 DIY 구성. 공개 BOM/부품표 기준 수백 달러대에서 시작 |
| 주요 용도 | 이동 조작, 테이블 주변 포지셔닝, 저가 데이터 수집 |

---

## 꽃 손질/꽃다발 작업 적합성

LeKiwi는 꽃다발 제작의 핵심 손기술 플랫폼이라기보다, **저가 실험 환경과 이동 조작 워크플로우 검증용**에 가깝다.

| 평가 항목 | 판단 |
|----------|------|
| 양팔 작업 | 부적합. 기본 구성은 단일 SO-101 암이다. |
| 리치/페이로드 | 제한적. 꽃 한두 송이 집기, 작은 도구 이동, 카메라 기반 데이터 파이프라인 검증에 적합하다. |
| 이동성 | 강점. 테이블, 선반, 재료 트레이 사이를 이동하는 테스트에 유리하다. |
| 덱스터리 | SO-101 기본 그리퍼 수준. 줄기 절단/정밀 포장에는 부족하다. |
| 가격 | 매우 낮음. 실패 비용이 작아 초기 소프트웨어 검증에 좋다. |
| 커스터마이징 | 높음. LeRobot과 Raspberry Pi 기반 DIY 구조라 수정이 쉽다. |
| 리스크 | 고강도 반복 조작, 긴 리치, 양팔 협응이 필요한 최종 꽃다발 작업에는 한계가 크다. |

**추천 포지션**: 본 실험 전 LeRobot 데이터 수집/추론 파이프라인을 저가로 검증하는 파일럿 플랫폼.  
**비추천 포지션**: 실제 꽃다발 조립의 최종 메인 하드웨어.

---

## LeRobot 워크플로우

LeKiwi 공식 문서는 다음 흐름을 다룬다.

1. Raspberry Pi 설정
2. SO-101 암과 베이스 연결
3. 로컬 노트북과 로봇 간 네트워크 구성
4. 텔레오퍼레이션
5. 카메라 스트리밍
6. 데이터셋 기록

이 구조는 사용자가 직접 만든 VLA 정책을 배포하기 전에, 카메라 입력/액션 출력/데이터 저장 형식이 LeRobot 파이프라인에서 맞는지 확인하는 데 유용하다.

---

## 도입 판단

| 목적 | 판단 |
|------|------|
| LeRobot 입문 | 매우 적합 |
| 모바일 매니퓰레이션 연구 | 적합 |
| 꽃 손질 메인 플랫폼 | 부족 |
| 저가 데이터 수집 | 적합 |
| 양팔 꽃다발 조립 | 부적합 |

LeKiwi를 산다면 “최종 로봇”이 아니라 **VLA 실험 인프라의 작은 스모크 테스트 장비**로 보는 것이 맞다. OpenArm/ALOHA/Reachy 2 같은 후보를 구매하기 전에 데이터 저장, 학습, 추론 루프를 빠르게 검증할 수 있다.

---

## References

- [Hugging Face LeRobot - LeKiwi](https://huggingface.co/docs/lerobot/main/en/lekiwi)
- [SIGRobotics-UIUC/LeKiwi GitHub](https://github.com/SIGRobotics-UIUC/LeKiwi)
- [LeRobot GitHub](https://github.com/huggingface/lerobot)

---

## See Also

- [하드웨어 목록](/knowledge/hardware/)
- [LeRobot Arms](../arms/lerobot-arms)
- [Mobile ALOHA](mobile-aloha)
- [OpenArm](../arms/openarm)
