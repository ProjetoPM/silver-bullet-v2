import React from 'react';
import { i18n } from 'src/i18n';
import ClosedProcurementDocumentationListFilter from 'src/view/closedProcurementDocumentation/list/ClosedProcurementDocumentationListFilter';
import ClosedProcurementDocumentationListTable from 'src/view/closedProcurementDocumentation/list/ClosedProcurementDocumentationListTable';
import ClosedProcurementDocumentationListToolbar from 'src/view/closedProcurementDocumentation/list/ClosedProcurementDocumentationListToolbar';
import Breadcrumb from 'src/view/shared/Breadcrumb';

function ClosedProcurementDocumentationListPage(props) {
  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.closedProcurementDocumentation.menu')],
        ]}
      />

      <div className="mt-4 p-6 bg-white dark:bg-gray-800 dark:border-gray-800 text-gray-900 dark:text-gray-200 border-gray-200 border rounded-md">
        <h1 className=" text-lg font-medium mb-6">
          {i18n('entities.closedProcurementDocumentation.list.title')}
        </h1>
        <ClosedProcurementDocumentationListToolbar />
        <ClosedProcurementDocumentationListFilter />
        <ClosedProcurementDocumentationListTable />
      </div>
    </>
  );
}

export default ClosedProcurementDocumentationListPage;
