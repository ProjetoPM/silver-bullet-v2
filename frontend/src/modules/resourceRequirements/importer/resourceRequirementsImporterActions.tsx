import importerActions from 'src/modules/shared/importer/importerActions';
import selectors from 'src/modules/resourceRequirements/importer/resourceRequirementsImporterSelectors';
import ResourceRequirementsService from 'src/modules/resourceRequirements/resourceRequirementsService';
import fields from 'src/modules/resourceRequirements/importer/resourceRequirementsImporterFields';
import { i18n } from 'src/i18n';

const resourceRequirementsImporterActions = importerActions(
  'RESOURCEREQUIREMENTS_IMPORTER',
  selectors,
  ResourceRequirementsService.import,
  fields,
  i18n('entities.resourceRequirements.importer.fileName'),
);

export default resourceRequirementsImporterActions;