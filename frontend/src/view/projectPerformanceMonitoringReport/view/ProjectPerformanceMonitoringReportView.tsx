import React from 'react';
import { i18n } from 'src/i18n';
import Spinner from 'src/view/shared/Spinner';
import TextViewItem from 'src/view/shared/view/TextViewItem';

function ProjectPerformanceMonitoringReportView(props) {
  const { record, loading } = props;

  if (loading || !record) {
    return <Spinner />;
  }

  return (
    <div>
      <TextViewItem
        label={i18n('entities.projectPerformanceMonitoringReport.fields.currentPerformanceAnalysis')}
        value={record.currentPerformanceAnalysis}
      />

      <TextViewItem
        label={i18n('entities.projectPerformanceMonitoringReport.fields.forecastsAsPlanned')}
        value={record.forecastsAsPlanned}
      />

      <TextViewItem
        label={i18n('entities.projectPerformanceMonitoringReport.fields.forecastsConsideringCurrentlyPerformance')}
        value={record.forecastsConsideringCurrentlyPerformance}
      />

      <TextViewItem
        label={i18n('entities.projectPerformanceMonitoringReport.fields.currentRiskSituation')}
        value={record.currentRiskSituation}
      />

      <TextViewItem
        label={i18n('entities.projectPerformanceMonitoringReport.fields.currentStatusIssues')}
        value={record.currentStatusIssues}
      />

      <TextViewItem
        label={i18n('entities.projectPerformanceMonitoringReport.fields.workCompletedDuringPeriod')}
        value={record.workCompletedDuringPeriod}
      />

      <TextViewItem
        label={i18n('entities.projectPerformanceMonitoringReport.fields.workToBeCompletedNextPeriod')}
        value={record.workToBeCompletedNextPeriod}
      />

      <TextViewItem
        label={i18n('entities.projectPerformanceMonitoringReport.fields.summaryChangesApprovedInThePeriod')}
        value={record.summaryChangesApprovedInThePeriod}
      />

      <TextViewItem
        label={i18n('entities.projectPerformanceMonitoringReport.fields.earnedValueManagement')}
        value={record.earnedValueManagement}
      />

      <TextViewItem
        label={i18n('entities.projectPerformanceMonitoringReport.fields.otherRelevantInformation')}
        value={record.otherRelevantInformation}
      />

      <TextViewItem
        label={i18n('entities.projectPerformanceMonitoringReport.fields.dateReport')}
        value={record.dateReport}
      />
    </div>
  );
}

export default ProjectPerformanceMonitoringReportView;
