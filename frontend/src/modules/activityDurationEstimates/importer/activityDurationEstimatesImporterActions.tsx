import importerActions from 'src/modules/shared/importer/importerActions';
import selectors from 'src/modules/activityDurationEstimates/importer/activityDurationEstimatesImporterSelectors';
import ActivityDurationEstimatesService from 'src/modules/activityDurationEstimates/activityDurationEstimatesService';
import fields from 'src/modules/activityDurationEstimates/importer/activityDurationEstimatesImporterFields';
import { i18n } from 'src/i18n';

const activityDurationEstimatesImporterActions = importerActions(
  'ACTIVITYDURATIONESTIMATES_IMPORTER',
  selectors,
  ActivityDurationEstimatesService.import,
  fields,
  i18n('entities.activityDurationEstimates.importer.fileName'),
);

export default activityDurationEstimatesImporterActions;