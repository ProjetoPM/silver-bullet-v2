import { i18n } from 'src/i18n';
import exporterRenders from 'src/modules/shared/exporter/exporterRenders';

export default [
  {
    name: 'id',
    label: i18n('entities.assumptionLog.fields.id'),
  },
  {
    name: 'assumptionLog',
    label: i18n('entities.assumptionLog.fields.assumptionLog'),
  },
  {
    name: 'createdAt',
    label: i18n('entities.assumptionLog.fields.createdAt'),
    render: exporterRenders.datetime(),
  },
  {
    name: 'updatedAt',
    label: i18n('entities.assumptionLog.fields.updatedAt'),
    render: exporterRenders.datetime(),
  },
];
