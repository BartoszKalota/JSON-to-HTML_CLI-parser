import fs from 'fs';

import { UL_BASIC_TEMPLATE } from '../common/variables.js';

export const getListTemplate = async (fileName = UL_BASIC_TEMPLATE) => {
  try {
    const content = await fs.promises.readFile(fileName, 'utf-8');
    return content;
  } catch (err) {
    console.log(err);
  }
};

export const fillListTemplateWithDataBasic = (template, objectToFillData) => {
  let templateWithData = template;
  objectToFillData.forEach(({ id, data }) => {
    templateWithData = templateWithData.replace(`__data${id}__`, data);
  });
  return templateWithData;
};