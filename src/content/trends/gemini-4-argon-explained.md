---
title: "Gemini 4 Argon Explained: Release Date, Pricing, Benchmarks, and Who Can Actually Use It"
description: "Google's new flagship model claims the benchmark lead over OpenAI and Anthropic, and since October 13 it's open to developers and subscribers. Here's what Gemini 4 Argon is, what it costs, and how much to trust the numbers."
pubDate: 2026-10-03
updatedDate: 2026-10-16
tags: ["AI Trends", "Google", "Gemini", "AI Models"]
mainKeyword: "Gemini 4 Argon"
draft: false
---

**Update, October 16, 2026:** This post originally covered Argon's September 30 launch, when access was limited to vetted cybersecurity defenders. On October 13, Google began rolling Argon out more broadly, so we've rewritten the sections on availability and pricing. The benchmark figures are unchanged and still vendor-reported.

**TL;DR:** Google unveiled Gemini 4 Argon on September 30, 2026, its first new flagship Gemini model since Gemini 3 in November 2025. Google says it leads or ties for first on 13 of the 18 benchmarks it disclosed, ahead of OpenAI's GPT-6 Astra and Anthropic's Claude Opus 5.5. After a limited first release, Google opened it up on October 13: developers can use it through the Gemini API and Google AI Studio (model ID `gemini-4-argon`), and Google AI Pro and Ultra subscribers can pick it in the Gemini app. API pricing is $2 per million input tokens and $10 per million output tokens through November 30, rising to $4 and $20 on December 1. The benchmark figures are vendor-reported and haven't been independently verified.

## A Quick Note on How This Was Put Together

This is a research roundup, not a hands-on test; we haven't run Argon ourselves. The launch details come from reporting by VentureBeat, DataCamp, and Yahoo Finance on the September 30 announcement, and the availability and pricing updates come from Google's own October 13 blog posts and its Gemini API pricing page. Every benchmark number here is Google-reported unless stated otherwise, so treat the comparisons as claims to verify rather than settled results.

## What Google Announced

Argon is the next generation of Google's Gemini line, and the first flagship release in about ten months. In that time, OpenAI and Anthropic each shipped major models, which we covered in our [GPT-6 Astra explainer](/trends/gpt-6-astra-explained/) and our [Claude Opus 5.5 vs GPT-6 comparison](/trends/claude-opus-5-5-vs-gpt-6/). Argon is Google's answer, and the framing in coverage is that Google is trying to retake the benchmark lead.

Headline capabilities from the announcement:

- **Very long runs:** Launch coverage described up to 1 million output tokens in a single run, up from 64,000 previously. Google's API documentation lists a combined input-and-output limit of 1,048,576 tokens, so check the model page for the exact limits that apply to your use case.
- **Codebase migration at scale**: Google demonstrated it on a codebase of more than 800,000 lines (the Fuchsia operating system kernel).
- **Cybersecurity**: autonomous vulnerability detection and patching, which is why the unfiltered version stays restricted (more below).
- **Stronger resistance to prompt injection**: Google reports a 0.7% attack success rate on the Gray Swan benchmark.
- **Multimodal enterprise work**, including charts, video, and documents.

## Who Can Use It Right Now

Argon launched on September 30 in a limited release, and Google widened access on October 13. According to Google's posts and documentation:

- **Developers:** available through the Gemini API and Google AI Studio with the stable model ID `gemini-4-argon`. Google's API pricing page says Argon is not available on the free tier or the Google AI Pro plan for API use, so you need a paid API setup.
- **Enterprises:** available through Gemini for business and Google Cloud's Gemini platform.
- **Gemini app and AI Mode in Search:** Google AI Pro and Ultra subscribers can select it.
- **Google Antigravity** (Google's agentic development environment): Google AI Ultra subscribers.
- **Unfiltered version:** the version without cyber guardrails stays limited to vetted defenders in Google's Fairwind Program, which Google says is expanding to hundreds more partners.

Google describes the rollout as staged by product and subscription tier, so the model may not appear for everyone on the same day. Check your own plan and region before you plan around it.

## Pricing

| | Input (per 1M tokens) | Output (per 1M tokens) | Cached input |
|---|---|---|---|
| Argon, through November 30, 2026 | $2 | $10 | $0.10 |
| Argon, from December 1, 2026 | $4 | $20 | $0.20 |

Google's pricing page says the output price includes thinking tokens, which matters for models that reason at length. Caching is implicit only; explicit caching isn't supported. For context, the standard rate matches Claude Opus 5.5's price, and the introductory rate is about one-fifth of GPT-6 Astra's $10/$50 pricing. If you want to see what these prices mean for your own request sizes, try our free [LLM API cost calculator](/tools/llm-api-cost-calculator/).

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

The fair reading is that Argon looks strong on long-context work, legal and business-style tasks, and large-scale software engineering, while OpenAI and Anthropic still lead on some coding-agent and terminal-heavy tests. All of this is vendor-reported. Now that more people can use Argon, independent tests should start to appear, so wait for third-party evaluations before treating the "retook the lead" headline as settled.

## Why the Staged Release

Argon's cybersecurity capabilities are the reason for the staged rollout. Google says the version given to Fairwind defenders has guardrails removed for defensive work, which is exactly the kind of capability that is risky to release broadly. For everyone else, Google says the public version has cyber mitigations that block offensive tasks such as penetration testing and exploitation, while defensive work is supported through tools like CodeMender. It's the same tension we described in the Astra piece, where OpenAI restricted exploit-generation behavior in the public version. Frontier labs are increasingly handling their most capable security-relevant models through gated programs first.

## Who Should Actually Care About This

**If you're an individual user**, you can try Argon in the Gemini app if you subscribe to Google AI Pro or Ultra. Check the model picker, since rollout varies by product and plan.

**If you build with APIs**, the introductory pricing runs through November 30, so plan for the $4/$20 rate that starts on December 1 and test it against your own workload rather than the leaderboard.

**If you work in security**, the Fairwind Program is the relevant path for the unfiltered version, and the main thing to watch is how Google handles the gap between the restricted and public versions.

## FAQ

**Is Gemini 4 Argon available to the public?**
Mostly, since October 13. Developers can use it through the Gemini API and Google AI Studio on a paid setup, and Google AI Pro and Ultra subscribers can use it in the Gemini app. The version without cyber guardrails is still limited to vetted defenders.

**Is Argon better than GPT-6 Astra and Claude Opus 5.5?**
According to Google's own reported benchmarks, it leads on most of the tests it disclosed, but not all, and none of the figures have been independently verified. Astra and Opus 5.5 still lead on some coding-agent benchmarks.

**How much does Gemini 4 Argon cost?**
Through November 30, 2026, $2 per million input tokens and $10 per million output tokens, with cached input at $0.10. From December 1, $4 and $20, with cached input at $0.20.

**What is the Gemini 4 Argon API model ID?**
`gemini-4-argon`, according to Google's documentation.

**When was Gemini 4 Argon released?**
Google announced it on September 30, 2026, in a limited release, and widened access on October 13, 2026.

## Final Thoughts

Argon is a significant release mostly because it shows the frontier race is back to three serious competitors, with pricing falling at the same time. With access now open to developers and subscribers, the useful move is to run it on your own tasks, watch for independent evaluations, and compare it against your current model, not just the leaderboard.

Sources: [Google: Gemini 4 Argon announcement (Sept 30)](https://blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-4-argon/), [Google: Gemini 4 Argon rollout (Oct 13)](https://blog.google/innovation-and-ai/models-and-research/gemini-models/introducing-gemini-4-argon/), [Google Cloud blog](https://cloud.google.com/blog/products/ai-machine-learning/gemini-4-argon-available-on-google-cloud), [Gemini API pricing](https://ai.google.dev/gemini-api/docs/pricing), [VentureBeat](https://venturebeat.com/technology/google-unveils-gemini-4-argon-retaking-benchmark-lead-over-openai-and-anthropic-but-in-limited-release), [DataCamp](https://www.datacamp.com/blog/gemini-4-argon), [Yahoo Finance](https://finance.yahoo.com/technology/ai/articles/google-gemini-4-argon-closes-235954585.html)
