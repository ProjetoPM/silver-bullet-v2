import schemas from 'src/modules/shared/yup/yupImporterSchemas';
import { i18n } from 'src/i18n';

export default [
  {
    name: 'providername',
    label: i18n('entities.closedProcurementDocumentation.fields.providername'),
    schema: schemas.string(
      i18n('entities.closedProcurementDocumentation.fields.providername'),
      {},
    ),
  },
  {
    name: 'mainDeliveriesProject',
    label: i18n('entities.closedProcurementDocumentation.fields.mainDeliveriesProject'),
    schema: schemas.string(
      i18n('entities.closedProcurementDocumentation.fields.mainDeliveriesProject'),
      {},
    ),
  },
  {
    name: 'validatorComments',
    label: i18n('entities.closedProcurementDocumentation.fields.validatorComments'),
    schema: schemas.string(
      i18n('entities.closedProcurementDocumentation.fields.validatorComments'),
      {},
    ),
  },
  {
    name: 'supplierRepresentative',
    label: i18n('entities.closedProcurementDocumentation.fields.supplierRepresentative'),
    schema: schemas.string(
      i18n('entities.closedProcurementDocumentation.fields.supplierRepresentative'),
      {},
    ),
  },
  {
    name: 'closingDate',
    label: i18n('entities.closedProcurementDocumentation.fields.closingDate'),
    schema: schemas.string(
      i18n('entities.closedProcurementDocumentation.fields.closingDate'),
      {},
    ),
  },
];