const fs = require('fs');
const path = require('path');

const src = path.resolve(__dirname, '../src/data/topicContents.ts');
const outDir = path.resolve(__dirname, '../src/data/topics');

if (!fs.existsSync(src)) {
  console.error('src/data/topicContents.ts not found');
  process.exit(1);
}

const content = fs.readFileSync(src, 'utf8');

// crude extraction: find the assignment to topicContents = { ... }
const m = content.match(/export const topicContents\s*:\s*Record<[^>]+>\s*=\s*({[\s\S]*})\s*;/m);
if (!m) {
  console.error('Could not extract topicContents object');
  process.exit(1);
}

const objLiteral = m[1];

// parse keys at top-level: match "<id>": { ... }
const entries = [];
let depth = 0;
let key = null;
let buf = '';
for (let i = 0; i < objLiteral.length; i++) {
  const ch = objLiteral[i];
  buf += ch;
  if (ch === '{') {
    depth++;
  } else if (ch === '}') {
    depth--;
  }
  if (depth === 0 && buf.trim()) {
    // buf contains something like ""key": { ... },"
    const entryMatch = buf.match(/\s*(["'])([^"']+)\1\s*:\s*({[\s\S]*})\s*,?\s*$/);
    if (entryMatch) {
      const id = entryMatch[2];
      const literal = entryMatch[3];
      entries.push({ id, literal });
    }
    buf = '';
  }
}

if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

entries.forEach(e => {
  const file = path.join(outDir, `${e.id}.ts`);
  const module = `import type { TopicContent } from '../topicContents';\n\nconst content: TopicContent = ${e.literal};\n\nexport default content;\n`;
  fs.writeFileSync(file, module, 'utf8');
  console.log('Wrote', file);
});

console.log('Done. Wrote', entries.length, 'topic files to', outDir);
