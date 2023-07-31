import importerActions from 'src/modules/shared/importer/importerActions';
import selectors from 'src/modules/stakeholderRegistration/importer/stakeholderRegistrationImporterSelectors';
import StakeholderRegistrationService from 'src/modules/stakeholderRegistration/stakeholderRegistrationService';
import fields from 'src/modules/stakeholderRegistration/importer/stakeholderRegistrationImporterFields';
import { i18n } from 'src/i18n';

const stakeholderRegistrationImporterActions = importerActions(
  'STAKEHOLDERREGISTRATION_IMPORTER',
  selectors,
  StakeholderRegistrationService.import,
  fields,
  i18n('entities.stakeholderRegistration.importer.fileName'),
);

export default stakeholderRegistrationImporterActions;