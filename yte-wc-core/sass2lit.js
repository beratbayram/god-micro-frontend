const sass = require('sass');
const fs = require('fs');
const chokidar = require('chokidar');

const isWatching = process.argv.includes('--watch');

function compileSass(event, path) {
  console.info(`Chokidar(${event}): ${path}`);
  const result = sass.compile(path);
  const litCSS = `import {css} from 'lit';export default css\`${result.css}\`;`;

  fs.writeFileSync(`./dist/${path.replace('.scss', '.css.js')}`, litCSS);
}

chokidar
  .watch('src/**/*.scss', { persistent: isWatching })
  .on('all', compileSass);
