import React from 'react';
import { i18n } from 'src/i18n';
import RequirementDocumentationListFilter from 'src/view/requirementDocumentation/list/RequirementDocumentationListFilter';
import RequirementDocumentationListTable from 'src/view/requirementDocumentation/list/RequirementDocumentationListTable';
import RequirementDocumentationListToolbar from 'src/view/requirementDocumentation/list/RequirementDocumentationListToolbar';
import Breadcrumb from 'src/view/shared/Breadcrumb';

function RequirementDocumentationListPage(props) {
  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.requirementDocumentation.menu')],
        ]}
      />

      <div className="mt-4 p-6 bg-white dark:bg-gray-800 dark:border-gray-800 text-gray-900 dark:text-gray-200 border-gray-200 border rounded-md">
        <h1 className=" text-lg font-medium mb-6">
          {i18n('entities.requirementDocumentation.list.title')}
        </h1>
        <RequirementDocumentationListToolbar />
        <RequirementDocumentationListFilter />
        <RequirementDocumentationListTable />
      </div>
    </>
  );
}

export default RequirementDocumentationListPage;
