import React from 'react';
import { i18n } from 'src/i18n';
import Spinner from 'src/view/shared/Spinner';
import TextViewItem from 'src/view/shared/view/TextViewItem';

function WorkPerformanceReportsView(props) {
  const { record, loading } = props;

  if (loading || !record) {
    return <Spinner />;
  }

  return (
    <div>
      <TextViewItem
        label={i18n('entities.workPerformanceReports.fields.responsible')}
        value={record.responsible}
      />

      <TextViewItem
        label={i18n('entities.workPerformanceReports.fields.mainActivitiesExecution')}
        value={record.mainActivitiesExecution}
      />

      <TextViewItem
        label={i18n('entities.workPerformanceReports.fields.upcomingActivitiesPerform')}
        value={record.upcomingActivitiesPerform}
      />

      <TextViewItem
        label={i18n('entities.workPerformanceReports.fields.generalComments')}
        value={record.generalComments}
      />

      <TextViewItem
        label={i18n('entities.workPerformanceReports.fields.issues')}
        value={record.issues}
      />

      <TextViewItem
        label={i18n('entities.workPerformanceReports.fields.changes')}
        value={record.changes}
      />

      <TextViewItem
        label={i18n('entities.workPerformanceReports.fields.risks')}
        value={record.risks}
      />

      <TextViewItem
        label={i18n('entities.workPerformanceReports.fields.attentionPoints')}
        value={record.attentionPoints}
      />

      <TextViewItem
        label={i18n('entities.workPerformanceReports.fields.date')}
        value={record.date}
      />
    </div>
  );
}

export default WorkPerformanceReportsView;
