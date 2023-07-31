import {
  faSearch,
  faUndo,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';    
import { i18n } from 'src/i18n';
import actions from 'src/modules/procurementManagementPlan/list/procurementManagementPlanListActions';
import selectors from 'src/modules/procurementManagementPlan/list/procurementManagementPlanListSelectors';
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useForm, FormProvider } from 'react-hook-form';
import yupFilterSchemas from 'src/modules/shared/yup/yupFilterSchemas';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import FilterPreview from 'src/view/shared/filter/FilterPreview';
import filterRenders from 'src/modules/shared/filter/filterRenders';
import InputFormItem from 'src/view/shared/form/items/InputFormItem';

const schema = yup.object().shape({
  productsServicesWillBeObtained: yupFilterSchemas.string(
    i18n('entities.procurementManagementPlan.fields.productsServicesWillBeObtained'),
  ),
  howProcurementCoordinated: yupFilterSchemas.string(
    i18n('entities.procurementManagementPlan.fields.howProcurementCoordinated'),
  ),
  timetableProcurementActivities: yupFilterSchemas.string(
    i18n('entities.procurementManagementPlan.fields.timetableProcurementActivities'),
  ),
  procurementMetrics: yupFilterSchemas.string(
    i18n('entities.procurementManagementPlan.fields.procurementMetrics'),
  ),
  constraintsAssumptions: yupFilterSchemas.string(
    i18n('entities.procurementManagementPlan.fields.constraintsAssumptions'),
  ),
  stakeholderRolesResponsibilities: yupFilterSchemas.string(
    i18n('entities.procurementManagementPlan.fields.stakeholderRolesResponsibilities'),
  ),
  theLegalJurisdiction: yupFilterSchemas.string(
    i18n('entities.procurementManagementPlan.fields.theLegalJurisdiction'),
  ),
  independentEstimates: yupFilterSchemas.string(
    i18n('entities.procurementManagementPlan.fields.independentEstimates'),
  ),
  riskManagementIssues: yupFilterSchemas.string(
    i18n('entities.procurementManagementPlan.fields.riskManagementIssues'),
  ),
  prequalifiedSellers: yupFilterSchemas.string(
    i18n('entities.procurementManagementPlan.fields.prequalifiedSellers'),
  ),
  procurementStrategy: yupFilterSchemas.string(
    i18n('entities.procurementManagementPlan.fields.procurementStrategy'),
  ),
});

const emptyValues = {
  productsServicesWillBeObtained: null,
  howProcurementCoordinated: null,
  timetableProcurementActivities: null,
  procurementMetrics: null,
  constraintsAssumptions: null,
  stakeholderRolesResponsibilities: null,
  theLegalJurisdiction: null,
  independentEstimates: null,
  riskManagementIssues: null,
  prequalifiedSellers: null,
  procurementStrategy: null,
}

const previewRenders = {
  productsServicesWillBeObtained: {
    label: i18n('entities.procurementManagementPlan.fields.productsServicesWillBeObtained'),
    render: filterRenders.generic(),
  },
  howProcurementCoordinated: {
    label: i18n('entities.procurementManagementPlan.fields.howProcurementCoordinated'),
    render: filterRenders.generic(),
  },
  timetableProcurementActivities: {
    label: i18n('entities.procurementManagementPlan.fields.timetableProcurementActivities'),
    render: filterRenders.generic(),
  },
  procurementMetrics: {
    label: i18n('entities.procurementManagementPlan.fields.procurementMetrics'),
    render: filterRenders.generic(),
  },
  constraintsAssumptions: {
    label: i18n('entities.procurementManagementPlan.fields.constraintsAssumptions'),
    render: filterRenders.generic(),
  },
  stakeholderRolesResponsibilities: {
    label: i18n('entities.procurementManagementPlan.fields.stakeholderRolesResponsibilities'),
    render: filterRenders.generic(),
  },
  theLegalJurisdiction: {
    label: i18n('entities.procurementManagementPlan.fields.theLegalJurisdiction'),
    render: filterRenders.generic(),
  },
  independentEstimates: {
    label: i18n('entities.procurementManagementPlan.fields.independentEstimates'),
    render: filterRenders.generic(),
  },
  riskManagementIssues: {
    label: i18n('entities.procurementManagementPlan.fields.riskManagementIssues'),
    render: filterRenders.generic(),
  },
  prequalifiedSellers: {
    label: i18n('entities.procurementManagementPlan.fields.prequalifiedSellers'),
    render: filterRenders.generic(),
  },
  procurementStrategy: {
    label: i18n('entities.procurementManagementPlan.fields.procurementStrategy'),
    render: filterRenders.generic(),
  },
}

function ProcurementManagementPlanListFilter(props) {
  const rawFilter = useSelector(selectors.selectRawFilter);
  const dispatch = useDispatch();
  const [expanded, setExpanded] = useState(false);

  const [initialValues] = useState(() => {
    return {
      ...emptyValues,
      ...rawFilter,
    };
  });

  const form = useForm({
    resolver: yupResolver(schema),
    defaultValues: initialValues,
    mode: 'all',
  });

  useEffect(() => {
    dispatch(actions.doFetch(schema.cast(initialValues), rawFilter));
    // eslint-disable-next-line
  }, [dispatch]);

  const onSubmit = (values) => {
    const rawValues = form.getValues();
    dispatch(actions.doFetch(values, rawValues));
    setExpanded(false);
  };

  const onRemove = (key) => {
    form.setValue(key, emptyValues[key]);
    return form.handleSubmit(onSubmit)();
  };

  const onReset = () => {
    Object.keys(emptyValues).forEach((key) => {
      form.setValue(key, emptyValues[key]);
    });
    dispatch(actions.doReset());
    setExpanded(false);
  };

  return (
    <div className="border-gray-200 dark:border-gray-600 border rounded-md mb-2">
      <FilterPreview
        onClick={() => {
          setExpanded(!expanded);
        }}
        renders={previewRenders}
        values={rawFilter}
        expanded={expanded}
        onRemove={onRemove}
      />
      <div className={`${expanded ? 'block' : 'hidden'}`}>
        <FormProvider {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <div className="pl-4 pr-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
              <InputFormItem
                name="productsServicesWillBeObtained"
                label={i18n('entities.procurementManagementPlan.fields.productsServicesWillBeObtained')}      
              />
              <InputFormItem
                name="howProcurementCoordinated"
                label={i18n('entities.procurementManagementPlan.fields.howProcurementCoordinated')}      
              />
              <InputFormItem
                name="timetableProcurementActivities"
                label={i18n('entities.procurementManagementPlan.fields.timetableProcurementActivities')}      
              />
              <InputFormItem
                name="procurementMetrics"
                label={i18n('entities.procurementManagementPlan.fields.procurementMetrics')}      
              />
              <InputFormItem
                name="constraintsAssumptions"
                label={i18n('entities.procurementManagementPlan.fields.constraintsAssumptions')}      
              />
              <InputFormItem
                name="stakeholderRolesResponsibilities"
                label={i18n('entities.procurementManagementPlan.fields.stakeholderRolesResponsibilities')}      
              />
              <InputFormItem
                name="theLegalJurisdiction"
                label={i18n('entities.procurementManagementPlan.fields.theLegalJurisdiction')}      
              />
              <InputFormItem
                name="independentEstimates"
                label={i18n('entities.procurementManagementPlan.fields.independentEstimates')}      
              />
              <InputFormItem
                name="riskManagementIssues"
                label={i18n('entities.procurementManagementPlan.fields.riskManagementIssues')}      
              />
              <InputFormItem
                name="prequalifiedSellers"
                label={i18n('entities.procurementManagementPlan.fields.prequalifiedSellers')}      
              />
              <InputFormItem
                name="procurementStrategy"
                label={i18n('entities.procurementManagementPlan.fields.procurementStrategy')}      
              />
            </div>

            <div className="px-4 py-2 text-right">
              <button
                className="mr-2 mb-2 text-sm disabled:opacity-50 disabled:cursor-default px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600"
                type="submit"
                disabled={props.loading}
              >
                <FontAwesomeIcon
                  className="mr-2"
                  icon={faSearch}
                />
                {i18n('common.search')}
              </button>
              <button
                className="mr-2 mb-2 text-sm disabled:opacity-50 disabled:cursor-default px-4 py-2 tracking-wide dark:border-gray-800 dark:bg-gray-800 dark:hover:bg-gray-600 dark:text-white text-gray-700 border border-gray-300 transition-colors duration-200 transform bg-white rounded-md hover:bg-gray-100 focus:outline-none focus:bg-gray-100"
                type="button"
                onClick={onReset}
                disabled={props.loading}
              >
                <FontAwesomeIcon
                  className="mr-2"
                  icon={faUndo}
                />
                {i18n('common.reset')}
              </button>
            </div>
          </form>
        </FormProvider>
      </div>
    </div>
  );
}

export default ProcurementManagementPlanListFilter;