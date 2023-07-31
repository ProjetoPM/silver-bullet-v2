import { i18n } from 'src/i18n';
import exporterRenders from 'src/modules/shared/exporter/exporterRenders';

export default [
  {
    name: 'id',
    label: i18n('entities.resource.fields.id'),
  },
  {
    name: 'resourceName',
    label: i18n('entities.resource.fields.resourceName'),
  },
  {
    name: 'resourceDescription',
    label: i18n('entities.resource.fields.resourceDescription'),
  },
  {
    name: 'resourceCostperUnit',
    label: i18n('entities.resource.fields.resourceCostperUnit'),
    render: exporterRenders.decimal(),
  },
  {
    name: 'resourceType',
    label: i18n('entities.resource.fields.resourceType'),
  },
  {
    name: 'createdAt',
    label: i18n('entities.resource.fields.createdAt'),
    render: exporterRenders.datetime(),
  },
  {
    name: 'updatedAt',
    label: i18n('entities.resource.fields.updatedAt'),
    render: exporterRenders.datetime(),
  },
];
