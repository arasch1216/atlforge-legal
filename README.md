# GitHub Pages legal/support site

Static site for Marketplace / Forge distribution URLs.

## Pages

| Page | File | Use in Atlassian forms |
|------|------|------------------------|
| Privacy Policy | `privacy.html` | Privacy policy URL |
| Terms of Service | `terms.html` | Terms of service URL |
| Support | `support.html` | Support URL / contact page |
| Home | `index.html` | Optional landing |

Support email used in pages: `adhayes1321@gmail.com`

## Publish (separate public repo recommended)

```bash
# from marketplace/site after gh auth login
gh repo create atlforge-legal --public --source=. --remote=origin --push
gh api -X PUT "repos/<YOUR_GITHUB_USER>/atlforge-legal/pages" -f build_type=legacy -f source[branch]=main -f source[path]=/
```

Expected URLs (after Pages is active):

- `https://<YOUR_GITHUB_USER>.github.io/atlforge-legal/privacy.html`
- `https://<YOUR_GITHUB_USER>.github.io/atlforge-legal/terms.html`
- `https://<YOUR_GITHUB_USER>.github.io/atlforge-legal/support.html`
