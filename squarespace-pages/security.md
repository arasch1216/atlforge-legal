# Security — paste into Squarespace

**Last updated:** 4 September 2026

Security practices for **Ticket Quality Auditor** by **AD Lab Development**.

## Platform

Runs entirely on **Atlassian Forge** (functions, KVS storage, Forge LLMs). Designed for Runs on Atlassian: no third-party AI egress, no Remotes/Connect backends.

## Authentication & authorization

- Access via customer’s Atlassian Cloud install
- API calls use Forge asApp identity
- User-initiated actions use Forge Authorize API before Jira access
- No collection of Atlassian passwords or shared API secrets

## Permissions

- read:jira-work — read issues and events
- write:jira-work — apply confirmed improvements
- storage:app — persist config and analysis

## Data & logging

Installation-scoped Forge storage. Structured logs with secret redaction; logs stay in Forge logging.

## Network egress

No customer-managed egress or third-party AI for core functionality.

## Vulnerability reporting

security@adlabdevelopment.com — include reproduction steps; do not send secrets in clear text.

## Related

Privacy Policy · Terms of Service · Documentation
