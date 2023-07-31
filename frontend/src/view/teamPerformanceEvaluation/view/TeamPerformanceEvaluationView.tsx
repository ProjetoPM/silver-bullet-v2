import React from 'react';
import { i18n } from 'src/i18n';
import Spinner from 'src/view/shared/Spinner';
import TextViewItem from 'src/view/shared/view/TextViewItem';

function TeamPerformanceEvaluationView(props) {
  const { record, loading } = props;

  if (loading || !record) {
    return <Spinner />;
  }

  return (
    <div>
      <TextViewItem
        label={i18n('entities.teamPerformanceEvaluation.fields.teamMemberName')}
        value={record.teamMemberName}
      />

      <TextViewItem
        label={i18n('entities.teamPerformanceEvaluation.fields.jobRole')}
        value={record.jobRole}
      />

      <TextViewItem
        label={i18n('entities.teamPerformanceEvaluation.fields.functionProject')}
        value={record.functionProject}
      />

      <TextViewItem
        label={i18n('entities.teamPerformanceEvaluation.fields.evaluationDate')}
        value={record.evaluationDate}
      />

      <TextViewItem
        label={i18n('entities.teamPerformanceEvaluation.fields.reviewEvaluation')}
        value={record.reviewEvaluation}
      />

      <TextViewItem
        label={i18n('entities.teamPerformanceEvaluation.fields.strongPoints')}
        value={record.strongPoints}
      />

      <TextViewItem
        label={i18n('entities.teamPerformanceEvaluation.fields.opportunitiesImprovement')}
        value={record.opportunitiesImprovement}
      />

      <TextViewItem
        label={i18n('entities.teamPerformanceEvaluation.fields.developmentPlan')}
        value={record.developmentPlan}
      />

      <TextViewItem
        label={i18n('entities.teamPerformanceEvaluation.fields.alreadyDeveloped')}
        value={record.alreadyDeveloped}
      />

      <TextViewItem
        label={i18n('entities.teamPerformanceEvaluation.fields.externalcomments')}
        value={record.externalcomments}
      />

      <TextViewItem
        label={i18n('entities.teamPerformanceEvaluation.fields.teamMatesComments')}
        value={record.teamMatesComments}
      />

      <TextViewItem
        label={i18n('entities.teamPerformanceEvaluation.fields.evaluatorComments')}
        value={record.evaluatorComments}
      />
    </div>
  );
}

export default TeamPerformanceEvaluationView;
