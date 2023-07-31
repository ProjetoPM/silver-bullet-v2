import list from 'src/modules/resourceManagementPlan/list/resourceManagementPlanListReducers';
import form from 'src/modules/resourceManagementPlan/form/resourceManagementPlanFormReducers';
import view from 'src/modules/resourceManagementPlan/view/resourceManagementPlanViewReducers';
import destroy from 'src/modules/resourceManagementPlan/destroy/resourceManagementPlanDestroyReducers';
import importerReducer from 'src/modules/resourceManagementPlan/importer/resourceManagementPlanImporterReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
  view,
  destroy,
  importer: importerReducer,
});
