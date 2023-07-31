import { i18n } from 'src/i18n';
import exporterRenders from 'src/modules/shared/exporter/exporterRenders';

export default [
  {
    name: 'id',
    label: i18n('entities.requirementDocumentation.fields.id'),
  },
  {
    name: 'associatedID',
    label: i18n('entities.requirementDocumentation.fields.associatedID'),
  },
  {
    name: 'businessNeeds',
    label: i18n('entities.requirementDocumentation.fields.businessNeeds'),
  },
  {
    name: 'requirementDescription',
    label: i18n('entities.requirementDocumentation.fields.requirementDescription'),
  },
  {
    name: 'version',
    label: i18n('entities.requirementDocumentation.fields.version'),
  },
  {
    name: 'phase',
    label: i18n('entities.requirementDocumentation.fields.phase'),
  },
  {
    name: 'associatedDelivery',
    label: i18n('entities.requirementDocumentation.fields.associatedDelivery'),
  },
  {
    name: 'type',
    label: i18n('entities.requirementDocumentation.fields.type'),
  },
  {
    name: 'requester',
    label: i18n('entities.requirementDocumentation.fields.requester'),
  },
  {
    name: 'complexity',
    label: i18n('entities.requirementDocumentation.fields.complexity'),
  },
  {
    name: 'responsible',
    label: i18n('entities.requirementDocumentation.fields.responsible'),
  },
  {
    name: 'validity',
    label: i18n('entities.requirementDocumentation.fields.validity'),
  },
  {
    name: 'priority',
    label: i18n('entities.requirementDocumentation.fields.priority'),
  },
  {
    name: 'acceptanceCriteria',
    label: i18n('entities.requirementDocumentation.fields.acceptanceCriteria'),
  },
  {
    name: 'supportingDocumentation',
    label: i18n('entities.requirementDocumentation.fields.supportingDocumentation'),
  },
  {
    name: 'requirementSituation',
    label: i18n('entities.requirementDocumentation.fields.requirementSituation'),
  },
  {
    name: 'createdAt',
    label: i18n('entities.requirementDocumentation.fields.createdAt'),
    render: exporterRenders.datetime(),
  },
  {
    name: 'updatedAt',
    label: i18n('entities.requirementDocumentation.fields.updatedAt'),
    render: exporterRenders.datetime(),
  },
];
