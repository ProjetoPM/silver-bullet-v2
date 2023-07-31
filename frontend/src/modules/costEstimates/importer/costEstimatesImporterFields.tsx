import schemas from 'src/modules/shared/yup/yupImporterSchemas';
import { i18n } from 'src/i18n';

export default [
  {
    name: 'estimatedCost',
    label: i18n('entities.costEstimates.fields.estimatedCost'),
    schema: schemas.string(
      i18n('entities.costEstimates.fields.estimatedCost'),
      {},
    ),
  },
  {
    name: 'cumulativeEstimatedCost',
    label: i18n('entities.costEstimates.fields.cumulativeEstimatedCost'),
    schema: schemas.decimal(
      i18n('entities.costEstimates.fields.cumulativeEstimatedCost'),
      {},
    ),
  },
  {
    name: 'replantedCost',
    label: i18n('entities.costEstimates.fields.replantedCost'),
    schema: schemas.decimal(
      i18n('entities.costEstimates.fields.replantedCost'),
      {},
    ),
  },
  {
    name: 'contingencyReserve',
    label: i18n('entities.costEstimates.fields.contingencyReserve'),
    schema: schemas.decimal(
      i18n('entities.costEstimates.fields.contingencyReserve'),
      {},
    ),
  },
  {
    name: 'sumWorkPackages',
    label: i18n('entities.costEstimates.fields.sumWorkPackages'),
    schema: schemas.decimal(
      i18n('entities.costEstimates.fields.sumWorkPackages'),
      {},
    ),
  },
  {
    name: 'contingencyReservePackages',
    label: i18n('entities.costEstimates.fields.contingencyReservePackages'),
    schema: schemas.decimal(
      i18n('entities.costEstimates.fields.contingencyReservePackages'),
      {},
    ),
  },
  {
    name: 'baseline',
    label: i18n('entities.costEstimates.fields.baseline'),
    schema: schemas.string(
      i18n('entities.costEstimates.fields.baseline'),
      {},
    ),
  },
  {
    name: 'budget',
    label: i18n('entities.costEstimates.fields.budget'),
    schema: schemas.decimal(
      i18n('entities.costEstimates.fields.budget'),
      {},
    ),
  },
  {
    name: 'cumulativeReplantedCost',
    label: i18n('entities.costEstimates.fields.cumulativeReplantedCost'),
    schema: schemas.decimal(
      i18n('entities.costEstimates.fields.cumulativeReplantedCost'),
      {},
    ),
  },
  {
    name: 'realCost',
    label: i18n('entities.costEstimates.fields.realCost'),
    schema: schemas.decimal(
      i18n('entities.costEstimates.fields.realCost'),
      {},
    ),
  },
  {
    name: 'cumulativeRealCost',
    label: i18n('entities.costEstimates.fields.cumulativeRealCost'),
    schema: schemas.decimal(
      i18n('entities.costEstimates.fields.cumulativeRealCost'),
      {},
    ),
  },
  {
    name: 'managementReserve',
    label: i18n('entities.costEstimates.fields.managementReserve'),
    schema: schemas.decimal(
      i18n('entities.costEstimates.fields.managementReserve'),
      {},
    ),
  },
];