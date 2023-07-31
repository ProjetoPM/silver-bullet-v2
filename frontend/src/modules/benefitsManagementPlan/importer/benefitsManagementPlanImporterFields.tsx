import schemas from 'src/modules/shared/yup/yupImporterSchemas';
import { i18n } from 'src/i18n';

export default [
  {
    name: 'targetBenefits',
    label: i18n('entities.benefitsManagementPlan.fields.targetBenefits'),
    schema: schemas.string(
      i18n('entities.benefitsManagementPlan.fields.targetBenefits'),
      {},
    ),
  },
  {
    name: 'strategicAlignment',
    label: i18n('entities.benefitsManagementPlan.fields.strategicAlignment'),
    schema: schemas.string(
      i18n('entities.benefitsManagementPlan.fields.strategicAlignment'),
      {},
    ),
  },
  {
    name: 'scheduleforBenefits',
    label: i18n('entities.benefitsManagementPlan.fields.scheduleforBenefits'),
    schema: schemas.string(
      i18n('entities.benefitsManagementPlan.fields.scheduleforBenefits'),
      {},
    ),
  },
  {
    name: 'benefitsOwner',
    label: i18n('entities.benefitsManagementPlan.fields.benefitsOwner'),
    schema: schemas.string(
      i18n('entities.benefitsManagementPlan.fields.benefitsOwner'),
      {},
    ),
  },
  {
    name: 'indicators',
    label: i18n('entities.benefitsManagementPlan.fields.indicators'),
    schema: schemas.string(
      i18n('entities.benefitsManagementPlan.fields.indicators'),
      {},
    ),
  },
  {
    name: 'premises',
    label: i18n('entities.benefitsManagementPlan.fields.premises'),
    schema: schemas.string(
      i18n('entities.benefitsManagementPlan.fields.premises'),
      {},
    ),
  },
  {
    name: 'risks',
    label: i18n('entities.benefitsManagementPlan.fields.risks'),
    schema: schemas.string(
      i18n('entities.benefitsManagementPlan.fields.risks'),
      {},
    ),
  },
];