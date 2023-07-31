import list from 'src/modules/procurementStatementWorkRegister/list/procurementStatementWorkRegisterListReducers';
import form from 'src/modules/procurementStatementWorkRegister/form/procurementStatementWorkRegisterFormReducers';
import view from 'src/modules/procurementStatementWorkRegister/view/procurementStatementWorkRegisterViewReducers';
import destroy from 'src/modules/procurementStatementWorkRegister/destroy/procurementStatementWorkRegisterDestroyReducers';
import importerReducer from 'src/modules/procurementStatementWorkRegister/importer/procurementStatementWorkRegisterImporterReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
  view,
  destroy,
  importer: importerReducer,
});
