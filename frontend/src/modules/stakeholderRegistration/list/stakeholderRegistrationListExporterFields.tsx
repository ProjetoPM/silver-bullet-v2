import { i18n } from 'src/i18n';
import exporterRenders from 'src/modules/shared/exporter/exporterRenders';

export default [
  {
    name: 'id',
    label: i18n('entities.stakeholderRegistration.fields.id'),
  },
  {
    name: 'nome',
    label: i18n('entities.stakeholderRegistration.fields.nome'),
  },
  {
    name: 'tipo',
    label: i18n('entities.stakeholderRegistration.fields.tipo'),
  },
  {
    name: 'mainRoleintheProject',
    label: i18n('entities.stakeholderRegistration.fields.mainRoleintheProject'),
  },
  {
    name: 'organization',
    label: i18n('entities.stakeholderRegistration.fields.organization'),
  },
  {
    name: 'positioninOrganization',
    label: i18n('entities.stakeholderRegistration.fields.positioninOrganization'),
  },
  {
    name: 'email',
    label: i18n('entities.stakeholderRegistration.fields.email'),
  },
  {
    name: 'mainProjectResponsibility',
    label: i18n('entities.stakeholderRegistration.fields.mainProjectResponsibility'),
  },
  {
    name: 'phone',
    label: i18n('entities.stakeholderRegistration.fields.phone'),
  },
  {
    name: 'workplace',
    label: i18n('entities.stakeholderRegistration.fields.workplace'),
  },
  {
    name: 'essentialRequirements',
    label: i18n('entities.stakeholderRegistration.fields.essentialRequirements'),
  },
  {
    name: 'mainExpectations',
    label: i18n('entities.stakeholderRegistration.fields.mainExpectations'),
  },
  {
    name: 'phaseofGreaterInterest',
    label: i18n('entities.stakeholderRegistration.fields.phaseofGreaterInterest'),
  },
  {
    name: 'observations',
    label: i18n('entities.stakeholderRegistration.fields.observations'),
  },
  {
    name: 'createdAt',
    label: i18n('entities.stakeholderRegistration.fields.createdAt'),
    render: exporterRenders.datetime(),
  },
  {
    name: 'updatedAt',
    label: i18n('entities.stakeholderRegistration.fields.updatedAt'),
    render: exporterRenders.datetime(),
  },
];
