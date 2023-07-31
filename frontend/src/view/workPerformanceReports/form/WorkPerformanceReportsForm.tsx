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
  responsible: yupFormSchemas.string(
    i18n('entities.workPerformanceReports.fields.responsible'),
    {},
  ),
  mainActivitiesExecution: yupFormSchemas.string(
    i18n('entities.workPerformanceReports.fields.mainActivitiesExecution'),
    {},
  ),
  upcomingActivitiesPerform: yupFormSchemas.string(
    i18n('entities.workPerformanceReports.fields.upcomingActivitiesPerform'),
    {},
  ),
  generalComments: yupFormSchemas.string(
    i18n('entities.workPerformanceReports.fields.generalComments'),
    {},
  ),
  issues: yupFormSchemas.string(
    i18n('entities.workPerformanceReports.fields.issues'),
    {},
  ),
  changes: yupFormSchemas.string(
    i18n('entities.workPerformanceReports.fields.changes'),
    {},
  ),
  risks: yupFormSchemas.string(
    i18n('entities.workPerformanceReports.fields.risks'),
    {},
  ),
  attentionPoints: yupFormSchemas.string(
    i18n('entities.workPerformanceReports.fields.attentionPoints'),
    {},
  ),
  date: yupFormSchemas.date(
    i18n('entities.workPerformanceReports.fields.date'),
    {},
  ),
});

function WorkPerformanceReportsForm(props) {
  const { saveLoading } = props;

  const [initialValues] = useState(() => {
    const record = props.record || {};

    return {
      responsible: record.responsible,
      mainActivitiesExecution: record.mainActivitiesExecution,
      upcomingActivitiesPerform: record.upcomingActivitiesPerform,
      generalComments: record.generalComments,
      issues: record.issues,
      changes: record.changes,
      risks: record.risks,
      attentionPoints: record.attentionPoints,
      date: record.date ? moment(record.date, 'YYYY-MM-DD').toDate() : null,
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
            name="responsible"
            label={i18n('entities.workPerformanceReports.fields.responsible')}
          hint={i18n('entities.workPerformanceReports.hints.responsible')}
            required={false}
          autoFocus
          />
        </div>
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
          <InputFormItem
            name="mainActivitiesExecution"
            label={i18n('entities.workPerformanceReports.fields.mainActivitiesExecution')}
          hint={i18n('entities.workPerformanceReports.hints.mainActivitiesExecution')}
            required={false}
          />
        </div>
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
          <InputFormItem
            name="upcomingActivitiesPerform"
            label={i18n('entities.workPerformanceReports.fields.upcomingActivitiesPerform')}
          hint={i18n('entities.workPerformanceReports.hints.upcomingActivitiesPerform')}
            required={false}
          />
        </div>
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
          <InputFormItem
            name="generalComments"
            label={i18n('entities.workPerformanceReports.fields.generalComments')}
          hint={i18n('entities.workPerformanceReports.hints.generalComments')}
            required={false}
          />
        </div>
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
          <InputFormItem
            name="issues"
            label={i18n('entities.workPerformanceReports.fields.issues')}
          hint={i18n('entities.workPerformanceReports.hints.issues')}
            required={false}
          />
        </div>
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
          <InputFormItem
            name="changes"
            label={i18n('entities.workPerformanceReports.fields.changes')}
          hint={i18n('entities.workPerformanceReports.hints.changes')}
            required={false}
          />
        </div>
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
          <InputFormItem
            name="risks"
            label={i18n('entities.workPerformanceReports.fields.risks')}
          hint={i18n('entities.workPerformanceReports.hints.risks')}
            required={false}
          />
        </div>
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
          <InputFormItem
            name="attentionPoints"
            label={i18n('entities.workPerformanceReports.fields.attentionPoints')}
          hint={i18n('entities.workPerformanceReports.hints.attentionPoints')}
            required={false}
          />
        </div>
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
          <DatePickerFormItem
            name="date"
            label={i18n('entities.workPerformanceReports.fields.date')}
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

export default WorkPerformanceReportsForm;
