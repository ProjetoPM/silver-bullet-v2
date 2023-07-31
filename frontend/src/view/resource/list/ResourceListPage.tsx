import React from 'react';
import { i18n } from 'src/i18n';
import ResourceListFilter from 'src/view/resource/list/ResourceListFilter';
import ResourceListTable from 'src/view/resource/list/ResourceListTable';
import ResourceListToolbar from 'src/view/resource/list/ResourceListToolbar';
import Breadcrumb from 'src/view/shared/Breadcrumb';

function ResourceListPage(props) {
  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.resource.menu')],
        ]}
      />

      <div className="mt-4 p-6 bg-white dark:bg-gray-800 dark:border-gray-800 text-gray-900 dark:text-gray-200 border-gray-200 border rounded-md">
        <h1 className=" text-lg font-medium mb-6">
          {i18n('entities.resource.list.title')}
        </h1>
        <ResourceListToolbar />
        <ResourceListFilter />
        <ResourceListTable />
      </div>
    </>
  );
}

export default ResourceListPage;
