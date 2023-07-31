import importerActions from 'src/modules/shared/importer/importerActions';
import selectors from 'src/modules/requirementDocumentation/importer/requirementDocumentationImporterSelectors';
import RequirementDocumentationService from 'src/modules/requirementDocumentation/requirementDocumentationService';
import fields from 'src/modules/requirementDocumentation/importer/requirementDocumentationImporterFields';
import { i18n } from 'src/i18n';

const requirementDocumentationImporterActions = importerActions(
  'REQUIREMENTDOCUMENTATION_IMPORTER',
  selectors,
  RequirementDocumentationService.import,
  fields,
  i18n('entities.requirementDocumentation.importer.fileName'),
);

export default requirementDocumentationImporterActions;