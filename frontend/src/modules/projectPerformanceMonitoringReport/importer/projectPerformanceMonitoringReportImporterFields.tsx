import schemas from 'src/modules/shared/yup/yupImporterSchemas';
import { i18n } from 'src/i18n';import moment from 'moment';

export default [
  {
    name: 'currentPerformanceAnalysis',
    label: i18n('entities.projectPerformanceMonitoringReport.fields.currentPerformanceAnalysis'),
    schema: schemas.string(
      i18n('entities.projectPerformanceMonitoringReport.fields.currentPerformanceAnalysis'),
      {},
    ),
  },
  {
    name: 'forecastsAsPlanned',
    label: i18n('entities.projectPerformanceMonitoringReport.fields.forecastsAsPlanned'),
    schema: schemas.string(
      i18n('entities.projectPerformanceMonitoringReport.fields.forecastsAsPlanned'),
      {},
    ),
  },
  {
    name: 'forecastsConsideringCurrentlyPerformance',
    label: i18n('entities.projectPerformanceMonitoringReport.fields.forecastsConsideringCurrentlyPerformance'),
    schema: schemas.string(
      i18n('entities.projectPerformanceMonitoringReport.fields.forecastsConsideringCurrentlyPerformance'),
      {},
    ),
  },
  {
    name: 'currentRiskSituation',
    label: i18n('entities.projectPerformanceMonitoringReport.fields.currentRiskSituation'),
    schema: schemas.string(
      i18n('entities.projectPerformanceMonitoringReport.fields.currentRiskSituation'),
      {},
    ),
  },
  {
    name: 'currentStatusIssues',
    label: i18n('entities.projectPerformanceMonitoringReport.fields.currentStatusIssues'),
    schema: schemas.string(
      i18n('entities.projectPerformanceMonitoringReport.fields.currentStatusIssues'),
      {},
    ),
  },
  {
    name: 'workCompletedDuringPeriod',
    label: i18n('entities.projectPerformanceMonitoringReport.fields.workCompletedDuringPeriod'),
    schema: schemas.string(
      i18n('entities.projectPerformanceMonitoringReport.fields.workCompletedDuringPeriod'),
      {},
    ),
  },
  {
    name: 'workToBeCompletedNextPeriod',
    label: i18n('entities.projectPerformanceMonitoringReport.fields.workToBeCompletedNextPeriod'),
    schema: schemas.string(
      i18n('entities.projectPerformanceMonitoringReport.fields.workToBeCompletedNextPeriod'),
      {},
    ),
  },
  {
    name: 'summaryChangesApprovedInThePeriod',
    label: i18n('entities.projectPerformanceMonitoringReport.fields.summaryChangesApprovedInThePeriod'),
    schema: schemas.string(
      i18n('entities.projectPerformanceMonitoringReport.fields.summaryChangesApprovedInThePeriod'),
      {},
    ),
  },
  {
    name: 'earnedValueManagement',
    label: i18n('entities.projectPerformanceMonitoringReport.fields.earnedValueManagement'),
    schema: schemas.string(
      i18n('entities.projectPerformanceMonitoringReport.fields.earnedValueManagement'),
      {},
    ),
  },
  {
    name: 'otherRelevantInformation',
    label: i18n('entities.projectPerformanceMonitoringReport.fields.otherRelevantInformation'),
    schema: schemas.string(
      i18n('entities.projectPerformanceMonitoringReport.fields.otherRelevantInformation'),
      {},
    ),
  },
  {
    name: 'dateReport',
    label: i18n('entities.projectPerformanceMonitoringReport.fields.dateReport'),
    schema: schemas.date(
      i18n('entities.projectPerformanceMonitoringReport.fields.dateReport'),
      {},
    ),
   render: (value) => value && value instanceof Date ? moment(value).format('YYYY-MM-DD') : value,
  },
];