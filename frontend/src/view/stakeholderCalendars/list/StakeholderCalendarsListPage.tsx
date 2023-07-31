import React from 'react';
import { i18n } from 'src/i18n';
import StakeholderCalendarsListFilter from 'src/view/stakeholderCalendars/list/StakeholderCalendarsListFilter';
import StakeholderCalendarsListTable from 'src/view/stakeholderCalendars/list/StakeholderCalendarsListTable';
import StakeholderCalendarsListToolbar from 'src/view/stakeholderCalendars/list/StakeholderCalendarsListToolbar';
import Breadcrumb from 'src/view/shared/Breadcrumb';

function StakeholderCalendarsListPage(props) {
  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.stakeholderCalendars.menu')],
        ]}
      />

      <div className="mt-4 p-6 bg-white dark:bg-gray-800 dark:border-gray-800 text-gray-900 dark:text-gray-200 border-gray-200 border rounded-md">
        <h1 className=" text-lg font-medium mb-6">
          {i18n('entities.stakeholderCalendars.list.title')}
        </h1>
        <StakeholderCalendarsListToolbar />
        <StakeholderCalendarsListFilter />
        <StakeholderCalendarsListTable />
      </div>
    </>
  );
}

export default StakeholderCalendarsListPage;
