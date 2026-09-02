# Legal & support site source

Published at **https://adlabdevelopment.com/** (AD Lab Development).

Canonical vendor values: `../vendor.json`

## Pages

| Page | File | Marketplace field |
|------|------|-------------------|
| Home | `index.html` | Vendor / partner website |
| Documentation | `docs.html` | Documentation URL |
| Privacy | `privacy.html` | Privacy / data security |
| Terms | `terms.html` | Additional terms (Bonterms is primary EULA) |
| Support | `support.html` | Support page |
| Security | `security.html` | Security policy |

**Support:** `support@adlabdevelopment.com`  
**Security:** `security@adlabdevelopment.com`

## Deploy

Sync these files to the host serving `adlabdevelopment.com`, or push to the repo
connected to that site’s deploy pipeline.

```powershell
# Verify all pages return direct 200
$urls = @(
  'https://adlabdevelopment.com/',
  'https://adlabdevelopment.com/docs.html',
  'https://adlabdevelopment.com/privacy.html',
  'https://adlabdevelopment.com/terms.html',
  'https://adlabdevelopment.com/support.html',
  'https://adlabdevelopment.com/security.html'
)
foreach ($u in $urls) {
  try {
    $r = Invoke-WebRequest $u -UseBasicParsing -MaximumRedirection 0 -TimeoutSec 20
    "DIRECT $($r.StatusCode) $u"
  } catch {
    $c = if ($_.Exception.Response) { [int]$_.Exception.Response.StatusCode } else { 'ERR' }
    "NOT-DIRECT $c $u"
  }
}
```
