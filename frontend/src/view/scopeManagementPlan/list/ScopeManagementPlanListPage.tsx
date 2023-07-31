import React from 'react';
import { i18n } from 'src/i18n';
import ScopeManagementPlanListFilter from 'src/view/scopeManagementPlan/list/ScopeManagementPlanListFilter';
import ScopeManagementPlanListTable from 'src/view/scopeManagementPlan/list/ScopeManagementPlanListTable';
import ScopeManagementPlanListToolbar from 'src/view/scopeManagementPlan/list/ScopeManagementPlanListToolbar';
import Breadcrumb from 'src/view/shared/Breadcrumb';

function ScopeManagementPlanListPage(props) {
  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.scopeManagementPlan.menu')],
        ]}
      />

      <div className="mt-4 p-6 bg-white dark:bg-gray-800 dark:border-gray-800 text-gray-900 dark:text-gray-200 border-gray-200 border rounded-md">
        <h1 className=" text-lg font-medium mb-6">
          {i18n('entities.scopeManagementPlan.list.title')}
        </h1>
        <ScopeManagementPlanListToolbar />
        <ScopeManagementPlanListFilter />
        <ScopeManagementPlanListTable />
      </div>
    </>
  );
}

export default ScopeManagementPlanListPage;
