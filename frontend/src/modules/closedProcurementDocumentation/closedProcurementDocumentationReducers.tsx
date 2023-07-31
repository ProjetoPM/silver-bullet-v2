import list from 'src/modules/closedProcurementDocumentation/list/closedProcurementDocumentationListReducers';
import form from 'src/modules/closedProcurementDocumentation/form/closedProcurementDocumentationFormReducers';
import view from 'src/modules/closedProcurementDocumentation/view/closedProcurementDocumentationViewReducers';
import destroy from 'src/modules/closedProcurementDocumentation/destroy/closedProcurementDocumentationDestroyReducers';
import importerReducer from 'src/modules/closedProcurementDocumentation/importer/closedProcurementDocumentationImporterReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
  view,
  destroy,
  importer: importerReducer,
});
