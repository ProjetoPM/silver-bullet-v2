import schemas from 'src/modules/shared/yup/yupImporterSchemas';
import { i18n } from 'src/i18n';import moment from 'moment';

export default [
  {
    name: 'responsibleIdentifying',
    label: i18n('entities.issueLog.fields.responsibleIdentifying'),
    schema: schemas.string(
      i18n('entities.issueLog.fields.responsibleIdentifying'),
      {},
    ),
  },
  {
    name: 'identificationDate',
    label: i18n('entities.issueLog.fields.identificationDate'),
    schema: schemas.date(
      i18n('entities.issueLog.fields.identificationDate'),
      {},
    ),
   render: (value) => value && value instanceof Date ? moment(value).format('YYYY-MM-DD') : value,
  },
  {
    name: 'issueDescription',
    label: i18n('entities.issueLog.fields.issueDescription'),
    schema: schemas.string(
      i18n('entities.issueLog.fields.issueDescription'),
      {},
    ),
  },
  {
    name: 'issueType',
    label: i18n('entities.issueLog.fields.issueType'),
    schema: schemas.string(
      i18n('entities.issueLog.fields.issueType'),
      {},
    ),
  },
  {
    name: 'issueResponsible',
    label: i18n('entities.issueLog.fields.issueResponsible'),
    schema: schemas.string(
      i18n('entities.issueLog.fields.issueResponsible'),
      {},
    ),
  },
  {
    name: 'situation',
    label: i18n('entities.issueLog.fields.situation'),
    schema: schemas.string(
      i18n('entities.issueLog.fields.situation'),
      {},
    ),
  },
  {
    name: 'requiredAction',
    label: i18n('entities.issueLog.fields.requiredAction'),
    schema: schemas.string(
      i18n('entities.issueLog.fields.requiredAction'),
      {},
    ),
  },
  {
    name: 'comments',
    label: i18n('entities.issueLog.fields.comments'),
    schema: schemas.string(
      i18n('entities.issueLog.fields.comments'),
      {},
    ),
  },
];