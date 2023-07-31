import { i18n } from 'src/i18n';
import exporterRenders from 'src/modules/shared/exporter/exporterRenders';

export default [
  {
    name: 'id',
    label: i18n('entities.projectManagementPlan.fields.id'),
  },
  {
    name: 'scopeManagementPlan',
    label: i18n('entities.projectManagementPlan.fields.scopeManagementPlan'),
  },
  {
    name: 'requirementsManagementPlan',
    label: i18n('entities.projectManagementPlan.fields.requirementsManagementPlan'),
  },
  {
    name: 'scheduleManagementPlan',
    label: i18n('entities.projectManagementPlan.fields.scheduleManagementPlan'),
  },
  {
    name: 'costManagementPlan',
    label: i18n('entities.projectManagementPlan.fields.costManagementPlan'),
  },
  {
    name: 'qualityManagementPlan',
    label: i18n('entities.projectManagementPlan.fields.qualityManagementPlan'),
  },
  {
    name: 'resourceManagementPlan',
    label: i18n('entities.projectManagementPlan.fields.resourceManagementPlan'),
  },
  {
    name: 'communicationsManagementPlan',
    label: i18n('entities.projectManagementPlan.fields.communicationsManagementPlan'),
  },
  {
    name: 'riskManagementPlan',
    label: i18n('entities.projectManagementPlan.fields.riskManagementPlan'),
  },
  {
    name: 'procurementManagementPlan',
    label: i18n('entities.projectManagementPlan.fields.procurementManagementPlan'),
  },
  {
    name: 'stakeholderEngagementPlan',
    label: i18n('entities.projectManagementPlan.fields.stakeholderEngagementPlan'),
  },
  {
    name: 'scopeBaseline',
    label: i18n('entities.projectManagementPlan.fields.scopeBaseline'),
  },
  {
    name: 'scheduleBaseline',
    label: i18n('entities.projectManagementPlan.fields.scheduleBaseline'),
  },
  {
    name: 'costBaseline',
    label: i18n('entities.projectManagementPlan.fields.costBaseline'),
  },
  {
    name: 'changeManagementPlan',
    label: i18n('entities.projectManagementPlan.fields.changeManagementPlan'),
  },
  {
    name: 'configurationManagementPlan',
    label: i18n('entities.projectManagementPlan.fields.configurationManagementPlan'),
  },
  {
    name: 'performanceMeasurementBaseline',
    label: i18n('entities.projectManagementPlan.fields.performanceMeasurementBaseline'),
  },
  {
    name: 'projectLifeCycle',
    label: i18n('entities.projectManagementPlan.fields.projectLifeCycle'),
  },
  {
    name: 'developmentApproach',
    label: i18n('entities.projectManagementPlan.fields.developmentApproach'),
  },
  {
    name: 'managementReviews',
    label: i18n('entities.projectManagementPlan.fields.managementReviews'),
  },
  {
    name: 'createdAt',
    label: i18n('entities.projectManagementPlan.fields.createdAt'),
    render: exporterRenders.datetime(),
  },
  {
    name: 'updatedAt',
    label: i18n('entities.projectManagementPlan.fields.updatedAt'),
    render: exporterRenders.datetime(),
  },
];
