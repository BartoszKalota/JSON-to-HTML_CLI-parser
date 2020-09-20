import program from 'commander';

import * as CONSTANTS from './common/variables.js';
import { basicListPath, basicTablePath } from './paths/paths.js';

program
  .version('1.0.0')
  .description('JSON to HTML - CLI parser');

program
  .command('list')
  .alias('l')
  .option('-tp, --type [type]', 'order (ol) or unorder (ul) list - default is ul')
  .option('-t, --title [title]', 'page title for your HTML')
  .action(async ({ type, title }) => {
    try {
      const listTemplate = type === 'ol' ? CONSTANTS.OL_BASIC_TEMPLATE : CONSTANTS.UL_BASIC_TEMPLATE;
      await basicListPath(listTemplate, title);
    } catch (err) {
      console.log(err);
    }
  });

program
  .command('table')
  .alias('t')
  .option('-t, --title [title]', 'page title for your HTML')
  .action(async ({ title }) => {
    try {
      await basicTablePath(CONSTANTS.TABLE_BASIC_TEMPLATE, title);
    } catch (err) {
      console.log(err);
    }
  });

program.parse(process.argv);