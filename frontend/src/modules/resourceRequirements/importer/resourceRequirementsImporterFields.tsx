import schemas from 'src/modules/shared/yup/yupImporterSchemas';
import { i18n } from 'src/i18n';

export default [
  {
    name: 'activity',
    label: i18n('entities.resourceRequirements.fields.activity'),
    schema: schemas.relationToOne(
      i18n('entities.resourceRequirements.fields.activity'),
      {},
    ),
  },
  {
    name: 'resource',
    label: i18n('entities.resourceRequirements.fields.resource'),
    schema: schemas.relationToOne(
      i18n('entities.resourceRequirements.fields.resource'),
      {},
    ),
  },
  {
    name: 'requiredAmountResource',
    label: i18n('entities.resourceRequirements.fields.requiredAmountResource'),
    schema: schemas.string(
      i18n('entities.resourceRequirements.fields.requiredAmountResource'),
      {},
    ),
  },
];