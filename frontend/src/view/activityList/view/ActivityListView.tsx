import React from 'react';
import { i18n } from 'src/i18n';
import Spinner from 'src/view/shared/Spinner';
import TextViewItem from 'src/view/shared/view/TextViewItem';

function ActivityListView(props) {
  const { record, loading } = props;

  if (loading || !record) {
    return <Spinner />;
  }

  return (
    <div>
      <TextViewItem
        label={i18n('entities.activityList.fields.activityLabel')}
        value={record.activityLabel}
      />

      <TextViewItem
        label={i18n('entities.activityList.fields.milestone')}
        value={record.milestone}
      />

      <TextViewItem
        label={i18n('entities.activityList.fields.activityName')}
        value={record.activityName}
      />

      <TextViewItem
        label={i18n('entities.activityList.fields.projectPhase')}
        value={record.projectPhase}
      />

      <TextViewItem
        label={i18n('entities.activityList.fields.wBSId')}
        value={record.wBSId}
      />

      <TextViewItem
        label={i18n('entities.activityList.fields.activityDescription')}
        value={record.activityDescription}
      />
    </div>
  );
}

export default ActivityListView;
