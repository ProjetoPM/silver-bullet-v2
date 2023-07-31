import { i18n } from 'src/i18n';
import exporterRenders from 'src/modules/shared/exporter/exporterRenders';

export default [
  {
    name: 'id',
    label: i18n('entities.activityList.fields.id'),
  },
  {
    name: 'activityLabel',
    label: i18n('entities.activityList.fields.activityLabel'),
  },
  {
    name: 'milestone',
    label: i18n('entities.activityList.fields.milestone'),
  },
  {
    name: 'activityName',
    label: i18n('entities.activityList.fields.activityName'),
  },
  {
    name: 'projectPhase',
    label: i18n('entities.activityList.fields.projectPhase'),
  },
  {
    name: 'wBSId',
    label: i18n('entities.activityList.fields.wBSId'),
  },
  {
    name: 'activityDescription',
    label: i18n('entities.activityList.fields.activityDescription'),
  },
  {
    name: 'createdAt',
    label: i18n('entities.activityList.fields.createdAt'),
    render: exporterRenders.datetime(),
  },
  {
    name: 'updatedAt',
    label: i18n('entities.activityList.fields.updatedAt'),
    render: exporterRenders.datetime(),
  },
];
