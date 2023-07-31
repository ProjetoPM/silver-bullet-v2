import React from 'react';
import { i18n } from 'src/i18n';
import QualityChecklistListFilter from 'src/view/qualityChecklist/list/QualityChecklistListFilter';
import QualityChecklistListTable from 'src/view/qualityChecklist/list/QualityChecklistListTable';
import QualityChecklistListToolbar from 'src/view/qualityChecklist/list/QualityChecklistListToolbar';
import Breadcrumb from 'src/view/shared/Breadcrumb';

function QualityChecklistListPage(props) {
  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.qualityChecklist.menu')],
        ]}
      />

      <div className="mt-4 p-6 bg-white dark:bg-gray-800 dark:border-gray-800 text-gray-900 dark:text-gray-200 border-gray-200 border rounded-md">
        <h1 className=" text-lg font-medium mb-6">
          {i18n('entities.qualityChecklist.list.title')}
        </h1>
        <QualityChecklistListToolbar />
        <QualityChecklistListFilter />
        <QualityChecklistListTable />
      </div>
    </>
  );
}

export default QualityChecklistListPage;
