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
  activityLabel: yupFormSchemas.string(
    i18n('entities.activityList.fields.activityLabel'),
    {},
  ),
  milestone: yupFormSchemas.string(
    i18n('entities.activityList.fields.milestone'),
    {},
  ),
  activityName: yupFormSchemas.string(
    i18n('entities.activityList.fields.activityName'),
    {},
  ),
  projectPhase: yupFormSchemas.string(
    i18n('entities.activityList.fields.projectPhase'),
    {},
  ),
  wBSId: yupFormSchemas.string(
    i18n('entities.activityList.fields.wBSId'),
    {},
  ),
  activityDescription: yupFormSchemas.string(
    i18n('entities.activityList.fields.activityDescription'),
    {},
  ),
});

function ActivityListForm(props) {
  const { saveLoading } = props;

  const [initialValues] = useState(() => {
    const record = props.record || {};

    return {
      activityLabel: record.activityLabel,
      milestone: record.milestone,
      activityName: record.activityName,
      projectPhase: record.projectPhase,
      wBSId: record.wBSId,
      activityDescription: record.activityDescription,
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
            name="activityLabel"
            label={i18n('entities.activityList.fields.activityLabel')}
          hint={i18n('entities.activityList.hints.activityLabel')}
            required={false}
          autoFocus
          />
        </div>
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
          <InputFormItem
            name="milestone"
            label={i18n('entities.activityList.fields.milestone')}
          hint={i18n('entities.activityList.hints.milestone')}
            required={false}
          />
        </div>
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
          <InputFormItem
            name="activityName"
            label={i18n('entities.activityList.fields.activityName')}
          hint={i18n('entities.activityList.hints.activityName')}
            required={false}
          />
        </div>
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
          <InputFormItem
            name="projectPhase"
            label={i18n('entities.activityList.fields.projectPhase')}
          hint={i18n('entities.activityList.hints.projectPhase')}
            required={false}
          />
        </div>
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
          <InputFormItem
            name="wBSId"
            label={i18n('entities.activityList.fields.wBSId')}
          hint={i18n('entities.activityList.hints.wBSId')}
            required={false}
          />
        </div>
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
          <InputFormItem
            name="activityDescription"
            label={i18n('entities.activityList.fields.activityDescription')}
          hint={i18n('entities.activityList.hints.activityDescription')}
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

export default ActivityListForm;
