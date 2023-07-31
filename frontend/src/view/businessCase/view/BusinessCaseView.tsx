import React from 'react';
import { i18n } from 'src/i18n';
import Spinner from 'src/view/shared/Spinner';
import TextViewItem from 'src/view/shared/view/TextViewItem';

function BusinessCaseView(props) {
  const { record, loading } = props;

  if (loading || !record) {
    return <Spinner />;
  }

  return (
    <div>
      <TextViewItem
        label={i18n('entities.businessCase.fields.businessNeeds')}
        value={record.businessNeeds}
      />

      <TextViewItem
        label={i18n('entities.businessCase.fields.situationAnalysis')}
        value={record.situationAnalysis}
      />

      <TextViewItem
        label={i18n('entities.businessCase.fields.recommendation')}
        value={record.recommendation}
      />

      <TextViewItem
        label={i18n('entities.businessCase.fields.evaluation')}
        value={record.evaluation}
      />
    </div>
  );
}

export default BusinessCaseView;
