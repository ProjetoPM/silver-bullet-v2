import list from 'src/modules/businessCase/list/businessCaseListReducers';
import form from 'src/modules/businessCase/form/businessCaseFormReducers';
import view from 'src/modules/businessCase/view/businessCaseViewReducers';
import destroy from 'src/modules/businessCase/destroy/businessCaseDestroyReducers';
import importerReducer from 'src/modules/businessCase/importer/businessCaseImporterReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
  view,
  destroy,
  importer: importerReducer,
});
