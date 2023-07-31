import React from 'react';
import { i18n } from 'src/i18n';
import Spinner from 'src/view/shared/Spinner';
import TextViewItem from 'src/view/shared/view/TextViewItem';
import ActivityListViewItem from 'src/view/activityList/view/ActivityListViewItem';
import ResourceViewItem from 'src/view/resource/view/ResourceViewItem';

function ResourceRequirementsView(props) {
  const { record, loading } = props;

  if (loading || !record) {
    return <Spinner />;
  }

  return (
    <div>
      <ActivityListViewItem
        label={i18n('entities.resourceRequirements.fields.activity')}
        value={record.activity}
      />

      <ResourceViewItem
        label={i18n('entities.resourceRequirements.fields.resource')}
        value={record.resource}
      />

      <TextViewItem
        label={i18n('entities.resourceRequirements.fields.requiredAmountResource')}
        value={record.requiredAmountResource}
      />
    </div>
  );
}

export default ResourceRequirementsView;
