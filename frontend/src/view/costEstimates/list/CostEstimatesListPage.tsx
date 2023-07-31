import React from 'react';
import { i18n } from 'src/i18n';
import CostEstimatesListFilter from 'src/view/costEstimates/list/CostEstimatesListFilter';
import CostEstimatesListTable from 'src/view/costEstimates/list/CostEstimatesListTable';
import CostEstimatesListToolbar from 'src/view/costEstimates/list/CostEstimatesListToolbar';
import Breadcrumb from 'src/view/shared/Breadcrumb';

function CostEstimatesListPage(props) {
  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.costEstimates.menu')],
        ]}
      />

      <div className="mt-4 p-6 bg-white dark:bg-gray-800 dark:border-gray-800 text-gray-900 dark:text-gray-200 border-gray-200 border rounded-md">
        <h1 className=" text-lg font-medium mb-6">
          {i18n('entities.costEstimates.list.title')}
        </h1>
        <CostEstimatesListToolbar />
        <CostEstimatesListFilter />
        <CostEstimatesListTable />
      </div>
    </>
  );
}

export default CostEstimatesListPage;
