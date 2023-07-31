import schemas from 'src/modules/shared/yup/yupImporterSchemas';
import { i18n } from 'src/i18n';import changeRequestEnumerators from 'src/modules/changeRequest/changeRequestEnumerators';
import moment from 'moment';

export default [
  {
    name: 'requester',
    label: i18n('entities.changeRequest.fields.requester'),
    schema: schemas.string(
      i18n('entities.changeRequest.fields.requester'),
      {},
    ),
  },
  {
    name: 'requestIdentificationNumber',
    label: i18n('entities.changeRequest.fields.requestIdentificationNumber'),
    schema: schemas.string(
      i18n('entities.changeRequest.fields.requestIdentificationNumber'),
      {},
    ),
  },
  {
    name: 'typeChange',
    label: i18n('entities.changeRequest.fields.typeChange'),
    schema: schemas.enumerator(
      i18n('entities.changeRequest.fields.typeChange'),
      {
        "options": changeRequestEnumerators.typeChange
      },
    ),
  },
  {
    name: 'statusSituation',
    label: i18n('entities.changeRequest.fields.statusSituation'),
    schema: schemas.enumerator(
      i18n('entities.changeRequest.fields.statusSituation'),
      {
        "options": changeRequestEnumerators.statusSituation
      },
    ),
  },
  {
    name: 'requestDate',
    label: i18n('entities.changeRequest.fields.requestDate'),
    schema: schemas.date(
      i18n('entities.changeRequest.fields.requestDate'),
      {},
    ),
   render: (value) => value && value instanceof Date ? moment(value).format('YYYY-MM-DD') : value,
  },
  {
    name: 'dateCCB',
    label: i18n('entities.changeRequest.fields.dateCCB'),
    schema: schemas.date(
      i18n('entities.changeRequest.fields.dateCCB'),
      {},
    ),
   render: (value) => value && value instanceof Date ? moment(value).format('YYYY-MM-DD') : value,
  },
  {
    name: 'descriptionChange',
    label: i18n('entities.changeRequest.fields.descriptionChange'),
    schema: schemas.string(
      i18n('entities.changeRequest.fields.descriptionChange'),
      {},
    ),
  },
  {
    name: 'impactedKnowledgeAreas',
    label: i18n('entities.changeRequest.fields.impactedKnowledgeAreas'),
    schema: schemas.string(
      i18n('entities.changeRequest.fields.impactedKnowledgeAreas'),
      {},
    ),
  },
  {
    name: 'impactedDeliveriesDocuments',
    label: i18n('entities.changeRequest.fields.impactedDeliveriesDocuments'),
    schema: schemas.string(
      i18n('entities.changeRequest.fields.impactedDeliveriesDocuments'),
      {},
    ),
  },
  {
    name: 'justification',
    label: i18n('entities.changeRequest.fields.justification'),
    schema: schemas.string(
      i18n('entities.changeRequest.fields.justification'),
      {},
    ),
  },
  {
    name: 'additionalComments',
    label: i18n('entities.changeRequest.fields.additionalComments'),
    schema: schemas.string(
      i18n('entities.changeRequest.fields.additionalComments'),
      {},
    ),
  },
  {
    name: 'opinionCCB',
    label: i18n('entities.changeRequest.fields.opinionCCB'),
    schema: schemas.string(
      i18n('entities.changeRequest.fields.opinionCCB'),
      {},
    ),
  },
  {
    name: 'opinionProjectManager',
    label: i18n('entities.changeRequest.fields.opinionProjectManager'),
    schema: schemas.string(
      i18n('entities.changeRequest.fields.opinionProjectManager'),
      {},
    ),
  },
];