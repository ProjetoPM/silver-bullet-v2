import React from 'react';
import { i18n } from 'src/i18n';
import actions from 'src/modules/projectClosure/importer/projectClosureImporterActions';
import fields from 'src/modules/projectClosure/importer/projectClosureImporterFields';
import selectors from 'src/modules/projectClosure/importer/projectClosureImporterSelectors';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import importerHoc from 'src/view/shared/importer/Importer';

function ProjectClosureImportPage() {
  const Importer = importerHoc(
    selectors,
    actions,
    fields,
    i18n('entities.projectClosure.importer.hint'),
  );

  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.projectClosure.menu'), '/project-closure'],
          [i18n('entities.projectClosure.importer.title')],
        ]}
      />

      <div className="mt-4 p-6 bg-white dark:bg-gray-800 dark:border-gray-800 dark:text-white border-gray-200 border rounded-md">
        <h1 className="text-lg font-medium mb-6">
          {i18n('entities.projectClosure.importer.title')}
        </h1>

        <Importer />
      </div>
    </>
  );
}

export default ProjectClosureImportPage;
