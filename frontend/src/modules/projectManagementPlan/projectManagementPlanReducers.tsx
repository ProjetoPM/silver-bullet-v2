import list from 'src/modules/projectManagementPlan/list/projectManagementPlanListReducers';
import form from 'src/modules/projectManagementPlan/form/projectManagementPlanFormReducers';
import view from 'src/modules/projectManagementPlan/view/projectManagementPlanViewReducers';
import destroy from 'src/modules/projectManagementPlan/destroy/projectManagementPlanDestroyReducers';
import importerReducer from 'src/modules/projectManagementPlan/importer/projectManagementPlanImporterReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
  view,
  destroy,
  importer: importerReducer,
});
