import React from 'react';
import { i18n } from 'src/i18n';
import Spinner from 'src/view/shared/Spinner';
import TextViewItem from 'src/view/shared/view/TextViewItem';

function ProjectScopeStatementView(props) {
  const { record, loading } = props;

  if (loading || !record) {
    return <Spinner />;
  }

  return (
    <div>
      <TextViewItem
        label={i18n('entities.projectScopeStatement.fields.productScopeDescription')}
        value={record.productScopeDescription}
      />

      <TextViewItem
        label={i18n('entities.projectScopeStatement.fields.acceptanceCriteria')}
        value={record.acceptanceCriteria}
      />

      <TextViewItem
        label={i18n('entities.projectScopeStatement.fields.deliverables')}
        value={record.deliverables}
      />

      <TextViewItem
        label={i18n('entities.projectScopeStatement.fields.projectExclusions')}
        value={record.projectExclusions}
      />
    </div>
  );
}

export default ProjectScopeStatementView;
