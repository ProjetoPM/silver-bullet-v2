import { i18n } from 'src/i18n';
import exporterRenders from 'src/modules/shared/exporter/exporterRenders';

export default [
  {
    name: 'id',
    label: i18n('entities.riskRegistration.fields.id'),
  },
  {
    name: 'impactedObjective',
    label: i18n('entities.riskRegistration.fields.impactedObjective'),
  },
  {
    name: 'priority',
    label: i18n('entities.riskRegistration.fields.priority'),
  },
  {
    name: 'currentRiskStatus',
    label: i18n('entities.riskRegistration.fields.currentRiskStatus'),
  },
  {
    name: 'event',
    label: i18n('entities.riskRegistration.fields.event'),
  },
  {
    name: 'identificationDate',
    label: i18n('entities.riskRegistration.fields.identificationDate'),
  },
  {
    name: 'identifier',
    label: i18n('entities.riskRegistration.fields.identifier'),
  },
  {
    name: 'riskType',
    label: i18n('entities.riskRegistration.fields.riskType'),
  },
  {
    name: 'lessonsLearned',
    label: i18n('entities.riskRegistration.fields.lessonsLearned'),
  },
  {
    name: 'riskCategory',
    label: i18n('entities.riskRegistration.fields.riskCategory'),
  },
  {
    name: 'fallbackPlans',
    label: i18n('entities.riskRegistration.fields.fallbackPlans'),
  },
  {
    name: 'contingencyPlansOwners',
    label: i18n('entities.riskRegistration.fields.contingencyPlansOwners'),
  },
  {
    name: 'contingencyPlans',
    label: i18n('entities.riskRegistration.fields.contingencyPlans'),
  },
  {
    name: 'secondaryRisks',
    label: i18n('entities.riskRegistration.fields.secondaryRisks'),
  },
  {
    name: 'residualRisks',
    label: i18n('entities.riskRegistration.fields.residualRisks'),
  },
  {
    name: 'timingInformation',
    label: i18n('entities.riskRegistration.fields.timingInformation'),
  },
  {
    name: 'potentialRiskOwners',
    label: i18n('entities.riskRegistration.fields.potentialRiskOwners'),
  },
  {
    name: 'listPotentialRiskResponses',
    label: i18n('entities.riskRegistration.fields.listPotentialRiskResponses'),
  },
  {
    name: 'riskTriggers',
    label: i18n('entities.riskRegistration.fields.riskTriggers'),
  },
  {
    name: 'oneOrMoreCauses',
    label: i18n('entities.riskRegistration.fields.oneOrMoreCauses'),
  },
  {
    name: 'riskStrategy',
    label: i18n('entities.riskRegistration.fields.riskStrategy'),
  },
  {
    name: 'oneMoreEffectsObjectives',
    label: i18n('entities.riskRegistration.fields.oneMoreEffectsObjectives'),
  },
  {
    name: 'riskScore',
    label: i18n('entities.riskRegistration.fields.riskScore'),
  },
  {
    name: 'impact',
    label: i18n('entities.riskRegistration.fields.impact'),
  },
  {
    name: 'probability',
    label: i18n('entities.riskRegistration.fields.probability'),
  },
  {
    name: 'createdAt',
    label: i18n('entities.riskRegistration.fields.createdAt'),
    render: exporterRenders.datetime(),
  },
  {
    name: 'updatedAt',
    label: i18n('entities.riskRegistration.fields.updatedAt'),
    render: exporterRenders.datetime(),
  },
];
