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
import SelectFormItem from 'src/view/shared/form/items/SelectFormItem';
import riskRegistrationEnumerators from 'src/modules/riskRegistration/riskRegistrationEnumerators';
import moment from 'moment';
import DatePickerFormItem from 'src/view/shared/form/items/DatePickerFormItem';
import * as yup from 'yup';

const schema = yup.object().shape({
  impactedObjective: yupFormSchemas.string(
    i18n('entities.riskRegistration.fields.impactedObjective'),
    {},
  ),
  priority: yupFormSchemas.enumerator(
    i18n('entities.riskRegistration.fields.priority'),
    {
      "options": riskRegistrationEnumerators.priority
    },
  ),
  currentRiskStatus: yupFormSchemas.string(
    i18n('entities.riskRegistration.fields.currentRiskStatus'),
    {},
  ),
  event: yupFormSchemas.string(
    i18n('entities.riskRegistration.fields.event'),
    {},
  ),
  identificationDate: yupFormSchemas.date(
    i18n('entities.riskRegistration.fields.identificationDate'),
    {},
  ),
  identifier: yupFormSchemas.string(
    i18n('entities.riskRegistration.fields.identifier'),
    {},
  ),
  riskType: yupFormSchemas.string(
    i18n('entities.riskRegistration.fields.riskType'),
    {},
  ),
  lessonsLearned: yupFormSchemas.string(
    i18n('entities.riskRegistration.fields.lessonsLearned'),
    {},
  ),
  riskCategory: yupFormSchemas.string(
    i18n('entities.riskRegistration.fields.riskCategory'),
    {},
  ),
  fallbackPlans: yupFormSchemas.string(
    i18n('entities.riskRegistration.fields.fallbackPlans'),
    {},
  ),
  contingencyPlansOwners: yupFormSchemas.string(
    i18n('entities.riskRegistration.fields.contingencyPlansOwners'),
    {},
  ),
  contingencyPlans: yupFormSchemas.string(
    i18n('entities.riskRegistration.fields.contingencyPlans'),
    {},
  ),
  secondaryRisks: yupFormSchemas.string(
    i18n('entities.riskRegistration.fields.secondaryRisks'),
    {},
  ),
  residualRisks: yupFormSchemas.string(
    i18n('entities.riskRegistration.fields.residualRisks'),
    {},
  ),
  timingInformation: yupFormSchemas.string(
    i18n('entities.riskRegistration.fields.timingInformation'),
    {},
  ),
  potentialRiskOwners: yupFormSchemas.string(
    i18n('entities.riskRegistration.fields.potentialRiskOwners'),
    {},
  ),
  listPotentialRiskResponses: yupFormSchemas.string(
    i18n('entities.riskRegistration.fields.listPotentialRiskResponses'),
    {},
  ),
  riskTriggers: yupFormSchemas.string(
    i18n('entities.riskRegistration.fields.riskTriggers'),
    {},
  ),
  oneOrMoreCauses: yupFormSchemas.string(
    i18n('entities.riskRegistration.fields.oneOrMoreCauses'),
    {},
  ),
  riskStrategy: yupFormSchemas.string(
    i18n('entities.riskRegistration.fields.riskStrategy'),
    {},
  ),
  oneMoreEffectsObjectives: yupFormSchemas.string(
    i18n('entities.riskRegistration.fields.oneMoreEffectsObjectives'),
    {},
  ),
  riskScore: yupFormSchemas.string(
    i18n('entities.riskRegistration.fields.riskScore'),
    {},
  ),
  impact: yupFormSchemas.string(
    i18n('entities.riskRegistration.fields.impact'),
    {},
  ),
  probability: yupFormSchemas.string(
    i18n('entities.riskRegistration.fields.probability'),
    {},
  ),
});

function RiskRegistrationForm(props) {
  const { saveLoading } = props;

  const [initialValues] = useState(() => {
    const record = props.record || {};

    return {
      impactedObjective: record.impactedObjective,
      priority: record.priority,
      currentRiskStatus: record.currentRiskStatus,
      event: record.event,
      identificationDate: record.identificationDate ? moment(record.identificationDate, 'YYYY-MM-DD').toDate() : null,
      identifier: record.identifier,
      riskType: record.riskType,
      lessonsLearned: record.lessonsLearned,
      riskCategory: record.riskCategory,
      fallbackPlans: record.fallbackPlans,
      contingencyPlansOwners: record.contingencyPlansOwners,
      contingencyPlans: record.contingencyPlans,
      secondaryRisks: record.secondaryRisks,
      residualRisks: record.residualRisks,
      timingInformation: record.timingInformation,
      potentialRiskOwners: record.potentialRiskOwners,
      listPotentialRiskResponses: record.listPotentialRiskResponses,
      riskTriggers: record.riskTriggers,
      oneOrMoreCauses: record.oneOrMoreCauses,
      riskStrategy: record.riskStrategy,
      oneMoreEffectsObjectives: record.oneMoreEffectsObjectives,
      riskScore: record.riskScore,
      impact: record.impact,
      probability: record.probability,
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
            name="impactedObjective"
            label={i18n('entities.riskRegistration.fields.impactedObjective')}
          hint={i18n('entities.riskRegistration.hints.impactedObjective')}
            required={false}
          autoFocus
          />
        </div>
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
          <SelectFormItem
            name="priority"
            label={i18n('entities.riskRegistration.fields.priority')}
          hint={i18n('entities.riskRegistration.hints.priority')}
            options={riskRegistrationEnumerators.priority.map(
              (value) => ({
                value,
                label: i18n(
                  `entities.riskRegistration.enumerators.priority.${value}`,
                ),
              }),
            )}
            required={false}
          />
        </div>
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
          <InputFormItem
            name="currentRiskStatus"
            label={i18n('entities.riskRegistration.fields.currentRiskStatus')}
          hint={i18n('entities.riskRegistration.hints.currentRiskStatus')}
            required={false}
          />
        </div>
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
          <InputFormItem
            name="event"
            label={i18n('entities.riskRegistration.fields.event')}
          hint={i18n('entities.riskRegistration.hints.event')}
            required={false}
          />
        </div>
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
          <DatePickerFormItem
            name="identificationDate"
            label={i18n('entities.riskRegistration.fields.identificationDate')}
          hint={i18n('entities.riskRegistration.hints.identificationDate')}
            required={false}
          />
        </div>
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
          <InputFormItem
            name="identifier"
            label={i18n('entities.riskRegistration.fields.identifier')}
          hint={i18n('entities.riskRegistration.hints.identifier')}
            required={false}
          />
        </div>
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
          <InputFormItem
            name="riskType"
            label={i18n('entities.riskRegistration.fields.riskType')}
          hint={i18n('entities.riskRegistration.hints.riskType')}
            required={false}
          />
        </div>
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
          <InputFormItem
            name="lessonsLearned"
            label={i18n('entities.riskRegistration.fields.lessonsLearned')}
          hint={i18n('entities.riskRegistration.hints.lessonsLearned')}
            required={false}
          />
        </div>
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
          <InputFormItem
            name="riskCategory"
            label={i18n('entities.riskRegistration.fields.riskCategory')}
          hint={i18n('entities.riskRegistration.hints.riskCategory')}
            required={false}
          />
        </div>
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
          <InputFormItem
            name="fallbackPlans"
            label={i18n('entities.riskRegistration.fields.fallbackPlans')}
          hint={i18n('entities.riskRegistration.hints.fallbackPlans')}
            required={false}
          />
        </div>
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
          <InputFormItem
            name="contingencyPlansOwners"
            label={i18n('entities.riskRegistration.fields.contingencyPlansOwners')}
          hint={i18n('entities.riskRegistration.hints.contingencyPlansOwners')}
            required={false}
          />
        </div>
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
          <InputFormItem
            name="contingencyPlans"
            label={i18n('entities.riskRegistration.fields.contingencyPlans')}
          hint={i18n('entities.riskRegistration.hints.contingencyPlans')}
            required={false}
          />
        </div>
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
          <InputFormItem
            name="secondaryRisks"
            label={i18n('entities.riskRegistration.fields.secondaryRisks')}
          hint={i18n('entities.riskRegistration.hints.secondaryRisks')}
            required={false}
          />
        </div>
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
          <InputFormItem
            name="residualRisks"
            label={i18n('entities.riskRegistration.fields.residualRisks')}
          hint={i18n('entities.riskRegistration.hints.residualRisks')}
            required={false}
          />
        </div>
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
          <InputFormItem
            name="timingInformation"
            label={i18n('entities.riskRegistration.fields.timingInformation')}
          hint={i18n('entities.riskRegistration.hints.timingInformation')}
            required={false}
          />
        </div>
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
          <InputFormItem
            name="potentialRiskOwners"
            label={i18n('entities.riskRegistration.fields.potentialRiskOwners')}
          hint={i18n('entities.riskRegistration.hints.potentialRiskOwners')}
            required={false}
          />
        </div>
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
          <InputFormItem
            name="listPotentialRiskResponses"
            label={i18n('entities.riskRegistration.fields.listPotentialRiskResponses')}
          hint={i18n('entities.riskRegistration.hints.listPotentialRiskResponses')}
            required={false}
          />
        </div>
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
          <InputFormItem
            name="riskTriggers"
            label={i18n('entities.riskRegistration.fields.riskTriggers')}
          hint={i18n('entities.riskRegistration.hints.riskTriggers')}
            required={false}
          />
        </div>
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
          <InputFormItem
            name="oneOrMoreCauses"
            label={i18n('entities.riskRegistration.fields.oneOrMoreCauses')}
          hint={i18n('entities.riskRegistration.hints.oneOrMoreCauses')}
            required={false}
          />
        </div>
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
          <InputFormItem
            name="riskStrategy"
            label={i18n('entities.riskRegistration.fields.riskStrategy')}
          hint={i18n('entities.riskRegistration.hints.riskStrategy')}
            required={false}
          />
        </div>
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
          <InputFormItem
            name="oneMoreEffectsObjectives"
            label={i18n('entities.riskRegistration.fields.oneMoreEffectsObjectives')}
          hint={i18n('entities.riskRegistration.hints.oneMoreEffectsObjectives')}
            required={false}
          />
        </div>
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
          <InputFormItem
            name="riskScore"
            label={i18n('entities.riskRegistration.fields.riskScore')}
          hint={i18n('entities.riskRegistration.hints.riskScore')}
            required={false}
          />
        </div>
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
          <InputFormItem
            name="impact"
            label={i18n('entities.riskRegistration.fields.impact')}
          hint={i18n('entities.riskRegistration.hints.impact')}
            required={false}
          />
        </div>
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
          <InputFormItem
            name="probability"
            label={i18n('entities.riskRegistration.fields.probability')}
          hint={i18n('entities.riskRegistration.hints.probability')}
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

export default RiskRegistrationForm;
