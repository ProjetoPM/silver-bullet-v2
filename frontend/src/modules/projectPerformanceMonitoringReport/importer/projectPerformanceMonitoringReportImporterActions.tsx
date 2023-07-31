import importerActions from 'src/modules/shared/importer/importerActions';
import selectors from 'src/modules/projectPerformanceMonitoringReport/importer/projectPerformanceMonitoringReportImporterSelectors';
import ProjectPerformanceMonitoringReportService from 'src/modules/projectPerformanceMonitoringReport/projectPerformanceMonitoringReportService';
import fields from 'src/modules/projectPerformanceMonitoringReport/importer/projectPerformanceMonitoringReportImporterFields';
import { i18n } from 'src/i18n';

const projectPerformanceMonitoringReportImporterActions = importerActions(
  'PROJECTPERFORMANCEMONITORINGREPORT_IMPORTER',
  selectors,
  ProjectPerformanceMonitoringReportService.import,
  fields,
  i18n('entities.projectPerformanceMonitoringReport.importer.fileName'),
);

export default projectPerformanceMonitoringReportImporterActions;