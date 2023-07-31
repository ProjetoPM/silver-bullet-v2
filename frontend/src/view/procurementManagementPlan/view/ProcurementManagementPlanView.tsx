import React from 'react';
import { i18n } from 'src/i18n';
import Spinner from 'src/view/shared/Spinner';
import TextViewItem from 'src/view/shared/view/TextViewItem';

function ProcurementManagementPlanView(props) {
  const { record, loading } = props;

  if (loading || !record) {
    return <Spinner />;
  }

  return (
    <div>
      <TextViewItem
        label={i18n('entities.procurementManagementPlan.fields.productsServicesWillBeObtained')}
        value={record.productsServicesWillBeObtained}
      />

      <TextViewItem
        label={i18n('entities.procurementManagementPlan.fields.howProcurementCoordinated')}
        value={record.howProcurementCoordinated}
      />

      <TextViewItem
        label={i18n('entities.procurementManagementPlan.fields.timetableProcurementActivities')}
        value={record.timetableProcurementActivities}
      />

      <TextViewItem
        label={i18n('entities.procurementManagementPlan.fields.procurementMetrics')}
        value={record.procurementMetrics}
      />

      <TextViewItem
        label={i18n('entities.procurementManagementPlan.fields.constraintsAssumptions')}
        value={record.constraintsAssumptions}
      />

      <TextViewItem
        label={i18n('entities.procurementManagementPlan.fields.stakeholderRolesResponsibilities')}
        value={record.stakeholderRolesResponsibilities}
      />

      <TextViewItem
        label={i18n('entities.procurementManagementPlan.fields.theLegalJurisdiction')}
        value={record.theLegalJurisdiction}
      />

      <TextViewItem
        label={i18n('entities.procurementManagementPlan.fields.independentEstimates')}
        value={record.independentEstimates}
      />

      <TextViewItem
        label={i18n('entities.procurementManagementPlan.fields.riskManagementIssues')}
        value={record.riskManagementIssues}
      />

      <TextViewItem
        label={i18n('entities.procurementManagementPlan.fields.prequalifiedSellers')}
        value={record.prequalifiedSellers}
      />

      <TextViewItem
        label={i18n('entities.procurementManagementPlan.fields.procurementStrategy')}
        value={record.procurementStrategy}
      />
    </div>
  );
}

export default ProcurementManagementPlanView;
