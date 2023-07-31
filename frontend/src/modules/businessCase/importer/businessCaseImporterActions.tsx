import importerActions from 'src/modules/shared/importer/importerActions';
import selectors from 'src/modules/businessCase/importer/businessCaseImporterSelectors';
import BusinessCaseService from 'src/modules/businessCase/businessCaseService';
import fields from 'src/modules/businessCase/importer/businessCaseImporterFields';
import { i18n } from 'src/i18n';

const businessCaseImporterActions = importerActions(
  'BUSINESSCASE_IMPORTER',
  selectors,
  BusinessCaseService.import,
  fields,
  i18n('entities.businessCase.importer.fileName'),
);

export default businessCaseImporterActions;