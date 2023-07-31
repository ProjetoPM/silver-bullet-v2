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
import * as yup from 'yup';

const schema = yup.object().shape({
  type: yupFormSchemas.string(
    i18n('entities.communicationsManagementPlan.fields.type'),
    {},
  ),
  nome: yupFormSchemas.string(
    i18n('entities.communicationsManagementPlan.fields.nome'),
    {},
  ),
  content: yupFormSchemas.string(
    i18n('entities.communicationsManagementPlan.fields.content'),
    {},
  ),
  distributionReason: yupFormSchemas.string(
    i18n('entities.communicationsManagementPlan.fields.distributionReason'),
    {},
  ),
  language: yupFormSchemas.string(
    i18n('entities.communicationsManagementPlan.fields.language'),
    {},
  ),
  channel: yupFormSchemas.string(
    i18n('entities.communicationsManagementPlan.fields.channel'),
    {},
  ),
  documentFormat: yupFormSchemas.string(
    i18n('entities.communicationsManagementPlan.fields.documentFormat'),
    {},
  ),
  method: yupFormSchemas.string(
    i18n('entities.communicationsManagementPlan.fields.method'),
    {},
  ),
  frequency: yupFormSchemas.string(
    i18n('entities.communicationsManagementPlan.fields.frequency'),
    {},
  ),
  allocatedResources: yupFormSchemas.string(
    i18n('entities.communicationsManagementPlan.fields.allocatedResources'),
    {},
  ),
  format: yupFormSchemas.string(
    i18n('entities.communicationsManagementPlan.fields.format'),
    {},
  ),
  local: yupFormSchemas.string(
    i18n('entities.communicationsManagementPlan.fields.local'),
    {},
  ),
});

function CommunicationsManagementPlanForm(props) {
  const { saveLoading } = props;

  const [initialValues] = useState(() => {
    const record = props.record || {};

    return {
      type: record.type,
      nome: record.nome,
      content: record.content,
      distributionReason: record.distributionReason,
      language: record.language,
      channel: record.channel,
      documentFormat: record.documentFormat,
      method: record.method,
      frequency: record.frequency,
      allocatedResources: record.allocatedResources,
      format: record.format,
      local: record.local,
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
            name="type"
            label={i18n('entities.communicationsManagementPlan.fields.type')}
          hint={i18n('entities.communicationsManagementPlan.hints.type')}
            required={false}
          autoFocus
          />
        </div>
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
          <InputFormItem
            name="nome"
            label={i18n('entities.communicationsManagementPlan.fields.nome')}
          hint={i18n('entities.communicationsManagementPlan.hints.nome')}
            required={false}
          />
        </div>
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
          <InputFormItem
            name="content"
            label={i18n('entities.communicationsManagementPlan.fields.content')}
          hint={i18n('entities.communicationsManagementPlan.hints.content')}
            required={false}
          />
        </div>
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
          <InputFormItem
            name="distributionReason"
            label={i18n('entities.communicationsManagementPlan.fields.distributionReason')}
          hint={i18n('entities.communicationsManagementPlan.hints.distributionReason')}
            required={false}
          />
        </div>
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
          <InputFormItem
            name="language"
            label={i18n('entities.communicationsManagementPlan.fields.language')}
          hint={i18n('entities.communicationsManagementPlan.hints.language')}
            required={false}
          />
        </div>
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
          <InputFormItem
            name="channel"
            label={i18n('entities.communicationsManagementPlan.fields.channel')}
          hint={i18n('entities.communicationsManagementPlan.hints.channel')}
            required={false}
          />
        </div>
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
          <InputFormItem
            name="documentFormat"
            label={i18n('entities.communicationsManagementPlan.fields.documentFormat')}
          hint={i18n('entities.communicationsManagementPlan.hints.documentFormat')}
            required={false}
          />
        </div>
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
          <InputFormItem
            name="method"
            label={i18n('entities.communicationsManagementPlan.fields.method')}
          hint={i18n('entities.communicationsManagementPlan.hints.method')}
            required={false}
          />
        </div>
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
          <InputFormItem
            name="frequency"
            label={i18n('entities.communicationsManagementPlan.fields.frequency')}
          hint={i18n('entities.communicationsManagementPlan.hints.frequency')}
            required={false}
          />
        </div>
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
          <InputFormItem
            name="allocatedResources"
            label={i18n('entities.communicationsManagementPlan.fields.allocatedResources')}
          hint={i18n('entities.communicationsManagementPlan.hints.allocatedResources')}
            required={false}
          />
        </div>
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
          <InputFormItem
            name="format"
            label={i18n('entities.communicationsManagementPlan.fields.format')}
          hint={i18n('entities.communicationsManagementPlan.hints.format')}
            required={false}
          />
        </div>
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
          <InputFormItem
            name="local"
            label={i18n('entities.communicationsManagementPlan.fields.local')}
          hint={i18n('entities.communicationsManagementPlan.hints.local')}
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

export default CommunicationsManagementPlanForm;
