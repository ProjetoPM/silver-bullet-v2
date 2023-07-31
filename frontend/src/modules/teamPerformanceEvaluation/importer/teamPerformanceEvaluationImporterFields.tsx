import schemas from 'src/modules/shared/yup/yupImporterSchemas';
import { i18n } from 'src/i18n';

export default [
  {
    name: 'teamMemberName',
    label: i18n('entities.teamPerformanceEvaluation.fields.teamMemberName'),
    schema: schemas.string(
      i18n('entities.teamPerformanceEvaluation.fields.teamMemberName'),
      {},
    ),
  },
  {
    name: 'jobRole',
    label: i18n('entities.teamPerformanceEvaluation.fields.jobRole'),
    schema: schemas.string(
      i18n('entities.teamPerformanceEvaluation.fields.jobRole'),
      {},
    ),
  },
  {
    name: 'functionProject',
    label: i18n('entities.teamPerformanceEvaluation.fields.functionProject'),
    schema: schemas.string(
      i18n('entities.teamPerformanceEvaluation.fields.functionProject'),
      {},
    ),
  },
  {
    name: 'evaluationDate',
    label: i18n('entities.teamPerformanceEvaluation.fields.evaluationDate'),
    schema: schemas.string(
      i18n('entities.teamPerformanceEvaluation.fields.evaluationDate'),
      {},
    ),
  },
  {
    name: 'reviewEvaluation',
    label: i18n('entities.teamPerformanceEvaluation.fields.reviewEvaluation'),
    schema: schemas.string(
      i18n('entities.teamPerformanceEvaluation.fields.reviewEvaluation'),
      {},
    ),
  },
  {
    name: 'strongPoints',
    label: i18n('entities.teamPerformanceEvaluation.fields.strongPoints'),
    schema: schemas.string(
      i18n('entities.teamPerformanceEvaluation.fields.strongPoints'),
      {},
    ),
  },
  {
    name: 'opportunitiesImprovement',
    label: i18n('entities.teamPerformanceEvaluation.fields.opportunitiesImprovement'),
    schema: schemas.string(
      i18n('entities.teamPerformanceEvaluation.fields.opportunitiesImprovement'),
      {},
    ),
  },
  {
    name: 'developmentPlan',
    label: i18n('entities.teamPerformanceEvaluation.fields.developmentPlan'),
    schema: schemas.string(
      i18n('entities.teamPerformanceEvaluation.fields.developmentPlan'),
      {},
    ),
  },
  {
    name: 'alreadyDeveloped',
    label: i18n('entities.teamPerformanceEvaluation.fields.alreadyDeveloped'),
    schema: schemas.string(
      i18n('entities.teamPerformanceEvaluation.fields.alreadyDeveloped'),
      {},
    ),
  },
  {
    name: 'externalcomments',
    label: i18n('entities.teamPerformanceEvaluation.fields.externalcomments'),
    schema: schemas.string(
      i18n('entities.teamPerformanceEvaluation.fields.externalcomments'),
      {},
    ),
  },
  {
    name: 'teamMatesComments',
    label: i18n('entities.teamPerformanceEvaluation.fields.teamMatesComments'),
    schema: schemas.string(
      i18n('entities.teamPerformanceEvaluation.fields.teamMatesComments'),
      {},
    ),
  },
  {
    name: 'evaluatorComments',
    label: i18n('entities.teamPerformanceEvaluation.fields.evaluatorComments'),
    schema: schemas.string(
      i18n('entities.teamPerformanceEvaluation.fields.evaluatorComments'),
      {},
    ),
  },
];