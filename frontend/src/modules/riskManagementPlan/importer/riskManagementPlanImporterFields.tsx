import schemas from 'src/modules/shared/yup/yupImporterSchemas';
import { i18n } from 'src/i18n';

export default [
  {
    name: 'methodology',
    label: i18n('entities.riskManagementPlan.fields.methodology'),
    schema: schemas.string(
      i18n('entities.riskManagementPlan.fields.methodology'),
      {},
    ),
  },
  {
    name: 'rolesResponsibilities',
    label: i18n('entities.riskManagementPlan.fields.rolesResponsibilities'),
    schema: schemas.string(
      i18n('entities.riskManagementPlan.fields.rolesResponsibilities'),
      {},
    ),
  },
  {
    name: 'probabilityImpactMatrix',
    label: i18n('entities.riskManagementPlan.fields.probabilityImpactMatrix'),
    schema: schemas.string(
      i18n('entities.riskManagementPlan.fields.probabilityImpactMatrix'),
      {},
    ),
  },
  {
    name: 'riskCategories',
    label: i18n('entities.riskManagementPlan.fields.riskCategories'),
    schema: schemas.string(
      i18n('entities.riskManagementPlan.fields.riskCategories'),
      {},
    ),
  },
  {
    name: 'riskStrategy',
    label: i18n('entities.riskManagementPlan.fields.riskStrategy'),
    schema: schemas.string(
      i18n('entities.riskManagementPlan.fields.riskStrategy'),
      {},
    ),
  },
  {
    name: 'tracking',
    label: i18n('entities.riskManagementPlan.fields.tracking'),
    schema: schemas.string(
      i18n('entities.riskManagementPlan.fields.tracking'),
      {},
    ),
  },
  {
    name: 'funding',
    label: i18n('entities.riskManagementPlan.fields.funding'),
    schema: schemas.string(
      i18n('entities.riskManagementPlan.fields.funding'),
      {},
    ),
  },
  {
    name: 'timing',
    label: i18n('entities.riskManagementPlan.fields.timing'),
    schema: schemas.string(
      i18n('entities.riskManagementPlan.fields.timing'),
      {},
    ),
  },
  {
    name: 'stakeholderRiskAppetite',
    label: i18n('entities.riskManagementPlan.fields.stakeholderRiskAppetite'),
    schema: schemas.string(
      i18n('entities.riskManagementPlan.fields.stakeholderRiskAppetite'),
      {},
    ),
  },
  {
    name: 'definitionsRiskProbabilityImpacts',
    label: i18n('entities.riskManagementPlan.fields.definitionsRiskProbabilityImpacts'),
    schema: schemas.string(
      i18n('entities.riskManagementPlan.fields.definitionsRiskProbabilityImpacts'),
      {},
    ),
  },
  {
    name: 'reportingFormats',
    label: i18n('entities.riskManagementPlan.fields.reportingFormats'),
    schema: schemas.string(
      i18n('entities.riskManagementPlan.fields.reportingFormats'),
      {},
    ),
  },
];