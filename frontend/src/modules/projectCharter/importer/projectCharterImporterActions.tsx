import importerActions from 'src/modules/shared/importer/importerActions';
import selectors from 'src/modules/projectCharter/importer/projectCharterImporterSelectors';
import ProjectCharterService from 'src/modules/projectCharter/projectCharterService';
import fields from 'src/modules/projectCharter/importer/projectCharterImporterFields';
import { i18n } from 'src/i18n';

const projectCharterImporterActions = importerActions(
  'PROJECTCHARTER_IMPORTER',
  selectors,
  ProjectCharterService.import,
  fields,
  i18n('entities.projectCharter.importer.fileName'),
);

export default projectCharterImporterActions;