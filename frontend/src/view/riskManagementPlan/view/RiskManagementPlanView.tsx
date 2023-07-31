import React from 'react';
import { i18n } from 'src/i18n';
import Spinner from 'src/view/shared/Spinner';
import TextViewItem from 'src/view/shared/view/TextViewItem';

function RiskManagementPlanView(props) {
  const { record, loading } = props;

  if (loading || !record) {
    return <Spinner />;
  }

  return (
    <div>
      <TextViewItem
        label={i18n('entities.riskManagementPlan.fields.methodology')}
        value={record.methodology}
      />

      <TextViewItem
        label={i18n('entities.riskManagementPlan.fields.rolesResponsibilities')}
        value={record.rolesResponsibilities}
      />

      <TextViewItem
        label={i18n('entities.riskManagementPlan.fields.probabilityImpactMatrix')}
        value={record.probabilityImpactMatrix}
      />

      <TextViewItem
        label={i18n('entities.riskManagementPlan.fields.riskCategories')}
        value={record.riskCategories}
      />

      <TextViewItem
        label={i18n('entities.riskManagementPlan.fields.riskStrategy')}
        value={record.riskStrategy}
      />

      <TextViewItem
        label={i18n('entities.riskManagementPlan.fields.tracking')}
        value={record.tracking}
      />

      <TextViewItem
        label={i18n('entities.riskManagementPlan.fields.funding')}
        value={record.funding}
      />

      <TextViewItem
        label={i18n('entities.riskManagementPlan.fields.timing')}
        value={record.timing}
      />

      <TextViewItem
        label={i18n('entities.riskManagementPlan.fields.stakeholderRiskAppetite')}
        value={record.stakeholderRiskAppetite}
      />

      <TextViewItem
        label={i18n('entities.riskManagementPlan.fields.definitionsRiskProbabilityImpacts')}
        value={record.definitionsRiskProbabilityImpacts}
      />

      <TextViewItem
        label={i18n('entities.riskManagementPlan.fields.reportingFormats')}
        value={record.reportingFormats}
      />
    </div>
  );
}

export default RiskManagementPlanView;
