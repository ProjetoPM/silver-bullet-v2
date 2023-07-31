import schemas from 'src/modules/shared/yup/yupImporterSchemas';
import { i18n } from 'src/i18n';

export default [
  {
    name: 'name',
    label: i18n('entities.resourceBreakdownStructure.fields.name'),
    schema: schemas.files(
      i18n('entities.resourceBreakdownStructure.fields.name'),
      {},
    ),
  },
];