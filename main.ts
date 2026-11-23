// MakeFun news-image entry for mikasaggwp.
// Copies the approved v4 world-news image (entry.png, 1024x1024 JPEG bytes)
// into the grader's output directory, verifying size first.
import { copyFileSync, mkdirSync, statSync } from 'node:fs';
import { join } from 'node:path';

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const src = new URL('./entry.png', import.meta.url);
const size = statSync(src).size;
if (size > 1048576) throw new Error(`entry.png too large: ${size} bytes`);
mkdirSync(outDir, { recursive: true });
copyFileSync(src, join(outDir, 'entry.png'));
const written = statSync(join(outDir, 'entry.png')).size;
if (written !== size) throw new Error('output size mismatch');
console.log(`wrote entry.png (${size} bytes) to ${outDir}`);
