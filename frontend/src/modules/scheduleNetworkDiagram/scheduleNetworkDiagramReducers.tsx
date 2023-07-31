import list from 'src/modules/scheduleNetworkDiagram/list/scheduleNetworkDiagramListReducers';
import form from 'src/modules/scheduleNetworkDiagram/form/scheduleNetworkDiagramFormReducers';
import view from 'src/modules/scheduleNetworkDiagram/view/scheduleNetworkDiagramViewReducers';
import destroy from 'src/modules/scheduleNetworkDiagram/destroy/scheduleNetworkDiagramDestroyReducers';
import importerReducer from 'src/modules/scheduleNetworkDiagram/importer/scheduleNetworkDiagramImporterReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
  view,
  destroy,
  importer: importerReducer,
});
