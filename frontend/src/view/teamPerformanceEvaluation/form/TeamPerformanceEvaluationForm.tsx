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
  teamMemberName: yupFormSchemas.string(
    i18n('entities.teamPerformanceEvaluation.fields.teamMemberName'),
    {},
  ),
  jobRole: yupFormSchemas.string(
    i18n('entities.teamPerformanceEvaluation.fields.jobRole'),
    {},
  ),
  functionProject: yupFormSchemas.string(
    i18n('entities.teamPerformanceEvaluation.fields.functionProject'),
    {},
  ),
  evaluationDate: yupFormSchemas.string(
    i18n('entities.teamPerformanceEvaluation.fields.evaluationDate'),
    {},
  ),
  reviewEvaluation: yupFormSchemas.string(
    i18n('entities.teamPerformanceEvaluation.fields.reviewEvaluation'),
    {},
  ),
  strongPoints: yupFormSchemas.string(
    i18n('entities.teamPerformanceEvaluation.fields.strongPoints'),
    {},
  ),
  opportunitiesImprovement: yupFormSchemas.string(
    i18n('entities.teamPerformanceEvaluation.fields.opportunitiesImprovement'),
    {},
  ),
  developmentPlan: yupFormSchemas.string(
    i18n('entities.teamPerformanceEvaluation.fields.developmentPlan'),
    {},
  ),
  alreadyDeveloped: yupFormSchemas.string(
    i18n('entities.teamPerformanceEvaluation.fields.alreadyDeveloped'),
    {},
  ),
  externalcomments: yupFormSchemas.string(
    i18n('entities.teamPerformanceEvaluation.fields.externalcomments'),
    {},
  ),
  teamMatesComments: yupFormSchemas.string(
    i18n('entities.teamPerformanceEvaluation.fields.teamMatesComments'),
    {},
  ),
  evaluatorComments: yupFormSchemas.string(
    i18n('entities.teamPerformanceEvaluation.fields.evaluatorComments'),
    {},
  ),
});

function TeamPerformanceEvaluationForm(props) {
  const { saveLoading } = props;

  const [initialValues] = useState(() => {
    const record = props.record || {};

    return {
      teamMemberName: record.teamMemberName,
      jobRole: record.jobRole,
      functionProject: record.functionProject,
      evaluationDate: record.evaluationDate,
      reviewEvaluation: record.reviewEvaluation,
      strongPoints: record.strongPoints,
      opportunitiesImprovement: record.opportunitiesImprovement,
      developmentPlan: record.developmentPlan,
      alreadyDeveloped: record.alreadyDeveloped,
      externalcomments: record.externalcomments,
      teamMatesComments: record.teamMatesComments,
      evaluatorComments: record.evaluatorComments,
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
            name="teamMemberName"
            label={i18n('entities.teamPerformanceEvaluation.fields.teamMemberName')}
            required={false}
          autoFocus
          />
        </div>
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
          <InputFormItem
            name="jobRole"
            label={i18n('entities.teamPerformanceEvaluation.fields.jobRole')}
            required={false}
          />
        </div>
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
          <InputFormItem
            name="functionProject"
            label={i18n('entities.teamPerformanceEvaluation.fields.functionProject')}
            required={false}
          />
        </div>
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
          <InputFormItem
            name="evaluationDate"
            label={i18n('entities.teamPerformanceEvaluation.fields.evaluationDate')}
            required={false}
          />
        </div>
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
          <InputFormItem
            name="reviewEvaluation"
            label={i18n('entities.teamPerformanceEvaluation.fields.reviewEvaluation')}
            required={false}
          />
        </div>
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
          <InputFormItem
            name="strongPoints"
            label={i18n('entities.teamPerformanceEvaluation.fields.strongPoints')}
            required={false}
          />
        </div>
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
          <InputFormItem
            name="opportunitiesImprovement"
            label={i18n('entities.teamPerformanceEvaluation.fields.opportunitiesImprovement')}
            required={false}
          />
        </div>
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
          <InputFormItem
            name="developmentPlan"
            label={i18n('entities.teamPerformanceEvaluation.fields.developmentPlan')}
            required={false}
          />
        </div>
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
          <InputFormItem
            name="alreadyDeveloped"
            label={i18n('entities.teamPerformanceEvaluation.fields.alreadyDeveloped')}
            required={false}
          />
        </div>
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
          <InputFormItem
            name="externalcomments"
            label={i18n('entities.teamPerformanceEvaluation.fields.externalcomments')}
            required={false}
          />
        </div>
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
          <InputFormItem
            name="teamMatesComments"
            label={i18n('entities.teamPerformanceEvaluation.fields.teamMatesComments')}
            required={false}
          />
        </div>
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
          <InputFormItem
            name="evaluatorComments"
            label={i18n('entities.teamPerformanceEvaluation.fields.evaluatorComments')}
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

export default TeamPerformanceEvaluationForm;
