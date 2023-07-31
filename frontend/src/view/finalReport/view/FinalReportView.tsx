import React from 'react';
import { i18n } from 'src/i18n';
import Spinner from 'src/view/shared/Spinner';
import TextViewItem from 'src/view/shared/view/TextViewItem';

function FinalReportView(props) {
  const { record, loading } = props;

  if (loading || !record) {
    return <Spinner />;
  }

  return (
    <div>
      <TextViewItem
        label={i18n('entities.finalReport.fields.summaryLevelDescription')}
        value={record.summaryLevelDescription}
      />

      <TextViewItem
        label={i18n('entities.finalReport.fields.scopeObjectivesCriteria')}
        value={record.scopeObjectivesCriteria}
      />

      <TextViewItem
        label={i18n('entities.finalReport.fields.qualityObjectives')}
        value={record.qualityObjectives}
      />

      <TextViewItem
        label={i18n('entities.finalReport.fields.costObjectives')}
        value={record.costObjectives}
      />

      <TextViewItem
        label={i18n('entities.finalReport.fields.scheduleObjectives')}
        value={record.scheduleObjectives}
      />

      <TextViewItem
        label={i18n('entities.finalReport.fields.summaryValidation')}
        value={record.summaryValidation}
      />

      <TextViewItem
        label={i18n('entities.finalReport.fields.summaryResults')}
        value={record.summaryResults}
      />

      <TextViewItem
        label={i18n('entities.finalReport.fields.summaryRisksIssues')}
        value={record.summaryRisksIssues}
      />
    </div>
  );
}

export default FinalReportView;
