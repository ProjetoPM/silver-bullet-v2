import schemas from 'src/modules/shared/yup/yupImporterSchemas';
import { i18n } from 'src/i18n';

export default [
  {
    name: 'verifiedProductProcessActivity',
    label: i18n('entities.qualityChecklist.fields.verifiedProductProcessActivity'),
    schema: schemas.string(
      i18n('entities.qualityChecklist.fields.verifiedProductProcessActivity'),
      {},
    ),
  },
  {
    name: 'verificationDate',
    label: i18n('entities.qualityChecklist.fields.verificationDate'),
    schema: schemas.string(
      i18n('entities.qualityChecklist.fields.verificationDate'),
      {},
    ),
  },
  {
    name: 'responsibleVerification',
    label: i18n('entities.qualityChecklist.fields.responsibleVerification'),
    schema: schemas.string(
      i18n('entities.qualityChecklist.fields.responsibleVerification'),
      {},
    ),
  },
  {
    name: 'associatedDocuments',
    label: i18n('entities.qualityChecklist.fields.associatedDocuments'),
    schema: schemas.string(
      i18n('entities.qualityChecklist.fields.associatedDocuments'),
      {},
    ),
  },
  {
    name: 'guidelinesComments',
    label: i18n('entities.qualityChecklist.fields.guidelinesComments'),
    schema: schemas.string(
      i18n('entities.qualityChecklist.fields.guidelinesComments'),
      {},
    ),
  },
];