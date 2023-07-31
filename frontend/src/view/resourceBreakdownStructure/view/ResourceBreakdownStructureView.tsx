import React from 'react';
import { i18n } from 'src/i18n';
import Spinner from 'src/view/shared/Spinner';
import FilesViewItem from 'src/view/shared/view/FilesViewItem';

function ResourceBreakdownStructureView(props) {
  const { record, loading } = props;

  if (loading || !record) {
    return <Spinner />;
  }

  return (
    <div>
      <FilesViewItem
        label={i18n(
          'entities.resourceBreakdownStructure.fields.name',
        )}
        value={record.name}
      />
    </div>
  );
}

export default ResourceBreakdownStructureView;
