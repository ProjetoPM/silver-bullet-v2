import React from 'react';
import { i18n } from 'src/i18n';
import BenefitsManagementPlanListFilter from 'src/view/benefitsManagementPlan/list/BenefitsManagementPlanListFilter';
import BenefitsManagementPlanListTable from 'src/view/benefitsManagementPlan/list/BenefitsManagementPlanListTable';
import BenefitsManagementPlanListToolbar from 'src/view/benefitsManagementPlan/list/BenefitsManagementPlanListToolbar';
import Breadcrumb from 'src/view/shared/Breadcrumb';

function BenefitsManagementPlanListPage(props) {
  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.benefitsManagementPlan.menu')],
        ]}
      />

      <div className="mt-4 p-6 bg-white dark:bg-gray-800 dark:border-gray-800 text-gray-900 dark:text-gray-200 border-gray-200 border rounded-md">
        <h1 className=" text-lg font-medium mb-6">
          {i18n('entities.benefitsManagementPlan.list.title')}
        </h1>
        <BenefitsManagementPlanListToolbar />
        <BenefitsManagementPlanListFilter />
        <BenefitsManagementPlanListTable />
      </div>
    </>
  );
}

export default BenefitsManagementPlanListPage;
