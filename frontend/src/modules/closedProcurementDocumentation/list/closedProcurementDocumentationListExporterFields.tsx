import { i18n } from 'src/i18n';
import exporterRenders from 'src/modules/shared/exporter/exporterRenders';

export default [
  {
    name: 'id',
    label: i18n('entities.closedProcurementDocumentation.fields.id'),
  },
  {
    name: 'providername',
    label: i18n('entities.closedProcurementDocumentation.fields.providername'),
  },
  {
    name: 'mainDeliveriesProject',
    label: i18n('entities.closedProcurementDocumentation.fields.mainDeliveriesProject'),
  },
  {
    name: 'validatorComments',
    label: i18n('entities.closedProcurementDocumentation.fields.validatorComments'),
  },
  {
    name: 'supplierRepresentative',
    label: i18n('entities.closedProcurementDocumentation.fields.supplierRepresentative'),
  },
  {
    name: 'closingDate',
    label: i18n('entities.closedProcurementDocumentation.fields.closingDate'),
  },
  {
    name: 'createdAt',
    label: i18n('entities.closedProcurementDocumentation.fields.createdAt'),
    render: exporterRenders.datetime(),
  },
  {
    name: 'updatedAt',
    label: i18n('entities.closedProcurementDocumentation.fields.updatedAt'),
    render: exporterRenders.datetime(),
  },
];
