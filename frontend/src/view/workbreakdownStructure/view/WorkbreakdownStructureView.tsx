import React from 'react';
import { i18n } from 'src/i18n';
import Spinner from 'src/view/shared/Spinner';
import TextViewItem from 'src/view/shared/view/TextViewItem';
import FilesViewItem from 'src/view/shared/view/FilesViewItem';

function WorkbreakdownStructureView(props) {
  const { record, loading } = props;

  if (loading || !record) {
    return <Spinner />;
  }

  return (
    <div>
      <TextViewItem
        label={i18n('entities.workbreakdownStructure.fields.name')}
        value={record.name}
      />

      <FilesViewItem
        label={i18n(
          'entities.workbreakdownStructure.fields.arquivo',
        )}
        value={record.arquivo}
      />
    </div>
  );
}

export default WorkbreakdownStructureView;
