import { describe, it, expect } from 'vitest';
import fs from 'node:fs';
describe('scaffold', () => {
  it('tiene astro config', () => {
    expect(fs.existsSync('astro.config.mjs')).toBe(true);
  });
});
