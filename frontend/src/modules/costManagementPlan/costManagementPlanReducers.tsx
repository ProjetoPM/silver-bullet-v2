import list from 'src/modules/costManagementPlan/list/costManagementPlanListReducers';
import form from 'src/modules/costManagementPlan/form/costManagementPlanFormReducers';
import view from 'src/modules/costManagementPlan/view/costManagementPlanViewReducers';
import destroy from 'src/modules/costManagementPlan/destroy/costManagementPlanDestroyReducers';
import importerReducer from 'src/modules/costManagementPlan/importer/costManagementPlanImporterReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
  view,
  destroy,
  importer: importerReducer,
});
