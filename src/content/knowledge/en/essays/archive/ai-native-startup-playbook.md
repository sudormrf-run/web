---
title: The AI-Native Startup Playbook
description: A markdown file is an employee — a new way to design companies, drawn from Tom Blomfield's YC talk and the Garry Tan interview
tags: [ai-native, startup, playbook, agents, yc, presentation]
category: essays
order: 3
thumbnail: "https://img.youtube.com/vi/Z3JyAqh4ixg/mqdefault.jpg"

# Authorship
createdBy:
  name: 박종현
  email: jhpark@sudormrf.run
lastEditedBy:
  name: 박종현
  email: jhpark@sudormrf.run
lastEditedAt: 2026-08-17
---

> **"A markdown file is an employee."**
> An employee that does the job perfectly, every single time, as many times as you want. (Garry Tan)

The person behind this provocative line is **Garry Tan** — President and CEO of Y Combinator. He started his career at Microsoft (Windows Mobile) in 2003, co-founded Posterous, then founded Initialized Capital and became an early investor in Coinbase and Instacart. He is also the person who turned down an early spot at Palantir — with a check from Peter Thiel on the table — a decision he calls his own "$2–4 billion mistake." Today he runs YC while still writing code, open-sourcing his own tools (gstack, garyslist).

What he did recently is telling. Once YC started recording every office hour, he mined months of recordings for **the rhetorical patterns partners use to step-function a founder's ambition**, and distilled them into a "perfect advice script" as a markdown file. Then he asked Claude to *"reduce the strength and intensity of this prompt by 90%"* — and open-sourced that. The 100% version you only get by doing YC: "We can't give away the crown jewels for free. The first one's free."

<div class="author-note">

### Author's note

I recently heard a matching case while guesting on another podcast: a team that **collects the work trajectory (logs and history) of a departing employee, and has an agent take over the job by following that trajectory**. The person leaves; the way they worked stays with the company. It is exactly the same pattern as YC turning office hours into a prompt — the moment tacit knowledge becomes an artifact, it becomes a replicable asset.

</div>

This document weaves two videos, released two days apart, into a single "startup playbook."

---

## 1. Two videos — theory and practice

| | Video 1 · Theory | Video 2 · Practice |
|---|---|---|
| Title | Building And Structuring An AI Native Company | Garry Tan: New Rules for Founders |
| Channel | YC Root Access (2026-08-14) | a16z (2026-08-12) |
| Speaker | Tom Blomfield (YC GP, Monzo founder) | Garry Tan × Anish Acharya (a16z GP) |
| Format | Startup School Paris talk, 21 min | Studio interview, 51 min |

**Tom Blomfield** lays out the frame — design the company from the ground up as a set of self-improving AI loops instead of a human hierarchy — and the **Garry Tan** interview unpacks the same picture through his own experiments and founder stories. Both draw on the same YC office-hours recordings, which is a fun connection in itself.

<div class="video-embed">
<iframe width="100%" height="400" src="https://www.youtube.com/embed/Z3JyAqh4ixg" title="Building And Structuring An AI Native Company" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

<div class="video-embed">
<iframe width="100%" height="400" src="https://www.youtube.com/embed/fsTtKywmWlU" title="Garry Tan: New Rules for Founders" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

---

## 2. From hierarchy to loops

Blomfield opens with the Roman legion: eight soldiers sharing a tent (a contubernium), then centuries, cohorts, the legion — a structure built to pass information up and down through human hands.

![Roman legion structure](/assets/essays/ai-native-startup-playbook/01-legion-org-chart.jpg)
<p align="center"><em>The Roman legion hierarchy — an org chart from 2,000 years ago (source: Y Combinator)</em></p>

Two thousand years later, big-tech org charts are still essentially the same.

![Big tech org chart satire](/assets/essays/ai-native-startup-playbook/02-org-structures-grid.jpg)
<p align="center"><em>The famous satirical org charts of Amazon, Google, Facebook, Microsoft, Apple, Oracle (drawing by Manu Cornet; source: Y Combinator)</em></p>

The whole talk starts from a Jack Dorsey line:

![Jack Dorsey quote](/assets/essays/ai-native-startup-playbook/03-dorsey-quote.jpg)
<p align="center"><em>"There's an underlying assumption that organizations have to be hierarchically organized with humans as the coordination mechanism." (source: Y Combinator)</em></p>

> AI breaks exactly this assumption. Humans no longer need to be the bottleneck for routing information.

Most companies today use AI as Q&A bots and copilots. With a human as the gate, **an agent that stalls at 3 a.m. waits until morning.** Blomfield reframes the goal from "productivity" to "capability."

![Not productivity, rather capability](/assets/essays/ai-native-startup-playbook/04-capability-not-productivity.jpg)
<p align="center"><em>Not 20% more productive engineers — one person more powerful than old structures, and a company you can query end to end (source: Y Combinator)</em></p>

---

## 3. Anatomy of an AI loop

> "AI is not something you bolt onto the side of a company. The company itself has to be built with self-improving AI loops from the ground up." (Blomfield, 5:30)

![An AI Loop](/assets/essays/ai-native-startup-playbook/06-an-ai-loop.jpg)
<p align="center"><em>The five layers of a loop: Sensors/Data → Policy → Tools → Quality Gates → Learning (source: Y Combinator)</em></p>

- **Sensors/Data**: product telemetry, inbound messages, billing signals, code changes — data flowing in from the real world
- **Policy layer**: the rules constraining the AI — what needs approval, what must be logged
- **Tool layer**: internal APIs, email, billing updates
- **Quality gates**: should be a **second adversarial LLM**, not a human (a code-review model, prompt-injection checks)
- **Learning mechanism**: deploy → observe the real-world impact → feed it back

> "If you can do this entire loop without a human, your product starts improving itself while you're sleeping." (7:00)

### YC's data agent — the "head explosion moment"

YC has data on 7,000 companies and 20,000 founders, and had a natural-language-to-SQL query agent. Useful — but roughly "a tool that makes a data analyst 20–30% more productive." The real shift came from adding **a second agent that runs overnight**: it reviews every query humans ran during the day, sorts successes from failures, and files pull requests overnight to fix the failures. **The query that failed yesterday works today.** Blomfield calls it his "head explosion moment."

The same pattern repeats:

- **Office hours → a living user manual**: after years of procrastinating on rewriting a 500-page internal manual, YC mined 3–4,000 hours of recorded office hours for the advice actually given, and let the manual rewrite itself. It can recall the wisdom of 16 partners perfectly — advice that is arguably superhuman
- **Investor call simulation**: hundreds of companies meet the same investors, so you can predict what a given partner will ask and rehearse the meeting

Then you give the loop a VM — tools, persistent file storage, code execution:

![An AI Loop + VM](/assets/essays/ai-native-startup-playbook/07-ai-loop-plus-vm.jpg)
<p align="center"><em>Loop + VM = an AI employee. OpenClaw and Hermes are the prototypes (source: Y Combinator)</em></p>

---

## 4. The practice playbook — Garry Tan's new rules

In the interview, Garry Tan translates the same picture into founder language.

**1) One person becomes 400 (14:50)**
With vibe coding and agentic coding, "any given person could be 400 of that person." Founders should be more ambitious than ever.

**2) The end of pure SaaS (15:20)**
"It's not totally clear a pure per-seat SaaS thing will exist in another five or ten years. It's fine as a wedge — but you'd better leap to a moat around data or network effects."

**3) Skillify — freeze work into skill files (23:20~)**
Pull off some feat of strength once, then freeze it into **markdown + code + tests** and put it on a cron job. Any future failure is just a bug fix — and then it's there forever. Apply the loop to sales, marketing, support, everything. This is where the line lands: **"A markdown file is an employee."**

**4) Token maxing — live in 2028 today (23:03)**
The frontier labs ration compute for cost reasons. Running agents at full strength costs $50–100k a year — but "you get to live in 2028 today." For a CEO or founder, it's a rational spend.

**5) The results (26:00)**
"There are companies today going from zero to $15M ARR in about four months with two or three people, hundreds of agents, a few hundred skill files."

**6) Where it breaks (26:40)**
Once markdown accumulates, you need **provenance and conflict management** — when two facts collide, which one wins? Is a cleanup cron sweeping through? That instinct comes from experience, which is why founders in their 30s and 40s who have "been around the block" are advantaged again.

**7) Pedro's meeting-transcript agent (28:09)**
Brex CEO Pedro Franceschi has an agent read the transcripts of **meetings he isn't in**, surfacing conflicts two levels down. He walks into a meeting with three weeks of perfect context, says "actually, you're right — we're doing it your way," and leaves.

> The fix for the old failure mode of "the business becomes too big to fit in one person's head." A human holds 7±2 things; a human plus an agent holds three Harry Potter books. (30:40)

---

## 5. The company brain and the place of humans

![Company Brain](/assets/essays/ai-native-startup-playbook/08-company-brain.jpg)
<p align="center"><em>The company brain — data and loops at the center, people at the edge (source: Y Combinator)</em></p>

> "In a conventional company, intelligence is spread throughout the people and the hierarchy routes it. In this new model, intelligence lives in the system." (Blomfield, 14:10)

Humans don't disappear — they move **to the edge**: the places the model can't yet go. Intuition, trust, the feeling in a room, ethical judgment, the high-stakes calls where being wrong is existential. Humans do the sales calls and convince the investors; AI routes the information.

![Burn tokens, not headcount](/assets/essays/ai-native-startup-playbook/10-burn-tokens-not-headcount.jpg)
<p align="center"><em>"If your API bill doesn't make you uncomfortable, you're not doing enough" (source: Y Combinator)</em></p>

![No middle mgmt](/assets/essays/ai-native-startup-playbook/11-no-middle-mgmt.jpg)
<p align="center"><em>Two roles remain: the IC (comes to meetings with prototypes, not decks) and the DRI (one person who owns the outcome) (source: Y Combinator)</em></p>

Garry Tan's war story is the footnote to this slide: back on Windows Mobile, the Windows team across the highway wouldn't answer emails or fix bugs — so his PM mentor **walked over with a baseball bat** (34:40). Seven levels of hierarchy sat between them. Hence "the mid level of bureaucracy should be agents," and his re-reading of the Toyota Production System — the person working the line should be allowed to change the line.

The practical checklist:

![Build a self-improving company](/assets/essays/ai-native-startup-playbook/12-build-self-improving-company.jpg)
<p align="center"><em>Make the org legible to AI: record and transcribe every meeting, ban DMs, every action leaves an artifact (source: Y Combinator)</em></p>

> "Every action needs to create an artifact. Otherwise, it basically didn't happen to the AI." (18:45)

---

## 6. The counterweight — everything is slower than you think

Garry Tan attaches the counterweight himself (39:08~).

> "All the bureaucracy and the slowness of every company and institution in the world — that is actually the **white pill**. These things are going to be slower than you think. It's going to be 20 years, and that's not a bad thing."

- Incumbents' structural moats are real. "A startup to replace all of them? They won't."
- The next computer is voice and memory — a benevolent thing that "knows your hopes, fears, and desires" and relentlessly tries to help
- **2027 will be the harness wars**: it's a cost problem today, but when frontier-grade compute drops to $50–100 in two or three years, the browser-wars-scale fight for a billion consumers begins
- "This is the worst it will ever be." (31:20)

---

## 7. Key quotes

| Timestamp | Speaker | Quote |
|---|---|---|
| v2 24:00 | Garry Tan | "A markdown file is an employee" |
| v1 03:00 | Jack Dorsey | The assumption that organizations must be human-coordinated hierarchies — AI breaks it |
| v1 05:30 | Blomfield | "AI is not something you bolt onto the side of a company" |
| v1 07:00 | Blomfield | "Your product starts improving itself while you're sleeping" |
| v1 08:30 | Blomfield | The overnight agent that files PRs fixing yesterday's failures — "head explosion moment" |
| v1 14:10 | Blomfield | "In this new model, intelligence lives in the system" |
| v1 17:25 | Slide | "Burn tokens, not headcount" |
| v1 20:45 | Blomfield | "If you were starting this company today, would you build it in this shape?" |
| v2 14:50 | Garry Tan | "Any given person could be 400 of that person" |
| v2 23:20 | Garry Tan | "You get to live in 2028 today" (token maxing) |
| v2 26:00 | Garry Tan | Zero to $15M ARR in four months, with 2–3 people and hundreds of agents |
| v2 29:40 | Garry Tan | Pedro walks in with perfect context from meetings he never attended: "you're right — we're doing it your way" |
| v2 31:20 | Garry Tan | "This is the worst it will ever be" |
| v2 40:00 | Garry Tan | "Everything is slower than you think — that is actually the white pill. It's going to be 20 years, and that's a good thing" |
| v2 42:40 | Garry Tan | "2027 will be the harness wars" |

---

## 8. Remaining questions

- **What are our AI loops?** Is the quality gate still a human — could it be a second model?
- **The API bill test.** Is our token spend at an "uncomfortable" level? How far can token maxing be justified?
- **What do we skillify next?** List the work already frozen into markdown skills versus the "glue" still done by hand.
- **How much of 1000x/400x is rhetoric?** What multiple do we actually feel?
- **The cost of legibility.** Recording every meeting and banning DMs works for a small team — but what about the cultural cost of surveillance and chilled candor?
- **The temperature gap between the two speakers.** Blomfield says "possible by the end of this year"; Garry says "20 years is the white pill" — at which layer (technology / organization / society) is each of them right?
- **Turn the closing question back on ourselves.**

![If you were starting this company today](/assets/essays/ai-native-startup-playbook/13-would-you-build-it-this-shape.jpg)
<p align="center"><em>"If you were starting this company today, would you build it in this shape?" (source: Y Combinator)</em></p>

---

## See also

- [How to Build a Company From Scratch With AI](/archive/yc-ai-native-company) — video notes on the April version of this talk, which Blomfield says he updated for Paris
- [Every's 2026 AI-Native Strategy](/archive/every-ai-native-strategy) — a company executing on the same thesis
- [Andrej Karpathy's autoresearch](/podcasts/karpathy-autoresearch) — the experiment Blomfield cites in the talk (9:30): an agent that edits its own training code and hill-climbs, as an automated research loop
- [Physical AI is Coming](physical-ai-is-coming) — a presentation archive in the same format
