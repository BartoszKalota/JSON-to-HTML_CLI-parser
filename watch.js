import fs from 'fs';
import path from 'path';

import { RESULT_OUTPUT, TEMP_OUTPUT } from './common/variables.js';

fs.watchFile(RESULT_OUTPUT, async () => {
  try {
    await fs.promises.mkdir(TEMP_OUTPUT, { recursive: true });
    const currentData = await fs.promises.readFile(RESULT_OUTPUT, 'utf-8');
    
    const randomSuffix = Math.floor(Math.random() * 1000000);
    const fileName = path.join(TEMP_OUTPUT, `result_${randomSuffix}.html`);
    await fs.promises.writeFile(fileName, currentData);
  } catch (err) {
    console.log(err);
  }
});

process.on('SIGINT', async () => {
  console.log('Exiting...');
  try {
    await fs.promises.rmdir(TEMP_OUTPUT, { recursive: true });
    process.exit();
  } catch (err) {
    console.log(err);
    process.exit();
  }
});