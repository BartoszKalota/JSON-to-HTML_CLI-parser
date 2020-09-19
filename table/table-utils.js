import fs from 'fs';

import { TABLE_BASIC_TEMPLATE } from '../common/variables.js';

export const getTableTemplate = async (fileName = TABLE_BASIC_TEMPLATE) => {
  try {
    return await fs.promises.readFile(fileName, 'utf-8');
  } catch (err) {
    console.log(err);
  }
};

const setMainHeader = (template, { title }) => {
  return template.replace('__tableHeader__', title);
};
const setHeaders = (template, data) => {
  let filledTemplate = template;
  for (let i = 0; i < Object.keys(data).length; i++) {
    filledTemplate = filledTemplate.replace(`__th${i+1}__`, data[`column${i+1}`]);
  }
  return filledTemplate;
};
const setRows = (template, data, type) => {
  let filledTemplate = template;
  const rowNum = type.replace('row', '');
  for (let i = 0; i < Object.keys(data).length; i++) {
    filledTemplate = filledTemplate.replace(`__td${rowNum}.${i+1}__`, data[`column${i+1}`]);
  }
  return filledTemplate;
};

export const fillTableTemplateWithDataBasic = (template, objectToFillData) => {
  let templateWithData = template;
  objectToFillData.forEach(({ type, ...data }) => {
    if (type === 'mainHeader') {
      templateWithData = setMainHeader(templateWithData, data);
    }
    if (type === 'header') {
      templateWithData = setHeaders(templateWithData, data);
    }
    if (type.startsWith('row')) {
      templateWithData = setRows(templateWithData, data, type);
    }
  });
  return templateWithData;
};