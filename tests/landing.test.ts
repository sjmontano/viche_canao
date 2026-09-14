import { describe, it, expect } from 'vitest';
import fs from 'node:fs';
import path from 'node:path';

function allSourceFiles(dir: string, out: string[] = []): string[] {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) {
      if (e.name === 'node_modules' || e.name === 'dist' || e.name === '.astro') continue;
      allSourceFiles(p, out);
    } else if (/\.(astro|tsx|ts|css|md|yml|html)$/.test(e.name)) out.push(p);
  }
  return out;
}

describe('landing sin links rotos', () => {
  it('ninguna imagen externa higgs/figma/cloudfront en el código', () => {
    const bad: string[] = [];
    for (const f of allSourceFiles('src')) {
      const s = fs.readFileSync(f, 'utf8');
      if (/higgs\.ai|figma\.site|cloudfront\.net/.test(s)) bad.push(f);
    }
    expect(bad).toEqual([]);
  });
  it('keyframes del sistema de animación existen en global.css', () => {
    const css = fs.readFileSync('src/styles/global.css', 'utf8');
    for (const k of ['wordReveal', 'fadeUp', 'fadeIn', 'slideInLeft', 'slideInRight', 'scaleIn']) {
      expect(css).toContain(`@keyframes ${k}`);
    }
  });
  it('colores de marca presentes en tokens', () => {
    const tw = fs.readFileSync('tailwind.config.mjs', 'utf8');
    expect(tw).toContain('#01271A');
    expect(tw).toContain('#F89902');
  });
});
