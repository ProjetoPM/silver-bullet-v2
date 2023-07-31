import React from 'react';
import { i18n } from 'src/i18n';
import FinalReportListFilter from 'src/view/finalReport/list/FinalReportListFilter';
import FinalReportListTable from 'src/view/finalReport/list/FinalReportListTable';
import FinalReportListToolbar from 'src/view/finalReport/list/FinalReportListToolbar';
import Breadcrumb from 'src/view/shared/Breadcrumb';

function FinalReportListPage(props) {
  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.finalReport.menu')],
        ]}
      />

      <div className="mt-4 p-6 bg-white dark:bg-gray-800 dark:border-gray-800 text-gray-900 dark:text-gray-200 border-gray-200 border rounded-md">
        <h1 className=" text-lg font-medium mb-6">
          {i18n('entities.finalReport.list.title')}
        </h1>
        <FinalReportListToolbar />
        <FinalReportListFilter />
        <FinalReportListTable />
      </div>
    </>
  );
}

export default FinalReportListPage;
