import { i18n } from 'src/i18n';
import exporterRenders from 'src/modules/shared/exporter/exporterRenders';

export default [
  {
    name: 'id',
    label: i18n('entities.riskManagementPlan.fields.id'),
  },
  {
    name: 'methodology',
    label: i18n('entities.riskManagementPlan.fields.methodology'),
  },
  {
    name: 'rolesResponsibilities',
    label: i18n('entities.riskManagementPlan.fields.rolesResponsibilities'),
  },
  {
    name: 'probabilityImpactMatrix',
    label: i18n('entities.riskManagementPlan.fields.probabilityImpactMatrix'),
  },
  {
    name: 'riskCategories',
    label: i18n('entities.riskManagementPlan.fields.riskCategories'),
  },
  {
    name: 'riskStrategy',
    label: i18n('entities.riskManagementPlan.fields.riskStrategy'),
  },
  {
    name: 'tracking',
    label: i18n('entities.riskManagementPlan.fields.tracking'),
  },
  {
    name: 'funding',
    label: i18n('entities.riskManagementPlan.fields.funding'),
  },
  {
    name: 'timing',
    label: i18n('entities.riskManagementPlan.fields.timing'),
  },
  {
    name: 'stakeholderRiskAppetite',
    label: i18n('entities.riskManagementPlan.fields.stakeholderRiskAppetite'),
  },
  {
    name: 'definitionsRiskProbabilityImpacts',
    label: i18n('entities.riskManagementPlan.fields.definitionsRiskProbabilityImpacts'),
  },
  {
    name: 'reportingFormats',
    label: i18n('entities.riskManagementPlan.fields.reportingFormats'),
  },
  {
    name: 'createdAt',
    label: i18n('entities.riskManagementPlan.fields.createdAt'),
    render: exporterRenders.datetime(),
  },
  {
    name: 'updatedAt',
    label: i18n('entities.riskManagementPlan.fields.updatedAt'),
    render: exporterRenders.datetime(),
  },
];
