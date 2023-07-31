import React from 'react';
import { i18n } from 'src/i18n';
import Spinner from 'src/view/shared/Spinner';
import TextViewItem from 'src/view/shared/view/TextViewItem';

function RequirementsManagementPlanView(props) {
  const { record, loading } = props;

  if (loading || !record) {
    return <Spinner />;
  }

  return (
    <div>
      <TextViewItem
        label={i18n('entities.requirementsManagementPlan.fields.requirementsActivities')}
        value={record.requirementsActivities}
      />

      <TextViewItem
        label={i18n('entities.requirementsManagementPlan.fields.configurationManagementActivities')}
        value={record.configurationManagementActivities}
      />

      <TextViewItem
        label={i18n('entities.requirementsManagementPlan.fields.requirementsPrioritizationProcess')}
        value={record.requirementsPrioritizationProcess}
      />

      <TextViewItem
        label={i18n('entities.requirementsManagementPlan.fields.metricsRationale')}
        value={record.metricsRationale}
      />
    </div>
  );
}

export default RequirementsManagementPlanView;
