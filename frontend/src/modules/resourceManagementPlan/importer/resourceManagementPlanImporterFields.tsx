import schemas from 'src/modules/shared/yup/yupImporterSchemas';
import { i18n } from 'src/i18n';

export default [
  {
    name: 'rolesResponsibilities',
    label: i18n('entities.resourceManagementPlan.fields.rolesResponsibilities'),
    schema: schemas.string(
      i18n('entities.resourceManagementPlan.fields.rolesResponsibilities'),
      {},
    ),
  },
  {
    name: 'projectOrganizationCharts',
    label: i18n('entities.resourceManagementPlan.fields.projectOrganizationCharts'),
    schema: schemas.string(
      i18n('entities.resourceManagementPlan.fields.projectOrganizationCharts'),
      {},
    ),
  },
  {
    name: 'teamDevelopment',
    label: i18n('entities.resourceManagementPlan.fields.teamDevelopment'),
    schema: schemas.string(
      i18n('entities.resourceManagementPlan.fields.teamDevelopment'),
      {},
    ),
  },
  {
    name: 'identificationResources',
    label: i18n('entities.resourceManagementPlan.fields.identificationResources'),
    schema: schemas.string(
      i18n('entities.resourceManagementPlan.fields.identificationResources'),
      {},
    ),
  },
  {
    name: 'projectResourceManagement',
    label: i18n('entities.resourceManagementPlan.fields.projectResourceManagement'),
    schema: schemas.string(
      i18n('entities.resourceManagementPlan.fields.projectResourceManagement'),
      {},
    ),
  },
  {
    name: 'training',
    label: i18n('entities.resourceManagementPlan.fields.training'),
    schema: schemas.string(
      i18n('entities.resourceManagementPlan.fields.training'),
      {},
    ),
  },
  {
    name: 'resourceControl',
    label: i18n('entities.resourceManagementPlan.fields.resourceControl'),
    schema: schemas.string(
      i18n('entities.resourceManagementPlan.fields.resourceControl'),
      {},
    ),
  },
  {
    name: 'recognitionPlan',
    label: i18n('entities.resourceManagementPlan.fields.recognitionPlan'),
    schema: schemas.string(
      i18n('entities.resourceManagementPlan.fields.recognitionPlan'),
      {},
    ),
  },
];