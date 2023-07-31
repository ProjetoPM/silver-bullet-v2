import React from 'react';
import { i18n } from 'src/i18n';
import ScheduleManagementPlanListFilter from 'src/view/scheduleManagementPlan/list/ScheduleManagementPlanListFilter';
import ScheduleManagementPlanListTable from 'src/view/scheduleManagementPlan/list/ScheduleManagementPlanListTable';
import ScheduleManagementPlanListToolbar from 'src/view/scheduleManagementPlan/list/ScheduleManagementPlanListToolbar';
import Breadcrumb from 'src/view/shared/Breadcrumb';

function ScheduleManagementPlanListPage(props) {
  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.scheduleManagementPlan.menu')],
        ]}
      />

      <div className="mt-4 p-6 bg-white dark:bg-gray-800 dark:border-gray-800 text-gray-900 dark:text-gray-200 border-gray-200 border rounded-md">
        <h1 className=" text-lg font-medium mb-6">
          {i18n('entities.scheduleManagementPlan.list.title')}
        </h1>
        <ScheduleManagementPlanListToolbar />
        <ScheduleManagementPlanListFilter />
        <ScheduleManagementPlanListTable />
      </div>
    </>
  );
}

export default ScheduleManagementPlanListPage;
