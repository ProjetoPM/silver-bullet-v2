import React from 'react';
import { i18n } from 'src/i18n';
import Spinner from 'src/view/shared/Spinner';
import TextViewItem from 'src/view/shared/view/TextViewItem';

function ProjectManagementPlanView(props) {
  const { record, loading } = props;

  if (loading || !record) {
    return <Spinner />;
  }

  return (
    <div>
      <TextViewItem
        label={i18n('entities.projectManagementPlan.fields.scopeManagementPlan')}
        value={record.scopeManagementPlan}
      />

      <TextViewItem
        label={i18n('entities.projectManagementPlan.fields.requirementsManagementPlan')}
        value={record.requirementsManagementPlan}
      />

      <TextViewItem
        label={i18n('entities.projectManagementPlan.fields.scheduleManagementPlan')}
        value={record.scheduleManagementPlan}
      />

      <TextViewItem
        label={i18n('entities.projectManagementPlan.fields.costManagementPlan')}
        value={record.costManagementPlan}
      />

      <TextViewItem
        label={i18n('entities.projectManagementPlan.fields.qualityManagementPlan')}
        value={record.qualityManagementPlan}
      />

      <TextViewItem
        label={i18n('entities.projectManagementPlan.fields.resourceManagementPlan')}
        value={record.resourceManagementPlan}
      />

      <TextViewItem
        label={i18n('entities.projectManagementPlan.fields.communicationsManagementPlan')}
        value={record.communicationsManagementPlan}
      />

      <TextViewItem
        label={i18n('entities.projectManagementPlan.fields.riskManagementPlan')}
        value={record.riskManagementPlan}
      />

      <TextViewItem
        label={i18n('entities.projectManagementPlan.fields.procurementManagementPlan')}
        value={record.procurementManagementPlan}
      />

      <TextViewItem
        label={i18n('entities.projectManagementPlan.fields.stakeholderEngagementPlan')}
        value={record.stakeholderEngagementPlan}
      />

      <TextViewItem
        label={i18n('entities.projectManagementPlan.fields.scopeBaseline')}
        value={record.scopeBaseline}
      />

      <TextViewItem
        label={i18n('entities.projectManagementPlan.fields.scheduleBaseline')}
        value={record.scheduleBaseline}
      />

      <TextViewItem
        label={i18n('entities.projectManagementPlan.fields.costBaseline')}
        value={record.costBaseline}
      />

      <TextViewItem
        label={i18n('entities.projectManagementPlan.fields.changeManagementPlan')}
        value={record.changeManagementPlan}
      />

      <TextViewItem
        label={i18n('entities.projectManagementPlan.fields.configurationManagementPlan')}
        value={record.configurationManagementPlan}
      />

      <TextViewItem
        label={i18n('entities.projectManagementPlan.fields.performanceMeasurementBaseline')}
        value={record.performanceMeasurementBaseline}
      />

      <TextViewItem
        label={i18n('entities.projectManagementPlan.fields.projectLifeCycle')}
        value={record.projectLifeCycle}
      />

      <TextViewItem
        label={i18n('entities.projectManagementPlan.fields.developmentApproach')}
        value={record.developmentApproach}
      />

      <TextViewItem
        label={i18n('entities.projectManagementPlan.fields.managementReviews')}
        value={record.managementReviews}
      />
    </div>
  );
}

export default ProjectManagementPlanView;
