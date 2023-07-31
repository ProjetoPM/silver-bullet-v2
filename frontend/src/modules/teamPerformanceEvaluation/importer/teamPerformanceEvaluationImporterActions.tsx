import importerActions from 'src/modules/shared/importer/importerActions';
import selectors from 'src/modules/teamPerformanceEvaluation/importer/teamPerformanceEvaluationImporterSelectors';
import TeamPerformanceEvaluationService from 'src/modules/teamPerformanceEvaluation/teamPerformanceEvaluationService';
import fields from 'src/modules/teamPerformanceEvaluation/importer/teamPerformanceEvaluationImporterFields';
import { i18n } from 'src/i18n';

const teamPerformanceEvaluationImporterActions = importerActions(
  'TEAMPERFORMANCEEVALUATION_IMPORTER',
  selectors,
  TeamPerformanceEvaluationService.import,
  fields,
  i18n('entities.teamPerformanceEvaluation.importer.fileName'),
);

export default teamPerformanceEvaluationImporterActions;