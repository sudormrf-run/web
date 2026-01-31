---
title: ANYbotics ANYmal
description: ETH Zurich spinoff ANYbotics' industrial autonomous inspection quadruped robot
tags: [anybotics, anymal, quadruped, industrial, inspection, eth-zurich, legged-robot, autonomous]
category: hardware

# Authorship
createdBy:
  name: Jong Hyun Park
  email: jhpark@sudormrf.run
lastEditedBy:
  name: Jong Hyun Park
  email: jhpark@sudormrf.run
lastEditedAt: 2026-01-26
---

<!-- Image pending: ![ANYmal - ANYbotics Industrial Inspection Robot](/assets/hardware/quadrupeds/anymal.png) -->
*Image: ANYbotics ANYmal quadruped robot - See [ANYbotics official page](https://www.anybotics.com/robotics/anymal/)*

## Overview

ANYmal is an industrial autonomous inspection quadruped robot developed at ETH Zurich's Robotic Systems Lab (RSL) and commercialized through spinoff company ANYbotics founded in 2016. With IP67-rated robust design and autonomous navigation capabilities, it specializes in unmanned inspection tasks in harsh industrial environments such as oil/gas, mining, and power plants.

| Item | Content |
|------|---------|
| Manufacturer | ANYbotics (Switzerland, ETH Zurich spinoff) [[Source]](https://rsl.ethz.ch/partnership/spinoff/anybotics.html) |
| Founded | 2016 |
| Use | Industrial facility autonomous inspection |
| Water/Dust Resistance | IP67 [[Source]](https://www.anybotics.com/robotics/anymal/) |
| Current Deployment | 200+ units [[Source]](https://www.climateinvestment.com/news/climate-investment-ci-joins-investment-in-anybotics-to-transform-oil-gas-inspection-through-autonomous-robotics) |

---

## Company Background: ANYbotics

### From ETH Zurich to ANYbotics

ANYbotics was founded in 2016 as a spinoff company based on research achievements from ETH Zurich's Robotic Systems Lab. ANYmal's origins trace back to 2009, when ETH Zurich researchers began developing a series of quadruped robots, with the first ANYmal version completed in 2016 marking the start of commercialization.

**Founding Members:**
- Marco Hutter (Professor, RSL Director)
- Roland Siegwart (Professor)
- Peter Fankhauser, Christian Gehring, Samuel Bachmann
- Remo Diethelm, Andreas Lauber, Hanspeter Fassler

**Research Support:**
- NCCR Robotics (Swiss National Centre of Competence in Research)
- ARGOS Challenge
- EU ECHORD++
- ETH Pioneer Fellowship
- Swiss National Science Foundation (SNF)
- European Research Council (ERC)

**Company Growth (per press releases):**
- November 2024: San Francisco office established [[Source]](https://www.startuphub.ai/ai-news/funding-round/2025/anybotics-secures-over-e127-million-for-robotics-expansion/)
- December 2024: EUR 57 million funding round
- May 2025: Switzerland Global Enterprise export award [[Source]](https://www.startuphub.ai/ai-news/funding-round/2025/anybotics-secures-over-e127-million-for-robotics-expansion/)
- September 2025: Climate Investment strategic investment (CHF 20 million)
- 2025: Over $150 million (approx. EUR 127 million) total cumulative investment [[Source]](https://www.climateinvestment.com/news/climate-investment-ci-joins-investment-in-anybotics-to-transform-oil-gas-inspection-through-autonomous-robotics)
- Early 2025: Approximately 200 employees, offices in Zurich and San Francisco

---

## ANYmal Generational Evolution

### ANYmal C (2019~)

ANYmal C is the first commercial version optimized for industrial inspection, providing high availability and stability. [[IEEE Spectrum article]](https://spectrum.ieee.org/anybotics-introduces-sleek-new-anymal-c-quadruped)

**Physical Specifications** (per third-party catalog [[DirectIndustry]](https://www.directindustry.com/prod/anybotics/product-233413-2330048.html)):

| Item | Value | Notes |
|------|-------|-------|
| Length | 930 mm | |
| Width | 530 mm | Basic walking stance |
| Height (walking) | 890 mm | |
| Height (low stance) | 470 mm | |
| Weight | 50 kg | 55 kg with inspection payload |

**Computing:**
- 2x Intel Core i7 8th Gen (6-core)
- 2x 8 GB RAM
- Handles real-time gait control, mapping, autonomous navigation

### ANYmal D (Current Generation)

ANYmal D is the current flagship model providing improved autonomy and mobility. [[RobotsGuide details]](https://robotsguide.com/robots/anymal)

**Physical Specifications** (per third-party sources [[RobotsGuide]](https://robotsguide.com/robots/anymal)):

| Item | Value | Notes |
|------|-------|-------|
| Length | 930 mm | Same as ANYmal C |
| Width | 530 mm | Basic walking stance |
| Height (walking) | 890 mm | |
| Weight | ~55 kg | Increases with inspection payload |
| Max Speed | 4.68 km/h (1.3 m/s) | Omnidirectional movement |
| Payload | Up to 10 kg | For additional sensor mounting |

**Actuators** [[Source]](https://robotsguide.com/robots/anymal):
- 12 electric series elastic actuators (ANYdrive)
- Max torque: 85 Nm (per joint)
- 360-degree joint rotation possible
- Precision torque control (torque resolution 8 mNm, position accuracy 0.025 degrees)
- IP67 water/dust resistant
- Robust impact protection design

**Mobility Capabilities** (performance varies by conditions):

| Capability | Value | Notes |
|------------|-------|-------|
| Max Slope | ~30 degrees | Varies by ground conditions |
| Stair Angle | Up to 45 degrees | Standard stairs basis |
| Step Height | Up to 250 mm | Industrial stair basis |
| Obstacle Clearance | Up to 20 cm | |
| Gap Crossing | 25~30 cm | |
| Min Passage Width | 60 cm | |

**Battery:**
- Lithium-ion battery pack (932.4 Wh, UN 38.3 certified)
- Operating time: 90~120 minutes (varies by activity)
- Autonomous docking station charging and swappable battery pack support

**Computing:**
- 2x Intel Core i7 (6-core) CPUs
- 2x 8 GB RAM
- 2x 240 GB SSD
- 2.4/5 GHz 802.11ac Wi-Fi (optional: 4G LTE)
- EtherCAT communication
- Ubuntu Linux OS
- Custom framework based on ROS
- C++, Python API support
- Gazebo 3D simulation environment provided

### ANYmal X (For Explosive Environments)

ANYmal X is the world's first walking robot to achieve IECEx and ATEX Zone 1 certification, designed for operation in explosive atmospheres. It was unveiled at OTC Asia in 2022 together with PETRONAS, and full customer deliveries begin in 2026. [[Source]](https://www.anybotics.com/robotics/anymal-x/)

**Features:**
- IECEx and ATEX Zone 1 certified (world's first Ex-proof walking robot)
- Maintains identical performance, functionality, speed, and mobility as ANYmal D
- IP67 water/dust resistance rating
- Equipped with gas detection sensors for methane, carbon monoxide, hydrogen sulfide, etc.
- Thermal imaging and vibration analysis capabilities

**Customers and Pilot Programs:**
- PETRONAS (commercial agreement signed in 2022)
- Equinor, Petrobras, Woodside, Shell, and others in onboarding program
- Over 300 units planned for deployment in coming years [[Source]](https://jpt.spe.org/company-releases-four-legged-robot-for-explosive-environments)

---

## Sensor Systems

Sensor specifications are compiled based on ANYbotics product pages and third-party sources [[RobotsGuide]](https://robotsguide.com/robots/anymal) [[ANYbotics]](https://www.anybotics.com/robotics/anymal/).

### Navigation Sensors

| Sensor | Specification | Notes |
|--------|---------------|-------|
| LiDAR | 360-degree (Velodyne Puck) | Up to 100m range |
| Depth Cameras | 6 units (Intel RealSense) | For close-range environment perception |
| Wide-angle Cameras | 2 units | Front/rear for teleoperation |
| IMU | Built-in | Body and actuators |

### Inspection Payload

**Optical System:**
- 20x optical zoom camera (4K video capture)
- Active LED lighting
- +/- 90 degrees vertical, +/- 165 degrees horizontal pan-tilt

**Thermal Imaging:**
- Measurement range: -40 to 550 deg C
- Non-contact precision temperature measurement

**Acoustic:**
- Ultrasonic microphone
- Audible and ultrasonic bands (0~384 kHz)
- For gas leak detection

**Gas Detection:**
- Gas concentration sensors
- Acoustic imager-based leak detection

**Electrical Equipment Diagnostics:**
- Partial Discharge event detection
- Electrical equipment anomaly sign monitoring

---

## Autonomous Inspection Capabilities

### Autonomous Navigation

ANYmal autonomously plans paths and selects footholds based on sensor data.

**Features:**
- Real-time environment mapping
- Dynamic path planning
- Obstacle avoidance
- Autonomous stair and ramp navigation
- Automatic docking on low battery

### Inspection Automation

**Visual Inspection:**
- Gauge, display reading
- Equipment status monitoring
- Corrosion/damage detection

**Thermal Inspection:**
- Early detection of overheating equipment
- Heat distribution pattern analysis

**Acoustic Inspection:**
- Abnormal vibration detection
- Gas leak acoustic detection
- Bearing wear detection

**Gas Inspection:**
- CO2 concentration monitoring
- Combustible gas detection
- Leak location tracking

---

## Industrial Applications

### Oil and Gas

**Key Customers** (per Climate Investment press release [[Source]](https://www.climateinvestment.com/news/climate-investment-ci-joins-investment-in-anybotics-to-transform-oil-gas-inspection-through-autonomous-robotics)):
- BP
- Equinor
- Shell
- TotalEnergies
- Petrobras
- Aramco
- ENI

**Equinor Northern Lights CCS Facility** [[Source]](https://www.anybotics.com/news/equinor-deploys-anymal-at-northern-lights-ccs-facility/):
ANYmal D deployed at carbon capture and storage (CCS) facility in Oygarden, Norway:
- Real-time CO2 concentration monitoring
- Hazardous level alarm generation
- ISPS port perimeter patrol
- Remote unmanned facility inspection
- Reduced unnecessary site visits

### Mining

- Underground mine inspection
- Ventilation system monitoring
- Equipment condition checks

### Power Plants

- Turbine inspection
- Piping inspection
- Heat exchanger monitoring

### Chemical Plants

- Hazardous material handling area inspection
- Leak detection
- Equipment condition monitoring

### Offshore Platforms

- Offshore facility inspection
- Operation in harsh marine environments
- Remote unmanned operation

---

## Research Contributions

### Key Papers

The ANYmal platform has produced important research results in the field of legged robots.

**Learning quadrupedal locomotion over challenging terrain (Science Robotics, 2020)**
- Neural network gait controller based on proprioceptive signals
- Robustness verified on unlearned terrains like mud, snow, gravel
- Real-world testing on two generations of ANYmal

**Learning agile and dynamic motor skills for legged robots (Science Robotics, 2019)**
- Transfer from simulation learning to real robot
- Energy-efficient high-speed running
- Fall recovery from complex poses

**Learning robust perceptive locomotion for quadrupedal robots in the wild (Science Robotics, 2022)**
- Perception-based walking in outdoor environments
- Real-time terrain adaptation

**ANYmal parkour: Learning agile navigation for quadrupedal robots (Science Robotics, 2024)**
- Parkour-level agile locomotion
- Complex obstacle course navigation

### IEEE Conference Presentations

- IROS 2016: "ANYmal - a highly mobile and dynamic quadrupedal robot"
- ICRA 2018: "Robust rough-terrain locomotion with a quadrupedal robot"
- IEEE RA-L 2020: "Perceptive locomotion in rough terrain-online foothold optimization"
- IROS 2022: "Advanced skills by learning locomotion and local navigation end-to-end"

### ANYmal Research Community

ANYmal Research is an international community for advancing legged robot research, providing research platforms and manipulation payloads.

**2025 ICRA Presentation:**
- ANYmal Research Manipulation Payload launch
- Developed in collaboration with Duatic (ETH Zurich spinoff)
- NVIDIA Jetson GPU equipped
- Onboard AI model and real-time perception algorithm execution

---

## Technical Specifications Summary

> **Note**: Values below are based on publicly available materials; actual performance may vary by configuration, payload, and environmental conditions. See [ANYbotics official spec sheet](https://www.anybotics.com/anymal-specifications-sheet/) for accurate specifications.

| Item | ANYmal C | ANYmal D |
|------|----------|----------|
| Weight | ~50 kg | ~55 kg |
| Payload | Up to 10 kg | Up to 10 kg |
| Battery | ~2 hours | 90-120 min |
| Water/Dust | IP67 | IP67 |
| CPU | 2x i7 6-core | 2x i7 6-core |
| RAM/Storage | 2x 8GB / 2x 240GB SSD | 2x 8GB / 2x 240GB SSD |
| Actuators | 12 SEA | 12 SEA (85 Nm torque) |
| Max Speed | 3.6 km/h (1 m/s) | 4.68 km/h (1.3 m/s) |
| Max Slope | ~20 degrees | ~30 degrees |
| Stairs | Up to 45 degrees | Up to 45 degrees (250mm step) |
| LiDAR Range | 100m | 100m |

---

## Key Significance

1. **Pioneer in Industrial Inspection Robots**: ANYmal is a representative case of successful transition from academic research to commercial product, pioneering the autonomous inspection robot market in harsh industrial environments.

2. **Demonstration of Learning-Based Gait Control**: Successfully transferred policies learned in simulation to real robots, achieving robust walking on complex terrain.

3. **IP67 Industrial-Grade Design**: Through water/dust resistant design and ATEX certification pursuit (ANYmal X), targets operation in the harshest industrial sites including explosive atmospheres.

4. **Economics of Autonomous Inspection**: Achieved both operational cost reduction and safety improvement through 24/7 unmanned operation, remote hazardous area inspection, and early anomaly detection.

5. **Research-Industry Connection Model**: Academic research from ETH Zurich commercialized through ANYbotics, contributing back to research community through ANYmal Research community - establishing a virtuous cycle ecosystem.

---

## References

### Official Materials
- [ANYbotics Official Website](https://www.anybotics.com/)
- [ANYmal Product Page](https://www.anybotics.com/robotics/anymal/)
- [ETH Zurich RSL ANYmal Page](https://rsl.ethz.ch/robots-media/anymal.html)
- [ANYbotics - ETH Zurich Spinoff](https://rsl.ethz.ch/partnership/spinoff/anybotics.html)
- [ANYmal Research Community](https://www.anymal-research.org/)

### Academic Papers
- [Learning quadrupedal locomotion over challenging terrain - Science Robotics](https://www.science.org/doi/10.1126/scirobotics.abc5986)
- [Learning agile and dynamic motor skills for legged robots - Science Robotics](https://www.science.org/doi/10.1126/scirobotics.aau5872)
- [Learning robust perceptive locomotion for quadrupedal robots in the wild - Science Robotics](https://www.science.org/doi/10.1126/scirobotics.abk2822)

### News and Cases
- [ANYmal deployed at Northern Lights CCS Facility](https://www.anybotics.com/news/equinor-deploys-anymal-at-northern-lights-ccs-facility/)
- [Climate Investment backs ANYbotics](https://www.climateinvestment.com/news/climate-investment-ci-joins-investment-in-anybotics-to-transform-oil-gas-inspection-through-autonomous-robotics)
- [ANYbotics ICRA 2025 ANYmal Research Launch](https://www.anybotics.com/news/anybotics-anymal-research-mobile-manipulation/)
- [Robot dog ANYmal gains momentum - SNF](https://www.snf.ch/en/Sm7rKHHdX4Rlrj9C/news/robot-dog-anymal-gains-momentum)
- [ANYbotics Secures Over EUR 127 Million](https://www.startuphub.ai/ai-news/funding-round/2025/anybotics-secures-over-e127-million-for-robotics-expansion/)

---

## See Also

- [Hardware List](/knowledge/hardware/)
- [[Boston Dynamics Spot]]
- [[Unitree Robots]]
- [[Legged Robot Control]]
