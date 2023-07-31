import importerActions from 'src/modules/shared/importer/importerActions';
import selectors from 'src/modules/issueLog/importer/issueLogImporterSelectors';
import IssueLogService from 'src/modules/issueLog/issueLogService';
import fields from 'src/modules/issueLog/importer/issueLogImporterFields';
import { i18n } from 'src/i18n';

const issueLogImporterActions = importerActions(
  'ISSUELOG_IMPORTER',
  selectors,
  IssueLogService.import,
  fields,
  i18n('entities.issueLog.importer.fileName'),
);

export default issueLogImporterActions;