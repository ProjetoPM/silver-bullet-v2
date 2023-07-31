import list from 'src/modules/projectScopeStatement/list/projectScopeStatementListReducers';
import form from 'src/modules/projectScopeStatement/form/projectScopeStatementFormReducers';
import view from 'src/modules/projectScopeStatement/view/projectScopeStatementViewReducers';
import destroy from 'src/modules/projectScopeStatement/destroy/projectScopeStatementDestroyReducers';
import importerReducer from 'src/modules/projectScopeStatement/importer/projectScopeStatementImporterReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
  view,
  destroy,
  importer: importerReducer,
});
