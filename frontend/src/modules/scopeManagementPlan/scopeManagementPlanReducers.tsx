import list from 'src/modules/scopeManagementPlan/list/scopeManagementPlanListReducers';
import form from 'src/modules/scopeManagementPlan/form/scopeManagementPlanFormReducers';
import view from 'src/modules/scopeManagementPlan/view/scopeManagementPlanViewReducers';
import destroy from 'src/modules/scopeManagementPlan/destroy/scopeManagementPlanDestroyReducers';
import importerReducer from 'src/modules/scopeManagementPlan/importer/scopeManagementPlanImporterReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
  view,
  destroy,
  importer: importerReducer,
});
