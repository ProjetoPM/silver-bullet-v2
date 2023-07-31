import React from 'react';
import { i18n } from 'src/i18n';
import Spinner from 'src/view/shared/Spinner';
import TextViewItem from 'src/view/shared/view/TextViewItem';

function ScheduleNetworkDiagramView(props) {
  const { record, loading } = props;

  if (loading || !record) {
    return <Spinner />;
  }

  return (
    <div>
      <TextViewItem
        label={i18n('entities.scheduleNetworkDiagram.fields.activityName')}
        value={record.activityName}
      />

      <TextViewItem
        label={i18n('entities.scheduleNetworkDiagram.fields.predecessorActivity')}
        value={
          record.predecessorActivity &&
          i18n(
            `entities.scheduleNetworkDiagram.enumerators.predecessorActivity.${record.predecessorActivity}`,
          )
        }
      />
    </div>
  );
}

export default ScheduleNetworkDiagramView;
