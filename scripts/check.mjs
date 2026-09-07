import { readFile, access } from 'node:fs/promises';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import assert from 'node:assert/strict';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const files = {
  'README.md': ['Choose a template', 'Validation'],
  'templates/quickstart.md': ['Prerequisites', 'Troubleshooting', 'Clean up', 'Maintenance'],
  'templates/api-endpoint.md': ['Authentication', 'Parameters', 'Response', 'Errors', 'Verification'],
  'templates/documentation-audit.md': ['Scope', 'Evidence register', 'Verification and results', 'Publication permission'],
  'templates/content-ownership.md': ['Ownership register', 'Review workflow', 'Release and rollback', 'Measurement'],
};
for (const [file, headings] of Object.entries(files)) {
  const text = await readFile(resolve(root, file), 'utf8');
  for (const heading of headings) assert.ok(text.includes(`## ${heading}`), `${file}: missing ${heading}`);
  for (const match of text.matchAll(/\]\(([^)]+)\)/g)) {
    if (/^(https?:|mailto:|#)/.test(match[1])) continue;
    await access(resolve(root, dirname(file), match[1].split('#')[0]));
  }
}
console.log('All four templates and local Markdown links passed.');
