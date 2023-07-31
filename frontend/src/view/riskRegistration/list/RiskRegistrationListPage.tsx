import React from 'react';
import { i18n } from 'src/i18n';
import RiskRegistrationListFilter from 'src/view/riskRegistration/list/RiskRegistrationListFilter';
import RiskRegistrationListTable from 'src/view/riskRegistration/list/RiskRegistrationListTable';
import RiskRegistrationListToolbar from 'src/view/riskRegistration/list/RiskRegistrationListToolbar';
import Breadcrumb from 'src/view/shared/Breadcrumb';

function RiskRegistrationListPage(props) {
  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.riskRegistration.menu')],
        ]}
      />

      <div className="mt-4 p-6 bg-white dark:bg-gray-800 dark:border-gray-800 text-gray-900 dark:text-gray-200 border-gray-200 border rounded-md">
        <h1 className=" text-lg font-medium mb-6">
          {i18n('entities.riskRegistration.list.title')}
        </h1>
        <RiskRegistrationListToolbar />
        <RiskRegistrationListFilter />
        <RiskRegistrationListTable />
      </div>
    </>
  );
}

export default RiskRegistrationListPage;
