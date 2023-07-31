import { i18n } from 'src/i18n';
import exporterRenders from 'src/modules/shared/exporter/exporterRenders';

export default [
  {
    name: 'id',
    label: i18n('entities.changeRequest.fields.id'),
  },
  {
    name: 'requester',
    label: i18n('entities.changeRequest.fields.requester'),
  },
  {
    name: 'requestIdentificationNumber',
    label: i18n('entities.changeRequest.fields.requestIdentificationNumber'),
  },
  {
    name: 'typeChange',
    label: i18n('entities.changeRequest.fields.typeChange'),
  },
  {
    name: 'statusSituation',
    label: i18n('entities.changeRequest.fields.statusSituation'),
  },
  {
    name: 'requestDate',
    label: i18n('entities.changeRequest.fields.requestDate'),
  },
  {
    name: 'dateCCB',
    label: i18n('entities.changeRequest.fields.dateCCB'),
  },
  {
    name: 'descriptionChange',
    label: i18n('entities.changeRequest.fields.descriptionChange'),
  },
  {
    name: 'impactedKnowledgeAreas',
    label: i18n('entities.changeRequest.fields.impactedKnowledgeAreas'),
  },
  {
    name: 'impactedDeliveriesDocuments',
    label: i18n('entities.changeRequest.fields.impactedDeliveriesDocuments'),
  },
  {
    name: 'justification',
    label: i18n('entities.changeRequest.fields.justification'),
  },
  {
    name: 'additionalComments',
    label: i18n('entities.changeRequest.fields.additionalComments'),
  },
  {
    name: 'opinionCCB',
    label: i18n('entities.changeRequest.fields.opinionCCB'),
  },
  {
    name: 'opinionProjectManager',
    label: i18n('entities.changeRequest.fields.opinionProjectManager'),
  },
  {
    name: 'createdAt',
    label: i18n('entities.changeRequest.fields.createdAt'),
    render: exporterRenders.datetime(),
  },
  {
    name: 'updatedAt',
    label: i18n('entities.changeRequest.fields.updatedAt'),
    render: exporterRenders.datetime(),
  },
];
