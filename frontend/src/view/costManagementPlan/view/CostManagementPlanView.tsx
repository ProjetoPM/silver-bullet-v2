import React from 'react';
import { i18n } from 'src/i18n';
import Spinner from 'src/view/shared/Spinner';
import TextViewItem from 'src/view/shared/view/TextViewItem';

function CostManagementPlanView(props) {
  const { record, loading } = props;

  if (loading || !record) {
    return <Spinner />;
  }

  return (
    <div>
      <TextViewItem
        label={i18n('entities.costManagementPlan.fields.processesManagingProjectCosts')}
        value={record.processesManagingProjectCosts}
      />

      <TextViewItem
        label={i18n('entities.costManagementPlan.fields.levelAccuracy')}
        value={record.levelAccuracy}
      />

      <TextViewItem
        label={i18n('entities.costManagementPlan.fields.organizationalProceduresLinks')}
        value={record.organizationalProceduresLinks}
      />

      <TextViewItem
        label={i18n('entities.costManagementPlan.fields.rulesPerformanceMeasurement')}
        value={record.rulesPerformanceMeasurement}
      />

      <TextViewItem
        label={i18n('entities.costManagementPlan.fields.unitsMeasureUsed')}
        value={record.unitsMeasureUsed}
      />

      <TextViewItem
        label={i18n('entities.costManagementPlan.fields.levelPrecision')}
        value={record.levelPrecision}
      />

      <TextViewItem
        label={i18n('entities.costManagementPlan.fields.controlThresholds')}
        value={record.controlThresholds}
      />

      <TextViewItem
        label={i18n('entities.costManagementPlan.fields.reportingFormats')}
        value={record.reportingFormats}
      />
    </div>
  );
}

export default CostManagementPlanView;
