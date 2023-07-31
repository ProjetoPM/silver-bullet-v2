import list from 'src/modules/qualityManagementPlan/list/qualityManagementPlanListReducers';
import form from 'src/modules/qualityManagementPlan/form/qualityManagementPlanFormReducers';
import view from 'src/modules/qualityManagementPlan/view/qualityManagementPlanViewReducers';
import destroy from 'src/modules/qualityManagementPlan/destroy/qualityManagementPlanDestroyReducers';
import importerReducer from 'src/modules/qualityManagementPlan/importer/qualityManagementPlanImporterReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
  view,
  destroy,
  importer: importerReducer,
});
