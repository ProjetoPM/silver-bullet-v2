import React from 'react';
import { i18n } from 'src/i18n';
import QualityManagementPlanListFilter from 'src/view/qualityManagementPlan/list/QualityManagementPlanListFilter';
import QualityManagementPlanListTable from 'src/view/qualityManagementPlan/list/QualityManagementPlanListTable';
import QualityManagementPlanListToolbar from 'src/view/qualityManagementPlan/list/QualityManagementPlanListToolbar';
import Breadcrumb from 'src/view/shared/Breadcrumb';

function QualityManagementPlanListPage(props) {
  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.qualityManagementPlan.menu')],
        ]}
      />

      <div className="mt-4 p-6 bg-white dark:bg-gray-800 dark:border-gray-800 text-gray-900 dark:text-gray-200 border-gray-200 border rounded-md">
        <h1 className=" text-lg font-medium mb-6">
          {i18n('entities.qualityManagementPlan.list.title')}
        </h1>
        <QualityManagementPlanListToolbar />
        <QualityManagementPlanListFilter />
        <QualityManagementPlanListTable />
      </div>
    </>
  );
}

export default QualityManagementPlanListPage;
