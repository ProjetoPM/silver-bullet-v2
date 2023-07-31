import importerActions from 'src/modules/shared/importer/importerActions';
import selectors from 'src/modules/procurementStatementWorkRegister/importer/procurementStatementWorkRegisterImporterSelectors';
import ProcurementStatementWorkRegisterService from 'src/modules/procurementStatementWorkRegister/procurementStatementWorkRegisterService';
import fields from 'src/modules/procurementStatementWorkRegister/importer/procurementStatementWorkRegisterImporterFields';
import { i18n } from 'src/i18n';

const procurementStatementWorkRegisterImporterActions = importerActions(
  'PROCUREMENTSTATEMENTWORKREGISTER_IMPORTER',
  selectors,
  ProcurementStatementWorkRegisterService.import,
  fields,
  i18n('entities.procurementStatementWorkRegister.importer.fileName'),
);

export default procurementStatementWorkRegisterImporterActions;