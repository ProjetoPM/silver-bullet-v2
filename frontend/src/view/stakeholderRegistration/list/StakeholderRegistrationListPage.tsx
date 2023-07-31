import React from 'react';
import { i18n } from 'src/i18n';
import StakeholderRegistrationListFilter from 'src/view/stakeholderRegistration/list/StakeholderRegistrationListFilter';
import StakeholderRegistrationListTable from 'src/view/stakeholderRegistration/list/StakeholderRegistrationListTable';
import StakeholderRegistrationListToolbar from 'src/view/stakeholderRegistration/list/StakeholderRegistrationListToolbar';
import Breadcrumb from 'src/view/shared/Breadcrumb';

function StakeholderRegistrationListPage(props) {
  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.stakeholderRegistration.menu')],
        ]}
      />

      <div className="mt-4 p-6 bg-white dark:bg-gray-800 dark:border-gray-800 text-gray-900 dark:text-gray-200 border-gray-200 border rounded-md">
        <h1 className=" text-lg font-medium mb-6">
          {i18n('entities.stakeholderRegistration.list.title')}
        </h1>
        <StakeholderRegistrationListToolbar />
        <StakeholderRegistrationListFilter />
        <StakeholderRegistrationListTable />
      </div>
    </>
  );
}

export default StakeholderRegistrationListPage;
