import list from 'src/modules/communicationsManagementPlan/list/communicationsManagementPlanListReducers';
import form from 'src/modules/communicationsManagementPlan/form/communicationsManagementPlanFormReducers';
import view from 'src/modules/communicationsManagementPlan/view/communicationsManagementPlanViewReducers';
import destroy from 'src/modules/communicationsManagementPlan/destroy/communicationsManagementPlanDestroyReducers';
import importerReducer from 'src/modules/communicationsManagementPlan/importer/communicationsManagementPlanImporterReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
  view,
  destroy,
  importer: importerReducer,
});
