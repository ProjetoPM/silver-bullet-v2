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
  projectScheduleModelDevelopment: yupFormSchemas.string(
    i18n('entities.scheduleManagementPlan.fields.projectScheduleModelDevelopment'),
    {},
  ),
  levelAccuracy: yupFormSchemas.string(
    i18n('entities.scheduleManagementPlan.fields.levelAccuracy'),
    {},
  ),
  organizationalProceduresLinks: yupFormSchemas.string(
    i18n('entities.scheduleManagementPlan.fields.organizationalProceduresLinks'),
    {},
  ),
  projectScheduleModelMaintenance: yupFormSchemas.string(
    i18n('entities.scheduleManagementPlan.fields.projectScheduleModelMaintenance'),
    {},
  ),
  performanceMeasurementRules: yupFormSchemas.string(
    i18n('entities.scheduleManagementPlan.fields.performanceMeasurementRules'),
    {},
  ),
  reportingFormats: yupFormSchemas.string(
    i18n('entities.scheduleManagementPlan.fields.reportingFormats'),
    {},
  ),
  releaseIterationLength: yupFormSchemas.string(
    i18n('entities.scheduleManagementPlan.fields.releaseIterationLength'),
    {},
  ),
  controlThresholds: yupFormSchemas.string(
    i18n('entities.scheduleManagementPlan.fields.controlThresholds'),
    {},
  ),
  unitsMeasure: yupFormSchemas.string(
    i18n('entities.scheduleManagementPlan.fields.unitsMeasure'),
    {},
  ),
});

function ScheduleManagementPlanForm(props) {
  const { saveLoading } = props;

  const [initialValues] = useState(() => {
    const record = props.record || {};

    return {
      projectScheduleModelDevelopment: record.projectScheduleModelDevelopment,
      levelAccuracy: record.levelAccuracy,
      organizationalProceduresLinks: record.organizationalProceduresLinks,
      projectScheduleModelMaintenance: record.projectScheduleModelMaintenance,
      performanceMeasurementRules: record.performanceMeasurementRules,
      reportingFormats: record.reportingFormats,
      releaseIterationLength: record.releaseIterationLength,
      controlThresholds: record.controlThresholds,
      unitsMeasure: record.unitsMeasure,
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
            name="projectScheduleModelDevelopment"
            label={i18n('entities.scheduleManagementPlan.fields.projectScheduleModelDevelopment')}
          hint={i18n('entities.scheduleManagementPlan.hints.projectScheduleModelDevelopment')}
            required={false}
          autoFocus
          />
        </div>
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
          <InputFormItem
            name="levelAccuracy"
            label={i18n('entities.scheduleManagementPlan.fields.levelAccuracy')}
          hint={i18n('entities.scheduleManagementPlan.hints.levelAccuracy')}
            required={false}
          />
        </div>
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
          <InputFormItem
            name="organizationalProceduresLinks"
            label={i18n('entities.scheduleManagementPlan.fields.organizationalProceduresLinks')}
          hint={i18n('entities.scheduleManagementPlan.hints.organizationalProceduresLinks')}
            required={false}
          />
        </div>
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
          <InputFormItem
            name="projectScheduleModelMaintenance"
            label={i18n('entities.scheduleManagementPlan.fields.projectScheduleModelMaintenance')}
          hint={i18n('entities.scheduleManagementPlan.hints.projectScheduleModelMaintenance')}
            required={false}
          />
        </div>
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
          <InputFormItem
            name="performanceMeasurementRules"
            label={i18n('entities.scheduleManagementPlan.fields.performanceMeasurementRules')}
          hint={i18n('entities.scheduleManagementPlan.hints.performanceMeasurementRules')}
            required={false}
          />
        </div>
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
          <InputFormItem
            name="reportingFormats"
            label={i18n('entities.scheduleManagementPlan.fields.reportingFormats')}
          hint={i18n('entities.scheduleManagementPlan.hints.reportingFormats')}
            required={false}
          />
        </div>
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
          <InputFormItem
            name="releaseIterationLength"
            label={i18n('entities.scheduleManagementPlan.fields.releaseIterationLength')}
          hint={i18n('entities.scheduleManagementPlan.hints.releaseIterationLength')}
            required={false}
          />
        </div>
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
          <InputFormItem
            name="controlThresholds"
            label={i18n('entities.scheduleManagementPlan.fields.controlThresholds')}
          hint={i18n('entities.scheduleManagementPlan.hints.controlThresholds')}
            required={false}
          />
        </div>
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
          <InputFormItem
            name="unitsMeasure"
            label={i18n('entities.scheduleManagementPlan.fields.unitsMeasure')}
          hint={i18n('entities.scheduleManagementPlan.hints.unitsMeasure')}
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

export default ScheduleManagementPlanForm;
