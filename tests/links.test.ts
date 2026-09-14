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
describe('catalogo', () => { it('slug page existe', () => {
  expect(fs.existsSync('src/pages/catalogo/[slug].astro')).toBe(true);
});});
describe('archivo', () => { it('404 tiene +18 e inicio', () => {
  const s = fs.readFileSync('src/pages/404.astro','utf8');
  expect(s).toContain('+18');
  expect(s).toContain('/');
});});
