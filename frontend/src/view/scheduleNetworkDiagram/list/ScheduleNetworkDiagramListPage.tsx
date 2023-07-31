import React from 'react';
import { i18n } from 'src/i18n';
import ScheduleNetworkDiagramListFilter from 'src/view/scheduleNetworkDiagram/list/ScheduleNetworkDiagramListFilter';
import ScheduleNetworkDiagramListTable from 'src/view/scheduleNetworkDiagram/list/ScheduleNetworkDiagramListTable';
import ScheduleNetworkDiagramListToolbar from 'src/view/scheduleNetworkDiagram/list/ScheduleNetworkDiagramListToolbar';
import Breadcrumb from 'src/view/shared/Breadcrumb';

function ScheduleNetworkDiagramListPage(props) {
  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.scheduleNetworkDiagram.menu')],
        ]}
      />

      <div className="mt-4 p-6 bg-white dark:bg-gray-800 dark:border-gray-800 text-gray-900 dark:text-gray-200 border-gray-200 border rounded-md">
        <h1 className=" text-lg font-medium mb-6">
          {i18n('entities.scheduleNetworkDiagram.list.title')}
        </h1>
        <ScheduleNetworkDiagramListToolbar />
        <ScheduleNetworkDiagramListFilter />
        <ScheduleNetworkDiagramListTable />
      </div>
    </>
  );
}

export default ScheduleNetworkDiagramListPage;