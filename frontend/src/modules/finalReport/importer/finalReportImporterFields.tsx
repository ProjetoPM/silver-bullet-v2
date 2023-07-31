import schemas from 'src/modules/shared/yup/yupImporterSchemas';
import { i18n } from 'src/i18n';

export default [
  {
    name: 'summaryLevelDescription',
    label: i18n('entities.finalReport.fields.summaryLevelDescription'),
    schema: schemas.string(
      i18n('entities.finalReport.fields.summaryLevelDescription'),
      {},
    ),
  },
  {
    name: 'scopeObjectivesCriteria',
    label: i18n('entities.finalReport.fields.scopeObjectivesCriteria'),
    schema: schemas.string(
      i18n('entities.finalReport.fields.scopeObjectivesCriteria'),
      {},
    ),
  },
  {
    name: 'qualityObjectives',
    label: i18n('entities.finalReport.fields.qualityObjectives'),
    schema: schemas.string(
      i18n('entities.finalReport.fields.qualityObjectives'),
      {},
    ),
  },
  {
    name: 'costObjectives',
    label: i18n('entities.finalReport.fields.costObjectives'),
    schema: schemas.string(
      i18n('entities.finalReport.fields.costObjectives'),
      {},
    ),
  },
  {
    name: 'scheduleObjectives',
    label: i18n('entities.finalReport.fields.scheduleObjectives'),
    schema: schemas.string(
      i18n('entities.finalReport.fields.scheduleObjectives'),
      {},
    ),
  },
  {
    name: 'summaryValidation',
    label: i18n('entities.finalReport.fields.summaryValidation'),
    schema: schemas.string(
      i18n('entities.finalReport.fields.summaryValidation'),
      {},
    ),
  },
  {
    name: 'summaryResults',
    label: i18n('entities.finalReport.fields.summaryResults'),
    schema: schemas.string(
      i18n('entities.finalReport.fields.summaryResults'),
      {},
    ),
  },
  {
    name: 'summaryRisksIssues',
    label: i18n('entities.finalReport.fields.summaryRisksIssues'),
    schema: schemas.string(
      i18n('entities.finalReport.fields.summaryRisksIssues'),
      {},
    ),
  },
];