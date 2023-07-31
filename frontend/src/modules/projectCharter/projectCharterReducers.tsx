import list from 'src/modules/projectCharter/list/projectCharterListReducers';
import form from 'src/modules/projectCharter/form/projectCharterFormReducers';
import view from 'src/modules/projectCharter/view/projectCharterViewReducers';
import destroy from 'src/modules/projectCharter/destroy/projectCharterDestroyReducers';
import importerReducer from 'src/modules/projectCharter/importer/projectCharterImporterReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
  view,
  destroy,
  importer: importerReducer,
});
