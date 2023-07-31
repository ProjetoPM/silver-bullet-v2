import schemas from 'src/modules/shared/yup/yupImporterSchemas';
import { i18n } from 'src/i18n';

export default [
  {
    name: 'descriptionItemPurchased',
    label: i18n('entities.procurementStatementWorkRegister.fields.descriptionItemPurchased'),
    schema: schemas.string(
      i18n('entities.procurementStatementWorkRegister.fields.descriptionItemPurchased'),
      {},
    ),
  },
  {
    name: 'associatedContractTypes',
    label: i18n('entities.procurementStatementWorkRegister.fields.associatedContractTypes'),
    schema: schemas.string(
      i18n('entities.procurementStatementWorkRegister.fields.associatedContractTypes'),
      {},
    ),
  },
  {
    name: 'vendorSelectionCriteria',
    label: i18n('entities.procurementStatementWorkRegister.fields.vendorSelectionCriteria'),
    schema: schemas.string(
      i18n('entities.procurementStatementWorkRegister.fields.vendorSelectionCriteria'),
      {},
    ),
  },
  {
    name: 'restrictions',
    label: i18n('entities.procurementStatementWorkRegister.fields.restrictions'),
    schema: schemas.string(
      i18n('entities.procurementStatementWorkRegister.fields.restrictions'),
      {},
    ),
  },
  {
    name: 'premises',
    label: i18n('entities.procurementStatementWorkRegister.fields.premises'),
    schema: schemas.string(
      i18n('entities.procurementStatementWorkRegister.fields.premises'),
      {},
    ),
  },
  {
    name: 'mainDeliveriesSchedule',
    label: i18n('entities.procurementStatementWorkRegister.fields.mainDeliveriesSchedule'),
    schema: schemas.string(
      i18n('entities.procurementStatementWorkRegister.fields.mainDeliveriesSchedule'),
      {},
    ),
  },
  {
    name: 'additionalInformation',
    label: i18n('entities.procurementStatementWorkRegister.fields.additionalInformation'),
    schema: schemas.string(
      i18n('entities.procurementStatementWorkRegister.fields.additionalInformation'),
      {},
    ),
  },
  {
    name: 'procurementManagement',
    label: i18n('entities.procurementStatementWorkRegister.fields.procurementManagement'),
    schema: schemas.string(
      i18n('entities.procurementStatementWorkRegister.fields.procurementManagement'),
      {},
    ),
  },
];