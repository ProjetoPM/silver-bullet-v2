import schemas from 'src/modules/shared/yup/yupImporterSchemas';
import { i18n } from 'src/i18n';

export default [
  {
    name: 'resourceName',
    label: i18n('entities.resource.fields.resourceName'),
    schema: schemas.string(
      i18n('entities.resource.fields.resourceName'),
      {},
    ),
  },
  {
    name: 'resourceDescription',
    label: i18n('entities.resource.fields.resourceDescription'),
    schema: schemas.string(
      i18n('entities.resource.fields.resourceDescription'),
      {},
    ),
  },
  {
    name: 'resourceCostperUnit',
    label: i18n('entities.resource.fields.resourceCostperUnit'),
    schema: schemas.decimal(
      i18n('entities.resource.fields.resourceCostperUnit'),
      {},
    ),
  },
  {
    name: 'resourceType',
    label: i18n('entities.resource.fields.resourceType'),
    schema: schemas.string(
      i18n('entities.resource.fields.resourceType'),
      {},
    ),
  },
];