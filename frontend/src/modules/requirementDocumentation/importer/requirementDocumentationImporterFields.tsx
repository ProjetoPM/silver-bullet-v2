import schemas from 'src/modules/shared/yup/yupImporterSchemas';
import { i18n } from 'src/i18n';

export default [
  {
    name: 'associatedID',
    label: i18n('entities.requirementDocumentation.fields.associatedID'),
    schema: schemas.string(
      i18n('entities.requirementDocumentation.fields.associatedID'),
      {},
    ),
  },
  {
    name: 'businessNeeds',
    label: i18n('entities.requirementDocumentation.fields.businessNeeds'),
    schema: schemas.string(
      i18n('entities.requirementDocumentation.fields.businessNeeds'),
      {},
    ),
  },
  {
    name: 'requirementDescription',
    label: i18n('entities.requirementDocumentation.fields.requirementDescription'),
    schema: schemas.string(
      i18n('entities.requirementDocumentation.fields.requirementDescription'),
      {},
    ),
  },
  {
    name: 'version',
    label: i18n('entities.requirementDocumentation.fields.version'),
    schema: schemas.string(
      i18n('entities.requirementDocumentation.fields.version'),
      {},
    ),
  },
  {
    name: 'phase',
    label: i18n('entities.requirementDocumentation.fields.phase'),
    schema: schemas.string(
      i18n('entities.requirementDocumentation.fields.phase'),
      {},
    ),
  },
  {
    name: 'associatedDelivery',
    label: i18n('entities.requirementDocumentation.fields.associatedDelivery'),
    schema: schemas.string(
      i18n('entities.requirementDocumentation.fields.associatedDelivery'),
      {},
    ),
  },
  {
    name: 'type',
    label: i18n('entities.requirementDocumentation.fields.type'),
    schema: schemas.string(
      i18n('entities.requirementDocumentation.fields.type'),
      {},
    ),
  },
  {
    name: 'requester',
    label: i18n('entities.requirementDocumentation.fields.requester'),
    schema: schemas.string(
      i18n('entities.requirementDocumentation.fields.requester'),
      {},
    ),
  },
  {
    name: 'complexity',
    label: i18n('entities.requirementDocumentation.fields.complexity'),
    schema: schemas.integer(
      i18n('entities.requirementDocumentation.fields.complexity'),
      {},
    ),
  },
  {
    name: 'responsible',
    label: i18n('entities.requirementDocumentation.fields.responsible'),
    schema: schemas.string(
      i18n('entities.requirementDocumentation.fields.responsible'),
      {},
    ),
  },
  {
    name: 'validity',
    label: i18n('entities.requirementDocumentation.fields.validity'),
    schema: schemas.string(
      i18n('entities.requirementDocumentation.fields.validity'),
      {},
    ),
  },
  {
    name: 'priority',
    label: i18n('entities.requirementDocumentation.fields.priority'),
    schema: schemas.string(
      i18n('entities.requirementDocumentation.fields.priority'),
      {},
    ),
  },
  {
    name: 'acceptanceCriteria',
    label: i18n('entities.requirementDocumentation.fields.acceptanceCriteria'),
    schema: schemas.string(
      i18n('entities.requirementDocumentation.fields.acceptanceCriteria'),
      {},
    ),
  },
  {
    name: 'supportingDocumentation',
    label: i18n('entities.requirementDocumentation.fields.supportingDocumentation'),
    schema: schemas.string(
      i18n('entities.requirementDocumentation.fields.supportingDocumentation'),
      {},
    ),
  },
  {
    name: 'requirementSituation',
    label: i18n('entities.requirementDocumentation.fields.requirementSituation'),
    schema: schemas.string(
      i18n('entities.requirementDocumentation.fields.requirementSituation'),
      {},
    ),
  },
];