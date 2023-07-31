import { i18n } from 'src/i18n';
import exporterRenders from 'src/modules/shared/exporter/exporterRenders';

export default [
  {
    name: 'id',
    label: i18n('entities.teamPerformanceEvaluation.fields.id'),
  },
  {
    name: 'teamMemberName',
    label: i18n('entities.teamPerformanceEvaluation.fields.teamMemberName'),
  },
  {
    name: 'jobRole',
    label: i18n('entities.teamPerformanceEvaluation.fields.jobRole'),
  },
  {
    name: 'functionProject',
    label: i18n('entities.teamPerformanceEvaluation.fields.functionProject'),
  },
  {
    name: 'evaluationDate',
    label: i18n('entities.teamPerformanceEvaluation.fields.evaluationDate'),
  },
  {
    name: 'reviewEvaluation',
    label: i18n('entities.teamPerformanceEvaluation.fields.reviewEvaluation'),
  },
  {
    name: 'strongPoints',
    label: i18n('entities.teamPerformanceEvaluation.fields.strongPoints'),
  },
  {
    name: 'opportunitiesImprovement',
    label: i18n('entities.teamPerformanceEvaluation.fields.opportunitiesImprovement'),
  },
  {
    name: 'developmentPlan',
    label: i18n('entities.teamPerformanceEvaluation.fields.developmentPlan'),
  },
  {
    name: 'alreadyDeveloped',
    label: i18n('entities.teamPerformanceEvaluation.fields.alreadyDeveloped'),
  },
  {
    name: 'externalcomments',
    label: i18n('entities.teamPerformanceEvaluation.fields.externalcomments'),
  },
  {
    name: 'teamMatesComments',
    label: i18n('entities.teamPerformanceEvaluation.fields.teamMatesComments'),
  },
  {
    name: 'evaluatorComments',
    label: i18n('entities.teamPerformanceEvaluation.fields.evaluatorComments'),
  },
  {
    name: 'createdAt',
    label: i18n('entities.teamPerformanceEvaluation.fields.createdAt'),
    render: exporterRenders.datetime(),
  },
  {
    name: 'updatedAt',
    label: i18n('entities.teamPerformanceEvaluation.fields.updatedAt'),
    render: exporterRenders.datetime(),
  },
];
