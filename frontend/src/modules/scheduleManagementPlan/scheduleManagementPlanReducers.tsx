import list from 'src/modules/scheduleManagementPlan/list/scheduleManagementPlanListReducers';
import form from 'src/modules/scheduleManagementPlan/form/scheduleManagementPlanFormReducers';
import view from 'src/modules/scheduleManagementPlan/view/scheduleManagementPlanViewReducers';
import destroy from 'src/modules/scheduleManagementPlan/destroy/scheduleManagementPlanDestroyReducers';
import importerReducer from 'src/modules/scheduleManagementPlan/importer/scheduleManagementPlanImporterReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
  view,
  destroy,
  importer: importerReducer,
});
