import sharp from 'sharp';
import { readdir, stat, writeFile, readFile } from 'fs/promises';
import { join, extname, basename } from 'path';

const TARGET_MB = 2;
const MAX_WIDTH = 1920;

async function getFiles(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const files = [];
  for (const e of entries) {
    const full = join(dir, e.name);
    if (e.isDirectory()) files.push(...await getFiles(full));
    else if (['.webp', '.jpg', '.jpeg', '.png'].includes(extname(e.name).toLowerCase())) files.push(full);
  }
  return files;
}

const files = await getFiles('public');
let saved = 0;
let processed = 0;
let skipped = 0;

for (const file of files) {
  const before = (await stat(file)).size;
  const ext = extname(file).toLowerCase();

  if (before < 100 * 1024) { skipped++; continue; }

  try {
    const fileBuffer = await readFile(file);
    let img = sharp(fileBuffer);
    const meta = await img.metadata();

    if (meta.width > MAX_WIDTH) {
      img = sharp(fileBuffer).resize(MAX_WIDTH, null, { withoutEnlargement: true });
    }

    let buf;
    for (let q = 80; q >= 40; q -= 10) {
      if (ext === '.webp') buf = await img.webp({ quality: q }).toBuffer();
      else if (ext === '.png') buf = await img.png({ compressionLevel: 9 }).toBuffer();
      else buf = await img.jpeg({ quality: q }).toBuffer();
      if (buf.length <= TARGET_MB * 1024 * 1024) break;
    }

    if (buf.length > TARGET_MB * 1024 * 1024) {
      let w = Math.min(meta.width ?? MAX_WIDTH, MAX_WIDTH);
      while (buf.length > TARGET_MB * 1024 * 1024 && w > 400) {
        w = Math.floor(w * 0.8);
        const resized = sharp(fileBuffer).resize(w, null, { withoutEnlargement: true });
        if (ext === '.webp') buf = await resized.webp({ quality: 70 }).toBuffer();
        else buf = await resized.jpeg({ quality: 70 }).toBuffer();
      }
    }

    await writeFile(file, buf);

    const after = buf.length;
    saved += (before - after);
    processed++;
    console.log(`[${processed}] ${basename(file)}: ${(before/1024/1024).toFixed(1)}MB -> ${(after/1024/1024).toFixed(1)}MB`);
  } catch (e) {
    console.error(`SKIP ${basename(file)}: ${e.message}`);
  }
}

const allFiles = await getFiles('public');
const totalSize = (await Promise.all(allFiles.map(f => stat(f).then(s => s.size)))).reduce((a, b) => a + b, 0);
console.log(`\nDone. ${processed} compressed, ${skipped} skipped. Saved ${(saved/1024/1024).toFixed(0)} MB. New total: ${(totalSize/1024/1024).toFixed(0)} MB`);
