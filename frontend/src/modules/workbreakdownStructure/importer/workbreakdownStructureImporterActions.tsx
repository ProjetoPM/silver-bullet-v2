import importerActions from 'src/modules/shared/importer/importerActions';
import selectors from 'src/modules/workbreakdownStructure/importer/workbreakdownStructureImporterSelectors';
import WorkbreakdownStructureService from 'src/modules/workbreakdownStructure/workbreakdownStructureService';
import fields from 'src/modules/workbreakdownStructure/importer/workbreakdownStructureImporterFields';
import { i18n } from 'src/i18n';

const workbreakdownStructureImporterActions = importerActions(
  'WORKBREAKDOWNSTRUCTURE_IMPORTER',
  selectors,
  WorkbreakdownStructureService.import,
  fields,
  i18n('entities.workbreakdownStructure.importer.fileName'),
);

export default workbreakdownStructureImporterActions;