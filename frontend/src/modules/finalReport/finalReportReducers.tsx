import list from 'src/modules/finalReport/list/finalReportListReducers';
import form from 'src/modules/finalReport/form/finalReportFormReducers';
import view from 'src/modules/finalReport/view/finalReportViewReducers';
import destroy from 'src/modules/finalReport/destroy/finalReportDestroyReducers';
import importerReducer from 'src/modules/finalReport/importer/finalReportImporterReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
  view,
  destroy,
  importer: importerReducer,
});
