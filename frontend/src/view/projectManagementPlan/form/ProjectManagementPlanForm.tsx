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
  scopeManagementPlan: yupFormSchemas.string(
    i18n('entities.projectManagementPlan.fields.scopeManagementPlan'),
    {},
  ),
  requirementsManagementPlan: yupFormSchemas.string(
    i18n('entities.projectManagementPlan.fields.requirementsManagementPlan'),
    {},
  ),
  scheduleManagementPlan: yupFormSchemas.string(
    i18n('entities.projectManagementPlan.fields.scheduleManagementPlan'),
    {},
  ),
  costManagementPlan: yupFormSchemas.string(
    i18n('entities.projectManagementPlan.fields.costManagementPlan'),
    {},
  ),
  qualityManagementPlan: yupFormSchemas.string(
    i18n('entities.projectManagementPlan.fields.qualityManagementPlan'),
    {},
  ),
  resourceManagementPlan: yupFormSchemas.string(
    i18n('entities.projectManagementPlan.fields.resourceManagementPlan'),
    {},
  ),
  communicationsManagementPlan: yupFormSchemas.string(
    i18n('entities.projectManagementPlan.fields.communicationsManagementPlan'),
    {},
  ),
  riskManagementPlan: yupFormSchemas.string(
    i18n('entities.projectManagementPlan.fields.riskManagementPlan'),
    {},
  ),
  procurementManagementPlan: yupFormSchemas.string(
    i18n('entities.projectManagementPlan.fields.procurementManagementPlan'),
    {},
  ),
  stakeholderEngagementPlan: yupFormSchemas.string(
    i18n('entities.projectManagementPlan.fields.stakeholderEngagementPlan'),
    {},
  ),
  scopeBaseline: yupFormSchemas.string(
    i18n('entities.projectManagementPlan.fields.scopeBaseline'),
    {},
  ),
  scheduleBaseline: yupFormSchemas.string(
    i18n('entities.projectManagementPlan.fields.scheduleBaseline'),
    {},
  ),
  costBaseline: yupFormSchemas.string(
    i18n('entities.projectManagementPlan.fields.costBaseline'),
    {},
  ),
  changeManagementPlan: yupFormSchemas.string(
    i18n('entities.projectManagementPlan.fields.changeManagementPlan'),
    {},
  ),
  configurationManagementPlan: yupFormSchemas.string(
    i18n('entities.projectManagementPlan.fields.configurationManagementPlan'),
    {},
  ),
  performanceMeasurementBaseline: yupFormSchemas.string(
    i18n('entities.projectManagementPlan.fields.performanceMeasurementBaseline'),
    {},
  ),
  projectLifeCycle: yupFormSchemas.string(
    i18n('entities.projectManagementPlan.fields.projectLifeCycle'),
    {},
  ),
  developmentApproach: yupFormSchemas.string(
    i18n('entities.projectManagementPlan.fields.developmentApproach'),
    {},
  ),
  managementReviews: yupFormSchemas.string(
    i18n('entities.projectManagementPlan.fields.managementReviews'),
    {},
  ),
});

function ProjectManagementPlanForm(props) {
  const { saveLoading } = props;

  const [initialValues] = useState(() => {
    const record = props.record || {};

    return {
      scopeManagementPlan: record.scopeManagementPlan,
      requirementsManagementPlan: record.requirementsManagementPlan,
      scheduleManagementPlan: record.scheduleManagementPlan,
      costManagementPlan: record.costManagementPlan,
      qualityManagementPlan: record.qualityManagementPlan,
      resourceManagementPlan: record.resourceManagementPlan,
      communicationsManagementPlan: record.communicationsManagementPlan,
      riskManagementPlan: record.riskManagementPlan,
      procurementManagementPlan: record.procurementManagementPlan,
      stakeholderEngagementPlan: record.stakeholderEngagementPlan,
      scopeBaseline: record.scopeBaseline,
      scheduleBaseline: record.scheduleBaseline,
      costBaseline: record.costBaseline,
      changeManagementPlan: record.changeManagementPlan,
      configurationManagementPlan: record.configurationManagementPlan,
      performanceMeasurementBaseline: record.performanceMeasurementBaseline,
      projectLifeCycle: record.projectLifeCycle,
      developmentApproach: record.developmentApproach,
      managementReviews: record.managementReviews,
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
            name="scopeManagementPlan"
            label={i18n('entities.projectManagementPlan.fields.scopeManagementPlan')}
          hint={i18n('entities.projectManagementPlan.hints.scopeManagementPlan')}
            required={false}
          autoFocus
          />
        </div>
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
          <InputFormItem
            name="requirementsManagementPlan"
            label={i18n('entities.projectManagementPlan.fields.requirementsManagementPlan')}
          hint={i18n('entities.projectManagementPlan.hints.requirementsManagementPlan')}
            required={false}
          />
        </div>
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
          <InputFormItem
            name="scheduleManagementPlan"
            label={i18n('entities.projectManagementPlan.fields.scheduleManagementPlan')}
          hint={i18n('entities.projectManagementPlan.hints.scheduleManagementPlan')}
            required={false}
          />
        </div>
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
          <InputFormItem
            name="costManagementPlan"
            label={i18n('entities.projectManagementPlan.fields.costManagementPlan')}
          hint={i18n('entities.projectManagementPlan.hints.costManagementPlan')}
            required={false}
          />
        </div>
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
          <InputFormItem
            name="qualityManagementPlan"
            label={i18n('entities.projectManagementPlan.fields.qualityManagementPlan')}
          hint={i18n('entities.projectManagementPlan.hints.qualityManagementPlan')}
            required={false}
          />
        </div>
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
          <InputFormItem
            name="resourceManagementPlan"
            label={i18n('entities.projectManagementPlan.fields.resourceManagementPlan')}
          hint={i18n('entities.projectManagementPlan.hints.resourceManagementPlan')}
            required={false}
          />
        </div>
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
          <InputFormItem
            name="communicationsManagementPlan"
            label={i18n('entities.projectManagementPlan.fields.communicationsManagementPlan')}
          hint={i18n('entities.projectManagementPlan.hints.communicationsManagementPlan')}
            required={false}
          />
        </div>
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
          <InputFormItem
            name="riskManagementPlan"
            label={i18n('entities.projectManagementPlan.fields.riskManagementPlan')}
          hint={i18n('entities.projectManagementPlan.hints.riskManagementPlan')}
            required={false}
          />
        </div>
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
          <InputFormItem
            name="procurementManagementPlan"
            label={i18n('entities.projectManagementPlan.fields.procurementManagementPlan')}
          hint={i18n('entities.projectManagementPlan.hints.procurementManagementPlan')}
            required={false}
          />
        </div>
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
          <InputFormItem
            name="stakeholderEngagementPlan"
            label={i18n('entities.projectManagementPlan.fields.stakeholderEngagementPlan')}
          hint={i18n('entities.projectManagementPlan.hints.stakeholderEngagementPlan')}
            required={false}
          />
        </div>
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
          <InputFormItem
            name="scopeBaseline"
            label={i18n('entities.projectManagementPlan.fields.scopeBaseline')}
          hint={i18n('entities.projectManagementPlan.hints.scopeBaseline')}
            required={false}
          />
        </div>
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
          <InputFormItem
            name="scheduleBaseline"
            label={i18n('entities.projectManagementPlan.fields.scheduleBaseline')}
          hint={i18n('entities.projectManagementPlan.hints.scheduleBaseline')}
            required={false}
          />
        </div>
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
          <InputFormItem
            name="costBaseline"
            label={i18n('entities.projectManagementPlan.fields.costBaseline')}
          hint={i18n('entities.projectManagementPlan.hints.costBaseline')}
            required={false}
          />
        </div>
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
          <InputFormItem
            name="changeManagementPlan"
            label={i18n('entities.projectManagementPlan.fields.changeManagementPlan')}
          hint={i18n('entities.projectManagementPlan.hints.changeManagementPlan')}
            required={false}
          />
        </div>
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
          <InputFormItem
            name="configurationManagementPlan"
            label={i18n('entities.projectManagementPlan.fields.configurationManagementPlan')}
          hint={i18n('entities.projectManagementPlan.hints.configurationManagementPlan')}
            required={false}
          />
        </div>
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
          <InputFormItem
            name="performanceMeasurementBaseline"
            label={i18n('entities.projectManagementPlan.fields.performanceMeasurementBaseline')}
          hint={i18n('entities.projectManagementPlan.hints.performanceMeasurementBaseline')}
            required={false}
          />
        </div>
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
          <InputFormItem
            name="projectLifeCycle"
            label={i18n('entities.projectManagementPlan.fields.projectLifeCycle')}
          hint={i18n('entities.projectManagementPlan.hints.projectLifeCycle')}
            required={false}
          />
        </div>
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
          <InputFormItem
            name="developmentApproach"
            label={i18n('entities.projectManagementPlan.fields.developmentApproach')}
          hint={i18n('entities.projectManagementPlan.hints.developmentApproach')}
            required={false}
          />
        </div>
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
          <InputFormItem
            name="managementReviews"
            label={i18n('entities.projectManagementPlan.fields.managementReviews')}
          hint={i18n('entities.projectManagementPlan.hints.managementReviews')}
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

export default ProjectManagementPlanForm;
