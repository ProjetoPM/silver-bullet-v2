import { i18n } from 'src/i18n';
import exporterRenders from 'src/modules/shared/exporter/exporterRenders';

export default [
  {
    name: 'id',
    label: i18n('entities.resourceRequirements.fields.id'),
  },
  {
    name: 'activity',
    label: i18n('entities.resourceRequirements.fields.activity'),
    render: exporterRenders.relationToOne(),
  },
  {
    name: 'resource',
    label: i18n('entities.resourceRequirements.fields.resource'),
    render: exporterRenders.relationToOne(),
  },
  {
    name: 'requiredAmountResource',
    label: i18n('entities.resourceRequirements.fields.requiredAmountResource'),
  },
  {
    name: 'createdAt',
    label: i18n('entities.resourceRequirements.fields.createdAt'),
    render: exporterRenders.datetime(),
  },
  {
    name: 'updatedAt',
    label: i18n('entities.resourceRequirements.fields.updatedAt'),
    render: exporterRenders.datetime(),
  },
];
