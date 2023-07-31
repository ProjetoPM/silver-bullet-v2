import { i18n } from 'src/i18n';
import exporterRenders from 'src/modules/shared/exporter/exporterRenders';

export default [
  {
    name: 'id',
    label: i18n('entities.costManagementPlan.fields.id'),
  },
  {
    name: 'processesManagingProjectCosts',
    label: i18n('entities.costManagementPlan.fields.processesManagingProjectCosts'),
  },
  {
    name: 'levelAccuracy',
    label: i18n('entities.costManagementPlan.fields.levelAccuracy'),
  },
  {
    name: 'organizationalProceduresLinks',
    label: i18n('entities.costManagementPlan.fields.organizationalProceduresLinks'),
  },
  {
    name: 'rulesPerformanceMeasurement',
    label: i18n('entities.costManagementPlan.fields.rulesPerformanceMeasurement'),
  },
  {
    name: 'unitsMeasureUsed',
    label: i18n('entities.costManagementPlan.fields.unitsMeasureUsed'),
  },
  {
    name: 'levelPrecision',
    label: i18n('entities.costManagementPlan.fields.levelPrecision'),
  },
  {
    name: 'controlThresholds',
    label: i18n('entities.costManagementPlan.fields.controlThresholds'),
  },
  {
    name: 'reportingFormats',
    label: i18n('entities.costManagementPlan.fields.reportingFormats'),
  },
  {
    name: 'createdAt',
    label: i18n('entities.costManagementPlan.fields.createdAt'),
    render: exporterRenders.datetime(),
  },
  {
    name: 'updatedAt',
    label: i18n('entities.costManagementPlan.fields.updatedAt'),
    render: exporterRenders.datetime(),
  },
];
