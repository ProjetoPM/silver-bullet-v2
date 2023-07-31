import importerActions from 'src/modules/shared/importer/importerActions';
import selectors from 'src/modules/qualityChecklist/importer/qualityChecklistImporterSelectors';
import QualityChecklistService from 'src/modules/qualityChecklist/qualityChecklistService';
import fields from 'src/modules/qualityChecklist/importer/qualityChecklistImporterFields';
import { i18n } from 'src/i18n';

const qualityChecklistImporterActions = importerActions(
  'QUALITYCHECKLIST_IMPORTER',
  selectors,
  QualityChecklistService.import,
  fields,
  i18n('entities.qualityChecklist.importer.fileName'),
);

export default qualityChecklistImporterActions;