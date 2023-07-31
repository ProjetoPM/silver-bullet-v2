import React from 'react';
import { i18n } from 'src/i18n';
import LessonLearnedRegisterListFilter from 'src/view/lessonLearnedRegister/list/LessonLearnedRegisterListFilter';
import LessonLearnedRegisterListTable from 'src/view/lessonLearnedRegister/list/LessonLearnedRegisterListTable';
import LessonLearnedRegisterListToolbar from 'src/view/lessonLearnedRegister/list/LessonLearnedRegisterListToolbar';
import Breadcrumb from 'src/view/shared/Breadcrumb';

function LessonLearnedRegisterListPage(props) {
  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.lessonLearnedRegister.menu')],
        ]}
      />

      <div className="mt-4 p-6 bg-white dark:bg-gray-800 dark:border-gray-800 text-gray-900 dark:text-gray-200 border-gray-200 border rounded-md">
        <h1 className=" text-lg font-medium mb-6">
          {i18n('entities.lessonLearnedRegister.list.title')}
        </h1>
        <LessonLearnedRegisterListToolbar />
        <LessonLearnedRegisterListFilter />
        <LessonLearnedRegisterListTable />
      </div>
    </>
  );
}

export default LessonLearnedRegisterListPage;
