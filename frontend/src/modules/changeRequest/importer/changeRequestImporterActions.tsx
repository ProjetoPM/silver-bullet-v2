import importerActions from 'src/modules/shared/importer/importerActions';
import selectors from 'src/modules/changeRequest/importer/changeRequestImporterSelectors';
import ChangeRequestService from 'src/modules/changeRequest/changeRequestService';
import fields from 'src/modules/changeRequest/importer/changeRequestImporterFields';
import { i18n } from 'src/i18n';

const changeRequestImporterActions = importerActions(
  'CHANGEREQUEST_IMPORTER',
  selectors,
  ChangeRequestService.import,
  fields,
  i18n('entities.changeRequest.importer.fileName'),
);

export default changeRequestImporterActions;