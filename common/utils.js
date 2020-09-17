import fs from 'fs';

import { BASIC_HTML_TEMPLATE, RESULT_OUTPUT } from './variables.js';

export const getHTMLTemplate = async (fileName = BASIC_HTML_TEMPLATE) => {
  try {
    const content = await fs.promises.readFile(fileName, 'utf-8');
    return content;
  } catch (err) {
    console.log(err);
  }
};

export const fillTemplateWithData = (template, title, body) => {
  return template.replace('__title__', title).replace('__body__', body);
};

export const saveOutputHTML = async (dataToSave, fileName = RESULT_OUTPUT) => {
  try {
    await fs.promises.writeFile(fileName, dataToSave);
  } catch (err) {
    console.log(err);
  }
};