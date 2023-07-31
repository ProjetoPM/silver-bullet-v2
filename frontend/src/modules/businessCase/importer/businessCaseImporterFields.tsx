import schemas from 'src/modules/shared/yup/yupImporterSchemas';
import { i18n } from 'src/i18n';

export default [
  {
    name: 'businessNeeds',
    label: i18n('entities.businessCase.fields.businessNeeds'),
    schema: schemas.string(
      i18n('entities.businessCase.fields.businessNeeds'),
      {},
    ),
  },
  {
    name: 'situationAnalysis',
    label: i18n('entities.businessCase.fields.situationAnalysis'),
    schema: schemas.string(
      i18n('entities.businessCase.fields.situationAnalysis'),
      {},
    ),
  },
  {
    name: 'recommendation',
    label: i18n('entities.businessCase.fields.recommendation'),
    schema: schemas.string(
      i18n('entities.businessCase.fields.recommendation'),
      {},
    ),
  },
  {
    name: 'evaluation',
    label: i18n('entities.businessCase.fields.evaluation'),
    schema: schemas.string(
      i18n('entities.businessCase.fields.evaluation'),
      {},
    ),
  },
];