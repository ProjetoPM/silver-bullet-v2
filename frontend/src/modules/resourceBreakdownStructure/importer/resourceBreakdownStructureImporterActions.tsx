import importerActions from 'src/modules/shared/importer/importerActions';
import selectors from 'src/modules/resourceBreakdownStructure/importer/resourceBreakdownStructureImporterSelectors';
import ResourceBreakdownStructureService from 'src/modules/resourceBreakdownStructure/resourceBreakdownStructureService';
import fields from 'src/modules/resourceBreakdownStructure/importer/resourceBreakdownStructureImporterFields';
import { i18n } from 'src/i18n';

const resourceBreakdownStructureImporterActions = importerActions(
  'RESOURCEBREAKDOWNSTRUCTURE_IMPORTER',
  selectors,
  ResourceBreakdownStructureService.import,
  fields,
  i18n('entities.resourceBreakdownStructure.importer.fileName'),
);

export default resourceBreakdownStructureImporterActions;