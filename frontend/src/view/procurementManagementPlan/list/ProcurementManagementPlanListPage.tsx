import React from 'react';
import { i18n } from 'src/i18n';
import ProcurementManagementPlanListFilter from 'src/view/procurementManagementPlan/list/ProcurementManagementPlanListFilter';
import ProcurementManagementPlanListTable from 'src/view/procurementManagementPlan/list/ProcurementManagementPlanListTable';
import ProcurementManagementPlanListToolbar from 'src/view/procurementManagementPlan/list/ProcurementManagementPlanListToolbar';
import Breadcrumb from 'src/view/shared/Breadcrumb';

function ProcurementManagementPlanListPage(props) {
  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.procurementManagementPlan.menu')],
        ]}
      />

      <div className="mt-4 p-6 bg-white dark:bg-gray-800 dark:border-gray-800 text-gray-900 dark:text-gray-200 border-gray-200 border rounded-md">
        <h1 className=" text-lg font-medium mb-6">
          {i18n('entities.procurementManagementPlan.list.title')}
        </h1>
        <ProcurementManagementPlanListToolbar />
        <ProcurementManagementPlanListFilter />
        <ProcurementManagementPlanListTable />
      </div>
    </>
  );
}

export default ProcurementManagementPlanListPage;
