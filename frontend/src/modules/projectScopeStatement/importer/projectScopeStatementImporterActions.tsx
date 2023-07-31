import importerActions from 'src/modules/shared/importer/importerActions';
import selectors from 'src/modules/projectScopeStatement/importer/projectScopeStatementImporterSelectors';
import ProjectScopeStatementService from 'src/modules/projectScopeStatement/projectScopeStatementService';
import fields from 'src/modules/projectScopeStatement/importer/projectScopeStatementImporterFields';
import { i18n } from 'src/i18n';

const projectScopeStatementImporterActions = importerActions(
  'PROJECTSCOPESTATEMENT_IMPORTER',
  selectors,
  ProjectScopeStatementService.import,
  fields,
  i18n('entities.projectScopeStatement.importer.fileName'),
);

export default projectScopeStatementImporterActions;