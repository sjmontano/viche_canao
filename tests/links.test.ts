import { describe, it, expect } from 'vitest';
import fs from 'node:fs';
describe('base', () => {
  it('Base.astro existe y usa SEOHead', () => {
    const s = fs.readFileSync('src/layouts/Base.astro','utf8');
    expect(s).toContain('SEOHead');
    expect(s).toContain('+18');
  });
});
describe('paginas', () => { it('index usa Hero', () => {
  const s = fs.readFileSync('src/pages/index.astro','utf8');
  expect(s).toContain('Hero');
});});
