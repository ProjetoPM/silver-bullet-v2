import React from 'react';
import { i18n } from 'src/i18n';
import actions from 'src/modules/projectManagementPlan/importer/projectManagementPlanImporterActions';
import fields from 'src/modules/projectManagementPlan/importer/projectManagementPlanImporterFields';
import selectors from 'src/modules/projectManagementPlan/importer/projectManagementPlanImporterSelectors';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import importerHoc from 'src/view/shared/importer/Importer';

function ProjectManagementPlanImportPage() {
  const Importer = importerHoc(
    selectors,
    actions,
    fields,
    i18n('entities.projectManagementPlan.importer.hint'),
  );

  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.projectManagementPlan.menu'), '/project-management-plan'],
          [i18n('entities.projectManagementPlan.importer.title')],
        ]}
      />

      <div className="mt-4 p-6 bg-white dark:bg-gray-800 dark:border-gray-800 dark:text-white border-gray-200 border rounded-md">
        <h1 className="text-lg font-medium mb-6">
          {i18n('entities.projectManagementPlan.importer.title')}
        </h1>

        <Importer />
      </div>
    </>
  );
}

export default ProjectManagementPlanImportPage;
