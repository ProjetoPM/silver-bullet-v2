import importerActions from 'src/modules/shared/importer/importerActions';
import selectors from 'src/modules/workPerformanceReports/importer/workPerformanceReportsImporterSelectors';
import WorkPerformanceReportsService from 'src/modules/workPerformanceReports/workPerformanceReportsService';
import fields from 'src/modules/workPerformanceReports/importer/workPerformanceReportsImporterFields';
import { i18n } from 'src/i18n';

const workPerformanceReportsImporterActions = importerActions(
  'WORKPERFORMANCEREPORTS_IMPORTER',
  selectors,
  WorkPerformanceReportsService.import,
  fields,
  i18n('entities.workPerformanceReports.importer.fileName'),
);

export default workPerformanceReportsImporterActions;