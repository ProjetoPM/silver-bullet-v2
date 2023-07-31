import list from 'src/modules/stakeholderCalendars/list/stakeholderCalendarsListReducers';
import form from 'src/modules/stakeholderCalendars/form/stakeholderCalendarsFormReducers';
import view from 'src/modules/stakeholderCalendars/view/stakeholderCalendarsViewReducers';
import destroy from 'src/modules/stakeholderCalendars/destroy/stakeholderCalendarsDestroyReducers';
import importerReducer from 'src/modules/stakeholderCalendars/importer/stakeholderCalendarsImporterReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
  view,
  destroy,
  importer: importerReducer,
});
