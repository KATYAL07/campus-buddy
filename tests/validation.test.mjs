import { test } from 'node:test';
import assert from 'node:assert/strict';
import { cleanText, validUrl, jsonError } from '../lib/validation.js';

test('cleanText trims and caps length', () => {
  assert.equal(cleanText('  hello  ', 10), 'hello');
  assert.equal(cleanText('x'.repeat(50), 10), 'x'.repeat(10));
  assert.equal(cleanText(null, 10), '');
  assert.equal(cleanText(12, 10), '');
});

test('validUrl accepts http and https only', () => {
  assert.equal(validUrl('https://example.com/a'), 'https://example.com/a');
  assert.equal(validUrl('http://example.com'), 'http://example.com/');
  assert.equal(validUrl('javascript:alert(1)'), '');
  assert.equal(validUrl('not a url'), '');
});

test('jsonError returns a 400 body by default', async () => {
  const res = jsonError('bad');
  assert.equal(res.status, 400);
  assert.deepEqual(await res.json(), { error: 'bad' });
  const custom = jsonError('nope', 422);
  assert.equal(custom.status, 422);
});
