import list from 'src/modules/activityList/list/activityListListReducers';
import form from 'src/modules/activityList/form/activityListFormReducers';
import view from 'src/modules/activityList/view/activityListViewReducers';
import destroy from 'src/modules/activityList/destroy/activityListDestroyReducers';
import importerReducer from 'src/modules/activityList/importer/activityListImporterReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
  view,
  destroy,
  importer: importerReducer,
});
