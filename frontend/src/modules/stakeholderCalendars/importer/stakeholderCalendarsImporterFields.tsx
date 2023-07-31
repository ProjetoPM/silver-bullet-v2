import schemas from 'src/modules/shared/yup/yupImporterSchemas';
import { i18n } from 'src/i18n';import moment from 'moment';

export default [
  {
    name: 'activity',
    label: i18n('entities.stakeholderCalendars.fields.activity'),
    schema: schemas.relationToOne(
      i18n('entities.stakeholderCalendars.fields.activity'),
      {},
    ),
  },
  {
    name: 'stakeholder',
    label: i18n('entities.stakeholderCalendars.fields.stakeholder'),
    schema: schemas.relationToOne(
      i18n('entities.stakeholderCalendars.fields.stakeholder'),
      {},
    ),
  },
  {
    name: 'allocationStart',
    label: i18n('entities.stakeholderCalendars.fields.allocationStart'),
    schema: schemas.date(
      i18n('entities.stakeholderCalendars.fields.allocationStart'),
      {},
    ),
   render: (value) => value && value instanceof Date ? moment(value).format('YYYY-MM-DD') : value,
  },
  {
    name: 'allocationEnds',
    label: i18n('entities.stakeholderCalendars.fields.allocationEnds'),
    schema: schemas.date(
      i18n('entities.stakeholderCalendars.fields.allocationEnds'),
      {},
    ),
   render: (value) => value && value instanceof Date ? moment(value).format('YYYY-MM-DD') : value,
  },
];