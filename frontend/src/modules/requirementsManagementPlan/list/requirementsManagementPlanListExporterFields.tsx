import { i18n } from 'src/i18n';
import exporterRenders from 'src/modules/shared/exporter/exporterRenders';

export default [
  {
    name: 'id',
    label: i18n('entities.requirementsManagementPlan.fields.id'),
  },
  {
    name: 'requirementsActivities',
    label: i18n('entities.requirementsManagementPlan.fields.requirementsActivities'),
  },
  {
    name: 'configurationManagementActivities',
    label: i18n('entities.requirementsManagementPlan.fields.configurationManagementActivities'),
  },
  {
    name: 'requirementsPrioritizationProcess',
    label: i18n('entities.requirementsManagementPlan.fields.requirementsPrioritizationProcess'),
  },
  {
    name: 'metricsRationale',
    label: i18n('entities.requirementsManagementPlan.fields.metricsRationale'),
  },
  {
    name: 'createdAt',
    label: i18n('entities.requirementsManagementPlan.fields.createdAt'),
    render: exporterRenders.datetime(),
  },
  {
    name: 'updatedAt',
    label: i18n('entities.requirementsManagementPlan.fields.updatedAt'),
    render: exporterRenders.datetime(),
  },
];
