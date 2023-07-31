import importerActions from 'src/modules/shared/importer/importerActions';
import selectors from 'src/modules/costEstimates/importer/costEstimatesImporterSelectors';
import CostEstimatesService from 'src/modules/costEstimates/costEstimatesService';
import fields from 'src/modules/costEstimates/importer/costEstimatesImporterFields';
import { i18n } from 'src/i18n';

const costEstimatesImporterActions = importerActions(
  'COSTESTIMATES_IMPORTER',
  selectors,
  CostEstimatesService.import,
  fields,
  i18n('entities.costEstimates.importer.fileName'),
);

export default costEstimatesImporterActions;