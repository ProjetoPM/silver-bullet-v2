import schemas from 'src/modules/shared/yup/yupImporterSchemas';
import { i18n } from 'src/i18n';

export default [
  {
    name: 'assumptionLog',
    label: i18n('entities.assumptionLog.fields.assumptionLog'),
    schema: schemas.string(
      i18n('entities.assumptionLog.fields.assumptionLog'),
      {},
    ),
  },
];