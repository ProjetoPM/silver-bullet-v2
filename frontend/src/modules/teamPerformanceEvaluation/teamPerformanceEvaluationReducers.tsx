import list from 'src/modules/teamPerformanceEvaluation/list/teamPerformanceEvaluationListReducers';
import form from 'src/modules/teamPerformanceEvaluation/form/teamPerformanceEvaluationFormReducers';
import view from 'src/modules/teamPerformanceEvaluation/view/teamPerformanceEvaluationViewReducers';
import destroy from 'src/modules/teamPerformanceEvaluation/destroy/teamPerformanceEvaluationDestroyReducers';
import importerReducer from 'src/modules/teamPerformanceEvaluation/importer/teamPerformanceEvaluationImporterReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
  view,
  destroy,
  importer: importerReducer,
});
