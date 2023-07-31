import React from 'react';
import { i18n } from 'src/i18n';
import ResourceRequirementsListFilter from 'src/view/resourceRequirements/list/ResourceRequirementsListFilter';
import ResourceRequirementsListTable from 'src/view/resourceRequirements/list/ResourceRequirementsListTable';
import ResourceRequirementsListToolbar from 'src/view/resourceRequirements/list/ResourceRequirementsListToolbar';
import Breadcrumb from 'src/view/shared/Breadcrumb';

function ResourceRequirementsListPage(props) {
  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.resourceRequirements.menu')],
        ]}
      />

      <div className="mt-4 p-6 bg-white dark:bg-gray-800 dark:border-gray-800 text-gray-900 dark:text-gray-200 border-gray-200 border rounded-md">
        <h1 className=" text-lg font-medium mb-6">
          {i18n('entities.resourceRequirements.list.title')}
        </h1>
        <ResourceRequirementsListToolbar />
        <ResourceRequirementsListFilter />
        <ResourceRequirementsListTable />
      </div>
    </>
  );
}

export default ResourceRequirementsListPage;
