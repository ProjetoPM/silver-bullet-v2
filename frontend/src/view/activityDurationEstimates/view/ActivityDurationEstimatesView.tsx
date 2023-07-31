import React from 'react';
import { i18n } from 'src/i18n';
import Spinner from 'src/view/shared/Spinner';
import TextViewItem from 'src/view/shared/view/TextViewItem';
import ActivityListViewItem from 'src/view/activityList/view/ActivityListViewItem';

function ActivityDurationEstimatesView(props) {
  const { record, loading } = props;

  if (loading || !record) {
    return <Spinner />;
  }

  return (
    <div>
      <ActivityListViewItem
        label={i18n('entities.activityDurationEstimates.fields.activityName')}
        value={record.activityName}
      />

      <TextViewItem
        label={i18n('entities.activityDurationEstimates.fields.estimatedDuration')}
        value={record.estimatedDuration}
      />

      <TextViewItem
        label={i18n('entities.activityDurationEstimates.fields.estimatedStartDate')}
        value={record.estimatedStartDate}
      />

      <TextViewItem
        label={i18n('entities.activityDurationEstimates.fields.estimatedEndDate')}
        value={record.estimatedEndDate}
      />

      <TextViewItem
        label={i18n('entities.activityDurationEstimates.fields.performedDuration')}
        value={record.performedDuration}
      />

      <TextViewItem
        label={i18n('entities.activityDurationEstimates.fields.performedStartDate')}
        value={record.performedStartDate}
      />

      <TextViewItem
        label={i18n('entities.activityDurationEstimates.fields.performedEndDate')}
        value={record.performedEndDate}
      />
    </div>
  );
}

export default ActivityDurationEstimatesView;
