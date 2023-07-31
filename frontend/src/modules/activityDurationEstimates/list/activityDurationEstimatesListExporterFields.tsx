import { i18n } from 'src/i18n';
import exporterRenders from 'src/modules/shared/exporter/exporterRenders';

export default [
  {
    name: 'id',
    label: i18n('entities.activityDurationEstimates.fields.id'),
  },
  {
    name: 'activityName',
    label: i18n('entities.activityDurationEstimates.fields.activityName'),
    render: exporterRenders.relationToOne(),
  },
  {
    name: 'estimatedDuration',
    label: i18n('entities.activityDurationEstimates.fields.estimatedDuration'),
  },
  {
    name: 'estimatedStartDate',
    label: i18n('entities.activityDurationEstimates.fields.estimatedStartDate'),
  },
  {
    name: 'estimatedEndDate',
    label: i18n('entities.activityDurationEstimates.fields.estimatedEndDate'),
  },
  {
    name: 'performedDuration',
    label: i18n('entities.activityDurationEstimates.fields.performedDuration'),
  },
  {
    name: 'performedStartDate',
    label: i18n('entities.activityDurationEstimates.fields.performedStartDate'),
  },
  {
    name: 'performedEndDate',
    label: i18n('entities.activityDurationEstimates.fields.performedEndDate'),
  },
  {
    name: 'createdAt',
    label: i18n('entities.activityDurationEstimates.fields.createdAt'),
    render: exporterRenders.datetime(),
  },
  {
    name: 'updatedAt',
    label: i18n('entities.activityDurationEstimates.fields.updatedAt'),
    render: exporterRenders.datetime(),
  },
];
