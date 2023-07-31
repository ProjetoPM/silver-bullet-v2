import { i18n } from 'src/i18n';
import exporterRenders from 'src/modules/shared/exporter/exporterRenders';

export default [
  {
    name: 'id',
    label: i18n('entities.costEstimates.fields.id'),
  },
  {
    name: 'estimatedCost',
    label: i18n('entities.costEstimates.fields.estimatedCost'),
  },
  {
    name: 'cumulativeEstimatedCost',
    label: i18n('entities.costEstimates.fields.cumulativeEstimatedCost'),
    render: exporterRenders.decimal(),
  },
  {
    name: 'replantedCost',
    label: i18n('entities.costEstimates.fields.replantedCost'),
    render: exporterRenders.decimal(),
  },
  {
    name: 'contingencyReserve',
    label: i18n('entities.costEstimates.fields.contingencyReserve'),
    render: exporterRenders.decimal(),
  },
  {
    name: 'sumWorkPackages',
    label: i18n('entities.costEstimates.fields.sumWorkPackages'),
    render: exporterRenders.decimal(),
  },
  {
    name: 'contingencyReservePackages',
    label: i18n('entities.costEstimates.fields.contingencyReservePackages'),
    render: exporterRenders.decimal(),
  },
  {
    name: 'baseline',
    label: i18n('entities.costEstimates.fields.baseline'),
  },
  {
    name: 'budget',
    label: i18n('entities.costEstimates.fields.budget'),
    render: exporterRenders.decimal(),
  },
  {
    name: 'cumulativeReplantedCost',
    label: i18n('entities.costEstimates.fields.cumulativeReplantedCost'),
    render: exporterRenders.decimal(),
  },
  {
    name: 'realCost',
    label: i18n('entities.costEstimates.fields.realCost'),
    render: exporterRenders.decimal(),
  },
  {
    name: 'cumulativeRealCost',
    label: i18n('entities.costEstimates.fields.cumulativeRealCost'),
    render: exporterRenders.decimal(),
  },
  {
    name: 'managementReserve',
    label: i18n('entities.costEstimates.fields.managementReserve'),
    render: exporterRenders.decimal(),
  },
  {
    name: 'createdAt',
    label: i18n('entities.costEstimates.fields.createdAt'),
    render: exporterRenders.datetime(),
  },
  {
    name: 'updatedAt',
    label: i18n('entities.costEstimates.fields.updatedAt'),
    render: exporterRenders.datetime(),
  },
];
