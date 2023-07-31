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
  methodology: yupFormSchemas.string(
    i18n('entities.riskManagementPlan.fields.methodology'),
    {},
  ),
  rolesResponsibilities: yupFormSchemas.string(
    i18n('entities.riskManagementPlan.fields.rolesResponsibilities'),
    {},
  ),
  probabilityImpactMatrix: yupFormSchemas.string(
    i18n('entities.riskManagementPlan.fields.probabilityImpactMatrix'),
    {},
  ),
  riskCategories: yupFormSchemas.string(
    i18n('entities.riskManagementPlan.fields.riskCategories'),
    {},
  ),
  riskStrategy: yupFormSchemas.string(
    i18n('entities.riskManagementPlan.fields.riskStrategy'),
    {},
  ),
  tracking: yupFormSchemas.string(
    i18n('entities.riskManagementPlan.fields.tracking'),
    {},
  ),
  funding: yupFormSchemas.string(
    i18n('entities.riskManagementPlan.fields.funding'),
    {},
  ),
  timing: yupFormSchemas.string(
    i18n('entities.riskManagementPlan.fields.timing'),
    {},
  ),
  stakeholderRiskAppetite: yupFormSchemas.string(
    i18n('entities.riskManagementPlan.fields.stakeholderRiskAppetite'),
    {},
  ),
  definitionsRiskProbabilityImpacts: yupFormSchemas.string(
    i18n('entities.riskManagementPlan.fields.definitionsRiskProbabilityImpacts'),
    {},
  ),
  reportingFormats: yupFormSchemas.string(
    i18n('entities.riskManagementPlan.fields.reportingFormats'),
    {},
  ),
});

function RiskManagementPlanForm(props) {
  const { saveLoading } = props;

  const [initialValues] = useState(() => {
    const record = props.record || {};

    return {
      methodology: record.methodology,
      rolesResponsibilities: record.rolesResponsibilities,
      probabilityImpactMatrix: record.probabilityImpactMatrix,
      riskCategories: record.riskCategories,
      riskStrategy: record.riskStrategy,
      tracking: record.tracking,
      funding: record.funding,
      timing: record.timing,
      stakeholderRiskAppetite: record.stakeholderRiskAppetite,
      definitionsRiskProbabilityImpacts: record.definitionsRiskProbabilityImpacts,
      reportingFormats: record.reportingFormats,
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
            name="methodology"
            label={i18n('entities.riskManagementPlan.fields.methodology')}
          hint={i18n('entities.riskManagementPlan.hints.methodology')}
            required={false}
          autoFocus
          />
        </div>
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
          <InputFormItem
            name="rolesResponsibilities"
            label={i18n('entities.riskManagementPlan.fields.rolesResponsibilities')}
          hint={i18n('entities.riskManagementPlan.hints.rolesResponsibilities')}
            required={false}
          />
        </div>
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
          <InputFormItem
            name="probabilityImpactMatrix"
            label={i18n('entities.riskManagementPlan.fields.probabilityImpactMatrix')}
          hint={i18n('entities.riskManagementPlan.hints.probabilityImpactMatrix')}
            required={false}
          />
        </div>
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
          <InputFormItem
            name="riskCategories"
            label={i18n('entities.riskManagementPlan.fields.riskCategories')}
          hint={i18n('entities.riskManagementPlan.hints.riskCategories')}
            required={false}
          />
        </div>
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
          <InputFormItem
            name="riskStrategy"
            label={i18n('entities.riskManagementPlan.fields.riskStrategy')}
          hint={i18n('entities.riskManagementPlan.hints.riskStrategy')}
            required={false}
          />
        </div>
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
          <InputFormItem
            name="tracking"
            label={i18n('entities.riskManagementPlan.fields.tracking')}
          hint={i18n('entities.riskManagementPlan.hints.tracking')}
            required={false}
          />
        </div>
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
          <InputFormItem
            name="funding"
            label={i18n('entities.riskManagementPlan.fields.funding')}
          hint={i18n('entities.riskManagementPlan.hints.funding')}
            required={false}
          />
        </div>
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
          <InputFormItem
            name="timing"
            label={i18n('entities.riskManagementPlan.fields.timing')}
          hint={i18n('entities.riskManagementPlan.hints.timing')}
            required={false}
          />
        </div>
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
          <InputFormItem
            name="stakeholderRiskAppetite"
            label={i18n('entities.riskManagementPlan.fields.stakeholderRiskAppetite')}
          hint={i18n('entities.riskManagementPlan.hints.stakeholderRiskAppetite')}
            required={false}
          />
        </div>
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
          <InputFormItem
            name="definitionsRiskProbabilityImpacts"
            label={i18n('entities.riskManagementPlan.fields.definitionsRiskProbabilityImpacts')}
          hint={i18n('entities.riskManagementPlan.hints.definitionsRiskProbabilityImpacts')}
            required={false}
          />
        </div>
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
          <InputFormItem
            name="reportingFormats"
            label={i18n('entities.riskManagementPlan.fields.reportingFormats')}
          hint={i18n('entities.riskManagementPlan.hints.reportingFormats')}
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

export default RiskManagementPlanForm;
