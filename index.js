import * as CONSTANTS from './common/variables.js';
import {
  getHTMLTemplate, fillTemplateWithData, saveOutputHTML, getInputData
} from './common/utils.js';
import { getListTemplate, fillListTemplateWithDataBasic } from './list/list-utils.js';

(async () => {
  const template = await getHTMLTemplate();
  const filledTemplate = fillTemplateWithData(template, 'My first generated HTML', 'It\'s quite fun!');
  await saveOutputHTML(filledTemplate);
  
  const parsedListBasicJson = await getInputData();
  const listTemplate = await getListTemplate();
  console.log(fillListTemplateWithDataBasic(listTemplate, parsedListBasicJson));
})();