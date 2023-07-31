import { i18n } from 'src/i18n';
import exporterRenders from 'src/modules/shared/exporter/exporterRenders';

export default [
  {
    name: 'id',
    label: i18n('entities.workPerformanceReports.fields.id'),
  },
  {
    name: 'responsible',
    label: i18n('entities.workPerformanceReports.fields.responsible'),
  },
  {
    name: 'mainActivitiesExecution',
    label: i18n('entities.workPerformanceReports.fields.mainActivitiesExecution'),
  },
  {
    name: 'upcomingActivitiesPerform',
    label: i18n('entities.workPerformanceReports.fields.upcomingActivitiesPerform'),
  },
  {
    name: 'generalComments',
    label: i18n('entities.workPerformanceReports.fields.generalComments'),
  },
  {
    name: 'issues',
    label: i18n('entities.workPerformanceReports.fields.issues'),
  },
  {
    name: 'changes',
    label: i18n('entities.workPerformanceReports.fields.changes'),
  },
  {
    name: 'risks',
    label: i18n('entities.workPerformanceReports.fields.risks'),
  },
  {
    name: 'attentionPoints',
    label: i18n('entities.workPerformanceReports.fields.attentionPoints'),
  },
  {
    name: 'date',
    label: i18n('entities.workPerformanceReports.fields.date'),
  },
  {
    name: 'createdAt',
    label: i18n('entities.workPerformanceReports.fields.createdAt'),
    render: exporterRenders.datetime(),
  },
  {
    name: 'updatedAt',
    label: i18n('entities.workPerformanceReports.fields.updatedAt'),
    render: exporterRenders.datetime(),
  },
];
