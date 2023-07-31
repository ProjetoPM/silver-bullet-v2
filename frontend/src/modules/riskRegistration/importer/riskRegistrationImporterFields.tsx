import schemas from 'src/modules/shared/yup/yupImporterSchemas';
import { i18n } from 'src/i18n';import riskRegistrationEnumerators from 'src/modules/riskRegistration/riskRegistrationEnumerators';
import moment from 'moment';

export default [
  {
    name: 'impactedObjective',
    label: i18n('entities.riskRegistration.fields.impactedObjective'),
    schema: schemas.string(
      i18n('entities.riskRegistration.fields.impactedObjective'),
      {},
    ),
  },
  {
    name: 'priority',
    label: i18n('entities.riskRegistration.fields.priority'),
    schema: schemas.enumerator(
      i18n('entities.riskRegistration.fields.priority'),
      {
        "options": riskRegistrationEnumerators.priority
      },
    ),
  },
  {
    name: 'currentRiskStatus',
    label: i18n('entities.riskRegistration.fields.currentRiskStatus'),
    schema: schemas.string(
      i18n('entities.riskRegistration.fields.currentRiskStatus'),
      {},
    ),
  },
  {
    name: 'event',
    label: i18n('entities.riskRegistration.fields.event'),
    schema: schemas.string(
      i18n('entities.riskRegistration.fields.event'),
      {},
    ),
  },
  {
    name: 'identificationDate',
    label: i18n('entities.riskRegistration.fields.identificationDate'),
    schema: schemas.date(
      i18n('entities.riskRegistration.fields.identificationDate'),
      {},
    ),
   render: (value) => value && value instanceof Date ? moment(value).format('YYYY-MM-DD') : value,
  },
  {
    name: 'identifier',
    label: i18n('entities.riskRegistration.fields.identifier'),
    schema: schemas.string(
      i18n('entities.riskRegistration.fields.identifier'),
      {},
    ),
  },
  {
    name: 'riskType',
    label: i18n('entities.riskRegistration.fields.riskType'),
    schema: schemas.string(
      i18n('entities.riskRegistration.fields.riskType'),
      {},
    ),
  },
  {
    name: 'lessonsLearned',
    label: i18n('entities.riskRegistration.fields.lessonsLearned'),
    schema: schemas.string(
      i18n('entities.riskRegistration.fields.lessonsLearned'),
      {},
    ),
  },
  {
    name: 'riskCategory',
    label: i18n('entities.riskRegistration.fields.riskCategory'),
    schema: schemas.string(
      i18n('entities.riskRegistration.fields.riskCategory'),
      {},
    ),
  },
  {
    name: 'fallbackPlans',
    label: i18n('entities.riskRegistration.fields.fallbackPlans'),
    schema: schemas.string(
      i18n('entities.riskRegistration.fields.fallbackPlans'),
      {},
    ),
  },
  {
    name: 'contingencyPlansOwners',
    label: i18n('entities.riskRegistration.fields.contingencyPlansOwners'),
    schema: schemas.string(
      i18n('entities.riskRegistration.fields.contingencyPlansOwners'),
      {},
    ),
  },
  {
    name: 'contingencyPlans',
    label: i18n('entities.riskRegistration.fields.contingencyPlans'),
    schema: schemas.string(
      i18n('entities.riskRegistration.fields.contingencyPlans'),
      {},
    ),
  },
  {
    name: 'secondaryRisks',
    label: i18n('entities.riskRegistration.fields.secondaryRisks'),
    schema: schemas.string(
      i18n('entities.riskRegistration.fields.secondaryRisks'),
      {},
    ),
  },
  {
    name: 'residualRisks',
    label: i18n('entities.riskRegistration.fields.residualRisks'),
    schema: schemas.string(
      i18n('entities.riskRegistration.fields.residualRisks'),
      {},
    ),
  },
  {
    name: 'timingInformation',
    label: i18n('entities.riskRegistration.fields.timingInformation'),
    schema: schemas.string(
      i18n('entities.riskRegistration.fields.timingInformation'),
      {},
    ),
  },
  {
    name: 'potentialRiskOwners',
    label: i18n('entities.riskRegistration.fields.potentialRiskOwners'),
    schema: schemas.string(
      i18n('entities.riskRegistration.fields.potentialRiskOwners'),
      {},
    ),
  },
  {
    name: 'listPotentialRiskResponses',
    label: i18n('entities.riskRegistration.fields.listPotentialRiskResponses'),
    schema: schemas.string(
      i18n('entities.riskRegistration.fields.listPotentialRiskResponses'),
      {},
    ),
  },
  {
    name: 'riskTriggers',
    label: i18n('entities.riskRegistration.fields.riskTriggers'),
    schema: schemas.string(
      i18n('entities.riskRegistration.fields.riskTriggers'),
      {},
    ),
  },
  {
    name: 'oneOrMoreCauses',
    label: i18n('entities.riskRegistration.fields.oneOrMoreCauses'),
    schema: schemas.string(
      i18n('entities.riskRegistration.fields.oneOrMoreCauses'),
      {},
    ),
  },
  {
    name: 'riskStrategy',
    label: i18n('entities.riskRegistration.fields.riskStrategy'),
    schema: schemas.string(
      i18n('entities.riskRegistration.fields.riskStrategy'),
      {},
    ),
  },
  {
    name: 'oneMoreEffectsObjectives',
    label: i18n('entities.riskRegistration.fields.oneMoreEffectsObjectives'),
    schema: schemas.string(
      i18n('entities.riskRegistration.fields.oneMoreEffectsObjectives'),
      {},
    ),
  },
  {
    name: 'riskScore',
    label: i18n('entities.riskRegistration.fields.riskScore'),
    schema: schemas.string(
      i18n('entities.riskRegistration.fields.riskScore'),
      {},
    ),
  },
  {
    name: 'impact',
    label: i18n('entities.riskRegistration.fields.impact'),
    schema: schemas.string(
      i18n('entities.riskRegistration.fields.impact'),
      {},
    ),
  },
  {
    name: 'probability',
    label: i18n('entities.riskRegistration.fields.probability'),
    schema: schemas.string(
      i18n('entities.riskRegistration.fields.probability'),
      {},
    ),
  },
];