import importerActions from 'src/modules/shared/importer/importerActions';
import selectors from 'src/modules/costManagementPlan/importer/costManagementPlanImporterSelectors';
import CostManagementPlanService from 'src/modules/costManagementPlan/costManagementPlanService';
import fields from 'src/modules/costManagementPlan/importer/costManagementPlanImporterFields';
import { i18n } from 'src/i18n';

const costManagementPlanImporterActions = importerActions(
  'COSTMANAGEMENTPLAN_IMPORTER',
  selectors,
  CostManagementPlanService.import,
  fields,
  i18n('entities.costManagementPlan.importer.fileName'),
);

export default costManagementPlanImporterActions;