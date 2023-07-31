import React from 'react';
import { i18n } from 'src/i18n';
import actions from 'src/modules/qualityManagementPlan/importer/qualityManagementPlanImporterActions';
import fields from 'src/modules/qualityManagementPlan/importer/qualityManagementPlanImporterFields';
import selectors from 'src/modules/qualityManagementPlan/importer/qualityManagementPlanImporterSelectors';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import importerHoc from 'src/view/shared/importer/Importer';

function QualityManagementPlanImportPage() {
  const Importer = importerHoc(
    selectors,
    actions,
    fields,
    i18n('entities.qualityManagementPlan.importer.hint'),
  );

  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.qualityManagementPlan.menu'), '/quality-management-plan'],
          [i18n('entities.qualityManagementPlan.importer.title')],
        ]}
      />

      <div className="mt-4 p-6 bg-white dark:bg-gray-800 dark:border-gray-800 dark:text-white border-gray-200 border rounded-md">
        <h1 className="text-lg font-medium mb-6">
          {i18n('entities.qualityManagementPlan.importer.title')}
        </h1>

        <Importer />
      </div>
    </>
  );
}

export default QualityManagementPlanImportPage;
