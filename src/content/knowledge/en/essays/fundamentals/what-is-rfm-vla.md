---
title: What are RFM & VLA?
description: Concepts of Robot Foundation Models and Vision-Language-Action models, the evolution from LLM to VLA, from Specialist to Generalist
tags: [rfm, vla, lbm, foundation-model, llm, world-knowledge, specialist, generalist, basics]
category: essays
order: 3
related:
  - specialist-to-generalist.md
  - scaling-problem.md

# Authorship
createdBy:
  name: Jong Hyun Park
  email: jhpark@sudormrf.run
lastEditedBy:
  name: Jong Hyun Park
  email: jhpark@sudormrf.run
lastEditedAt: 2026-01-21
---

The emergence of VLA (Vision-Language-Action) models has brought the keyword "Physical AI" to prominence.

RFM (Robot Foundation Model), LBM (Large Behavior Model), VLA... There are many similar yet different terms. Let's clarify them one by one.

---

## VLA: The Evolution from LLM to VLA

To understand VLA, we first need to trace the development of LLMs that are transforming our world. Let's examine the progression from LLM to VLM, and then to VLA.

### LLM (Large Language Model)

LLM, most famous through GPT, is literally a language model. Text goes in, text comes out. We typically use it in conversational form like ChatGPT.

### VLM (Vision Language Model)

Starting with GPT-4V in 2023, these models began recognizing images. **They got eyes.** This is VLM (Vision Language Model).

Now with Audio included, voice conversations are possible. They got ears and a mouth to listen and speak. That's why we call them Multimodal Models.

### VLA (Vision-Language-Action)

**VLA is a model that sees with Vision, receives commands through Language, and performs Actions. Just like humans.**

Today's VLAs are built by adding eyes and actions to LLMs.

```
LLM → VLM → VLA
Language → Language + Vision → Language + Vision + Action
```

HuggingFace's Smol series illustrates this evolution exactly:

<div style="display: flex; gap: 1rem; align-items: flex-end; flex-wrap: wrap;">
  <div style="flex: 1; min-width: 150px; text-align: center;">
    <img src="/assets/models/smolvla/smollm2.png" alt="SmolLM2" style="width: 100%; border-radius: 8px;" />
    <p><em>1. SmolLM2 — LLM</em></p>
  </div>
  <div style="flex: 1; min-width: 150px; text-align: center;">
    <img src="/assets/models/smolvla/smolvlm2.png" alt="SmolVLM2" style="width: 100%; border-radius: 8px;" />
    <p><em>2. SmolVLM2 — VLM</em></p>
  </div>
  <div style="flex: 1; min-width: 150px; text-align: center;">
    <img src="/assets/models/smolvla/smolvla.png" alt="SmolVLA" style="width: 100%; border-radius: 8px;" />
    <p><em>3. <a href="../../models/smolvla">SmolVLA</a> — VLA</em></p>
  </div>
</div>

Recently, tactile sensing has also been added, leading to VTLA (Vision Tactile Language Action) models.

Everyone knows LLMs are smart. Now that intelligence can be used to control robots. This has created expectations that robots will be able to do things that were impossible before. The evolution from LLM to VLM to VLA is not just about adding modalities—it represents a paradigm shift that opens possibilities for AI to interact with the physical world.

---

## Terminology: VLA, LBM, RFM

Various terms related to Physical AI are often used interchangeably. Let's clarify the meaning and relationship of each term.

| Term | Full Name | Description |
|------|-----------|-------------|
| **VLA** | Vision-Language-Action | Model integrating vision + language + action |
| **LBM** | Large Behavior Model | Action expressed as Behavior. Essentially the same as VLA |
| **RFM** | Robot Foundation Model | Foundation Model for robots, like how LLM became a Foundation Model |

*Table: Key Physical AI terminology — meanings and relationships of VLA, LBM, and RFM*

### LBM (Large Behavior Model)

Since VLA's "Action" can also be expressed as "Behavior," the term LBM (Large Behavior Model) is also used. It's essentially the same concept as VLA, just expressed from a different perspective.

### RFM (Robot Foundation Model)

LLMs became so smart and expanded in modality that they can do various things. They provide mental counseling, do searches, write code. That's why they're called **Foundation Models**.

RFM applies this concept directly to robots. It's a term projecting the expectation that VLA-based robots will perform various tasks for humans. However, general-purpose robot models don't necessarily have to be implemented with VLA alone. They could also be built on World Models or Video Generation Models. RFM is a broader term than VLA.

Currently, VLA is considered the most promising approach to implementing RFM. Reflecting this expectation, numerous VLAs were released in 2025 alone: [Pi0](/knowledge/models/pi0), [OpenVLA](/knowledge/models/openvla), [SmolVLA](/knowledge/models/smolvla), [GR00T](/knowledge/models/groot), etc.

In summary, VLA refers to a specific model architecture, while RFM represents the vision for robot AI. LBM can be thought of as another name for VLA.

---

## Classical Robotics: The Limits of Specialists

We understand VLA is generating excitement. **But will it really work? What exactly will it do well?**

To answer this question, we need to understand what was impossible in the past. Understanding the limitations of existing robot technology is essential to properly appreciate the value of VLA.

### What Specialists Can't Do

Past robots are **Specialists**. They do only one thing well. There's too much labor in our world that Specialists can't cover.

**Prime Example: Folding Laundry**

Why is folding laundry difficult for specialist robots?

- Clothes all look different
- When you drop laundry on a table, the shape is different every time
- If you drop it while folding, the shape changes again

Because the robot must adapt to different situations each time, this task is impossible to implement with rule-based approaches.

> **With VLA? It works.**

Many companies targeting Physical AI demonstrate laundry folding. Why? Because this is **proof of VLA**. Something that didn't work before, but seems like it will work now. That's why they show this representative example.

<iframe width="100%" style="aspect-ratio: 16/9;" src="https://www.youtube.com/embed/L0uxfZMlkag?start=436" title="LeRobot - Open-source robot folding laundry with VLA" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

*LeRobot presentation session — Open-source robot folding laundry with VLA (7:16~)*

### Deformable Objects

Looking at Figure AI's logistics example, they handle various objects coming on conveyor belts. They pick them up and orient them correctly.

Packages include items wrapped in plastic, which was very difficult in the past. It's hard to grip with just the right amount of force.

Floppy laundry or plastic-wrapped items are called **Deformable objects**. These represent things that weren't possible before. They require handling many different scenarios depending on what's inside. **It's work that requires intelligence.** Humans do it effortlessly. Most importantly, realistic simulation of these objects is extremely difficult.

<iframe width="100%" style="aspect-ratio: 16/9;" src="https://www.youtube.com/embed/lkc2y0yb89U" title="Figure AI - Logistics demo (1 hour)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

*Figure AI 1-hour logistics demo — Handling various packages including deformable objects*

The limitations of specialist robots are clear. They only work in fixed environments, with fixed objects, and fixed tasks. But the real world is full of unpredictable situations. This is exactly why we need general-purpose approaches like VLA.

---

## Toward Generalists

Past robots are **Specialists**. Future robots will be **Generalists**. Like humans.

This is why Physical AI is hot. **It seems like it will replace a significant portion of human labor that currently can't be substituted.**

> The optimistic prediction that Generalists are possible is currently dominant.

But is that really the case? Why do people optimistically think Physical AI is coming and invest in it? **It's because we've witnessed the evolution of LLMs.** People expect that the generality ChatGPT demonstrated in the language domain can also be achieved by robots in the physical world.

---

## World Knowledge: The Hopeful Side

Being a Specialist wasn't just a robot story. It applied equally to AI models before LLMs, those based on machine learning and deep learning.

The difference is that with the emergence of LLMs, the language domain has already achieved Generalist AI.

- Translation, summarization, writing → LLM
- Image recognition, generation → VLM or Diffusion
- **Robot control → VLA** (expected)

### Pre-training Scaling

One of the most important reasons LLMs are smart is **Scaling**. Specifically, **Pre-training Scaling**.

They just trained an enormous amount. Really, an enormous amount.

Simply put, they trained on all text on the internet. They've already mastered all knowledge. That's why ChatGPT answers anything you ask.

One brain has legal knowledge, medical knowledge, physics knowledge, language knowledge. Because it's seen it all. (Of course, there are hallucinations and mistakes.)

### World Knowledge

This can be summarized in one phrase: **"It has World Knowledge."**

Existing Specialists don't have World Knowledge:

- Apples fall to the ground
- The Korean greeting is "Annyeonghaseyo"
- Water evaporates when boiled
- Common sense that any human would know

> **LLMs have common sense. So VLAs have common sense too.**

The World Knowledge that LLMs possess is transferred directly to VLAs. Not just making preset menu items at one specific cafe, but working at other cafes, handling new menu items. Organizing packages of various shapes, handling clothes of various designs.

**That's why everyone has expectations.** Because VLA inherits the intelligence of LLMs, there's hope that it can appropriately respond even to situations it has never seen before.

---

## However...

This is the hopeful side. Will this future really come soon?

**Reality isn't that easy.**

> Whether VLA succeeds or not, there's one biggest problem. It's the data problem.

LLMs were trained on trillions of text data points from the internet. But where is the robot action data? Data of robots picking up objects, opening doors, folding laundry—none of this exists on the internet. It must be collected directly. This is VLA's biggest challenge.

**Related Documents:**

- [Why Scaling is Difficult](scaling-problem) - Fundamental difficulties in robot data collection
- [Limitations of VLM Backbone](/knowledge/essays/insights/vlm-limits-world-model) - Can World Models be the solution?

---

## Next Document

Can VLA really succeed like LLM? The biggest challenge is data.

**Next: [The Action Data Scaling Problem](scaling-problem)**
