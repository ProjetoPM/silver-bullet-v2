import list from 'src/modules/riskRegistration/list/riskRegistrationListReducers';
import form from 'src/modules/riskRegistration/form/riskRegistrationFormReducers';
import view from 'src/modules/riskRegistration/view/riskRegistrationViewReducers';
import destroy from 'src/modules/riskRegistration/destroy/riskRegistrationDestroyReducers';
import importerReducer from 'src/modules/riskRegistration/importer/riskRegistrationImporterReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
  view,
  destroy,
  importer: importerReducer,
});
