import React from 'react';
import { i18n } from 'src/i18n';
import CostManagementPlanListFilter from 'src/view/costManagementPlan/list/CostManagementPlanListFilter';
import CostManagementPlanListTable from 'src/view/costManagementPlan/list/CostManagementPlanListTable';
import CostManagementPlanListToolbar from 'src/view/costManagementPlan/list/CostManagementPlanListToolbar';
import Breadcrumb from 'src/view/shared/Breadcrumb';

function CostManagementPlanListPage(props) {
  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.costManagementPlan.menu')],
        ]}
      />

      <div className="mt-4 p-6 bg-white dark:bg-gray-800 dark:border-gray-800 text-gray-900 dark:text-gray-200 border-gray-200 border rounded-md">
        <h1 className=" text-lg font-medium mb-6">
          {i18n('entities.costManagementPlan.list.title')}
        </h1>
        <CostManagementPlanListToolbar />
        <CostManagementPlanListFilter />
        <CostManagementPlanListTable />
      </div>
    </>
  );
}

export default CostManagementPlanListPage;
