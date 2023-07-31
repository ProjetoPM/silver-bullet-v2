import importerActions from 'src/modules/shared/importer/importerActions';
import selectors from 'src/modules/scheduleManagementPlan/importer/scheduleManagementPlanImporterSelectors';
import ScheduleManagementPlanService from 'src/modules/scheduleManagementPlan/scheduleManagementPlanService';
import fields from 'src/modules/scheduleManagementPlan/importer/scheduleManagementPlanImporterFields';
import { i18n } from 'src/i18n';

const scheduleManagementPlanImporterActions = importerActions(
  'SCHEDULEMANAGEMENTPLAN_IMPORTER',
  selectors,
  ScheduleManagementPlanService.import,
  fields,
  i18n('entities.scheduleManagementPlan.importer.fileName'),
);

export default scheduleManagementPlanImporterActions;