import schemas from 'src/modules/shared/yup/yupImporterSchemas';
import { i18n } from 'src/i18n';import moment from 'moment';

export default [
  {
    name: 'activityName',
    label: i18n('entities.activityDurationEstimates.fields.activityName'),
    schema: schemas.relationToOne(
      i18n('entities.activityDurationEstimates.fields.activityName'),
      {},
    ),
  },
  {
    name: 'estimatedDuration',
    label: i18n('entities.activityDurationEstimates.fields.estimatedDuration'),
    schema: schemas.integer(
      i18n('entities.activityDurationEstimates.fields.estimatedDuration'),
      {},
    ),
  },
  {
    name: 'estimatedStartDate',
    label: i18n('entities.activityDurationEstimates.fields.estimatedStartDate'),
    schema: schemas.date(
      i18n('entities.activityDurationEstimates.fields.estimatedStartDate'),
      {},
    ),
   render: (value) => value && value instanceof Date ? moment(value).format('YYYY-MM-DD') : value,
  },
  {
    name: 'estimatedEndDate',
    label: i18n('entities.activityDurationEstimates.fields.estimatedEndDate'),
    schema: schemas.date(
      i18n('entities.activityDurationEstimates.fields.estimatedEndDate'),
      {},
    ),
   render: (value) => value && value instanceof Date ? moment(value).format('YYYY-MM-DD') : value,
  },
  {
    name: 'performedDuration',
    label: i18n('entities.activityDurationEstimates.fields.performedDuration'),
    schema: schemas.integer(
      i18n('entities.activityDurationEstimates.fields.performedDuration'),
      {},
    ),
  },
  {
    name: 'performedStartDate',
    label: i18n('entities.activityDurationEstimates.fields.performedStartDate'),
    schema: schemas.date(
      i18n('entities.activityDurationEstimates.fields.performedStartDate'),
      {},
    ),
   render: (value) => value && value instanceof Date ? moment(value).format('YYYY-MM-DD') : value,
  },
  {
    name: 'performedEndDate',
    label: i18n('entities.activityDurationEstimates.fields.performedEndDate'),
    schema: schemas.date(
      i18n('entities.activityDurationEstimates.fields.performedEndDate'),
      {},
    ),
   render: (value) => value && value instanceof Date ? moment(value).format('YYYY-MM-DD') : value,
  },
];