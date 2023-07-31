import list from 'src/modules/workPerformanceReports/list/workPerformanceReportsListReducers';
import form from 'src/modules/workPerformanceReports/form/workPerformanceReportsFormReducers';
import view from 'src/modules/workPerformanceReports/view/workPerformanceReportsViewReducers';
import destroy from 'src/modules/workPerformanceReports/destroy/workPerformanceReportsDestroyReducers';
import importerReducer from 'src/modules/workPerformanceReports/importer/workPerformanceReportsImporterReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
  view,
  destroy,
  importer: importerReducer,
});
