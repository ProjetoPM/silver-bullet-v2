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
  estimatedCost: yupFormSchemas.string(
    i18n('entities.costEstimates.fields.estimatedCost'),
    {},
  ),
  cumulativeEstimatedCost: yupFormSchemas.decimal(
    i18n('entities.costEstimates.fields.cumulativeEstimatedCost'),
    {},
  ),
  replantedCost: yupFormSchemas.decimal(
    i18n('entities.costEstimates.fields.replantedCost'),
    {},
  ),
  contingencyReserve: yupFormSchemas.decimal(
    i18n('entities.costEstimates.fields.contingencyReserve'),
    {},
  ),
  sumWorkPackages: yupFormSchemas.decimal(
    i18n('entities.costEstimates.fields.sumWorkPackages'),
    {},
  ),
  contingencyReservePackages: yupFormSchemas.decimal(
    i18n('entities.costEstimates.fields.contingencyReservePackages'),
    {},
  ),
  baseline: yupFormSchemas.string(
    i18n('entities.costEstimates.fields.baseline'),
    {},
  ),
  budget: yupFormSchemas.decimal(
    i18n('entities.costEstimates.fields.budget'),
    {},
  ),
  cumulativeReplantedCost: yupFormSchemas.decimal(
    i18n('entities.costEstimates.fields.cumulativeReplantedCost'),
    {},
  ),
  realCost: yupFormSchemas.decimal(
    i18n('entities.costEstimates.fields.realCost'),
    {},
  ),
  cumulativeRealCost: yupFormSchemas.decimal(
    i18n('entities.costEstimates.fields.cumulativeRealCost'),
    {},
  ),
  managementReserve: yupFormSchemas.decimal(
    i18n('entities.costEstimates.fields.managementReserve'),
    {},
  ),
});

function CostEstimatesForm(props) {
  const { saveLoading } = props;

  const [initialValues] = useState(() => {
    const record = props.record || {};

    return {
      estimatedCost: record.estimatedCost,
      cumulativeEstimatedCost: record.cumulativeEstimatedCost,
      replantedCost: record.replantedCost,
      contingencyReserve: record.contingencyReserve,
      sumWorkPackages: record.sumWorkPackages,
      contingencyReservePackages: record.contingencyReservePackages,
      baseline: record.baseline,
      budget: record.budget,
      cumulativeReplantedCost: record.cumulativeReplantedCost,
      realCost: record.realCost,
      cumulativeRealCost: record.cumulativeRealCost,
      managementReserve: record.managementReserve,
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
            name="estimatedCost"
            label={i18n('entities.costEstimates.fields.estimatedCost')}
          hint={i18n('entities.costEstimates.hints.estimatedCost')}
            required={false}
          autoFocus
          />
        </div>
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
          <InputFormItem
            name="cumulativeEstimatedCost"
            label={i18n('entities.costEstimates.fields.cumulativeEstimatedCost')}  
            required={false}
          />
        </div>
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
          <InputFormItem
            name="replantedCost"
            label={i18n('entities.costEstimates.fields.replantedCost')}  
            required={false}
          />
        </div>
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
          <InputFormItem
            name="contingencyReserve"
            label={i18n('entities.costEstimates.fields.contingencyReserve')}  
            required={false}
          />
        </div>
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
          <InputFormItem
            name="sumWorkPackages"
            label={i18n('entities.costEstimates.fields.sumWorkPackages')}
          hint={i18n('entities.costEstimates.hints.sumWorkPackages')}  
            required={false}
          />
        </div>
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
          <InputFormItem
            name="contingencyReservePackages"
            label={i18n('entities.costEstimates.fields.contingencyReservePackages')}
          hint={i18n('entities.costEstimates.hints.contingencyReservePackages')}  
            required={false}
          />
        </div>
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
          <InputFormItem
            name="baseline"
            label={i18n('entities.costEstimates.fields.baseline')}
            required={false}
          />
        </div>
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
          <InputFormItem
            name="budget"
            label={i18n('entities.costEstimates.fields.budget')}
          hint={i18n('entities.costEstimates.hints.budget')}  
            required={false}
          />
        </div>
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
          <InputFormItem
            name="cumulativeReplantedCost"
            label={i18n('entities.costEstimates.fields.cumulativeReplantedCost')}
          hint={i18n('entities.costEstimates.hints.cumulativeReplantedCost')}  
            required={false}
          />
        </div>
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
          <InputFormItem
            name="realCost"
            label={i18n('entities.costEstimates.fields.realCost')}
          hint={i18n('entities.costEstimates.hints.realCost')}  
            required={false}
          />
        </div>
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
          <InputFormItem
            name="cumulativeRealCost"
            label={i18n('entities.costEstimates.fields.cumulativeRealCost')}
          hint={i18n('entities.costEstimates.hints.cumulativeRealCost')}  
            required={false}
          />
        </div>
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
          <InputFormItem
            name="managementReserve"
            label={i18n('entities.costEstimates.fields.managementReserve')}
          hint={i18n('entities.costEstimates.hints.managementReserve')}  
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

export default CostEstimatesForm;
