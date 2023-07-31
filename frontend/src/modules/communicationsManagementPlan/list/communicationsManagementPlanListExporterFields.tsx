import { i18n } from 'src/i18n';
import exporterRenders from 'src/modules/shared/exporter/exporterRenders';

export default [
  {
    name: 'id',
    label: i18n('entities.communicationsManagementPlan.fields.id'),
  },
  {
    name: 'type',
    label: i18n('entities.communicationsManagementPlan.fields.type'),
  },
  {
    name: 'nome',
    label: i18n('entities.communicationsManagementPlan.fields.nome'),
  },
  {
    name: 'content',
    label: i18n('entities.communicationsManagementPlan.fields.content'),
  },
  {
    name: 'distributionReason',
    label: i18n('entities.communicationsManagementPlan.fields.distributionReason'),
  },
  {
    name: 'language',
    label: i18n('entities.communicationsManagementPlan.fields.language'),
  },
  {
    name: 'channel',
    label: i18n('entities.communicationsManagementPlan.fields.channel'),
  },
  {
    name: 'documentFormat',
    label: i18n('entities.communicationsManagementPlan.fields.documentFormat'),
  },
  {
    name: 'method',
    label: i18n('entities.communicationsManagementPlan.fields.method'),
  },
  {
    name: 'frequency',
    label: i18n('entities.communicationsManagementPlan.fields.frequency'),
  },
  {
    name: 'allocatedResources',
    label: i18n('entities.communicationsManagementPlan.fields.allocatedResources'),
  },
  {
    name: 'format',
    label: i18n('entities.communicationsManagementPlan.fields.format'),
  },
  {
    name: 'local',
    label: i18n('entities.communicationsManagementPlan.fields.local'),
  },
  {
    name: 'createdAt',
    label: i18n('entities.communicationsManagementPlan.fields.createdAt'),
    render: exporterRenders.datetime(),
  },
  {
    name: 'updatedAt',
    label: i18n('entities.communicationsManagementPlan.fields.updatedAt'),
    render: exporterRenders.datetime(),
  },
];
