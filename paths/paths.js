import {
  getHTMLTemplate,
  fillTemplateWithData,
  saveOutputHTML,
  getInputData
} from '../common/utils.js';
import { getListTemplate, fillListTemplateWithDataBasic } from '../list/list-utils.js';

export const basicListPath = async (listTemplateFile, title = 'Title unset') => {
  try {
    // Fill UL list with fav games
    const parsedListBasicJson = await getInputData();
    const listTemplate = await getListTemplate(listTemplateFile);
    const completeGameList = fillListTemplateWithDataBasic(listTemplate, parsedListBasicJson);
    // Incorporate filled list into basic HTML template
    const template = await getHTMLTemplate();
    const filledTemplate = fillTemplateWithData(template, title, completeGameList);
    await saveOutputHTML(filledTemplate);
  } catch (err) {
    console.log(err);
  }
};