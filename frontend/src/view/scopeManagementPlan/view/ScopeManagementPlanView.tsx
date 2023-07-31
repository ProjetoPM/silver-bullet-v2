import React from 'react';
import { i18n } from 'src/i18n';
import Spinner from 'src/view/shared/Spinner';
import TextViewItem from 'src/view/shared/view/TextViewItem';

function ScopeManagementPlanView(props) {
  const { record, loading } = props;

  if (loading || !record) {
    return <Spinner />;
  }

  return (
    <div>
      <TextViewItem
        label={i18n('entities.scopeManagementPlan.fields.projectScopeSpecificationProcess')}
        value={record.projectScopeSpecificationProcess}
      />

      <TextViewItem
        label={i18n('entities.scopeManagementPlan.fields.processesMaintainingWBS')}
        value={record.processesMaintainingWBS}
      />

      <TextViewItem
        label={i18n('entities.scopeManagementPlan.fields.deliveryAcceptanceProcess')}
        value={record.deliveryAcceptanceProcess}
      />

      <TextViewItem
        label={i18n('entities.scopeManagementPlan.fields.scopeChangeManagementPlan')}
        value={record.scopeChangeManagementPlan}
      />

      <TextViewItem
        label={i18n('entities.scopeManagementPlan.fields.processMaintained')}
        value={record.processMaintained}
      />
    </div>
  );
}

export default ScopeManagementPlanView;
