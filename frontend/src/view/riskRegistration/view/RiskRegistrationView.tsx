import React from 'react';
import { i18n } from 'src/i18n';
import Spinner from 'src/view/shared/Spinner';
import TextViewItem from 'src/view/shared/view/TextViewItem';

function RiskRegistrationView(props) {
  const { record, loading } = props;

  if (loading || !record) {
    return <Spinner />;
  }

  return (
    <div>
      <TextViewItem
        label={i18n('entities.riskRegistration.fields.impactedObjective')}
        value={record.impactedObjective}
      />

      <TextViewItem
        label={i18n('entities.riskRegistration.fields.priority')}
        value={
          record.priority &&
          i18n(
            `entities.riskRegistration.enumerators.priority.${record.priority}`,
          )
        }
      />

      <TextViewItem
        label={i18n('entities.riskRegistration.fields.currentRiskStatus')}
        value={record.currentRiskStatus}
      />

      <TextViewItem
        label={i18n('entities.riskRegistration.fields.event')}
        value={record.event}
      />

      <TextViewItem
        label={i18n('entities.riskRegistration.fields.identificationDate')}
        value={record.identificationDate}
      />

      <TextViewItem
        label={i18n('entities.riskRegistration.fields.identifier')}
        value={record.identifier}
      />

      <TextViewItem
        label={i18n('entities.riskRegistration.fields.riskType')}
        value={record.riskType}
      />

      <TextViewItem
        label={i18n('entities.riskRegistration.fields.lessonsLearned')}
        value={record.lessonsLearned}
      />

      <TextViewItem
        label={i18n('entities.riskRegistration.fields.riskCategory')}
        value={record.riskCategory}
      />

      <TextViewItem
        label={i18n('entities.riskRegistration.fields.fallbackPlans')}
        value={record.fallbackPlans}
      />

      <TextViewItem
        label={i18n('entities.riskRegistration.fields.contingencyPlansOwners')}
        value={record.contingencyPlansOwners}
      />

      <TextViewItem
        label={i18n('entities.riskRegistration.fields.contingencyPlans')}
        value={record.contingencyPlans}
      />

      <TextViewItem
        label={i18n('entities.riskRegistration.fields.secondaryRisks')}
        value={record.secondaryRisks}
      />

      <TextViewItem
        label={i18n('entities.riskRegistration.fields.residualRisks')}
        value={record.residualRisks}
      />

      <TextViewItem
        label={i18n('entities.riskRegistration.fields.timingInformation')}
        value={record.timingInformation}
      />

      <TextViewItem
        label={i18n('entities.riskRegistration.fields.potentialRiskOwners')}
        value={record.potentialRiskOwners}
      />

      <TextViewItem
        label={i18n('entities.riskRegistration.fields.listPotentialRiskResponses')}
        value={record.listPotentialRiskResponses}
      />

      <TextViewItem
        label={i18n('entities.riskRegistration.fields.riskTriggers')}
        value={record.riskTriggers}
      />

      <TextViewItem
        label={i18n('entities.riskRegistration.fields.oneOrMoreCauses')}
        value={record.oneOrMoreCauses}
      />

      <TextViewItem
        label={i18n('entities.riskRegistration.fields.riskStrategy')}
        value={record.riskStrategy}
      />

      <TextViewItem
        label={i18n('entities.riskRegistration.fields.oneMoreEffectsObjectives')}
        value={record.oneMoreEffectsObjectives}
      />

      <TextViewItem
        label={i18n('entities.riskRegistration.fields.riskScore')}
        value={record.riskScore}
      />

      <TextViewItem
        label={i18n('entities.riskRegistration.fields.impact')}
        value={record.impact}
      />

      <TextViewItem
        label={i18n('entities.riskRegistration.fields.probability')}
        value={record.probability}
      />
    </div>
  );
}

export default RiskRegistrationView;
