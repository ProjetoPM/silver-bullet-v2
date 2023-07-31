import importerActions from 'src/modules/shared/importer/importerActions';
import selectors from 'src/modules/benefitsManagementPlan/importer/benefitsManagementPlanImporterSelectors';
import BenefitsManagementPlanService from 'src/modules/benefitsManagementPlan/benefitsManagementPlanService';
import fields from 'src/modules/benefitsManagementPlan/importer/benefitsManagementPlanImporterFields';
import { i18n } from 'src/i18n';

const benefitsManagementPlanImporterActions = importerActions(
  'BENEFITSMANAGEMENTPLAN_IMPORTER',
  selectors,
  BenefitsManagementPlanService.import,
  fields,
  i18n('entities.benefitsManagementPlan.importer.fileName'),
);

export default benefitsManagementPlanImporterActions;