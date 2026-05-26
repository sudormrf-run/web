---
title: ORCA Hand
description: ETH Zurich/ORCA Dexterity 계열 오픈소스 덱스터러스 핸드 - 저비용 재현성과 촉각 라인업이 핵심인 후보
tags: [orca, hand, dexterous, open-source, eth-zurich, tactile, imitation-learning, flower]
category: hardware
subcategory: hands
thumbnail: https://humanoid.guide/wp-content/uploads/2026/03/OrcaHand-robot-hand-by-OrcaHand-Humanoid-Huide-435x435.webp

# Authorship
createdBy:
  name: 박종현
  email: jhpark@sudormrf.run
lastEditedBy:
  name: 박종현
  email: jhpark@sudormrf.run
lastEditedAt: 2026-05-17
---

# ORCA Hand

<iframe width="100%" style="aspect-ratio: 16/9;" src="https://www.youtube.com/embed/WNtlUViSrPg" title="ORCA Dexterity Official Hand Announcement" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

## 한 줄 판단

**ORCA Hand는 "비싼 상용 덱스터러스 핸드 대신 직접 재현 가능한 손으로 학습 실험을 시작한다"는 선택지다.** 꽃 작업에서는 완성품 구매보다 오픈소스 조립/개조/촉각 실험의 장점이 크다.

## 핵심 수치

| 항목 | 값 | 해석 |
|------|-----|------|
| ORCA v1 자유도 | 17 DoF, finger 16 + wrist 1 | 손목 포함 손 자세 연구 가능 |
| 재료비 | 2,000 CHF 미만 | Shadow/Allegro 대비 낮은 진입 비용 |
| 조립 시간 | 8시간 미만 목표 | 연구실 자체 제작 가능성 |
| 학습 실험 | 약 7시간 17분, 2,000회 grasp cycle 보고 | 작은 데이터셋으로 정책 실험 가능 |
| 2026 라인업 | Lite 9 DoF, Hand 17 DoF, Touch 17 DoF | 예산/촉각 필요에 따라 선택 |
| Touch 촉각 | hand당 351 taxels로 보도 | 꽃잎/줄기 접촉 연구 후보 |

## 꽃 작업에서의 의미

ORCA의 강점은 "완제품 스펙"보다 **개조 가능한 오픈 핸드 플랫폼**이라는 점이다. 꽃 작업에서는 손끝 형상, 패드 경도, 접촉 센서를 직접 바꿔야 할 가능성이 높으므로, 오픈소스 구조는 큰 장점이다.

가장 좋은 첫 목표는 꽃잎이 아니라 다음 작업이다.

- 줄기 하나 또는 묶음 잡기
- 포장지 접힘을 유지하기
- 리본 끝단을 놓치지 않고 당기기
- 촉각 모델로 "너무 세게 잡음"을 분류하기

## 장점

- 논문과 프로젝트 문서가 있어 설계 의도와 재현 경로가 비교적 투명하다.
- 오픈소스/저비용 방향이라 손끝 개조, 센서 추가, 파손 부품 교체를 실험하기 좋다.
- Touch 라인업은 꽃잎/줄기 접촉 분류에 필요한 tactile 데이터 수집 후보가 된다.

## 리스크

- 직접 조립형이면 품질 편차와 유지보수 부담이 생긴다.
- ORCA Dexterity의 2026 제품 라인업은 공개 보도와 사이트 정보를 함께 확인해야 하며, 실제 구매 가능성/납기/SDK는 별도 검증이 필요하다.
- 꽃 작업에서 필요한 방수, 이물질, 먼지, 꽃가루 내성은 기본 논문 수치만으로 판단할 수 없다.

## 구매/통합 체크리스트

- 제품형으로 살지, 연구실 조립형으로 갈지 먼저 결정한다.
- CAD/BOM/펌웨어/제어 코드의 공개 범위와 라이선스를 확인한다.
- 촉각형을 선택한다면 raw tactile stream 접근성과 캘리브레이션 툴을 확인한다.
- 반복 파지 후 손끝 패드 마모와 교체 비용을 측정한다.

## 참고

- [ETH Soft Robotics Lab - ORCA Hand](https://srl.ethz.ch/platforms/srh/orcahand.html)
- [ORCA Hand: An Anthropomorphic Robotic Hand for Learning Dexterous Manipulation](https://arxiv.org/abs/2504.04259)
- [ORCA Dexterity](https://www.orcahand.com/)
- [RoboHorizon - ORCA Dexterity 2026 line report](https://robohorizon.com/en-us/news/2026/03/orca-dexterity-drops-3-open-source-robotic-hands-starting-at-1500/)
- [Humanoid Guide - OrcaHand](https://humanoid.guide/product/orcahand/)
