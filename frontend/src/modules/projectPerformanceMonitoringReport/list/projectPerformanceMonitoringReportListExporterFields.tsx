import { i18n } from 'src/i18n';
import exporterRenders from 'src/modules/shared/exporter/exporterRenders';

export default [
  {
    name: 'id',
    label: i18n('entities.projectPerformanceMonitoringReport.fields.id'),
  },
  {
    name: 'currentPerformanceAnalysis',
    label: i18n('entities.projectPerformanceMonitoringReport.fields.currentPerformanceAnalysis'),
  },
  {
    name: 'forecastsAsPlanned',
    label: i18n('entities.projectPerformanceMonitoringReport.fields.forecastsAsPlanned'),
  },
  {
    name: 'forecastsConsideringCurrentlyPerformance',
    label: i18n('entities.projectPerformanceMonitoringReport.fields.forecastsConsideringCurrentlyPerformance'),
  },
  {
    name: 'currentRiskSituation',
    label: i18n('entities.projectPerformanceMonitoringReport.fields.currentRiskSituation'),
  },
  {
    name: 'currentStatusIssues',
    label: i18n('entities.projectPerformanceMonitoringReport.fields.currentStatusIssues'),
  },
  {
    name: 'workCompletedDuringPeriod',
    label: i18n('entities.projectPerformanceMonitoringReport.fields.workCompletedDuringPeriod'),
  },
  {
    name: 'workToBeCompletedNextPeriod',
    label: i18n('entities.projectPerformanceMonitoringReport.fields.workToBeCompletedNextPeriod'),
  },
  {
    name: 'summaryChangesApprovedInThePeriod',
    label: i18n('entities.projectPerformanceMonitoringReport.fields.summaryChangesApprovedInThePeriod'),
  },
  {
    name: 'earnedValueManagement',
    label: i18n('entities.projectPerformanceMonitoringReport.fields.earnedValueManagement'),
  },
  {
    name: 'otherRelevantInformation',
    label: i18n('entities.projectPerformanceMonitoringReport.fields.otherRelevantInformation'),
  },
  {
    name: 'dateReport',
    label: i18n('entities.projectPerformanceMonitoringReport.fields.dateReport'),
  },
  {
    name: 'createdAt',
    label: i18n('entities.projectPerformanceMonitoringReport.fields.createdAt'),
    render: exporterRenders.datetime(),
  },
  {
    name: 'updatedAt',
    label: i18n('entities.projectPerformanceMonitoringReport.fields.updatedAt'),
    render: exporterRenders.datetime(),
  },
];
