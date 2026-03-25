---
title: "LiteLLM PyPI 공급망 공격, 자격증명 유출 우려"
summary:
  - "LiteLLM PyPI 공급망 공격, 자격증명 유출 우려"
  - "Figma MCP 오픈 베타로 캔버스 직접 편집"
  - "Hermes Agent v0.4.0, 개인 에이전트 런타임 강화"
  - "vLLM·Transformers, 추론 성능 격차 빠르게 축소"
  - "OpenAI, 재단 10억달러 집행과 Spud 개발 소문"
date: 2026-03-24
originalUrl: "https://github.com/smol-ai/ainews-web-2025/blob/main/src/content/issues/26-03-24-not-much.md"
hasHeadline: false
headline: "LiteLLM PyPI 공급망 공격, 자격증명 유출 우려"
tags:
  - OpenAI
  - Codex
  - LiteLLM
  - Anthropic
  - Figma
isFeatured: false
---

## 헤드라인: LiteLLM PyPI 공급망 공격, 자격증명 유출 우려

참고 링크: [544 Twitters](https://twitter.com/i/lists/1585430245762441216) · [AINews' website](https://news.smol.ai/) · [AINews is now a section of Latent Space](https://www.latent.space/p/2026) · [opt in/out](https://support.substack.com/hc/en-us/articles/8914938285204-How-do-I-subscribe-to-or-unsubscribe-from-a-section-on-Substack)

오늘 인프라/보안 논의의 중심은 PyPI에서 보고된 LiteLLM 공급망(supply chain) 침해였다. 문제로 지목된 버전(`1.82.7`, `1.82.8`)은 실행 시 자격증명(credential) 등 민감정보를 탈취(exfiltration)하려는 페이로드를 포함할 수 있다는 경고가 확산됐고, 대응으로는 즉시 버전/실행 이력 점검과 비밀 회전(credential rotation), 의존성 고정(pin), 그리고 에이전트가 접근 가능한 파일시스템 전체를 공격면(attack surface)으로 가정한 권한·승인 설계가 강조됐다.

---

## AI Twitter Recap

### 에이전트 인프라, “computer use”, 디자인→액션 툴링

- **Anthropic의 에이전트 하네스(harness)와 “computer use”가 제품 표면을 바꾼다**: 오늘 반복된 주제는 에이전트 역량이 기반 모델(base model) 자체보다 점점 **하네스(harness)**에 달려 있다는 점이었다. Anthropic은 프론트엔드 디자인과 장기 실행 소프트웨어 작업에 **멀티 에이전트 하네스(multi-agent harness)**를 어떻게 쓰는지에 대한 새로운 엔지니어링 글을 공개하며, 단발 프롬프팅(one-shot prompting)보다 오케스트레이션(orchestration)을 강조했다 ([AnthropicAI](https://x.com/AnthropicAI/status/2036481033621623056)). 또 여러 개발자는 신뢰할 만한 API가 없는 난잡한 소프트웨어 환경에서도 모델이 행동할 수 있게 해준다는 점에서 “computer use”의 중요성을 각각 주장했다 ([glennko](https://x.com/glennko/status/2036293890198646985)), 다만 더 많은 도구가 API/CLI 표면(surface)을 노출하기 전까지는 여전히 느리고 과도기적일 가능성이 크다는 지적도 있었다 ([Yuchenj_UW](https://x.com/Yuchenj_UW/status/2036487951677571582)). 운영 관점의 더 큰 결론은 [kerrsee](https://x.com/kerrsee/status/2036252319235580047)가 잘 포착했는데, 재시도(retry), 롤백(rollback), 웹훅(webhook), 구조화 로깅(structured logging), 복구 경로(recovery path) 같은 것들이 여전히 프로덕션 에이전트 배포의 화려하지 않은 병목으로 남아 있다는 것이다.

- **Figma/MCP/Cursor가 디자인 캔버스를 에이전트가 직접 편집 가능하게**: 가장 구체적인 워크플로 출시로는, 현재 오픈 베타(open beta)로 제공되는 **Figma의 MCP server**와 캔버스에서의 AI 직접 편집이 꼽혔다 ([figma](https://x.com/figma/status/2036434766661296602)). GitHub는 이것이 MCP를 통해 Copilot CLI 등 다른 클라이언트에서도 동작한다고 강조했고 ([github](https://x.com/github/status/2036439431352041911)), Cursor는 팀의 디자인 시스템을 활용해 Figma에서 컴포넌트/프론트엔드를 생성하는 방식으로 즉시 패턴을 확장했다 ([cursor_ai](https://x.com/cursor_ai/status/2036468982560202773)). 이는 **툴 호출(tool-calling)**이 채팅 래퍼(chat wrapper) 기반이 아니라 제품 자체(product-native)에 내장되는 흐름을 보여주는 가장 명확한 예 중 하나다. LangChain도 프레임워크 네이티브 도구 렌더링(tool rendering)과 Slack 네이티브 Fleet 워크플로를 포함해, 커스텀 Slack 봇과 사람 승인용 Inbox까지 같은 방향으로 밀어붙였다 ([LangChain_JS](https://x.com/LangChain_JS/status/2036489812602126539), [LangChain](https://x.com/LangChain/status/2036485694290534716), [hwchase17](https://x.com/hwchase17/status/2036500793663299684)).

### 오픈 에이전트 플랫폼, 벤치마크, RL 환경 스택

- **Hermes Agent v0.4.0이 개인 에이전트 런타임으로 진화**: Nous는 약 일주일 동안 **300개 정도의 PR이 머지(merged)**된 큰 규모의 **Hermes Agent v0.4.0** 업데이트를 공개했다. 여기에는 **OpenAI 호환 Responses API 백엔드**, 백그라운드 자기개선(self-improvement) 루프, 더 폭넓은 메시징 통합, 컨텍스트 압축(context compression) 개선, 그리고 CLI 사용성(ergonomics) 향상 등이 포함됐다 ([Teknium](https://x.com/Teknium/status/2036473305025356023), [Teknium](https://x.com/Teknium/status/2036473984263635394), [NousResearch](https://x.com/NousResearch/status/2036492872044745180)). 기술적으로 특히 흥미로운 기능은, 응답 이후(post-response)에 무엇을 재사용 가능한 메모리/스킬(skills)로 남길지 결정하는 **post-response review agent**다 ([Teknium](https://x.com/Teknium/status/2036473592964387054)). 커뮤니티 반응은 벤치마크 주장보다는 운영상 가치에 더 초점이 맞춰졌는데, 표준 API 뒤에 개인 코딩/운영(ops) 에이전트를 노출하면 Open WebUI, LobeChat, 또는 어떤 OpenAI 호환 클라이언트에서도 쓸 수 있다는 점이다 ([witcheer](https://x.com/witcheer/status/2036481005465338082)).

- **오픈 에이전트 생태계가 환경·스킬·재현 가능한 평가로 수렴**: AI2는 Molmo 2 기반의 오픈소스 브라우저 에이전트 **MolmoWeb**를 **4B 및 8B** 크기로 공개하며, 4개의 웹 에이전트 벤치마크에서 오픈 웨이트(open-weight) SOTA를 주장하고 일부 폐쇄형(proprietary) 에이전트를 넘어섰다고 밝혔다 ([allen_ai](https://x.com/allen_ai/status/2036460260936814915)). 한편 GenReasoning은 **OpenReward**를 출시해, **330+ RL 환경(environments)**, 오토스케일(autoscaled)되는 환경 컴퓨트(environment compute), 그리고 **4.5M+ 고유 RL 태스크**를 하나의 API로 제공한다고 발표했다—에이전틱 RL(agentic RL)에서 자주 빠지는 “환경 컴퓨트” 계층을 겨냥한 것이다 ([GenReasoning](https://x.com/GenReasoning/status/2036412836742590950), [rosstaylor90](https://x.com/rosstaylor90/status/2036418585673990393)). Zhipu는 오피스 자동화, 코딩, 분석을 아우르는 **116개의 실제(real-world) 에이전트 태스크**로 구성된 벤치마크 **ZClawBench**를 기여했다 ([HuggingPapers](https://x.com/HuggingPapers/status/2036424833144139891)). 종합하면, 스택이 “에이전트 데모”에서 **표준화된 환경 서빙(environment serving) + 벤치마크 가능한 태스크 스위트(task suites) + 재사용 가능한 하네스(harnesses)**로 성숙해가는 흐름을 보여준다.

### 추론, 스토리지, 시스템 최적화

- **vLLM과 Transformers가 모두 유의미한 추론/런타임 개선 보고**: vLLM의 GTC 리캡은 여러 시스템 업그레이드를 강조했다. **GPU 네이티브 Triton 커널**을 포함한 **Model Runner V2**, 하이브리드 메모리 할당기, 멀티모달 워크로드에서 **P99 처리량(throughput)을 최대 2.5배** 높일 수 있다는 인코더 프리필(prefill) 분리(disaggregation), 모듈형 MoE 커널 등이 언급됐다 ([vllm_project](https://x.com/vllm_project/status/2036389182579642544), [vllm_project](https://x.com/vllm_project/status/2036540976144253235)). 별도로 Hugging Face/Transformers 측 최적화 작업은, 연속 배칭(continuous batching)과 `torch.compile` 튜닝을 통해 8K 생성(generation)에서 **vLLM 처리량의 95%**에 도달했다고 주장하며, 합성 데이터(synthetic data) 생성 워크로드에서의 기존 격차가 사실상 닫히고 있음을 시사했다 ([remi_or_](https://x.com/remi_or_/status/2036466918618509391)).

- **hf-mount는 주목할 만한 에이전트/데이터 프리미티브**: Hugging Face는 Hub의 데이터셋, 모델, 스토리지 버킷을 로컬 파일시스템으로 마운트(mount)할 수 있는 **hf-mount**를 공개했으며, **5TB FineWeb 슬라이스** 예시도 포함됐다 ([julien_c](https://x.com/julien_c/status/2036436553082286342), [ClementDelangue](https://x.com/ClementDelangue/status/2036452081750409383)). 이는 단순 편의성 이상의 의미가 있는데, 여러 엔지니어는 에이전트가 파일시스템 작업을 유독 잘 수행한다는 점을 지적하며, 마운트된 원격 스토리지가 **에이전트 메모리, 스크래치패드(scratchpads), 팀 아티팩트 저장소, 대규모 코퍼스(corpora)에 대한 지연 접근(lazy access)**의 자연스러운 기반이 된다고 봤다 ([Vtrivedy10](https://x.com/Vtrivedy10/status/2036455087199911972), [victormustar](https://x.com/victormustar/status/2036476453370380416)). 로컬 툴링과 클라우드 스케일 데이터 사이 마찰을 줄인다는 점에서, 오늘 나온 인프라 출시 중 특히 실용적이라는 평가가 나왔다.

- **Moreau와 TurboQuant가 “모델 아래”로 내려가는 최적화 압력을 보여줌**: Optimal Intellect는 CVXPY 팀에서 온 **GPU 네이티브 솔버(solver) Moreau**를 소개하며 기존 도구 대비 수십~수백 배(orders-of-magnitude) 가속을 주장했다 ([opt_intellect](https://x.com/opt_intellect/status/2036485190646735291)). Google Research는 정확도 손실 없이 **메모리를 최소 6배** 줄이고 **최대 8배 속도 향상**을 보고한 KV-cache 압축 알고리즘 **TurboQuant**를 발표했다 ([GoogleResearch](https://x.com/GoogleResearch/status/2036533564158910740)). 공통된 패턴은, 고가치 성능 향상이 더 큰 모델 체크포인트(checkpoints)보다 **런타임(runtime), 메모리(memory), 시스템(systems) 계층**에서 점점 더 많이 나오고 있다는 점이다.

### 보안, 공급망 위험, 에이전트 소프트웨어 가드레일

- **LiteLLM PyPI 침해가 인프라/보안 논의를 지배**: 여러 게시물이 PyPI의 **LiteLLM 1.82.8**이 침해되어, 악성 페이로드가 자격증명을 탈취하고 환경 간 확산을 시도한다고 경고했다 ([hnykda](https://x.com/hnykda/status/2036414330267193815)). [simonw](https://x.com/simonw/status/2036451896970584167)는 이후 해당 패키지가 PyPI에서 격리(quarantined)되었다고 언급했지만, 사건은 곧바로 소프트웨어 공급망의 취약성으로 논의가 확장됐다. [karpathy](https://x.com/karpathy/status/2036487306585268612)는 클라우드 자격증명, SSH 키, Kubernetes 설정, CI/CD 시크릿, 지갑(wallets), 셸 히스토리 등 가능한 탈취 대상과 DSPy 같은 패키지로의 전이 위험까지 포함해 가장 상세한 요약을 제공했다. 시스템 차원에서 가장 중요한 함의는 [DrJimFan](https://x.com/DrJimFan/status/2036494601750716711)이 지적했듯이, 에이전틱(agentic) 세계에서는 **파일시스템 전체가 공격면**이 된다는 점이다—컨텍스트(context)에 들어올 가능성이 있는 어떤 파일이든 벡터(vector)가 될 수 있기 때문이다.

- **“De-vibing”과 권한(permission) 설계가 1급 요구사항으로 부상**: 여러 게시물은 자율 코딩 도구가 **더 강한 셸(shell), 더 나은 기본 권한, 더 적은 광범위 의존성(dependencies)**을 필요로 한다는 새로운 설계 원칙으로 수렴했다. Yuchen은 이번 사건이 `--dangerously-skip-permissions` 같은 워크플로에 “악몽 같은(nightmare fuel)” 재료라고 불렀고 ([Yuchenj_UW](https://x.com/Yuchenj_UW/status/2036505196621361377)), Anthropic의 새로운 **Claude Code auto mode**도 생산성 향상에 대한 기대에도 불구하고 같은 이유로 논쟁이 됐다 ([alexalbert__](https://x.com/alexalbert__/status/2036510206155432293), [kimmonismus](https://x.com/kimmonismus/status/2036510469079404853)). 많은 빌더(builder)가 제시한 실용적 대응은 **최소한의 맞춤 라우팅(bespoke routing)**, 더 타이트한 감사(audited) 의존성, 그리고 더 강한 인간 승인 루프였다.

### 연구소, 조직 이동, 제품 전략 변화

- **AI2 리더십 일부가 Microsoft로 이동; Microsoft AI의 인재 집중 지속**: 가장 뚜렷한 조직 이동으로는 Microsoft가 **AI2 리더십 팀** 일부를 영입했다는 반응이었고, **Ali Farhadi, Hanna Hajishirzi, Ranjay Krishna**가 Microsoft Superintelligence에 합류했다는 언급이 나왔다 ([eliebakouch](https://x.com/eliebakouch/status/2036251901985988800), [NandoDF](https://x.com/NandoDF/status/2036573680810205461)). 기술 커뮤니티의 함의는, 오픈 연구 기관이 하이퍼스케일러(hyperscalers)와의 인재 경쟁 및 프론티어 스케일(frontier-scale) 작업에서 계속 경쟁할 수 있을지에 대한 우려였다 ([stanfordnlp](https://x.com/stanfordnlp/status/2036534819287687383)).

- **OpenAI의 강한 자원 재배치: 재단 10억 달러 지출, Sora 축소, “Spud” 임박**: OpenAI는 재단(Foundation)이 향후 1년간 최소 **10억 달러($1B)**를 집행하며, Wojciech Zaremba가 **AI resilience**를 이끌고 질병, 시민사회, 운영 등 전반에서 추가 채용을 진행한다고 발표했다 ([sama](https://x.com/sama/status/2036488680769241223), [woj_zaremba](https://x.com/woj_zaremba/status/2036483827271655917), [btaylor](https://x.com/btaylor/status/2036474423998554334)). 동시에 OpenAI가 차기 주요 LLM의 초기 개발을 마쳤고, 코드네임 **“Spud”**로 불리며, 컴퓨트를 확보하기 위해 Sora의 앱/제품 풋프린트(footprint)를 줄이고 있다는 보도도 돌았다 ([steph_palazzolo](https://x.com/steph_palazzolo/status/2036534198245134380), [kimmonismus](https://x.com/kimmonismus/status/2036538590654496807)). 엔지니어 관점에서의 신호는 명확하다: OpenAI는 사이드 제품을 줄이는 비용을 치르더라도 **핵심 범용 모델/인프라** 중심으로 제품 포커스를 좁히는 것으로 보인다.

### Top tweets (by engagement)

- **LiteLLM supply-chain compromise**: [karpathy](https://x.com/karpathy/status/2036487306585268612)가 PyPI 공격과 영향 범위를 가장 기술적으로 완결되고 신호가 높은(signal) 형태로 정리했다.
- **Anthropic’s harness engineering post**: [AnthropicAI](https://x.com/AnthropicAI/status/2036481033621623056)는 프론티어 랩들이 장기 실행 에이전트 워크플로를 실제로 어떻게 구조화하는지 보여주는, 오늘의 가장 중요한 엔지니어링 읽을거리 중 하나였다.
- **Figma MCP launch**: [figma](https://x.com/figma/status/2036434766661296602)와 [github](https://x.com/github/status/2036439431352041911)는 에이전트가 프로덕션 디자인 표면에서 직접 행동하는 가장 깔끔한 주류 사례를 보여줬다.
- **OpenAI Foundation $1B commitment**: [sama](https://x.com/sama/status/2036488680769241223)와 [woj_zaremba](https://x.com/woj_zaremba/status/2036483827271655917)는 주요 조직 변화와 안전/회복탄력성(resilience) 전환을 알렸다.
- **Hermes Agent v0.4.0**: [Teknium](https://x.com/Teknium/status/2036473305025356023) / [NousResearch](https://x.com/NousResearch/status/2036492872044745180)는 오늘 가장 큰 오픈 에이전트 런타임 릴리스 중 하나로 두드러졌다.

---

## AI Reddit Recap

### /r/LocalLlama + /r/localLLM

- **[LM Studio may possibly be infected with sophisticated malware.](https://www.reddit.com/r/LocalLLaMA/comments/1s2clw6/lm_studio_may_possibly_be_infected_with/)** (Activity: 1822): Reddit 게시물의 이미지는 Windows Security 경고를 보여주며, 심각한 위협으로 분류된 “Trojan:JS/GlassWorm.ZZ!MTB”가 LM Studio 디렉터리에서 격리되었다고 표시한다. 이로 인해 LM Studio에 악성코드 감염 가능성이 제기됐지만, 이후 LM Studio와 Microsoft는 이를 허위 양성(false positive)으로 확인했으며, Defender의 휴리스틱(heuristic) 정의가 LM Studio의 난독화(obfuscated)된 Electron 번들과 충돌했기 때문일 가능성이 크다고 설명했다. 커뮤니티 논의는 보안 감사(audit)의 중요성과, 악성코드 패턴과 유사해 보일 수 있는 난독화 기법이 갖는 위험을 부각시켰다. 허위 경보였더라도, 데이터 보호를 위한 예방 조치는 권장된다는 분위기였다. 댓글 전반은 과거 유사 사례와 VirusTotal의 낮은 탐지율 등을 근거로 허위 양성이라는 쪽에 공감대가 있었지만, 경고를 유발하고 평가를 어렵게 만드는 LM Studio의 코드 난독화 관행에 대한 비판도 나왔다.
  - LM Studio의 Yags는 해당 경고가 Microsoft에 의해 확인된 허위 양성이며 VirusTotal에서도 더 이상 나타나지 않는다고 밝혔다. 그럼에도 향후 실제 보안 사고를 막기 위해 빌드 머신 스크립트와 환경을 감사(audit)하고 있다고 했다.
  - Denoflore_ai_guy는 Defender의 휴리스틱 업데이트가 난독화된 Electron 번들과 충돌해 허위 양성이 발생했을 가능성이 크다는 상세 분석을 제시했다. 다만 IP 보호를 위한 난독화가 악성코드 기법과 닮아 보일 수 있어 탐지/평가를 복잡하게 만든다는 점을 지적했다.
  - Denoflore_ai_guy는 만약 GlassWorm이 실제로 존재한다면의 완화(mitigation) 절차로 비밀번호 변경, 암호화폐 자금 이동, 악성 Chrome 확장 프로그램 점검 등을 제안했고, 클린 OS 재설치와 자격증명 회전(credential rotation)의 중요성을 강조했다.

- **[[Developing situation] LiteLLM compromised](https://www.reddit.com/r/LocalLLaMA/comments/1s2fch0/developing_situation_litellm_compromised/)** (Activity: 380): **LiteLLM** 라이브러리가 침해(compromised)되었다는 내용으로, [GitHub issue #24512](https://github.com/BerriAI/litellm/issues/24512)에 자세한 설명이 있다. 공격은 `.pth` 파일 취약점을 악용하는데, 이는 import 없이도 인터프리터 시작 시점에 코드를 실행할 수 있어 일반적인 코드 리뷰로 탐지하기 어렵다. 프로덕션 환경에서 `1.82.8`을 사용했다면 즉시 자격증명(credential) 회전을 권고하며, 침해로 인해 민감정보가 노출될 수 있다고 경고한다. 상위 댓글 중 하나는 호스트 시크릿을 격리하기 위해 Docker 컨테이너를 사용하면 일부 위험을 줄일 수 있다고 언급했다. 또 다른 댓글은 `.pth` 트릭이 일반적인 보안 스캔을 우회한다는 점에서 특히 은밀하다고 강조했다.
  - `.pth` 트릭은 import 없이도 인터프리터 시작 시 코드 실행이 가능해 표준 코드 리뷰에서 거의 보이지 않는다는 점이 핵심 위험으로 지적된다. LiteLLM `1.82.8` 또는 `1.82.7`을 실행했다면 잠재적 노출을 가정하고 즉시 자격증명(credential) 회전을 권고한다.
  - LiteLLM을 LLM 접근에 사용하는 도구 Aider는 더 오래된 버전(1.82.3)을 사용해 안전하다고 알려졌고, 문제 버전은 `1.82.8`과 `1.82.7`로 특정되었다. 이는 버전 관리와 보안 모니터링의 중요성을 부각한다.
  - 논의는 Docker 컨테이너의 격리 효과로 이어졌다. 일반적으로 Docker를 “보안 수단”으로 보지는 않지만, 이번 경우에는 호스트 시크릿을 효과적으로 격리해 일부 침해 영향을 완화했다는 경험이 공유됐다.

- **[Litellm 1.82.7 and 1.82.8 on PyPI are compromised, do not update!](https://www.reddit.com/r/LocalLLaMA/comments/1s2c1w4/litellm_1827_and_1828_on_pypi_are_compromised_do/)** (Activity: 441): **LiteLLM**의 `1.82.7` 및 `1.82.8` 버전이 **PyPI**에서 침해되었으며, [blog post](https://futuresearch.ai/blog/litellm-pypi-supply-chain-attack/)에서 확인되었다는 주장이다. 공격은 공급망(supply chain) 침해로 보이며 수천 명의 사용자에게 영향을 줄 수 있다. 악성 버전이 PyPI에 업로드되어, CI/CD 파이프라인이 자동으로 의존성을 업데이트하는 경우 특히 큰 위험이 된다고 경고한다. 또한 **LiteLLM CEO**의 GitHub 계정이 해킹되어 무단 커밋과 저장소 업데이트가 이루어졌고, ‘teampcp owns BerriAI’라고 주장하는 변경이 관찰되었다고 한다. 댓글들은 공급망 공격을 피하기 위해 의존성 버전 고정(pin)과 프로덕션에서의 자동 업데이트 회피가 중요하다고 강조한다. AI 툴링을 겨냥한 이런 공격이 더 자주 일어날 수 있다는 우려도 나온다.
  - GroundbreakingMall54는 의존성 버전 고정(pin)과 프로덕션 환경에서의 자동 업데이트 회피가 매우 중요하다고 강조했다. 침해된 Litellm 버전이 하룻밤 사이 CI/CD에 자동으로 들어갈 수 있었던 위험이 공급망 공격의 전형적 위협이라는 점을 들었다.
  - Gremlation과 __JockY__는 ‘teampcp’가 CEO의 GitHub 계정을 침해해 Litellm에 악성코드를 주입했다고 논의했다. 이 악성코드는 시작 시점에 시크릿을 훔치도록 설계되었으며, `1.82.7`과 `1.82.8`이 문제이고 `<= 1.82.6`은 영향이 없다고 했다.
  - kiwibonga는 침해된 Litellm 버전에 시스템 타임존(timezone)이 Asia/Tehran으로 설정되어 있을 때 파괴적 명령(`rm -rf /`)을 실행하는 페이로드가 포함되어 있다고 지적하며, 공격의 심각성과 표적화 가능성을 강조했다.

- **[I built Fox – a Rust LLM inference engine with 2x Ollama throughput and 72% lower TTFT.](https://www.reddit.com/r/LocalLLM/comments/1s2753y/i_built_fox_a_rust_llm_inference_engine_with_2x/)** (Activity: 212): **Fox**는 **Ollama**의 드롭인(drop-in) 대체재로 설계된 Rust 기반 로컬 LLM 추론(inference) 엔진으로, 성능을 크게 끌어올렸다고 소개된다. `PagedAttention`, 연속 배칭(continuous batching), 프리픽스 캐싱(prefix caching)을 갖추고, `RTX 4060`에서 `Llama-3.2-3B-Instruct-Q4_K_M` 모델을 기준으로 TTFT를 `72%` 낮추고 처리량(throughput)을 `111%` 높였다고 한다. 지연 로딩(lazy loading)과 LRU 퇴출(eviction)을 통해 멀티 모델 서빙을 지원하며, OpenAI 및 Ollama 양쪽과 호환되는 이중 API를 제공한다. 공식 Docker 이미지가 있고, CUDA/Vulkan/Metal/CPU 전반에서 하드웨어 자동 감지를 지원한다. 프로젝트는 베타(beta) 상태이며 Linux + NVIDIA에서 충분히 테스트되었지만 다른 플랫폼/설정에서는 덜 검증되었다고 한다. 접근을 위한 [GitHub](https://github.com/ferrumox/fox) 및 [Docker Hub](https://hub.docker.com/r/ferrumox/fox) 링크가 제공된다. 상위 댓글은 Rust로 vLLM급 기능을 구현한 기술적 성과와, 프리픽스 캐싱 및 연속 배칭이 만든 성능 향상을 인상적으로 평가했다. 반면 프로젝트의 진위 및 보안에 대한 독립 검증과 코드 감사(code audit)가 필요하다는 회의적인 의견도 있었다.
  - No_Strain_2140는 `PagedAttention`, 연속 배칭, 프리픽스 캐싱을 통한 기술적 성과를 강조하며, Q4_K_M에서 4060 기준 `87ms P50` 같은 수치가 가능했던 이유를 설명했다. Ollama의 순차 처리와 대비해 Fox의 멀티턴 KV 재사용이 처리량과 TTFT를 개선한다고 했고, LoRA 핫스왑(hot-swapping) 가능 여부를 물었다.
  - PettyHoe는 데이터 탈취(exfiltration) 위험이 없다는 독립 검증이 필요하다며, AI 생성 문구/댓글처럼 보이는 요소를 근거로 프로젝트의 신뢰성과 보안에 대한 우려를 제기했다.
  - AIDevUK는 대규모 배포에서 중요한 멀티 GPU 환경에서 Fox가 동작하는지 질문하며, 아키텍처와 확장성에 대한 추가 설명 필요성을 시사했다.

- **[RYS II - Repeated layers with Qwen3.5 27B and some hints at a 'Universal Language'](https://www.reddit.com/r/LocalLLaMA/comments/1s1t5ot/rys_ii_repeated_layers_with_qwen35_27b_and_some/)** (Activity: 695): 이 게시물은 **Qwen3.5 27B**로 진행한 실험을 바탕으로, LLM이 정보를 일종의 ‘보편 언어(universal language)’로 처리할 수 있다는 가설을 논의한다. 중간 레이어에서 중국어와 영어 등 서로 다른 언어의 동일 내용이 유사한 잠재 표현(latent representations)을 보인다는 점이 근거로 제시된다. 또한 트랜스포머 스택(transformer stack) 중간의 블록을 반복(repeating blocks)하면 성능이 향상된다는 관찰도 포함된다. 모델은 [Hugging Face](https://huggingface.co/dnhkng/RYS-Qwen3.5-27B-FP8-S)에서 제공되며, 특히 **RYS-Qwen3.5-27B-FP8-XL**을 미세조정(fine-tuning)하면 이 크기대에서 새로운 SOTA가 될 수 있다고 주장한다. 더불어, 중복 레이어를 “복사본(copies)”으로 유지해 VRAM 사용을 최적화하는 작업도 진행 중이라고 한다. 댓글들은 연구 접근의 엄밀함과 함의에 주목했으며, 복잡한 모델 머지(merge)에서 보이는 성능 개선과의 관련성, 오픈소스 튜닝(tuning) 관행에 미칠 영향 등을 논의했다.
  - ArsNeph는 Goliath 120B 같은 셀프 머지(self-merges)에서 보이는 성능 개선을 떠올리며, 모든 모델이 동일하게 이득을 보지는 않는다는 점을 언급했다. VRAM 없는 중복 레이어 추론에 대한 과거 논의와 EXL3에서의 진행 상황도 참고로 들며, 특히 창작 글쓰기(creative writing) 중심 튜너들에게 유용할 수 있다고 했다.
  - Kwigg는 llama2 시절 ‘frankenmerging’ 경험을 되짚으며, 최신 모델의 더 발전한 어텐션(attention) 메커니즘 하에서 이런 기법의 효율이 어떻게 달라질지 의문을 제기했다. 과거 프랭큰 머지는 메모리 비효율적이었다는 점도 언급했다.
  - TomLucidor는 Qwen3.5 언어 테스트를 일본어, 태국어, 프랑스어, 독일어, 이탈리아어 등으로 확장하자고 제안했다. 또한 Nemotron-3(속도, 선형 어텐션)나 Granite-4.0(유사한 크기 다양성) 등과의 비교 분석을 통해 상대적 성능/최적화를 파악할 수 있다고 했다.

- **[FlashAttention-4: 1613 TFLOPs/s, 2.7x faster than Triton, written in Python. What it means for inference.](https://www.reddit.com/r/LocalLLaMA/comments/1s1yw23/flashattention4_1613_tflopss_27x_faster_than/)** (Activity: 364): **FlashAttention-4**는 **Blackwell B200 GPU**에서 `1613 TFLOPs/s`를 달성해 이론 피크(theoretical peak)의 `71%`를 사용했다고 소개된다. **Triton** 대비 `2.1-2.7x` 빠르고 **cuDNN 9.13** 대비 최대 `1.3x` 빠르다고 하며, **NVIDIA의 CuTeDSL**을 사용해 전부 **Python**으로 구현되어 `2.5초`에 컴파일되는 반면 C++은 `55초`가 걸린다고 한다. 이 버전은 **GQA**와 **MQA**를 지원하며 **vLLM 0.17.0**에 통합되었다. 다만 **Hopper + Blackwell**(H100/H800, B200/B100)로 제한되며, **TMEM, 2-CTA MMA, async TMA** 같은 특정 하드웨어 기능 의존성 때문에 그렇다고 설명한다. 글은 소프트맥스(softmax)가 병목이 되고 선택적 리스케일링(selective rescaling)으로 성능을 최적화하는 방식도 다룬다. 댓글들은 ‘Blackwell’이라는 마케팅 명칭과 실제 호환성 사이 괴리에 불만을 표하며, 기대했던 기능이 특정 SM 아키텍처에서만 가능하다는 점을 지적했다.
  - **JockY**는 RTX 6000 Pro가 ‘Blackwell’로 마케팅되지만 FlashAttention-4(FA4)와 NVFP4가 SM100에서만 지원된다는 점을 들어, 제품명과 실제 기능 호환성 간 괴리가 초기 구매자를 오도할 수 있다고 불만을 표했다.
  - **Daemontatox**는 문제의 핵심이 ‘Blackwell’이라는 명칭 자체보다 SM(Streaming Multiprocessor) 아키텍처 차이에 가깝다고 지적했다. RTX 6000 Pro와 DGX 시스템이 ‘Blackwell’로 판매되지만 SM120을 사용해 일부 기대 기능이 빠져 있다는 설명이다.
  - **STNKMyyy**는 FlashAttention-4 같은 고성능 발전이 소비자급 GPU 사용자에게 얼마나 의미가 있을지 의문을 제기하며, 최첨단 연구와 실사용 사이의 간극을 언급했다.

- **[Created a SillyTavern extension that brings NPC's to life in any game](https://www.reddit.com/r/LocalLLaMA/comments/1s2ci9r/created_a_sillytavern_extension_that_brings_npcs/)** (Activity: 499): 이 게시물은 **SillyTavern** 확장(extension)으로, **Cydonia**를 롤플레잉(RP) 모델로, **Qwen 3.5 0.8B**를 게임 마스터로 사용해 어떤 게임이든 NPC 상호작용을 통합하는 방법을 설명한다. 게임 위키를 다운로드해 SillyTavern에 넣어 NPC가 방대한 설정(lore)을 갖고 맥락에 맞게 반응하도록 하고, 게임 파일에서 음성 클로닝(voice cloning)을 사용하며, 플레이어 스탯과 위치 등 게임 상태 정보도 제공한다. RP 모델은 로컬에서 동작해 낮은 지연(latency)과 강한 내러티브 성능을 확보한다. 보조 모델(Qwen 3.5)은 RP 상호작용을 해석해 인게임 액션을 트리거(trigger)함으로써, 대화 입력 없이도 더 현실적인 상호작용을 만든다. 게시물은 게임 응용에서 기본(base) 모델보다 특화된 RP 모델이 효과적이라는 점을 강조한다. 댓글들은 AI가 게임에서 NPC를 다루는 방식의 잠재력에 놀라움을 표하며, 왜 이런 기술이 이미 표준이 아닌지 묻기도 했다.
  - 한 사용자는 `0.8B` 파라미터 모델로 NPC를 구현한 점이 인상적이라며, 프로젝트가 오픈소스인지 질문했다. 이는 가벼운 모델로도 실시간 게임 통합이 가능할 수 있음을 시사한다.

- **[Which local model we running on the overland Jeep fellas?](https://www.reddit.com/r/LocalLLaMA/comments/1s1kyla/which_local_model_we_running_on_the_overland_jeep/)** (Activity: 459): 이미지는 Waymo 자율주행차를 보여주며, 자율주행 시스템의 기술 발전을 부각한다. 논의는 미래 자동차가 `300GB of RAM`을 필요로 할 것이라는 예측에 집중되는데, 이는 더 복잡한 모델과 실시간 데이터 처리, AI 기반 의사결정이 차량에 통합될 것이라는 가정에 기반한 것으로 보인다. 댓글들은 현재 차량이 훨씬 적은 RAM으로도 충분히 동작한다는 점을 들어 이런 예측에 회의적이며, 높은 메모리 요구가 실제로 필요한지 근거를 요구한다.
  - ForsookComparison는 자신의 차량이 `600-mile` 주행에서 `16GB of RAM`으로도 효율적으로 동작했다고 언급하며, `300GB`가 필요하다는 가정을 반박했다. 이는 많은 툴 호출(tool-calls)이 필요한 모델 가정을 전제한 숫자일 수 있다고 제안했다.
  - txdv는 차량에서 `128GB` 업그레이드의 비용 부담을 우려하며, RAM에 `5k`가 드는 수준이면 소비자 가격 민감도를 고려할 때 현실성이 떨어질 수 있다고 말했다. 성능과 비용의 균형 필요성을 강조한다.

- **[The current state of the Chinese LLMs scene](https://www.reddit.com/r/LocalLLaMA/comments/1s1gm9z/the_current_state_of_the_chinese_llms_scene/)** (Activity: 639): 이 글은 중국 LLM 시장의 현황을 정리하며, **ByteDance**, **Alibaba**, **Tencent**, **Baidu** 같은 대형 플레이어가 독점(proprietary) 및 오픈 웨이트 모델을 병행하고 있다고 설명한다. **ByteDance**는 OpenAI에 비견되는 `dola-seed` 및 비디오 생성 `Seedance T2V`로 선두를 달리고, **Alibaba**는 특히 소형 오픈 웨이트 모델과 T2I/T2V에서 강점을 가진다고 한다. **Tencent**의 `Hunyuan`은 3D 메쉬 생성에 강하지만 최신 버전은 오픈소스가 아니며, **Baidu**의 `Ernie`는 사용이 적고 자율주행 중심이라고 요약한다. 그 외 **Xiaomi**(`Mimo V2 Pro`), **Ant Group**(`Ling 2.5 1T`), **Meituan**(`LongCat-Flash-Chat`, 동적 MoE) 등이 언급되며, **Deepseek**의 MLA/DSA 같은 어텐션 혁신도 강조된다. **Zhipu**와 **Minimax** 같은 ‘Six AI Small Tigers’는 대형 오픈 웨이트 모델 공개로 주목을 끌고, 정부 지원 조직(BAAI, Shanghai AI Lab)도 기여하지만 평판은 엇갈린다고 한다. 댓글들은 중국의 오픈 웨이트 릴리스 속도가 미국 대비 매우 빠르다는 점을 지적했고, Tencent의 게임 개발 특화 모델 투자도 언급됐다.
  - Tencent는 3D 메쉬 생성용 Hunyuan 3.1, 텍스트-투-애니메이션 HY-Motion 등 게임 개발 특화 모델에 적극 투자하며 SOTA라고 평가된다. 초기에는 브랜드 인지도 확보를 위해 오픈소스화했다가 상업성 확보 이후 폐쇄형으로 전환하는 패턴이 언급됐다.
  - 최근 7일 OpenRouter 토큰 사용량 기준 인기 모델 목록에서 Xiaomi MiMo-V2-Pro가 1.77조 토큰으로 1위를 차지하는 등 중국 모델의 존재감이 크다는 내용이 공유됐다. 서구권 랩은 소수만 순위에 들었다는 점도 강조됐다.
  - ByteDance는 AI에서 큰 기여를 하고도 Hugging Face에 오픈 웨이트가 없다는 점이 확인되며, 다른 중국 랩들이 잦은 오픈 웨이트 공개로 경쟁을 가속하는 것과 대비된다는 의견이 나왔다.

- **[So cursor admits that Kimi K2.5 is the best open source model](https://www.reddit.com/r/LocalLLaMA/comments/1s19ik2/so_cursor_admits_that_kimi_k25_is_the_best_open/)** (Activity: 629): 이미지에는 **Aman Sanger**의 트윗이 있으며, 기반(base) 모델 평가에서 퍼플렉시티(perplexity) 기반 비교를 통해 **Kimi K2.5**가 가장 강력했다고 언급한다. 모델의 강점은 추가 사전학습(continued pre-training)과 고컴퓨트 강화학습(high-compute RL)로 **Composer-2** 모델 역량을 강화한 데 있다고 설명한다. 또한 블로그에서 Kimi 기반 모델을 언급하지 못한 점을 인정하며, 향후 수정하겠다고 한다. 댓글 중 일부는 퍼플렉시티 기반 평가가 사전(dictionary) 크기 등 요인에 영향을 받아 모델 간 비교로는 왜곡될 수 있다고 비판했다. 또 Fireworks의 K2.5 훈련 주장에 대해서도 Workshop Labs의 보고를 인용해, Fireworks 코드가 하이퍼스케일(hyperscale) 훈련에 최적화되어 있지 않다는 회의가 제기됐다.
  - Kimi K2.5가 “최고 오픈소스”라는 주장은 평가 방법론, 특히 퍼플렉시티 점수의 한계(사전 크기 등 영향) 때문에 의심받는다는 의견이 있었다.
  - Fireworks의 훈련 주장에 대해 Workshop Labs가 Fireworks의 K2 훈련 코드가 하이퍼스케일 최적화가 부족하며 HF Transformers 4.x 같은 기본 구현 대비 약간 나은 수준이라고 했다는 보고가 공유되며 회의론이 나왔다.
  - Kimi K2.5가 최고의 ‘기반 모델’이라는 주장에 대해, 선형(linear) 어텐션이 아닌 표준 어텐션과 큰 파라미터 규모가 성능에 크게 기여했을 가능성이 언급됐다.

- **[China's open-source dominance threatens US AI lead, US advisory body warns](https://www.reddit.com/r/LocalLLaMA/comments/1s1kmch/chinas_opensource_dominance_threatens_us_ai_lead/)** (Activity: 922): 미국 자문기구(advisory body)가 중국의 오픈소스 AI 영향력 확대가 미국의 AI 리더십을 위협할 수 있다고 경고했다는 내용이다. 보고서는 중국의 전략적 투자와 오픈소스 모델 발전이 경쟁력을 키우고 있으며, 미국이 경쟁력을 유지하려면 오픈소스 이니셔티브를 강화해야 한다고 제안한다. 댓글에서는 중국 모델이 더 저렴하고 효율적이며 오픈 웨이트에서 우위라는 주장과 함께, Opus, GPT-5.4, Gemini 3.1 Pro 같은 미국 모델이 “제대로 작동하지 않는다(dysfunctional)”는 비판이 제기됐다. 또한 권위주의 체제라는 비판에도 불구하고 중국이 AI 자유에 기여하고 있다는 아이러니를 언급하는 의견도 있었다.
  - **EffectiveCeilingFan**는 중국 모델이 더 저렴하면서 오픈 웨이트에서 성능도 앞선다고 주장하며, Opus, GPT-5.4, Gemini 3.1 Pro 등 미국 모델의 성능과 완성도에 대한 불만을 표했다.
  - **Lissanro**는 오픈 연구(open research)의 중요성을 강조하며 ‘Attention is All You Need’ 같은 공개 연구가 기반이 되었음을 들었다. Kimi K2.5 같은 모델도 DeepSeek 등에서 공유한 연구 덕분에 가능해졌다는 의견과 함께, Cursor AI 같은 기업이 제품에 Kimi K2.5를 채택하는 사례를 언급했다.
  - **Global_Estimate7021**는 중국(87%)과 미국(32%)의 AI 수용 격차, 중국의 연구 출판량 우위, 더 저렴한 전력과 풀뿌리 AI 문해력(literacy) 강화 등 여러 요인을 들어 미국이 뒤처질 수 있는 이유를 상세히 분석했다.

### Less Technical Subreddits

대상 서브레딧: /r/Singularity, /r/Oobabooga, /r/MachineLearning, /r/OpenAI, /r/ClaudeAI, /r/StableDiffusion, /r/ChatGPT, /r/ChatGPTCoding, /r/aivideo, /r/aivideo

- **[The man who originally coined the acronym "AGI" now says that we’ve achieved it exactly as he envisioned.](https://www.reddit.com/r/singularity/comments/1s2cfrb/the_man_who_originally_coined_the_acronym_agi_now/)** (Activity: 926): 이미지는 **Mark Gubrud**의 트윗으로, 자신이 “AGI”(Artificial General Intelligence)라는 약어를 만들었으며 자신이 구상한 방식대로 AGI가 달성됐다고 주장한다. 그는 현재 모델들이 언어와 일반 지식에서 “고인간 수준(high-human level)”으로 수행하면서 훨씬 더 빠르다고 말한다. 다만 ‘artificial general intelligence’라는 용어는 **1989년**에도 **G. Simons**에게서 확인된다는 기록이 있어, 그가 실제로 “창안(coined)”했는지에 대한 논쟁이 있다. Gubrud의 AGI 정의는 인간 뇌 복잡도와 속도에 맞먹거나 능가하고, 다양한 작업(산업·군사 운영 포함)에서 일반 지식을 바탕으로 추론할 수 있는 시스템을 가리킨다. 댓글에서는 Gubrud가 용어 역사를 잘못 기억했을 가능성과, OED(옥스퍼드 영어사전)가 가장 이른 용례를 1989년 G. Simons로 본다는 점이 언급되며 회의가 이어졌다.
  - ‘artificial general intelligence’라는 용어는 1989년까지 거슬러 올라가며, Oxford English Dictionary는 G. Simons를 가장 이른 출처로 든다. 반면 Gubrud는 과학 문헌에서 용어를 대중화(popularizing)한 인물로 더 자주 언급된다는 의견이 있다.
  - “AGI를 만든 사람”의 정의는 인간 뇌 수준의 복잡도와 속도, 그리고 산업·군사 운영까지 포함한 다양한 도메인에서 일반 지식으로 작업을 수행하는 폭넓은 지능을 뜻한다. 댓글들은 현 시스템이 이 기준을 충족하는지에 대해 회의적이었다.
  - 재귀적 자기개선(recursive self-improvement)이 없는 AGI의 의미를 두고도 논쟁이 있었고, 그런 변곡점이 없다면 기술적 특이점(singularity)도 기대했던 형태로 오지 않는 것 아니냐는 회의가 제기됐다.

- **[Jensen Huang (NVIDIA) claims AGI has been achieved](https://www.reddit.com/r/singularity/comments/1s1mix1/jensen_huang_nvidia_claims_agi_has_been_achieved/)** (Activity: 2562): 최근 인터뷰에서 **NVIDIA** CEO **Jensen Huang**이 AGI가 달성되었다고 주장해 논쟁을 불러일으켰다. [YouTube](https://youtu.be/vif8NQcjVf0?si=WhXfzQ3-Dk5ZvEpo)에 있는 인터뷰는 이 주장에 대한 구체적 기술 근거가 부족하다는 지적이 나오며, 전문가들 사이에서 회의가 커졌다. Huang의 발언은 AI 기술에 크게 투자한 NVIDIA의 입장상 마케팅 동기가 섞였을 수 있다는 해석도 나온다. 상위 댓글은 사업가의 “자사 제품” 관련 발언에 대한 불신을 드러내며, 사실이라기보다 홍보에 가깝다는 시각을 제시했다.
  - Sweaty_Rub4322는 AGI 논쟁의 핵심 문제가 AGI의 보편적 정의가 없다는 점이라고 지적했다. 이 모호성 때문에 학계와 산업 모두 “달성 여부”를 평가하기 어렵고, 의미 있는 논의를 위해 표준화된 정의가 필요하다는 주장이다.

- **[Claude can now use your computer](https://www.reddit.com/r/ClaudeAI/comments/1s1ujv6/claude_can_now_use_your_computer/)** (Activity: 2106): **Anthropic**의 **Claude**가 **Claude Cowork** 및 **Claude Code**를 통해 사용자의 컴퓨터를 조작하며 작업을 수행할 수 있게 되었다는 내용이다. 이 기능은 리서치 프리뷰(research preview)로 제공되며, Claude가 앱을 열고 브라우저를 탐색하고 스프레드시트를 다루는 등 사람이 하던 작업을 자동화할 수 있다. Slack·캘린더 같은 연결 앱을 우선 활용하지만, 권한(permitted)이 주어지면 화면의 앱을 직접 조작할 수도 있다. macOS용 Pro 및 Max 티어에서 사용 가능하며, 업데이트된 데스크톱 앱을 모바일 기기와 페어링해야 한다. 자세한 내용은 [here](https://claude.com/product/cowork#dispatch-and-computer-use)에서 확인할 수 있다. 댓글에서는 AI가 컴퓨터를 제어하는 데 따른 보안 리스크와 일자리 대체에 대한 우려가 제기됐고, OpenAI 같은 경쟁사에 대한 Anthropic의 대응 전략으로 보는 시각도 있었다.
  - 핵심 우려로는 Claude가 사용자 컴퓨터에 접근함으로써 데이터가 무단 접근·조작될 수 있는 보안 위험이 지적됐다. 빠른 기능 출시가 취약점 검증을 충분히 거치지 못하게 할 수 있다는 걱정도 덧붙었다.
  - 일부는 이를 OpenAI의 발전에 대응하려는 Anthropic의 전략적 움직임으로 해석했다. 코딩 모델 경쟁에서 동등성(parity) 혹은 우위를 확보하려는 의도라는 시각이다.
  - 기능이 복잡한 작업까지 대체할수록 고용에 미칠 영향에 대한 우려도 있었다. 특히 반복적 인지 작업에 의존하는 직무에서 영향이 클 수 있다는 의견이다.

- **[Claude Code can now /dream](https://www.reddit.com/r/ClaudeCode/comments/1s2ci4f/claude_code_can_now_dream/)** (Activity: 1953): Claude Code가 **Auto Dream**이라는 기능을 도입했는데, 이는 인간의 REM 수면처럼 에이전트의 메모리 관리(memory management)를 개선하기 위한 것이다. 과거 세션 전사(transcripts)를 검토해 관련 정보를 식별하고, 오래되었거나 모순되는 데이터를 가지치기(prune)하며, 이를 정리된 파일로 통합(consolidate)한다. 이 작업은 백그라운드에서 실행되며, 마지막 통합 이후 24시간이 지나고 5회 세션이 더 진행된 뒤 트리거(trigger)되고, 락 파일(lock file)로 충돌을 방지한다. 이는 컨텍스트 창(context window)을 단순히 키우는 대신, 메모리를 더 지능적으로 관리해 성능을 높이려는 접근으로 설명된다. 댓글에서는 토큰(token) 낭비를 우려하거나 자체 홍보 톤을 비판하는 회의도 있었고, 반대로 재미있는 확장 아이디어를 제안하는 반응도 있었다.
  - AutoDream은 Auto Memory 기능(v2.1.59)이 만든 메모리 비대(bloat) 문제를 완화하기 위한 ‘수면 사이클’로 설명된다. Auto Memory는 프로젝트 노트를 쌓아두지만 시간이 지나면 노이즈와 모순이 늘어나 성능이 떨어질 수 있으며, AutoDream이 이를 주기적으로 정리한다.
  - AutoDream은 **Orient**, **Gather signal**, **Consolidate**, **Prune & index**의 4단계로 동작한다. 24시간 이상 + 5회 이상 세션이 지난 뒤에만 실행돼 현재 작업을 방해하지 않도록 설계됐다고 한다.
  - AutoDream은 프로젝트 코드에는 읽기 전용(read-only)으로 동작하며, 실제 코드베이스가 아니라 메모리 파일만 수정해 안전성을 확보한다고 설명한다. 전체 시스템 프롬프트(system prompt)는 GitHub의 `agent-prompt-dream-memory-consolidation.md`에 공개되어 있다고 한다.

- **[Sora is officially shutting down.](https://www.reddit.com/r/OpenAI/comments/1s2oyl3/sora_is_officially_shutting_down/)** (Activity: 854): 이미지는 X.com의 Sora 앱 공식 계정 공지 스크린샷으로, Sora가 종료(shutting down)된다고 알린다. 공지는 참여에 대한 감사와 함께, 앱과 API 종료 타임라인에 대한 추가 안내를 약속한다. 댓글에서는 저작권 처리 방식 변화로 비용이 증가하고 참여가 줄어 지속 가능하지 않았다는 추측과, 초기 혁신성에도 불구하고 결국 부담이 됐다는 평가가 나온다.
  - Chasemania는 Sora가 높은 운영 비용과 낮은 참여 때문에 지속 가능하지 않았다고 지적했다. 저작권을 지나치게 엄격하게 준수하려 한 시도가 사용자 흥미를 떨어뜨려, 플랫폼이 자산이 아닌 부담이 되었다는 주장이다.
  - 저작권 준수와 사용자 참여의 균형이 어렵다는 논의가 이어졌고, 엄격한 규제가 사용자 경험을 악화시켜 수익성을 해쳤을 가능성이 언급됐다.
  - 초기 성공 이후 급격한 하락을 사례로 들며, 고비용·엄격한 저작권 준수 요구를 가진 플랫폼을 유지하는 어려움이 강조됐다.

- **[Sora is officially shutting down.](https://www.reddit.com/r/ChatGPT/comments/1s2oxnu/sora_is_officially_shutting_down/)** (Activity: 1429): 이미지는 Sora 팀의 소셜 공지로, Sora 앱 종료를 알리며 커뮤니티에 감사를 전하고, 앱/API 타임라인과 사용자가 작업물을 보존하는 방법에 대한 추가 안내를 약속한다. 이는 사용자 혼선을 줄이기 위한 계획된 종료(shutdown) 절차로 해석된다. 댓글에서는 제품의 영향력과 사용자 기반에 대한 회의가 있으며, 재무적으로 지속 가능하지 않아 보였는데도 생각보다 오래 갔다는 반응도 있었다.

---

## AI Discord Recap

### AINews

- **공지**: Discord가 오늘 접근을 차단해 현재 형태로는 다시 제공하지 않으며, 대신 새로운 AINews를 곧 출시할 예정이라고 밝혔다. 끝까지 읽어준 독자들에게 감사 인사를 전하며 “좋은 여정이었다”라고 마무리했다.
