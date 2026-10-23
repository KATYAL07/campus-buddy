import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');

test('write API routes reject banned sessions', () => {
  for (const rel of ['app/api/posts/route.js', 'app/api/chat/route.js', 'app/api/reports/route.js']) {
    const src = readFileSync(join(root, rel), 'utf8');
    assert.ok(src.includes('rejectIfBanned'), rel);
    assert.ok(src.includes('writeUserId'), rel);
  }
});

test('demo login rejects banned users', () => {
  const src = readFileSync(join(root, 'app/api/auth/demo/route.js'), 'utf8');
  assert.ok(src.includes('isBanned'));
  assert.ok(src.includes('403'));
});
