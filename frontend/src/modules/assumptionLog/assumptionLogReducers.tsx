import list from 'src/modules/assumptionLog/list/assumptionLogListReducers';
import form from 'src/modules/assumptionLog/form/assumptionLogFormReducers';
import view from 'src/modules/assumptionLog/view/assumptionLogViewReducers';
import destroy from 'src/modules/assumptionLog/destroy/assumptionLogDestroyReducers';
import importerReducer from 'src/modules/assumptionLog/importer/assumptionLogImporterReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
  view,
  destroy,
  importer: importerReducer,
});
