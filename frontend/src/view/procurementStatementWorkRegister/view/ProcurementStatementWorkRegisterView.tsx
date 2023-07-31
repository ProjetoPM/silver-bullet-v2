import React from 'react';
import { i18n } from 'src/i18n';
import Spinner from 'src/view/shared/Spinner';
import TextViewItem from 'src/view/shared/view/TextViewItem';

function ProcurementStatementWorkRegisterView(props) {
  const { record, loading } = props;

  if (loading || !record) {
    return <Spinner />;
  }

  return (
    <div>
      <TextViewItem
        label={i18n('entities.procurementStatementWorkRegister.fields.descriptionItemPurchased')}
        value={record.descriptionItemPurchased}
      />

      <TextViewItem
        label={i18n('entities.procurementStatementWorkRegister.fields.associatedContractTypes')}
        value={record.associatedContractTypes}
      />

      <TextViewItem
        label={i18n('entities.procurementStatementWorkRegister.fields.vendorSelectionCriteria')}
        value={record.vendorSelectionCriteria}
      />

      <TextViewItem
        label={i18n('entities.procurementStatementWorkRegister.fields.restrictions')}
        value={record.restrictions}
      />

      <TextViewItem
        label={i18n('entities.procurementStatementWorkRegister.fields.premises')}
        value={record.premises}
      />

      <TextViewItem
        label={i18n('entities.procurementStatementWorkRegister.fields.mainDeliveriesSchedule')}
        value={record.mainDeliveriesSchedule}
      />

      <TextViewItem
        label={i18n('entities.procurementStatementWorkRegister.fields.additionalInformation')}
        value={record.additionalInformation}
      />

      <TextViewItem
        label={i18n('entities.procurementStatementWorkRegister.fields.procurementManagement')}
        value={record.procurementManagement}
      />
    </div>
  );
}

export default ProcurementStatementWorkRegisterView;
