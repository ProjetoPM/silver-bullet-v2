import React from 'react';
import { i18n } from 'src/i18n';
import ChangeRequestListFilter from 'src/view/changeRequest/list/ChangeRequestListFilter';
import ChangeRequestListTable from 'src/view/changeRequest/list/ChangeRequestListTable';
import ChangeRequestListToolbar from 'src/view/changeRequest/list/ChangeRequestListToolbar';
import Breadcrumb from 'src/view/shared/Breadcrumb';

function ChangeRequestListPage(props) {
  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.changeRequest.menu')],
        ]}
      />

      <div className="mt-4 p-6 bg-white dark:bg-gray-800 dark:border-gray-800 text-gray-900 dark:text-gray-200 border-gray-200 border rounded-md">
        <h1 className=" text-lg font-medium mb-6">
          {i18n('entities.changeRequest.list.title')}
        </h1>
        <ChangeRequestListToolbar />
        <ChangeRequestListFilter />
        <ChangeRequestListTable />
      </div>
    </>
  );
}

export default ChangeRequestListPage;
