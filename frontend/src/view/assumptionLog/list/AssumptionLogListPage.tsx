import React from 'react';
import { i18n } from 'src/i18n';
import AssumptionLogListFilter from 'src/view/assumptionLog/list/AssumptionLogListFilter';
import AssumptionLogListTable from 'src/view/assumptionLog/list/AssumptionLogListTable';
import AssumptionLogListToolbar from 'src/view/assumptionLog/list/AssumptionLogListToolbar';
import Breadcrumb from 'src/view/shared/Breadcrumb';

function AssumptionLogListPage(props) {
  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.assumptionLog.menu')],
        ]}
      />

      <div className="mt-4 p-6 bg-white dark:bg-gray-800 dark:border-gray-800 text-gray-900 dark:text-gray-200 border-gray-200 border rounded-md">
        <h1 className=" text-lg font-medium mb-6">
          {i18n('entities.assumptionLog.list.title')}
        </h1>
        <AssumptionLogListToolbar />
        <AssumptionLogListFilter />
        <AssumptionLogListTable />
      </div>
    </>
  );
}

export default AssumptionLogListPage;
