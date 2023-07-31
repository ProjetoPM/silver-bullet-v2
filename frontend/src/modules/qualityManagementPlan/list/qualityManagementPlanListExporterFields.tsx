import { i18n } from 'src/i18n';
import exporterRenders from 'src/modules/shared/exporter/exporterRenders';

export default [
  {
    name: 'id',
    label: i18n('entities.qualityManagementPlan.fields.id'),
  },
  {
    name: 'qualityStandardsProject',
    label: i18n('entities.qualityManagementPlan.fields.qualityStandardsProject'),
  },
  {
    name: 'qualityObjectivesProject',
    label: i18n('entities.qualityManagementPlan.fields.qualityObjectivesProject'),
  },
  {
    name: 'qualityRoles',
    label: i18n('entities.qualityManagementPlan.fields.qualityRoles'),
  },
  {
    name: 'projectDeliverablesQR',
    label: i18n('entities.qualityManagementPlan.fields.projectDeliverablesQR'),
  },
  {
    name: 'qualityControl',
    label: i18n('entities.qualityManagementPlan.fields.qualityControl'),
  },
  {
    name: 'qualityToolsUsed',
    label: i18n('entities.qualityManagementPlan.fields.qualityToolsUsed'),
  },
  {
    name: 'majorProceduresRelevant',
    label: i18n('entities.qualityManagementPlan.fields.majorProceduresRelevant'),
  },
  {
    name: 'createdAt',
    label: i18n('entities.qualityManagementPlan.fields.createdAt'),
    render: exporterRenders.datetime(),
  },
  {
    name: 'updatedAt',
    label: i18n('entities.qualityManagementPlan.fields.updatedAt'),
    render: exporterRenders.datetime(),
  },
];
