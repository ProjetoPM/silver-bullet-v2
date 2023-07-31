import { i18n } from 'src/i18n';
import exporterRenders from 'src/modules/shared/exporter/exporterRenders';

export default [
  {
    name: 'id',
    label: i18n('entities.resourceManagementPlan.fields.id'),
  },
  {
    name: 'rolesResponsibilities',
    label: i18n('entities.resourceManagementPlan.fields.rolesResponsibilities'),
  },
  {
    name: 'projectOrganizationCharts',
    label: i18n('entities.resourceManagementPlan.fields.projectOrganizationCharts'),
  },
  {
    name: 'teamDevelopment',
    label: i18n('entities.resourceManagementPlan.fields.teamDevelopment'),
  },
  {
    name: 'identificationResources',
    label: i18n('entities.resourceManagementPlan.fields.identificationResources'),
  },
  {
    name: 'projectResourceManagement',
    label: i18n('entities.resourceManagementPlan.fields.projectResourceManagement'),
  },
  {
    name: 'training',
    label: i18n('entities.resourceManagementPlan.fields.training'),
  },
  {
    name: 'resourceControl',
    label: i18n('entities.resourceManagementPlan.fields.resourceControl'),
  },
  {
    name: 'recognitionPlan',
    label: i18n('entities.resourceManagementPlan.fields.recognitionPlan'),
  },
  {
    name: 'createdAt',
    label: i18n('entities.resourceManagementPlan.fields.createdAt'),
    render: exporterRenders.datetime(),
  },
  {
    name: 'updatedAt',
    label: i18n('entities.resourceManagementPlan.fields.updatedAt'),
    render: exporterRenders.datetime(),
  },
];
