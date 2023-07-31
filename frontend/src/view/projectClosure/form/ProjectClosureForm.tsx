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
  client: yupFormSchemas.string(
    i18n('entities.projectClosure.fields.client'),
    {},
  ),
  dateclosure: yupFormSchemas.date(
    i18n('entities.projectClosure.fields.dateclosure'),
    {},
  ),
  mainChangesApproved: yupFormSchemas.string(
    i18n('entities.projectClosure.fields.mainChangesApproved'),
    {},
  ),
  mainlessonslearned: yupFormSchemas.string(
    i18n('entities.projectClosure.fields.mainlessonslearned'),
    {},
  ),
  mainDeviations: yupFormSchemas.string(
    i18n('entities.projectClosure.fields.mainDeviations'),
    {},
  ),
  customerComments: yupFormSchemas.string(
    i18n('entities.projectClosure.fields.customerComments'),
    {},
  ),
  sponsorscomments: yupFormSchemas.string(
    i18n('entities.projectClosure.fields.sponsorscomments'),
    {},
  ),
});

function ProjectClosureForm(props) {
  const { saveLoading } = props;

  const [initialValues] = useState(() => {
    const record = props.record || {};

    return {
      client: record.client,
      dateclosure: record.dateclosure ? moment(record.dateclosure, 'YYYY-MM-DD').toDate() : null,
      mainChangesApproved: record.mainChangesApproved,
      mainlessonslearned: record.mainlessonslearned,
      mainDeviations: record.mainDeviations,
      customerComments: record.customerComments,
      sponsorscomments: record.sponsorscomments,
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
            name="client"
            label={i18n('entities.projectClosure.fields.client')}
            required={false}
          autoFocus
          />
        </div>
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
          <DatePickerFormItem
            name="dateclosure"
            label={i18n('entities.projectClosure.fields.dateclosure')}
            required={false}
          />
        </div>
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
          <InputFormItem
            name="mainChangesApproved"
            label={i18n('entities.projectClosure.fields.mainChangesApproved')}
            required={false}
          />
        </div>
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
          <InputFormItem
            name="mainlessonslearned"
            label={i18n('entities.projectClosure.fields.mainlessonslearned')}
            required={false}
          />
        </div>
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
          <InputFormItem
            name="mainDeviations"
            label={i18n('entities.projectClosure.fields.mainDeviations')}
            required={false}
          />
        </div>
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
          <InputFormItem
            name="customerComments"
            label={i18n('entities.projectClosure.fields.customerComments')}
            required={false}
          />
        </div>
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
          <InputFormItem
            name="sponsorscomments"
            label={i18n('entities.projectClosure.fields.sponsorscomments')}
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

export default ProjectClosureForm;
