import list from 'src/modules/requirementsManagementPlan/list/requirementsManagementPlanListReducers';
import form from 'src/modules/requirementsManagementPlan/form/requirementsManagementPlanFormReducers';
import view from 'src/modules/requirementsManagementPlan/view/requirementsManagementPlanViewReducers';
import destroy from 'src/modules/requirementsManagementPlan/destroy/requirementsManagementPlanDestroyReducers';
import importerReducer from 'src/modules/requirementsManagementPlan/importer/requirementsManagementPlanImporterReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
  view,
  destroy,
  importer: importerReducer,
});
