import importerActions from 'src/modules/shared/importer/importerActions';
import selectors from 'src/modules/stakeholderCalendars/importer/stakeholderCalendarsImporterSelectors';
import StakeholderCalendarsService from 'src/modules/stakeholderCalendars/stakeholderCalendarsService';
import fields from 'src/modules/stakeholderCalendars/importer/stakeholderCalendarsImporterFields';
import { i18n } from 'src/i18n';

const stakeholderCalendarsImporterActions = importerActions(
  'STAKEHOLDERCALENDARS_IMPORTER',
  selectors,
  StakeholderCalendarsService.import,
  fields,
  i18n('entities.stakeholderCalendars.importer.fileName'),
);

export default stakeholderCalendarsImporterActions;