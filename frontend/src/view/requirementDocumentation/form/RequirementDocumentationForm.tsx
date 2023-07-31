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
import InputNumberFormItem from 'src/view/shared/form/items/InputNumberFormItem';
import * as yup from 'yup';

const schema = yup.object().shape({
  associatedID: yupFormSchemas.string(
    i18n('entities.requirementDocumentation.fields.associatedID'),
    {},
  ),
  businessNeeds: yupFormSchemas.string(
    i18n('entities.requirementDocumentation.fields.businessNeeds'),
    {},
  ),
  requirementDescription: yupFormSchemas.string(
    i18n('entities.requirementDocumentation.fields.requirementDescription'),
    {},
  ),
  version: yupFormSchemas.string(
    i18n('entities.requirementDocumentation.fields.version'),
    {},
  ),
  phase: yupFormSchemas.string(
    i18n('entities.requirementDocumentation.fields.phase'),
    {},
  ),
  associatedDelivery: yupFormSchemas.string(
    i18n('entities.requirementDocumentation.fields.associatedDelivery'),
    {},
  ),
  type: yupFormSchemas.string(
    i18n('entities.requirementDocumentation.fields.type'),
    {},
  ),
  requester: yupFormSchemas.string(
    i18n('entities.requirementDocumentation.fields.requester'),
    {},
  ),
  complexity: yupFormSchemas.integer(
    i18n('entities.requirementDocumentation.fields.complexity'),
    {},
  ),
  responsible: yupFormSchemas.string(
    i18n('entities.requirementDocumentation.fields.responsible'),
    {},
  ),
  validity: yupFormSchemas.string(
    i18n('entities.requirementDocumentation.fields.validity'),
    {},
  ),
  priority: yupFormSchemas.string(
    i18n('entities.requirementDocumentation.fields.priority'),
    {},
  ),
  acceptanceCriteria: yupFormSchemas.string(
    i18n('entities.requirementDocumentation.fields.acceptanceCriteria'),
    {},
  ),
  supportingDocumentation: yupFormSchemas.string(
    i18n('entities.requirementDocumentation.fields.supportingDocumentation'),
    {},
  ),
  requirementSituation: yupFormSchemas.string(
    i18n('entities.requirementDocumentation.fields.requirementSituation'),
    {},
  ),
});

function RequirementDocumentationForm(props) {
  const { saveLoading } = props;

  const [initialValues] = useState(() => {
    const record = props.record || {};

    return {
      associatedID: record.associatedID,
      businessNeeds: record.businessNeeds,
      requirementDescription: record.requirementDescription,
      version: record.version,
      phase: record.phase,
      associatedDelivery: record.associatedDelivery,
      type: record.type,
      requester: record.requester,
      complexity: record.complexity,
      responsible: record.responsible,
      validity: record.validity,
      priority: record.priority,
      acceptanceCriteria: record.acceptanceCriteria,
      supportingDocumentation: record.supportingDocumentation,
      requirementSituation: record.requirementSituation,
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
            name="associatedID"
            label={i18n('entities.requirementDocumentation.fields.associatedID')}
          hint={i18n('entities.requirementDocumentation.hints.associatedID')}
            required={false}
          autoFocus
          />
        </div>
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
          <InputFormItem
            name="businessNeeds"
            label={i18n('entities.requirementDocumentation.fields.businessNeeds')}
          hint={i18n('entities.requirementDocumentation.hints.businessNeeds')}
            required={false}
          />
        </div>
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
          <InputFormItem
            name="requirementDescription"
            label={i18n('entities.requirementDocumentation.fields.requirementDescription')}
          hint={i18n('entities.requirementDocumentation.hints.requirementDescription')}
            required={false}
          />
        </div>
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
          <InputFormItem
            name="version"
            label={i18n('entities.requirementDocumentation.fields.version')}
          hint={i18n('entities.requirementDocumentation.hints.version')}
            required={false}
          />
        </div>
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
          <InputFormItem
            name="phase"
            label={i18n('entities.requirementDocumentation.fields.phase')}
          hint={i18n('entities.requirementDocumentation.hints.phase')}
            required={false}
          />
        </div>
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
          <InputFormItem
            name="associatedDelivery"
            label={i18n('entities.requirementDocumentation.fields.associatedDelivery')}
          hint={i18n('entities.requirementDocumentation.hints.associatedDelivery')}
            required={false}
          />
        </div>
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
          <InputFormItem
            name="type"
            label={i18n('entities.requirementDocumentation.fields.type')}
          hint={i18n('entities.requirementDocumentation.hints.type')}
            required={false}
          />
        </div>
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
          <InputFormItem
            name="requester"
            label={i18n('entities.requirementDocumentation.fields.requester')}
          hint={i18n('entities.requirementDocumentation.hints.requester')}
            required={false}
          />
        </div>
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
          <InputNumberFormItem
            name="complexity"
            label={i18n('entities.requirementDocumentation.fields.complexity')}
          hint={i18n('entities.requirementDocumentation.hints.complexity')}  
            required={false}
          />
        </div>
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
          <InputFormItem
            name="responsible"
            label={i18n('entities.requirementDocumentation.fields.responsible')}
          hint={i18n('entities.requirementDocumentation.hints.responsible')}
            required={false}
          />
        </div>
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
          <InputFormItem
            name="validity"
            label={i18n('entities.requirementDocumentation.fields.validity')}
          hint={i18n('entities.requirementDocumentation.hints.validity')}
            required={false}
          />
        </div>
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
          <InputFormItem
            name="priority"
            label={i18n('entities.requirementDocumentation.fields.priority')}
          hint={i18n('entities.requirementDocumentation.hints.priority')}
            required={false}
          />
        </div>
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
          <InputFormItem
            name="acceptanceCriteria"
            label={i18n('entities.requirementDocumentation.fields.acceptanceCriteria')}
          hint={i18n('entities.requirementDocumentation.hints.acceptanceCriteria')}
            required={false}
          />
        </div>
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
          <InputFormItem
            name="supportingDocumentation"
            label={i18n('entities.requirementDocumentation.fields.supportingDocumentation')}
          hint={i18n('entities.requirementDocumentation.hints.supportingDocumentation')}
            required={false}
          />
        </div>
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
          <InputFormItem
            name="requirementSituation"
            label={i18n('entities.requirementDocumentation.fields.requirementSituation')}
          hint={i18n('entities.requirementDocumentation.hints.requirementSituation')}
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

export default RequirementDocumentationForm;
