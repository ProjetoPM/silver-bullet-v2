import importerActions from 'src/modules/shared/importer/importerActions';
import selectors from 'src/modules/resourceManagementPlan/importer/resourceManagementPlanImporterSelectors';
import ResourceManagementPlanService from 'src/modules/resourceManagementPlan/resourceManagementPlanService';
import fields from 'src/modules/resourceManagementPlan/importer/resourceManagementPlanImporterFields';
import { i18n } from 'src/i18n';

const resourceManagementPlanImporterActions = importerActions(
  'RESOURCEMANAGEMENTPLAN_IMPORTER',
  selectors,
  ResourceManagementPlanService.import,
  fields,
  i18n('entities.resourceManagementPlan.importer.fileName'),
);

export default resourceManagementPlanImporterActions;