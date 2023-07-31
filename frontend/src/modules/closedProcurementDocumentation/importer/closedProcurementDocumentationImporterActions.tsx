import importerActions from 'src/modules/shared/importer/importerActions';
import selectors from 'src/modules/closedProcurementDocumentation/importer/closedProcurementDocumentationImporterSelectors';
import ClosedProcurementDocumentationService from 'src/modules/closedProcurementDocumentation/closedProcurementDocumentationService';
import fields from 'src/modules/closedProcurementDocumentation/importer/closedProcurementDocumentationImporterFields';
import { i18n } from 'src/i18n';

const closedProcurementDocumentationImporterActions = importerActions(
  'CLOSEDPROCUREMENTDOCUMENTATION_IMPORTER',
  selectors,
  ClosedProcurementDocumentationService.import,
  fields,
  i18n('entities.closedProcurementDocumentation.importer.fileName'),
);

export default closedProcurementDocumentationImporterActions;