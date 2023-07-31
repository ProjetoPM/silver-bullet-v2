import importerActions from 'src/modules/shared/importer/importerActions';
import selectors from 'src/modules/finalReport/importer/finalReportImporterSelectors';
import FinalReportService from 'src/modules/finalReport/finalReportService';
import fields from 'src/modules/finalReport/importer/finalReportImporterFields';
import { i18n } from 'src/i18n';

const finalReportImporterActions = importerActions(
  'FINALREPORT_IMPORTER',
  selectors,
  FinalReportService.import,
  fields,
  i18n('entities.finalReport.importer.fileName'),
);

export default finalReportImporterActions;