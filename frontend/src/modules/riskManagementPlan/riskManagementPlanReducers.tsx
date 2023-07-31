import list from 'src/modules/riskManagementPlan/list/riskManagementPlanListReducers';
import form from 'src/modules/riskManagementPlan/form/riskManagementPlanFormReducers';
import view from 'src/modules/riskManagementPlan/view/riskManagementPlanViewReducers';
import destroy from 'src/modules/riskManagementPlan/destroy/riskManagementPlanDestroyReducers';
import importerReducer from 'src/modules/riskManagementPlan/importer/riskManagementPlanImporterReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
  view,
  destroy,
  importer: importerReducer,
});
