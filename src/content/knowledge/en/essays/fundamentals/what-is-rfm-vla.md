---
title: What are RFM & VLA?
description: Concepts of Robot Foundation Models and Vision-Language-Action models, the evolution from LLM to VLA, from Specialist to Generalist
tags: [rfm, vla, lbm, foundation-model, llm, world-knowledge, specialist, generalist, basics]
category: essays
order: 1
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

The emergence of Vision Language Action models has brought the keyword "Physical AI" to prominence.

Robot Foundation Model, Large Behavior Model, VLA... There are many similar yet different terms. Let's clarify them one by one.

---

## VLA: The Evolution from LLM to VLA

### LLM (Large Language Model)

We need to start with LLMs that are changing our world.

LLM, most famous through GPT, is literally a language model. Text goes in, text comes out. We typically use it in conversational form like ChatGPT.

### VLM (Vision Language Model)

Starting with GPT-4V in 2023, these models began recognizing images. **They got eyes.** This is VLM, Vision Language Model.

Now with Audio included, voice conversations are possible. They got ears and a mouth to listen and speak. That's why we call them Multimodal Models.

### VLA (Vision-Language-Action)

**VLA is a model that sees with Vision, receives commands through Language, and performs Actions. Just like humans.**

Today's VLAs are built by adding eyes and actions to LLMs.

```
LLM → VLM → VLA
Language → Language + Vision → Language + Vision + Action
```

Everyone knows LLMs are smart. Now that intelligence can be used to control robots. This has created expectations that robots will be able to do things that were impossible before.

---

## Terminology: VLA, LBM, RFM

| Term | Full Name | Description |
|------|-----------|-------------|
| **VLA** | Vision-Language-Action | Model integrating vision + language + action |
| **LBM** | Large Behavior Model | Action expressed as Behavior. Essentially the same as VLA |
| **RFM** | Robot Foundation Model | Foundation Model for robots, like how LLM became a Foundation Model |

### LBM (Large Behavior Model)

Since VLA's "Action" can be called "Behavior," it's also called LBM (Large Behavior Model). They're essentially the same concept.

### RFM (Robot Foundation Model)

LLMs became so smart and expanded in modality that they can do various things. They provide mental counseling, do searches, write code. That's why they're called **Foundation Models**.

RFM is applying this directly to robots. It's a term projecting the expectation that VLA-based robots will do various tasks for humans.

Reflecting this expectation, numerous VLAs were released in 2025 alone: [Pi0](../models/pi0), [OpenVLA](../models/openvla), [SmolVLA](../models/smolvla), [GR00T](../models/groot), etc.

---

## Classical Robotics: The Limits of Specialists

We understand VLA is generating excitement. **But will it really work? What exactly will it do well?**

We need to understand what was impossible in the past.

### Past Robots are Specialists

Past robots are **Specialists**. They do only one thing well.

**Example 1: Coffee Robot**

There are barista robots in cafes. They work great. But can this robot make coffee at Starbucks? No. Even supporting new menu items at the same cafe is difficult. The robot's program or model needs to be updated.

**Example 2: Chess Robot**

There's a chess-playing robot. It recognizes the chessboard with a camera, probably has a CNN-based deep learning model. The robot plays chess well.

But will it play well if the board size changes and the piece shapes change? No. It's a **Specialist**. It only works with this specific board and these specific pieces.

### What Specialists Can't Do

There's too much labor in our world that Specialists can't cover.

**Prime Example: Folding Laundry**

- Clothes all look different
- When you drop laundry on a table, the shape is different every time
- If you drop it while folding, the shape changes again

This is an extremely difficult task that was impossible with existing methods.

**With VLA? It works.**

Many companies targeting Physical AI demonstrate laundry folding. Why? Because this is **proof of VLA**. Something that didn't work before. But seems like it will work now. That's why they show this representative example.

### Deformable Objects

Looking at Figure AI's logistics example, they handle various objects coming on conveyor belts. They pick them up and orient them correctly.

Packages include items wrapped in plastic, which was very difficult in the past. It's hard to grip with just the right amount of force.

Floppy laundry or plastic-wrapped items are called **Deformable objects**. These represent things that weren't possible before. They require handling many different scenarios depending on what's inside. **It's work that requires intelligence.** Humans do it effortlessly.

---

## Toward Generalists

Past robots are **Specialists**. Future robots will be **Generalists**. Like humans.

This is why Physical AI is hot. **It seems like it will replace a significant portion of human labor that currently can't be substituted.**

The optimistic prediction that Generalists are possible is currently dominant. But is that really the case? Why do people optimistically think Physical AI is coming and invest in it?

**It's because we've witnessed the evolution of LLMs.**

---

## World Knowledge: The Hopeful Side

Being a Specialist wasn't just a robot story. It applied equally to AI models before LLMs, those based on machine learning and deep learning.

The difference is that with the emergence of LLMs, language has already become Generalist.

- Translation, summarization, writing → LLM
- Image recognition, generation → VLM
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

**LLMs have common sense. So VLAs have common sense too.**

Not just making preset menu items at one specific cafe, but working at other cafes, handling new menu items. Organizing packages of various shapes, handling clothes of various designs.

**That's why everyone has expectations.**

---

## However...

This is the hopeful side. Will this future really come soon?

**Reality isn't that easy.**

Whether VLA succeeds or not, there's one biggest problem.

**It's the data.**

- [Why Scaling is Difficult](scaling-problem) - Fundamental difficulties in robot data collection
- [Why Evaluation is Difficult](evaluation-problem) - Problems measuring VLA performance

---

## See Also

- [Scaling Problem](scaling-problem)
- [Evaluation Problem](evaluation-problem)
- [Teleoperation](teleoperation)
- [Non-Teleoperation Data](non-teleop-data)
