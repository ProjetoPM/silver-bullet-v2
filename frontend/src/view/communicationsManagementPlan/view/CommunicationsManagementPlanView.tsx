import React from 'react';
import { i18n } from 'src/i18n';
import Spinner from 'src/view/shared/Spinner';
import TextViewItem from 'src/view/shared/view/TextViewItem';

function CommunicationsManagementPlanView(props) {
  const { record, loading } = props;

  if (loading || !record) {
    return <Spinner />;
  }

  return (
    <div>
      <TextViewItem
        label={i18n('entities.communicationsManagementPlan.fields.type')}
        value={record.type}
      />

      <TextViewItem
        label={i18n('entities.communicationsManagementPlan.fields.nome')}
        value={record.nome}
      />

      <TextViewItem
        label={i18n('entities.communicationsManagementPlan.fields.content')}
        value={record.content}
      />

      <TextViewItem
        label={i18n('entities.communicationsManagementPlan.fields.distributionReason')}
        value={record.distributionReason}
      />

      <TextViewItem
        label={i18n('entities.communicationsManagementPlan.fields.language')}
        value={record.language}
      />

      <TextViewItem
        label={i18n('entities.communicationsManagementPlan.fields.channel')}
        value={record.channel}
      />

      <TextViewItem
        label={i18n('entities.communicationsManagementPlan.fields.documentFormat')}
        value={record.documentFormat}
      />

      <TextViewItem
        label={i18n('entities.communicationsManagementPlan.fields.method')}
        value={record.method}
      />

      <TextViewItem
        label={i18n('entities.communicationsManagementPlan.fields.frequency')}
        value={record.frequency}
      />

      <TextViewItem
        label={i18n('entities.communicationsManagementPlan.fields.allocatedResources')}
        value={record.allocatedResources}
      />

      <TextViewItem
        label={i18n('entities.communicationsManagementPlan.fields.format')}
        value={record.format}
      />

      <TextViewItem
        label={i18n('entities.communicationsManagementPlan.fields.local')}
        value={record.local}
      />
    </div>
  );
}

export default CommunicationsManagementPlanView;
