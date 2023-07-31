import list from 'src/modules/stakeholderRegistration/list/stakeholderRegistrationListReducers';
import form from 'src/modules/stakeholderRegistration/form/stakeholderRegistrationFormReducers';
import view from 'src/modules/stakeholderRegistration/view/stakeholderRegistrationViewReducers';
import destroy from 'src/modules/stakeholderRegistration/destroy/stakeholderRegistrationDestroyReducers';
import importerReducer from 'src/modules/stakeholderRegistration/importer/stakeholderRegistrationImporterReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
  view,
  destroy,
  importer: importerReducer,
});
