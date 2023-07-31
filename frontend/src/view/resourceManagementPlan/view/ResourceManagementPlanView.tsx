import React from 'react';
import { i18n } from 'src/i18n';
import Spinner from 'src/view/shared/Spinner';
import TextViewItem from 'src/view/shared/view/TextViewItem';

function ResourceManagementPlanView(props) {
  const { record, loading } = props;

  if (loading || !record) {
    return <Spinner />;
  }

  return (
    <div>
      <TextViewItem
        label={i18n('entities.resourceManagementPlan.fields.rolesResponsibilities')}
        value={record.rolesResponsibilities}
      />

      <TextViewItem
        label={i18n('entities.resourceManagementPlan.fields.projectOrganizationCharts')}
        value={record.projectOrganizationCharts}
      />

      <TextViewItem
        label={i18n('entities.resourceManagementPlan.fields.teamDevelopment')}
        value={record.teamDevelopment}
      />

      <TextViewItem
        label={i18n('entities.resourceManagementPlan.fields.identificationResources')}
        value={record.identificationResources}
      />

      <TextViewItem
        label={i18n('entities.resourceManagementPlan.fields.projectResourceManagement')}
        value={record.projectResourceManagement}
      />

      <TextViewItem
        label={i18n('entities.resourceManagementPlan.fields.training')}
        value={record.training}
      />

      <TextViewItem
        label={i18n('entities.resourceManagementPlan.fields.resourceControl')}
        value={record.resourceControl}
      />

      <TextViewItem
        label={i18n('entities.resourceManagementPlan.fields.recognitionPlan')}
        value={record.recognitionPlan}
      />
    </div>
  );
}

export default ResourceManagementPlanView;
