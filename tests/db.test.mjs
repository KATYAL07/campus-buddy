import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const seed = JSON.parse(readFileSync(join(root, 'data/seed/demo.json'), 'utf8'));

test('demo seed has users, posts and events', () => {
  assert.ok(seed.users.length >= 3);
  assert.ok(seed.posts.length >= 1);
  assert.ok(seed.events.length >= 1);
});

test('events carry date, venue and rsvp fields', () => {
  for (const event of seed.events) {
    assert.ok(event.id);
    assert.ok(event.title);
    assert.ok(event.date);
    assert.ok(event.venue);
    assert.equal(typeof event.rsvps, 'number');
  }
});
