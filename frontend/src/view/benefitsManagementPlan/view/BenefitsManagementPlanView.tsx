import React from 'react';
import { i18n } from 'src/i18n';
import Spinner from 'src/view/shared/Spinner';
import TextViewItem from 'src/view/shared/view/TextViewItem';

function BenefitsManagementPlanView(props) {
  const { record, loading } = props;

  if (loading || !record) {
    return <Spinner />;
  }

  return (
    <div>
      <TextViewItem
        label={i18n('entities.benefitsManagementPlan.fields.targetBenefits')}
        value={record.targetBenefits}
      />

      <TextViewItem
        label={i18n('entities.benefitsManagementPlan.fields.strategicAlignment')}
        value={record.strategicAlignment}
      />

      <TextViewItem
        label={i18n('entities.benefitsManagementPlan.fields.scheduleforBenefits')}
        value={record.scheduleforBenefits}
      />

      <TextViewItem
        label={i18n('entities.benefitsManagementPlan.fields.benefitsOwner')}
        value={record.benefitsOwner}
      />

      <TextViewItem
        label={i18n('entities.benefitsManagementPlan.fields.indicators')}
        value={record.indicators}
      />

      <TextViewItem
        label={i18n('entities.benefitsManagementPlan.fields.premises')}
        value={record.premises}
      />

      <TextViewItem
        label={i18n('entities.benefitsManagementPlan.fields.risks')}
        value={record.risks}
      />
    </div>
  );
}

export default BenefitsManagementPlanView;
