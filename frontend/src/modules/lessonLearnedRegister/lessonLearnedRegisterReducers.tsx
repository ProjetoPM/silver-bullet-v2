import list from 'src/modules/lessonLearnedRegister/list/lessonLearnedRegisterListReducers';
import form from 'src/modules/lessonLearnedRegister/form/lessonLearnedRegisterFormReducers';
import view from 'src/modules/lessonLearnedRegister/view/lessonLearnedRegisterViewReducers';
import destroy from 'src/modules/lessonLearnedRegister/destroy/lessonLearnedRegisterDestroyReducers';
import importerReducer from 'src/modules/lessonLearnedRegister/importer/lessonLearnedRegisterImporterReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
  view,
  destroy,
  importer: importerReducer,
});
