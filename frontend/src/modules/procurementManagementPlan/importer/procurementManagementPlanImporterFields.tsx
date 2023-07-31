import schemas from 'src/modules/shared/yup/yupImporterSchemas';
import { i18n } from 'src/i18n';

export default [
  {
    name: 'productsServicesWillBeObtained',
    label: i18n('entities.procurementManagementPlan.fields.productsServicesWillBeObtained'),
    schema: schemas.string(
      i18n('entities.procurementManagementPlan.fields.productsServicesWillBeObtained'),
      {},
    ),
  },
  {
    name: 'howProcurementCoordinated',
    label: i18n('entities.procurementManagementPlan.fields.howProcurementCoordinated'),
    schema: schemas.string(
      i18n('entities.procurementManagementPlan.fields.howProcurementCoordinated'),
      {},
    ),
  },
  {
    name: 'timetableProcurementActivities',
    label: i18n('entities.procurementManagementPlan.fields.timetableProcurementActivities'),
    schema: schemas.string(
      i18n('entities.procurementManagementPlan.fields.timetableProcurementActivities'),
      {},
    ),
  },
  {
    name: 'procurementMetrics',
    label: i18n('entities.procurementManagementPlan.fields.procurementMetrics'),
    schema: schemas.string(
      i18n('entities.procurementManagementPlan.fields.procurementMetrics'),
      {},
    ),
  },
  {
    name: 'constraintsAssumptions',
    label: i18n('entities.procurementManagementPlan.fields.constraintsAssumptions'),
    schema: schemas.string(
      i18n('entities.procurementManagementPlan.fields.constraintsAssumptions'),
      {},
    ),
  },
  {
    name: 'stakeholderRolesResponsibilities',
    label: i18n('entities.procurementManagementPlan.fields.stakeholderRolesResponsibilities'),
    schema: schemas.string(
      i18n('entities.procurementManagementPlan.fields.stakeholderRolesResponsibilities'),
      {},
    ),
  },
  {
    name: 'theLegalJurisdiction',
    label: i18n('entities.procurementManagementPlan.fields.theLegalJurisdiction'),
    schema: schemas.string(
      i18n('entities.procurementManagementPlan.fields.theLegalJurisdiction'),
      {},
    ),
  },
  {
    name: 'independentEstimates',
    label: i18n('entities.procurementManagementPlan.fields.independentEstimates'),
    schema: schemas.string(
      i18n('entities.procurementManagementPlan.fields.independentEstimates'),
      {},
    ),
  },
  {
    name: 'riskManagementIssues',
    label: i18n('entities.procurementManagementPlan.fields.riskManagementIssues'),
    schema: schemas.string(
      i18n('entities.procurementManagementPlan.fields.riskManagementIssues'),
      {},
    ),
  },
  {
    name: 'prequalifiedSellers',
    label: i18n('entities.procurementManagementPlan.fields.prequalifiedSellers'),
    schema: schemas.string(
      i18n('entities.procurementManagementPlan.fields.prequalifiedSellers'),
      {},
    ),
  },
  {
    name: 'procurementStrategy',
    label: i18n('entities.procurementManagementPlan.fields.procurementStrategy'),
    schema: schemas.string(
      i18n('entities.procurementManagementPlan.fields.procurementStrategy'),
      {},
    ),
  },
];