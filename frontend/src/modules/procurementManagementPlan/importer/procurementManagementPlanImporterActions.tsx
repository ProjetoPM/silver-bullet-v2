import importerActions from 'src/modules/shared/importer/importerActions';
import selectors from 'src/modules/procurementManagementPlan/importer/procurementManagementPlanImporterSelectors';
import ProcurementManagementPlanService from 'src/modules/procurementManagementPlan/procurementManagementPlanService';
import fields from 'src/modules/procurementManagementPlan/importer/procurementManagementPlanImporterFields';
import { i18n } from 'src/i18n';

const procurementManagementPlanImporterActions = importerActions(
  'PROCUREMENTMANAGEMENTPLAN_IMPORTER',
  selectors,
  ProcurementManagementPlanService.import,
  fields,
  i18n('entities.procurementManagementPlan.importer.fileName'),
);

export default procurementManagementPlanImporterActions;