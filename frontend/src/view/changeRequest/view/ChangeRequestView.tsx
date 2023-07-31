import React from 'react';
import { i18n } from 'src/i18n';
import Spinner from 'src/view/shared/Spinner';
import TextViewItem from 'src/view/shared/view/TextViewItem';

function ChangeRequestView(props) {
  const { record, loading } = props;

  if (loading || !record) {
    return <Spinner />;
  }

  return (
    <div>
      <TextViewItem
        label={i18n('entities.changeRequest.fields.requester')}
        value={record.requester}
      />

      <TextViewItem
        label={i18n('entities.changeRequest.fields.requestIdentificationNumber')}
        value={record.requestIdentificationNumber}
      />

      <TextViewItem
        label={i18n('entities.changeRequest.fields.typeChange')}
        value={
          record.typeChange &&
          i18n(
            `entities.changeRequest.enumerators.typeChange.${record.typeChange}`,
          )
        }
      />

      <TextViewItem
        label={i18n('entities.changeRequest.fields.statusSituation')}
        value={
          record.statusSituation &&
          i18n(
            `entities.changeRequest.enumerators.statusSituation.${record.statusSituation}`,
          )
        }
      />

      <TextViewItem
        label={i18n('entities.changeRequest.fields.requestDate')}
        value={record.requestDate}
      />

      <TextViewItem
        label={i18n('entities.changeRequest.fields.dateCCB')}
        value={record.dateCCB}
      />

      <TextViewItem
        label={i18n('entities.changeRequest.fields.descriptionChange')}
        value={record.descriptionChange}
      />

      <TextViewItem
        label={i18n('entities.changeRequest.fields.impactedKnowledgeAreas')}
        value={record.impactedKnowledgeAreas}
      />

      <TextViewItem
        label={i18n('entities.changeRequest.fields.impactedDeliveriesDocuments')}
        value={record.impactedDeliveriesDocuments}
      />

      <TextViewItem
        label={i18n('entities.changeRequest.fields.justification')}
        value={record.justification}
      />

      <TextViewItem
        label={i18n('entities.changeRequest.fields.additionalComments')}
        value={record.additionalComments}
      />

      <TextViewItem
        label={i18n('entities.changeRequest.fields.opinionCCB')}
        value={record.opinionCCB}
      />

      <TextViewItem
        label={i18n('entities.changeRequest.fields.opinionProjectManager')}
        value={record.opinionProjectManager}
      />
    </div>
  );
}

export default ChangeRequestView;
