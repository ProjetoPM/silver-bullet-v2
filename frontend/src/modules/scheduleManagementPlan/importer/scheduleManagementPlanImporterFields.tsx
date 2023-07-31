import schemas from 'src/modules/shared/yup/yupImporterSchemas';
import { i18n } from 'src/i18n';

export default [
  {
    name: 'projectScheduleModelDevelopment',
    label: i18n('entities.scheduleManagementPlan.fields.projectScheduleModelDevelopment'),
    schema: schemas.string(
      i18n('entities.scheduleManagementPlan.fields.projectScheduleModelDevelopment'),
      {},
    ),
  },
  {
    name: 'levelAccuracy',
    label: i18n('entities.scheduleManagementPlan.fields.levelAccuracy'),
    schema: schemas.string(
      i18n('entities.scheduleManagementPlan.fields.levelAccuracy'),
      {},
    ),
  },
  {
    name: 'organizationalProceduresLinks',
    label: i18n('entities.scheduleManagementPlan.fields.organizationalProceduresLinks'),
    schema: schemas.string(
      i18n('entities.scheduleManagementPlan.fields.organizationalProceduresLinks'),
      {},
    ),
  },
  {
    name: 'projectScheduleModelMaintenance',
    label: i18n('entities.scheduleManagementPlan.fields.projectScheduleModelMaintenance'),
    schema: schemas.string(
      i18n('entities.scheduleManagementPlan.fields.projectScheduleModelMaintenance'),
      {},
    ),
  },
  {
    name: 'performanceMeasurementRules',
    label: i18n('entities.scheduleManagementPlan.fields.performanceMeasurementRules'),
    schema: schemas.string(
      i18n('entities.scheduleManagementPlan.fields.performanceMeasurementRules'),
      {},
    ),
  },
  {
    name: 'reportingFormats',
    label: i18n('entities.scheduleManagementPlan.fields.reportingFormats'),
    schema: schemas.string(
      i18n('entities.scheduleManagementPlan.fields.reportingFormats'),
      {},
    ),
  },
  {
    name: 'releaseIterationLength',
    label: i18n('entities.scheduleManagementPlan.fields.releaseIterationLength'),
    schema: schemas.string(
      i18n('entities.scheduleManagementPlan.fields.releaseIterationLength'),
      {},
    ),
  },
  {
    name: 'controlThresholds',
    label: i18n('entities.scheduleManagementPlan.fields.controlThresholds'),
    schema: schemas.string(
      i18n('entities.scheduleManagementPlan.fields.controlThresholds'),
      {},
    ),
  },
  {
    name: 'unitsMeasure',
    label: i18n('entities.scheduleManagementPlan.fields.unitsMeasure'),
    schema: schemas.string(
      i18n('entities.scheduleManagementPlan.fields.unitsMeasure'),
      {},
    ),
  },
];