import schemas from 'src/modules/shared/yup/yupImporterSchemas';
import { i18n } from 'src/i18n';import stakeholderRegistrationEnumerators from 'src/modules/stakeholderRegistration/stakeholderRegistrationEnumerators';

export default [
  {
    name: 'nome',
    label: i18n('entities.stakeholderRegistration.fields.nome'),
    schema: schemas.string(
      i18n('entities.stakeholderRegistration.fields.nome'),
      {},
    ),
  },
  {
    name: 'tipo',
    label: i18n('entities.stakeholderRegistration.fields.tipo'),
    schema: schemas.enumerator(
      i18n('entities.stakeholderRegistration.fields.tipo'),
      {
        "options": stakeholderRegistrationEnumerators.tipo
      },
    ),
  },
  {
    name: 'mainRoleintheProject',
    label: i18n('entities.stakeholderRegistration.fields.mainRoleintheProject'),
    schema: schemas.enumerator(
      i18n('entities.stakeholderRegistration.fields.mainRoleintheProject'),
      {
        "options": stakeholderRegistrationEnumerators.mainRoleintheProject
      },
    ),
  },
  {
    name: 'organization',
    label: i18n('entities.stakeholderRegistration.fields.organization'),
    schema: schemas.string(
      i18n('entities.stakeholderRegistration.fields.organization'),
      {},
    ),
  },
  {
    name: 'positioninOrganization',
    label: i18n('entities.stakeholderRegistration.fields.positioninOrganization'),
    schema: schemas.string(
      i18n('entities.stakeholderRegistration.fields.positioninOrganization'),
      {},
    ),
  },
  {
    name: 'email',
    label: i18n('entities.stakeholderRegistration.fields.email'),
    schema: schemas.string(
      i18n('entities.stakeholderRegistration.fields.email'),
      {},
    ),
  },
  {
    name: 'mainProjectResponsibility',
    label: i18n('entities.stakeholderRegistration.fields.mainProjectResponsibility'),
    schema: schemas.string(
      i18n('entities.stakeholderRegistration.fields.mainProjectResponsibility'),
      {},
    ),
  },
  {
    name: 'phone',
    label: i18n('entities.stakeholderRegistration.fields.phone'),
    schema: schemas.string(
      i18n('entities.stakeholderRegistration.fields.phone'),
      {},
    ),
  },
  {
    name: 'workplace',
    label: i18n('entities.stakeholderRegistration.fields.workplace'),
    schema: schemas.string(
      i18n('entities.stakeholderRegistration.fields.workplace'),
      {},
    ),
  },
  {
    name: 'essentialRequirements',
    label: i18n('entities.stakeholderRegistration.fields.essentialRequirements'),
    schema: schemas.string(
      i18n('entities.stakeholderRegistration.fields.essentialRequirements'),
      {},
    ),
  },
  {
    name: 'mainExpectations',
    label: i18n('entities.stakeholderRegistration.fields.mainExpectations'),
    schema: schemas.string(
      i18n('entities.stakeholderRegistration.fields.mainExpectations'),
      {},
    ),
  },
  {
    name: 'phaseofGreaterInterest',
    label: i18n('entities.stakeholderRegistration.fields.phaseofGreaterInterest'),
    schema: schemas.string(
      i18n('entities.stakeholderRegistration.fields.phaseofGreaterInterest'),
      {},
    ),
  },
  {
    name: 'observations',
    label: i18n('entities.stakeholderRegistration.fields.observations'),
    schema: schemas.string(
      i18n('entities.stakeholderRegistration.fields.observations'),
      {},
    ),
  },
];