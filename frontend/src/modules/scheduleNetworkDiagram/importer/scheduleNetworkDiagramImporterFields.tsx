import schemas from 'src/modules/shared/yup/yupImporterSchemas';
import { i18n } from 'src/i18n';import scheduleNetworkDiagramEnumerators from 'src/modules/scheduleNetworkDiagram/scheduleNetworkDiagramEnumerators';

export default [
  {
    name: 'activityName',
    label: i18n('entities.scheduleNetworkDiagram.fields.activityName'),
    schema: schemas.string(
      i18n('entities.scheduleNetworkDiagram.fields.activityName'),
      {},
    ),
  },
  {
    name: 'predecessorActivity',
    label: i18n('entities.scheduleNetworkDiagram.fields.predecessorActivity'),
    schema: schemas.enumerator(
      i18n('entities.scheduleNetworkDiagram.fields.predecessorActivity'),
      {
        "options": scheduleNetworkDiagramEnumerators.predecessorActivity
      },
    ),
  },
];