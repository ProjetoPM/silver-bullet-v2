import schemas from 'src/modules/shared/yup/yupImporterSchemas';
import { i18n } from 'src/i18n';

export default [
  {
    name: 'scopeManagementPlan',
    label: i18n('entities.projectManagementPlan.fields.scopeManagementPlan'),
    schema: schemas.string(
      i18n('entities.projectManagementPlan.fields.scopeManagementPlan'),
      {},
    ),
  },
  {
    name: 'requirementsManagementPlan',
    label: i18n('entities.projectManagementPlan.fields.requirementsManagementPlan'),
    schema: schemas.string(
      i18n('entities.projectManagementPlan.fields.requirementsManagementPlan'),
      {},
    ),
  },
  {
    name: 'scheduleManagementPlan',
    label: i18n('entities.projectManagementPlan.fields.scheduleManagementPlan'),
    schema: schemas.string(
      i18n('entities.projectManagementPlan.fields.scheduleManagementPlan'),
      {},
    ),
  },
  {
    name: 'costManagementPlan',
    label: i18n('entities.projectManagementPlan.fields.costManagementPlan'),
    schema: schemas.string(
      i18n('entities.projectManagementPlan.fields.costManagementPlan'),
      {},
    ),
  },
  {
    name: 'qualityManagementPlan',
    label: i18n('entities.projectManagementPlan.fields.qualityManagementPlan'),
    schema: schemas.string(
      i18n('entities.projectManagementPlan.fields.qualityManagementPlan'),
      {},
    ),
  },
  {
    name: 'resourceManagementPlan',
    label: i18n('entities.projectManagementPlan.fields.resourceManagementPlan'),
    schema: schemas.string(
      i18n('entities.projectManagementPlan.fields.resourceManagementPlan'),
      {},
    ),
  },
  {
    name: 'communicationsManagementPlan',
    label: i18n('entities.projectManagementPlan.fields.communicationsManagementPlan'),
    schema: schemas.string(
      i18n('entities.projectManagementPlan.fields.communicationsManagementPlan'),
      {},
    ),
  },
  {
    name: 'riskManagementPlan',
    label: i18n('entities.projectManagementPlan.fields.riskManagementPlan'),
    schema: schemas.string(
      i18n('entities.projectManagementPlan.fields.riskManagementPlan'),
      {},
    ),
  },
  {
    name: 'procurementManagementPlan',
    label: i18n('entities.projectManagementPlan.fields.procurementManagementPlan'),
    schema: schemas.string(
      i18n('entities.projectManagementPlan.fields.procurementManagementPlan'),
      {},
    ),
  },
  {
    name: 'stakeholderEngagementPlan',
    label: i18n('entities.projectManagementPlan.fields.stakeholderEngagementPlan'),
    schema: schemas.string(
      i18n('entities.projectManagementPlan.fields.stakeholderEngagementPlan'),
      {},
    ),
  },
  {
    name: 'scopeBaseline',
    label: i18n('entities.projectManagementPlan.fields.scopeBaseline'),
    schema: schemas.string(
      i18n('entities.projectManagementPlan.fields.scopeBaseline'),
      {},
    ),
  },
  {
    name: 'scheduleBaseline',
    label: i18n('entities.projectManagementPlan.fields.scheduleBaseline'),
    schema: schemas.string(
      i18n('entities.projectManagementPlan.fields.scheduleBaseline'),
      {},
    ),
  },
  {
    name: 'costBaseline',
    label: i18n('entities.projectManagementPlan.fields.costBaseline'),
    schema: schemas.string(
      i18n('entities.projectManagementPlan.fields.costBaseline'),
      {},
    ),
  },
  {
    name: 'changeManagementPlan',
    label: i18n('entities.projectManagementPlan.fields.changeManagementPlan'),
    schema: schemas.string(
      i18n('entities.projectManagementPlan.fields.changeManagementPlan'),
      {},
    ),
  },
  {
    name: 'configurationManagementPlan',
    label: i18n('entities.projectManagementPlan.fields.configurationManagementPlan'),
    schema: schemas.string(
      i18n('entities.projectManagementPlan.fields.configurationManagementPlan'),
      {},
    ),
  },
  {
    name: 'performanceMeasurementBaseline',
    label: i18n('entities.projectManagementPlan.fields.performanceMeasurementBaseline'),
    schema: schemas.string(
      i18n('entities.projectManagementPlan.fields.performanceMeasurementBaseline'),
      {},
    ),
  },
  {
    name: 'projectLifeCycle',
    label: i18n('entities.projectManagementPlan.fields.projectLifeCycle'),
    schema: schemas.string(
      i18n('entities.projectManagementPlan.fields.projectLifeCycle'),
      {},
    ),
  },
  {
    name: 'developmentApproach',
    label: i18n('entities.projectManagementPlan.fields.developmentApproach'),
    schema: schemas.string(
      i18n('entities.projectManagementPlan.fields.developmentApproach'),
      {},
    ),
  },
  {
    name: 'managementReviews',
    label: i18n('entities.projectManagementPlan.fields.managementReviews'),
    schema: schemas.string(
      i18n('entities.projectManagementPlan.fields.managementReviews'),
      {},
    ),
  },
];