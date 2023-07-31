import importerActions from 'src/modules/shared/importer/importerActions';
import selectors from 'src/modules/projectClosure/importer/projectClosureImporterSelectors';
import ProjectClosureService from 'src/modules/projectClosure/projectClosureService';
import fields from 'src/modules/projectClosure/importer/projectClosureImporterFields';
import { i18n } from 'src/i18n';

const projectClosureImporterActions = importerActions(
  'PROJECTCLOSURE_IMPORTER',
  selectors,
  ProjectClosureService.import,
  fields,
  i18n('entities.projectClosure.importer.fileName'),
);

export default projectClosureImporterActions;