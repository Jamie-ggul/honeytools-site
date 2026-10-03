---
title: "Meta Muse AI Agent Explained: Features, Pricing, Mac App, and the Security Questions"
description: "Meta's personal AI agent Muse can work across your Mac's files, mail, messages, and calendar — and it picked up a security scare within weeks of launch. Here's what Muse does, what it costs, and what to know before you give it access."
pubDate: 2026-10-03
tags: ["AI Trends", "Meta", "AI Agents", "Muse"]
mainKeyword: "Meta Muse AI agent"
draft: false
---

**TL;DR:** Muse is Meta's new personal AI agent: a free-to-start assistant (with paid tiers at $20 and $100 per month) that lives on your phone, in a web app, in WhatsApp, and — since mid-September — in a Mac app that can work across your files, mail, messages, calendar, and notes. It was an instant hit by download numbers, and it also had a publicly disclosed Mac security flaw within weeks, which Meta patched quickly but described as a local issue. Muse is genuinely interesting as a product, and it's also a good case study in why giving an AI agent broad access to your computer deserves some caution.

## A Quick Note on How This Was Put Together

This is a research roundup, not a hands-on review — we haven't used Muse ourselves. The details below come from Meta's own announcements as reported by 9to5Mac and MarkTechPost, plus independent coverage of the security issue (TechRadar, InfoQ, NewsBytes). Several figures, especially pricing tiers and download counts, come from secondary tech-news sources rather than Meta directly, and a few launch dates differ by a day or two between outlets, so we've kept dates approximate where sources disagree. Check Meta's own page for current plans before you sign up for anything.

## What Muse Actually Is

Meta describes Muse as a personal AI agent meant to get things done across everyday life, not just answer questions. You can give it a name and an avatar, ask it to take on tasks, and it keeps working in the background. Tasks you start on your phone can be picked up from the Mac app or from WhatsApp, which is a big part of Meta's pitch: one agent that follows you across devices rather than a separate chatbot in each app.

It launched in the U.S. in early September 2026, initially on mobile and the web, and is currently U.S.-only according to the coverage we found, with expansion to other countries described as planned.

## The Mac App and "Computer Use"

The Mac version is the part drawing the most attention. Per reporting on Meta's announcement, it can work across your files, mail, messages, calendar, and notes, operating inside the native apps already on your computer rather than through a separate sandbox. It's a free download for Mac, U.S. only at launch.

Meta's stated safeguards:

- **Access is opt-in.** You choose which permissions Muse gets and can change them anytime. Full Disk Access is optional.
- **Sensitive actions need approval.** Per Meta's announcement, things like deleting files or sending messages require your sign-off first.

This puts Muse in the same general category as the computer-use features we covered in our [GPT-6 Astra explainer](/trends/gpt-6-astra-explained/) and in Microsoft's agent push in our [Copilot Agents breakdown](/trends/microsoft-copilot-agents-explained/) — AI that doesn't just advise but actually operates software on your behalf.

## Pricing

According to tech-news coverage of the launch (Meta's own page didn't show plan details when we checked), Muse uses a token-based allowance rather than a per-message limit:

| Plan | Price | Weekly allowance |
|---|---|---|
| Free | $0 | 100 million tokens |
| Power | $20/month | 500 million tokens |
| Maximum | $100/month | 3 billion tokens |

One reported detail worth knowing: a valid payment card is reportedly required even for the free tier, and it's limited to adults 18 and over. Because we couldn't confirm the pricing table on Meta's own site, treat the numbers above as reported, not official.

## How Popular Is It?

Quickly, by the early numbers. Reporting citing Sensor Tower data (via the Los Angeles Times) put Muse at more than 2.5 million U.S. downloads roughly two weeks after launch, and it was widely described as hitting the top of the App Store charts. Meta hadn't officially confirmed its own adoption figures in the coverage we saw, so these are third-party estimates.

## The Security Question

The reason this isn't just a "new AI app" story: shortly after the Mac client shipped, security researcher Patrick Wardle (founder of the Objective-See Foundation) publicly disclosed a vulnerability he dubbed "not-a-mused."

What was reported:

- The flaw involved a debug configuration setting tied to Muse's voice-dictation feature that other processes on the Mac could change without administrator rights.
- That could let an attacker reroute dictation traffic to a server they control, capturing authentication tokens and potentially leveraging Muse's own permissions to act on connected apps.
- It required the attacker to already have some access to the device, such as through malware, and Muse connected to other apps.

Meta's response, attributed to David Singleton of Meta Superintelligence Labs, was that this was a local privilege escalation issue, not a remote exploit — but the company issued a hotfix quickly, reportedly within hours of press coverage, removing the debug setting from production builds. Security commentators pushed back a bit on the "local only" framing, noting that getting initial access to a Mac is often easier than it sounds, via social engineering.

The takeaway isn't that Muse is uniquely unsafe — it's that an agent with deep access to your files, mail, and messages is a more valuable target than an ordinary app, so any weakness in it matters more. Techdirt also reported that Amazon moved to block the agent from its site, another sign that the industry is still working out the rules for AI agents acting on a person's behalf.

## Who Should Actually Care About This

**If you're a casual user curious about Muse**, the free tier on your phone is the low-stakes way to try it. Think carefully before granting the Mac app broad access to your files and messages, especially on a work computer.

**If you manage devices or security at a company**, this is worth a policy conversation: agents with computer-use permissions are showing up on employee laptops whether IT approves them or not.

**If you're mostly watching the AI landscape**, Muse is a clear sign that Meta wants to compete in the personal-agent category against OpenAI, Anthropic, and Microsoft, not just in chat.

## FAQ

**Is Meta Muse free?**
There's a free tier with a weekly token allowance, according to launch coverage; paid plans at $20 and $100 per month raise the limit. Check Meta's site for current terms.

**Is Muse available outside the U.S.?**
Not at launch, per reporting — it's U.S.-only for now, with other countries described as planned.

**Did Meta fix the Mac security issue?**
Reports say Meta shipped a hotfix quickly after the issue became public, removing the debug setting involved. Meta characterized it as a local issue rather than a remote exploit.

**Can Muse delete my files or send messages on its own?**
Per Meta's announcement, sensitive actions like deleting files or sending messages require your approval.

## Final Thoughts

Muse shows how quickly "AI agent on your computer" has moved from demo to mainstream download. The product is polished and clearly resonating, and the security story is a reminder that the more access you hand an agent, the more it matters when something goes wrong. If you try it, start with the free tier, grant permissions narrowly, and keep an eye on updates.

Sources: [9to5Mac](https://9to5mac.com/2026/09/17/meta-ai-launches-muse-personal-agent-including-a-new-mobile-app-for-iphone/), [MarkTechPost](https://www.marktechpost.com/2026/09/19/meta-launches-muse-for-mac/), [Tech Insider](https://tech-insider.org/meta-muse-personal-ai-agent-launch-2026/), [TechRadar](https://www.techradar.com/pro/security/meta-muse-already-has-a-majorly-worrying-zero-day-security-issue), [InfoQ](https://www.infoq.com/news/2026/09/meta-muse-zeroday/), [NewsBytes](https://www.newsbytesapp.com/news/science/meta-s-muse-app-had-a-critical-0-day-vulnerability-fixed/story), [Techdirt](https://www.techdirt.com/2026/09/24/metas-ai-agent-muse-launches-with-nasty-zero-day-flaw-then-gets-blocked-by-amazon/)
