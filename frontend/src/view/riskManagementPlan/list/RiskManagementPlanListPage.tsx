import React from 'react';
import { i18n } from 'src/i18n';
import RiskManagementPlanListFilter from 'src/view/riskManagementPlan/list/RiskManagementPlanListFilter';
import RiskManagementPlanListTable from 'src/view/riskManagementPlan/list/RiskManagementPlanListTable';
import RiskManagementPlanListToolbar from 'src/view/riskManagementPlan/list/RiskManagementPlanListToolbar';
import Breadcrumb from 'src/view/shared/Breadcrumb';

function RiskManagementPlanListPage(props) {
  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.riskManagementPlan.menu')],
        ]}
      />

      <div className="mt-4 p-6 bg-white dark:bg-gray-800 dark:border-gray-800 text-gray-900 dark:text-gray-200 border-gray-200 border rounded-md">
        <h1 className=" text-lg font-medium mb-6">
          {i18n('entities.riskManagementPlan.list.title')}
        </h1>
        <RiskManagementPlanListToolbar />
        <RiskManagementPlanListFilter />
        <RiskManagementPlanListTable />
      </div>
    </>
  );
}

export default RiskManagementPlanListPage;
