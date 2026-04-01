---
title: "Claude Code 소스 유출, 하네스 설계가 드러남"
summary:
  - "Claude Code 소스 유출, 하네스 설계가 드러남"
  - "가중치 아닌 오케스트레이션 로직 노출"
  - "Bonsai 1-bit 모델, 초소형 효율 강조"
  - "OpenAI, $122B 커밋 자본·$852B 가치"
  - "TRL v1.0, RL 툴링 대폭 확장"
date: 2026-03-31
originalUrl: "https://github.com/smol-ai/ainews-web-2025/blob/main/src/content/issues/26-03-31-claude-code-leak.md"
hasHeadline: false
headline: "Claude Code 소스 유출, 하네스 설계가 드러남"
tags:
  - Anthropic
  - Claude Code
  - OpenAI
  - Codex
  - 보안
isFeatured: false
---

## 헤드라인: Claude Code 소스 유출, 하네스 설계가 드러남

참고 링크: [544 Twitters](https://twitter.com/i/lists/1585430245762441216) [AINews' website](https://news.smol.ai/) [AINews is now a section of Latent Space](https://www.latent.space/p/2026) [opt in/out](https://support.substack.com/hc/en-us/articles/8914938285204-How-do-I-subscribe-to-or-unsubscribe-from-a-section-on-Substack)

Anthropic의 폐쇄형 코딩 제품 Claude Code에서 소스맵(source map) 등 배포 아티팩트를 통해 소스 코드 일부가 노출된 것으로 보이면서, 커뮤니티가 빠르게 리버스 엔지니어링(reverse-engineering)·미러링(mirroring)·포팅(porting)에 나섰다. 논의의 초점은 “유출 사고” 자체보다도, 최상급 코딩 에이전트가 실제로 어떤 하네스(harness)·오케스트레이션(orchestration) 구조로 운영되는지에 맞춰졌다.

노출된 내용은 모델 가중치(model weights)보다는 자율 모드, 메모리 시스템, 플래닝/리뷰 흐름, 모델별 제어 로직 같은 ‘운영 레이어’라는 해석이 많았고, DMCA를 통한 재배포 차단 시도 및 보안 2차 피해(로컬 빌드 시도를 노린 의심스러운 패키지 등록 등)까지 함께 부각됐다. 결과적으로 “코딩 에이전트의 성능 차이는 모델만이 아니라 하네스/제품 시스템 엔지니어링에서 나온다”는 인식이 더 강화된 하루였다.

---

## AI Twitter Recap

### Top Story: Claude Code source leak — architecture discoveries, Anthropic’s response, and competitor reactions

- **What happened**: Anthropic의 폐쇄형 코딩 제품 Claude Code에서, 배포된 소스맵(source map)/패키지 내용물(package contents)로 인해 상당한 소스 아티팩트(source artifacts)가 노출된 것으로 보이며, 그 결과 빠른 공개 리버스 엔지니어링(reverse-engineering), 미러링(mirroring), 파생 포팅(derivative ports)이 촉발됐다. 논의는 빠르게 “창피한 유출(embarrassing leak)”에서 “최첨단 에이전트 하네스(agent harness) 설계가 무엇을 드러내나?”로 옮겨갔다. 여러 관찰자는 이번 유출이 모델 가중치(model weights)가 아니라 오케스트레이션(orchestration) 로직을 드러냈다는 점—자율 모드(autonomous modes), 메모리 시스템(memory systems), 플래닝/리뷰(planning/review) 플로, 모델별 제어 로직(model-specific control logic) 등을 포함—을 강조했다. 공개 포크(fork)들이 급증했고, 한 게시물은 법적 우려가 커지기 전 한 포크가 **32.6k stars and 44.3k forks**를 기록했다고 주장했다. 이후 Codex를 사용해 Python 변환을 시도했다는 내용도 나왔다 ([Yuchenj_UW](https://x.com/Yuchenj_UW/status/2038996920845430815)). 뒤이은 코멘터리는 노출 코드 규모를 **500k+ lines**로 추정했다 ([Yuchenj_UW](https://x.com/Yuchenj_UW/status/2039029676040220682)). 여러 게시물에 따르면 Anthropic은 **DMCA takedowns**를 통해 미러/재배포를 차단하려 했다 ([dbreunig](https://x.com/dbreunig/status/2039007097376108979), [BlancheMinerva](https://x.com/BlancheMinerva/status/2039114452088295821)). 데이터셋에서 확인 가능한 가장 구체적인 ‘공식’ 신호는, 유출 관련 **“OFFICIAL STATEMENT from Anthropic regarding the leak”**가 있었다는 널리 공유된 게시물이다 ([theo](https://x.com/theo/status/2039074833334689987)). 다만 여기엔 성명 원문이 포함돼 있지 않으므로, 이 코퍼스(corpus)에서 사실로 취급 가능한 것은 ‘존재한다는 언급’까지다. 별도로, 사태 와중에도 Claude Code 팀 멤버는 `/web-setup`을 통한 로컬/웹 GitHub 크리덴셜 설정 간소화 기능을 알렸는데 ([catwu](https://x.com/_catwu/status/2039027712288075812)), 이는 정상적인 제품 운영이 계속됐음을 시사한다. 이번 유출은 즉각적인 보안 위험도 만들었다. 공격자들이 유출 코드를 컴파일하려는 사람들을 노리고 **`color-diff-napi`**, **`modifiers-napi`** 같은 수상한 npm 패키지를 빠르게 등록했다는 것이다 ([Butanium_](https://x.com/Butanium_/status/2039079715823128964)).
- **Facts vs. opinions**:
  - **What is reasonably factual from the tweets:**
    - Claude Code 소스 아티팩트에 대한 공개 접근이 발생했고, 유출(leak)로 널리 논의됐다 ([scaling01](https://x.com/scaling01/status/2038982287648293016), [Yuchenj_UW](https://x.com/Yuchenj_UW/status/2038996920845430815), [theo](https://x.com/theo/status/2039069225109819838)).
    - 노출 자료에는 모델 가중치(model weights)가 포함되지 않았으며, 한 보안 라운드업은 “They did not leak the model weights”라고 명시했다 ([saranormous](https://x.com/saranormous/status/2039172685666918672)).
    - 사람들은 repo에서 기능명과 아키텍처 모티프를 추출했으며, **Kairos**, **dream**, **teammem**, **buddy**, **ultrathink**, **ultraplan**, **ultrareview**, 그리고 GitHub/Slack 통합 등이 언급됐다 ([scaling01](https://x.com/scaling01/status/2038982287648293016), [scaling01](https://x.com/scaling01/status/2039001738934468857)).
    - 여러 관찰자에 따르면 Anthropic(또는 그 대표자)이 DMCA를 통해 미러/포크 사본에 대한 삭제 요청을 한 것으로 보인다 ([dbreunig](https://x.com/dbreunig/status/2039007097376108979), [BlancheMinerva](https://x.com/BlancheMinerva/status/2039114452088295821)).
    - 유출 소스로 로컬 Claude Code를 빌드하려는 사람들을 노린 패키지명 선점(package-name squatting)이 있었다 ([Butanium_](https://x.com/Butanium_/status/2039079715823128964)).
    - 유출 이후, 다른 이들이 내부적으로 로컬 컴파일을 달성했다는 보고가 있었다 ([theo](https://x.com/theo/status/2039079267905261831)).
  - **Claims that are plausible but should be treated carefully:**
    - Anthropic이 소스맵(source maps)을 배포해 repo를 “유출”했다는 주장: 널리 암시되지만, 트윗에서 권위 있는 기술적 근본 원인(root-cause) 설명이 인용되지는 않는다.
    - **“mythos”** 같은 모델 문서가 노출됐다는 주장: 한 라운드업에서 등장하고 ([saranormous](https://x.com/saranormous/status/2039172685666918672)), “Anthropic's new model Capybara/Mythos just wants to be human” 같은 추측성 발언도 있으나 ([scaling01](https://x.com/scaling01/status/2039091546377576864)), 데이터셋은 아티팩트 진위를 독립적으로 검증하지 못한다.
    - repo 지표/라인수(예: **32.6k stars / 44.3k forks**, **500k+ lines**)는 제3자 측정이며, 특정 시점의 미러/포크 상태를 반영했을 수 있다.
  - **Opinions / interpretations:**
    - 유출은 창피하지만 기술적으로 “nothing groundbreaking”이라는 평가 ([rasbt](https://x.com/rasbt/status/2039020306912755763)).
    - 진짜 해자는 하네스(harness) 엔지니어링이고, 코드가 공개되면서 Claude Code와 경쟁사 격차가 더 빨리 좁혀질 것이라는 관점 ([Yuchenj_UW](https://x.com/Yuchenj_UW/status/2039029676040220682)).
    - Anthropic이 포크 억제를 과격하게 할 게 아니라, 어차피 오픈소스 커뮤니티가 커스텀 하네스를 만들 테니 “억제 실익이 작다”는 주장 ([BlancheMinerva](https://x.com/BlancheMinerva/status/2039128635559318013)).
    - 비밀주의/통제 기반의 안전 전략이 “fatally falsified”됐다는 해석 ([pmarca](https://x.com/pmarca/status/2039042126294733295)).
    - 유출 코드가 기계 번역으로 타 언어로 옮겨질 수 있다면 저작권 집행이 약화된다는 우려 ([Yuchenj_UW](https://x.com/Yuchenj_UW/status/2038996920845430815)).
- **Technical details revealed by the leak discourse**: 가장 중요한 기술적 요지는 관찰자들이 기반 Claude 모델이 아니라 **하네스(harness)**에 압도적으로 초점을 맞췄다는 점이다. 이는 같은 트윗 집합에서 반복된 더 큰 흐름과도 맞물린다. “the harness matters” ([Vtrivedy10](https://x.com/Vtrivedy10/status/2038993396463796638)), 그리고 “Beyond raw model capability, the real gap in coding tools is the harness” ([Yuchenj_UW](https://x.com/Yuchenj_UW/status/2039029676040220682)) 같은 표현이 대표적이다. Sydney Runkle의 동적 구성(dynamic config) 미들웨어 스레드는 Claude 자체가 아니라 단계별(step)로 모델/툴/프롬프트를 교체하고 툴 레지스트리를 필터링하는 하네스 설계 맥락을 제공하며, 독자들이 Claude Code 팀이 내부적으로 구축했을 법한 것들을 추론하는 데 강한 배경지식이 됐다 ([sydneyrunkle](https://x.com/sydneyrunkle/status/2039040565749096607)).
- **Named internal systems / motifs surfaced by readers**:
  - **Kairos**: “항시 켜진(always-on) 자율 에이전트 모드”로 설명됐다 ([scaling01](https://x.com/scaling01/status/2038982287648293016)).
  - **dream**: “야간 메모리 통합(nightly memory consolidation)”으로 설명됐다 ([scaling01](https://x.com/scaling01/status/2038982287648293016)).
  - **teammem**: “공유 프로젝트 메모리(shared project memory)” ([scaling01](https://x.com/scaling01/status/2038982287648293016)).
  - **buddy**: “모델과 함께하는 다마고치(tamagotchi) 같은 펫 시스템”으로 설명됐다 ([scaling01](https://x.com/scaling01/status/2038982287648293016)); 이후 “There’s an AI pet lurking in Claude Code!” ([dbreunig](https://x.com/dbreunig/status/2039017351061143780)), “new claude code buddy feature is kinda cute” ([eliebakouch](https://x.com/eliebakouch/status/2039176958416720104)) 같은 반응도 나왔다.
  - **automatic skill improvement** ([scaling01](https://x.com/scaling01/status/2038983513081356360)).
  - **ultrathink**, **ultraplan**, **ultrareview** 및 “GitHub/Slack 완전 통합(complete integration)” ([scaling01](https://x.com/scaling01/status/2039001738934468857)).
  - 종합하면, (홍보성/장난스러운 명칭이 섞였더라도) 전체 그림은 일관된다. Claude Code에는 다음을 포함한 계층형 에이전트 런타임(agent runtime)이 있는 것으로 보인다:
    - 영속/프로젝트 메모리(persistent/project memory)
    - 자율/백그라운드 동작(autonomous/background operation)
    - 플래닝/리뷰 단계(planning/review stages)
    - 자기개선/스킬 증류(self-improvement or skill distillation) 루프
    - 개발 워크플로 시스템(GitHub/Slack 등) 연동 훅
- **Harness shape and code composition**: 여러 기술 독자들이 비슷한 해석에 수렴했다.
  - 가치의 상당 부분이 “마법 같은 알고리즘”이 아니라 **힘들게 쌓은 오케스트레이션 로직과 진단(diagnostics)**이라는 관점 ([dbreunig](https://x.com/dbreunig/status/2039206774558036466)).
  - 모델 특성/컨텍스트에 따른 **조건 분기(conditionals)**가 많아, 모델의 ‘버릇(quirks)’을 완화하기 위한 코드가 많다는 분석 ([dbreunig](https://x.com/dbreunig/status/2039206774558036466)).
  - “평범한 CLI 배관(plumbing)/보일러플레이트(boilerplate)”도 상당하여, 독점적 우위는 셸 앱 그 자체보다 피드백 루프·프롬프트·미들웨어·진단·통합에 있다는 관점 ([dbreunig](https://x.com/dbreunig/status/2039206774558036466)).
  - 즉, 새로운 모델 코드라기보다 플래닝, 툴 호출(tool calls), 리뷰, 메모리, 재시도(retries), 텔레메트리(telemetry) 주변의 스캐폴딩(scaffolding) 비중이 크다는 해석.
  - 이 해석은 같은 데이터셋의 에이전트 엔지니어링 논의와도 맞물린다:
    - human-in-the-loop 인터럽트(interrupts)를 표준 스트림 상태로 다루자는 주장 ([LangChain_JS](https://x.com/LangChain_JS/status/2038985561348993107)).
    - eval이 에이전트 업데이트/하네스 최적화를 접지(ground)하는 신호라는 주장 ([Vtrivedy10](https://x.com/Vtrivedy10/status/2039029715533455860)).
    - Shopify/DSPy 아키텍처 요약: 에이전트 주도 검색(retrieval), 컨텍스트 격리, 모듈화 후 MIPRO 프롬프트 최적화, “smaller model + better architecture > bigger model + worse architecture” ([koylanai](https://x.com/koylanai/status/2039027239304433767)).
  - 결론적으로, Claude Code 유출은 “프로덕션 코딩 에이전트는 프롬프트·정책·미들웨어·메모리·평가·예외 처리로 이루어진 앙상블(ensemble)”이라는 업계의 의심을 주로 확인해 줬다는 함의가 강하다.
- **Packaging and leak mechanism clues**: 트윗들은 유출이 배포 아티팩트(소스 포함)에서 비롯됐을 가능성을 시사한다.
  - “closed source > ship sourcemaps > source leaks instantly” ([mattrickard](https://x.com/mattrickard/status/2039054181361967487)).
  - Theo가 저작권 스트라이크(copyright strikes) 없이 “코드 디렉터리를 라이브로 열 수 있는지”를 논의한 점은, 광범위한 로컬 인스펙션(local inspection)이 가능해졌음을 시사한다 ([theo](https://x.com/theo/status/2039069225109819838)).
  - “Local Claude Code builds have been achieved internally”라는 언급은, 트리가 컴파일/복원 가능한 수준으로 존재했을 가능성을 시사한다 ([theo](https://x.com/theo/status/2039079267905261831)).
  - 이 과정에서, 로컬 빌드 시도를 겨냥한 네이티브 애드온(native addon) 의존성에 대한 패키지명 선점 공격이 등장했다 ([Butanium_](https://x.com/Butanium_/status/2039079715823128964)). 이는 전형적인 2차 효과로, “무엇이 노출됐나”에서 “패닉 속 재컴파일이 어떤 툴체인(toolchain) 행동을 유발하고 공격면(attack surface)을 확장하나”로 위험이 커진다.
- **Anthropic’s apparent response**: 이 트윗 집합에서 Anthropic의 대응은 대부분 간접적으로 보인다.
  - **1) Official statement exists**: Theo는 유출 관련 **“OFFICIAL STATEMENT from Anthropic regarding the leak”**가 있었다고 게시했다 ([theo](https://x.com/theo/status/2039074833334689987)). 성명 원문이 없으므로, 그 이상은 추측이다.
  - **2) Legal containment via DMCA**: 여러 게시물은 Anthropic이 유출 소스 재배포 repo에 **DMCA takedowns**를 보내고 있다고 말한다.
    - “유출된 Claude Code 소스가 있는 repo를 Anthropic이 DMCA 요청으로 내리고 있다” ([dbreunig](https://x.com/dbreunig/status/2039007097376108979)).
    - “Claude code source code에 대한 DMCAs가 나가고 있다” ([BlancheMinerva](https://x.com/BlancheMinerva/status/2039114452088295821)).
    - 이는 Anthropic이 이 사건을 ‘오픈소스 전환’이 아니라 ‘무단 공개(unauthorized publication)’로 취급했음을 시사한다.
  - **3) Product operations continued**: Claude Code 팀 멤버가 논란 중에도 `/web-setup` 업데이트를 올렸다 ([catwu](https://x.com/_catwu/status/2039027712288075812)). 약한 신호지만 “유출 대응과 별개로 배송은 계속”에 부합한다.
  - **4) No evidence here of Anthropic embracing the leak**: 일부 외부인은 “이미 퍼졌으니 chill”하라고 주장했지만 ([Yuchenj_UW](https://x.com/Yuchenj_UW/status/2039191313749524518)), 이 데이터셋의 증거는 **억제와 테이크다운** 쪽에 가깝다.
- **Competitor and ecosystem responses**:
  - **OpenHands / open-source competitors**: OpenHands의 Graham Neubig이 가장 명확한 경쟁 반응을 보였다.
    - “OpenHands는 DMCA 테이크다운을 하지 않을 것이며, Claude Code의 대부분 기능을 가진 에이전트가 있다. Tamagotchi도 로드맵에 있다” ([gneubig](https://x.com/gneubig/status/2039166255089799222)).
    - Tamagotchi 기능 트래킹 이슈도 이어서 올렸다 ([gneubig](https://x.com/gneubig/status/2039168326912389208)).
    - 이는 경쟁 포지셔닝이자, “오픈 에이전트 스택으로도 Claude Code의 상당 기능을 재현 가능”하다는 실질 주장이다.
  - **OpenAI / Codex comparisons**: 같은 시기에 “Codex 코드베이스 유출”이라는 오보가 돌았고, OpenAI 직원이 정정했다.
    - 초기 바이럴 주장: “somebody at OpenAI leaked the entire codex codebase” ([reach_vb](https://x.com/reach_vb/status/2038971515572523502)).
    - 정정: “repo는 시작부터 오픈소스였고, 나는 openai에서 codex를 만든다” ([reach_vb](https://x.com/reach_vb/status/2039038251407732754)).
    - 이 맥락은 대비를 강화한다:
      - **Codex repo 가시성은 의도적이었다.**
      - **Claude Code 가시성은 의도적이지 않았다.**
    - Yuchen은 파급을 더 과감하게 그렸다. Claude Code 포크가 크게 확산한 뒤 “Codex로 TypeScript→Python 전체 변환” 같은 시나리오가 가능하다는 관점이다 ([Yuchenj_UW](https://x.com/Yuchenj_UW/status/2038996920845430815)).
  - **Nous / Hermes / persistent-agent competitors**: 유출에 대한 직접 반응은 아니지만, 비교 대상으로 같은 능력을 내세우는 게시물들이 포함됐다.
    - 영속 메모리(persistent memory), 자기개선, 다수 내장 툴, 멀티플랫폼 통합, MIT 라이선스 ([evanlong_me](https://x.com/evanlong_me/status/2039026061640601816)).
    - OpenClaw에서 2분 만에 임포트 ([AntoineRSX](https://x.com/AntoineRSX/status/2039017227270156395)).
    - cron 기반 취약점 스캐닝과 에이전트 유지보수 ([Teknium](https://x.com/Teknium/status/2039022907020689898), [Teknium](https://x.com/Teknium/status/2039096442313396514)).
    - 시작 가이드/커뮤니티 도구 ([Teknium](https://x.com/Teknium/status/2039102514508058675), [aijoey](https://x.com/aijoey/status/2039108098174906514)).
    - 이는 “Claude Code의 비밀 소스가 오픈 시스템에서도 재현 가능”하다는 결론과 맞물려 언급된다.
  - **Venture/open-source ideology response**: Marc Andreessen의 반응은 가장 철학적이었다. “비밀과 통제에 기반한 ‘AI safety’가 치명적으로 반증됐다”는 주장이다 ([pmarca](https://x.com/pmarca/status/2039042126294733295)). 명백히 의견이지만, 앱 레이어 비밀주의가 지속 가능한 통제 수단이 아니라는 진영의 결론을 요약한다.
- **Different opinions**:
  - **View 1: The leak is strategically important because it exposes the real moat** (지배적 엔지니어 관점)
    - “Beyond raw model capability, the real gap in coding tools is the harness” ([Yuchenj_UW](https://x.com/Yuchenj_UW/status/2039029676040220682)).
    - “Harness engineering is hard and deeply non-trivial” ([Yuchenj_UW](https://x.com/Yuchenj_UW/status/2039191313749524518)).
    - “So many conditionals based on model types and specific contexts” ([dbreunig](https://x.com/dbreunig/status/2039206774558036466)).
    - “the harness shapes [models] to be good and cost efficient for work we care about” ([Vtrivedy10](https://x.com/Vtrivedy10/status/2038993396463796638)).
  - **View 2: Interesting, but not groundbreaking**
    - “유출이 창피한 것 말고는, 흥미롭지만 획기적이진 않다” ([rasbt](https://x.com/rasbt/status/2039020306912755763)).
    - “6개월 전이면 더 흥미로웠을 텐데… 이제 하네스는 흔하다” ([mbusigin](https://x.com/mbusigin/status/2039105055299686834)).
  - **View 3: Anthropic should stop fighting and lean into reality**
    - 커뮤니티가 이미 커스텀 하네스를 만든다는 점에서 테이크다운 실익이 작다는 주장 ([BlancheMinerva](https://x.com/BlancheMinerva/status/2039128635559318013)).
    - “chill”하다는 표현도 있으나, DMCA 보고와는 혼재 ([Yuchenj_UW](https://x.com/Yuchenj_UW/status/2039191313749524518)).
  - **View 4: DMCA is justified because this is still proprietary code**
    - Anthropic의 행동과 Theo의 저작권 스트라이크 우려에서 암묵적으로 드러난다 ([theo](https://x.com/theo/status/2039069225109819838)).
  - **View 5: The leak demonstrates secrecy-based safety/control is broken**
    - Andreessen의 일반화된 주장 ([pmarca](https://x.com/pmarca/status/2039042126294733295)).
- **Context: why this matters**:
  - **1) 코딩 에이전트 성능이 실제로 어디서 나오나를 보여줌**: 모델은 생성/추론을 제공하지만, 프로덕션 품질은 동적 툴 선택, 메모리 아키텍처, 평가/리뷰 루프, 에러 분류와 재시도, 모델별 프롬프트 분기, GitHub/Slack 통합, 영속 자율 모드 등 시스템 문제라는 관점이다. 이는 다음과 같은 담론과 맞물린다:
    - 개선 루프의 기본 원시(primitive)로서 트레이스(traces) ([LangChain](https://x.com/LangChain/status/2039028327030079565)).
    - 온라인 eval과 트레이스 풍부화(trace enrichment) ([Vtrivedy10](https://x.com/Vtrivedy10/status/2039186184161616245)).
    - 프로덕션 에이전트 모니터링(Agent monitoring) ([LangChain](https://x.com/LangChain/status/2039014039892947062)).
  - **2) 경쟁 사이클을 압축**: Claude Code에 축적된 제품 지식이 공개되면, 경쟁사는 패턴 복제, 하네스 의사결정 벤치마크, 크로스언어 포팅, 약점 식별, 오픈 대체재 제작을 더 빠르게 수행할 수 있다. Yuchen은 “모든 모델 랩과 AI 코딩 스타트업이 연구해 격차를 빠르게 줄일 것”이라고 예측했다 ([Yuchenj_UW](https://x.com/Yuchenj_UW/status/2039029676040220682)).
  - **3) 새로운 보안 교훈**: 유출만큼이나, 유출 소스를 급히 빌드하는 생태계가 dependency confusion, typo-squat, 가짜 네이티브 모듈, 악성 설치 스크립트 등에 취약해진다는 점이 크다 ([Butanium_](https://x.com/Butanium_/status/2039079715823128964)). 이는 Saranormous의 공급망(supply-chain) 공황 요약과도 맞물린다 ([saranormous](https://x.com/saranormous/status/2039172685666918672), [saranormous](https://x.com/saranormous/status/2039108234460721341)).
  - **4) “wrapper” 폄하를 약화**: 유출이 “wrapper/harness 엔지니어링은 어렵다”는 인식을 강화했고, 오케스트레이션·제품 UX·eval 루프에 기반한 앱 레이어 해자의 설득력을 높였다 ([dbreunig](https://x.com/dbreunig/status/2039206774558036466), [Yuchenj_UW](https://x.com/Yuchenj_UW/status/2039191313749524518)).
- **Bottom line**: Claude Code 유출은 Anthropic의 모델 가중치를 노출하진 않았지만, 선도적 코딩 제품 뒤편의 **에이전트 하네스 스택(harness stack)** 상당 부분을 노출했다. 공개 분석은 영속 메모리, 자율/백그라운드 모드, 플래닝-리뷰 루프, 스킬 개선, 깊은 워크플로 통합을 포함한 성숙한 오케스트레이션 아키텍처로 수렴한다. 이 데이터셋에서 보이는 Anthropic의 대응은 공식 인정의 존재 + DMCA로의 억제였고, 경쟁사/오픈소스는 “이 기능들은 오픈 시스템에서도 재현 가능”하다고 주장하는 계기로 삼았다. 가장 강한 기술적 결론은, Claude Code에 ‘마법’이 있어서가 아니라 **고성능 코딩 에이전트는 모델별·운영상 지저분한 시스템 엔지니어링의 축적**에 크게 의존한다는 점이다. 따라서 이 사건은 스캔들이기보다 “현재 엔지니어링 레버리지가 어디에 있는가”에 대한 현장 기록에 가깝다.
- **Key tweets:** [@scaling01](https://x.com/scaling01/status/2038982287648293016), [@scaling01](https://x.com/scaling01/status/2039001738934468857), [@Yuchenj_UW](https://x.com/Yuchenj_UW/status/2038996920845430815), [@Yuchenj_UW](https://x.com/Yuchenj_UW/status/2039029676040220682), [@Yuchenj_UW](https://x.com/Yuchenj_UW/status/2039191313749524518), [@dbreunig](https://x.com/dbreunig/status/2039007097376108979), [@dbreunig](https://x.com/dbreunig/status/2039206774558036466), [@theo](https://x.com/theo/status/2039074833334689987), [@theo](https://x.com/theo/status/2039079267905261831), [@Butanium_](https://x.com/Butanium_/status/2039079715823128964), [@gneubig](https://x.com/gneubig/status/2039166255089799222), [@pmarca](https://x.com/pmarca/status/2039042126294733295), [@rasbt](https://x.com/rasbt/status/2039020306912755763), [@BlancheMinerva](https://x.com/BlancheMinerva/status/2039128635559318013), [@mattrickard](https://x.com/mattrickard/status/2039054181361967487), [@saranormous](https://x.com/saranormous/status/2039172685666918672)

### Models, agents, and post-training

- [@PrismML](https://x.com/PrismML/status/2039049400190939426) 이 **Bonsai 8B/4B/1.7B**를 출시했다. **1-bit weight** 계열을 **Apache 2.0**으로 공개. 주장된 수치: 8B가 **1.15 GB**, **14x smaller**, **8x faster**, **5x more energy efficient**(전정밀 대비)이며 “10x intelligence density”로 포지셔닝. 후속 게시물은 MLX/iPhone 경로와 크기-대-지능 Pareto frontier 이동을 보여줬다 ([PrismML](https://x.com/PrismML/status/2039049404209148007), [PrismML](https://x.com/PrismML/status/2039049405815529559), [adrgrondin](https://x.com/adrgrondin/status/2039066539022778613), [HessianFree](https://x.com/HessianFree/status/2039049800398655730)).  
- [@nisten](https://x.com/nisten/status/2039100896840134935) 은 Bonsai-8B GGUF를 독립적으로 분해(teardown)했다: **8,188,548,848 params**, **399 tensors**, **1099.3MB** 총 가중치 데이터, **1.126 bits/weight**. `Q1_0_g128` 지원을 위한 Prism 포크 llama.cpp가 필요하다고 했다.  
- [@liquidai](https://x.com/liquidai/status/2039029358224871605) 가 **LFM2.5-350M**를 공개했다. **tool use**와 **data extraction**에 초점을 둔 서브-**500MB quantized** 모델로, 제약 환경에서의 활용을 강조한다. 350M 모델이 **28T tokens**를 사용했다는 주장 때문에도 주목을 받았다 ([abacaj](https://x.com/abacaj/status/2039158882111521190)).  
- [@hcompany_ai](https://x.com/hcompany_ai/status/2039021096649805937) 가 **Holo3** 컴퓨터 사용(computer-use) 모델을 출시했다. **OSWorld-Verified 78.9%**를 주장하며 **GPT-5.4**와 **Opus 4.6**보다 앞서고 비용은 **1/10th**라고 주장, Hugging Face에 가중치 공개 및 API도 라이브라고 했다.  
- [@outsource_](https://x.com/outsource_/status/2038999111039357302) 는 Claude 4.6 Opus 트레이스(traces)로 증류(distillation)된 **27B Qwen3.5 variant**를 강조했다. 로컬 **16GB VRAM** 배포, **96.91% HumanEval retention**, **24% chain-of-thought reduction**, SWE-bench 강점 등을 주장.  
- [@ClementDelangue](https://x.com/ClementDelangue/status/2039121367656702102), [@QGallouedec](https://x.com/QGallouedec/status/2039000031949165005), [@lvwerra](https://x.com/lvwerra/status/2039003207985197107) 가 **TRL v1.0**을 알렸다. SFT, DPO, GRPO, async RL 등 **75+ methods**를 포함하며, lvwerra는 **100k daily downloads** 규모라고 했다.  
- [@tinkerapi](https://x.com/tinkerapi/status/2039049192451301761) 는 신중한 SFT→RL 선택으로 **20B** 모델에서 **5x score improvement**를 달성한 트레이닝 설명서를 가리켰다.  
- [@togethercompute](https://x.com/togethercompute/status/2039099845856903644) 가 오픈소스 RL 기반 speculative decoding 시스템 **Aurora**를 공개했다. 잘 훈련된 정적(static) 스페큘레이터보다 **1.25x faster**를 주장했고, **online training from scratch**가 pretrained static baseline을 이길 수 있다고 했다 ([details](https://x.com/togethercompute/status/2039099852924367186), [code](https://x.com/togethercompute/status/2039099854702669835)).  
- [@QinYi88814](https://x.com/QinYi88814/status/2038971910835560921) 는 **daVinci-LLM**을 언급했다. 가중치·데이터 파이프라인·트레이닝 프로세스·어블레이션(ablation)을 투명하게 공개하는 프리트레이닝(pretraining) 노력으로, **3B model matching 7B performance**를 헤드라인 주장으로 내세웠다.

### Agents, harnesses, evals, and observability

- [@dair_ai](https://x.com/dair_ai/status/2038968068706390117) 는 **Natural-Language Agent Harnesses (NLAHs)** 및 **Intelligent Harness Runtime**을 소개했다. 하네스 로직을 흩어진 컨트롤러 코드가 아니라 편집/실행 가능한 아티팩트로 다뤄야 한다는 주장으로, Claude Code 논의와 기술적으로 가장 맞닿은 페이퍼 중 하나로 꼽혔다.  
- [@Vtrivedy10](https://x.com/Vtrivedy10/status/2038993396463796638), [@Vtrivedy10](https://x.com/Vtrivedy10/status/2039029715533455860), [@Vtrivedy10](https://x.com/Vtrivedy10/status/2039035899938267334) 는 하네스 품질이 모델 교체만으로가 아니라 eval 품질, 트레이스(traces), 인프라 루프(infra loops)에서 나온다는 주장을 전개했다.  
- [@sydneyrunkle](https://x.com/sydneyrunkle/status/2039040565749096607) 는 단계별로 툴/모델/프롬프트를 적응(adaptation)시키는 **dynamic config middleware**에 대한 하네스 엔지니어링 시리즈를 이어갔다.  
- [@LangChain_JS](https://x.com/LangChain_JS/status/2038985561348993107) 는 인터럽트(interrupt)를 일반 스트림 상태로 다루는 human-in-the-loop 패턴을 설명했다. [@LangChain](https://x.com/LangChain/status/2039014039892947062) 는 프로덕션 에이전트 모니터링 코스를 출시했고, [@LangChain](https://x.com/LangChain/status/2039028327030079565) 는 트레이스가 개선 루프의 기본 원시(primitive)라고 주장했다.  
- [@FranklinMatija](https://x.com/FranklinMatija/status/2039001719007330530) 는 웹 페이지·이메일·API·멀티에이전트 시스템과 상호작용하는 자율 에이전트를 공격하는 6가지 적대(adversarial) 클래스 분류인 **AI Agent Traps**를 소개했다.  
- [@perplexity_ai](https://x.com/perplexity_ai/status/2039029140758864314) 가 Ninghui Li가 이끄는 **Secure Intelligence Institute**를 출범했고, NIST에 대한 대응 첫 페이퍼도 공개했다고 했다 ([paper](https://x.com/perplexity_ai/status/2039029152880480260)).  
- [@cwolferesearch](https://x.com/cwolferesearch/status/2039009111711367557) 는 **30+ LLM evals/benchmarks** 서베이를 공개하며 도메인 분류, 인간 어노테이션, model-in-the-loop 큐레이션, 데이터 품질, 리얼리즘, 진화(evolution)를 강조했다.  
- [@GoogleResearch](https://x.com/GoogleResearch/status/2039014600927043926) 는 주관적(subjective) 벤치마크의 재현성(reproducibility)을 개선하기 위해, 항목 수 대비 항목당 인간 평가자 수 비율을 최적화하는 새 프레임워크를 발표했다.  
- [@koylanai](https://x.com/koylanai/status/2039027239304433767) 는 DSPy/Shopify 스타일 아키텍처 교훈을 요약했다: 에이전트 주도 검색, 컨텍스트 격리, 모듈화 후 프롬프트 최적화, 고정된 eval 컨텍스트, “smaller model + better architecture > bigger model + worse architecture.”

### Open models, multimodal, and systems

- [@IBM / @mervenoyann](https://x.com/mervenoyann/status/2039015519135641997) 는 **Granite 4.0-3B-Vision**을 소개했다. 크기 대비 문서/표/차트에서 강하다고 포지셔닝했고, transformers/vLLM에서 무료 라이선스로 제공된다고 했다.  
- [@LearnOpenCV](https://x.com/LearnOpenCV/status/2038972079370858750) 는 정밀 시각 그라운딩(visual grounding)에 초점을 둔 **Molmo Point**를 다뤘다. [@_akhaliq](https://x.com/_akhaliq/status/2038998550881714402) 는 task-aware speculative sampling인 **TAPS**를 언급했다. 또한 [@_akhaliq](https://x.com/_akhaliq/status/2039000804061847801), [@_akhaliq](https://x.com/_akhaliq/status/2039006585188499744), [@_akhaliq](https://x.com/_akhaliq/status/2039007111741366620), [@_akhaliq](https://x.com/_akhaliq/status/2039011853460819999), [@_akhaliq](https://x.com/_akhaliq/status/2039029830323253546) 는 이미지 생성, 에이전트 문명 인프라, 이미지 편집, 온디바이스 이미지 생성/편집, 양팔(bimanual) 모션 생성 등 새 페이퍼들을 공유했다.  
- [@dair_ai](https://x.com/dair_ai/status/2039072251199549573) 는 에이전트용 그래프-증강 연상 메모리(graph-augmented associative memory)인 **GAAMA**를 게시했다. **LoCoMo-10**에서 **78.9% mean reward**를 보고했고, 튜닝된 RAG 베이스라인보다 낫다고 했다.  
- [@quentinlldc](https://x.com/quentinlldc/status/2038986438088257558) 가 **LeWorldModel** 데이터셋/체크포인트를 공개했다.  
- [@ID_AA_Carmack](https://x.com/ID_AA_Carmack/status/2039046172799578122) 는 **LeWorldModel**의 밀도 높은 리뷰를 올렸다: **224x224 RGB**, 수정 없는 **ViT-Tiny** 인코더, **192-d latent**, 예측기(predictor)는 **ViT-S**, **dropout 0.1**에서 더 나은 성능, **batch 128 x 4 trajectories**, horizon **H=5**까지 **300** 액션 롤아웃(rollouts), 최대 **30 CEM iterations**, 예측기 크기가 커지면 성능 저하 등.  
- [@SemiAnalysis_](https://x.com/SemiAnalysis_/status/2039102080959566038) 가 tensor cores, PTX/SASS, tcgen05, UMMA, TMA, floorsweeps, DSMEM, yield microbenchmarking 등을 다룬 Blackwell 딥다이브를 게시했다.  
- [@clattner_llvm](https://x.com/clattner_llvm/status/2039027422310596881) 는 커널 작성자가 완전한 마이크로매니지먼트 없이도 스케줄러 제어가 필요하다고 주장했다. 후속 글은 레이스 컨디션(race conditions)을 단순화하면 더 이식 가능하고 조합 가능한 알고리즘이 열린다고 말했다 ([thread](https://x.com/clattner_llvm/status/2039028017843126406)).  
- [@Prince_Canuma](https://x.com/Prince_Canuma/status/2039090156188389500) 는 **RF-DETR**이 MLX에서 실시간 온디바이스 인스턴스 세그멘테이션(instance segmentation)을 지원한다고 알렸다.  
- [@Shawkat_m1](https://x.com/Shawkat_m1/status/2039014724071719405) 는 Ollama를 MLX로 전환한 뒤 Qwen3.5:36b에서 **2.2x** 속도 향상을 보고했다. [@joreilly](https://x.com/joreilly/status/2039002786130534618) 는 M1 Max에서 `qwen3.5:4b-nvfp4`가 qwen3.5:4b 대비 에이전트 실행이 **38% faster**라고 했다.

### Industry, funding, and product moves

- [@OpenAI](https://x.com/OpenAI/status/2039085161971896807) 가 대규모 자금 조달을 발표했다: **$122B committed capital**에 **$852B post-money valuation**를 제시하며, “유용한 지능(useful intelligence)”을 전 세계에 배포(distribute)한다는 프레이밍이었다. 여러 코멘터리 게시물이 이를 확대했다 ([scaling01](https://x.com/scaling01/status/2039081471843930366), [TheRundownAI](https://x.com/TheRundownAI/status/2039103606327001435), [reach_vb](https://x.com/reach_vb/status/2039114329967013980)).  
- [@runwayml](https://x.com/runwayml/status/2038984561132990836) 가 **Runway Fund**를 발표하며 Cartesia, LanceDB, Tamarind Bio 등에 이미 투자했다고 밝혔다.  
- [@charlieholtz](https://x.com/charlieholtz/status/2039027121901957349) 는 Conductor가 **$22M Series A**를 유치했다고 말했다.  
- [@andreamichi](https://x.com/andreamichi/status/2039010131443437850) 는 AI 보안 기업 depthfirst가 **$580M valuation**에서 **$80M Series B**를 유치했다고 말했다.  
- [@wandb](https://x.com/wandb/status/2038984035301822784) 는 ClickHouse CEO 인터뷰를 홍보하며, pre-product 단계에서 **$50M**을 유치하고 AI 에이전트 시대에 맞춰 빌드하는 이야기를 전했다.  
- [@yupp.ai](https://x.com/pankaj/status/2039010092255969712) 는 서비스 종료(winding down)를 알리고, 데이터 익스포트를 위해 사이트를 **15 days** 더 유지한다고 했다.  
- [@Google](https://x.com/Google/status/2038969843701989773) 은 미국 사용자 대상으로 Gmail 사용자명 변경을 소개했다: 사용 가능한 `@gmail.com` 사용자명으로 변경 가능, 기존 주소는 alias로 유지, **once per year up to three total changes**. [@gmail](https://x.com/gmail/status/2039107985281008078) 는 미국 Google AI Ultra 구독자 대상 **AI Inbox** 베타를 출시했다.  
- [@OfficialLoganK](https://x.com/OfficialLoganK/status/2039015034286694618) 및 [@_philschmid](https://x.com/_philschmid/status/2039014102811427263) 는 Gemini API/AI Studio에서 **Veo 3.1 Lite**를 **$0.05/sec**에 제공한다고 했다( Fast 대비 반값). **4s/6s/8s** 클립, **16:9 / 9:16** 지원.  
- [@GoogleAIStudio](https://x.com/GoogleAIStudio/status/2039055128276148454) 가 **Lyria 3** 기반 뮤직 플레이그라운드를 소개했다.  
- [@osanseviero](https://x.com/osanseviero/status/2039120000095547722) 는 **Gemma**가 **400M downloads** 및 **100,000 variants**에 도달했다고 보고했다.  
- [@AnthropicAI](https://x.com/AnthropicAI/status/2039137425214353555) 가 호주 정부와 AI 안전 연구 관련 MOU를 발표했다.

---

## AI Reddit Recap

### /r/LocalLlama + /r/localLLM

- **[Claude code source code has been leaked via a map file in their npm registry](https://www.reddit.com/r/LocalLLaMA/comments/1s8ijfb/claude_code_source_code_has_been_leaked_via_a_map/)** (Activity: 4694): Reddit 게시물의 이미지는 터미널 창의 디렉터리 목록을 보여주며, TypeScript 파일과 소스맵 파일(`cli.js.map`)을 포함한 “Claude” 프로젝트 관련 파일이 보인다고 한다. npm 레지스트리에 이 `.map` 파일이 존재한다는 점은, 설정 오류나 실수로 소스 코드가 의도치 않게 노출됐을 수 있음을 시사한다. 이는 프로덕션 환경에서 소스맵 보안을 제대로 설정해 무단 접근을 막는 것이 중요하다는 점을 부각한다. 댓글에서는 실수를 풍자하며, Anthropic 직원의 실수 또는 AI 시스템의 ‘기능’일 수 있다는 농담도 오간다. 또한 유출로 인해 ‘오픈소스가 됐다’는 сар카즘도 있다.
  - npm 레지스트리의 맵 파일을 통한 Claude 소스 유출은 큰 보안 우려를 낳았고, 특히 취약점 탐지로 유명한 Claude의 명성과 대비되며 Anthropic 내부 보안 공정의 허점을 지적하는 흐름이 있었다.
  - ‘vibe coding’ 같은 표현으로 Anthropic 내부의 감독/자동 체크가 느슨했을 수 있다는 농담이 나오며, 더 강한 내부 통제나 AI 기반 모니터링이 필요하다는 시사점으로 이어졌다.
  - 의도치 않은 공개를 ‘오픈소스’로 볼 수 있는지에 대한 법적·윤리적 논쟁이 촉발됐고, 유출 코드를 분석/활용하는 것이 보안 관행 개선이나 AI 개발에 어떤 의미인지 논의됐다.
- **[Claude Code's source just leaked — I extracted its multi-agent orchestration system into an open-source framework that works with any LLM](https://www.reddit.com/r/LocalLLaMA/comments/1s8xj2e/claude_codes_source_just_leaked_i_extracted_its/)** (Activity: 600): **Claude Code** 소스가 유출되면서 멀티에이전트 오케스트레이션(orchestration) 시스템이 드러났고, 한 개발자가 이를 기반으로 **open-multi-agent**라는 오픈소스 프레임워크로 재구현했다고 주장한다. 이 프레임워크는 모델 불가지론(model-agnostic)이며 Claude 및 OpenAI 모델 모두와 호환된다고 한다. 코디네이터(coordinator) 패턴의 작업 분해, 메시지 버스 기반의 팀 시스템, 의존성 해석(dependency resolution)이 있는 작업 스케줄러 등을 포함한다고 설명한다. `TypeScript`로 약 `8000 lines`, **MIT** 라이선스이며, `claude-agent-sdk`와 달리 프로세스 내(in-process)로 동작하고 serverless/Docker/CI/CD 등 다양한 환경에 배포 가능하다고 한다. 프로젝트는 [GitHub](https://github.com/JackChen-me/open-multi-agent)에 있다고 했다. 댓글에서는 유출된 독점 코드를 바탕으로 오픈소스를 내는 행위의 합법성/윤리성에 대한 회의와 법적 리스크 우려가 컸다. 또한 플래닝(planning)과 구현(implementation)에 서로 다른 모델을 쓰는 실용성, 예컨대 GPT-4o를 코딩에 쓰는 선택에 대한 논쟁도 있었다.
  - 목표를 태스크로 쪼개는 오케스트레이션 레이어가 핵심이라는 점, Claude로 플랜을 세우고 GPT-4o로 구현하는 식의 ‘강점 결합’이 가능하다는 기술적 논의가 있었다.
  - 2026년 3월 시점에 GPT-4o를 코딩에 쓰는 것이 적절한지에 대한 회의가 나왔고, 시간이 지나며 모델 적합성이 바뀐다는 관점이 드러났다.
  - 유출된 독점 코드를 MIT 등 오픈소스 라이선스로 배포하는 것이 저작권 침해가 될 수 있고, 법적 보호의 필요성이 제기됐다.
- **[Analyzing Claude Code Source Code. Write "WTF" and Anthropic knows.](https://www.reddit.com/r/LocalLLaMA/comments/1s8uerc/analyzing_claude_code_source_code_write_wtf_and/)** (Activity: 601): 이 글은 **Claude Code** 소스에 광범위한 추적·분류(instrumentation) 메커니즘이 있다고 주장한다. `wtf`, `frustrating` 같은 키워드 기반 감성 탐지, 권한(permission) 프롬프트에서 사용자의 행동(피드백 박스 열기, 입력하다 취소 등) 로깅, 세션 트랜스크립트를 유도하는 피드백 플로가 언급된다. `ultrathink`, `ultraplan` 같은 히든 커맨드가 동작을 바꾸고, 텔레메트리는 세션 ID와 런타임 등 환경 프로파일을 상세히 기록한다고 한다. 내부 모드(`USER_TYPE=ant`)는 더 세밀한 데이터를 수집하며 배포 환경에 묶는다고 서술했다. 이는 일반 챗봇을 넘어선 높은 관측가능성(observability)을 시사한다. [Source](https://x.com/UsmanReads/status/2039036207431344140?s=20). 댓글 일부는 이런 추적은 이벤트 기반 애널리틱스에서 흔하고, 업데이트 문제를 찾기 위한 표준 관행이라는 반박을 했다. 또한 `/btw` 노출, `ultrathink`가 이스터에그(easter egg) 같은 내부 아티팩트일 수 있다는 논의도 있었다.
  - `wtf`, `frustrating` 같은 키워드 리스트 기반 감성 분석은 웹 앱의 이벤트 기반 애널리틱스에서 흔하며, 부정 경험을 플래그로 삼아 후속 조사에 쓰인다는 지적이 있었다.
  - `ultraplan`, `ultrathink`는 미완성 내부 기능/이스터에그에 가깝고, 실험 문화의 산물이라는 관점이 제시됐다.
  - ‘tamagotchi mode’ 같은 기능에 대한 관심이 언급됐다.

### Less Technical AI Subreddit Recap

- 다룬 서브레딧: /r/Singularity, /r/Oobabooga, /r/MachineLearning, /r/OpenAI, /r/ClaudeAI, /r/StableDiffusion, /r/ChatGPT, /r/ChatGPTCoding, /r/aivideo, /r/aivideo
- **[Claude code source code has been leaked via a map file in their npm registry](https://www.reddit.com/r/singularity/comments/1s8izpi/claude_code_source_code_has_been_leaked_via_a_map/)** (Activity: 1522): 2026년 3월 31일, Anthropic의 **Claude Code CLI** 전체 소스가 npm 레지스트리의 `.map` 파일을 통해 유출됐다고 보고한다. [GitHub](https://github.com/instructkr/claude-code)에서 언급된 바에 따르면, 약 `512k lines of TypeScript` 규모이며 **React + Ink**로 터미널 UI를 만들고 **Bun runtime**에서 동작한다고 한다. 이 유출은 아직 공개되지 않은 게이트 기능(gated features)을 노출할 수 있다. 댓글에서는 LLM과 에이전트(agents)의 차이를 이해하지 못하는 혼선이 나타나며, 커뮤니티의 지식 격차를 드러냈다는 해석이 있었다.
  - LLM과 에이전트의 구분을 많은 사람이 이해하지 못한다는 지적이 있었다.
  - 유출 소스로 모델을 훈련하거나 온라인 배포가 가능한지 같은 현실적 함의에 대한 질문이 나왔다.
  - React + Ink, Bun runtime, 512k TypeScript 같은 기술 스택/규모 정보가 공유됐다.
- **[Claude Mythos leaked: "by far the most powerful AI model we've ever developed"](https://www.reddit.com/r/singularity/comments/1s7zwjn/claude_mythos_leaked_by_far_the_most_powerful_ai/)** (Activity: 1816): Anthropic이 **Claude Mythos**라는 새 모델을 개발했으며 *"by far the most powerful AI model we've ever developed"*라고 묘사됐다는 주장이다. 운영 비용이 높아 **Opus**보다 훨씬 비싸고 개인/소기업에는 접근성이 낮을 수 있다고 한다. 자세한 내용은 [Claude Mythos - Archive](https://m1astra-mythos.pages.dev/)를 참조하라고 했다. 댓글에서는 높은 비용으로 접근성 문제가 커질 수 있다는 우려가 주로 나왔다.
  - Mythos가 Opus보다 훨씬 비싸 개인/소기업에 접근이 어렵다는 관점이 있었다.
  - ‘벤치마크 상승’ 이상의 새로운 능력을 보고 싶다는 회의도 나왔다.
- **[Thanks to the leaked source code for Claude Code, I used Codex to find and patch the root cause of the insane token drain in Claude Code and patched it. Usage limits are back to normal for me!](https://www.reddit.com/r/ClaudeAI/comments/1s8zxt4/thanks_to_the_leaked_source_code_for_claude_code/)** (Activity: 1234): 유출된 **Claude Code** 소스를 활용해, **Codex**로 토큰 드레인(token drain) 문제의 근본 원인(root cause)을 찾아 패치했다고 주장한다. 문제는 `db8` 함수가 세션 파일 첨부를 잘못 필터링해, 지연된 툴(deferred tools)을 반복 재공지하고 캐시를 비효율적으로 사용하는 데 있었다고 한다. `db8`를 수정해 특정 첨부를 보존하여 캐시 프리픽스를 안정화하고 캐시 효율이 `26%`에서 `99%`로 개선됐다고 주장한다. 또한 standalone 바이너리 대신 `Node.js`로 실행하면 API 요청의 센티널(sentinel) 값 버그가 해결된다고 한다. 상세는 [GitHub repository](https://github.com/Rangizingo/cc-cache-fix/tree/main)에 있으며, stock Claude 설치를 바꾸지 않고 스크립트로 패치 적용이 가능하다고 한다. 댓글에서는 Anthropic이 의도적으로 유출해 버그 수정을 크라우드소싱했다는 추측도 있었고, 내부 개발의 부실함에 대한 불만도 있었다.
  - `db8`의 첨부 제거가 resume에서 문제를 만든다는 논리와, `deferred_tools_delta`를 보존하는 2줄 수정이 핵심이라는 기술 지적이 있었다.
  - 일부 repo에는 캐시 TTL을 1시간으로 강제해 과금 통제를 우회하는 패치가 포함돼 있어, 이는 정당한 버그 수정이 아니라 우회(circumvention)라는 경고가 있었다.
  - 주장된 99% 개선은 데이터와 맞지 않고 72% 개선 수준이라는 반박도 있었다.
- **[i dug through claude code's leaked source and anthropic's codebase is absolutely unhinged](https://www.reddit.com/r/ClaudeAI/comments/1s8lkkm/i_dug_through_claude_codes_leaked_source_and/)** (Activity: 5088): 유출 소스에서 `/buddy`라는 터미널 펫 시스템(가챠 희귀도, ASCII 동료)을 발견했다고 한다. 스캐너 회피를 위해 종 이름을 hex 인코딩하는 방식, **Deepgram Nova 3** 기반 보이스 모드, 코드네임 **Tengu**, 텔레메트리 이벤트/피처 플래그, **Kairos** 및 **Ultraplan** 같은 미공개 기능이 언급된다. 코드베이스는 매우 크고 `main.tsx`가 `803,924 bytes`, `4,000 lines`를 넘는 파일이 많으며, `460 eslint-disable` 코멘트와 deprecated 함수가 남아있다고 한다. repo 링크는 [here](http://github.com/instructkr/claude-code). 댓글에서는 대규모 코드베이스에서는 흔한 모습이라며 과장이란 반응도 있었고, `/buddy` 출시를 바라는 의견도 있었다.
  - deprecated 함수 존재는 신규 사용 금지 신호로 남겨두는 대규모 코드베이스의 흔한 전략이라는 관점이 있었다.
  - ‘unhinged’는 과장이고, 대규모 프로젝트의 현실적 복잡성이라는 반론이 있었다.
  - 유지보수·레거시 지원·신규 기능 개발 사이의 균형이라는 실무적 맥락이 제시됐다.
- **[Claude code source code has been leaked via a map file in their npm registry](https://www.reddit.com/r/ClaudeAI/comments/1s8ifm6/claude_code_source_code_has_been_leaked_via_a_map/)** (Activity: 2944): `cli.js.map`가 포함돼 소스맵이 의도치 않게 소스 노출로 이어질 수 있다는 요지다. npm 레지스트리 맵 파일을 통해 유출이 발생했고, 포크/파생물이 쏟아질 수 있다는 반응이 나온다. 댓글에서는 “MiniClaude” 같은 저토큰 파생을 농담하며, 결과적으로 오픈소스가 됐다는 풍자가 있었다.
- **[Someone just leaked claude code's Source code on X](https://www.reddit.com/r/ClaudeCode/comments/1s8j10r/someone_just_leaked_claude_codes_source_code_on_x/)** (Activity: 1831): TypeScript 소스 유출로 퍼블릭 빌드에는 없는 35개 빌드타임 피처 플래그가 드러났다고 한다. **BUDDY**, **KAIROS**, **ULTRAPLAN** 같은 기능, 문서화되지 않은 환경 변수, 내부 커맨드, Anthropic 직원용 사용자 타입 등이 언급된다. 댓글에서는 GitHub에 ‘coding agent harness’ 프로젝트가 급증할 거라는 예측과, 버그 픽스를 커뮤니티가 낼 수 있다는 농담이 오갔다.
  - 유출로 새 프로젝트가 급증할 것이고 ‘하네스’가 쏟아질 것이라는 예상이 있었다.
  - 오픈소스 관행처럼 커뮤니티가 버그를 더 빨리 고칠 수 있다는 농담이 나왔다.
  - 기존 GitHub repo와 유출본을 구분할 필요가 있다는 지적이 있었다.
- **[[D] thoughts on the controversy about Google's new paper?](https://www.reddit.com/r/MachineLearning/comments/1s7m7rn/d_thoughts_on_the_controversy_about_googles_new/)** (Activity: 382): Google의 TurboQuant 논문이 RaBitQ 선행 연구를 부적절하게 인용/평가했다는 논란이다. RaBitQ 언급을 부록(appendix)으로 밀고, 성능 비교에서 RaBitQ는 단일 코어 CPU, TurboQuant는 GPU로 비교해 TurboQuant의 독창성과 효과를 과장했다는 비판이 있다. OpenReview의 비판은 TurboQuant가 RaBitQ의 보장을 “suboptimal”이라며 “loose analysis”라고 했지만 구체 설명이 부족하다는 점을 지적한다. 댓글은 대형 연구소가 자원 우위(GPU 등)로 소규모 팀의 기여를 덮어버릴 수 있다는 윤리적 우려를 공유했다.
  - RaBitQ를 부록으로 밀고 비교를 불공정하게 했다는 우려가 있었다.
  - 알려진 기법(랜덤 로테이션, 스칼라 양자화 등)의 재포장에 불과하다는 비판이 있었다.
  - “loose analysis”라며 폄하한 근거가 불명확하다는 지적이 있었다.
- **[[D]  TurboQuant author replies on OpenReview](https://www.reddit.com/r/MachineLearning/comments/1s8yni2/d_turboquant_author_replies_on_openreview/)** (Activity: 121): TurboQuant 저자들이 OpenReview에서 답변했다. novelty는 RaBitQ로부터의 파생이 아니라 “회전된 벡터 좌표의 정확한 분포를 유도해 최적 양자화(optimal quantization)를 얻는 것”이라고 강조했다. RaBitQ 최적성에 대한 오해가 있었음을 인정하고 bounds를 정확히 크레딧했다고 했다. 런타임 벤치마크는 핵심이 아니라 압축-품질 트레이드오프라는 입장이고, arXiv 논문을 업데이트했다고 한다. [OpenReview link](https://openreview.net/forum?id=tO3ASKZlok). 댓글은 GPU vs 단일 프로세스 CPU 비교 같은 런타임 벤치마크가 오해를 유발했다며, 비판을 ‘중요하지 않다’고 치부하면 신뢰가 손상된다고 했다. 또한 VRAM 절감이 실제로는 대형 모델 구동의 근본 제약을 바꾸지 못할 수 있다는 회의도 나왔다.
- **[TurboQuant isn’t just for KV: Qwen3.5-27B at near-Q4_0 quality, about 10% smaller, and finally fitting on my 16GB 5060 Ti](https://www.reddit.com/r/Qwen_AI/comments/1s8489c/turboquant_isnt_just_for_kv_qwen3527b_at_nearq4_0/)** (Activity: 666): 이미지에서는 TurboQuant의 TQ3_1S가 Qwen3.5-27B를 near-Q4_0 품질로 유지하면서 약 10% 더 작아져 16GB RTX 5060 Ti에 들어간다는 점을 보여준다: `12.9 GB`(TQ3_1S) vs `14.4 GB`(Q4_0), PPL `7.2570` vs `7.2431`. Walsh-Hadamard 회전과 8-센트로이드(8-centroid) 양자화 같은 기법이 언급된다. 댓글에서는 q4_0 비교가 구식이며, imatrix/unsloth dynamic quants 같은 최신 방식과의 비교가 필요하다는 지적이 많았다. 또한 성능을 위해서는 가중치뿐 아니라 충분한 KV 캐시를 VRAM에 넣어야 한다는 점이 강조됐다.
  - 최소 16k 길이 KV 캐시가 없으면 CPU 오프로딩 수준으로 제한된다는 지적이 있었다.
  - q4_0는 구식 기준이며 q3/q2 등 동적 양자화와 비교해야 의미가 있다는 의견이 있었다.
  - 5090에서 q8로 262k 컨텍스트를 달성한 경험 공유도 있었다.

### DeepSeek

- **[Deepseek current status](https://www.reddit.com/r/DeepSeek/comments/1s7rjw6/deepseek_current_status/)** (Activity: 172): 3월 29~30일 **11-hour downtime** 이후, 모델이 ‘search → analyze → refine’ 형태의 interleaved thinking을 보이며 에이전트적(agentic) 동작이 강화됐다는 주장이다. 지식 컷오프가 일부 채팅은 **January 2026**, 일부는 **July 2024**로 불일치해 A/B 테스트 또는 부분 롤아웃이라는 추측이 있다. 코딩은 SVG/멀티스텝 스크립트에서 개선, 러시아어 아티팩트 감소, 검색이 1-shot RAG를 넘어 반복적(iterative)으로 정제된다는 주장 등이 포함된다. 앱 버전 **1.8.0(190)**(3월 27일) 언급과, 4월 V4 기대(장기 메모리 LTM, 네이티브 이미지/비디오 생성은 미완)도 있다. 댓글은 컨텍스트 증가와 동시에 hallucinations 증가, 반복 검색이 체감되지 않는다는 반박, 버전/설정 차이에 따른 경험 불일치 등을 담고 있다.
- **[Why is DeepSeek so much better at story telling?](https://www.reddit.com/r/DeepSeek/comments/1s892xq/why_is_deepseek_so_much_better_at_story_telling/)** (Activity: 135): DeepSeek의 스토리텔링 강점이 중국 웹소설 생태계의 방대한 데이터(클리프행어, 페이싱 루프 등 구조)에서 비롯될 수 있다는 주장이다. 스크랩된 도서/섀도 라이브러리 같은 grey-area 소스 가능성도 언급된다. 댓글에서는 DeepSeek/Claude 선호, 번역에 강하다는 평가 등도 나왔다.
- **[INSANE UPDATE, v3.5?? does not feel like v4 yet](https://www.reddit.com/r/DeepSeek/comments/1s82vh5/insane_update_v35_does_not_feel_like_v4_yet/)** (Activity: 122): v3.5로 불리는 업데이트가 속도와 사고 복잡도를 크게 올렸고, `115 pages`를 `6 seconds`에 분석하는 등 툴 호출 한도 증가를 시사한다는 주장이다. 다만 웹 검색이 루프에 빠지거나 완료하지 못하는 버그가 지속된다는 보고가 있다. 무료 제공이 Gemini/CoPilot 대비 큰 이점으로 언급된다.

---

## AI Discord Recap

### AINews

- Discord가 오늘 접근을 차단했다. 이 형태로는 다시 제공하지 않겠지만, 새로운 AINews를 곧 출시할 예정이며, 여기까지 읽어준 것에 감사한다.
