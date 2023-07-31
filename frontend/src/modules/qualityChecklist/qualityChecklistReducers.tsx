import list from 'src/modules/qualityChecklist/list/qualityChecklistListReducers';
import form from 'src/modules/qualityChecklist/form/qualityChecklistFormReducers';
import view from 'src/modules/qualityChecklist/view/qualityChecklistViewReducers';
import destroy from 'src/modules/qualityChecklist/destroy/qualityChecklistDestroyReducers';
import importerReducer from 'src/modules/qualityChecklist/importer/qualityChecklistImporterReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
  view,
  destroy,
  importer: importerReducer,
});
