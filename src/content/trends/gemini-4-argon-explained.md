---
title: "Gemini 4 Argon Explained: Release Date, Pricing, Benchmarks, and Who Can Actually Use It"
description: "Google's new flagship model claims the benchmark lead over OpenAI and Anthropic — but almost nobody can use it yet. Here's what Gemini 4 Argon is, what it costs, and how much to trust the numbers."
pubDate: 2026-10-03
tags: ["AI Trends", "Google", "Gemini", "AI Models"]
mainKeyword: "Gemini 4 Argon"
draft: false
---

**TL;DR:** Google unveiled Gemini 4 Argon on September 30, 2026, its first new flagship Gemini model since Gemini 3 in November 2025. Google says it leads or ties for first on 13 of the 18 benchmarks it disclosed, ahead of OpenAI's GPT-6 Astra and Anthropic's Claude Opus 5.5, and it's priced aggressively at $2 per million input tokens and $10 per million output tokens during an introductory period. The catch: access is currently limited to a small group of vetted cybersecurity defenders, the benchmark figures are vendor-reported and haven't been independently verified, and there's no public API model ID yet. For most people, this is a model to watch rather than one to use today.

## A Quick Note on How This Was Put Together

This is a research roundup, not a hands-on test — we can't use Argon ourselves, since it isn't publicly available. The details below come from reporting by VentureBeat, DataCamp, and Yahoo Finance's coverage of the launch, which in turn draw on Google's own announcement. Every benchmark number here is Google-reported unless stated otherwise, so treat the comparisons as claims to verify rather than settled results.

## What Google Announced

Argon is the next generation of Google's Gemini line, and the first flagship release in about ten months. In that time, OpenAI and Anthropic each shipped major models, which we covered in our [GPT-6 Astra explainer](/trends/gpt-6-astra-explained/) and our [Claude Opus 5.5 vs GPT-6 comparison](/trends/claude-opus-5-5-vs-gpt-6/). Argon is Google's answer, and the framing in coverage is that Google is trying to retake the benchmark lead.

Headline capabilities from the announcement:

- **Up to 1 million output tokens** in a single run, up from 64,000 previously, which Google positions for very long reasoning chains and large-scale work.
- **Codebase migration at scale**: Google demonstrated it on a codebase of more than 800,000 lines (the Fuchsia operating system kernel).
- **Cybersecurity**: autonomous vulnerability detection and patching, which is also the reason access is restricted (more below).
- **Stronger resistance to prompt injection**: Google reports a 0.7% attack success rate on the Gray Swan benchmark.
- **Multimodal enterprise work**, including charts, video, and documents.

## Who Can Use It Right Now

This is the most important caveat. Argon launched in a limited release:

- It's available first to a vetted group of cybersecurity defenders through Google's Fairwind Program (reported as more than 650 organizations, including government agencies and security vendors), for defensive use only, plus participation in the U.S. government's voluntary pre-release access process.
- Google says broader availability is planned "as soon as possible," starting with paid API customers and Google AI Ultra subscribers. No date has been given.
- As of the announcement, there was no published API model ID, and the model wasn't listed on common third-party platforms.

So if you were hoping to try it this week, you probably can't.

## Pricing

| | Input (per 1M tokens) | Output (per 1M tokens) |
|---|---|---|
| Argon, introductory | $2 | $10 |
| Argon, standard (after promo) | $4 | $20 |
| Cached input | 95% discount | — |

Google hasn't said how long the introductory pricing lasts. For context, the standard rate matches Claude Opus 5.5's price, and the introductory rate is about one-fifth of GPT-6 Astra's $10/$50 pricing. Google also hasn't published whether reasoning tokens are billed at the output rate, which matters a lot for real-world cost with models that think at length.

## The Benchmarks, and Why to Be Careful

Google says Argon leads or ties for first on 13 of 18 disclosed benchmarks, compared with 4 for GPT-6 Astra and 2 for Claude Opus 5.5. Selected numbers from the coverage:

| Benchmark | Argon | Comparison |
|---|---|---|
| DeepSWE v1.1 (software engineering) | 77.9% | Claude Opus 5.5: 74.2% |
| AutomationBench (business tasks) | 51.3% | Claude: 42.5% |
| Vals Index | 68.9% | Opus 5.5: 67.0%, GPT-6 Astra: 63.1% |
| GraphWalks (256K–1M tokens) | 84.2% | GPT-6 Astra: 71.8% |
| Harvey Legal Agent Benchmark | 19.6% | GPT-6 Astra: 5.4% |

And where it doesn't lead:

- **FrontierSWE v2**: Argon 55.0%, GPT-6 Astra 65.5%
- **Terminal-Bench 4.0**: Argon 57.4%, Claude Opus 5.5 66.4%
- **Terminal-Bench Science**: Argon 57.6%, GPT-6 Astra 68.1%

The fair reading is that Argon looks strong on long-context work, legal and business-style tasks, and large-scale software engineering, while OpenAI and Anthropic still lead on some coding-agent and terminal-heavy tests. All of this is vendor-reported with no independent verification yet, and the limited release makes independent testing hard. Wait for third-party evaluations before treating the "retook the lead" headline as settled.

## Why the Restricted Release

Argon's cybersecurity capabilities are the reason for the staged rollout. Google says the version given to the Fairwind defenders has guardrails removed for defensive work, which is exactly the kind of capability that is risky to release broadly. It's the same tension we described in the Astra piece, where OpenAI restricted exploit-generation behavior in the public version. Frontier labs are increasingly handling their most capable security-relevant models through gated programs first.

## Who Should Actually Care About This

**If you're an individual user or small team**, nothing changes today. Keep using what you have, and check back when Google announces general availability and independent benchmarks appear.

**If you build with APIs**, the introductory pricing is worth tracking, but plan for the standard $4/$20 rate and wait for details on reasoning-token billing and the model ID before you design around it.

**If you work in security**, the Fairwind Program is the relevant path, and the main thing to watch is how Google handles the gap between the restricted and public versions.

## FAQ

**Is Gemini 4 Argon available to the public?**
Not yet. It launched in limited release to vetted cyber defenders, with broader access planned for paid API customers and Google AI Ultra subscribers.

**Is Argon better than GPT-6 Astra and Claude Opus 5.5?**
According to Google's own reported benchmarks, it leads on most of the tests it disclosed, but not all, and none of the figures have been independently verified. Astra and Opus 5.5 still lead on some coding-agent benchmarks.

**How much does Gemini 4 Argon cost?**
$2 per million input tokens and $10 per million output tokens during an introductory period, rising to $4 and $20 afterward, with a 95% discount on cached input.

**When was Gemini 4 Argon released?**
Google announced it on September 30, 2026.

## Final Thoughts

Argon is a significant announcement mostly because it shows the frontier race is back to three serious competitors, with pricing falling at the same time. But a model most people can't use and whose numbers nobody has independently checked is a preview, not a product. The useful move right now is to watch for general availability and independent evaluations, then compare it against your own workload, not just the leaderboard.

Sources: [VentureBeat](https://venturebeat.com/technology/google-unveils-gemini-4-argon-retaking-benchmark-lead-over-openai-and-anthropic-but-in-limited-release), [DataCamp](https://www.datacamp.com/blog/gemini-4-argon), [Yahoo Finance](https://finance.yahoo.com/technology/ai/articles/google-gemini-4-argon-closes-235954585.html)
