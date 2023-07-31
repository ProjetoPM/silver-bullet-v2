import React from 'react';
import { i18n } from 'src/i18n';
import actions from 'src/modules/costManagementPlan/importer/costManagementPlanImporterActions';
import fields from 'src/modules/costManagementPlan/importer/costManagementPlanImporterFields';
import selectors from 'src/modules/costManagementPlan/importer/costManagementPlanImporterSelectors';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import importerHoc from 'src/view/shared/importer/Importer';

function CostManagementPlanImportPage() {
  const Importer = importerHoc(
    selectors,
    actions,
    fields,
    i18n('entities.costManagementPlan.importer.hint'),
  );

  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.costManagementPlan.menu'), '/cost-management-plan'],
          [i18n('entities.costManagementPlan.importer.title')],
        ]}
      />

      <div className="mt-4 p-6 bg-white dark:bg-gray-800 dark:border-gray-800 dark:text-white border-gray-200 border rounded-md">
        <h1 className="text-lg font-medium mb-6">
          {i18n('entities.costManagementPlan.importer.title')}
        </h1>

        <Importer />
      </div>
    </>
  );
}

export default CostManagementPlanImportPage;
