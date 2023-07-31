import schemas from 'src/modules/shared/yup/yupImporterSchemas';
import { i18n } from 'src/i18n';import moment from 'moment';

export default [
  {
    name: 'responsible',
    label: i18n('entities.workPerformanceReports.fields.responsible'),
    schema: schemas.string(
      i18n('entities.workPerformanceReports.fields.responsible'),
      {},
    ),
  },
  {
    name: 'mainActivitiesExecution',
    label: i18n('entities.workPerformanceReports.fields.mainActivitiesExecution'),
    schema: schemas.string(
      i18n('entities.workPerformanceReports.fields.mainActivitiesExecution'),
      {},
    ),
  },
  {
    name: 'upcomingActivitiesPerform',
    label: i18n('entities.workPerformanceReports.fields.upcomingActivitiesPerform'),
    schema: schemas.string(
      i18n('entities.workPerformanceReports.fields.upcomingActivitiesPerform'),
      {},
    ),
  },
  {
    name: 'generalComments',
    label: i18n('entities.workPerformanceReports.fields.generalComments'),
    schema: schemas.string(
      i18n('entities.workPerformanceReports.fields.generalComments'),
      {},
    ),
  },
  {
    name: 'issues',
    label: i18n('entities.workPerformanceReports.fields.issues'),
    schema: schemas.string(
      i18n('entities.workPerformanceReports.fields.issues'),
      {},
    ),
  },
  {
    name: 'changes',
    label: i18n('entities.workPerformanceReports.fields.changes'),
    schema: schemas.string(
      i18n('entities.workPerformanceReports.fields.changes'),
      {},
    ),
  },
  {
    name: 'risks',
    label: i18n('entities.workPerformanceReports.fields.risks'),
    schema: schemas.string(
      i18n('entities.workPerformanceReports.fields.risks'),
      {},
    ),
  },
  {
    name: 'attentionPoints',
    label: i18n('entities.workPerformanceReports.fields.attentionPoints'),
    schema: schemas.string(
      i18n('entities.workPerformanceReports.fields.attentionPoints'),
      {},
    ),
  },
  {
    name: 'date',
    label: i18n('entities.workPerformanceReports.fields.date'),
    schema: schemas.date(
      i18n('entities.workPerformanceReports.fields.date'),
      {},
    ),
   render: (value) => value && value instanceof Date ? moment(value).format('YYYY-MM-DD') : value,
  },
];