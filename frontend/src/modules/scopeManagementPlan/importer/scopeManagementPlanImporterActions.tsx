import importerActions from 'src/modules/shared/importer/importerActions';
import selectors from 'src/modules/scopeManagementPlan/importer/scopeManagementPlanImporterSelectors';
import ScopeManagementPlanService from 'src/modules/scopeManagementPlan/scopeManagementPlanService';
import fields from 'src/modules/scopeManagementPlan/importer/scopeManagementPlanImporterFields';
import { i18n } from 'src/i18n';

const scopeManagementPlanImporterActions = importerActions(
  'SCOPEMANAGEMENTPLAN_IMPORTER',
  selectors,
  ScopeManagementPlanService.import,
  fields,
  i18n('entities.scopeManagementPlan.importer.fileName'),
);

export default scopeManagementPlanImporterActions;