import React from 'react';
import { i18n } from 'src/i18n';
import Spinner from 'src/view/shared/Spinner';
import TextViewItem from 'src/view/shared/view/TextViewItem';

function StakeholderRegistrationView(props) {
  const { record, loading } = props;

  if (loading || !record) {
    return <Spinner />;
  }

  return (
    <div>
      <TextViewItem
        label={i18n('entities.stakeholderRegistration.fields.nome')}
        value={record.nome}
      />

      <TextViewItem
        label={i18n('entities.stakeholderRegistration.fields.tipo')}
        value={
          record.tipo &&
          i18n(
            `entities.stakeholderRegistration.enumerators.tipo.${record.tipo}`,
          )
        }
      />

      <TextViewItem
        label={i18n('entities.stakeholderRegistration.fields.mainRoleintheProject')}
        value={
          record.mainRoleintheProject &&
          i18n(
            `entities.stakeholderRegistration.enumerators.mainRoleintheProject.${record.mainRoleintheProject}`,
          )
        }
      />

      <TextViewItem
        label={i18n('entities.stakeholderRegistration.fields.organization')}
        value={record.organization}
      />

      <TextViewItem
        label={i18n('entities.stakeholderRegistration.fields.positioninOrganization')}
        value={record.positioninOrganization}
      />

      <TextViewItem
        label={i18n('entities.stakeholderRegistration.fields.email')}
        value={record.email}
      />

      <TextViewItem
        label={i18n('entities.stakeholderRegistration.fields.mainProjectResponsibility')}
        value={record.mainProjectResponsibility}
      />

      <TextViewItem
        label={i18n('entities.stakeholderRegistration.fields.phone')}
        value={record.phone}
      />

      <TextViewItem
        label={i18n('entities.stakeholderRegistration.fields.workplace')}
        value={record.workplace}
      />

      <TextViewItem
        label={i18n('entities.stakeholderRegistration.fields.essentialRequirements')}
        value={record.essentialRequirements}
      />

      <TextViewItem
        label={i18n('entities.stakeholderRegistration.fields.mainExpectations')}
        value={record.mainExpectations}
      />

      <TextViewItem
        label={i18n('entities.stakeholderRegistration.fields.phaseofGreaterInterest')}
        value={record.phaseofGreaterInterest}
      />

      <TextViewItem
        label={i18n('entities.stakeholderRegistration.fields.observations')}
        value={record.observations}
      />
    </div>
  );
}

export default StakeholderRegistrationView;
