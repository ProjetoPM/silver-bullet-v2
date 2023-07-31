import importerActions from 'src/modules/shared/importer/importerActions';
import selectors from 'src/modules/activityList/importer/activityListImporterSelectors';
import ActivityListService from 'src/modules/activityList/activityListService';
import fields from 'src/modules/activityList/importer/activityListImporterFields';
import { i18n } from 'src/i18n';

const activityListImporterActions = importerActions(
  'ACTIVITYLIST_IMPORTER',
  selectors,
  ActivityListService.import,
  fields,
  i18n('entities.activityList.importer.fileName'),
);

export default activityListImporterActions;