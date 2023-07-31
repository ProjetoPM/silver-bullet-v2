import schemas from 'src/modules/shared/yup/yupImporterSchemas';
import { i18n } from 'src/i18n';import moment from 'moment';

export default [
  {
    name: 'client',
    label: i18n('entities.projectClosure.fields.client'),
    schema: schemas.string(
      i18n('entities.projectClosure.fields.client'),
      {},
    ),
  },
  {
    name: 'dateclosure',
    label: i18n('entities.projectClosure.fields.dateclosure'),
    schema: schemas.date(
      i18n('entities.projectClosure.fields.dateclosure'),
      {},
    ),
   render: (value) => value && value instanceof Date ? moment(value).format('YYYY-MM-DD') : value,
  },
  {
    name: 'mainChangesApproved',
    label: i18n('entities.projectClosure.fields.mainChangesApproved'),
    schema: schemas.string(
      i18n('entities.projectClosure.fields.mainChangesApproved'),
      {},
    ),
  },
  {
    name: 'mainlessonslearned',
    label: i18n('entities.projectClosure.fields.mainlessonslearned'),
    schema: schemas.string(
      i18n('entities.projectClosure.fields.mainlessonslearned'),
      {},
    ),
  },
  {
    name: 'mainDeviations',
    label: i18n('entities.projectClosure.fields.mainDeviations'),
    schema: schemas.string(
      i18n('entities.projectClosure.fields.mainDeviations'),
      {},
    ),
  },
  {
    name: 'customerComments',
    label: i18n('entities.projectClosure.fields.customerComments'),
    schema: schemas.string(
      i18n('entities.projectClosure.fields.customerComments'),
      {},
    ),
  },
  {
    name: 'sponsorscomments',
    label: i18n('entities.projectClosure.fields.sponsorscomments'),
    schema: schemas.string(
      i18n('entities.projectClosure.fields.sponsorscomments'),
      {},
    ),
  },
];