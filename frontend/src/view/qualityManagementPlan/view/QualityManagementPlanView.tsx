import React from 'react';
import { i18n } from 'src/i18n';
import Spinner from 'src/view/shared/Spinner';
import TextViewItem from 'src/view/shared/view/TextViewItem';

function QualityManagementPlanView(props) {
  const { record, loading } = props;

  if (loading || !record) {
    return <Spinner />;
  }

  return (
    <div>
      <TextViewItem
        label={i18n('entities.qualityManagementPlan.fields.qualityStandardsProject')}
        value={record.qualityStandardsProject}
      />

      <TextViewItem
        label={i18n('entities.qualityManagementPlan.fields.qualityObjectivesProject')}
        value={record.qualityObjectivesProject}
      />

      <TextViewItem
        label={i18n('entities.qualityManagementPlan.fields.qualityRoles')}
        value={record.qualityRoles}
      />

      <TextViewItem
        label={i18n('entities.qualityManagementPlan.fields.projectDeliverablesQR')}
        value={record.projectDeliverablesQR}
      />

      <TextViewItem
        label={i18n('entities.qualityManagementPlan.fields.qualityControl')}
        value={record.qualityControl}
      />

      <TextViewItem
        label={i18n('entities.qualityManagementPlan.fields.qualityToolsUsed')}
        value={record.qualityToolsUsed}
      />

      <TextViewItem
        label={i18n('entities.qualityManagementPlan.fields.majorProceduresRelevant')}
        value={record.majorProceduresRelevant}
      />
    </div>
  );
}

export default QualityManagementPlanView;
