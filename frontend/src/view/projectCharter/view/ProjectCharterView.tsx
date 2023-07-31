import React from 'react';
import { i18n } from 'src/i18n';
import Spinner from 'src/view/shared/Spinner';
import TextViewItem from 'src/view/shared/view/TextViewItem';

function ProjectCharterView(props) {
  const { record, loading } = props;

  if (loading || !record) {
    return <Spinner />;
  }

  return (
    <div>
      <TextViewItem
        label={i18n('entities.projectCharter.fields.projectName')}
        value={record.projectName}
      />

      <TextViewItem
        label={i18n('entities.projectCharter.fields.highLevelProjectDescription')}
        value={record.highLevelProjectDescription}
      />

      <TextViewItem
        label={i18n('entities.projectCharter.fields.startdate')}
        value={record.startdate}
      />

      <TextViewItem
        label={i18n('entities.projectCharter.fields.enddate')}
        value={record.enddate}
      />

      <TextViewItem
        label={i18n('entities.projectCharter.fields.projectPurpose')}
        value={record.projectPurpose}
      />

      <TextViewItem
        label={i18n('entities.projectCharter.fields.measurableProjectObjectives')}
        value={record.measurableProjectObjectives}
      />

      <TextViewItem
        label={i18n('entities.projectCharter.fields.keyBenefits')}
        value={record.keyBenefits}
      />

      <TextViewItem
        label={i18n('entities.projectCharter.fields.highlevelRequirements')}
        value={record.highlevelRequirements}
      />

      <TextViewItem
        label={i18n('entities.projectCharter.fields.boundaries')}
        value={record.boundaries}
      />

      <TextViewItem
        label={i18n('entities.projectCharter.fields.overallProjectRisk')}
        value={record.overallProjectRisk}
      />

      <TextViewItem
        label={i18n('entities.projectCharter.fields.summaryMilestoneSchedule')}
        value={record.summaryMilestoneSchedule}
      />

      <TextViewItem
        label={i18n('entities.projectCharter.fields.preapprovedFinancialResources')}
        value={record.preapprovedFinancialResources}
      />

      <TextViewItem
        label={i18n('entities.projectCharter.fields.projectApprovalRequirements')}
        value={record.projectApprovalRequirements}
      />

      <TextViewItem
        label={i18n('entities.projectCharter.fields.successCriteria')}
        value={record.successCriteria}
      />

      <TextViewItem
        label={i18n('entities.projectCharter.fields.projectExitCriteria')}
        value={record.projectExitCriteria}
      />
    </div>
  );
}

export default ProjectCharterView;
