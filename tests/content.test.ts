import { describe, it, expect } from 'vitest';
import fs from 'node:fs';
describe('scaffold', () => {
  it('tiene astro config', () => {
    expect(fs.existsSync('astro.config.mjs')).toBe(true);
  });
});
describe('contenido', () => {
  it('3 productos existen', () => {
    for (const s of ['puro','dorado','vinete']) expect(fs.existsSync(`src/content/productos/${s}.md`)).toBe(true);
  });
});
