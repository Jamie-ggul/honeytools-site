---
title: "Fireflies.ai Integrations in 2026: What Actually Connects to Slack, Notion, HubSpot & More"
description: "A research-based guide to Fireflies.ai integrations — how it joins Zoom, Meet, and Teams, what it sends to Slack, Notion, and HubSpot, which plan unlocks what, and where the limits are."
tool: "Fireflies.ai"
pubDate: 2026-11-15
tags: ["Fireflies.ai", "Integrations", "AI Meeting Assistant", "Workflow"]
affiliateUrl: "https://fireflies.ai/?fpr=honeytools"
affiliateApproved: true
draft: false
---

**TL;DR:** Fireflies.ai's integrations fall into two layers. The first layer — getting into your meetings on Zoom, Google Meet, Microsoft Teams, Webex and others — is available on every plan, including Free. The second layer — sending notes *out* to tools like Slack, Notion, and HubSpot automatically — is where plans start to matter: the pricing page lists "Unlimited integrations" from Pro upward, saving full transcripts to Notion or HubSpot needs Pro or higher, and the rules that decide *which* meetings get sent where (Integration Rules) are Business-only. If you only need a summary of every meeting dropped into one Slack channel, the setup is simple. If you need "client calls go to the CRM, internal standups go to Notion, nothing else goes anywhere," budget for Business.

## A Quick Note on How This Guide Was Put Together

Like our [Fireflies.ai alternatives roundup](/reviews/fireflies-ai-alternatives-2026/), this is a research-based guide, not a hands-on test of every integration. Everything below comes from Fireflies' own [pricing page](https://fireflies.ai/pricing) and its [help center](https://guide.fireflies.ai/collections/7838701582-integrations), checked on **November 15, 2026**. Integration behavior changes more often than pricing does, so if one specific connector is make-or-break for you, connect it on the free plan and send a test meeting before paying for anything.

## Layer 1: Getting Into Your Meetings

This is the part most people think of first, and it's also the least complicated.

Fireflies' help center lists these supported meeting platforms: **Google Meet, Zoom, Microsoft Teams, Dialpad, GoToMeeting, Lifesize, Webex, Jitsi**, plus a separate **Google Meet SDK** option ([source](https://guide.fireflies.ai/articles/5365127863-web-video-conference-platforms-supported)). According to that same article, these integrations are "turned on as soon as you create and sign into your Fireflies account" — you don't install anything separate per platform.

Two details worth knowing before you assume it will just work:

- **Some platforms need admin-side settings first.** Fireflies' own setup guides for Google Meet and Microsoft Teams are titled around configuring Google Workspace and Teams settings beforehand. If your company's IT locks down external participants or apps, that's where you'll hit friction — not inside Fireflies.
- **There's a bot-free option for Google Meet.** The standard approach is a Fireflies notetaker joining the call. The Google Meet SDK integration is described separately as a way to capture Meet calls, with a related help article titled "Bot-free meeting recording." If a visible bot in the participant list is the objection (something we cover in our [Fireflies privacy and security breakdown](/reviews/fireflies-ai-privacy-security-2026/)), that's the option to look at.

The Free plan on the [pricing page](https://fireflies.ai/pricing) explicitly includes "Zoom, GMeet, Teams, +more," so this whole layer is testable without a credit card.

## Layer 2: Where Your Notes Actually Go

This is where Fireflies either saves you real time or ends up as one more tab you have to remember to check. Fireflies' homepage says it connects with "240+ apps," and names Slack, Notion, HubSpot, Salesforce, Jira, Asana, Trello, Gmail, Outlook, and several recruiting tools (Greenhouse, Ashby, BambooHR, Gem). Below are the three most common destinations, based on what Fireflies' own setup guides say each one does.

### Slack

Fireflies' Slack integration (listed in the app as **Slack Assistant**) posts a meeting recap automatically after each call ([setup guide](https://guide.fireflies.ai/articles/1671003178-how-to-set-up-fireflies-slack-integration)):

- **The main message** includes the meeting title (linked back to the full Fireflies recap), the time, participants, and a short overview.
- **A threaded reply** carries the bullet-point notes and a checklist of action items — so the channel stays readable and the detail is one click away.
- It can post to **public channels, private channels, or DMs**. For a private channel, the Fireflies bot has to be invited first with `/invite @Fireflies`.

One step that trips people up: connecting Slack isn't enough on its own. The guide warns that until you create a configuration (pick a channel, optionally add an intro message, run a test, save), "no notes will push." You can create multiple configurations — for example, one for internal meetings and one for client meetings — but *filtering* meetings by title, host, or participants relies on Integration Rules, which are Business-plan only (more on that below).

If you'd rather not auto-post everything, there's also a manual route: open a meeting in the Fireflies dashboard, click the Slack icon, and send the notes to a channel you choose ([guide](https://guide.fireflies.ai/articles/2024180500-how-to-manually-send-fireflies-notes-to-slack)).

### Notion

The Notion integration sends meeting notes into your workspace either as **entries in a database** or as **sub-pages under a parent page** ([setup guide](https://guide.fireflies.ai/articles/7891929161-how-to-integrate-fireflies-with-notion?lang=en)). Database entries include title, host, date, attendees, an action-items field, and a link back to the transcript.

What's worth knowing:

- **Summaries sync automatically** after every meeting once the integration is on.
- **Full transcripts are a paid feature.** The guide states: "Saving meeting transcripts to Notion requires a Pro plan or higher."
- **Older meetings don't backfill on their own.** A "Push Past Meetings" option batch-sends meetings recorded before you connected Notion, filtered by date range.
- You can also send notes one meeting at a time, manually, if you don't want every call landing in Notion.

If your team already runs projects out of Notion (we cover that kind of setup in [how teams use Notion for collaboration](/reviews/notion-team-collaboration/)), the database option is the one that tends to fit best, since meeting notes become filterable records instead of a growing pile of pages.

### HubSpot (and CRMs in general)

The HubSpot integration is the most configurable of the three ([setup guide](https://guide.fireflies.ai/articles/4037978139-how-to-integrate-hubspot-with-fireflies?lang=en)):

- **Contacts:** notes, summaries, a transcript link, and call logs appear in the matching contact's activity timeline.
- **Deals and companies:** optionally logged to the associated deal (the pipeline and stage must already exist in HubSpot) and the linked company.
- **Tasks:** action items from the meeting can be created as HubSpot tasks.
- **Transcripts stay in Fireflies.** HubSpot gets a link to the transcript rather than a full copy — and, as with Notion, saving transcripts to HubSpot "requires a Pro plan or higher."
- **It works in reverse too:** a "Pull recordings" option brings HubSpot Dialer calls into Fireflies to be transcribed and summarized.

Fireflies' homepage says it works with "25+ CRMs," with Salesforce named alongside HubSpot. If your CRM is something other than HubSpot, check its specific guide in the [help center](https://guide.fireflies.ai/collections/7838701582-integrations) — field-level behavior differs by CRM, and we'd rather not assume one works exactly like another. If CRM logging plus call analysis is the main reason you're considering Fireflies, our look at the [Fireflies AI Sales Suite](/reviews/fireflies-ai-sales-suite-2026/) covers that side in more depth.

## AI Skills: Custom Outputs to Other Tools

Beyond the standard summary, Fireflies has **AI Skills** — custom outputs generated from meetings — that can be routed to connected tools ([guide](https://guide.fireflies.ai/articles/4620050483-how-to-send-ai-skill-outputs-to-any-integrated-tool)). Per-meeting skills can send output to HubSpot, Salesforce, Slack, Notion, Jira, Airtable, Monday.com, Trello, Google Docs, Pipedrive, Google Drive, Dropbox, and others; scheduled skills (daily, weekly, or monthly across many meetings) can go to destinations like Google Drive, Notion, Microsoft Excel, Teams, and email.

Two caveats from Fireflies' own documentation: AI Skills aren't on the Free plan (per the [pricing page](https://fireflies.ai/pricing)), and they consume **AI credits** charged per request — if your workspace runs out of credits, the skill may not run. The pricing page lists 20 AI credits on Free and Pro, 30 on Business, and 50 on Enterprise.

## For Everything Else: Webhooks and the API

If the tool you need isn't on the list, Fireflies offers **webhooks** that fire on three events — Meeting Transcribed, Meeting Summarized, and Meeting Bot Joined — with up to 5 webhooks per account ([guide](https://guide.fireflies.ai/articles/4539113610-how-to-integrate-webhooks-with-fireflies)). API access is listed on every plan on the pricing page, including Free. This is the developer route: it's flexible, but someone on your team has to build and maintain whatever sits on the other end.

## Which Plan Unlocks What

Prices below are the annual per-seat rates from the [Fireflies pricing page](https://fireflies.ai/pricing), checked November 15, 2026. Monthly billing costs more — see our [full Fireflies pricing breakdown](/reviews/fireflies-ai-pricing-2026/) for that comparison.

| | Free | Pro ($10) | Business ($19) | Enterprise ($39) |
|---|---|---|---|---|
| Zoom / Meet / Teams & more | Yes | Yes | Yes | Yes |
| API access | Yes | Yes | Yes | Yes |
| "Unlimited integrations" | No | Yes | Yes | Yes |
| AI Skills (custom outputs) | No | Yes | Yes | Yes |
| Transcripts saved to Notion / HubSpot | No | Yes | Yes | Yes |
| Integration Rules (filter which meetings go where) | No | No | Yes | Yes |
| Granular admin Integration Permissions | No | No | Yes | Yes |
| AI credits included | 20 | 20 | 30 | 50 |

The Integration Rules line is the one most worth paying attention to. Every integration guide we checked — Slack, Notion, HubSpot, webhooks — repeats the same sentence: "Integration Rules are available on Business or higher plans." Without them, an active integration sends **every** meeting. For a solo user that's usually fine. For a team where some calls are sensitive (HR, legal, board meetings) and others belong in a shared channel, it's the difference between a useful automation and an accidental leak.

## Where the Integrations Fall Short

Based on Fireflies' own documentation, these are the limits worth planning around:

- **"All or nothing" below Business.** Without Integration Rules, you can't automatically route meetings by title, host, or participant.
- **Transcripts don't fully copy into CRMs.** HubSpot gets a link back to Fireflies, so whoever reads the CRM record still needs Fireflies access to see the full conversation.
- **Some setup lives outside Fireflies.** Google Workspace and Teams admin settings, existing HubSpot pipelines, and inviting the bot to private Slack channels are all prerequisites you handle on the other tool's side.
- **AI Skills are credit-metered.** Heavy automated use can run into the monthly credit allowance.

## Who Should Care About This

**Pay attention to integrations if** your team lives in Slack, keeps project notes in Notion, or needs sales calls logged in a CRM without anyone copy-pasting. That's where Fireflies' integrations replace real manual work.

**You can mostly ignore them if** you're a single user who just wants searchable transcripts of your own calls. The Free plan's meeting-platform support covers that, and the [main Fireflies review](/reviews/fireflies-ai-review-2026/) is a better starting point than this guide.

## FAQ

**Does Fireflies send meeting summaries to Slack automatically?**
Yes, once you connect Slack Assistant *and* create at least one configuration with a destination channel. The recap posts as a main message with notes and action items in a thread.

**Can I use Fireflies integrations on the free plan?**
The meeting-platform integrations (Zoom, Meet, Teams and others) and API access are included on Free. The pricing page lists "Unlimited integrations" starting at Pro, and saving full transcripts to Notion or HubSpot requires Pro or higher.

**Can I choose which meetings get sent to an integration?**
You can send meetings manually one by one on any plan. Automatic filtering by meeting title, host, or participants uses Integration Rules, which require Business or higher.

**Does Fireflies work without Zoom?**
Yes. Google Meet, Microsoft Teams, Webex, GoToMeeting, Dialpad, Lifesize, and Jitsi are all listed as supported platforms.

## Final Thoughts

Fireflies' meeting-platform coverage is broad enough that "will it work with our video tool?" is rarely the real question. The real question is how much control you need over where notes end up. If one Slack channel or one Notion database for everything is fine, Pro covers it. If you need different meetings routed to different places automatically, that's a Business-plan feature, and it's worth deciding that before you roll it out to a team.

The quickest way to check your own stack is to connect it on the free tier and run one real meeting through it.

👉 [Try Fireflies.ai Free](https://fireflies.ai/?fpr=honeytools)
