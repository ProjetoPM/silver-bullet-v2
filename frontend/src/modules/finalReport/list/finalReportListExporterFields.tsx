import { i18n } from 'src/i18n';
import exporterRenders from 'src/modules/shared/exporter/exporterRenders';

export default [
  {
    name: 'id',
    label: i18n('entities.finalReport.fields.id'),
  },
  {
    name: 'summaryLevelDescription',
    label: i18n('entities.finalReport.fields.summaryLevelDescription'),
  },
  {
    name: 'scopeObjectivesCriteria',
    label: i18n('entities.finalReport.fields.scopeObjectivesCriteria'),
  },
  {
    name: 'qualityObjectives',
    label: i18n('entities.finalReport.fields.qualityObjectives'),
  },
  {
    name: 'costObjectives',
    label: i18n('entities.finalReport.fields.costObjectives'),
  },
  {
    name: 'scheduleObjectives',
    label: i18n('entities.finalReport.fields.scheduleObjectives'),
  },
  {
    name: 'summaryValidation',
    label: i18n('entities.finalReport.fields.summaryValidation'),
  },
  {
    name: 'summaryResults',
    label: i18n('entities.finalReport.fields.summaryResults'),
  },
  {
    name: 'summaryRisksIssues',
    label: i18n('entities.finalReport.fields.summaryRisksIssues'),
  },
  {
    name: 'createdAt',
    label: i18n('entities.finalReport.fields.createdAt'),
    render: exporterRenders.datetime(),
  },
  {
    name: 'updatedAt',
    label: i18n('entities.finalReport.fields.updatedAt'),
    render: exporterRenders.datetime(),
  },
];
