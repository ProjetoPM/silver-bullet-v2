import schemas from 'src/modules/shared/yup/yupImporterSchemas';
import { i18n } from 'src/i18n';

export default [
  {
    name: 'qualityStandardsProject',
    label: i18n('entities.qualityManagementPlan.fields.qualityStandardsProject'),
    schema: schemas.string(
      i18n('entities.qualityManagementPlan.fields.qualityStandardsProject'),
      {},
    ),
  },
  {
    name: 'qualityObjectivesProject',
    label: i18n('entities.qualityManagementPlan.fields.qualityObjectivesProject'),
    schema: schemas.string(
      i18n('entities.qualityManagementPlan.fields.qualityObjectivesProject'),
      {},
    ),
  },
  {
    name: 'qualityRoles',
    label: i18n('entities.qualityManagementPlan.fields.qualityRoles'),
    schema: schemas.string(
      i18n('entities.qualityManagementPlan.fields.qualityRoles'),
      {},
    ),
  },
  {
    name: 'projectDeliverablesQR',
    label: i18n('entities.qualityManagementPlan.fields.projectDeliverablesQR'),
    schema: schemas.string(
      i18n('entities.qualityManagementPlan.fields.projectDeliverablesQR'),
      {},
    ),
  },
  {
    name: 'qualityControl',
    label: i18n('entities.qualityManagementPlan.fields.qualityControl'),
    schema: schemas.string(
      i18n('entities.qualityManagementPlan.fields.qualityControl'),
      {},
    ),
  },
  {
    name: 'qualityToolsUsed',
    label: i18n('entities.qualityManagementPlan.fields.qualityToolsUsed'),
    schema: schemas.string(
      i18n('entities.qualityManagementPlan.fields.qualityToolsUsed'),
      {},
    ),
  },
  {
    name: 'majorProceduresRelevant',
    label: i18n('entities.qualityManagementPlan.fields.majorProceduresRelevant'),
    schema: schemas.string(
      i18n('entities.qualityManagementPlan.fields.majorProceduresRelevant'),
      {},
    ),
  },
];