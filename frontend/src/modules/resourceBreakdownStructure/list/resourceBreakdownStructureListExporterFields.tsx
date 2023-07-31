import { i18n } from 'src/i18n';
import exporterRenders from 'src/modules/shared/exporter/exporterRenders';

export default [
  {
    name: 'id',
    label: i18n('entities.resourceBreakdownStructure.fields.id'),
  },
  {
    name: 'name',
    label: i18n('entities.resourceBreakdownStructure.fields.name'),
    render: exporterRenders.filesOrImages(),
  },
  {
    name: 'createdAt',
    label: i18n('entities.resourceBreakdownStructure.fields.createdAt'),
    render: exporterRenders.datetime(),
  },
  {
    name: 'updatedAt',
    label: i18n('entities.resourceBreakdownStructure.fields.updatedAt'),
    render: exporterRenders.datetime(),
  },
];
