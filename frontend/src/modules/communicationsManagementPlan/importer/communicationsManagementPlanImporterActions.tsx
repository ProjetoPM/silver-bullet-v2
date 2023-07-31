import importerActions from 'src/modules/shared/importer/importerActions';
import selectors from 'src/modules/communicationsManagementPlan/importer/communicationsManagementPlanImporterSelectors';
import CommunicationsManagementPlanService from 'src/modules/communicationsManagementPlan/communicationsManagementPlanService';
import fields from 'src/modules/communicationsManagementPlan/importer/communicationsManagementPlanImporterFields';
import { i18n } from 'src/i18n';

const communicationsManagementPlanImporterActions = importerActions(
  'COMMUNICATIONSMANAGEMENTPLAN_IMPORTER',
  selectors,
  CommunicationsManagementPlanService.import,
  fields,
  i18n('entities.communicationsManagementPlan.importer.fileName'),
);

export default communicationsManagementPlanImporterActions;