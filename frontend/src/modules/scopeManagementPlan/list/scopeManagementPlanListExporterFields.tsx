import { i18n } from 'src/i18n';
import exporterRenders from 'src/modules/shared/exporter/exporterRenders';

export default [
  {
    name: 'id',
    label: i18n('entities.scopeManagementPlan.fields.id'),
  },
  {
    name: 'projectScopeSpecificationProcess',
    label: i18n('entities.scopeManagementPlan.fields.projectScopeSpecificationProcess'),
  },
  {
    name: 'processesMaintainingWBS',
    label: i18n('entities.scopeManagementPlan.fields.processesMaintainingWBS'),
  },
  {
    name: 'deliveryAcceptanceProcess',
    label: i18n('entities.scopeManagementPlan.fields.deliveryAcceptanceProcess'),
  },
  {
    name: 'scopeChangeManagementPlan',
    label: i18n('entities.scopeManagementPlan.fields.scopeChangeManagementPlan'),
  },
  {
    name: 'processMaintained',
    label: i18n('entities.scopeManagementPlan.fields.processMaintained'),
  },
  {
    name: 'createdAt',
    label: i18n('entities.scopeManagementPlan.fields.createdAt'),
    render: exporterRenders.datetime(),
  },
  {
    name: 'updatedAt',
    label: i18n('entities.scopeManagementPlan.fields.updatedAt'),
    render: exporterRenders.datetime(),
  },
];
