import React from 'react';
import { i18n } from 'src/i18n';
import Spinner from 'src/view/shared/Spinner';
import TextViewItem from 'src/view/shared/view/TextViewItem';

function ProjectClosureView(props) {
  const { record, loading } = props;

  if (loading || !record) {
    return <Spinner />;
  }

  return (
    <div>
      <TextViewItem
        label={i18n('entities.projectClosure.fields.client')}
        value={record.client}
      />

      <TextViewItem
        label={i18n('entities.projectClosure.fields.dateclosure')}
        value={record.dateclosure}
      />

      <TextViewItem
        label={i18n('entities.projectClosure.fields.mainChangesApproved')}
        value={record.mainChangesApproved}
      />

      <TextViewItem
        label={i18n('entities.projectClosure.fields.mainlessonslearned')}
        value={record.mainlessonslearned}
      />

      <TextViewItem
        label={i18n('entities.projectClosure.fields.mainDeviations')}
        value={record.mainDeviations}
      />

      <TextViewItem
        label={i18n('entities.projectClosure.fields.customerComments')}
        value={record.customerComments}
      />

      <TextViewItem
        label={i18n('entities.projectClosure.fields.sponsorscomments')}
        value={record.sponsorscomments}
      />
    </div>
  );
}

export default ProjectClosureView;
