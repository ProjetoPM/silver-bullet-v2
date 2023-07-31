import React from 'react';
import { i18n } from 'src/i18n';
import ActivityListListFilter from 'src/view/activityList/list/ActivityListListFilter';
import ActivityListListTable from 'src/view/activityList/list/ActivityListListTable';
import ActivityListListToolbar from 'src/view/activityList/list/ActivityListListToolbar';
import Breadcrumb from 'src/view/shared/Breadcrumb';

function ActivityListListPage(props) {
  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.activityList.menu')],
        ]}
      />

      <div className="mt-4 p-6 bg-white dark:bg-gray-800 dark:border-gray-800 text-gray-900 dark:text-gray-200 border-gray-200 border rounded-md">
        <h1 className=" text-lg font-medium mb-6">
          {i18n('entities.activityList.list.title')}
        </h1>
        <ActivityListListToolbar />
        <ActivityListListFilter />
        <ActivityListListTable />
      </div>
    </>
  );
}

export default ActivityListListPage;
