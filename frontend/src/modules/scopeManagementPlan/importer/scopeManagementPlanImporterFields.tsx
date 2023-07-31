import schemas from 'src/modules/shared/yup/yupImporterSchemas';
import { i18n } from 'src/i18n';

export default [
  {
    name: 'projectScopeSpecificationProcess',
    label: i18n('entities.scopeManagementPlan.fields.projectScopeSpecificationProcess'),
    schema: schemas.string(
      i18n('entities.scopeManagementPlan.fields.projectScopeSpecificationProcess'),
      {
        "max": 2000
      },
    ),
  },
  {
    name: 'processesMaintainingWBS',
    label: i18n('entities.scopeManagementPlan.fields.processesMaintainingWBS'),
    schema: schemas.string(
      i18n('entities.scopeManagementPlan.fields.processesMaintainingWBS'),
      {
        "max": 2000
      },
    ),
  },
  {
    name: 'deliveryAcceptanceProcess',
    label: i18n('entities.scopeManagementPlan.fields.deliveryAcceptanceProcess'),
    schema: schemas.string(
      i18n('entities.scopeManagementPlan.fields.deliveryAcceptanceProcess'),
      {
        "max": 2000
      },
    ),
  },
  {
    name: 'scopeChangeManagementPlan',
    label: i18n('entities.scopeManagementPlan.fields.scopeChangeManagementPlan'),
    schema: schemas.string(
      i18n('entities.scopeManagementPlan.fields.scopeChangeManagementPlan'),
      {},
    ),
  },
  {
    name: 'processMaintained',
    label: i18n('entities.scopeManagementPlan.fields.processMaintained'),
    schema: schemas.string(
      i18n('entities.scopeManagementPlan.fields.processMaintained'),
      {},
    ),
  },
];