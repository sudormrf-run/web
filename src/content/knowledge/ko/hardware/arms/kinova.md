---
title: Kinova Robotics
description: 캐나다 기반 경량 협동 로봇 제조사 - Gen3, Gen3 Lite, Link 6
tags: [kinova, gen3, gen3-lite, link6, cobot, research, assistive, arm, canadian]
category: hardware
---

# Kinova Robotics

> Home > Hardware > Arms > Kinova

---

<!-- 이미지 파일 추가 필요: assets/hardware/arms/kinova.png -->
<!-- Image pending: ![Kinova Gen3](../../assets/hardware/arms/kinova.png) -->

## Overview

Kinova는 2006년 캐나다 퀘벡 Boisbriand에서 설립된 서비스 로보틱스 기업으로, 원래 상체 장애인을 위한 보조 로봇 팔 개발에서 시작했다. 창업자 Charles Deguire의 삼촌 Jaco가 근육 디스트로피로 인해 휠체어 생활을 하면서 직접 만든 로봇 팔에서 영감을 받아 회사를 설립했으며, 첫 제품명 'Jaco'도 그의 이름에서 유래했다. ([Wikipedia](https://en.wikipedia.org/wiki/Kinova))

현재 Kinova는 보조 로봇(Assistive), 연구용(Research), 산업용(Industrial) 세 가지 분야로 사업을 확장하여 전 세계 50개국 이상, 500개 이상의 학술 및 산업 연구 센터에서 사용되고 있다. Google, Johns Hopkins University 등 세계적인 기관에서 채택하고 있다. ([Trade Commissioner Canada](https://www.tradecommissioner.gc.ca/canadexport/0004324.aspx))

---

## 핵심 의의

1. **보조 로봇의 선구자**: 휠체어 장착형 로봇 팔로 시작하여 상체 장애인의 일상 활동(식사, 화장, 약 복용 등)을 지원하는 기술을 개발
2. **무한 관절 회전(Infinite Joint Rotation)**: 케이블 래핑 제한 없이 모든 액추에이터가 무한 회전 가능하여 조작 자유도 극대화
3. **내장 토크 센서**: 각 관절에 토크 센서를 내장하여 힘 피드백, 임피던스 제어, 안전한 협업 작업 지원
4. **통합 비전 시스템**: Gen3는 내장 2D/3D 비전 센서를 탑재한 연구용 로봇 암으로, 비전 기반 로봇 제어에 최적화
5. **경량 휴대성**: 30분 이내 설치 가능한 초경량 설계로 연구팀, 프로젝트, 환경 간 이동이 용이

---

## 제품 라인업

### Gen3 (연구용 플래그십)

| 항목 | Gen3 7DoF | Gen3 6DoF |
|------|-----------|-----------|
| 제조사 | Kinova (캐나다) | Kinova (캐나다) |
| 자유도 | 7 DoF | 6 DoF |
| 페이로드 | 4 kg | 4 kg |
| 리치 | 902 mm | 891 mm |
| 무게 | 8.2 kg | 7.2 kg |
| 비전 | 내장 2D/3D 센서 | 내장 2D/3D 센서 |
| 토크 센서 | 모든 관절 내장 | 모든 관절 내장 |
| 그리퍼 | Robotiq 2F-85/140 호환 | Robotiq 2F-85/140 호환 |

*출처: [Gen3 공식 제품 페이지](https://www.kinovarobotics.com/product/gen3-robots)*

### Gen3 Lite (교육/입문용)

| 항목 | 스펙 |
|------|------|
| 제조사 | Kinova (캐나다) |
| 자유도 | 6 DoF |
| 페이로드 | 0.5 kg |
| 리치 | 760 mm |
| 무게 | 5.4 kg |
| 제어 주파수 | 1 kHz 저레벨 클로즈드 루프 |
| 대기 전력 | 20 W |
| 컨트롤러 | 암 내장형 |
| 그리퍼 | 암 내장형 |
| 설치 시간 | 10분 이내 |

*출처: [Gen3 Lite 공식 제품 페이지](https://www.kinovarobotics.com/product/gen3-lite-robots)*

### Link 6 (산업용 협동 로봇)

| 항목 | 스펙 |
|------|------|
| 제조사 | Kinova (캐나다) |
| 자유도 | 6 DoF |
| 페이로드 | 6 kg |
| 리치 | 1000 mm |
| 반복정밀도 | +/-0.1 mm |
| 최대 속도 | 2 m/s |
| 무게 | 23.45 kg |
| 프로세서 | Intel Core i7, 8 GB DDR4, SSD |
| 방진방수 | IP54 |
| 작동 온도 | 0~40 °C |
| 힘/토크 센서 | 내장 |
| 특징 | GPU 확장 옵션, 노코드 프로그래밍 |

*출처: [QVIRO Link 6 Specifications](https://qviro.com/product/kinova/link-6/specifications), [Kinova Link 6 보도자료](https://www.prnewswire.com/news-releases/kinova-launches-link-6-the-first-canadian-industrial-collaborative-robot-301507673.html)*

---

## 소프트웨어 및 API 지원

### Kortex API

Kinova Kortex는 Gen3 제품군(Gen3, Gen3 Lite)의 공통 소프트웨어 플랫폼으로, Google Protocol Buffer 메시지 객체를 사용하여 클라이언트-서버 간 데이터 교환을 수행한다.

**지원 언어 및 환경:**
- Python
- C++
- MATLAB / Simulink
- ROS (ros_kortex)
- ROS2 (ros2_kortex)

### ROS2 지원

ros2_kortex 드라이버는 ros2_control 하드웨어 인터페이스(SystemInterface)를 구현하며, 각 관절에 대해 position, velocity, effort 인터페이스를 제공한다. 엔드이펙터용 twist 인터페이스도 지원한다.

**지원 ROS2 버전:**
- ROS2 Jazzy (Ubuntu 24.04)

**지원 그리퍼:**
- Robotiq 2F-85
- Robotiq 2F-140
- Gen3 Lite 2F (내장)

---

## VLA 연구 활용

Kinova Gen3는 VLA(Vision-Language-Action) 모델 연구의 핵심 플랫폼으로 활용되고 있다:

1. **"Towards Generalist Robot Policies: What Matters in Building Vision-Language-Action Models" (2024)**: Gen3 7DoF + Robotiq 2F-85 조합으로 20가지 태스크(열기, 닫기, 버튼 누르기, Pick & Place 등) 실험 수행 ([arXiv:2412.14058](https://arxiv.org/abs/2412.14058))
2. **강화학습 연구**: 볼 밸런싱, 충돌 회피 등 동적 평형 유지 태스크에서 RL 기반 제어 연구 ([IRJMS 2024](https://www.irjms.com/wp-content/uploads/2024/01/Manuscript_IRJMS_0213_WS.pdf))
3. **모바일 매니퓰레이션**: Clearpath Robotics 모바일 플랫폼과 통합되어 이동 조작 연구에 활용
4. **비전 기반 조작**: 내장 2D/3D 센서를 활용한 비전 기반 로봇 제어 연구

**연구 적합성:**
- 경량 설계로 다양한 환경에서 빠른 설치/이동
- 개방형 API로 커스텀 제어 알고리즘 구현 용이
- 토크 센서 기반 힘 제어로 섬세한 조작 가능
- ROS/ROS2 지원으로 기존 연구 생태계와 통합 용이

---

## 가격대 (추정)

| 모델 | 추정 가격 (USD) |
|------|-----------------|
| Gen3 7DoF | 25,000–35,000 |
| Gen3 6DoF | 20,000–30,000 |
| Gen3 Lite | 10,000–15,000 |
| Link 6 | 문의 필요 |

*가격은 구성, 지역, 판매처에 따라 변동됨. 정확한 가격은 [공식 사이트](https://www.kinovarobotics.com/)를 통해 문의 필요.*

---

## References

### 공식 자료
- [Kinova Robotics 공식 사이트](https://www.kinovarobotics.com/)
- [Gen3 제품 페이지](https://www.kinovarobotics.com/product/gen3-robots)
- [Gen3 Lite 제품 페이지](https://www.kinovarobotics.com/product/gen3-lite-robots)
- [Kortex API 문서](https://docs.kinovarobotics.com/)

### GitHub 리포지토리
- [ros2_kortex](https://github.com/Kinovarobotics/ros2_kortex) - ROS2 드라이버
- [ros_kortex](https://github.com/Kinovarobotics/ros_kortex) - ROS 드라이버
- [Kortex API](https://github.com/Kinovarobotics/kortex) - API 예제 및 문서

### 외부 참고 자료
- [Kinova - Wikipedia](https://en.wikipedia.org/wiki/Kinova)
- [Trade Commissioner Canada - Kinova](https://www.tradecommissioner.gc.ca/canadexport/0004324.aspx)
- [QVIRO Link 6 Specifications](https://qviro.com/product/kinova/link-6/specifications)
- [Link 6 보도자료 (PRNewswire)](https://www.prnewswire.com/news-releases/kinova-launches-link-6-the-first-canadian-industrial-collaborative-robot-301507673.html)

### 연구 논문
- [Towards Generalist Robot Policies (arXiv:2412.14058)](https://arxiv.org/abs/2412.14058)
- [Reinforcement Learning-Based Collision Avoidance (IRJMS 2024)](https://www.irjms.com/wp-content/uploads/2024/01/Manuscript_IRJMS_0213_WS.pdf)

---

## See Also

- [하드웨어 목록](../index.md)
- [Franka Panda](franka-panda.md)
- [UR Series](ur-series.md)
