import list from 'src/modules/resourceBreakdownStructure/list/resourceBreakdownStructureListReducers';
import form from 'src/modules/resourceBreakdownStructure/form/resourceBreakdownStructureFormReducers';
import view from 'src/modules/resourceBreakdownStructure/view/resourceBreakdownStructureViewReducers';
import destroy from 'src/modules/resourceBreakdownStructure/destroy/resourceBreakdownStructureDestroyReducers';
import importerReducer from 'src/modules/resourceBreakdownStructure/importer/resourceBreakdownStructureImporterReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
  view,
  destroy,
  importer: importerReducer,
});
