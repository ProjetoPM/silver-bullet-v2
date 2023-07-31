import React from 'react';
import { i18n } from 'src/i18n';
import actions from 'src/modules/costEstimates/importer/costEstimatesImporterActions';
import fields from 'src/modules/costEstimates/importer/costEstimatesImporterFields';
import selectors from 'src/modules/costEstimates/importer/costEstimatesImporterSelectors';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import importerHoc from 'src/view/shared/importer/Importer';

function CostEstimatesImportPage() {
  const Importer = importerHoc(
    selectors,
    actions,
    fields,
    i18n('entities.costEstimates.importer.hint'),
  );

  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.costEstimates.menu'), '/cost-estimates'],
          [i18n('entities.costEstimates.importer.title')],
        ]}
      />

      <div className="mt-4 p-6 bg-white dark:bg-gray-800 dark:border-gray-800 dark:text-white border-gray-200 border rounded-md">
        <h1 className="text-lg font-medium mb-6">
          {i18n('entities.costEstimates.importer.title')}
        </h1>

        <Importer />
      </div>
    </>
  );
}

export default CostEstimatesImportPage;
