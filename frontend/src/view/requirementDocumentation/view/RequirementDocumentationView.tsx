import React from 'react';
import { i18n } from 'src/i18n';
import Spinner from 'src/view/shared/Spinner';
import TextViewItem from 'src/view/shared/view/TextViewItem';

function RequirementDocumentationView(props) {
  const { record, loading } = props;

  if (loading || !record) {
    return <Spinner />;
  }

  return (
    <div>
      <TextViewItem
        label={i18n('entities.requirementDocumentation.fields.associatedID')}
        value={record.associatedID}
      />

      <TextViewItem
        label={i18n('entities.requirementDocumentation.fields.businessNeeds')}
        value={record.businessNeeds}
      />

      <TextViewItem
        label={i18n('entities.requirementDocumentation.fields.requirementDescription')}
        value={record.requirementDescription}
      />

      <TextViewItem
        label={i18n('entities.requirementDocumentation.fields.version')}
        value={record.version}
      />

      <TextViewItem
        label={i18n('entities.requirementDocumentation.fields.phase')}
        value={record.phase}
      />

      <TextViewItem
        label={i18n('entities.requirementDocumentation.fields.associatedDelivery')}
        value={record.associatedDelivery}
      />

      <TextViewItem
        label={i18n('entities.requirementDocumentation.fields.type')}
        value={record.type}
      />

      <TextViewItem
        label={i18n('entities.requirementDocumentation.fields.requester')}
        value={record.requester}
      />

      <TextViewItem
        label={i18n('entities.requirementDocumentation.fields.complexity')}
        value={record.complexity}
      />

      <TextViewItem
        label={i18n('entities.requirementDocumentation.fields.responsible')}
        value={record.responsible}
      />

      <TextViewItem
        label={i18n('entities.requirementDocumentation.fields.validity')}
        value={record.validity}
      />

      <TextViewItem
        label={i18n('entities.requirementDocumentation.fields.priority')}
        value={record.priority}
      />

      <TextViewItem
        label={i18n('entities.requirementDocumentation.fields.acceptanceCriteria')}
        value={record.acceptanceCriteria}
      />

      <TextViewItem
        label={i18n('entities.requirementDocumentation.fields.supportingDocumentation')}
        value={record.supportingDocumentation}
      />

      <TextViewItem
        label={i18n('entities.requirementDocumentation.fields.requirementSituation')}
        value={record.requirementSituation}
      />
    </div>
  );
}

export default RequirementDocumentationView;
