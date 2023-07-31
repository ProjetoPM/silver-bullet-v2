import React from 'react';
import { i18n } from 'src/i18n';
import Spinner from 'src/view/shared/Spinner';
import TextViewItem from 'src/view/shared/view/TextViewItem';

function IssueLogView(props) {
  const { record, loading } = props;

  if (loading || !record) {
    return <Spinner />;
  }

  return (
    <div>
      <TextViewItem
        label={i18n('entities.issueLog.fields.responsibleIdentifying')}
        value={record.responsibleIdentifying}
      />

      <TextViewItem
        label={i18n('entities.issueLog.fields.identificationDate')}
        value={record.identificationDate}
      />

      <TextViewItem
        label={i18n('entities.issueLog.fields.issueDescription')}
        value={record.issueDescription}
      />

      <TextViewItem
        label={i18n('entities.issueLog.fields.issueType')}
        value={record.issueType}
      />

      <TextViewItem
        label={i18n('entities.issueLog.fields.issueResponsible')}
        value={record.issueResponsible}
      />

      <TextViewItem
        label={i18n('entities.issueLog.fields.situation')}
        value={record.situation}
      />

      <TextViewItem
        label={i18n('entities.issueLog.fields.requiredAction')}
        value={record.requiredAction}
      />

      <TextViewItem
        label={i18n('entities.issueLog.fields.comments')}
        value={record.comments}
      />
    </div>
  );
}

export default IssueLogView;
