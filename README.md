# Documentation templates

Practical starting points from [Emminex Techdocs](https://emminextechdocs.com) for teams documenting APIs, SDKs, and developer tools.

## Choose a template

| Template | Use it when |
| --- | --- |
| [Quickstart](templates/quickstart.md) | A new developer needs a first successful result |
| [API endpoint](templates/api-endpoint.md) | A developer needs a precise operation contract |
| [Documentation audit](templates/documentation-audit.md) | You need an evidence-led improvement plan |
| [Content ownership](templates/content-ownership.md) | Documentation needs a review and release process |

Copy one template into your documentation repository. Replace bracketed prompts with verified product details, run every command in a clean environment, and remove sections that do not apply. Prompts are not product facts.

The audit template separates observed problems from hypotheses and verified results. Do not fill gaps with invented metrics or client claims.

## Review before publishing

- Can a developer identify prerequisites before starting?
- Do examples show both input and expected output?
- Are versions, permissions, and irreversible actions explicit?
- Does each failure case explain a recovery step?
- Can every reported result be traced to evidence?
- Is an owner responsible for updating the page?

## Validation

Node.js 22 or 24 is sufficient. No installation is required.

```sh
node scripts/check.mjs
```

This checks required template sections and local Markdown links. It does not judge technical accuracy or verify external URLs.

[See a completed API documentation sample](https://emminextechdocs.com/samples/relayline-api) · [Discuss documentation work](https://emminextechdocs.com/contact)
