---
title: "OpenAI, ChatGPT Go($8/월) 출시 및 Free·Go 광고 테스트 발표"
summary:
  - "OpenAI가 Free·Go 티어 광고 테스트 시작"
  - "ChatGPT Go($8/월), 메시지 10배 제공"
  - "Sam Altman, ‘매우 빠른 Codex’ 예고"
  - "FLUX.2 [klein], vLLM-Omni day-0 지원"
  - "SWE-rebench 12월, Opus 4.5 63.3% 1위"
date: 2026-01-16
originalUrl: "https://news.smol.ai/issues/26-01-16-monetizing-your-consumers-is-all-you-need/"
hasHeadline: true
headline: "OpenAI, ChatGPT Go($8/월) 출시 및 Free·Go 광고 테스트 발표"
tags:
  - OpenAI
  - ChatGPT Go
  - 광고
  - Codex
  - Claude
isFeatured: true
---

## 헤드라인: OpenAI, ChatGPT Go($8/월) 출시 및 Free·Go 광고 테스트 발표

주간 활성 사용자가 9억 명에 달하면, 광고 기반(ad-supported) 모델을 고민하는 건 보통 한참 전에 했어야 할 일입니다. 해설자들의 [a lot](https://x.com/tomwarren/status/2012295849678602610?s=46) 같은 [snark](https://x.com/nickfloats/status/2012249130006143477?s=46)에도 불구하고, OpenAI는 광고 비즈니스를 정리해야 했고 오늘 마침내 침묵을 깨고, 다음 Free 티어에 대해 향후 몇 주간 미국에서만 진행될 테스트의 [ads principles](https://x.com/OpenAI/status/2012223373489614951?s=20)을 개요로 제시했습니다:

![https://pbs.twimg.com/media/G-zZl9kXwAAQut2?format=png&name=4096x4096](https://pbs.twimg.com/media/G-zZl9kXwAAQut2?format=png&name=4096x4096)

여기서 가장 중요한 메시지는 “광고가 답변에 영향을 주지 않으며(answers not influenced by ads)”, “광고는 명확히 라벨링된다”는 점으로, ‘올바른’ 선택이라고 할 만합니다:

![https://pbs.twimg.com/media/G-zZXO-XcAAdvQo?format=jpg&name=4096x4096](https://pbs.twimg.com/media/G-zZXO-XcAAdvQo?format=jpg&name=4096x4096)

기존 유료 플랜은 광고를 보지 않지만, (현재 미국에서 롤아웃된) 새로운 Go 플랜은 광고를 보게 됩니다. 가격 플랜이 너무 많아 혼란을 부른다는 지적도 나왔습니다([draws some confusion](https://x.com/simonw/status/2012271939629498386?s=46)):

![https://pbs.twimg.com/media/G-0GmQtaQAAW_-F?format=jpg&name=4096x4096](https://pbs.twimg.com/media/G-0GmQtaQAAW_-F?format=jpg&name=4096x4096)

---

## AI Twitter Recap

### OpenAI 제품·수익화 변화(Go 티어, 광고, Codex 속도, 메모리)

- **ChatGPT Go + 광고 테스트**: OpenAI가 **ChatGPT Go**(글로벌 롤아웃)를 **월 $8**의 저가 티어로 발표하며 “메시지 10× 더 많이”, 파일 업로드, 이미지 생성, 더 많은 메모리, 더 긴 컨텍스트, “GPT-5.2 instant 무제한 사용”을 제공한다고 했습니다([OpenAI](https://twitter.com/OpenAI/status/2012223323812270219)). 동시에 OpenAI는 **Free + Go** 티어에서 **광고 테스트**를 시작하되, 원칙으로 **답변은 광고의 영향을 받지 않음**, 광고 명확 표기, “광고주로부터 대화는 비공개”를 제시했습니다([OpenAI](https://twitter.com/OpenAI/status/2012223373489614951); [@fidjissimo](https://twitter.com/fidjissimo/status/2012226082716393960)와 [@sama](https://twitter.com/sama/status/2012253252771824074)가 추가 설명). 발표 직후, 인센티브가 결국 흔들릴 수밖에 없다는 회의론도 강하게 나왔습니다(예: [@scaling01](https://twitter.com/scaling01/status/2012234947403174189); “ads as last resort” 발언 재소환: [@tomwarren](https://twitter.com/tomwarren/status/2012295849678602610)).
- **메모리 + “매우 빠른 Codex”**: Sam Altman이 “새 ChatGPT 메모리 개선”을 강조했고([@sama](https://twitter.com/sama/status/2012242952542683227)), “**Very fast Codex coming!**”을 반복적으로 예고했습니다([@sama](https://twitter.com/sama/status/2012243893744443706)). 개발자 생태계 계정들도 후속 확인/티저를 올렸습니다([@embirico](https://twitter.com/embirico/status/2012320775370666004)). 여러 엔지니어가 **속도 vs 지능** 트레이드오프가 워크플로에 미치는 영향을 논의하며(예: 더 빠른 모델일수록 비동기 “agent shepherding” 비중이 커진다는 관찰: [@adamdotdev](https://twitter.com/adamdotdev/status/2012142271819399663)), 작업 방식의 변화를 언급했습니다.
- **Codex CLI 생태계 통합**: 오픈 웨이트(open-weight) 모델을 Ollama를 통해 Codex CLI에서 `codex --oss`로 사용할 수 있다는 소식이 나왔고([@ollama](https://twitter.com/ollama/status/2012046176267440177)), 더 나은 UX를 위해 설정에서 컨텍스트 길이를 **≥32K**로 올리라는 팁도 공유됐습니다([@ollama](https://twitter.com/ollama/status/2012049822484750426)). 또한 실험 모드에서 “중간 턴(mid-turn)에 방해 없이 codex를 조향(steer)”하는 새로운 상호작용 UX도 소개됐습니다([@thsottiaux](https://twitter.com/thsottiaux/status/2012074358471319599)).

### 에이전트 툴링: 오케스트레이션 UX, human-in-the-loop 신뢰도, 파일 기반 인터페이스

- **Human-in-the-loop의 신뢰도 증폭 효과**: 동일한 기반 모델을 쓰더라도, 완전 자율 배포보다 사람 “감시자”를 루프에 넣으면 시스템이 *훨씬 더 신뢰할 만하게 느껴진다*는 논의가 반복됐습니다. 사람이 수동 하네스(harness)처럼 실패를 잡아내고 모호성을 우회하기 때문입니다([@lateinteraction](https://twitter.com/lateinteraction/status/2012030585926189148); 직관에 대한 정량적 근거가 생겼다는 후속: [@lateinteraction](https://twitter.com/lateinteraction/status/2012031028932854054)). 관련해 “두 선 사이의 간극”을 human-in-the-loop의 가치로 해석하는 차트 논의도 있었습니다([@dbreunig](https://twitter.com/dbreunig/status/2012200587211821410)).
- **“Chunking is dead” / files-first 검색(retrieval)**: Jerry Liu는 **RAG** 자체는 죽지 않았지만 **정적 청킹(chunking)**은 죽었다고 주장합니다. 에이전트가 파일을 열고 검색(`ls`/`grep`)하며 동적으로 컨텍스트를 확장할 수 있으면, 많은 규모에서 취약한 청킹/임베딩 파이프라인을 피할 수 있다는 취지입니다([@jerryjliu0](https://twitter.com/jerryjliu0/status/2012273236042559802); 몇 백 문서까지 파일 툴이 잘 먹히는 이유와 DB가 다시 필요한 지점에 대한 추가 설명: [@jerryjliu0](https://twitter.com/jerryjliu0/status/2012254129473896532); PDF/PPT에선 OCR이 빠진 조각이라는 강조: [@jerryjliu0](https://twitter.com/jerryjliu0/status/2012272839416758652)). “파일이 DB를 대체하는 게 아니라, 언제 DB가 과한지 재고하게 만든다”는 종합도 나왔습니다([@tuanacelik](https://twitter.com/tuanacelik/status/2012212183833403889)).
- **오케스트레이터·에이전트 UI 급증**: “에이전트 하네스” 제품이 빠르게 늘고 있습니다. Anthropic의 Cowork는 오케스트레이션 툴이 메인스트림으로 가는 신호로 언급됐고([@alexalbert__](https://twitter.com/alexalbert__/status/2012230110745702563); 메타 코멘트: [@omarsar0](https://twitter.com/omarsar0/status/2012253642263249167)), SpecStory는 에이전트 세션 provenance/contract를 표준화하는 CLI를 오픈소스로 공개했습니다([@doesdatmaksense](https://twitter.com/doesdatmaksense/status/2012209297380544940)). “sled”라는 새 오픈소스 UI는 Agent Control Protocol로 “컴퓨터의 Claude Code/Codex를 폰으로 텔레포트”한다고 소개됐고([@dctanner](https://twitter.com/dctanner/status/2012212217677070796)), OpenWork는 Mac에서 완전 로컬 컴퓨터 에이전트를 위한 **Ollama 통합**을 추가했습니다(Gemma/Qwen/DeepSeek/Kimi 등)([@_orcaman](https://twitter.com/_orcaman/status/2012210613712281646)).

### 추론(inference)·시스템 엔지니어링: 캐싱, Prefill/Decode, 하드웨어 벤치마크, CUDA 타일링

- **“추론 폭발의 해” 프레이밍**: 한 Zhihu 장문 스레드 요약은 병목이 학습(training)에서 추론으로 옮겨갔다고 주장합니다. 에이전트가 IO 비율을 (3:1 → 100:1 또는 1000:1로) 끌어올리며 **prefill이 지배적**이 되고, **컨텍스트 캐싱**이 기본이 되며, Prefill/Decode 분리는 스케줄링·메모리 계층을 재설계하지 않으면 활용률을 해친다는 논지입니다([@ZhihuFrontier](https://twitter.com/ZhihuFrontier/status/2012080310981374428)). 이는 캐시 어피니티 vs 로드 밸런스 트레이드오프를 둘러싼 인프라 논의와도 맞닿습니다.
- **NVIDIA 밖 하드웨어 벤치마킹**: Artificial Analysis가 SambaNova SN40L에서 **DeepSeek R1** 결과를 추가하며, 동시성(concurrency)에서 더 높은 처리량과 사용자당 속도(단일 사용자 피크 ~269 tok/s)를 강조했습니다. 다만 시간당 비용 비교를 위한 공개 가격 정보가 없어 비교에 제한이 있다고 덧붙였습니다([@ArtificialAnlys](https://twitter.com/ArtificialAnlys/status/2012233319891824943); [@ArtificialAnlys](https://twitter.com/ArtificialAnlys/status/2012233323154678010)).
- **CUDA 타일링(CuTe/CUDA Tile) 인체공학**: 엔지니어들이 손코딩 CUDA 기교보다 **CuTe algebra**가 타일링/인덱싱을 더 깔끔하게 추상화한다며 호응했습니다([@fleetwood___](https://twitter.com/fleetwood___/status/2012150019722485811)). 다만 “평범한 인간(mere mortal)”을 위한 자료가 희소하다는 지적과 링크도 이어졌습니다([@fleetwood___](https://twitter.com/fleetwood___/status/2012151045992992943)). NVIDIA의 “CUDA Tile”/cuTile 가이드는 더 단순한 블록 수준 코드와 컴파일러 특화(스위즐링 개선 포함)로 cuBLAS급 GEMM 성능에 근접할 수 있다는 요지로 요약됐습니다([@TheTuringPost](https://twitter.com/TheTuringPost/status/2012288767894360215)).
- **데이터센터 전력 스케일링**: Epoch AI는 AI 데이터센터 총 용량이 **약 30 GW**로, 뉴욕주가 더운 날 피크에 쓰는 전력과 비슷하다고 추정했습니다. 방법은 판매된 칩 수 × 정격 소비전력을 계산하고 ~2.5× 시설 오버헤드를 적용하는 방식이며, “용량 vs 실제 사용량”에 대한 주의도 포함합니다([@EpochAIResearch](https://twitter.com/EpochAIResearch/status/2012303496465498490)).

### 모델·리서치 하이라이트: 토크나이징 없는 TTS, 초소형 모델, 멀티모달·검색(retrieval)

- **토크나이징 없는(tokenization-free) 실시간 TTS**: OpenBMB가 실시간 스트리밍 보이스 클로닝을 위한 **VoxCPM** 웨이트를 오픈소스로 공개했습니다. 트윗에 따르면 이 모델은 (디스크리트 오디오 토큰을 피해) **연속 음성을 직접 생성**하며, LoRA 미세조정(fine-tuning)과 단일 RTX 4090에서 ~0.15 real-time factor를 언급합니다([@LiorOnAI](https://twitter.com/LiorOnAI/status/2012133013967044755); 레포 링크: [@LiorOnAI](https://twitter.com/LiorOnAI/status/2012133015426642286)). 사실이라면 프로덕션 보이스 에이전트에서 지연·운율 품질 측면의 의미 있는 변화입니다.
- **소형 모델 추론·엣지 배포**: TII는 **Falcon-H1-Tiny**(<100M params)가 엣지/IoT 시나리오에서 추론·코딩·함수 호출이 가능하다고 홍보했습니다([@TIIuae](https://twitter.com/TIIuae/status/2012034581084430662)). Ultralytics는 탐지/세그/키포인트/open-vocab을 포괄하는 **YOLO26**(30개 모델, <50M params) 패밀리를 공개했고, CPU 데모도 공유했습니다([@mervenoyann](https://twitter.com/mervenoyann/status/2012121123018924033)).
- **다국어 번역**: TranslateGemma가 (말라얄람어 포함) 다국어 범위와 토크나이저/데이터 작업으로 주목받았고(**[@arohan](https://twitter.com/_arohan_/status/2012032986649448708); [@JeffDean](https://twitter.com/JeffDean/status/2012178747076591820)**), Ollama에서 특정 프롬프트 포맷으로 제공된다는 소식도 나왔습니다([@ollama](https://twitter.com/ollama/status/2012307436284395692)).
- **검색(retrieval): 멀티 벡터 재부상**: **멀티 벡터 검색(multi-vector retrieval)**이 초소형 모델이 훨씬 큰 베이스라인과 경쟁하도록 만들 수 있다는 강한 주장(예: “32M parameter multi vector model”이 8B에 근접)이 나왔습니다([@aaxsh18](https://twitter.com/aaxsh18/status/2012124348392583584)). “multi vector is the only way forward” 같은 주장도 뒤따랐고([@lateinteraction](https://twitter.com/lateinteraction/status/2012227085507449197)), ColBERT/ColPali 스타일이 다양한 과제에서 승리한다는 실무자 경험 공유도 이어졌습니다([@antoine_chaffin](https://twitter.com/antoine_chaffin/status/2012269641490391272)).
- **정렬(alignment)용 선호 데이터 설계(AIR)**: OpenBMB의 AIR 프레임워크는 선호 데이터셋을 **Annotations / Instructions / Response pairs**로 분해하며, 더 단순한 스코어링, 낮은 분산 기준으로 instruction 필터링, 페어 간 격차/품질 균형 등을 베스트 프랙티스로 주장합니다. 14k 큐레이션 페어로 6개 벤치마크 평균 +5.3 개선을 보고했습니다([@OpenBMB](https://twitter.com/OpenBMB/status/2012179938388926679)).

### 생성 미디어: 오픈 이미지/비디오, 모션 컨트롤, 확산(diffusion) “Neural OS”

- **FLUX.2 [klein]의 광범위 출시(오픈 웨이트, vLLM day-0, 리더보드)**: Black Forest Labs의 **FLUX.2 [klein]**이 **vLLM-Omni**에서 “day-0 support”를 받았고, 소비자 친화적(<~13GB VRAM), 서브초(sub-second) 추론, Apache-2.0 라이선스의 4B 모델로 포지셔닝됐습니다(트윗 기준)([@vllm_project](https://twitter.com/vllm_project/status/2012110024294965406)). Arena와 Artificial Analysis도 오픈 모델 리더보드에서 강한 순위라고 전했습니다([@arena](https://twitter.com/arena/status/2012310336528056520); [@ArtificialAnlys](https://twitter.com/ArtificialAnlys/status/2012339542997737856)).
- **오픈 비디오 모델 순위**: Artificial Analysis는 Video Arena에서 **LTX-2**가 오픈 웨이트 비디오 모델 선두라고 언급하며, 라이선스 제약(LTX-2 Community License, 매출 임계치·비경쟁 조건 하 상업적 사용)도 함께 강조했습니다([@ArtificialAnlys](https://twitter.com/ArtificialAnlys/status/2012256702788153604)).
- **Kling 모션 컨트롤 + “AI 모캡(mocap)”**: 모션 컨트롤과 모캡 스타일 워크플로가 캐릭터 스왑과 연기/퍼포먼스 전이를 빠르게 가능하게 한다는 스레드가 다수 등장했습니다([@HAL2400AI](https://twitter.com/HAL2400AI/status/2012038846960328781); 튜토리얼: [@Kling_ai](https://twitter.com/Kling_ai/status/2012155500134105149); “AI motion capture… copy/paste motion/expression/lips”: [@EHuanglu](https://twitter.com/EHuanglu/status/2012149076511617436); 예시 모음: [@minchoi](https://twitter.com/minchoi/status/2012306052956533211)).

### 참여도 상위 트윗(engagement 기준)

- OpenAI 광고 원칙 발표([@OpenAI](https://twitter.com/OpenAI/status/2012223373489614951))와 Go 티어 출시([@OpenAI](https://twitter.com/OpenAI/status/2012223323812270219)).
- Sam Altman의 광고 롤아웃/원칙 언급([@sama](https://twitter.com/sama/status/2012253252771824074))과 “Very fast Codex coming”([@sama](https://twitter.com/sama/status/2012243893744443706)).
- 확산(diffusion) “모델 속 OS” / Neural OS 바이럴 포스트([@jxmnop](https://twitter.com/jxmnop/status/2012048155379220746); 후속 상세: [@jxmnop](https://twitter.com/jxmnop/status/2012283763720601727)).

---

## AI Reddit Recap

### /r/LocalLlama + /r/localLLM: 새로운 모델·벤치마크

- **[GPT-5.2 xhigh, GLM-4.7, Kimi K2 Thinking, DeepSeek v3.2 on Fresh SWE-rebench (December 2025)](https://www.reddit.com/r/LocalLLaMA/comments/1qefa7q/gpt52_xhigh_glm47_kimi_k2_thinking_deepseek_v32/)** (Activity: 473): 2025년 12월 **SWE-bench 리더보드** 업데이트가 48개의 신규 GitHub PR 태스크 평가를 포함했으며, **Claude Opus 4.5**가 `63.3%` 해결률로 1위, **GPT-5.2 xhigh**가 `61.5%`로 뒤를 이었다는 요약입니다. **Gemini 3 Flash Preview**가 Pro보다 작고 저렴함에도 더 잘 나왔고, **GLM-4.7**이 오픈소스 1위(예: GPT-5.1-codex 같은 폐쇄형과 비교 가능한 수준)라는 점도 언급됩니다. 자세한 내용은 [SWE-rebench Leaderboard](https://swe-rebench.com/?insight=dec_2025). 댓글에서는 Gemini 3 Flash Preview의 성능을 “충격”으로 보거나 GLM-4.7의 상위권 진입을 반기면서도, 다른 벤치마크가 GLM 4.7/Minimax 2.1을 Opus 4.5급으로 과대평가한다는 회의론도 나왔습니다.
- **[7x Longer Context Reinforcement Learning in Unsloth](https://www.reddit.com/r/LocalLLaMA/comments/1qdna3t/7x_longer_context_reinforcement_learning_in/)** (Activity: 288): Unsloth가 강화학습에서 컨텍스트 길이를 최대 7배(일부 12배)까지 늘리는 기능을 소개하며, `24Gb` 카드에서 gpt-oss 20b QLoRA를 `20K` 컨텍스트로 정확도 저하 없이 학습할 수 있고, `192GB` NVIDIA B200에선 `380K` 컨텍스트도 가능하다는 내용입니다. 댓글에서는 이렇게 긴 컨텍스트를 뒷받침할 학습 데이터(특히 코딩 외 도메인)가 충분한지 의문을 제기하거나, Qwen3 30B-3A에 적용 가능한지 묻는 반응이 있었습니다.

### /r/LocalLlama + /r/localLLM: 하드웨어·업그레이드

- **[Latest upgrade…A100 40 GB](https://www.reddit.com/r/LocalLLaMA/comments/1qe0cxc/latest_upgradea100_40_gb/)** (Activity: 466): (고장품으로 올라온) NVIDIA A100을 구입해 실제로는 정상 동작했고, 게임용 리그에서 AI 작업 중심으로 업그레이드한 셋업 사진을 공유한 글입니다. 댓글에서는 패시브 쿨링 A100처럼 보인다며 블로워 팬 등 능동 냉각을 권하거나, 워터블록 같은 대안을 언급했습니다.
- **[M4/M5 Max 128gb vs DGX Spark (or GB10 OEM)](https://www.reddit.com/r/LocalLLM/comments/1qcmmvw/m4m5_max_128gb_vs_dgx_spark_or_gb10_oem/)** (Activity: 188): 로컬 LLM 추론(inference)·코딩용으로 DGX Spark와 M4 Max(128GB) 맥북을 비교합니다. 맥은 통합 메모리/대역폭으로 추론이 빠를 수 있지만, DGX Spark는 CUDA 생태계 덕에 프레임워크 지원과 미세조정(fine-tuning)·멀티모달 작업에서 더 범용적이라는 논쟁이 이어졌습니다. 휴대성이 불필요하면 Mac Studio가 비용 효율적일 수 있다는 의견도 나왔습니다.
- **[RTX 5070 Ti and RTX 5060 Ti 16 GB no longer manufactured](https://www.reddit.com/r/LocalLLaMA/comments/1qdh28f/rtx_5070_ti_and_rtx_5060_ti_16_gb_no_longer/)** (Activity: 414): **Nvidia**가 메모리 공급 부족으로 `RTX 5070 Ti` 생산을 중단하고 `RTX 5060 Ti 16 GB` 공급을 크게 줄여, 5070 Ti가 MSRP 대비 약 `$100` 인상될 수 있다는 주장입니다. `RTX 5060 Ti 8 GB`는 영향이 없다고 합니다. [Source](https://m.youtube.com/watch?v=yteN21aJEvE). 댓글에서는 16GB가 저예산에서 VRAM을 늘리기 좋은 카드였다는 아쉬움과, 업그레이드 계획이 틀어졌다는 반응이 섞였습니다.

### /r/LocalLlama + /r/localLLM: 커뮤니티·혁신

- **[[MOD POST] Announcing the r/LocalLLM 30-Day Innovation Contest! (Huge Hardware & Cash Prizes!)](https://www.reddit.com/r/LocalLLM/comments/1olbrch/mod_post_announcing_the_rlocalllm_30day/)** (Activity: 120): 오픈소스 AI 추론/미세조정(fine-tuning) 프로젝트를 대상으로 하는 **30일 혁신 콘테스트**를 공지한 글입니다. 서빙 프레임워크, 양자화(quantization), 미세조정 기법, 벤치마크 등 다양한 주제를 권장하며, 상금으로 하드웨어·클라우드 시간이 제시됩니다.
- **[Small AI computer runs 120B models locally: Any use cases beyond portability and privacy?](https://www.reddit.com/r/LocalLLM/comments/1qcu498/small_ai_computer_runs_120b_models_locally_any/)** (Activity: 107): **TiinyAI**가 `80GB RAM`, `30W`로 `120B` 모델을 로컬에서 돌릴 수 있는 소형 기기를 만들었다는 글입니다. 휴대성과 프라이버시가 장점이지만, `80Gb/s`~`200Gb/s`로 추정되는 메모리 대역폭이 성능 병목이 될 수 있다는 우려와, 가격/구매 가능성에 대한 회의론이 나왔습니다.
- **[I fucking love this community](https://www.reddit.com/r/LocalLLaMA/comments/1qee2de/i_fucking_love_this_community/)** (Activity: 469): `4GB VRAM`의 10년 된 PC에서 `nemotron-3-nano-30B-a3b-iq4_nl` 같은 대형 모델을 `14-13.5 t/s`로 돌렸다는 사례를 공유하며, **llama.cpp**/**vllm** 같은 최적화와 시스템 RAM 활용, MoE(Mixture of Experts) 구조의 효율을 강조합니다.
- **[My story of underestimating /r/LocalLLaMA’s thirst for VRAM](https://www.reddit.com/r/LocalLLaMA/comments/1qe2i88/my_story_of_underestimating_rlocalllamas_thirst/)** (Activity: 1291): w6800 32GB를 $500에 사서 좋다고 공유했더니 가격이 $1,000+로 뛰었다는 밈/경험담으로, 커뮤니티의 VRAM 수요가 시장 가격에도 영향을 줄 수 있음을 풍자합니다.
- **[What is the biggest local LLM that can fit in 16GB VRAM?](https://www.reddit.com/r/LocalLLM/comments/1qcuyh2/what_is_the_biggest_local_llm_that_can_fit_in/)** (Activity: 155): `16GB VRAM`(예: RTX 5080)에서 실사용 관점으로는 대략 `14B`급이 현실적이고, 컨텍스트 공간을 남기려면 모델 파일이 약 `14GB` 수준이어야 한다는 요약입니다. `GPT-OSS-20B` 같은 더 큰 모델도 강한 양자화(quantization)로 가능할 수 있으나 품질 저하와 성능 트레이드오프가 크다는 논쟁이 이어졌습니다. 모델 크기 확인용으로 [HuggingFace](https://huggingface.co/)도 언급됩니다.
- **[Oh Dear](https://www.reddit.com/r/LocalLLM/comments/1qdiwdh/oh_dear/)** (Activity: 115): 모델이 ‘the’를 반복 출력하는 오류 사례를 공유하며, 시스템 프롬프트 유무나 temperature 같은 튜닝 파라미터, repeat penalty(`1.1`부터) 점검을 권하는 댓글이 달렸습니다.

### 덜 기술적인 AI 서브레딧(요약 대상)

`/r/Singularity, /r/Oobabooga, /r/MachineLearning, /r/OpenAI, /r/ClaudeAI, /r/StableDiffusion, /r/ChatGPT, /r/ChatGPTCoding, /r/aivideo, /r/aivideo`

### 덜 기술적인 서브레딧: Claude·Gemini 업데이트/이슈

- **[Official: Claude Cowork is now available to “Pro” subscribers](https://www.reddit.com/r/ClaudeAI/comments/1qeo736/official_claude_cowork_is_now_available_to_pro/)** (Activity: 353): **Claude Cowork**가 “Pro” 구독자에게 제공되기 시작했다는 공지입니다(리서치 프리뷰). 세션 이름 변경, 커넥터 개선, 초기 피드백 기반 수정이 포함됐지만, Cowork가 복잡한 작업을 처리하면서 사용량 한도를 더 빨리 소진할 수 있다는 우려가 나왔습니다.
- **[🌊 Announcing Claude Flow v3: A full rebuild with a focus on extending Claude Max usage by up to 2.5x](https://www.reddit.com/r/ClaudeAI/comments/1qegsta/announcing_claude_flow_v3_a_full_rebuild_with_a/)** (Activity: 291): **Claude Flow v3**를 “Claude Max 사용량을 최대 `2.5x` 늘린다”는 목표로 전면 재작성(TypeScript/WASM)했다고 소개합니다. 토큰 `75-80%` 절감, 용량 `250%` 개선 등 수치를 주장하지만, 댓글에서는 버즈워드/근거 부족에 대한 회의론과 함께 다중 에이전트 실효성에 대한 질문이 나왔습니다([GitHub repository](https://github.com/ruvnet/claude-flow)).
- **[Today, Gemini 3 Pro became unusable to me as a Pro subscriber](https://www.reddit.com/r/GeminiAI/comments/1qemf0h/today_gemini_3_pro_became_unusable_to_me_as_a_pro/)** (Activity: 183): **Gemini 3 Pro**가 문맥을 잘못 잡고 엉뚱한 코드를 내놓는 등 성능이 떨어져 “사용 불가 수준”이라는 경험담입니다. 유료 사용자에게도 컨텍스트 창이 줄었다는 관측이 환각(hallucination) 증가로 이어졌다는 주장과, 대안으로 **GPT 5.2 Thinking**을 언급하는 댓글이 있었습니다.

### 덜 기술적인 서브레딧: 모델·벤치마크 출시

- **[[R] China just released first SOTA multimodal model trained entirely on domestic chips](https://www.reddit.com/r/MachineLearning/comments/1qeakhz/r_china_just_released_first_sota_multimodal_model/)** (Activity: 49): **Zhipu AI**와 **Huawei**가 **Huawei Ascend 910** 칩에서만 학습한 SOTA 멀티모달 모델 **GLM-Image**를 공개했다는 내용입니다. 중국어 텍스트 렌더링 강점, `1024`~`2048` 해상도 지원, 이미지당 `0.1 yuan` API 가격 등을 언급하며, 토큰/줄(token/joule) 기준 `60%` 효율이 Nvidia H200보다 낫다고 주장합니다. 레포는 [GitHub](https://github.com), [Hugging Face](https://huggingface.co)에 있다고 합니다.
- **[[D] Why Mamba rewrote its core algorithm and Microsoft abandoned RetNet](https://www.reddit.com/r/MachineLearning/comments/1qehwlu/d_why_mamba_rewrote_its_core_algorithm_and/)** (Activity: 131): **Mamba-2**가 Tensor Core 활용률을 높이기 위해 병렬 스캔에서 블록 대각 GEMM으로 전환(대략 `10-20%` → `60-70%`)했다는 설명과 함께, **RetNet**이 왜 주류에서 멀어졌는지(하드웨어/기관 인센티브 문제 등)를 논하는 글입니다. [Full essay link](https://open.substack.com/pub/lambpetros/p/the-transformer-attractor).
- **[[D] ICASSP 2026 Results](https://www.reddit.com/r/MachineLearning/comments/1qeips6/d_icassp_2026_results/)** (Activity: 73): 특정 [link](https://cmsworkshops.com/ICASSP2026/author_invitation_request.php)로 초대 메일을 보낼 수 있으면 ICASSP 2026 채택 여부를 미리 알 수 있었다는 주장과, 이후 링크가 막히며 *‘Error: No match for paper number and password. 0x4C’*가 뜬다는 업데이트를 다룹니다.

### 덜 기술적인 서브레딧: 도구·사용자 경험

- **[Why AI coding tools accidentally feel perfect for inattentive ADHD brains](https://www.reddit.com/r/ClaudeCode/comments/1qeb6od/why_ai_coding_tools_accidentally_feel_perfect_for/)** (Activity: 238): **Claude Code** 같은 AI 코딩 툴이 비선형 사고/외부화된 작업 기억에 기대는 방식이라 ADHD(부주의형) 특성과 맞물려, 코드베이스 읽기·테스트 초안 작성 등에서 활성화 비용을 낮춘다는 논의입니다. 댓글에서는 AI를 “ADHD 보철(prosthetic)”처럼 느낀다는 표현도 나왔습니다.
- **[Whats going on with Opus?](https://www.reddit.com/r/ClaudeCode/comments/1qeb8x4/whats_going_on_with_opus/)** (Activity: 220): **Claude**(Opus)의 프로젝트 처리 신뢰도 저하를 체감했다는 글로, 프록시/엔드포인트 환각 문제 등을 언급합니다. 댓글에서는 특정 툴/회사에 과의존하는 리스크를 지적하며 **Codex** 같은 대안을 찾는 분위기도 보였습니다.

---

## AI Discord Recap

### ChatGPT Go + 광고: 수익화와 UX

- **Go Go Gadget Tier**: OpenAI가 **ChatGPT Go**를 **월 $8**에 출시했으며, “메시지 10× 더 많이”, **파일 업로드**, **이미지 생성**, **확장된 메모리/컨텍스트**, **GPT 5.2 instant** 무제한 접근을 제공한다고 합니다([“Introducing ChatGPT Go”](https://openai.com/index/introducing-chatgpt-go/)).
- 여러 Discord에서 Go는 “구독 티어가 더 늘어날 것”이라는 신호로 받아들여졌고(*“When $80 tier?”* 같은 농담 포함), Plus/Pro/Enterprise가 **광고 없음(ad-free)**을 유지하는 가운데 비교가 이어졌습니다.
- **Ads, But Don’t Touch My Tokens**: OpenAI는 앞으로 몇 주 내 **ChatGPT Free와 Go**에서 **광고**를 테스트하되, 광고는 **명확히 라벨링**되고 **분리**되며 **응답에 영향을 주지 않는다**고 했습니다([“Our approach to advertising and expanding access”](https://openai.com/index/our-approach-to-advertising-and-expanding-access/)).
- 커뮤니티 반응은 체념(*“got eaten by corposlop”*)과, 특히 “OpenAI 사칭 스캠 앱/‘ads’ TestFlight 미끼” 같은 사례가 함께 언급되며 집행 가능성에 대한 회의가 갈리는 모습이었습니다.
- **벤치마크·인터페이스 논쟁**: Latent Space가 Anthropic의 주장(인터페이스가 API냐 웹앱이냐에 따라 METR 벤치마크가 실제 시간 지평(time horizons)을 **1.75×~9.5×**까지 과소평가할 수 있음)을 공유했습니다([Simon Smith’s post](https://xcancel.com/_simonsmith/status/2011928926864454133?s=61)). 이어 “역량(capability)은 모델 웨이트만이 아니라 도구·UX 제약·레이트리밋 같은 제품 표면의 함수”라는 메타 논의가 이어졌습니다.

### 에이전틱 코딩 툴: 레이트리밋·과금 고통

- **Cursor Ultra 과금 체감**: Cursor의 **Ultra 플랜**이 빠르게 비용을 태운다는 보고가 나왔습니다(단일 “orchestrator run”에 사용량 **20%** 소모, **~5분에 $2** 등). nightly 빌드의 서브에이전트 제어, PC 크래시 불만과 함께 스크린샷도 공유됐습니다([image](https://cdn.discordapp.com/attachments/1074847527708393565/1461451586256638197/image.png)).
- 분위기는 “에이전틱 IDE는 채팅박스라기보다 멀티모델 잡 스케줄러”에 가깝고, **작은 모델은 서브에이전트**, **큰 모델은 메인 에이전트**로 쓰되 도구체인이 무너지지 않길 바란다는 쪽으로 정리됐습니다.
- **Qoder 비용 쇼크**: Cursor 커뮤니티에서 **Qoder**가 레이트리밋에 걸리면서도 **월 $400** 수준이 나왔다는 사례가 공유됐고, 더 저렴한 대안(예: **Claude Code**)을 찾는 흐름이 있었습니다.
- **Gemini CLI의 토큰 소각**: Perplexity 사용자들이 **Gemini CLI**로 **하루 10,000,000 토큰**까지 밀어붙였고, 게시된 가격 기준 **~$120/일**, 지속 시 **~$4000/월** 추정이 나왔습니다. “조용한 과금(silent spender)” 워크플로라는 프레임으로, 품질보다 **레이트리밋 인체공학**과 **비용 가시성**이 더 중요해진다는 논의가 있었습니다.
- **크레딧/결제 시스템 문제**: Manus에서 결제/크레딧 문제가 보고되는 한편, 더 신뢰할 수 있는 크레딧 기반 과금/추적 시스템을 만들자는 제안도 나왔습니다.

### 모델·툴링 소식: 번역, 툴 유스, 스피드 경쟁

- **Translate Gemma**: Google이 **Translate Gemma**를 Hugging Face 컬렉션으로 공개했습니다([“translategemma”](https://huggingface.co/collections/google/translategemma)).
- **K2 Turbo 속도**: Moonshot 사용자들이 **K2 Turbo**를 **~73 tps**로 측정해, **K2 ~28 tps**, **MiniMax m2.1 ~38 tps**, **Z.Ai GLM-4.7 ~41 tps**와 비교했습니다(업타임 불만도 언급). 또 더 새로운 K2 비전 모델 기반의 Slides+Vision 기능과, 온라인에서 시각 레퍼런스를 검색하는 프리셋 예시 스크린샷도 공유됐습니다([screenshot](https://cdn.discordapp.com/attachments/1371757564005711973/1461508342424797184/image.png?ex=696c20b6&is=696acf36&hm=70de4ffdcbffa4e7d4572daa8219dad2dfca998f7c15976ce0930997007fdec6&)).
- **Claude의 병렬 툴 호출**: OpenRouter에서 Anthropic 문서(Claude가 한 번의 API 요청에서 **multi tool calls**를 **병렬(parallel)**로 실행할 수 있음)를 지적했습니다([Claude tool use docs](https://platform.claude.com/docs/en/agents-and-tools/tool-use/implement-tool-use#controlling-claudes-output)). 에이전트 아키텍처 관점에서 왕복을 줄여 지연/비용을 낮출 수 있다는 평가가 나왔습니다.
- **Hawk Ultra 화제**: LMArena에서 [MovementLabs.AI](https://movementlabs.ai/)의 **Hawk Ultra**가 단일 프롬프트로 **9.5k+**(심지어 **20k+**) 라인의 코드를 뽑아낼 수 있다는 주장과 함께, “Opus killer” 분위기로 화제가 됐습니다([X post](https://x.com/movementlabsAI/status/2011964766533632380?s=20)). 곧바로 **Gemini 3 Pro**와의 비교, 오픈소스 가능성 질문이 이어졌습니다.

### 평가·벤치마크: 패치, 리더보드, PDF 채팅

- **MMLU-Pro 수정**: Eleuther가 **TIGER-Lab/MMLU-Pro** 이슈 수정 논의와 **lm-evaluation-harness** 패치를 공유했습니다([PR #3500](https://github.com/EleutherAI/lm-evaluation-harness/pull/3500); [dataset thread](https://huggingface.co/datasets/TIGER-Lab/MMLU-Pro/discussions/41)).
- **OpenCompass**: Unsloth 사용자들이 **OpenCompass**가 프롬프트를 돌리고 **정돈된 JSON**을 출력하는 점을 장점으로 꼽으며, L4 vs 3060 노트북 비교를 공유했습니다.
- **LM Arena PDF 채팅**: Arena가 문서 업로드(PDF) 지원을 일부 모델에서 실험 중이라는 이야기가 나왔고, *“FINALLY CAN CHAT WITH PDFS!!!”* 같은 반응이 있었지만, 모델 지원 불균일과 안정성 이슈도 함께 언급됐습니다.
- **이미지 리더보드 변동**: LMArena 리더보드에서 `flux.2-klein-9B`가 Image Edit **#15**, `flux.2-klein-4B`가 **#21**로 올랐고, Text-to-Image에선 `z-image-turbo` **#22**, `flux.2-klein-9B` **#24**, `flux.2-klein-4B` **#31**로 표기됐습니다([Leaderboard Changelog](https://lmarena.ai/blog/leaderboard-changelog/)).

### GPU·시스템 현실: 성능은 정책의 함수

- **Runpod 언더볼팅 논란**: 일부 Runpod 제공자가 사전 고지 없이 GPU를 언더볼팅해 성능이 들쭉날쭉하거나, *“a100 nodes where nccl literally just doesn’t work”* 같은 문제를 만든다는 보고가 있었습니다.
- **벤치마크 sleep가 클럭을 내림**: GPU MODE는 벤치마크 사이 `time.sleep(2.0)`가 GPU 다운클럭을 유발해 타이밍을 왜곡했다며, sleep를 제거하고 클럭을 “워밍”한 뒤 문제를 해소했다고 했습니다.
- **PCIe Gen3x1 병목**: LM Studio 사용자들이 **3090** 추론이 x16에서 **~120 t/s**인데 **Gen3x1**로 옮기면 **~90 t/s**로 떨어진다고 보고하며, 최소 **Gen4x1**을 권장했습니다(특히 **14600k** 같은 신형 CPU 언급).
- **ROCm 캐시 일관성**: GPU MODE가 gfx942 메모리 모델 문서를 파고들며 SPX+NPS1 멀티 L2 환경에서 **MTYPE RW/NC**, 그리고 비로컬 L2 캐시 라인을 무효화하는 `buffer_inv sc1` 같은 메커니즘을 논의했습니다([ROCm gfx942 memory model](https://rocm.docs.amd.com/projects/llvm-project/en/latest/LLVM/llvm/html/AMDGPUUsage.html#memory-model-gfx942)).
