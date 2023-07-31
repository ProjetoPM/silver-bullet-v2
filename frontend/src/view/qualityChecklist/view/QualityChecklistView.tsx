import React from 'react';
import { i18n } from 'src/i18n';
import Spinner from 'src/view/shared/Spinner';
import TextViewItem from 'src/view/shared/view/TextViewItem';

function QualityChecklistView(props) {
  const { record, loading } = props;

  if (loading || !record) {
    return <Spinner />;
  }

  return (
    <div>
      <TextViewItem
        label={i18n('entities.qualityChecklist.fields.verifiedProductProcessActivity')}
        value={record.verifiedProductProcessActivity}
      />

      <TextViewItem
        label={i18n('entities.qualityChecklist.fields.verificationDate')}
        value={record.verificationDate}
      />

      <TextViewItem
        label={i18n('entities.qualityChecklist.fields.responsibleVerification')}
        value={record.responsibleVerification}
      />

      <TextViewItem
        label={i18n('entities.qualityChecklist.fields.associatedDocuments')}
        value={record.associatedDocuments}
      />

      <TextViewItem
        label={i18n('entities.qualityChecklist.fields.guidelinesComments')}
        value={record.guidelinesComments}
      />
    </div>
  );
}

export default QualityChecklistView;
