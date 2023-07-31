import { i18n } from 'src/i18n';
import exporterRenders from 'src/modules/shared/exporter/exporterRenders';

export default [
  {
    name: 'id',
    label: i18n('entities.procurementManagementPlan.fields.id'),
  },
  {
    name: 'productsServicesWillBeObtained',
    label: i18n('entities.procurementManagementPlan.fields.productsServicesWillBeObtained'),
  },
  {
    name: 'howProcurementCoordinated',
    label: i18n('entities.procurementManagementPlan.fields.howProcurementCoordinated'),
  },
  {
    name: 'timetableProcurementActivities',
    label: i18n('entities.procurementManagementPlan.fields.timetableProcurementActivities'),
  },
  {
    name: 'procurementMetrics',
    label: i18n('entities.procurementManagementPlan.fields.procurementMetrics'),
  },
  {
    name: 'constraintsAssumptions',
    label: i18n('entities.procurementManagementPlan.fields.constraintsAssumptions'),
  },
  {
    name: 'stakeholderRolesResponsibilities',
    label: i18n('entities.procurementManagementPlan.fields.stakeholderRolesResponsibilities'),
  },
  {
    name: 'theLegalJurisdiction',
    label: i18n('entities.procurementManagementPlan.fields.theLegalJurisdiction'),
  },
  {
    name: 'independentEstimates',
    label: i18n('entities.procurementManagementPlan.fields.independentEstimates'),
  },
  {
    name: 'riskManagementIssues',
    label: i18n('entities.procurementManagementPlan.fields.riskManagementIssues'),
  },
  {
    name: 'prequalifiedSellers',
    label: i18n('entities.procurementManagementPlan.fields.prequalifiedSellers'),
  },
  {
    name: 'procurementStrategy',
    label: i18n('entities.procurementManagementPlan.fields.procurementStrategy'),
  },
  {
    name: 'createdAt',
    label: i18n('entities.procurementManagementPlan.fields.createdAt'),
    render: exporterRenders.datetime(),
  },
  {
    name: 'updatedAt',
    label: i18n('entities.procurementManagementPlan.fields.updatedAt'),
    render: exporterRenders.datetime(),
  },
];
