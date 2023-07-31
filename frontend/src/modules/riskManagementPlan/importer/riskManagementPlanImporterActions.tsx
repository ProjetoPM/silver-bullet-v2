import importerActions from 'src/modules/shared/importer/importerActions';
import selectors from 'src/modules/riskManagementPlan/importer/riskManagementPlanImporterSelectors';
import RiskManagementPlanService from 'src/modules/riskManagementPlan/riskManagementPlanService';
import fields from 'src/modules/riskManagementPlan/importer/riskManagementPlanImporterFields';
import { i18n } from 'src/i18n';

const riskManagementPlanImporterActions = importerActions(
  'RISKMANAGEMENTPLAN_IMPORTER',
  selectors,
  RiskManagementPlanService.import,
  fields,
  i18n('entities.riskManagementPlan.importer.fileName'),
);

export default riskManagementPlanImporterActions;