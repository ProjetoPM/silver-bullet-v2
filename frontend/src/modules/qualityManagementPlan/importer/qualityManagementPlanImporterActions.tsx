import importerActions from 'src/modules/shared/importer/importerActions';
import selectors from 'src/modules/qualityManagementPlan/importer/qualityManagementPlanImporterSelectors';
import QualityManagementPlanService from 'src/modules/qualityManagementPlan/qualityManagementPlanService';
import fields from 'src/modules/qualityManagementPlan/importer/qualityManagementPlanImporterFields';
import { i18n } from 'src/i18n';

const qualityManagementPlanImporterActions = importerActions(
  'QUALITYMANAGEMENTPLAN_IMPORTER',
  selectors,
  QualityManagementPlanService.import,
  fields,
  i18n('entities.qualityManagementPlan.importer.fileName'),
);

export default qualityManagementPlanImporterActions;