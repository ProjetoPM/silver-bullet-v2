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
import InputNumberFormItem from 'src/view/shared/form/items/InputNumberFormItem';
import moment from 'moment';
import DatePickerFormItem from 'src/view/shared/form/items/DatePickerFormItem';
import ActivityListAutocompleteFormItem from 'src/view/activityList/autocomplete/ActivityListAutocompleteFormItem';
import * as yup from 'yup';

const schema = yup.object().shape({
  activityName: yupFormSchemas.relationToOne(
    i18n('entities.activityDurationEstimates.fields.activityName'),
    {},
  ),
  estimatedDuration: yupFormSchemas.integer(
    i18n('entities.activityDurationEstimates.fields.estimatedDuration'),
    {},
  ),
  estimatedStartDate: yupFormSchemas.date(
    i18n('entities.activityDurationEstimates.fields.estimatedStartDate'),
    {},
  ),
  estimatedEndDate: yupFormSchemas.date(
    i18n('entities.activityDurationEstimates.fields.estimatedEndDate'),
    {},
  ),
  performedDuration: yupFormSchemas.integer(
    i18n('entities.activityDurationEstimates.fields.performedDuration'),
    {},
  ),
  performedStartDate: yupFormSchemas.date(
    i18n('entities.activityDurationEstimates.fields.performedStartDate'),
    {},
  ),
  performedEndDate: yupFormSchemas.date(
    i18n('entities.activityDurationEstimates.fields.performedEndDate'),
    {},
  ),
});

function ActivityDurationEstimatesForm(props) {
  const { saveLoading } = props;

  const [initialValues] = useState(() => {
    const record = props.record || {};

    return {
      activityName: record.activityName,
      estimatedDuration: record.estimatedDuration,
      estimatedStartDate: record.estimatedStartDate ? moment(record.estimatedStartDate, 'YYYY-MM-DD').toDate() : null,
      estimatedEndDate: record.estimatedEndDate ? moment(record.estimatedEndDate, 'YYYY-MM-DD').toDate() : null,
      performedDuration: record.performedDuration,
      performedStartDate: record.performedStartDate ? moment(record.performedStartDate, 'YYYY-MM-DD').toDate() : null,
      performedEndDate: record.performedEndDate ? moment(record.performedEndDate, 'YYYY-MM-DD').toDate() : null,
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
          <ActivityListAutocompleteFormItem  
            name="activityName"
            label={i18n('entities.activityDurationEstimates.fields.activityName')}
            required={false}
            showCreate={!props.modal}
          />
        </div>
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
          <InputNumberFormItem
            name="estimatedDuration"
            label={i18n('entities.activityDurationEstimates.fields.estimatedDuration')}  
            required={false}
          />
        </div>
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
          <DatePickerFormItem
            name="estimatedStartDate"
            label={i18n('entities.activityDurationEstimates.fields.estimatedStartDate')}
            required={false}
          />
        </div>
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
          <DatePickerFormItem
            name="estimatedEndDate"
            label={i18n('entities.activityDurationEstimates.fields.estimatedEndDate')}
            required={false}
          />
        </div>
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
          <InputNumberFormItem
            name="performedDuration"
            label={i18n('entities.activityDurationEstimates.fields.performedDuration')}  
            required={false}
          />
        </div>
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
          <DatePickerFormItem
            name="performedStartDate"
            label={i18n('entities.activityDurationEstimates.fields.performedStartDate')}
            required={false}
          />
        </div>
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
          <DatePickerFormItem
            name="performedEndDate"
            label={i18n('entities.activityDurationEstimates.fields.performedEndDate')}
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

export default ActivityDurationEstimatesForm;
