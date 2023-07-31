import schemas from 'src/modules/shared/yup/yupImporterSchemas';
import { i18n } from 'src/i18n';

export default [
  {
    name: 'name',
    label: i18n('entities.workbreakdownStructure.fields.name'),
    schema: schemas.string(
      i18n('entities.workbreakdownStructure.fields.name'),
      {},
    ),
  },
  {
    name: 'arquivo',
    label: i18n('entities.workbreakdownStructure.fields.arquivo'),
    schema: schemas.files(
      i18n('entities.workbreakdownStructure.fields.arquivo'),
      {},
    ),
  },
];