import list from 'src/modules/benefitsManagementPlan/list/benefitsManagementPlanListReducers';
import form from 'src/modules/benefitsManagementPlan/form/benefitsManagementPlanFormReducers';
import view from 'src/modules/benefitsManagementPlan/view/benefitsManagementPlanViewReducers';
import destroy from 'src/modules/benefitsManagementPlan/destroy/benefitsManagementPlanDestroyReducers';
import importerReducer from 'src/modules/benefitsManagementPlan/importer/benefitsManagementPlanImporterReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
  view,
  destroy,
  importer: importerReducer,
});
