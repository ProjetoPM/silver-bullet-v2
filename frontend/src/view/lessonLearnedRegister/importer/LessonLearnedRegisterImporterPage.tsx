import React from 'react';
import { i18n } from 'src/i18n';
import actions from 'src/modules/lessonLearnedRegister/importer/lessonLearnedRegisterImporterActions';
import fields from 'src/modules/lessonLearnedRegister/importer/lessonLearnedRegisterImporterFields';
import selectors from 'src/modules/lessonLearnedRegister/importer/lessonLearnedRegisterImporterSelectors';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import importerHoc from 'src/view/shared/importer/Importer';

function LessonLearnedRegisterImportPage() {
  const Importer = importerHoc(
    selectors,
    actions,
    fields,
    i18n('entities.lessonLearnedRegister.importer.hint'),
  );

  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.lessonLearnedRegister.menu'), '/lesson-learned-register'],
          [i18n('entities.lessonLearnedRegister.importer.title')],
        ]}
      />

      <div className="mt-4 p-6 bg-white dark:bg-gray-800 dark:border-gray-800 dark:text-white border-gray-200 border rounded-md">
        <h1 className="text-lg font-medium mb-6">
          {i18n('entities.lessonLearnedRegister.importer.title')}
        </h1>

        <Importer />
      </div>
    </>
  );
}

export default LessonLearnedRegisterImportPage;
