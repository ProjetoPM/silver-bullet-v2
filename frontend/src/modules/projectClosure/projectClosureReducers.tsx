import list from 'src/modules/projectClosure/list/projectClosureListReducers';
import form from 'src/modules/projectClosure/form/projectClosureFormReducers';
import view from 'src/modules/projectClosure/view/projectClosureViewReducers';
import destroy from 'src/modules/projectClosure/destroy/projectClosureDestroyReducers';
import importerReducer from 'src/modules/projectClosure/importer/projectClosureImporterReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
  view,
  destroy,
  importer: importerReducer,
});
