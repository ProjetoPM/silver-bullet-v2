import list from 'src/modules/procurementManagementPlan/list/procurementManagementPlanListReducers';
import form from 'src/modules/procurementManagementPlan/form/procurementManagementPlanFormReducers';
import view from 'src/modules/procurementManagementPlan/view/procurementManagementPlanViewReducers';
import destroy from 'src/modules/procurementManagementPlan/destroy/procurementManagementPlanDestroyReducers';
import importerReducer from 'src/modules/procurementManagementPlan/importer/procurementManagementPlanImporterReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
  view,
  destroy,
  importer: importerReducer,
});
