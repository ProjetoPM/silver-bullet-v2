import list from 'src/modules/issueLog/list/issueLogListReducers';
import form from 'src/modules/issueLog/form/issueLogFormReducers';
import view from 'src/modules/issueLog/view/issueLogViewReducers';
import destroy from 'src/modules/issueLog/destroy/issueLogDestroyReducers';
import importerReducer from 'src/modules/issueLog/importer/issueLogImporterReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
  view,
  destroy,
  importer: importerReducer,
});
