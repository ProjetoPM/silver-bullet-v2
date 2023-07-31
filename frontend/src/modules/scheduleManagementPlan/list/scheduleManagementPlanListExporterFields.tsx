import { i18n } from 'src/i18n';
import exporterRenders from 'src/modules/shared/exporter/exporterRenders';

export default [
  {
    name: 'id',
    label: i18n('entities.scheduleManagementPlan.fields.id'),
  },
  {
    name: 'projectScheduleModelDevelopment',
    label: i18n('entities.scheduleManagementPlan.fields.projectScheduleModelDevelopment'),
  },
  {
    name: 'levelAccuracy',
    label: i18n('entities.scheduleManagementPlan.fields.levelAccuracy'),
  },
  {
    name: 'organizationalProceduresLinks',
    label: i18n('entities.scheduleManagementPlan.fields.organizationalProceduresLinks'),
  },
  {
    name: 'projectScheduleModelMaintenance',
    label: i18n('entities.scheduleManagementPlan.fields.projectScheduleModelMaintenance'),
  },
  {
    name: 'performanceMeasurementRules',
    label: i18n('entities.scheduleManagementPlan.fields.performanceMeasurementRules'),
  },
  {
    name: 'reportingFormats',
    label: i18n('entities.scheduleManagementPlan.fields.reportingFormats'),
  },
  {
    name: 'releaseIterationLength',
    label: i18n('entities.scheduleManagementPlan.fields.releaseIterationLength'),
  },
  {
    name: 'controlThresholds',
    label: i18n('entities.scheduleManagementPlan.fields.controlThresholds'),
  },
  {
    name: 'unitsMeasure',
    label: i18n('entities.scheduleManagementPlan.fields.unitsMeasure'),
  },
  {
    name: 'createdAt',
    label: i18n('entities.scheduleManagementPlan.fields.createdAt'),
    render: exporterRenders.datetime(),
  },
  {
    name: 'updatedAt',
    label: i18n('entities.scheduleManagementPlan.fields.updatedAt'),
    render: exporterRenders.datetime(),
  },
];
