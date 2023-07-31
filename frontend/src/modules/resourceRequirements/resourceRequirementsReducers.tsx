import list from 'src/modules/resourceRequirements/list/resourceRequirementsListReducers';
import form from 'src/modules/resourceRequirements/form/resourceRequirementsFormReducers';
import view from 'src/modules/resourceRequirements/view/resourceRequirementsViewReducers';
import destroy from 'src/modules/resourceRequirements/destroy/resourceRequirementsDestroyReducers';
import importerReducer from 'src/modules/resourceRequirements/importer/resourceRequirementsImporterReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
  view,
  destroy,
  importer: importerReducer,
});
