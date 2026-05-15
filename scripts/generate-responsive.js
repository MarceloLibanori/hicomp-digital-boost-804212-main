import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const tasks = [
  { src: 'src/assets/logo.png', sizes: [150, 300], outPrefix: 'src/assets/logo' },
  { src: 'src/assets/hero-hydraulic.jpg', sizes: [480, 1024], outPrefix: 'src/assets/hero-hydraulic' },
];

async function run() {
  for (const t of tasks) {
    if (!fs.existsSync(t.src)) {
      console.warn('missing', t.src);
      continue;
    }
    for (const w of t.sizes) {
      const out = `${t.outPrefix}-${w}.webp`;
      await sharp(t.src).resize({ width: w }).webp({ quality: 75 }).toFile(out);
      console.log('wrote', out);
    }
  }
}

run();
