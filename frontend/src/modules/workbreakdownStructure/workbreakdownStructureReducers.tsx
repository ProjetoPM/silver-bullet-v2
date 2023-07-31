import list from 'src/modules/workbreakdownStructure/list/workbreakdownStructureListReducers';
import form from 'src/modules/workbreakdownStructure/form/workbreakdownStructureFormReducers';
import view from 'src/modules/workbreakdownStructure/view/workbreakdownStructureViewReducers';
import destroy from 'src/modules/workbreakdownStructure/destroy/workbreakdownStructureDestroyReducers';
import importerReducer from 'src/modules/workbreakdownStructure/importer/workbreakdownStructureImporterReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
  view,
  destroy,
  importer: importerReducer,
});
