import importerActions from 'src/modules/shared/importer/importerActions';
import selectors from 'src/modules/scheduleNetworkDiagram/importer/scheduleNetworkDiagramImporterSelectors';
import ScheduleNetworkDiagramService from 'src/modules/scheduleNetworkDiagram/scheduleNetworkDiagramService';
import fields from 'src/modules/scheduleNetworkDiagram/importer/scheduleNetworkDiagramImporterFields';
import { i18n } from 'src/i18n';

const scheduleNetworkDiagramImporterActions = importerActions(
  'SCHEDULENETWORKDIAGRAM_IMPORTER',
  selectors,
  ScheduleNetworkDiagramService.import,
  fields,
  i18n('entities.scheduleNetworkDiagram.importer.fileName'),
);

export default scheduleNetworkDiagramImporterActions;