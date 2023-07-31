import schemas from 'src/modules/shared/yup/yupImporterSchemas';
import { i18n } from 'src/i18n';

export default [
  {
    name: 'type',
    label: i18n('entities.communicationsManagementPlan.fields.type'),
    schema: schemas.string(
      i18n('entities.communicationsManagementPlan.fields.type'),
      {},
    ),
  },
  {
    name: 'nome',
    label: i18n('entities.communicationsManagementPlan.fields.nome'),
    schema: schemas.string(
      i18n('entities.communicationsManagementPlan.fields.nome'),
      {},
    ),
  },
  {
    name: 'content',
    label: i18n('entities.communicationsManagementPlan.fields.content'),
    schema: schemas.string(
      i18n('entities.communicationsManagementPlan.fields.content'),
      {},
    ),
  },
  {
    name: 'distributionReason',
    label: i18n('entities.communicationsManagementPlan.fields.distributionReason'),
    schema: schemas.string(
      i18n('entities.communicationsManagementPlan.fields.distributionReason'),
      {},
    ),
  },
  {
    name: 'language',
    label: i18n('entities.communicationsManagementPlan.fields.language'),
    schema: schemas.string(
      i18n('entities.communicationsManagementPlan.fields.language'),
      {},
    ),
  },
  {
    name: 'channel',
    label: i18n('entities.communicationsManagementPlan.fields.channel'),
    schema: schemas.string(
      i18n('entities.communicationsManagementPlan.fields.channel'),
      {},
    ),
  },
  {
    name: 'documentFormat',
    label: i18n('entities.communicationsManagementPlan.fields.documentFormat'),
    schema: schemas.string(
      i18n('entities.communicationsManagementPlan.fields.documentFormat'),
      {},
    ),
  },
  {
    name: 'method',
    label: i18n('entities.communicationsManagementPlan.fields.method'),
    schema: schemas.string(
      i18n('entities.communicationsManagementPlan.fields.method'),
      {},
    ),
  },
  {
    name: 'frequency',
    label: i18n('entities.communicationsManagementPlan.fields.frequency'),
    schema: schemas.string(
      i18n('entities.communicationsManagementPlan.fields.frequency'),
      {},
    ),
  },
  {
    name: 'allocatedResources',
    label: i18n('entities.communicationsManagementPlan.fields.allocatedResources'),
    schema: schemas.string(
      i18n('entities.communicationsManagementPlan.fields.allocatedResources'),
      {},
    ),
  },
  {
    name: 'format',
    label: i18n('entities.communicationsManagementPlan.fields.format'),
    schema: schemas.string(
      i18n('entities.communicationsManagementPlan.fields.format'),
      {},
    ),
  },
  {
    name: 'local',
    label: i18n('entities.communicationsManagementPlan.fields.local'),
    schema: schemas.string(
      i18n('entities.communicationsManagementPlan.fields.local'),
      {},
    ),
  },
];