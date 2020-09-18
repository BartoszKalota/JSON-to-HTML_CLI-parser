import program from 'commander';

import * as CONSTANTS from './common/variables.js';
import { basicListPath } from './paths/paths.js';

program
  .version('1.0.0')
  .description('JSON to HTML - CLI parser');

program
  .command('list')
  .alias('l')
  .action(async () => {
    try {
      await basicListPath();
    } catch (err) {
      console.log(err);
    }
  });

program.parse(process.argv);