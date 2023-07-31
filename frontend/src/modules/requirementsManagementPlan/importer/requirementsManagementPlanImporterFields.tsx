import schemas from 'src/modules/shared/yup/yupImporterSchemas';
import { i18n } from 'src/i18n';

export default [
  {
    name: 'requirementsActivities',
    label: i18n('entities.requirementsManagementPlan.fields.requirementsActivities'),
    schema: schemas.string(
      i18n('entities.requirementsManagementPlan.fields.requirementsActivities'),
      {
        "min": 5,
        "max": 2000
      },
    ),
  },
  {
    name: 'configurationManagementActivities',
    label: i18n('entities.requirementsManagementPlan.fields.configurationManagementActivities'),
    schema: schemas.string(
      i18n('entities.requirementsManagementPlan.fields.configurationManagementActivities'),
      {},
    ),
  },
  {
    name: 'requirementsPrioritizationProcess',
    label: i18n('entities.requirementsManagementPlan.fields.requirementsPrioritizationProcess'),
    schema: schemas.string(
      i18n('entities.requirementsManagementPlan.fields.requirementsPrioritizationProcess'),
      {},
    ),
  },
  {
    name: 'metricsRationale',
    label: i18n('entities.requirementsManagementPlan.fields.metricsRationale'),
    schema: schemas.string(
      i18n('entities.requirementsManagementPlan.fields.metricsRationale'),
      {
        "max": 2000
      },
    ),
  },
];