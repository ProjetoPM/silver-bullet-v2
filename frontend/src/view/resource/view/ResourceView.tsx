import React from 'react';
import { i18n } from 'src/i18n';
import Spinner from 'src/view/shared/Spinner';
import TextViewItem from 'src/view/shared/view/TextViewItem';

function ResourceView(props) {
  const { record, loading } = props;

  if (loading || !record) {
    return <Spinner />;
  }

  return (
    <div>
      <TextViewItem
        label={i18n('entities.resource.fields.resourceName')}
        value={record.resourceName}
      />

      <TextViewItem
        label={i18n('entities.resource.fields.resourceDescription')}
        value={record.resourceDescription}
      />

      <TextViewItem
        label={i18n('entities.resource.fields.resourceCostperUnit')}
        value={record.resourceCostperUnit}
      />

      <TextViewItem
        label={i18n('entities.resource.fields.resourceType')}
        value={record.resourceType}
      />
    </div>
  );
}

export default ResourceView;
