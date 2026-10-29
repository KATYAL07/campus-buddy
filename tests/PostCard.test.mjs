import assert from 'node:assert/strict';
import { createRequire } from 'node:module';
import { readFileSync } from 'node:fs';
const require = createRequire(import.meta.url);
const babel = require('next/dist/compiled/babel/core');
const presetReact = require('next/dist/compiled/babel/preset-react');
const presetEnv = require('next/dist/compiled/babel/preset-env');
const transformModulesCommonjs = require('next/dist/compiled/babel/plugin-transform-modules-commonjs');

const react = require('react');
const { renderToStaticMarkup } = require('react-dom/server');
const source = readFileSync(new URL('../components/PostCard.js', import.meta.url), 'utf8');
const { code } = babel.transformSync(source, {
  configFile: false,
  babelrc: false,
  presets: [
    [presetReact, { runtime: 'automatic' }],
    [presetEnv, { targets: { node: 'current' } }],
  ],
  plugins: [transformModulesCommonjs],
});
const module = { exports: {} };
const getUser = () => ({ id: 'author-1', name: 'Ada Lovelace', branch: 'CSE', semester: 3 });
new Function('require', 'module', 'exports', code)((name) => {
  if (name === 'next/link') return { __esModule: true, default: ({ children, ...props }) => react.createElement('a', props, children) };
  if (name === '@/lib/db') return { getUser };
  return require(name);
}, module, module.exports);

const PostCard = module.exports.default;
const markup = renderToStaticMarkup(react.createElement(PostCard, {
  post: {
    authorId: 'author-1', title: 'Study notes', type: 'Notes', subject: 'Math',
    branch: 'CSE', description: 'Useful notes', link: null, upvotes: 2,
    createdAt: '2026-01-01T00:00:00.000Z',
  },
}));

assert.match(markup, /<div class="avatar" aria-label="Ada Lovelace avatar">AL<\/div>/,
  'missing avatar should show the author initials AL');
