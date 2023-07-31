import React from 'react';
import { i18n } from 'src/i18n';
import ProcurementStatementWorkRegisterListFilter from 'src/view/procurementStatementWorkRegister/list/ProcurementStatementWorkRegisterListFilter';
import ProcurementStatementWorkRegisterListTable from 'src/view/procurementStatementWorkRegister/list/ProcurementStatementWorkRegisterListTable';
import ProcurementStatementWorkRegisterListToolbar from 'src/view/procurementStatementWorkRegister/list/ProcurementStatementWorkRegisterListToolbar';
import Breadcrumb from 'src/view/shared/Breadcrumb';

function ProcurementStatementWorkRegisterListPage(props) {
  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.procurementStatementWorkRegister.menu')],
        ]}
      />

      <div className="mt-4 p-6 bg-white dark:bg-gray-800 dark:border-gray-800 text-gray-900 dark:text-gray-200 border-gray-200 border rounded-md">
        <h1 className=" text-lg font-medium mb-6">
          {i18n('entities.procurementStatementWorkRegister.list.title')}
        </h1>
        <ProcurementStatementWorkRegisterListToolbar />
        <ProcurementStatementWorkRegisterListFilter />
        <ProcurementStatementWorkRegisterListTable />
      </div>
    </>
  );
}

export default ProcurementStatementWorkRegisterListPage;
