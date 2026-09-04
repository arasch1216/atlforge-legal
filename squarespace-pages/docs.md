# Documentation — paste into Squarespace

**Version:** 2.2.1 · Jira Cloud · Atlassian Forge

## What it does

Ticket Quality Auditor scores Jira issues for completeness, clarity, testability, and actionable requirements. Findings appear in an Issue Panel. Optional AI suggestions can improve ticket text — you review and confirm before anything is written back to Jira.

## Install

1. Install from Atlassian Marketplace (Jira Cloud).
2. Grant permissions: read:jira-work, write:jira-work, storage:app.
3. Open Admin to confirm project and issue-type filters (defaults work immediately).
4. Open any issue → Ticket Quality panel → Analyze Ticket.

## Issue Panel

- **Analyze / Re-analyze** — rules-based scoring plus optional Forge LLM analysis
- **Improve Ticket** — proposed rewrite; applied only after your confirmation
- Scores are 0–100 with quality levels (Excellent / Good / Needs Improvement / Poor)

## Admin configuration

- Enable or disable the product, AI, and Improve Ticket
- Automation on issue create/update with minimum interval safeguards
- Project and issue-type filters
- Scoring model version and thresholds

## Permissions

- read:jira-work — read issue fields for analysis
- write:jira-work — apply confirmed Improve Ticket updates
- storage:app — store configuration and analysis results in Forge storage

## Privacy & AI

Analysis results are stored in Forge app storage. When AI is enabled, selected ticket text is processed by Atlassian-hosted Forge LLMs (no third-party AI egress).

## Support

support@adlabdevelopment.com
