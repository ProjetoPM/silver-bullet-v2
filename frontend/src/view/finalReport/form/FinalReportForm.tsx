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
  summaryLevelDescription: yupFormSchemas.string(
    i18n('entities.finalReport.fields.summaryLevelDescription'),
    {},
  ),
  scopeObjectivesCriteria: yupFormSchemas.string(
    i18n('entities.finalReport.fields.scopeObjectivesCriteria'),
    {},
  ),
  qualityObjectives: yupFormSchemas.string(
    i18n('entities.finalReport.fields.qualityObjectives'),
    {},
  ),
  costObjectives: yupFormSchemas.string(
    i18n('entities.finalReport.fields.costObjectives'),
    {},
  ),
  scheduleObjectives: yupFormSchemas.string(
    i18n('entities.finalReport.fields.scheduleObjectives'),
    {},
  ),
  summaryValidation: yupFormSchemas.string(
    i18n('entities.finalReport.fields.summaryValidation'),
    {},
  ),
  summaryResults: yupFormSchemas.string(
    i18n('entities.finalReport.fields.summaryResults'),
    {},
  ),
  summaryRisksIssues: yupFormSchemas.string(
    i18n('entities.finalReport.fields.summaryRisksIssues'),
    {},
  ),
});

function FinalReportForm(props) {
  const { saveLoading } = props;

  const [initialValues] = useState(() => {
    const record = props.record || {};

    return {
      summaryLevelDescription: record.summaryLevelDescription,
      scopeObjectivesCriteria: record.scopeObjectivesCriteria,
      qualityObjectives: record.qualityObjectives,
      costObjectives: record.costObjectives,
      scheduleObjectives: record.scheduleObjectives,
      summaryValidation: record.summaryValidation,
      summaryResults: record.summaryResults,
      summaryRisksIssues: record.summaryRisksIssues,
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
            name="summaryLevelDescription"
            label={i18n('entities.finalReport.fields.summaryLevelDescription')}
            required={false}
          autoFocus
          />
        </div>
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
          <InputFormItem
            name="scopeObjectivesCriteria"
            label={i18n('entities.finalReport.fields.scopeObjectivesCriteria')}
            required={false}
          />
        </div>
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
          <InputFormItem
            name="qualityObjectives"
            label={i18n('entities.finalReport.fields.qualityObjectives')}
            required={false}
          />
        </div>
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
          <InputFormItem
            name="costObjectives"
            label={i18n('entities.finalReport.fields.costObjectives')}
            required={false}
          />
        </div>
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
          <InputFormItem
            name="scheduleObjectives"
            label={i18n('entities.finalReport.fields.scheduleObjectives')}
            required={false}
          />
        </div>
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
          <InputFormItem
            name="summaryValidation"
            label={i18n('entities.finalReport.fields.summaryValidation')}
            required={false}
          />
        </div>
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
          <InputFormItem
            name="summaryResults"
            label={i18n('entities.finalReport.fields.summaryResults')}
            required={false}
          />
        </div>
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
          <InputFormItem
            name="summaryRisksIssues"
            label={i18n('entities.finalReport.fields.summaryRisksIssues')}
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

export default FinalReportForm;
