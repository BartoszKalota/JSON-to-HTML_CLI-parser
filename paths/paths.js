import { TABLE_BASIC_INPUT } from '../common/variables.js';
import {
  getHTMLTemplate,
  fillTemplateWithData,
  saveOutputHTML,
  getInputData
} from '../common/utils.js';
import { getListTemplate, fillListTemplateWithDataBasic } from '../list/list-utils.js';
import { getTableTemplate, fillTableTemplateWithDataBasic } from '../table/table-utils.js';

export const basicListPath = async (listTemplateFile, title = 'Title unset') => {
  try {
    // Fill the UL list
    const parsedListBasicJson = await getInputData();
    const listTemplate = await getListTemplate(listTemplateFile);
    const completeList = fillListTemplateWithDataBasic(listTemplate, parsedListBasicJson);
    // Incorporate the filled list into a basic HTML template
    const template = await getHTMLTemplate();
    const filledTemplate = fillTemplateWithData(template, title, completeList);
    await saveOutputHTML(filledTemplate);
  } catch (err) {
    console.log(err);
  }
};

export const basicTablePath = async (listTemplateFile,  title = 'Title unset') => {
  try {
    // Fill the table with data
    const parsedTableBasicJson = await getInputData(TABLE_BASIC_INPUT);
    const tableTemplate = await getTableTemplate(listTemplateFile);
    const completeTable = fillTableTemplateWithDataBasic(tableTemplate, parsedTableBasicJson);
    // Incorporate the filled table into a basic HTML template
    const template = await getHTMLTemplate();
    const filledTemplate = fillTemplateWithData(template, title, completeTable);
    await saveOutputHTML(filledTemplate);
  } catch (err) {
    console.log(err);
  }
};