import list from 'src/modules/projectPerformanceMonitoringReport/list/projectPerformanceMonitoringReportListReducers';
import form from 'src/modules/projectPerformanceMonitoringReport/form/projectPerformanceMonitoringReportFormReducers';
import view from 'src/modules/projectPerformanceMonitoringReport/view/projectPerformanceMonitoringReportViewReducers';
import destroy from 'src/modules/projectPerformanceMonitoringReport/destroy/projectPerformanceMonitoringReportDestroyReducers';
import importerReducer from 'src/modules/projectPerformanceMonitoringReport/importer/projectPerformanceMonitoringReportImporterReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
  view,
  destroy,
  importer: importerReducer,
});
