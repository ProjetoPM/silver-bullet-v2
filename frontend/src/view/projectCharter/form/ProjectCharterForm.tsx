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
  projectName: yupFormSchemas.string(
    i18n('entities.projectCharter.fields.projectName'),
    {},
  ),
  highLevelProjectDescription: yupFormSchemas.string(
    i18n('entities.projectCharter.fields.highLevelProjectDescription'),
    {
      "required": true,
      "min": 5,
      "max": 2000
    },
  ),
  startdate: yupFormSchemas.date(
    i18n('entities.projectCharter.fields.startdate'),
    {},
  ),
  enddate: yupFormSchemas.date(
    i18n('entities.projectCharter.fields.enddate'),
    {},
  ),
  projectPurpose: yupFormSchemas.string(
    i18n('entities.projectCharter.fields.projectPurpose'),
    {},
  ),
  measurableProjectObjectives: yupFormSchemas.string(
    i18n('entities.projectCharter.fields.measurableProjectObjectives'),
    {
      "min": 5,
      "max": 2000
    },
  ),
  keyBenefits: yupFormSchemas.string(
    i18n('entities.projectCharter.fields.keyBenefits'),
    {},
  ),
  highlevelRequirements: yupFormSchemas.string(
    i18n('entities.projectCharter.fields.highlevelRequirements'),
    {
      "max": 2000
    },
  ),
  boundaries: yupFormSchemas.string(
    i18n('entities.projectCharter.fields.boundaries'),
    {
      "max": 2000
    },
  ),
  overallProjectRisk: yupFormSchemas.string(
    i18n('entities.projectCharter.fields.overallProjectRisk'),
    {
      "max": 2000
    },
  ),
  summaryMilestoneSchedule: yupFormSchemas.string(
    i18n('entities.projectCharter.fields.summaryMilestoneSchedule'),
    {
      "max": 2000
    },
  ),
  preapprovedFinancialResources: yupFormSchemas.string(
    i18n('entities.projectCharter.fields.preapprovedFinancialResources'),
    {
      "max": 2000
    },
  ),
  projectApprovalRequirements: yupFormSchemas.string(
    i18n('entities.projectCharter.fields.projectApprovalRequirements'),
    {
      "max": 2000
    },
  ),
  successCriteria: yupFormSchemas.string(
    i18n('entities.projectCharter.fields.successCriteria'),
    {
      "max": 2000
    },
  ),
  projectExitCriteria: yupFormSchemas.string(
    i18n('entities.projectCharter.fields.projectExitCriteria'),
    {
      "max": 2000
    },
  ),
});

function ProjectCharterForm(props) {
  const { saveLoading } = props;

  const [initialValues] = useState(() => {
    const record = props.record || {};

    return {
      projectName: record.projectName,
      highLevelProjectDescription: record.highLevelProjectDescription,
      startdate: record.startdate ? moment(record.startdate, 'YYYY-MM-DD').toDate() : null,
      enddate: record.enddate ? moment(record.enddate, 'YYYY-MM-DD').toDate() : null,
      projectPurpose: record.projectPurpose,
      measurableProjectObjectives: record.measurableProjectObjectives,
      keyBenefits: record.keyBenefits,
      highlevelRequirements: record.highlevelRequirements,
      boundaries: record.boundaries,
      overallProjectRisk: record.overallProjectRisk,
      summaryMilestoneSchedule: record.summaryMilestoneSchedule,
      preapprovedFinancialResources: record.preapprovedFinancialResources,
      projectApprovalRequirements: record.projectApprovalRequirements,
      successCriteria: record.successCriteria,
      projectExitCriteria: record.projectExitCriteria,
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
            name="projectName"
            label={i18n('entities.projectCharter.fields.projectName')}
            required={false}
          autoFocus
          />
        </div>
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
          <InputFormItem
            name="highLevelProjectDescription"
            label={i18n('entities.projectCharter.fields.highLevelProjectDescription')}
          hint={i18n('entities.projectCharter.hints.highLevelProjectDescription')}
            required={true}
          />
        </div>
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
          <DatePickerFormItem
            name="startdate"
            label={i18n('entities.projectCharter.fields.startdate')}
            required={false}
          />
        </div>
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
          <DatePickerFormItem
            name="enddate"
            label={i18n('entities.projectCharter.fields.enddate')}
            required={false}
          />
        </div>
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
          <InputFormItem
            name="projectPurpose"
            label={i18n('entities.projectCharter.fields.projectPurpose')}
          hint={i18n('entities.projectCharter.hints.projectPurpose')}
            required={false}
          />
        </div>
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
          <InputFormItem
            name="measurableProjectObjectives"
            label={i18n('entities.projectCharter.fields.measurableProjectObjectives')}
          hint={i18n('entities.projectCharter.hints.measurableProjectObjectives')}
            required={false}
          />
        </div>
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
          <InputFormItem
            name="keyBenefits"
            label={i18n('entities.projectCharter.fields.keyBenefits')}
          hint={i18n('entities.projectCharter.hints.keyBenefits')}
            required={false}
          />
        </div>
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
          <InputFormItem
            name="highlevelRequirements"
            label={i18n('entities.projectCharter.fields.highlevelRequirements')}
          hint={i18n('entities.projectCharter.hints.highlevelRequirements')}
            required={false}
          />
        </div>
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
          <InputFormItem
            name="boundaries"
            label={i18n('entities.projectCharter.fields.boundaries')}
          hint={i18n('entities.projectCharter.hints.boundaries')}
            required={false}
          />
        </div>
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
          <InputFormItem
            name="overallProjectRisk"
            label={i18n('entities.projectCharter.fields.overallProjectRisk')}
          hint={i18n('entities.projectCharter.hints.overallProjectRisk')}
            required={false}
          />
        </div>
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
          <InputFormItem
            name="summaryMilestoneSchedule"
            label={i18n('entities.projectCharter.fields.summaryMilestoneSchedule')}
          hint={i18n('entities.projectCharter.hints.summaryMilestoneSchedule')}
            required={false}
          />
        </div>
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
          <InputFormItem
            name="preapprovedFinancialResources"
            label={i18n('entities.projectCharter.fields.preapprovedFinancialResources')}
          hint={i18n('entities.projectCharter.hints.preapprovedFinancialResources')}
            required={false}
          />
        </div>
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
          <InputFormItem
            name="projectApprovalRequirements"
            label={i18n('entities.projectCharter.fields.projectApprovalRequirements')}
          hint={i18n('entities.projectCharter.hints.projectApprovalRequirements')}
            required={false}
          />
        </div>
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
          <InputFormItem
            name="successCriteria"
            label={i18n('entities.projectCharter.fields.successCriteria')}
          hint={i18n('entities.projectCharter.hints.successCriteria')}
            required={false}
          />
        </div>
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
          <InputFormItem
            name="projectExitCriteria"
            label={i18n('entities.projectCharter.fields.projectExitCriteria')}
          hint={i18n('entities.projectCharter.hints.projectExitCriteria')}
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

export default ProjectCharterForm;
