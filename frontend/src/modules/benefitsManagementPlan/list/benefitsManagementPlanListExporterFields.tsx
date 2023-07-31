import { i18n } from 'src/i18n';
import exporterRenders from 'src/modules/shared/exporter/exporterRenders';

export default [
  {
    name: 'id',
    label: i18n('entities.benefitsManagementPlan.fields.id'),
  },
  {
    name: 'targetBenefits',
    label: i18n('entities.benefitsManagementPlan.fields.targetBenefits'),
  },
  {
    name: 'strategicAlignment',
    label: i18n('entities.benefitsManagementPlan.fields.strategicAlignment'),
  },
  {
    name: 'scheduleforBenefits',
    label: i18n('entities.benefitsManagementPlan.fields.scheduleforBenefits'),
  },
  {
    name: 'benefitsOwner',
    label: i18n('entities.benefitsManagementPlan.fields.benefitsOwner'),
  },
  {
    name: 'indicators',
    label: i18n('entities.benefitsManagementPlan.fields.indicators'),
  },
  {
    name: 'premises',
    label: i18n('entities.benefitsManagementPlan.fields.premises'),
  },
  {
    name: 'risks',
    label: i18n('entities.benefitsManagementPlan.fields.risks'),
  },
  {
    name: 'createdAt',
    label: i18n('entities.benefitsManagementPlan.fields.createdAt'),
    render: exporterRenders.datetime(),
  },
  {
    name: 'updatedAt',
    label: i18n('entities.benefitsManagementPlan.fields.updatedAt'),
    render: exporterRenders.datetime(),
  },
];
