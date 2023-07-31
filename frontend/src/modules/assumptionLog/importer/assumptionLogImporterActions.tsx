import importerActions from 'src/modules/shared/importer/importerActions';
import selectors from 'src/modules/assumptionLog/importer/assumptionLogImporterSelectors';
import AssumptionLogService from 'src/modules/assumptionLog/assumptionLogService';
import fields from 'src/modules/assumptionLog/importer/assumptionLogImporterFields';
import { i18n } from 'src/i18n';

const assumptionLogImporterActions = importerActions(
  'ASSUMPTIONLOG_IMPORTER',
  selectors,
  AssumptionLogService.import,
  fields,
  i18n('entities.assumptionLog.importer.fileName'),
);

export default assumptionLogImporterActions;