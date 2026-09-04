# Publish adlabdevelopment.com on GitHub Pages

Host the legal site **for free** on GitHub Pages. Keep domain registration on Squarespace;
**you do not need a Squarespace website subscription** — only DNS changes.

All steps below are in your **browser** (github.com + squarespace.com). No local deploy tools required.

## Overview

| Piece | Where |
|-------|--------|
| Website files | GitHub repo [arasch1216/atlforge-legal](https://github.com/arasch1216/atlforge-legal) |
| Hosting | GitHub Pages (free) |
| Domain DNS | Squarespace → Domains → adlabdevelopment.com → DNS Settings |

## Part 1 — Enable GitHub Pages (github.com)

1. Open **https://github.com/arasch1216/atlforge-legal**
2. **Settings** → **Pages** (left sidebar)
3. **Build and deployment**
   - Source: **Deploy from a branch**
   - Branch: **main** → folder **/ (root)** → Save
4. **Custom domain**: enter `adlabdevelopment.com` → Save
5. Wait for DNS check (may take up to 24h after Part 2). When ready, enable **Enforce HTTPS**.

GitHub will show the required DNS records on this screen — use them in Part 2.

## Part 2 — Point Squarespace DNS to GitHub

1. **squarespace.com** → **Domains** → **adlabdevelopment.com**
2. **DNS Settings** (left sidebar)
3. **Remove or disable** records that point the root domain to Squarespace’s website
   (parking / “under development” page). Common names: `@` A records to Squarespace IPs.
4. **Add** GitHub Pages records:

### Apex domain (`adlabdevelopment.com`)

Add **four A records** for host `@` (or blank / root):

| Type | Host | Value |
|------|------|-------|
| A | @ | `185.199.108.153` |
| A | @ | `185.199.109.153` |
| A | @ | `185.199.110.153` |
| A | @ | `185.199.111.153` |

### Optional: `www`

| Type | Host | Value |
|------|------|-------|
| CNAME | www | `arasch1216.github.io` |

5. Save. DNS propagation often takes **15 minutes to a few hours**.

## Part 3 — Verify

Open in a **private/incognito** window:

- https://adlabdevelopment.com/
- https://adlabdevelopment.com/docs.html
- https://adlabdevelopment.com/privacy.html
- https://adlabdevelopment.com/terms.html
- https://adlabdevelopment.com/support.html
- https://adlabdevelopment.com/security.html

Each should show the AD Lab Development site (not “under development”).

On GitHub → repo **Settings → Pages**, status should show green check for custom domain.

## Updating content later (browser only)

1. github.com → **arasch1216/atlforge-legal**
2. Click the file to edit (e.g. `support.html`) → pencil icon → edit → **Commit changes**
3. GitHub Pages redeploys automatically in ~1–2 minutes

Or sync from the ATLForge monorepo `marketplace/site/` when you have a safe environment to push.

## Marketplace URLs

These stay the same in `marketplace/vendor.json` and Partner portal — no listing changes needed
if paths remain `/*.html` as today.

## Troubleshooting

| Issue | Fix |
|-------|-----|
| Still shows Squarespace placeholder | DNS not propagated; confirm A records; wait up to 24h |
| GitHub “Domain’s DNS record could not be verified” | A records must be exact; remove conflicting `@` records |
| HTTPS not available | Wait for DNS verify first, then toggle Enforce HTTPS |
| 404 on subpages | Ensure files exist at repo root (`docs.html`, etc.) |

## Cost

- **GitHub Pages:** free for public repos
- **Squarespace:** domain renewal only (no website plan required)
- **Cancel** Squarespace website trial/subscription if you only need the domain
