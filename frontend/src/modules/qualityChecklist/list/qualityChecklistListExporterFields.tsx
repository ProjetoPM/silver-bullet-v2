import { i18n } from 'src/i18n';
import exporterRenders from 'src/modules/shared/exporter/exporterRenders';

export default [
  {
    name: 'id',
    label: i18n('entities.qualityChecklist.fields.id'),
  },
  {
    name: 'verifiedProductProcessActivity',
    label: i18n('entities.qualityChecklist.fields.verifiedProductProcessActivity'),
  },
  {
    name: 'verificationDate',
    label: i18n('entities.qualityChecklist.fields.verificationDate'),
  },
  {
    name: 'responsibleVerification',
    label: i18n('entities.qualityChecklist.fields.responsibleVerification'),
  },
  {
    name: 'associatedDocuments',
    label: i18n('entities.qualityChecklist.fields.associatedDocuments'),
  },
  {
    name: 'guidelinesComments',
    label: i18n('entities.qualityChecklist.fields.guidelinesComments'),
  },
  {
    name: 'createdAt',
    label: i18n('entities.qualityChecklist.fields.createdAt'),
    render: exporterRenders.datetime(),
  },
  {
    name: 'updatedAt',
    label: i18n('entities.qualityChecklist.fields.updatedAt'),
    render: exporterRenders.datetime(),
  },
];
