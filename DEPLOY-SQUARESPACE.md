# Publish adlabdevelopment.com on Squarespace (browser only)

**No local machine, no CLI, no third-party static host required.** Everything happens in
your browser at [squarespace.com](https://www.squarespace.com/) and
[marketplace.atlassian.com](https://marketplace.atlassian.com/) when you submit.

The HTML in this folder is the **source of truth** for page content. You recreate it inside
Squarespace using the visual editor (or paste from `squarespace-pages/` markdown).

## Why Squarespace (not a separate host)

- Domain already lives on Squarespace
- Avoids corporate IT issues with local deploy tools, DNS CLIs, or extra hosting accounts
- One vendor for domain + website

## Required Marketplace URLs

These must return **HTTP 200 with no redirect** (test in a private browser window):

| URL | Squarespace page |
|-----|------------------|
| `https://adlabdevelopment.com/` | Home (default) |
| `https://adlabdevelopment.com/docs.html` | Documentation |
| `https://adlabdevelopment.com/privacy.html` | Privacy |
| `https://adlabdevelopment.com/terms.html` | Terms |
| `https://adlabdevelopment.com/support.html` | Support |
| `https://adlabdevelopment.com/security.html` | Security |

## Step 1 — Remove “under development”

1. Log in at **squarespace.com** → select your site.
2. **Settings** → **Site availability** → set to **Public**.
3. Open the **Home** page in the editor and delete/replace the placeholder “under development” content.

## Step 2 — Build the home page

Use Squarespace sections (recommended — looks native and professional):

1. **Hero**: Title “AD Lab Development”, subtitle “Atlassian Forge software for Jira Cloud teams”.
2. **Text**: Short paragraph about building Marketplace apps with Runs on Atlassian architecture.
3. **Button**: Link to your Documentation page.
4. **Cards / list**: Links to Documentation, Support, Privacy, Terms, Security.
5. **Footer**: `support@adlabdevelopment.com` · `security@adlabdevelopment.com`

Copy text from `index.html` or `squarespace-pages/home.md`.

**Navigation**: Site header → add links to all six pages.

## Step 3 — Create the five sub-pages

For each page below:

1. **Pages** → **+** → **Blank** (or “Text” layout).
2. Set the **page title** (e.g. “Documentation”).
3. **Page settings** (gear icon) → **General** → **URL slug**:
   - Try exactly: `docs.html`, `privacy.html`, `terms.html`, `support.html`, `security.html`
   - Squarespace sometimes accepts `.html` in the slug; if it strips the extension, use the slug Squarespace gives you and update `marketplace/vendor.json` + Marketplace listing to match **only if** the new URL returns direct 200.
4. Paste content from the matching file in `squarespace-pages/`.
5. Add header navigation links (same on every page).

## Step 4 — Publish

Click **Publish** in the Squarespace editor. Wait 1–2 minutes, then test each URL in a
**private/incognito** browser window.

## Step 5 — Verify (browser only)

Open each URL manually. Every page should load with real content and no login prompt.

Optional: use an online “HTTP status checker” website (search “check HTTP status code”) —
paste each URL and confirm **200**, not 301/302/404.

## Step 6 — Sync Marketplace listing

In [Marketplace partner portal](https://marketplace.atlassian.com/manage/apps), confirm
these match `marketplace/vendor.json` and `marketplace/contact-fields.md`.

## Content reference

| Squarespace page | Copy from |
|------------------|-----------|
| Home | `squarespace-pages/home.md` or `index.html` |
| Documentation | `squarespace-pages/docs.md` or `docs.html` |
| Support | `squarespace-pages/support.md` or `support.html` |
| Privacy | `squarespace-pages/privacy.md` or `privacy.html` |
| Terms | `squarespace-pages/terms.md` or `terms.html` |
| Security | `squarespace-pages/security.md` or `security.html` |

## Optional: edit HTML on GitHub (still no local machine)

If you prefer not to retype content in Squarespace, you can update files in the
**atlforge-legal** GitHub repo using **github.com’s web editor** only — but those files
still need to be **published through Squarespace** unless you later point DNS elsewhere.
For your setup, **Squarespace pages are the live site**.

## Troubleshooting

| Problem | Fix |
|---------|-----|
| URL shows “under construction” | Republish home page; check Site availability = Public |
| `/docs.html` 404 | Check page slug in Page settings; republish |
| Marketplace rejects links | Every field must be filled; no redirects; test in incognito |
| Slug cannot include `.html` | Use Squarespace slug (e.g. `/docs`), verify direct 200, update `vendor.json` + listing |

## Do not

- Run deploy scripts from a corporate laptop if IT policy forbids it
- Use URL redirects for Marketplace-required links (redirects fail validation)
- Leave Support ticketing system empty in Marketplace Details tab
