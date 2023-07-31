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
import moment from 'moment';
import DatePickerFormItem from 'src/view/shared/form/items/DatePickerFormItem';
import * as yup from 'yup';

const schema = yup.object().shape({
  currentPerformanceAnalysis: yupFormSchemas.string(
    i18n('entities.projectPerformanceMonitoringReport.fields.currentPerformanceAnalysis'),
    {},
  ),
  forecastsAsPlanned: yupFormSchemas.string(
    i18n('entities.projectPerformanceMonitoringReport.fields.forecastsAsPlanned'),
    {},
  ),
  forecastsConsideringCurrentlyPerformance: yupFormSchemas.string(
    i18n('entities.projectPerformanceMonitoringReport.fields.forecastsConsideringCurrentlyPerformance'),
    {},
  ),
  currentRiskSituation: yupFormSchemas.string(
    i18n('entities.projectPerformanceMonitoringReport.fields.currentRiskSituation'),
    {},
  ),
  currentStatusIssues: yupFormSchemas.string(
    i18n('entities.projectPerformanceMonitoringReport.fields.currentStatusIssues'),
    {},
  ),
  workCompletedDuringPeriod: yupFormSchemas.string(
    i18n('entities.projectPerformanceMonitoringReport.fields.workCompletedDuringPeriod'),
    {},
  ),
  workToBeCompletedNextPeriod: yupFormSchemas.string(
    i18n('entities.projectPerformanceMonitoringReport.fields.workToBeCompletedNextPeriod'),
    {},
  ),
  summaryChangesApprovedInThePeriod: yupFormSchemas.string(
    i18n('entities.projectPerformanceMonitoringReport.fields.summaryChangesApprovedInThePeriod'),
    {},
  ),
  earnedValueManagement: yupFormSchemas.string(
    i18n('entities.projectPerformanceMonitoringReport.fields.earnedValueManagement'),
    {},
  ),
  otherRelevantInformation: yupFormSchemas.string(
    i18n('entities.projectPerformanceMonitoringReport.fields.otherRelevantInformation'),
    {},
  ),
  dateReport: yupFormSchemas.date(
    i18n('entities.projectPerformanceMonitoringReport.fields.dateReport'),
    {},
  ),
});

function ProjectPerformanceMonitoringReportForm(props) {
  const { saveLoading } = props;

  const [initialValues] = useState(() => {
    const record = props.record || {};

    return {
      currentPerformanceAnalysis: record.currentPerformanceAnalysis,
      forecastsAsPlanned: record.forecastsAsPlanned,
      forecastsConsideringCurrentlyPerformance: record.forecastsConsideringCurrentlyPerformance,
      currentRiskSituation: record.currentRiskSituation,
      currentStatusIssues: record.currentStatusIssues,
      workCompletedDuringPeriod: record.workCompletedDuringPeriod,
      workToBeCompletedNextPeriod: record.workToBeCompletedNextPeriod,
      summaryChangesApprovedInThePeriod: record.summaryChangesApprovedInThePeriod,
      earnedValueManagement: record.earnedValueManagement,
      otherRelevantInformation: record.otherRelevantInformation,
      dateReport: record.dateReport ? moment(record.dateReport, 'YYYY-MM-DD').toDate() : null,
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
            name="currentPerformanceAnalysis"
            label={i18n('entities.projectPerformanceMonitoringReport.fields.currentPerformanceAnalysis')}
          hint={i18n('entities.projectPerformanceMonitoringReport.hints.currentPerformanceAnalysis')}
            required={false}
          autoFocus
          />
        </div>
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
          <InputFormItem
            name="forecastsAsPlanned"
            label={i18n('entities.projectPerformanceMonitoringReport.fields.forecastsAsPlanned')}
          hint={i18n('entities.projectPerformanceMonitoringReport.hints.forecastsAsPlanned')}
            required={false}
          />
        </div>
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
          <InputFormItem
            name="forecastsConsideringCurrentlyPerformance"
            label={i18n('entities.projectPerformanceMonitoringReport.fields.forecastsConsideringCurrentlyPerformance')}
          hint={i18n('entities.projectPerformanceMonitoringReport.hints.forecastsConsideringCurrentlyPerformance')}
            required={false}
          />
        </div>
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
          <InputFormItem
            name="currentRiskSituation"
            label={i18n('entities.projectPerformanceMonitoringReport.fields.currentRiskSituation')}
          hint={i18n('entities.projectPerformanceMonitoringReport.hints.currentRiskSituation')}
            required={false}
          />
        </div>
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
          <InputFormItem
            name="currentStatusIssues"
            label={i18n('entities.projectPerformanceMonitoringReport.fields.currentStatusIssues')}
          hint={i18n('entities.projectPerformanceMonitoringReport.hints.currentStatusIssues')}
            required={false}
          />
        </div>
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
          <InputFormItem
            name="workCompletedDuringPeriod"
            label={i18n('entities.projectPerformanceMonitoringReport.fields.workCompletedDuringPeriod')}
          hint={i18n('entities.projectPerformanceMonitoringReport.hints.workCompletedDuringPeriod')}
            required={false}
          />
        </div>
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
          <InputFormItem
            name="workToBeCompletedNextPeriod"
            label={i18n('entities.projectPerformanceMonitoringReport.fields.workToBeCompletedNextPeriod')}
          hint={i18n('entities.projectPerformanceMonitoringReport.hints.workToBeCompletedNextPeriod')}
            required={false}
          />
        </div>
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
          <InputFormItem
            name="summaryChangesApprovedInThePeriod"
            label={i18n('entities.projectPerformanceMonitoringReport.fields.summaryChangesApprovedInThePeriod')}
          hint={i18n('entities.projectPerformanceMonitoringReport.hints.summaryChangesApprovedInThePeriod')}
            required={false}
          />
        </div>
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
          <InputFormItem
            name="earnedValueManagement"
            label={i18n('entities.projectPerformanceMonitoringReport.fields.earnedValueManagement')}
          hint={i18n('entities.projectPerformanceMonitoringReport.hints.earnedValueManagement')}
            required={false}
          />
        </div>
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
          <InputFormItem
            name="otherRelevantInformation"
            label={i18n('entities.projectPerformanceMonitoringReport.fields.otherRelevantInformation')}
          hint={i18n('entities.projectPerformanceMonitoringReport.hints.otherRelevantInformation')}
            required={false}
          />
        </div>
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
          <DatePickerFormItem
            name="dateReport"
            label={i18n('entities.projectPerformanceMonitoringReport.fields.dateReport')}
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

export default ProjectPerformanceMonitoringReportForm;
