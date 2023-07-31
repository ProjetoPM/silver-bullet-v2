import React from 'react';
import { i18n } from 'src/i18n';
import Spinner from 'src/view/shared/Spinner';
import TextViewItem from 'src/view/shared/view/TextViewItem';

function ClosedProcurementDocumentationView(props) {
  const { record, loading } = props;

  if (loading || !record) {
    return <Spinner />;
  }

  return (
    <div>
      <TextViewItem
        label={i18n('entities.closedProcurementDocumentation.fields.providername')}
        value={record.providername}
      />

      <TextViewItem
        label={i18n('entities.closedProcurementDocumentation.fields.mainDeliveriesProject')}
        value={record.mainDeliveriesProject}
      />

      <TextViewItem
        label={i18n('entities.closedProcurementDocumentation.fields.validatorComments')}
        value={record.validatorComments}
      />

      <TextViewItem
        label={i18n('entities.closedProcurementDocumentation.fields.supplierRepresentative')}
        value={record.supplierRepresentative}
      />

      <TextViewItem
        label={i18n('entities.closedProcurementDocumentation.fields.closingDate')}
        value={record.closingDate}
      />
    </div>
  );
}

export default ClosedProcurementDocumentationView;
