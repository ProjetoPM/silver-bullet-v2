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
  targetBenefits: yupFormSchemas.string(
    i18n('entities.benefitsManagementPlan.fields.targetBenefits'),
    {},
  ),
  strategicAlignment: yupFormSchemas.string(
    i18n('entities.benefitsManagementPlan.fields.strategicAlignment'),
    {},
  ),
  scheduleforBenefits: yupFormSchemas.string(
    i18n('entities.benefitsManagementPlan.fields.scheduleforBenefits'),
    {},
  ),
  benefitsOwner: yupFormSchemas.string(
    i18n('entities.benefitsManagementPlan.fields.benefitsOwner'),
    {},
  ),
  indicators: yupFormSchemas.string(
    i18n('entities.benefitsManagementPlan.fields.indicators'),
    {},
  ),
  premises: yupFormSchemas.string(
    i18n('entities.benefitsManagementPlan.fields.premises'),
    {},
  ),
  risks: yupFormSchemas.string(
    i18n('entities.benefitsManagementPlan.fields.risks'),
    {},
  ),
});

function BenefitsManagementPlanForm(props) {
  const { saveLoading } = props;

  const [initialValues] = useState(() => {
    const record = props.record || {};

    return {
      targetBenefits: record.targetBenefits,
      strategicAlignment: record.strategicAlignment,
      scheduleforBenefits: record.scheduleforBenefits,
      benefitsOwner: record.benefitsOwner,
      indicators: record.indicators,
      premises: record.premises,
      risks: record.risks,
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
            name="targetBenefits"
            label={i18n('entities.benefitsManagementPlan.fields.targetBenefits')}
          hint={i18n('entities.benefitsManagementPlan.hints.targetBenefits')}
            required={false}
          autoFocus
          />
        </div>
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
          <InputFormItem
            name="strategicAlignment"
            label={i18n('entities.benefitsManagementPlan.fields.strategicAlignment')}
          hint={i18n('entities.benefitsManagementPlan.hints.strategicAlignment')}
            required={false}
          />
        </div>
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
          <InputFormItem
            name="scheduleforBenefits"
            label={i18n('entities.benefitsManagementPlan.fields.scheduleforBenefits')}
          hint={i18n('entities.benefitsManagementPlan.hints.scheduleforBenefits')}
            required={false}
          />
        </div>
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
          <InputFormItem
            name="benefitsOwner"
            label={i18n('entities.benefitsManagementPlan.fields.benefitsOwner')}
          hint={i18n('entities.benefitsManagementPlan.hints.benefitsOwner')}
            required={false}
          />
        </div>
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
          <InputFormItem
            name="indicators"
            label={i18n('entities.benefitsManagementPlan.fields.indicators')}
          hint={i18n('entities.benefitsManagementPlan.hints.indicators')}
            required={false}
          />
        </div>
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
          <InputFormItem
            name="premises"
            label={i18n('entities.benefitsManagementPlan.fields.premises')}
          hint={i18n('entities.benefitsManagementPlan.hints.premises')}
            required={false}
          />
        </div>
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
          <InputFormItem
            name="risks"
            label={i18n('entities.benefitsManagementPlan.fields.risks')}
          hint={i18n('entities.benefitsManagementPlan.hints.risks')}
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

export default BenefitsManagementPlanForm;