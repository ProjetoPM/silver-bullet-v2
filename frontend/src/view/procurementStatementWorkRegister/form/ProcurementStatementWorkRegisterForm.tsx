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
  descriptionItemPurchased: yupFormSchemas.string(
    i18n('entities.procurementStatementWorkRegister.fields.descriptionItemPurchased'),
    {},
  ),
  associatedContractTypes: yupFormSchemas.string(
    i18n('entities.procurementStatementWorkRegister.fields.associatedContractTypes'),
    {},
  ),
  vendorSelectionCriteria: yupFormSchemas.string(
    i18n('entities.procurementStatementWorkRegister.fields.vendorSelectionCriteria'),
    {},
  ),
  restrictions: yupFormSchemas.string(
    i18n('entities.procurementStatementWorkRegister.fields.restrictions'),
    {},
  ),
  premises: yupFormSchemas.string(
    i18n('entities.procurementStatementWorkRegister.fields.premises'),
    {},
  ),
  mainDeliveriesSchedule: yupFormSchemas.string(
    i18n('entities.procurementStatementWorkRegister.fields.mainDeliveriesSchedule'),
    {},
  ),
  additionalInformation: yupFormSchemas.string(
    i18n('entities.procurementStatementWorkRegister.fields.additionalInformation'),
    {},
  ),
  procurementManagement: yupFormSchemas.string(
    i18n('entities.procurementStatementWorkRegister.fields.procurementManagement'),
    {},
  ),
});

function ProcurementStatementWorkRegisterForm(props) {
  const { saveLoading } = props;

  const [initialValues] = useState(() => {
    const record = props.record || {};

    return {
      descriptionItemPurchased: record.descriptionItemPurchased,
      associatedContractTypes: record.associatedContractTypes,
      vendorSelectionCriteria: record.vendorSelectionCriteria,
      restrictions: record.restrictions,
      premises: record.premises,
      mainDeliveriesSchedule: record.mainDeliveriesSchedule,
      additionalInformation: record.additionalInformation,
      procurementManagement: record.procurementManagement,
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
            name="descriptionItemPurchased"
            label={i18n('entities.procurementStatementWorkRegister.fields.descriptionItemPurchased')}
          hint={i18n('entities.procurementStatementWorkRegister.hints.descriptionItemPurchased')}
            required={false}
          autoFocus
          />
        </div>
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
          <InputFormItem
            name="associatedContractTypes"
            label={i18n('entities.procurementStatementWorkRegister.fields.associatedContractTypes')}
          hint={i18n('entities.procurementStatementWorkRegister.hints.associatedContractTypes')}
            required={false}
          />
        </div>
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
          <InputFormItem
            name="vendorSelectionCriteria"
            label={i18n('entities.procurementStatementWorkRegister.fields.vendorSelectionCriteria')}
          hint={i18n('entities.procurementStatementWorkRegister.hints.vendorSelectionCriteria')}
            required={false}
          />
        </div>
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
          <InputFormItem
            name="restrictions"
            label={i18n('entities.procurementStatementWorkRegister.fields.restrictions')}
          hint={i18n('entities.procurementStatementWorkRegister.hints.restrictions')}
            required={false}
          />
        </div>
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
          <InputFormItem
            name="premises"
            label={i18n('entities.procurementStatementWorkRegister.fields.premises')}
          hint={i18n('entities.procurementStatementWorkRegister.hints.premises')}
            required={false}
          />
        </div>
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
          <InputFormItem
            name="mainDeliveriesSchedule"
            label={i18n('entities.procurementStatementWorkRegister.fields.mainDeliveriesSchedule')}
          hint={i18n('entities.procurementStatementWorkRegister.hints.mainDeliveriesSchedule')}
            required={false}
          />
        </div>
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
          <InputFormItem
            name="additionalInformation"
            label={i18n('entities.procurementStatementWorkRegister.fields.additionalInformation')}
          hint={i18n('entities.procurementStatementWorkRegister.hints.additionalInformation')}
            required={false}
          />
        </div>
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
          <InputFormItem
            name="procurementManagement"
            label={i18n('entities.procurementStatementWorkRegister.fields.procurementManagement')}
          hint={i18n('entities.procurementStatementWorkRegister.hints.procurementManagement')}
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

export default ProcurementStatementWorkRegisterForm;
