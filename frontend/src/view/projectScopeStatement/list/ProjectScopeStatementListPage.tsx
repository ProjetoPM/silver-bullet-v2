import React from 'react';
import { i18n } from 'src/i18n';
import ProjectScopeStatementListFilter from 'src/view/projectScopeStatement/list/ProjectScopeStatementListFilter';
import ProjectScopeStatementListTable from 'src/view/projectScopeStatement/list/ProjectScopeStatementListTable';
import ProjectScopeStatementListToolbar from 'src/view/projectScopeStatement/list/ProjectScopeStatementListToolbar';
import Breadcrumb from 'src/view/shared/Breadcrumb';

function ProjectScopeStatementListPage(props) {
  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.projectScopeStatement.menu')],
        ]}
      />

      <div className="mt-4 p-6 bg-white dark:bg-gray-800 dark:border-gray-800 text-gray-900 dark:text-gray-200 border-gray-200 border rounded-md">
        <h1 className=" text-lg font-medium mb-6">
          {i18n('entities.projectScopeStatement.list.title')}
        </h1>
        <ProjectScopeStatementListToolbar />
        <ProjectScopeStatementListFilter />
        <ProjectScopeStatementListTable />
      </div>
    </>
  );
}

export default ProjectScopeStatementListPage;
