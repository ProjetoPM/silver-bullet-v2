import React from 'react';
import { i18n } from 'src/i18n';
import WorkPerformanceReportsListFilter from 'src/view/workPerformanceReports/list/WorkPerformanceReportsListFilter';
import WorkPerformanceReportsListTable from 'src/view/workPerformanceReports/list/WorkPerformanceReportsListTable';
import WorkPerformanceReportsListToolbar from 'src/view/workPerformanceReports/list/WorkPerformanceReportsListToolbar';
import Breadcrumb from 'src/view/shared/Breadcrumb';

function WorkPerformanceReportsListPage(props) {
  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.workPerformanceReports.menu')],
        ]}
      />

      <div className="mt-4 p-6 bg-white dark:bg-gray-800 dark:border-gray-800 text-gray-900 dark:text-gray-200 border-gray-200 border rounded-md">
        <h1 className=" text-lg font-medium mb-6">
          {i18n('entities.workPerformanceReports.list.title')}
        </h1>
        <WorkPerformanceReportsListToolbar />
        <WorkPerformanceReportsListFilter />
        <WorkPerformanceReportsListTable />
      </div>
    </>
  );
}

export default WorkPerformanceReportsListPage;
