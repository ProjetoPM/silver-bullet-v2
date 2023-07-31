import list from 'src/modules/requirementDocumentation/list/requirementDocumentationListReducers';
import form from 'src/modules/requirementDocumentation/form/requirementDocumentationFormReducers';
import view from 'src/modules/requirementDocumentation/view/requirementDocumentationViewReducers';
import destroy from 'src/modules/requirementDocumentation/destroy/requirementDocumentationDestroyReducers';
import importerReducer from 'src/modules/requirementDocumentation/importer/requirementDocumentationImporterReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
  view,
  destroy,
  importer: importerReducer,
});
