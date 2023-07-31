import list from 'src/modules/activityDurationEstimates/list/activityDurationEstimatesListReducers';
import form from 'src/modules/activityDurationEstimates/form/activityDurationEstimatesFormReducers';
import view from 'src/modules/activityDurationEstimates/view/activityDurationEstimatesViewReducers';
import destroy from 'src/modules/activityDurationEstimates/destroy/activityDurationEstimatesDestroyReducers';
import importerReducer from 'src/modules/activityDurationEstimates/importer/activityDurationEstimatesImporterReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
  view,
  destroy,
  importer: importerReducer,
});
