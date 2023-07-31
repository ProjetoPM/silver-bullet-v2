import schemas from 'src/modules/shared/yup/yupImporterSchemas';
import { i18n } from 'src/i18n';

export default [
  {
    name: 'productScopeDescription',
    label: i18n('entities.projectScopeStatement.fields.productScopeDescription'),
    schema: schemas.string(
      i18n('entities.projectScopeStatement.fields.productScopeDescription'),
      {},
    ),
  },
  {
    name: 'acceptanceCriteria',
    label: i18n('entities.projectScopeStatement.fields.acceptanceCriteria'),
    schema: schemas.string(
      i18n('entities.projectScopeStatement.fields.acceptanceCriteria'),
      {},
    ),
  },
  {
    name: 'deliverables',
    label: i18n('entities.projectScopeStatement.fields.deliverables'),
    schema: schemas.string(
      i18n('entities.projectScopeStatement.fields.deliverables'),
      {},
    ),
  },
  {
    name: 'projectExclusions',
    label: i18n('entities.projectScopeStatement.fields.projectExclusions'),
    schema: schemas.string(
      i18n('entities.projectScopeStatement.fields.projectExclusions'),
      {},
    ),
  },
];