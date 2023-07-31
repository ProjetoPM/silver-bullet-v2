import list from 'src/modules/resource/list/resourceListReducers';
import form from 'src/modules/resource/form/resourceFormReducers';
import view from 'src/modules/resource/view/resourceViewReducers';
import destroy from 'src/modules/resource/destroy/resourceDestroyReducers';
import importerReducer from 'src/modules/resource/importer/resourceImporterReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
  view,
  destroy,
  importer: importerReducer,
});
