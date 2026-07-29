import fs from 'fs';
import path from 'path';

const distPath = path.resolve('dist');
const founderPath = path.join(distPath, 'founder');

if (!fs.existsSync(founderPath)) {
  fs.mkdirSync(founderPath, { recursive: true });
}

fs.copyFileSync(path.join(distPath, 'index.html'), path.join(founderPath, 'index.html'));
fs.copyFileSync(path.join(distPath, 'index.html'), path.join(distPath, '404.html'));

console.log('✅ Successfully created dist/founder/index.html and dist/404.html for GitHub Pages direct routing!');
