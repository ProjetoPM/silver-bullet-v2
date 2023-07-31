import schemas from 'src/modules/shared/yup/yupImporterSchemas';
import { i18n } from 'src/i18n';

export default [
  {
    name: 'processesManagingProjectCosts',
    label: i18n('entities.costManagementPlan.fields.processesManagingProjectCosts'),
    schema: schemas.string(
      i18n('entities.costManagementPlan.fields.processesManagingProjectCosts'),
      {},
    ),
  },
  {
    name: 'levelAccuracy',
    label: i18n('entities.costManagementPlan.fields.levelAccuracy'),
    schema: schemas.string(
      i18n('entities.costManagementPlan.fields.levelAccuracy'),
      {},
    ),
  },
  {
    name: 'organizationalProceduresLinks',
    label: i18n('entities.costManagementPlan.fields.organizationalProceduresLinks'),
    schema: schemas.string(
      i18n('entities.costManagementPlan.fields.organizationalProceduresLinks'),
      {},
    ),
  },
  {
    name: 'rulesPerformanceMeasurement',
    label: i18n('entities.costManagementPlan.fields.rulesPerformanceMeasurement'),
    schema: schemas.string(
      i18n('entities.costManagementPlan.fields.rulesPerformanceMeasurement'),
      {},
    ),
  },
  {
    name: 'unitsMeasureUsed',
    label: i18n('entities.costManagementPlan.fields.unitsMeasureUsed'),
    schema: schemas.string(
      i18n('entities.costManagementPlan.fields.unitsMeasureUsed'),
      {},
    ),
  },
  {
    name: 'levelPrecision',
    label: i18n('entities.costManagementPlan.fields.levelPrecision'),
    schema: schemas.string(
      i18n('entities.costManagementPlan.fields.levelPrecision'),
      {},
    ),
  },
  {
    name: 'controlThresholds',
    label: i18n('entities.costManagementPlan.fields.controlThresholds'),
    schema: schemas.string(
      i18n('entities.costManagementPlan.fields.controlThresholds'),
      {},
    ),
  },
  {
    name: 'reportingFormats',
    label: i18n('entities.costManagementPlan.fields.reportingFormats'),
    schema: schemas.string(
      i18n('entities.costManagementPlan.fields.reportingFormats'),
      {},
    ),
  },
];