import importerActions from 'src/modules/shared/importer/importerActions';
import selectors from 'src/modules/projectManagementPlan/importer/projectManagementPlanImporterSelectors';
import ProjectManagementPlanService from 'src/modules/projectManagementPlan/projectManagementPlanService';
import fields from 'src/modules/projectManagementPlan/importer/projectManagementPlanImporterFields';
import { i18n } from 'src/i18n';

const projectManagementPlanImporterActions = importerActions(
  'PROJECTMANAGEMENTPLAN_IMPORTER',
  selectors,
  ProjectManagementPlanService.import,
  fields,
  i18n('entities.projectManagementPlan.importer.fileName'),
);

export default projectManagementPlanImporterActions;