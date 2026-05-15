import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const filesToConvert = [
  'src/assets/logo.png',
  'src/assets/hero-hydraulic.jpg',
  // partner logos
  'src/assets/logos/denison-hydraulics.jpg',
  'src/assets/logos/eaton.jpg',
  'src/assets/logos/hda.jpg',
  'src/assets/logos/parker.jpg',
  'src/assets/logos/rexroth.jpg',
  'src/assets/logos/sauer-danfoss.jpg',
  'src/assets/logos/vickers.jpg',
];

async function convert() {
  for (const rel of filesToConvert) {
    const abs = path.resolve(rel);
    if (!fs.existsSync(abs)) {
      console.warn(`file not found: ${rel}`);
      continue;
    }
    const out = abs.replace(/\.(png|jpe?g)$/i, '.webp');
    try {
      await sharp(abs)
        .webp({ quality: 80 })
        .toFile(out);
      console.log(`converted ${rel} -> ${path.relative(process.cwd(), out)}`);
    } catch (e) {
      console.error(`failed ${rel}`, e);
    }
  }
}

convert();
