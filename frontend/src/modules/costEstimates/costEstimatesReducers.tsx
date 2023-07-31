import list from 'src/modules/costEstimates/list/costEstimatesListReducers';
import form from 'src/modules/costEstimates/form/costEstimatesFormReducers';
import view from 'src/modules/costEstimates/view/costEstimatesViewReducers';
import destroy from 'src/modules/costEstimates/destroy/costEstimatesDestroyReducers';
import importerReducer from 'src/modules/costEstimates/importer/costEstimatesImporterReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
  view,
  destroy,
  importer: importerReducer,
});
