---
title: "ChatGPT's New Text Watermark Explained: How It Works, Who Gets It, and How Reliable It Is"
description: "OpenAI is adding an invisible watermark to ChatGPT and Codex text in the EU, and offering it to API customers worldwide. Here's how the watermark works, what it can and can't prove, and what it means if you use AI to write or edit."
pubDate: 2026-10-12
tags: ["AI Trends", "OpenAI", "ChatGPT", "AI Writing"]
mainKeyword: "ChatGPT watermark"
draft: false
---

**TL;DR:** On October 5, 2026, OpenAI announced "textGrain," an invisible watermark for AI-generated text. It's rolling out over the coming weeks to eligible ChatGPT and Codex users in the EU, in response to the EU AI Act, and API customers anywhere can opt in starting now. Nothing visible changes: the watermark is a statistical pattern in word choices that a detector can pick up. It's far from foolproof — OpenAI's own tests show detection drops sharply when text is edited — and a missing watermark doesn't prove a human wrote something. If you use AI tools to draft or edit, the main takeaway is that this is not a reliable way to prove or disprove AI use.

## A Quick Note on How This Was Put Together

This is a news explainer built from coverage of OpenAI's announcement by 9to5Mac, The Next Web, TechRepublic, and Interesting Engineering. We haven't tested the watermark or the detector ourselves, and the detection figures below are OpenAI's own reported numbers. Rollout details may change as the "coming weeks" plays out.

## What the Watermark Is

OpenAI calls the system **textGrain**. Instead of adding visible marks or hidden characters, it subtly shifts which words the model picks as it writes, creating a statistical signal in the text. A detector can then look for that signal. Because the pattern is in the wording itself, copying and pasting a response doesn't strip it out, and there's nothing for a reader to see.

OpenAI says it co-wrote a technical report with researchers from the University of Pennsylvania and Yale, plans to release the technique as open source, and reports that it matched or beat other approaches it tested, including Google's SynthID for text. It also says its Astra model's benchmark scores showed no meaningful difference with the watermark turned on.

## Who Gets It and When

- **ChatGPT and Codex in the EU:** an invisible watermark on eligible text output, rolling out "in the coming weeks" to eligible users across plans. It is not on by default outside the EU.
- **The API, worldwide:** customers can opt in for select models starting October 5. It's off by default, and OpenAI says it is working with cloud partners to offer it.
- **What's excluded:** short responses under roughly 200 tokens (around 150 English words) and code snippets, according to TechRepublic's reading of EU guidance. Highly constrained content, like math, also yields weaker signals.

Coverage doesn't say whether EU users can opt out of the ChatGPT and Codex watermark.

## Why OpenAI Is Doing This

OpenAI says it is responding to Article 50 of the EU AI Act, which requires AI-generated content to be marked in a machine-readable way. Per Engadget as cited by The Next Web, providers already on the market have until December 2 to comply. Other companies are in the same position: the Next Web and Interesting Engineering both report that Anthropic announced worldwide watermarking of Claude's text about two months earlier, and several major AI companies have committed to the EU's code of practice on labeling AI content.

## How Reliable Is It?

This is the most important part. OpenAI's own numbers show it is useful but limited:

| Test (OpenAI-reported) | Detection rate |
|---|---|
| 200-token passage, 1% false-positive rate | about 80% |
| 400-token passage, 1% false-positive rate | about 95% |
| 400-token passage after 10% of words swapped for synonyms | about 66% (down from about 92%) |
| 400-token passage after 25% of words swapped | about 17% |

Detection is also weaker for short text, translated text, and subjects like mathematics where there are fewer ways to word things. OpenAI itself lists what the watermark does *not* do: it doesn't identify the user, doesn't measure how much a human contributed, doesn't establish ownership, and doesn't verify that the text is accurate. A missing watermark doesn't prove a person wrote the text, since it may be short, edited, translated, or produced by a different company's tool. And the detector can produce false positives, even if rarely.

The detector is not public. Access is limited at first to approved researchers and expert organizations, with applications reviewed case by case. OpenAI says a positive detection reveals only that an OpenAI watermark is present — not who wrote it or what the prompt was.

## What This Means If You Use AI to Write or Edit

- **You probably won't notice anything.** The watermark is invisible and doesn't change how text reads.
- **It's not a lie detector.** Because heavy editing weakens the signal and short text is hard to detect, neither a positive nor a negative result is reliable evidence of how something was written. Anyone using a detector to make accusations — a teacher, an editor, an employer — should treat the result as a weak clue, not proof.
- **Disclosure rules still come from people, not the watermark.** If your school, employer, or publication has rules about disclosing AI use, those apply regardless of whether any tool can detect it. We cover the practical side of using AI for proofreading and editing in our comparison of [Grammarly vs AI writing tools](/reviews/grammarly-vs-ai-writing-tools-2026/) and our post on [using Grammarly as a non-native English writer](/reviews/grammarly-non-native-writer/).

## FAQ

**Is there a visible ChatGPT watermark on text?**
No. The watermark is an invisible statistical pattern in word choices, not something you can see or select.

**Does copying and pasting remove it?**
Not by itself, since the signal is in the words. Editing, translating, or substantially rewording text can weaken it.

**Can I check text for the watermark?**
Not publicly yet. OpenAI's detector is limited to approved researchers and expert organizations at first.

**Does a watermark prove a text was written by AI?**
It indicates the text likely came from an OpenAI model, with some chance of error. A missing watermark proves nothing.

**Can I "remove" the watermark?**
There's nothing visible to remove. OpenAI's own tests show editing reduces detection, which is why a negative result is inconclusive. This post isn't a guide to evading detection, and if you're covered by disclosure rules at school or work, follow them.

**Does this apply outside the EU?**
Not by default for ChatGPT and Codex. API customers anywhere can opt in.

## Final Thoughts

Text watermarking is a transparency tool for the EU's new rules, not a reliable way to tell human writing from AI writing. OpenAI is upfront about its limits, and the numbers back that up: it works well on longer, unedited text and degrades quickly otherwise. The useful way to read this news is as a sign of where regulation is heading, and a reminder that being honest about how you use AI tools matters more than any detector.

Sources: [9to5Mac](https://9to5mac.com/2026/10/05/openai-details-new-text-watermarking-system-for-chatgpt-codex-and-the-api/), [The Next Web](https://thenextweb.com/news/openai-text-watermarking-chatgpt-codex-eu-ai-act), [TechRepublic](https://www.techrepublic.com/article/news-openai-chatgpt-codex-watermark-emea-eu/), [Interesting Engineering](https://interestingengineering.com/ai-robotics/openai-chatgpt-invisible-watermarks-eu)
