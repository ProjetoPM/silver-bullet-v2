import React from 'react';
import { i18n } from 'src/i18n';
import BusinessCaseListFilter from 'src/view/businessCase/list/BusinessCaseListFilter';
import BusinessCaseListTable from 'src/view/businessCase/list/BusinessCaseListTable';
import BusinessCaseListToolbar from 'src/view/businessCase/list/BusinessCaseListToolbar';
import Breadcrumb from 'src/view/shared/Breadcrumb';

function BusinessCaseListPage(props) {
  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.businessCase.menu')],
        ]}
      />

      <div className="mt-4 p-6 bg-white dark:bg-gray-800 dark:border-gray-800 text-gray-900 dark:text-gray-200 border-gray-200 border rounded-md">
        <h1 className=" text-lg font-medium mb-6">
          {i18n('entities.businessCase.list.title')}
        </h1>
        <BusinessCaseListToolbar />
        <BusinessCaseListFilter />
        <BusinessCaseListTable />
      </div>
    </>
  );
}

export default BusinessCaseListPage;
