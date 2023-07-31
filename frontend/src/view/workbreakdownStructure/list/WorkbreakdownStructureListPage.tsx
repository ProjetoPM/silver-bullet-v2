import React from 'react';
import { i18n } from 'src/i18n';
import WorkbreakdownStructureListFilter from 'src/view/workbreakdownStructure/list/WorkbreakdownStructureListFilter';
import WorkbreakdownStructureListTable from 'src/view/workbreakdownStructure/list/WorkbreakdownStructureListTable';
import WorkbreakdownStructureListToolbar from 'src/view/workbreakdownStructure/list/WorkbreakdownStructureListToolbar';
import Breadcrumb from 'src/view/shared/Breadcrumb';

function WorkbreakdownStructureListPage(props) {
  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.workbreakdownStructure.menu')],
        ]}
      />

      <div className="mt-4 p-6 bg-white dark:bg-gray-800 dark:border-gray-800 text-gray-900 dark:text-gray-200 border-gray-200 border rounded-md">
        <h1 className=" text-lg font-medium mb-6">
          {i18n('entities.workbreakdownStructure.list.title')}
        </h1>
        <WorkbreakdownStructureListToolbar />
        <WorkbreakdownStructureListFilter />
        <WorkbreakdownStructureListTable />
      </div>
    </>
  );
}

export default WorkbreakdownStructureListPage;
