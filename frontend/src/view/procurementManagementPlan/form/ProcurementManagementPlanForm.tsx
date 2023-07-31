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
  productsServicesWillBeObtained: yupFormSchemas.string(
    i18n('entities.procurementManagementPlan.fields.productsServicesWillBeObtained'),
    {},
  ),
  howProcurementCoordinated: yupFormSchemas.string(
    i18n('entities.procurementManagementPlan.fields.howProcurementCoordinated'),
    {},
  ),
  timetableProcurementActivities: yupFormSchemas.string(
    i18n('entities.procurementManagementPlan.fields.timetableProcurementActivities'),
    {},
  ),
  procurementMetrics: yupFormSchemas.string(
    i18n('entities.procurementManagementPlan.fields.procurementMetrics'),
    {},
  ),
  constraintsAssumptions: yupFormSchemas.string(
    i18n('entities.procurementManagementPlan.fields.constraintsAssumptions'),
    {},
  ),
  stakeholderRolesResponsibilities: yupFormSchemas.string(
    i18n('entities.procurementManagementPlan.fields.stakeholderRolesResponsibilities'),
    {},
  ),
  theLegalJurisdiction: yupFormSchemas.string(
    i18n('entities.procurementManagementPlan.fields.theLegalJurisdiction'),
    {},
  ),
  independentEstimates: yupFormSchemas.string(
    i18n('entities.procurementManagementPlan.fields.independentEstimates'),
    {},
  ),
  riskManagementIssues: yupFormSchemas.string(
    i18n('entities.procurementManagementPlan.fields.riskManagementIssues'),
    {},
  ),
  prequalifiedSellers: yupFormSchemas.string(
    i18n('entities.procurementManagementPlan.fields.prequalifiedSellers'),
    {},
  ),
  procurementStrategy: yupFormSchemas.string(
    i18n('entities.procurementManagementPlan.fields.procurementStrategy'),
    {},
  ),
});

function ProcurementManagementPlanForm(props) {
  const { saveLoading } = props;

  const [initialValues] = useState(() => {
    const record = props.record || {};

    return {
      productsServicesWillBeObtained: record.productsServicesWillBeObtained,
      howProcurementCoordinated: record.howProcurementCoordinated,
      timetableProcurementActivities: record.timetableProcurementActivities,
      procurementMetrics: record.procurementMetrics,
      constraintsAssumptions: record.constraintsAssumptions,
      stakeholderRolesResponsibilities: record.stakeholderRolesResponsibilities,
      theLegalJurisdiction: record.theLegalJurisdiction,
      independentEstimates: record.independentEstimates,
      riskManagementIssues: record.riskManagementIssues,
      prequalifiedSellers: record.prequalifiedSellers,
      procurementStrategy: record.procurementStrategy,
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
            name="productsServicesWillBeObtained"
            label={i18n('entities.procurementManagementPlan.fields.productsServicesWillBeObtained')}
          hint={i18n('entities.procurementManagementPlan.hints.productsServicesWillBeObtained')}
            required={false}
          autoFocus
          />
        </div>
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
          <InputFormItem
            name="howProcurementCoordinated"
            label={i18n('entities.procurementManagementPlan.fields.howProcurementCoordinated')}
          hint={i18n('entities.procurementManagementPlan.hints.howProcurementCoordinated')}
            required={false}
          />
        </div>
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
          <InputFormItem
            name="timetableProcurementActivities"
            label={i18n('entities.procurementManagementPlan.fields.timetableProcurementActivities')}
          hint={i18n('entities.procurementManagementPlan.hints.timetableProcurementActivities')}
            required={false}
          />
        </div>
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
          <InputFormItem
            name="procurementMetrics"
            label={i18n('entities.procurementManagementPlan.fields.procurementMetrics')}
          hint={i18n('entities.procurementManagementPlan.hints.procurementMetrics')}
            required={false}
          />
        </div>
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
          <InputFormItem
            name="constraintsAssumptions"
            label={i18n('entities.procurementManagementPlan.fields.constraintsAssumptions')}
          hint={i18n('entities.procurementManagementPlan.hints.constraintsAssumptions')}
            required={false}
          />
        </div>
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
          <InputFormItem
            name="stakeholderRolesResponsibilities"
            label={i18n('entities.procurementManagementPlan.fields.stakeholderRolesResponsibilities')}
          hint={i18n('entities.procurementManagementPlan.hints.stakeholderRolesResponsibilities')}
            required={false}
          />
        </div>
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
          <InputFormItem
            name="theLegalJurisdiction"
            label={i18n('entities.procurementManagementPlan.fields.theLegalJurisdiction')}
          hint={i18n('entities.procurementManagementPlan.hints.theLegalJurisdiction')}
            required={false}
          />
        </div>
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
          <InputFormItem
            name="independentEstimates"
            label={i18n('entities.procurementManagementPlan.fields.independentEstimates')}
          hint={i18n('entities.procurementManagementPlan.hints.independentEstimates')}
            required={false}
          />
        </div>
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
          <InputFormItem
            name="riskManagementIssues"
            label={i18n('entities.procurementManagementPlan.fields.riskManagementIssues')}
          hint={i18n('entities.procurementManagementPlan.hints.riskManagementIssues')}
            required={false}
          />
        </div>
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
          <InputFormItem
            name="prequalifiedSellers"
            label={i18n('entities.procurementManagementPlan.fields.prequalifiedSellers')}
          hint={i18n('entities.procurementManagementPlan.hints.prequalifiedSellers')}
            required={false}
          />
        </div>
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
          <InputFormItem
            name="procurementStrategy"
            label={i18n('entities.procurementManagementPlan.fields.procurementStrategy')}
          hint={i18n('entities.procurementManagementPlan.hints.procurementStrategy')}
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

export default ProcurementManagementPlanForm;
