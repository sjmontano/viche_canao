import { it, expect } from 'vitest'; import fs from 'node:fs';
it('hero liviana y sin GA', () => {
  const st = fs.statSync('public/fotos/hero.jpg');
  expect(st.size).toBeLessThan(400*1024);
  const base = fs.readFileSync('src/layouts/Base.astro','utf8');
  expect(base).not.toContain('googletagmanager');
});
