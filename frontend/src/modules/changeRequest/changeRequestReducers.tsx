import list from 'src/modules/changeRequest/list/changeRequestListReducers';
import form from 'src/modules/changeRequest/form/changeRequestFormReducers';
import view from 'src/modules/changeRequest/view/changeRequestViewReducers';
import destroy from 'src/modules/changeRequest/destroy/changeRequestDestroyReducers';
import importerReducer from 'src/modules/changeRequest/importer/changeRequestImporterReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
  view,
  destroy,
  importer: importerReducer,
});
