const fs = require('fs');
const path = require('path');

const src = path.resolve(__dirname, '../src/data/topicContents.ts');
const outDir = path.resolve(__dirname, '../src/data/topics');

if (!fs.existsSync(src)) {
  console.error('src/data/topicContents.ts not found');
  process.exit(1);
}

const content = fs.readFileSync(src, 'utf8');
// find the start of the object literal
const start = content.indexOf('export const topicContents');
if (start === -1) {
  console.error('export const topicContents not found');
  process.exit(1);
}
// find the first '{' after the declaration
const objStart = content.indexOf('{', start);
if (objStart === -1) {
  console.error('Opening brace not found');
  process.exit(1);
}
// find matching closing brace for the outer object
let i = objStart;
let depth = 0;
let objEnd = -1;
for (; i < content.length; i++) {
  const ch = content[i];
  if (ch === '{') depth++;
  else if (ch === '}') {
    depth--;
    if (depth === 0) {
      objEnd = i;
      break;
    }
  }
}
if (objEnd === -1) {
  console.error('Could not find end of topicContents object');
  process.exit(1);
}

const objLiteral = content.slice(objStart + 1, objEnd); // contents between braces

// Now scan for top-level entries: "key": { ... }
let pos = 0;
const entries = [];
while (pos < objLiteral.length) {
  // skip whitespace
  while (pos < objLiteral.length && /\s/.test(objLiteral[pos])) pos++;
  if (pos >= objLiteral.length) break;
  // expect "key" or 'key'
  const quote = objLiteral[pos];
  if (quote !== '"' && quote !== "'") {
    // unexpected token, try to advance
    pos++;
    continue;
  }
  pos++;
  let key = '';
  while (pos < objLiteral.length && objLiteral[pos] !== quote) {
    key += objLiteral[pos++];
  }
  pos++; // skip closing quote
  // skip to colon
  while (pos < objLiteral.length && objLiteral[pos] !== ':') pos++;
  pos++; // skip colon
  // skip whitespace
  while (pos < objLiteral.length && /\s/.test(objLiteral[pos])) pos++;
  if (objLiteral[pos] !== '{') {
    // unexpected, continue
    continue;
  }
  // capture object starting at pos
  let startPos = pos;
  let d = 0;
  while (pos < objLiteral.length) {
    if (objLiteral[pos] === '{') d++;
    else if (objLiteral[pos] === '}') d--;
    pos++;
    if (d === 0) break;
  }
  const literal = objLiteral.slice(startPos, pos);
  entries.push({ key, literal });
  // skip trailing comma/whitespace
  while (pos < objLiteral.length && /[\s,]/.test(objLiteral[pos])) pos++;
}

if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

entries.forEach(e => {
  const safeId = e.key.replace(/[^a-z0-9-_]/gi, '-');
  const file = path.join(outDir, `${safeId}.ts`);
  const module = `import type { TopicContent } from '../topicContents';\n\nconst content: TopicContent = ${e.literal};\n\nexport default content;\n`;
  fs.writeFileSync(file, module, 'utf8');
  console.log('Wrote', file);
});

console.log('Done. Wrote', entries.length, 'topic files to', outDir);
