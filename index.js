import * as CONSTANTS from './common/variables.js';
import {
  getHTMLTemplate, fillTemplateWithData, saveOutputHTML, getInputData
} from './common/utils.js';

(async () => {
  const template = await getHTMLTemplate();
  const filledTemplate = fillTemplateWithData(template, 'My first generated HTML', 'It\'s quite fun!');
  await saveOutputHTML(filledTemplate);
  
  console.log(await getInputData());
})();