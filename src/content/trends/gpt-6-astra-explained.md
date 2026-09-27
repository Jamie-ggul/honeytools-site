---
title: "GPT-6 Astra Explained: Release Date, Pricing, Benchmarks, and What It Can Actually Do"
description: "OpenAI's new flagship model can now use a computer on your behalf and helped produce new math proofs — but it also triggered OpenAI's highest internal safety threshold. Here's what GPT-6 Astra actually is, in plain terms."
pubDate: 2026-09-27
tags: ["AI Trends", "OpenAI", "GPT-6", "AI Models"]
mainKeyword: "GPT-6 Astra"
draft: false
---

**TL;DR:** GPT-6 Astra is OpenAI's new flagship model, first rolled out on September 3, 2026 to a limited security-research group before opening up to Plus, Pro, Business, and Enterprise subscribers over the following week. OpenAI calls it "the world's most intelligent and aligned model," and the numbers back up at least the first half of that claim — big jumps in computer-use tasks, coding, and math reasoning. It's also the model behind the cheaper GPT-6 Sol and Luna variants we covered in our [Claude Opus 5.5 vs GPT-6 comparison](/trends/claude-opus-5-5-vs-gpt-6/). The one asterisk: Astra tripped OpenAI's own "Critical" cybersecurity risk threshold during testing, which is a first for one of their models.

## A Quick Note on How This Was Put Together

This is a research roundup built from OpenAI's own release page, independent benchmark tracking from Artificial Analysis, Microsoft's Azure announcement for Foundry availability, and TechCrunch's reporting on the rollout and its safety implications. We haven't run Astra ourselves against a real workload — treat the benchmark numbers as a starting point for evaluation, not a substitute for testing it on your own use case.

## What Astra Actually Does Differently

OpenAI is positioning Astra around four capability areas, and the two that stand out most from the pack are computer use and scientific reasoning.

**Computer use.** Astra scored 72.6% on the OSWorld 2.0 benchmark — a test of actually operating a computer interface, not just answering questions — completing tasks in about 40 minutes on average, 47% faster than its predecessor (GPT-5.6 Sol). In practice, OpenAI says this covers form-filling, CRM updates, calendar management, web research, and even installing software, by reading the screen and interacting with interfaces the way a person would, including apps that don't have an API to plug into directly.

**Scientific and mathematical reasoning.** OpenAI reports Astra contributed to new mathematical proofs related to prime number gaps, and posted a 97.6% score on FrontierMath Tier 4 (up from 83.0% for GPT-5.6 Sol) — a benchmark specifically designed to be hard for language models, not memorizable from training data.

**Coding.** OpenAI describes state-of-the-art results across multiple coding benchmarks, with an emphasis on clearer communication about what it changed and why, meaning fewer rounds of "wait, that's not what I asked for."

**Professional document work.** Formatted documents, spreadsheets, and presentations that actually follow a given template, rather than generic output that needs reformatting.

## Benchmark Numbers, From Two Different Sources

Worth separating OpenAI's own reported numbers from an independent tracker's numbers, since they measure different things and shouldn't be blended together:

**OpenAI's own benchmark claims** (self-reported, from their release page):
- FrontierMath Tier 4: 97.6% (vs. 83.0% for GPT-5.6 Sol)
- ARC-AGI-3: 99.9%
- GPQA Diamond: 96.0%
- ExploitBench: 100%

**Artificial Analysis' independent Intelligence Index** (their own composite score, not directly comparable to the numbers above):
- Astra (max effort): 53
- Astra (high): 51
- Astra (medium): 50
- Astra (low): 46

For context, in our [Claude Opus 5.5 vs GPT-6 piece](/trends/claude-opus-5-5-vs-gpt-6/), Artificial Analysis scored Claude Opus 5.5 at 58 on this same index and GPT-6 Sol (the cheaper variant built on Astra's foundation) at 48 — so on this particular independent measure, Astra's 53 sits between the two, which tracks with it being a stronger base model than Sol but not benchmarked head-to-head against Claude by OpenAI directly.

## Pricing — Two Different Ways to Buy It

**Through the OpenAI API directly:** $10 per million input tokens, $50 per million output tokens on Standard. A "Fast" mode doubles both speed and price (2x Standard). If you're already paying for ChatGPT Plus, Pro, Business, or Enterprise, Astra access is included in your existing subscription rather than billed separately.

**Through Microsoft Foundry (Azure), for enterprise deployments:** Pricing runs from roughly $10 to $75 per million tokens depending on context length and deployment tier (Standard pay-as-you-go vs. Provisioned Throughput), with a slight premium for U.S. Data Zone hosting versus Global. This channel is aimed at organizations that need enterprise governance controls, not individual users — it went generally available in Foundry around September 5, 2026.

## The Part That Got Attention: A New Safety Threshold

This is the detail that separates this release from a normal "faster, cheaper, better" model update. Under OpenAI's own Preparedness Framework, Astra reached the "Critical" threshold for cybersecurity capability during testing — meaning it demonstrated real exploit-development ability. OpenAI's production version includes restrictions specifically preventing it from generating proof-of-concept exploits, with more controlled access planned through their Daybreak security research program rather than general release.

There's a second, more technical concern that came up in early reporting: Astra reportedly uses a reasoning technique some researchers have called "opaque recurrence," which makes its internal chain-of-thought harder for outside researchers to audit than in previous models. OpenAI's own chief scientist acknowledged the tradeoff directly, framing reduced monitorability as a natural consequence of increasing capability rather than a design flaw — though that's obviously a characterization worth treating with some skepticism rather than taking at face value, given who's making it.

On the alignment side, OpenAI reports the opposite trend in a different metric: 0% circumvention of its automated review safeguards in testing, and three times lower rates of the model misrepresenting its own capabilities compared to prior versions.

## Who Should Actually Care About This

If you're an individual ChatGPT subscriber, Astra is likely already included in your plan — there's no separate action needed, and the computer-use and document capabilities are the parts you'd notice day to day. If you're evaluating this for a business deployment involving autonomous computer-use workflows, the OSWorld numbers and Microsoft Foundry's enterprise governance controls are the relevant details to dig into further, and it's worth budgeting time to understand the cybersecurity access restrictions before assuming you'll get unrestricted API behavior.

## FAQ

**Is GPT-6 Astra the same as GPT-6 Sol or Luna?**
No. Astra is the flagship model. Sol and Luna are cheaper, faster variants built on Astra's training foundation for cost-sensitive, high-volume use — we cover the pricing and benchmark tradeoffs between all three in our [Claude Opus 5.5 vs GPT-6 comparison](/trends/claude-opus-5-5-vs-gpt-6/).

**Does "Critical" cybersecurity threshold mean Astra is dangerous to use normally?**
Not for typical use. It means the underlying model demonstrated capability that OpenAI decided required restricting certain outputs (like proof-of-concept exploit code) in the production version, rather than releasing that capability unrestricted.

**Can I use Astra's computer-use feature today?**
If you're on a ChatGPT Plus, Pro, Business, or Enterprise plan, or accessing it via the API or Microsoft Foundry, yes — though how it's exposed in the product UI may differ from raw API access.

## Final Thoughts

Astra is a real jump on the benchmarks that matter most for agentic, computer-operating AI — not just another round of "slightly better at trivia." The computer-use numbers in particular are the part worth paying attention to if you're thinking about where AI-driven automation is heading next. The cybersecurity threshold is the part worth watching rather than worrying about immediately — it's a signal about where frontier models are headed generally, more than a reason to avoid Astra specifically.

Sources: [OpenAI](https://openai.com/index/gpt-6-astra/), [Artificial Analysis](https://artificialanalysis.ai/models/releases/gpt-6-astra), [Microsoft Azure / Foundry via StorageReview](https://www.storagereview.com/news/openai-gpt-6-astra-launches-in-microsoft-foundry-with-agentic-execution-and-computer-use), [TechCrunch](https://techcrunch.com/2026/09/03/openai-launches-astra-its-powerful-and-controversial-new-model/)
