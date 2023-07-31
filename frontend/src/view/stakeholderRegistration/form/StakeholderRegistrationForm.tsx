import { faSave } from '@fortawesome/free-regular-svg-icons';
import {
  faTimes,
  faUndo,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { yupResolver } from '@hookform/resolvers/yup';
import React, { useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { i18n } from 'src/i18n';
import yupFormSchemas from 'src/modules/shared/yup/yupFormSchemas';
import InputFormItem from 'src/view/shared/form/items/InputFormItem';
import SelectFormItem from 'src/view/shared/form/items/SelectFormItem';
import stakeholderRegistrationEnumerators from 'src/modules/stakeholderRegistration/stakeholderRegistrationEnumerators';
import * as yup from 'yup';

const schema = yup.object().shape({
  nome: yupFormSchemas.string(
    i18n('entities.stakeholderRegistration.fields.nome'),
    {},
  ),
  tipo: yupFormSchemas.enumerator(
    i18n('entities.stakeholderRegistration.fields.tipo'),
    {
      "options": stakeholderRegistrationEnumerators.tipo
    },
  ),
  mainRoleintheProject: yupFormSchemas.enumerator(
    i18n('entities.stakeholderRegistration.fields.mainRoleintheProject'),
    {
      "options": stakeholderRegistrationEnumerators.mainRoleintheProject
    },
  ),
  organization: yupFormSchemas.string(
    i18n('entities.stakeholderRegistration.fields.organization'),
    {},
  ),
  positioninOrganization: yupFormSchemas.string(
    i18n('entities.stakeholderRegistration.fields.positioninOrganization'),
    {},
  ),
  email: yupFormSchemas.string(
    i18n('entities.stakeholderRegistration.fields.email'),
    {},
  ),
  mainProjectResponsibility: yupFormSchemas.string(
    i18n('entities.stakeholderRegistration.fields.mainProjectResponsibility'),
    {},
  ),
  phone: yupFormSchemas.string(
    i18n('entities.stakeholderRegistration.fields.phone'),
    {},
  ),
  workplace: yupFormSchemas.string(
    i18n('entities.stakeholderRegistration.fields.workplace'),
    {},
  ),
  essentialRequirements: yupFormSchemas.string(
    i18n('entities.stakeholderRegistration.fields.essentialRequirements'),
    {},
  ),
  mainExpectations: yupFormSchemas.string(
    i18n('entities.stakeholderRegistration.fields.mainExpectations'),
    {},
  ),
  phaseofGreaterInterest: yupFormSchemas.string(
    i18n('entities.stakeholderRegistration.fields.phaseofGreaterInterest'),
    {},
  ),
  observations: yupFormSchemas.string(
    i18n('entities.stakeholderRegistration.fields.observations'),
    {},
  ),
});

function StakeholderRegistrationForm(props) {
  const { saveLoading } = props;

  const [initialValues] = useState(() => {
    const record = props.record || {};

    return {
      nome: record.nome,
      tipo: record.tipo,
      mainRoleintheProject: record.mainRoleintheProject,
      organization: record.organization,
      positioninOrganization: record.positioninOrganization,
      email: record.email,
      mainProjectResponsibility: record.mainProjectResponsibility,
      phone: record.phone,
      workplace: record.workplace,
      essentialRequirements: record.essentialRequirements,
      mainExpectations: record.mainExpectations,
      phaseofGreaterInterest: record.phaseofGreaterInterest,
      observations: record.observations,
    };
  });

  const form = useForm({
    resolver: yupResolver(schema),
    mode: 'all',
    defaultValues: initialValues,
  });

  const onSubmit = (values) => {
    props.onSubmit(props.record?.id, values);
  };

  const onReset = () => {
    Object.keys(initialValues).forEach((key) => {
      form.setValue(key, initialValues[key]);
    });
  };

  return (
    <FormProvider {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <div className="w-full sm:w-md md:w-md lg:w-md">
          <InputFormItem
            name="nome"
            label={i18n('entities.stakeholderRegistration.fields.nome')}
            required={false}
          autoFocus
          />
        </div>
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
          <SelectFormItem
            name="tipo"
            label={i18n('entities.stakeholderRegistration.fields.tipo')}
            options={stakeholderRegistrationEnumerators.tipo.map(
              (value) => ({
                value,
                label: i18n(
                  `entities.stakeholderRegistration.enumerators.tipo.${value}`,
                ),
              }),
            )}
            required={false}
          />
        </div>
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
          <SelectFormItem
            name="mainRoleintheProject"
            label={i18n('entities.stakeholderRegistration.fields.mainRoleintheProject')}
            options={stakeholderRegistrationEnumerators.mainRoleintheProject.map(
              (value) => ({
                value,
                label: i18n(
                  `entities.stakeholderRegistration.enumerators.mainRoleintheProject.${value}`,
                ),
              }),
            )}
            required={false}
          />
        </div>
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
          <InputFormItem
            name="organization"
            label={i18n('entities.stakeholderRegistration.fields.organization')}
            required={false}
          />
        </div>
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
          <InputFormItem
            name="positioninOrganization"
            label={i18n('entities.stakeholderRegistration.fields.positioninOrganization')}
            required={false}
          />
        </div>
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
          <InputFormItem
            name="email"
            label={i18n('entities.stakeholderRegistration.fields.email')}
            required={false}
          />
        </div>
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
          <InputFormItem
            name="mainProjectResponsibility"
            label={i18n('entities.stakeholderRegistration.fields.mainProjectResponsibility')}
            required={false}
          />
        </div>
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
          <InputFormItem
            name="phone"
            label={i18n('entities.stakeholderRegistration.fields.phone')}
            required={false}
          />
        </div>
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
          <InputFormItem
            name="workplace"
            label={i18n('entities.stakeholderRegistration.fields.workplace')}
            required={false}
          />
        </div>
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
          <InputFormItem
            name="essentialRequirements"
            label={i18n('entities.stakeholderRegistration.fields.essentialRequirements')}
            required={false}
          />
        </div>
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
          <InputFormItem
            name="mainExpectations"
            label={i18n('entities.stakeholderRegistration.fields.mainExpectations')}
            required={false}
          />
        </div>
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
          <InputFormItem
            name="phaseofGreaterInterest"
            label={i18n('entities.stakeholderRegistration.fields.phaseofGreaterInterest')}
            required={false}
          />
        </div>
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
          <InputFormItem
            name="observations"
            label={i18n('entities.stakeholderRegistration.fields.observations')}
            required={false}
          />
        </div>

        <div className="pt-4">
          <button
            className="mr-2 mb-2 text-sm disabled:opacity-50 disabled:cursor-default px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600"
            disabled={saveLoading}
            type="button"
            onClick={form.handleSubmit(onSubmit)}
          >
            <FontAwesomeIcon
              className="mr-2"
              icon={faSave}
            />
            {i18n('common.save')}
          </button>

          <button
            disabled={saveLoading}
            onClick={onReset}
            className="mr-2 mb-2 text-sm disabled:opacity-50 disabled:cursor-default px-4 py-2 tracking-wide dark:border-gray-800 dark:bg-gray-800 dark:hover:bg-gray-600 dark:text-white text-gray-700 border border-gray-300 transition-colors duration-200 transform bg-white rounded-md hover:bg-gray-100 focus:outline-none focus:bg-gray-100"
            type="button"
          >
            <FontAwesomeIcon
              className="mr-2"
              icon={faUndo}
            />
            {i18n('common.reset')}
          </button>

          {props.onCancel ? (
            <button
              disabled={saveLoading}
              onClick={() => props.onCancel()}
              className="mr-2 mb-2 text-sm disabled:opacity-50 disabled:cursor-default px-4 py-2 tracking-wide dark:border-gray-800 dark:bg-gray-800 dark:hover:bg-gray-600 dark:text-white text-gray-700 border border-gray-300 transition-colors duration-200 transform bg-white rounded-md hover:bg-gray-100 focus:outline-none focus:bg-gray-100"
              type="button"
            >
              <FontAwesomeIcon
                className="mr-2"
                icon={faTimes}
              />
              {i18n('common.cancel')}
            </button>
          ) : null}
        </div>
      </form>
    </FormProvider>
  );
}

export default StakeholderRegistrationForm;
