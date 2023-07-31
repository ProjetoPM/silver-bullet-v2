import importerActions from 'src/modules/shared/importer/importerActions';
import selectors from 'src/modules/requirementsManagementPlan/importer/requirementsManagementPlanImporterSelectors';
import RequirementsManagementPlanService from 'src/modules/requirementsManagementPlan/requirementsManagementPlanService';
import fields from 'src/modules/requirementsManagementPlan/importer/requirementsManagementPlanImporterFields';
import { i18n } from 'src/i18n';

const requirementsManagementPlanImporterActions = importerActions(
  'REQUIREMENTSMANAGEMENTPLAN_IMPORTER',
  selectors,
  RequirementsManagementPlanService.import,
  fields,
  i18n('entities.requirementsManagementPlan.importer.fileName'),
);

export default requirementsManagementPlanImporterActions;