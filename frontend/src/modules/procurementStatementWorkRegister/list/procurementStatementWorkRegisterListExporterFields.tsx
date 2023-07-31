import { i18n } from 'src/i18n';
import exporterRenders from 'src/modules/shared/exporter/exporterRenders';

export default [
  {
    name: 'id',
    label: i18n('entities.procurementStatementWorkRegister.fields.id'),
  },
  {
    name: 'descriptionItemPurchased',
    label: i18n('entities.procurementStatementWorkRegister.fields.descriptionItemPurchased'),
  },
  {
    name: 'associatedContractTypes',
    label: i18n('entities.procurementStatementWorkRegister.fields.associatedContractTypes'),
  },
  {
    name: 'vendorSelectionCriteria',
    label: i18n('entities.procurementStatementWorkRegister.fields.vendorSelectionCriteria'),
  },
  {
    name: 'restrictions',
    label: i18n('entities.procurementStatementWorkRegister.fields.restrictions'),
  },
  {
    name: 'premises',
    label: i18n('entities.procurementStatementWorkRegister.fields.premises'),
  },
  {
    name: 'mainDeliveriesSchedule',
    label: i18n('entities.procurementStatementWorkRegister.fields.mainDeliveriesSchedule'),
  },
  {
    name: 'additionalInformation',
    label: i18n('entities.procurementStatementWorkRegister.fields.additionalInformation'),
  },
  {
    name: 'procurementManagement',
    label: i18n('entities.procurementStatementWorkRegister.fields.procurementManagement'),
  },
  {
    name: 'createdAt',
    label: i18n('entities.procurementStatementWorkRegister.fields.createdAt'),
    render: exporterRenders.datetime(),
  },
  {
    name: 'updatedAt',
    label: i18n('entities.procurementStatementWorkRegister.fields.updatedAt'),
    render: exporterRenders.datetime(),
  },
];
