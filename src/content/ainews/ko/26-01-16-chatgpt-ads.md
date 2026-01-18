---
title: "소비자 수익화가 전부다"
summary:
  - "OpenAI, ChatGPT Free·Go 광고 테스트"
  - "ChatGPT Go $8/월, 메시지 10배 제공"
  - "Sam Altman, 메모리 개선·초고속 Codex 예고"
  - "SWE-rebench: Opus 4.5 63.3%로 1위"
  - "FLUX.2 [klein], vLLM-Omni day-0 지원"
date: 2026-01-16
originalUrl: "https://news.smol.ai/issues/26-01-16-monetizing-your-consumers-is-all-you-need/"
hasHeadline: true
headline: "OpenAI, ChatGPT Free·Go 광고 테스트 원칙 공개"
tags:
  - OpenAI
  - ChatGPT
  - Codex
  - Claude
  - Gemini
  - FLUX
isFeatured: true
---

## 헤드라인: OpenAI, ChatGPT Free·Go 광고 테스트 원칙 공개

**소비자 수익화가 전부다.**

> 

AI News 1/15/2026-1/16/2026. 12개 서브레딧, **[544 Twitters](https://twitter.com/i/lists/1585430245762441216)**, 그리고 **24**개 Discord(**205**개 채널, **4966**개 메시지)를 확인했습니다. 예상 절약 독서 시간(200wpm 기준): **430분**. **새 웹사이트**가 전체 메타데이터 검색과, 모든 과거 이슈의 아름다운 vibe-coded 프레젠테이션과 함께 오픈했습니다. 전체 뉴스 정리는 [https://news.smol.ai/](https://news.smol.ai/)에서 확인하고, 피드백은 [@smol_ai](https://x.com/Smol_AI)로 보내주세요!

주간 활성 사용자 9억 명(900 million)을 보유했다면, 광고 기반 모델을 고민하는 건 대개 한참 전부터 “해야 했던” 일입니다. 해설자들의 [a lot](https://x.com/tomwarren/status/2012295849678602610?s=46)한 [snark](https://x.com/nickfloats/status/2012249130006143477?s=46)에도 불구하고, OpenAI는 광고 비즈니스를 정리해야 했고 오늘 마침내 침묵을 깨며, 앞으로 무료 티어에서(미국에서만) 진행될 테스트에 대한 [ads principles](https://x.com/OpenAI/status/2012223373489614951?s=20)를 공개했습니다:

![https://pbs.twimg.com/media/G-zZl9kXwAAQut2?format=png&name=4096x4096](https://pbs.twimg.com/media/G-zZl9kXwAAQut2?format=png&name=4096x4096)

여기서 가장 중요한 문장은 광고가 응답에 결코 영향을 주지 않고, 광고는 명확히 표시된다는 점이며, 이는 “올바른” 선택입니다:

![https://pbs.twimg.com/media/G-zZXO-XcAAdvQo?format=jpg&name=4096x4096](https://pbs.twimg.com/media/G-zZXO-XcAAdvQo?format=jpg&name=4096x4096)

기존 유료 요금제는 광고를 보지 않지만, 새 Go 요금제(현재 미국에서 출시)는 광고가 노출됩니다. 요금제 종류가 워낙 많아 [draws some confusion](https://x.com/simonw/status/2012271939629498386?s=46)도 낳고 있습니다:

![https://pbs.twimg.com/media/G-0GmQtaQAAW_-F?format=jpg&name=4096x4096](https://pbs.twimg.com/media/G-0GmQtaQAAW_-F?format=jpg&name=4096x4096)

---

## AI Twitter Recap

**OpenAI 제품 + 수익화 변화 (Go 티어, 광고, Codex 속도, 메모리)**

- **ChatGPT Go + 광고 테스트**: OpenAI는 저가형 티어인 **ChatGPT Go**(글로벌 롤아웃)를 **월 $8**로 발표했으며, “메시지 10× 더 많이”, 파일 업로드, 이미지 생성, 더 많은 메모리, 더 긴 컨텍스트, “GPT-5.2 instant 무제한 사용”을 제공한다고 했습니다([OpenAI](https://twitter.com/OpenAI/status/2012223323812270219)). 동시에 OpenAI는 **Free + Go** 티어에서 **광고 테스트를 시작**하겠다고 밝혔고, 원칙으로 **응답은 광고의 영향을 받지 않음**, 광고는 명확히 라벨링, “대화는 광고주로부터 프라이빗”을 제시했습니다([OpenAI](https://twitter.com/OpenAI/status/2012223373489614951); [@fidjissimo](https://twitter.com/fidjissimo/status/2012226082716393960)와 [@sama](https://twitter.com/sama/status/2012253252771824074)가 추가 설명). 이 발표는 불가피한 인센티브 드리프트에 대한 강한 회의감을 불러왔습니다(예: [@scaling01](https://twitter.com/scaling01/status/2012234947403174189); [@tomwarren](https://twitter.com/tomwarren/status/2012295849678602610)를 통해 재소환된 “광고는 최후의 수단” 발언).

- **메모리 + “매우 빠른 Codex”**: Sam Altman은 “새 ChatGPT 메모리 개선”을 강조했고([@sama](https://twitter.com/sama/status/2012242952542683227)), “**Very fast Codex coming!**”을 반복적으로 예고했습니다([@sama](https://twitter.com/sama/status/2012243893744443706)). 이후 개발자 생태계 계정들도 확인/티저 성격의 게시물을 이어갔습니다([@embirico](https://twitter.com/embirico/status/2012320775370666004)). 여러 엔지니어는 **속도 vs 지능** 트레이드오프가 워크플로 수준에서 미치는 영향(예: 모델이 더 빨라질수록 비동기적 “agent shepherding”으로 전환)에 대해 논의했습니다([@adamdotdev](https://twitter.com/adamdotdev/status/2012142271819399663)).

- **Codex CLI 생태계 통합**: 오픈 가중치(open-weight) 모델은 Ollama를 통해 Codex CLI에서 `codex --oss`로 사용할 수 있습니다([@ollama](https://twitter.com/ollama/status/2012046176267440177)). 또한 더 나은 UX를 위해 설정에서 컨텍스트 길이를 **≥32K**로 올리라는 팁도 공유됐습니다([@ollama](https://twitter.com/ollama/status/2012049822484750426)). 실험 모드에서 “중간 턴에 끼어들어 중단 없이 codex를 조향(steer)”하는 새로운 인터랙션 UX도 소개됐습니다([@thsottiaux](https://twitter.com/thsottiaux/status/2012074358471319599)).

**에이전트 툴링: 오케스트레이션 UX, “human-in-the-loop” 신뢰성, 그리고 전통적 RAG를 넘는 파일 인터페이스**

- **Human-in-the-loop는 신뢰성 증폭기**: 같은 기반 모델을 쓰더라도, 완전 자율 배포보다 사람 “베이비시터”를 루프에 넣으면 시스템이 훨씬 더 신뢰할 만하게 *느껴진다*는 주제가 반복됩니다. 사람은 실패를 잡아내고 모호함을 우회시키는 수동 하네스가 되기 때문입니다([@lateinteraction](https://twitter.com/lateinteraction/status/2012030585926189148); 이후 직관에 대한 정량적 근거가 있다는 후속 언급: [@lateinteraction](https://twitter.com/lateinteraction/status/2012031028932854054)). 관련해 “두 선 사이의 간극”을 human-in-the-loop의 가치로 보는 차트 논의도 있었습니다([@dbreunig](https://twitter.com/dbreunig/status/2012200587211821410)).

- **“Chunking은 죽었다” / files-first 검색(retrieval)**: Jerry Liu는 **RAG는 죽지 않았지만, 정적 chunking은 죽었다**고 주장합니다. 에이전트가 파일을 열고, 검색(`ls`/`grep`)하고, 컨텍스트를 동적으로 확장할 수 있다면 많은 규모에서 취약한 chunk/embed 파이프라인을 피할 수 있다는 취지입니다([@jerryjliu0](https://twitter.com/jerryjliu0/status/2012273236042559802); 파일 도구가 수백 문서까지는 왜 잘 작동하고 DB가 다시 필요한 지점은 어디인지에 대한 추가 설명: [@jerryjliu0](https://twitter.com/jerryjliu0/status/2012254129473896532); PDF/PPT에서는 OCR이 빠진 조각이라는 강조: [@jerryjliu0](https://twitter.com/jerryjliu0/status/2012272839416758652)). 별도의 종합은 “파일이 DB를 대체하는 게 아니라, DB가 과한 시점을 다시 생각하게 만든다”로 정리했습니다([@tuanacelik](https://twitter.com/tuanacelik/status/2012212183833403889)).

- **오케스트레이터와 에이전트 UI의 확산**: “에이전트 하네스” 제품군이 빠르게 늘고 있습니다. Anthropic의 Cowork 언급은 오케스트레이션 도구가 주류로 가는 신호로 받아들여졌습니다([@alexalbert__](https://twitter.com/alexalbert__/status/2012230110745702563); 메타 코멘트: [@omarsar0](https://twitter.com/omarsar0/status/2012253642263249167)). SpecStory는 에이전트 세션의 프로비넌스/컨트랙트를 표준화하는 CLI를 오픈소스로 공개했습니다([@doesdatmaksense](https://twitter.com/doesdatmaksense/status/2012209297380544940)). 오픈소스 UI “sled”는 Agent Control Protocol로 “내 컴퓨터의 Claude Code나 Codex를 휴대폰으로 텔레포트”할 수 있게 합니다([@dctanner](https://twitter.com/dctanner/status/2012212217677070796)). OpenWork는 Mac에서 완전 로컬 컴퓨터 에이전트를 위한 **Ollama 통합**(Gemma/Qwen/DeepSeek/Kimi 등)을 추가했습니다([@_orcaman](https://twitter.com/_orcaman/status/2012210613712281646)).

**추론(inference) + 시스템 엔지니어링: 캐싱, Prefill/Decode 분리, 하드웨어 벤치마크, CUDA 타일링 인체공학**

- **“추론 폭발의 해” 프레이밍**: 긴 Zhihu 스레드 요약은 병목이 학습(training)에서 추론(inference)으로 옮겨갔다고 주장합니다. 에이전트는 IO 비율을 (3:1 → 100:1 또는 1000:1)로 끌어올리고, **prefill이 지배적**이 되며, **컨텍스트 캐싱이 기본값**이 되고, Prefill/Decode 분리는 스케줄링과 메모리 계층을 재설계하지 않으면 활용률을 해친다는 내용입니다([@ZhihuFrontier](https://twitter.com/ZhihuFrontier/status/2012080310981374428)). 이는 cache affinity vs 로드밸런싱(load balance) 트레이드오프 같은 인프라 논의와도 맞닿습니다.

- **NVIDIA 밖의 하드웨어 벤치마킹**: Artificial Analysis는 SambaNova SN40L에서 **DeepSeek R1** 결과를 추가했고, 동시성에서 더 높은 처리량과 사용자당 속도(단일 사용자 피크 약 ~269 tok/s)가 NVIDIA 구성 대비 돋보인다고 언급했습니다. 다만 비용 비교를 위한 공개 시간당 가격 부재도 지적했습니다([@ArtificialAnlys](https://twitter.com/ArtificialAnlys/status/2012233319891824943); [@ArtificialAnlys](https://twitter.com/ArtificialAnlys/status/2012233323154678010)).

- **CUDA 타일링 / CuTe / cuTile 인체공학**: 엔지니어들은 수작업 CUDA 곡예보다 타일링/인덱싱을 더 깔끔하게 추상화하는 **CuTe algebra**에 열광하고 있습니다([@fleetwood___](https://twitter.com/fleetwood___/status/2012150019722485811)). 동시에 “보통 사람(mere mortal)”을 위한 자료가 드물다는 포인터도 공유됐습니다([@fleetwood___](https://twitter.com/fleetwood___/status/2012151045992992943)). NVIDIA의 새로운 “CUDA Tile”/cuTile 가이드는 더 단순한 블록 레벨 코드와 컴파일러 특수화(스위즐링 개선 포함)로 cuBLAS에 가까운 GEMM 성능을 가능하게 한다는 요약이 나왔습니다([@TheTuringPost](https://twitter.com/TheTuringPost/status/2012288767894360215)).

- **데이터 센터 전력 스케일링**: Epoch AI는 AI 데이터 센터가 현재 총 **30 GW** 수준의 용량을 가진 것으로 추정했는데, 이는 뉴욕주 한여름 피크 사용량에 필적합니다. 방법론은 판매된 칩 대수 × 정격 소비전력에 ~2.5× 시설 오버헤드를 적용하는 것이며, “용량 vs 실제 사용”에 대한 주의도 덧붙였습니다([@EpochAIResearch](https://twitter.com/EpochAIResearch/status/2012303496465498490)).

**모델 & 연구 하이라이트: 토크나이징 없는 음성 복제, 초소형 모델, 멀티모달 + 검색(retrieval) 발전**

- **토크나이징 없는 실시간 TTS**: OpenBMB는 실시간 스트리밍 음성 복제로 **VoxCPM** 가중치를 오픈소스로 공개했으며, **연속 음성(continuous speech)을 직접 생성**해(이산 오디오 토큰의 아티팩트를 회피) LoRA 미세조정(fine-tuning)을 지원하고 트윗 기준 단일 RTX 4090에서 real-time factor ~0.15라고 설명했습니다([@LiorOnAI](https://twitter.com/LiorOnAI/status/2012133013967044755); 리포 링크: [@LiorOnAI](https://twitter.com/LiorOnAI/status/2012133015426642286)). 사실이라면, 프로덕션 음성 에이전트의 지연/운율(prosody) 품질에 의미 있는 변화입니다.

- **소형 모델 추론 + 엣지 배포**: TII는 엣지/IoT 시나리오에서 추론/코딩/함수 호출이 가능하다고 하며 **Falcon-H1-Tiny**(<100M 파라미터)를 홍보했습니다([@TIIuae](https://twitter.com/TIIuae/status/2012034581084430662)). Ultralytics는 탐지/세그멘테이션/키포인트/오픈보캡(open-vocab)을 아우르는 **YOLO26** 패밀리(30개 모델, <50M 파라미터)를 공개했고 CPU 데모도 공유했습니다([@mervenoyann](https://twitter.com/mervenoyann/status/2012121123018924033)).

- **다국어 번역**: TranslateGemma는 말라얄람어를 포함한 다국어 범위와 토크나이저/데이터 작업으로 주목받았고(**[@arohan](https://twitter.com/_arohan_/status/2012032986649448708); [@JeffDean](https://twitter.com/JeffDean/status/2012178747076591820)**), Ollama에서도 특정 프롬프트 포맷으로 제공됩니다([@ollama](https://twitter.com/ollama/status/2012307436284395692)).

- **검색(retrieval): 멀티벡터 부활**: **멀티벡터 검색(multi-vector retrieval)**이 초소형 모델이 훨씬 큰 베이스라인과 경쟁하게 해줄 수 있다는 강한 주장들이 나왔습니다(예: “32M 파라미터 멀티벡터 모델”이 8B 모델에 근접) ([@aaxsh18](https://twitter.com/aaxsh18/status/2012124348392583584)). “멀티벡터만이 앞으로 나아갈 길”이라는 주장도 있었고([@lateinteraction](https://twitter.com/lateinteraction/status/2012227085507449197)), ColBERT/ColPali 스타일의 성과가 다양한 작업에서 유효하다는 실무자 보강도 이어졌습니다([@antoine_chaffin](https://twitter.com/antoine_chaffin/status/2012269641490391272)).

- **정렬(alignment)을 위한 선호 데이터 설계(AIR)**: OpenBMB의 AIR 프레임워크는 선호 데이터셋을 **Annotations / Instructions / Response 쌍**으로 분해하고, 더 단순한 스코어링, 낮은 분산으로 인스트럭션 필터링, 쌍 간 갭/품질 밸런싱 같은 베스트 프랙티스를 주장합니다. 14k 큐레이션 쌍으로 6개 벤치마크에서 평균 +5.3 향상을 보고했습니다([@OpenBMB](https://twitter.com/OpenBMB/status/2012179938388926679)).

**생성 미디어: 오픈 이미지/비디오 공개, 모션 컨트롤 워크플로, 확산(diffusion) “Neural OS”**

- **FLUX.2 [klein] 전방위 확산(오픈 가중치, vLLM day-0, 리더보드)**: Black Forest Labs의 **FLUX.2 [klein]**은 **vLLM-Omni**에서 “day-0 지원”을 받았고, 소비자 친화(<~13GB VRAM), 1초 미만 추론(inference), Apache-2.0 라이선스 4B 모델(트윗 기준)로 포지셔닝됐습니다([@vllm_project](https://twitter.com/vllm_project/status/2012110024294965406)). Arena와 Artificial Analysis는 오픈 모델 리더보드에서의 강한 순위를 보고했습니다([@arena](https://twitter.com/arena/status/2012310336528056520); [@ArtificialAnlys](https://twitter.com/ArtificialAnlys/status/2012339542997737856)).

- **오픈 비디오 모델 랭킹**: Artificial Analysis는 Video Arena에서 **LTX-2**가 오픈 가중치 비디오 모델 1위라고 언급했고, 라이선스 주의점(LTX-2 Community License, 매출 임계 이하 상업 사용 가능 및 비경쟁 제약)을 덧붙였습니다([@ArtificialAnlys](https://twitter.com/ArtificialAnlys/status/2012256702788153604)).

- **Kling 모션 컨트롤 + “AI 모캡”**: 모션 컨트롤과 모캡 스타일 워크플로가 빠른 캐릭터 교체와 연기/퍼포먼스 전이에 유용하다는 스레드가 다수 등장했습니다([@HAL2400AI](https://twitter.com/HAL2400AI/status/2012038846960328781); 튜토리얼: [@Kling_ai](https://twitter.com/Kling_ai/status/2012155500134105149); “AI 모션 캡처… 모션/표정/입모양 복사/붙여넣기”: [@EHuanglu](https://twitter.com/EHuanglu/status/2012149076511617436); 예시 모음: [@minchoi](https://twitter.com/minchoi/status/2012306052956533211)).

**최다 참여 트윗(engagement 기준)**

- OpenAI 광고 원칙 발표([@OpenAI](https://twitter.com/OpenAI/status/2012223373489614951))와 Go 티어 출시([@OpenAI](https://twitter.com/OpenAI/status/2012223323812270219)).

- Sam Altman의 광고 롤아웃/원칙 언급([@sama](https://twitter.com/sama/status/2012253252771824074))과 “Very fast Codex coming”([@sama](https://twitter.com/sama/status/2012243893744443706)).

- 바이럴 “모델 안의 OS”/Neural OS 게시물([@jxmnop](https://twitter.com/jxmnop/status/2012048155379220746); 후속 디테일: [@jxmnop](https://twitter.com/jxmnop/status/2012283763720601727)).

---

## AI Reddit Recap

### /r/LocalLlama + /r/localLLM Recap

#### 1. New Model and Benchmark Releases

- **[GPT-5.2 xhigh, GLM-4.7, Kimi K2 Thinking, DeepSeek v3.2 on Fresh SWE-rebench (December 2025)](https://www.reddit.com/r/LocalLLaMA/comments/1qefa7q/gpt52_xhigh_glm47_kimi_k2_thinking_deepseek_v32/)** (Activity: 473): **SWE-bench 리더보드**의 2025년 12월 업데이트는 48개의 새로운 GitHub PR 태스크에서 여러 주요 모델을 평가했습니다. **Claude Opus 4.5**가 해결률 `63.3%`로 선두이며, 그 뒤를 **GPT-5.2 xhigh** `61.5%`가 잇습니다. 특히 **Gemini 3 Flash Preview**가 더 작고 더 저렴함에도 Pro 버전보다 더 좋은 성능을 보였고, **GLM-4.7**은 최상위 오픈소스 모델로 GPT-5.1-codex 같은 클로즈드 모델과 비슷한 수준으로 평가됐습니다. 고노력(reasoning) 모드에서의 **GPT-OSS-120B** 성능은 추론 시 스케일링(inference-time scaling)의 이점을 강조합니다. 자세한 내용은 [SWE-rebench Leaderboard](https://swe-rebench.com/?insight=dec_2025)를 참고하세요. 코멘터들은 Gemini 3 Flash Preview의 놀라운 성능을 강조하며, GLM-4.7이 상위권에 오른 것에 उत्स망을 표하는 한편, GLM 4.7이나 Minimax 2.1 같은 오픈 모델 성능을 과장하는 다른 벤치마크에 대해선 회의적 반응도 보였습니다.**

- **Gemini Flash**가 “진짜 충격”이라는 언급은, 커뮤니티가 예상하지 못한 수준의 성능 향상이나 아키텍처/학습 혁신이 있었다고 받아들였음을 시사합니다.

- **GLM 4.7**이 벤치마크 상위 10에 포함된 것은 오픈 모델이 보통 자원 제약으로 인해 상용 모델과 경쟁하기 어렵다는 점에서 주목할 만합니다. 이는 최근 최적화나 새로운 기법 덕분일 수 있습니다.

- **GLM 4.7**이나 **Minimax 2.1**을 **Opus 4.5**와 동급으로 보는 벤치마크에 대한 회의는, 학습 데이터/아키텍처 등 차이로 인해 아직 성능이 동급이 아니라고 보는 인식이 있음을 보여줍니다.

- **[7x Longer Context Reinforcement Learning in Unsloth](https://www.reddit.com/r/LocalLLaMA/comments/1qdna3t/7x_longer_context_reinforcement_learning_in/)** (Activity: 288): **이미지는 Unsloth의 새로운 기능(강화학습에서 컨텍스트 길이를 최대 7배, 일부는 12배까지 확장)을 홍보하는 그래픽입니다. 이 발전으로 gpt-oss 20b QLoRA 같은 모델을 `24Gb` 카드에서 정확도 저하 없이 최대 `20K` 컨텍스트로 학습할 수 있다고 합니다. 더 큰 GPU에서는 `192GB` NVIDIA B200 GPU에서 `380K` 컨텍스트를 처리할 수 있다고 주장합니다. 그래픽에는 모델별로 컨텍스트 길이와 GPU VRAM을 비교하는 그래프가 포함돼 있으며, 새로운 데이터 이동/배칭 알고리즘으로 컨텍스트 길이를 늘리는 개선을 보여줍니다. 정확도나 속도를 희생하지 않고 Llama, Gemma 등 다양한 모델에 적용 가능하다고 합니다.** 한 코멘터는 이렇게 긴 컨텍스트에 맞는 적절한 학습 데이터가 실제로 존재하는지 의문을 제기하며, 코딩 같은 특정 도메인을 제외하면 충분한 인스트럭션/QA 데이터가 부족할 수 있다고 지적했습니다. 다른 사용자는 Qwen3 30B-3A 모델에도 적용 가능한지 질문했습니다.

- PlasticTourist6527는 특히 실제 업무에서 사용할 만한 장문 컨텍스트 학습 데이터의 가용성에 대해 중요한 문제를 제기합니다. 코딩 도메인 외에는 고품질 인스트럭션/QA 데이터가 부족할 수 있다는 주장입니다.

- 1ncehost는 ROCm에서 모델 학습 시 최신 버전에서 문제를 겪었고, 깊은 패치 적용 및 커널 교체로 해결해야 했다고 보고했습니다. 또한 Qwen3 0.6B 모델에서는 FA2나 xformers보다 SDPA가 훨씬 빨랐다고 언급해, 모델 크기별 어텐션 최적화 포인트가 다를 수 있음을 시사합니다.

- knownboyofno는 Qwen3 30B-3A 모델에서도 이 장문 컨텍스트 강화학습 접근이 확장/호환되는지 궁금해하며, 기법의 스케일링과 호환성에 대한 관심을 보였습니다.

#### 2. High-Performance AI Hardware and Upgrades

- **[Latest upgrade…A100 40 GB](https://www.reddit.com/r/LocalLLaMA/comments/1qe0cxc/latest_upgradea100_40_gb/)** (Activity: 466): **이미지는 NVIDIA A100 GPU로 업그레이드한 고성능 컴퓨터 셋업을 보여줍니다. 사용자는 원래 게이밍 PC였지만 A100을 확보하면서 AI 중심 셋업으로 전환했습니다. 결함품으로 올라온 A100을 샀는데 실제로는 정상 동작했다고 합니다. 이 업그레이드로 A100의 성능을 활용해 더 큰 AI 모델을 효율적으로 실행/학습할 수 있습니다. 셋업에는 GeForce RTX 카드, RGB 팬, NZXT 수랭 쿨러 등이 포함돼 있어 미관과 성능을 함께 챙긴 구성이 보입니다.** 댓글은 감탄과 유머가 섞였고, “고장품 구매”의 리스크를 농담하는 의견과 NVIDIA CEO Jensen Huang 밈을 언급하는 반응이 있었습니다.

- matatonic은 A100 40GB가 패시브 쿨링 버전처럼 보인다고 지적하며, 과열 방지를 위해 블로워 팬 등 액티브 쿨링을 권했습니다. 또한 AliExpress 등에서 수랭 솔루션을 구할 수도 있다고 언급했습니다.

- **[M4/M5 Max 128gb vs DGX Spark (or GB10 OEM)](https://www.reddit.com/r/LocalLLM/comments/1qcmmvw/m4m5_max_128gb_vs_dgx_spark_or_gb10_oem/)** (Activity: 188): **사용자는 로컬 LLM 추론(inference)에서 코딩 작업(코드 완성/리팩터링 등)을 위해 NVIDIA DGX Spark와 M4 Max(128GB RAM) MacBook Pro를 비교합니다. DGX Spark는 CUDA 생태계와 강한 GPU 컴퓨트가 강점이며, MacBook Pro는 통합 메모리와 Apple ML 스택의 이점이 있습니다. 추론 작업에서는 MacBook의 더 높은 메모리 대역폭이 유리하지만, Claude 같은 클라우드 솔루션 수준의 성능과는 다를 수 있다는 언급이 있습니다. M5 칩은 M4 대비 성능 개선이 있고, 새 MacBook 모델이 곧 나올 수 있다는 점도 언급됩니다. MacBook은 더 빠른 추론이 가능하다는 평가가 있지만, NVIDIA의 CUDA 지원이 더 포괄적이라는 점도 강조됩니다. 휴대성이 필요 없다면 M4 Max Mac Studio가 가성비 대안으로 제시됩니다.** 댓글에서는 Apple Silicon과 NVIDIA 하드웨어의 성능에 대한 논쟁이 이어졌고, 일부는 메모리 대역폭 덕에 MacBook Pro가 텍스트 생성에서 더 낫다고 주장하는 반면, 다른 이들은 NVIDIA가 미세조정(fine-tuning)과 멀티모달 작업에서 더 폭넓다고 강조했습니다. 또한 휴대용이 아닌 경우 Mac Studio가 비용 대비 유리하다는 논의도 있었습니다.

- M4 Max는 DGX Spark보다 메모리 대역폭이 훨씬 높아 추론에 유리하지만, Spark는 CUDA 호환성으로 프레임워크 지원이 더 좋아 미세조정과 이미지 생성 같은 작업에서 더 다재다능하다는 의견이 나왔습니다.

- M3 Ultra Mac Studio가 순수 텍스트 생성에서는 DGX Spark보다 우수하다는 주장도 있었고, 이는 에이전틱 코딩 워크플로에서 Mac의 효율성 덕분이라는 설명이 뒤따랐습니다.

- DGX Spark는 컴팩트하고 에너지 효율적이며(100W 미만 소비, 유휴 10W 정도), 확장성(추가 유닛 연결 가능)도 장점으로 언급됩니다. 다만 대역폭 한계 우려와 GB10 OEM/MacBook Pro와의 비용 비교가 논의됐습니다.

- **[RTX 5070 Ti and RTX 5060 Ti 16 GB no longer manufactured](https://www.reddit.com/r/LocalLLaMA/comments/1qdh28f/rtx_5070_ti_and_rtx_5060_ti_16_gb_no_longer/)** (Activity: 414): **Nvidia**는 메모리 공급 부족으로 `RTX 5070 Ti` 생산을 중단하고 `RTX 5060 Ti 16 GB` 공급을 크게 줄였으며, 5070 Ti 가격이 MSRP 대비 약 `$100` 상승했다고 합니다. RTX 5060 Ti의 8GB 구성은 영향이 없다고 합니다. 이 결정은 대부분의 AIB에 영향을 주며, 더 이상 해당 GPU를 제조하지 않게 됩니다. [Source](https://m.youtube.com/watch?v=yteN21aJEvE). 한 사용자는 RTX 5060 Ti 16GB가 시스템에 Nvidia 메모리를 늘리는 가성비 옵션이었다고 언급하며, DLSS/AI 처리/추론(inferencing)에 적합하고 `70B` 모델을 `64GB VRAM`으로 다루는 구성에서도 유용하다고 말했습니다. 다른 사용자는 업그레이드 계획에 차질이 생겼다고 실망했고, 또 다른 사용자는 Nvidia의 비즈니스 관행을 비판했습니다.**

- RTX 5060 Ti 16GB는 `$350-$390` 수준에서 DLSS, AI 처리 등을 제공해 이미지 생성/추론/게이밍에 가성비가 좋다는 의견이 있었습니다. `16 GB GDDR7` 메모리가 `128-bit bus`를 보완해 `192-bit bus GDDR6` 카드와 비슷하게 만들며, DLSS/레이 트레이싱 같은 작업에서 텍스처 품질을 크게 희생하지 않는다는 주장도 나왔습니다.

- 예산형 추론 셋업에서 RTX 5060 Ti 16GB가 유용하다는 의견도 있었고, RTX 3090 접근이 어려운 사용자에게 대안이 될 수 있다는 맥락입니다. 표준 파워서플라이 시스템에 여러 장을 넣을 수 있고, 새로운 양자화(quantization) 방식으로 `70B` 모델을 `64 GB VRAM`에서 다룰 수 있다는 주장도 언급됐습니다.

#### 3. Local LLM Community and Innovations

- **[[MOD POST] Announcing the r/LocalLLM 30-Day Innovation Contest! (Huge Hardware & Cash Prizes!)](https://www.reddit.com/r/LocalLLM/comments/1olbrch/mod_post_announcing_the_rlocalllm_30day/)** (Activity: 120): **r/LocalLLM 서브레딧이 오픈소스 AI 추론(inference) 또는 미세조정(fine-tuning) 프로젝트를 주제로 하는 **30일 혁신 콘테스트**를 시작했습니다. 대규모 하드웨어 및 현금 상품이 걸려 있으며, 새로운 서빙 프레임워크, 양자화(quantization) 기법, 미세조정 기법, 성능 벤치마크 등 혁신적 프로젝트 제출을 장려합니다. **NVIDIA, Google Cloud TPU, AMD** 등 다양한 하드웨어를 사용할 수 있습니다. 1등 상품은 **NVIDIA RTX PRO 6000**과 **8x NVIDIA H200 서버**의 클라우드 시간입니다. 참가자는 r/LocalLLM에 ‘Contest Entry’ 플레어로 새 게시물을 올리고, 공개 레포 링크와 데모 자료를 포함해 제출하라고 안내합니다.** 댓글에서는 나중에 탐색할 프로젝트를 저장해두겠다는 반응이 있었고, 커뮤니티 영감을 위해 프로젝트를 공유해도 되는지 질문하는 의견과, 제출 절차 확인을 요청하는 의견이 있었습니다.

- **[Small AI computer runs 120B models locally: Any use cases beyond portability and privacy?](https://www.reddit.com/r/LocalLLM/comments/1qcu498/small_ai_computer_runs_120b_models_locally_any/)** (Activity: 107): **TiinyAI**가 `120B` 파라미터 모델을 로컬에서 구동할 수 있는 소형 AI 디바이스를 개발했다고 합니다. `80GB RAM`과 `30W` 전력 소비를 내세우며, 더 크고 비싼 **DGX Spark**( `128GB RAM`, 더 높은 성능) 대비 휴대성과 비용 측면의 대안으로 포지셔닝합니다. 이 디바이스는 인터넷이 제한된 환경이나 현장 작업처럼 **휴대성**과 **프라이버시**가 성능보다 중요한 상황에서 잠재력이 있다고 설명됩니다. 다만 **메모리 대역폭**이 `80Gb/s`~`200Gb/s`로 추정돼(확실치 않음) 일반 PC/노트북 대비 성능이 제한될 수 있다는 우려가 있습니다.** 댓글에서는 가격과 즉시 구매 가능성에 회의가 있었고, 80GB RAM SBC가 $1400이면 비싸다는 반응이 나왔습니다. 또 다른 댓글은 권위주의 체제하처럼 인터넷 접근이 제한된 환경에서 유용할 수 있다는 점을 강조했습니다.

- 핵심 기술 우려는 메모리 대역폭이며, 120B 모델을 효율적으로 돌리려면 대역폭이 중요하다는 논의가 있었습니다. 대역폭이 낮으면 일반 PC/노트북을 크게 앞서지 못해 용도가 제한될 수 있습니다.

- $1400 수준의 가격(추정)과 즉시 구매 불가로 보이는 점 때문에, 실현 가능성과 실용성에 대한 의심이 제기됐습니다.

- 내장 마이크/스피커는 프라이버시 기반 개인 AI 어시스턴트 용도를 시사하며, 자동화 스크립트나 개인 데이터 처리를 로컬에서 수행하는 Alexa/Siri의 대안으로 연결될 수 있다는 의견도 있었습니다.

- **[I fucking love this community](https://www.reddit.com/r/LocalLLaMA/comments/1qee2de/i_fucking_love_this_community/)** (Activity: 469): **이 게시물은 llama.cpp와 vllm 같은 프로젝트의 최적화 덕분에, 10년 된 PC( `4GB VRAM`)에서도 `nemotron-3-nano-30B-a3b-iq4_nl` 같은 대형 모델을 `14-13.5 t/s`로 구동할 수 있다고 강조합니다. 핵심은 대량의 시스템 메모리와 *Mixture of Experts (MoE)* 아키텍처를 활용해 제한된 하드웨어에서 효율적으로 성능을 내는 것입니다.** 댓글은 구형 하드웨어에서 달성된 성능에 대한 놀라움이 많았고, 저사양 장비에서 대형 모델을 돌리기 위한 최적화 자료/게시물에 대한 관심도 있었습니다.

- InfiniteLand7364는 10년 된 시스템에서 `14 t/s`를 달성했다며, 구형 하드웨어에서도 적절한 튜닝으로 “원래 최신 장비의 영역”으로 여겨지는 작업이 가능하다는 점을 강조했습니다.

- Rokpiy는 시스템 RAM과 ‘moe’(MoE 기반 구성)의 결합이 자주 간과되지만 실질적 이점을 준다고 언급했습니다.

- cosimoiaia는 하드웨어 제약 속에서 작업하는 것이 모델 튜닝과 시스템 최적화를 깊이 배우게 하며, 장기적으로 어떤 하드웨어/구성이 효과적인지 이해하는 데 도움이 된다고 말했습니다.

- **[My story of underestimating /r/LocalLLaMA’s thirst for VRAM](https://www.reddit.com/r/LocalLLaMA/comments/1qe2i88/my_story_of_underestimating_rlocalllamas_thirst/)** (Activity: 1291): **이미지는 Reddit에서 기술 인사이트를 공유했을 때 생길 수 있는 의도치 않은 결과를 밈으로 표현합니다. 원글 작성자는 w6800 32GB 그래픽카드를 $500에 사서 성능이 좋아 Reddit에 공유했는데, 그 뒤 가격이 $1000 이상으로 급등했다고 합니다. 이는 /r/LocalLLaMA 커뮤니티의 VRAM 수요가 매우 크며, 제품 추천이 시장 가격에 영향을 줄 수 있음을 보여줍니다.** 댓글에서는 캘리포니아 골드러시에 빗대며 정보를 일부러 숨겨야 한다는 농담이 있었고, VRAM과 냉각을 고려한 대안(3090, R9700 등)과 쿨링 조언이 이어졌습니다.

- EmPips는 VRAM 집약 작업에서 GPU별 트레이드오프를 논의하며, 현재 가격 기준으로는 **NVIDIA RTX 3090**이 더 나을 수 있다고 제안했습니다. 또는 슬롯당 VRAM을 우선한다면 높은 유휴 전력/외부 냉각을 감수하고 **AMD Radeon Pro VII (R9700)**을 고려할 수 있다고 했고, **AMD MI50**도 대안으로 언급했습니다.

- **[What is the biggest local LLM that can fit in 16GB VRAM?](https://www.reddit.com/r/LocalLLM/comments/1qcuyh2/what_is_the_biggest_local_llm_that_can_fit_in/)** (Activity: 155): **RTX 5080 같은 16GB VRAM 환경에서 현실적으로 수용 가능한 로컬 LLM의 최대 규모는 보통 `14B` 정도라는 요지입니다. 컨텍스트 공간을 남겨야 하므로 모델 파일 크기는 이상적으로 `14GB` 정도가 되어야 한다는 설명입니다. `GPT-OSS-20B` 같은 모델도 돌릴 수는 있지만, 품질 저하를 유발할 수 있는 `4-bit` 이하 수준의 강한 양자화(quantization)가 필요할 수 있습니다. 과도한 느려짐 없이 최적의 사용성을 원하면 `14B`급을 추천한다는 의견입니다. 사용자는 [HuggingFace](https://huggingface.co/)에서 모델 크기를 확인해 VRAM에 맞는지 점검할 수 있습니다.** 댓글에서는 `30B`도 강한 양자화로 “기술적으로” 가능할 수 있지만 성능/품질 트레이드오프가 커서 `14B`가 더 실용적이라는 의견이 있었고, 파라미터 수보다 모델 파일 크기를 기준으로 판단해야 한다는 점이 강조됐습니다. VRAM을 넘기면 RAM으로 오버플로되어 크게 느려진다는 경고도 나왔습니다.

- BigYoSpeck는 Ryzen 9 5900x, 64GB DDR4 3800, 16GB Radeon RX 6800 XT에서 `gpt-oss-20b`를 120 t/s 이상, `Qwen3 30b`를 일부 CPU 오프로딩으로 40 t/s, `gpt-oss-120b`(32 MoE 레이어 CPU 오프로딩)를 23 t/s로 돌렸다고 공유했습니다.

- SKirby00는 `Qwen3-Coder-30B`처럼 VRAM/컨텍스트 공간을 많이 요구하는 모델은 16GB에서 비현실적일 수 있다고 지적하며, 사용성 측면에서 14B급을 권했습니다.

- vertical_computer는 16GB VRAM에 맞추려면 모델 파일이 14GB 정도여야 컨텍스트 공간이 남는다는 점을 예로 들었고, 더 큰 모델은 RAM으로 스필되어 대폭 느려진다고 설명했습니다(예: `Nvidia Llama 3.3 Nemotron 49B` 언급).

- **[Oh Dear](https://www.reddit.com/r/LocalLLM/comments/1qdiwdh/oh_dear/)** (Activity: 115): **이미지는 AI 모델 응답이 ‘the,’ 같은 문자열을 반복 출력하는 오작동을 보여줍니다. 이는 잘못된 시스템 프롬프트 또는 temperature 같은 튜닝 파라미터 설정 문제일 수 있습니다. 댓글은 시스템 프롬프트를 점검하고, 일부 모델은 적절한 시스템 프롬프트 없이는 정상 동작하지 않을 수 있다고 조언합니다.** 댓글에서는 temperature가 권장값과 맞는지 확인하라는 의견과, 반복 출력을 줄이기 위해 repeat penalty를 `1.1`부터 올려보라는 제안이 있었으며, 권장치 이상으로 expert를 사용하지 않도록 확인하라는 조언도 나왔습니다. `gguf` 파일 로딩에 ‘pocket pal’을 쓰는 팁도 언급됐습니다.

- mp3m4k3r는 temperature 설정을 점검해 모델 권장 사용법과 맞추라고 조언했습니다.

- HealthyCommunicat는 repeat penalty를 `1.1`부터 시작해 필요하면 올리라고 했고, expert 수 설정도 문제를 유발할 수 있다고 언급했습니다.

- ScoreUnique는 `gguf` 로딩에 ‘pocket pal’을 사용하는 방법을 공유했습니다.

### Less Technical AI Subreddit Recap

> 

/r/Singularity, /r/Oobabooga, /r/MachineLearning, /r/OpenAI, /r/ClaudeAI, /r/StableDiffusion, /r/ChatGPT, /r/ChatGPTCoding, /r/aivideo, /r/aivideo

#### 1. Claude와 Gemini 모델 업데이트 및 이슈

- **[Official: Claude Cowork is now available to “Pro” subscribers](https://www.reddit.com/r/ClaudeAI/comments/1qeo736/official_claude_cowork_is_now_available_to_pro/)** (Activity: 353): **Claude Cowork**가 X.com 발표에 따라 “Pro” 구독자에게 제공되기 시작했습니다. 연구 프리뷰 단계이며, 세션 이름 변경, 커넥터 개선, 초기 피드백 기반 수정이 포함됩니다. 다만 Cowork가 더 복잡한 작업을 수행할 수 있어 Pro 사용자가 사용량 한도에 더 빨리 도달할 수 있다는 점이 언급됩니다. 공지에는 macOS 앱에서 사용해보라는 링크도 포함됩니다.** 사용자들은 사용량 한도 소진에 대한 우려를 표했고, 한 사용자는 459개 파일 정렬에 세션 한도의 97%가 소모됐다고 말했습니다. 또 다른 사용자는 Claude의 제한이 지나치게 빡빡하다고 불평했고, 코딩에 Claude를 쓰지 않는 만큼 max 플랜 업그레이드를 주저한다는 의견도 있었습니다.

- 한 사용자는 Cowork로 459개 파일을 정렬하는 데 세션 사용량 97%가 소모됐다고 보고했으며, 현재 캡이 매우 제한적임을 보여줍니다.

- Claude의 사용량 제한이 다른 서비스 대비 “가장 나쁘다”는 불만도 있었고, 생산성과 만족도를 떨어뜨릴 수 있다는 맥락입니다.

- 코딩에 Claude를 쓰지 않는 사용자는 현재 구독 티어가 다양한 니즈를 잘 반영하지 못한다고 느꼈고, 이는 상품 구성의 간극을 시사합니다.

- **[🌊 Announcing Claude Flow v3: A full rebuild with a focus on extending Claude Max usage by up to 2.5x](https://www.reddit.com/r/ClaudeAI/comments/1qegsta/announcing_claude_flow_v3_a_full_rebuild_with_a/)** (Activity: 291): **Claude Flow v3**는 AI 오케스트레이션 플랫폼의 전면 리빌드로, Claude Max 사용량을 최대 `2.5x` 늘리는 데 초점을 둔다고 합니다. **TypeScript**와 **WASM**으로 재작성했으며, 공유 메모리와 지속 학습을 가진 멀티 에이전트 스웜 배포를 지원하는 모듈형 아키텍처를 내세웁니다. 토큰 사용을 `75-80%` 줄이고 구독 용량을 `250%` 개선했다고 주장합니다. `npm RuVector` 기반이며 **Rust** 심층 통합, 오프라인 실행(로컬 모델 사용으로 토큰 미소모)을 지원한다고 합니다. ADR, DDD 경계, SPARC로 거버넌스를 강제해 추적성과 보안을 보장한다고도 말합니다. 시스템은 항상 켜진 데몬으로 라이브 업데이트 및 자동 작업(최적화/보안 감사)을 수행한다고 합니다. 자세한 내용은 [GitHub repository](https://github.com/ruvnet/claude-flow)를 참고하세요.** 댓글에는 버즈워드와 근거 없는 성능 수치(예: “Agent Booster 352x faster”)에 대한 회의가 있었고, 멀티 에이전트 시스템 가능성에는 흥미를 보이면서도 실제 효용이 베이스 LLM 대비 얼마나 되는지 의문을 제기하는 반응도 있었습니다.

- janusr는 벤치마크/비교가 불명확한 수치 주장과 버즈워드 남발을 지적하며 회의적 입장을 보였습니다.

- Infamous_Research_43는 대규모 에이전트 스웜을 “관리한다”는 프레임워크가 반복적으로 약속을 못 지킨 전례가 있다며, 많은 제작자가 LLM 챗봇과 에이전트 시스템을 혼동한다고 경고했습니다.

- sridoodla는 이전 버전에서 문서가 낡았던 문제를 언급하며 v3의 안정성과 최신 문서 필요성을 제기했습니다.

- **[Today, Gemini 3 Pro became unusable to me as a Pro subscriber](https://www.reddit.com/r/GeminiAI/comments/1qemf0h/today_gemini_3_pro_became_unusable_to_me_as_a_pro/)** (Activity: 183): **한 사용자는 복잡한 앱을 만들 때 의존하던 **Gemini 3 Pro**가 성능 저하로 쓸 수 없게 됐다고 보고합니다. 문서 업로드 기능을 구현하려 했는데, 모델이 무관한 코드(‘Shopping Cart’)를 내놓는 등 컨텍스트 이해 문제를 겪었다고 합니다. 이는 유료 사용자에게도 컨텍스트 윈도우가 줄어 환각(hallucination)이 늘었다는 관측과 맞물립니다. 일부는 대안으로 **GPT 5.2 Thinking**을 제안했습니다.** 댓글에서는 컨텍스트 윈도우 축소로 인한 큰 문제를 겪는 사용자와, 철학적 대화 같은 용도에서는 여전히 유용하다는 사용자 사이에서 경험이 갈렸습니다. 이는 사용 사례 차이에 따른 체감 격차일 수 있습니다.

- xbrasil은 유료 사용자에게도 컨텍스트 윈도우가 크게 줄어 환각이 늘고 사용성이 떨어졌다고 주장하며, GPT 5.2 Thinking을 대안으로 언급했습니다.

- VanillaSwimming5699는 코딩 작업에서 Gemini 3 Pro를 비교적 높게 평가하면서도, 비용/속도 측면에서 ‘3 flash’가 낫고 Opus 4.5도 경쟁력 있지만 지식 컷오프가 더 이르다고 언급했습니다.

- TheLawIsSacred는 최근 Gemini 3가 거의 쓸 수 없었다며, 과거 업데이트 경험을 근거로 개선을 기다리는 중이라고 했습니다. 현재는 Claude Desktop(Opus 4.5), Perplexity Pro(Sonnet 4.5 with Reasoning), ChatGPT(5.2) 등을 사용한다고 말했습니다.

#### 2. AI 모델 및 벤치마크 공개

- **[[R] China just released first SOTA multimodal model trained entirely on domestic chips](https://www.reddit.com/r/MachineLearning/comments/1qeakhz/r_china_just_released_first_sota_multimodal_model/)** (Activity: 49): **Zhipu AI**와 **Huawei**가 **Huawei Ascend 910** 칩만으로 학습한 SOTA 멀티모달 모델 **GLM-Image**를 공개했다고 합니다. 하이브리드 아키텍처(자기회귀 + 확산 디코더)를 사용하며 중국어 텍스트 렌더링에 강하고, 추가 학습 없이 `1024`~`2048` 해상도를 지원한다고 주장합니다. 텍스트→이미지와 이미지→이미지 생성 모두 가능하며, API 가격은 이미지당 `0.1 yuan`입니다. 또한 토큰/줄(tokens per joule) 기준으로 Nvidia H200 대비 `60%` 더 높은 컴퓨트 효율을 주장해 Nvidia 의존에 도전하는 메시지를 냅니다. 저장소는 [GitHub](https://github.com)와 [Hugging Face](https://huggingface.co)에 있다고 언급됩니다.** 댓글에서는 비NVIDIA 하드웨어에서 개발된 모델이 PyTorch/cuDNN 같은 프레임워크와 호환되는지, 다른 머신에서 실행 가능한지 같은 기술적 질문이 제기됐습니다.

- 논의는 비NVIDIA(중국산) 칩에서 학습된 최첨단 멀티모달 모델을 다른 환경에서 실행할 수 있는지에 집중됐고, PyTorch/cuDNN 호환성과 대체 라이브러리/커스텀 솔루션 필요성이 핵심 우려로 제기됐습니다.

- **[[D] Why Mamba rewrote its core algorithm and Microsoft abandoned RetNet](https://www.reddit.com/r/MachineLearning/comments/1qehwlu/d_why_mamba_rewrote_its_core_algorithm_and/)** (Activity: 131): **Mamba-2**는 Tensor Core 용량의 `10-20%`만 쓰던 병렬 스캔에서 블록 대각(block-diagonal) GEMM으로 코어 알고리즘을 재구성해 `60-70%` 활용률을 달성했다고 합니다(주로 NVIDIA 하드웨어 최적화). 한편 **Microsoft Research**는 2023년 7월 `6.7B` 규모의 RetNet을 공개했지만, 곧 Phi-2/3/4 같은 Dense Transformer로 무게중심을 옮기며 RetNet은 기관 차원의 후속이 약해졌다는 분석입니다. 이는 Transformers와 NVIDIA GPU의 공진화(co-evolution)가 강한 어트랙터가 되어 깨기 어렵다는 패턴을 보여준다고 주장합니다. 에세이는 Tensor Core 활용률, 대체 칩 벤더 분석, 2028년 예측 등을 포함합니다. [Full essay link](https://open.substack.com/pub/lambpetros/p/the-transformer-attractor).** 댓글에서는 모델 수식/솔버 구조/하드웨어가 함께 공진화하며 급진적 변화보다 점진적 개선이 인센티브상 유리하다는 동의가 있었고, RetNet 포기가 하드웨어 문제인지 품질 문제인지 리스크 회피인지 불확실하다는 논쟁이 이어졌습니다. RetNet 같은 실험적 구조가 향후에 영향을 줄 수 있다는 견해도 있었습니다.

- thearn4는 ML/HPC에서 모델 수식-솔버-하드웨어 공진화가 진행되며, 인센티브 때문에 급진적 변화보다 점진적 개발이 선호된다는 점을 강조했습니다.

- petroslamb는 공개 실험이 부족해 RetNet 포기의 원인이 스케일링 문제인지 품질 저하인지 리스크 회피인지 알기 어렵다고 말했습니다.

- Xemorr는 병렬 스캔이 블록 대각 GEMM만큼 효율적으로 최적화될 수 있다는 가정에 도전하며 기술적 논쟁을 제기했습니다.

- **[[D] ICASSP 2026 Results](https://www.reddit.com/r/MachineLearning/comments/1qeips6/d_icassp_2026_results/)** (Activity: 73): **특정 [link](https://cmsworkshops.com/ICASSP2026/author_invitation_request.php)를 통해 ICASSP 2026 채택 결과를 조기 확인할 수 있었을 가능성이 논의됩니다. 이 링크로 초대 이메일을 보낼 수 있었던 사용자는 논문이 채택됐을 수 있다는 추정입니다. 이메일은 2026년 5월 3-8일 바르셀로나 IEEE ICASSP 2026에서 발표로 채택되었다고 확인합니다. 다만 업데이트에 따르면 링크는 현재 접근 불가이며, *‘Error: No match for paper number and password. 0x4C’* 오류가 표시된다고 합니다.** 댓글은 초기에 접근됐다가 이후 에러가 난 사례를 언급하며, 버그가 나중에 수정됐을 수 있다고 추정했습니다.

#### 3. AI 도구 및 사용자 경험

- **[Why AI coding tools accidentally feel perfect for inattentive ADHD brains](https://www.reddit.com/r/ClaudeCode/comments/1qeb6od/why_ai_coding_tools_accidentally_feel_perfect_for/)** (Activity: 238): **이 게시물은 **Claude Code** 같은 AI 코딩 도구가 부주의형 ADHD 성향과 잘 맞는 이유를 논의합니다. 이 도구들이 선형적 기억/암기보다 패턴 인식과 외부 컨텍스트에 의존해 작업 기억(working memory)을 외부화하며, 코드베이스 읽기나 테스트 초안 작성 같은 작업의 ‘활성화 비용’을 낮춰준다는 주장입니다. 또한 지속적으로 컨텍스트를 요구하고 환각(hallucination)을 하는 특성이, ADHD 사용자가 검증/반복을 통해 다루는 익숙한 과제로 느껴질 수 있다고 말합니다.** 댓글은 AI를 ‘ADHD 보철(ADHD prosthetic)’로 표현하며, 비선형적 사고/컨텍스트 스위칭을 돕고 번아웃을 줄이며 창의성과 시스템 사고를 강화한다고 설명했습니다.

- texo_optimo는 AI 프롬프트 시스템이 아키텍처 결정을 유지하는 프로젝트 보드(거버넌스 remote MCP 서버)로 발전했다고 설명하며, “아이디어 주차장” 관리가 가능해졌다고 말했습니다.

- nnennahacks는 AI가 컨텍스트 스위칭과 사고 외부화를 지원해 번아웃 없이 깊은 탐구와 창의성을 가능케 한다고 주장했습니다.

- drumnation은 AI가 인지 병목을 완화하는 ‘보철’로서 ADHD의 특성을 혁신 생산으로 전환해준다고 설명했습니다.

- **[Whats going on with Opus?](https://www.reddit.com/r/ClaudeCode/comments/1qeb8x4/whats_going_on_with_opus/)** (Activity: 220): **이 게시물은 내부 대시보드 통합에서의 프록시 express 서버 라우팅 문제와 엔드포인트 환각(hallucination) 등 **Claude** 관련 이슈를 다룹니다. 사용자는 최신 Claude 코드로 업데이트했지만 개선이 없었고, 수동으로 엔드포인트를 추가했다고 합니다. 이는 새 모델 출시 가능성에 대한 질문으로 이어집니다. 사용자들은 최신 **Opus** 버전이 공개된 뒤 프로젝트 관리/작업 수행 능력이 떨어졌다고 보고하며 성능 저하를 주장합니다.** 댓글은 **Claude** 신뢰성 하락에 대한 불만과 의존 리스크를 강조했고, 일부는 이런 문제로 **Codex** 같은 대안을 고려하고 있다고 말했습니다.

- 사용자들은 Opus가 프로젝트를 처리하는 능력이 크게 떨어졌다고 느끼며, 별도의 노트 파일이 있어도 작업을 제대로 수행하지 못한다는 사례가 공유됐습니다.

- 특정 회사/도구 하나에 과도하게 의존하는 것에 대한 우려가 제기됐고, 가격 인상이나 서비스 중단 가능성까지 언급되며 대안 탐색이 이어졌습니다.

- Claude Code Opus 4.5 성능 트래커가 공유되며, 커뮤니티가 성능 변화를 계량적으로 모니터링하고 있음을 보여줍니다.

---

## AI Discord Recap

> 

gpt-5.2가 만든 “요약의 요약” 요약

**1. ChatGPT Go + Ads: 수익화(monetization)와 UX의 충돌**

- **Go Go Gadget Tier**: OpenAI는 [“Introducing ChatGPT Go”](https://openai.com/index/introducing-chatgpt-go/)에 따라 **ChatGPT Go**를 **월 $8**에 출시했고, **메시지 10×**, **파일 업로드**, **이미지 생성**, **확장된 메모리/컨텍스트**, **GPT 5.2 instant 무제한** 접근을 제공한다고 했습니다.

- Discord 전반에서는 Go가 **더 많은 구독 티어**(“$80 티어는 언제?” 같은 농담 포함)가 나올 신호로 받아들여졌고, Plus/Pro/Enterprise는 **광고 없음(ad-free)**을 유지하는 가운데 Go가 어떤 포지션인지 관찰하는 분위기였습니다.

- **Ads, But Don’t Touch My Tokens**: OpenAI는 [“Our approach to advertising and expanding access”](https://openai.com/index/our-approach-to-advertising-and-expanding-access/)에 따라, 향후 몇 주 내 **ChatGPT Free와 Go**에서 **광고(ad) 테스트**를 시작하되 광고는 **명확히 표시**되고 **분리**되며 **응답에 영향을 주지 않는다**고 밝혔습니다.

- 커뮤니티 반응은 체념(*“corposlop에 먹혔다”*)과, 특히 야생에서 OpenAI를 사칭하는 사기 앱과 “ads” TestFlight 미끼 같은 보고가 나오는 상황에서의 집행 가능성에 대한 회의로 갈렸습니다.

- **Benchmarks Lie (Sometimes) and Interfaces Matter**: Latent Space는 Anthropic의 주장으로, **METR** 벤치마크가 실제 모델 **타임 호라이즌**을 **1.75×~9.5×**까지 과소평가할 수 있으며, 이는 인터페이스가 **API vs 웹 앱**인지에 따라 달라질 수 있다고 공유했습니다([Simon Smith’s post](https://xcancel.com/_simonsmith/status/2011928926864454133?s=61)).

- 이로 인해 “역량(capability)” 측정이 모델 가중치뿐 아니라 **제품 표면적**(도구, UX 제약, 레이트 리밋 등)에 크게 좌우될 수 있다는 메타 논의가 이어졌습니다.

**2. 에이전틱 코딩 도구: 레이트 리밋, 지출 폭탄, 과금 고통**

- **Cursor Ultra는 지갑을 집어삼킨다**: Cursor 사용자는 **Ultra 플랜**에서 지출이 빠르게 늘었다고 보고했으며, 단일 “오케스트레이터 실행”으로 **사용량 20%**가 소모되거나, **약 5분에 $2**가 나갔다는 불만이 있었습니다. nightly 빌드에서 서브에이전트 제어 문제, PC 크래시도 언급됐고, 기능 스크린샷도 공유됐습니다([image](https://cdn.discordapp.com/attachments/1074847527708393565/1461451586256638197/image.png)).

- 전반적인 분위기는 에이전틱 IDE가 더 이상 채팅박스가 아니라 **멀티모델 잡 스케줄러**처럼 느껴지며, **서브에이전트는 작은 모델**, **메인 에이전트는 큰 모델**을 쓰되 툴체인이 무너지지 않길 원한다는 요구로 요약됐습니다.

- **Qoder의 $400/월 숙취**: 한 Cursor 커뮤니티 사용자는 **Qoder**가 레이트 리밋에 걸리면서 비용이 **월 $400** 정도로 올라갔다고 말했고, 이를 *“도박이나 헤로인”*에 비유하며 더 저렴한 대안(예: **Claude Code**)을 찾았습니다.

- 토큰을 많이 쓰는 CLI 워크플로는 “조용한 지출자(silent spender)”로 묘사되며, 모델 품질 못지않게 **레이트 리밋 인체공학**과 **비용 가시성(cost observability)**이 중요하다는 흐름이 강화됐습니다.

- **결제/크레딧 시스템이 깨진다, 엔지니어 구함**: Manus에서는 결제/크레딧 문제(멤버십 업그레이드, Link, 카드/알리페이)가 보고됐고, 다른 엔지니어는 더 신뢰성 있는 **크레딧 기반 사용량 추적/과금** 시스템 구축을 제안했습니다.

**3. 모델 + 툴링 드롭: 번역, 도구 사용, 속도 전쟁**

- **Translate Gemma가 Hugging Face에 상륙**: Google은 Hugging Face 컬렉션으로 **Translate Gemma**를 공개했습니다: [“translategemma”](https://huggingface.co/collections/google/translategemma).

- **K2 Turbo가 73 tps까지 가속**: Moonshot 사용자는 **K2 Turbo**가 **~73 tps**, 일반 **K2 ~28 tps**, **MiniMax m2.1 ~38 tps**, **Z.Ai GLM-4.7 ~41 tps**라고 벤치마크를 공유했습니다(업타임 불만도 언급).

- 또한 더 최신 K2 비전 모델 기반의 **Slides + Vision** 기능과, 시각적 레퍼런스를 온라인에서 검색하는 예시 프리셋이 언급됐습니다([screenshot](https://cdn.discordapp.com/attachments/1371757564005711973/1461508342424797184/image.png?ex=696c20b6&is=696acf36&hm=70de4ffdcbffa4e7d4572daa8219dad2dfca998f7c15976ce0930997007fdec6&)).

- **Claude는 병렬 툴 사용을 원샷으로**: OpenRouter 멤버들은 Anthropic 문서에서 **Claude**가 **한 번의 API 요청**으로 **멀티 툴 콜**(parallel tool use 포함)을 수행할 수 있다는 내용을 지적했습니다: [Claude tool use docs](https://platform.claude.com/docs/en/agents-and-tools/tool-use/implement-tool-use#controlling-claudes-output).

- 이는 에이전트 아키텍처 측면에서 요청/응답 루프를 줄이고 오케스트레이션을 더 깔끔하게 하며, 복잡한 워크플로의 지연/비용을 낮출 수 있는 포인트로 해석됐습니다.

- **Hawk Ultra가 Opus를 원샷으로 압도?**: LMArena에서는 [MovementLabs.AI](https://movementlabs.ai/)의 **Hawk Ultra**가 단일 프롬프트로 **9.5k+**(심지어 **20k+**) 줄의 코드를 뽑아낼 수 있다는 주장과 함께 “Opus killer” 분위기가 언급됐고, 관련 [X post](https://x.com/movementlabsAI/status/2011964766533632380?s=20)가 공유됐습니다.

- 사람들은 즉시 **Gemini 3 Pro**와의 비교, 오픈소스 여부 등을 질문하며 이를 “대화형 모델”이라기보다 “코드 파이어호스” 모델로 바라봤습니다.

**4. 평가 + 벤치마크: 수정, 리더보드, PDF 채팅**

- **MMLU-Pro 드디어 패치**: Eleuther는 **TIGER-Lab/MMLU-Pro** 수정 논의와 **lm-evaluation-harness** 패치를 공유했습니다: [PR #3500](https://github.com/EleutherAI/lm-evaluation-harness/pull/3500) 및 [dataset thread](https://huggingface.co/datasets/TIGER-Lab/MMLU-Pro/discussions/41).

- 요지는 실무적으로 “MMLU-Pro 수치가 이상했다면, 하이퍼파라미터 미신이 아니라 하네스 패치가 필요했다”는 것이었습니다.

- **OpenCompass로 Eval JSON이 덜 고통**: Unsloth 사용자들은 **OpenCompass**가 프롬프트를 실행하고 **정돈된 JSON**을 뽑아준다는 점을 강조하며, **L4** vs **3060** 노트북 성능 비교를 공유했습니다.

- 이는 다수 프롬프트/모델에서 재현 가능한 평가 워크플로를 위한 “접착제(glue tool)”로 언급됐습니다.

- **LM Arena에 PDF 채팅(일부 모델만)**: LMArena가 문서 업로드 및 대화형 채팅을 위한 **PDF 지원**을 실험 중이라는 이야기가 있었고, *“드디어 PDF와 채팅!!!”* 같은 반응이 나왔습니다.

- 다만 모델 지원이 고르지 않고 신뢰성 이슈가 남아 있어, 기능이 플랫폼 안정성을 앞서 달린다는 평가도 있었습니다.

- **이미지 리더보드 변동: flux.2-klein 상승**: LMArena 리더보드 업데이트에서 `flux.2-klein-9B`가 Image Edit **#15**, `flux.2-klein-4B`가 **#21**, Text-to-Image에서는 `z-image-turbo` **#22**, `flux.2-klein-9B` **#24**, `flux.2-klein-4B` **#31**로 언급됐습니다([Leaderboard Changelog](https://lmarena.ai/blog/leaderboard-changelog/)).

- 이는 이미지 모델이 빠르게 반복(iterate)하며, “작은 편”의 변형들이 중위권을 빠르게 채워가는 흐름을 강화했습니다.

**5. GPU + 시스템 현실: 성능은 정책 결정이다**

- **Runpod 언더볼팅이 A100 vs H100을 동전던지기로**: Unsloth 사용자들은 일부 Runpod 제공자가 사전 고지 없이 GPU를 언더볼팅해 성능이 들쭉날쭉해지거나, *“nccl이 아예 안 도는 a100 노드”* 같은 고장이 난다는 사례를 공유했습니다.

- 따라서 클라우드 GPU 선택은 FLOPs/$뿐 아니라 **신뢰성 문제**로 봐야 한다는 논의가 있었고, 노드 품질만 좋다면 비용 대비 미세조정(fine-tuning)에 **A100**을 선호한다는 의견도 있었습니다.

- **벤치마크가 잠들면 GPU도 다운클록**: GPU MODE는 벤치마크 반복 사이에 `time.sleep(2.0)`를 넣으면 GPU가 다운클록되어 타이밍이 왜곡되며, sleep을 제거하고 클록을 “따뜻하게” 유지하자 문제가 해결됐다고 공유했습니다.

- 이는 마이크로벤치마크가 커널뿐 아니라 **전력 관리(power management)**까지 측정해버릴 수 있으니 램프 타임을 통제해야 한다는 경고로 읽혔습니다.

- **PCIe Gen3x1이 3090 처리량을 25% 깎는다**: LM Studio 사용자들은 3090 추론이 x16에서 **~120 t/s**였는데 **Gen3x1** 슬롯으로 옮기자 **~90 t/s**로 떨어졌다고 관찰했고, 최소 **Gen4x1**을 권했습니다(특히 **14600k** 같은 최신 CPU와 함께).

- 요지는 “모델을 탓하기 전에 레인을 확인하라”는 PSA였습니다.

- **ROCm 캐시 코히어런시: buffer_inv sc1 등장**: GPU MODE는 gfx942 메모리 모델 문서를 파고들며, SPX + NPS1 멀티-L2 구성에서 **MTYPE RW/NC**로 L2 코히어런시를 다루고, **비로컬(non-local) L2 캐시 라인**을 무효화하는 `buffer_inv sc1` 사용을 논의했습니다: [ROCm gfx942 memory model](https://rocm.docs.amd.com/projects/llvm-project/en/latest/LLVM/llvm/html/AMDGPUUsage.html#memory-model-gfx942).

- 이 대화는 “모든 것이 빠르다가도 코히어런시가 깨지면 끝”이라는 류의 문제로 정리됐고, 정합성과 성능이 캐시 토폴로지 이해에 달려 있음을 강조했습니다.
