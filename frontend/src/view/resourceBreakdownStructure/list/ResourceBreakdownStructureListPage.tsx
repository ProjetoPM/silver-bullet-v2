import React from 'react';
import { i18n } from 'src/i18n';
import ResourceBreakdownStructureListFilter from 'src/view/resourceBreakdownStructure/list/ResourceBreakdownStructureListFilter';
import ResourceBreakdownStructureListTable from 'src/view/resourceBreakdownStructure/list/ResourceBreakdownStructureListTable';
import ResourceBreakdownStructureListToolbar from 'src/view/resourceBreakdownStructure/list/ResourceBreakdownStructureListToolbar';
import Breadcrumb from 'src/view/shared/Breadcrumb';

function ResourceBreakdownStructureListPage(props) {
  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.resourceBreakdownStructure.menu')],
        ]}
      />

      <div className="mt-4 p-6 bg-white dark:bg-gray-800 dark:border-gray-800 text-gray-900 dark:text-gray-200 border-gray-200 border rounded-md">
        <h1 className=" text-lg font-medium mb-6">
          {i18n('entities.resourceBreakdownStructure.list.title')}
        </h1>
        <ResourceBreakdownStructureListToolbar />
        <ResourceBreakdownStructureListFilter />
        <ResourceBreakdownStructureListTable />
      </div>
    </>
  );
}

export default ResourceBreakdownStructureListPage;
