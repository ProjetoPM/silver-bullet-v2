import { i18n } from 'src/i18n';
import exporterRenders from 'src/modules/shared/exporter/exporterRenders';

export default [
  {
    name: 'id',
    label: i18n('entities.scheduleNetworkDiagram.fields.id'),
  },
  {
    name: 'activityName',
    label: i18n('entities.scheduleNetworkDiagram.fields.activityName'),
  },
  {
    name: 'predecessorActivity',
    label: i18n('entities.scheduleNetworkDiagram.fields.predecessorActivity'),
  },
  {
    name: 'createdAt',
    label: i18n('entities.scheduleNetworkDiagram.fields.createdAt'),
    render: exporterRenders.datetime(),
  },
  {
    name: 'updatedAt',
    label: i18n('entities.scheduleNetworkDiagram.fields.updatedAt'),
    render: exporterRenders.datetime(),
  },
];
