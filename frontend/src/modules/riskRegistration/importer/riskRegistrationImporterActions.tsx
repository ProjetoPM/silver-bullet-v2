import importerActions from 'src/modules/shared/importer/importerActions';
import selectors from 'src/modules/riskRegistration/importer/riskRegistrationImporterSelectors';
import RiskRegistrationService from 'src/modules/riskRegistration/riskRegistrationService';
import fields from 'src/modules/riskRegistration/importer/riskRegistrationImporterFields';
import { i18n } from 'src/i18n';

const riskRegistrationImporterActions = importerActions(
  'RISKREGISTRATION_IMPORTER',
  selectors,
  RiskRegistrationService.import,
  fields,
  i18n('entities.riskRegistration.importer.fileName'),
);

export default riskRegistrationImporterActions;