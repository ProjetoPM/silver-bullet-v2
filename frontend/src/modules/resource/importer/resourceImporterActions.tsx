import importerActions from 'src/modules/shared/importer/importerActions';
import selectors from 'src/modules/resource/importer/resourceImporterSelectors';
import ResourceService from 'src/modules/resource/resourceService';
import fields from 'src/modules/resource/importer/resourceImporterFields';
import { i18n } from 'src/i18n';

const resourceImporterActions = importerActions(
  'RESOURCE_IMPORTER',
  selectors,
  ResourceService.import,
  fields,
  i18n('entities.resource.importer.fileName'),
);

export default resourceImporterActions;