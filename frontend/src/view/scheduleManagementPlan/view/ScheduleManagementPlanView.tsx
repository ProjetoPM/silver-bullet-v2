import React from 'react';
import { i18n } from 'src/i18n';
import Spinner from 'src/view/shared/Spinner';
import TextViewItem from 'src/view/shared/view/TextViewItem';

function ScheduleManagementPlanView(props) {
  const { record, loading } = props;

  if (loading || !record) {
    return <Spinner />;
  }

  return (
    <div>
      <TextViewItem
        label={i18n('entities.scheduleManagementPlan.fields.projectScheduleModelDevelopment')}
        value={record.projectScheduleModelDevelopment}
      />

      <TextViewItem
        label={i18n('entities.scheduleManagementPlan.fields.levelAccuracy')}
        value={record.levelAccuracy}
      />

      <TextViewItem
        label={i18n('entities.scheduleManagementPlan.fields.organizationalProceduresLinks')}
        value={record.organizationalProceduresLinks}
      />

      <TextViewItem
        label={i18n('entities.scheduleManagementPlan.fields.projectScheduleModelMaintenance')}
        value={record.projectScheduleModelMaintenance}
      />

      <TextViewItem
        label={i18n('entities.scheduleManagementPlan.fields.performanceMeasurementRules')}
        value={record.performanceMeasurementRules}
      />

      <TextViewItem
        label={i18n('entities.scheduleManagementPlan.fields.reportingFormats')}
        value={record.reportingFormats}
      />

      <TextViewItem
        label={i18n('entities.scheduleManagementPlan.fields.releaseIterationLength')}
        value={record.releaseIterationLength}
      />

      <TextViewItem
        label={i18n('entities.scheduleManagementPlan.fields.controlThresholds')}
        value={record.controlThresholds}
      />

      <TextViewItem
        label={i18n('entities.scheduleManagementPlan.fields.unitsMeasure')}
        value={record.unitsMeasure}
      />
    </div>
  );
}

export default ScheduleManagementPlanView;
