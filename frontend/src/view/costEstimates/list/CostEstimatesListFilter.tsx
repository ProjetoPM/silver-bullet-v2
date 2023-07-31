import {
  faSearch,
  faUndo,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';    
import { i18n } from 'src/i18n';
import actions from 'src/modules/costEstimates/list/costEstimatesListActions';
import selectors from 'src/modules/costEstimates/list/costEstimatesListSelectors';
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useForm, FormProvider } from 'react-hook-form';
import yupFilterSchemas from 'src/modules/shared/yup/yupFilterSchemas';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import FilterPreview from 'src/view/shared/filter/FilterPreview';
import filterRenders from 'src/modules/shared/filter/filterRenders';
import InputFormItem from 'src/view/shared/form/items/InputFormItem';
import InputRangeFormItem from 'src/view/shared/form/items/InputRangeFormItem';

const schema = yup.object().shape({
  estimatedCost: yupFilterSchemas.string(
    i18n('entities.costEstimates.fields.estimatedCost'),
  ),
  cumulativeEstimatedCostRange: yupFilterSchemas.decimalRange(
    i18n('entities.costEstimates.fields.cumulativeEstimatedCostRange'),
  ),
  replantedCostRange: yupFilterSchemas.decimalRange(
    i18n('entities.costEstimates.fields.replantedCostRange'),
  ),
  contingencyReserveRange: yupFilterSchemas.decimalRange(
    i18n('entities.costEstimates.fields.contingencyReserveRange'),
  ),
  sumWorkPackagesRange: yupFilterSchemas.decimalRange(
    i18n('entities.costEstimates.fields.sumWorkPackagesRange'),
  ),
  contingencyReservePackagesRange: yupFilterSchemas.decimalRange(
    i18n('entities.costEstimates.fields.contingencyReservePackagesRange'),
  ),
  baseline: yupFilterSchemas.string(
    i18n('entities.costEstimates.fields.baseline'),
  ),
  budgetRange: yupFilterSchemas.decimalRange(
    i18n('entities.costEstimates.fields.budgetRange'),
  ),
  cumulativeReplantedCostRange: yupFilterSchemas.decimalRange(
    i18n('entities.costEstimates.fields.cumulativeReplantedCostRange'),
  ),
  realCostRange: yupFilterSchemas.decimalRange(
    i18n('entities.costEstimates.fields.realCostRange'),
  ),
  cumulativeRealCostRange: yupFilterSchemas.decimalRange(
    i18n('entities.costEstimates.fields.cumulativeRealCostRange'),
  ),
  managementReserveRange: yupFilterSchemas.decimalRange(
    i18n('entities.costEstimates.fields.managementReserveRange'),
  ),
});

const emptyValues = {
  estimatedCost: null,
  cumulativeEstimatedCostRange: [],
  replantedCostRange: [],
  contingencyReserveRange: [],
  sumWorkPackagesRange: [],
  contingencyReservePackagesRange: [],
  baseline: null,
  budgetRange: [],
  cumulativeReplantedCostRange: [],
  realCostRange: [],
  cumulativeRealCostRange: [],
  managementReserveRange: [],
}

const previewRenders = {
  estimatedCost: {
    label: i18n('entities.costEstimates.fields.estimatedCost'),
    render: filterRenders.generic(),
  },
  cumulativeEstimatedCostRange: {
    label: i18n('entities.costEstimates.fields.cumulativeEstimatedCostRange'),
    render: filterRenders.decimalRange(),
  },
  replantedCostRange: {
    label: i18n('entities.costEstimates.fields.replantedCostRange'),
    render: filterRenders.decimalRange(),
  },
  contingencyReserveRange: {
    label: i18n('entities.costEstimates.fields.contingencyReserveRange'),
    render: filterRenders.decimalRange(),
  },
  sumWorkPackagesRange: {
    label: i18n('entities.costEstimates.fields.sumWorkPackagesRange'),
    render: filterRenders.decimalRange(),
  },
  contingencyReservePackagesRange: {
    label: i18n('entities.costEstimates.fields.contingencyReservePackagesRange'),
    render: filterRenders.decimalRange(),
  },
  baseline: {
    label: i18n('entities.costEstimates.fields.baseline'),
    render: filterRenders.generic(),
  },
  budgetRange: {
    label: i18n('entities.costEstimates.fields.budgetRange'),
    render: filterRenders.decimalRange(),
  },
  cumulativeReplantedCostRange: {
    label: i18n('entities.costEstimates.fields.cumulativeReplantedCostRange'),
    render: filterRenders.decimalRange(),
  },
  realCostRange: {
    label: i18n('entities.costEstimates.fields.realCostRange'),
    render: filterRenders.decimalRange(),
  },
  cumulativeRealCostRange: {
    label: i18n('entities.costEstimates.fields.cumulativeRealCostRange'),
    render: filterRenders.decimalRange(),
  },
  managementReserveRange: {
    label: i18n('entities.costEstimates.fields.managementReserveRange'),
    render: filterRenders.decimalRange(),
  },
}

function CostEstimatesListFilter(props) {
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
                name="estimatedCost"
                label={i18n('entities.costEstimates.fields.estimatedCost')}      
              />
              <InputRangeFormItem
                name="cumulativeEstimatedCostRange"
                label={i18n('entities.costEstimates.fields.cumulativeEstimatedCostRange')}      
              />
              <InputRangeFormItem
                name="replantedCostRange"
                label={i18n('entities.costEstimates.fields.replantedCostRange')}      
              />
              <InputRangeFormItem
                name="contingencyReserveRange"
                label={i18n('entities.costEstimates.fields.contingencyReserveRange')}      
              />
              <InputRangeFormItem
                name="sumWorkPackagesRange"
                label={i18n('entities.costEstimates.fields.sumWorkPackagesRange')}      
              />
              <InputRangeFormItem
                name="contingencyReservePackagesRange"
                label={i18n('entities.costEstimates.fields.contingencyReservePackagesRange')}      
              />
              <InputFormItem
                name="baseline"
                label={i18n('entities.costEstimates.fields.baseline')}      
              />
              <InputRangeFormItem
                name="budgetRange"
                label={i18n('entities.costEstimates.fields.budgetRange')}      
              />
              <InputRangeFormItem
                name="cumulativeReplantedCostRange"
                label={i18n('entities.costEstimates.fields.cumulativeReplantedCostRange')}      
              />
              <InputRangeFormItem
                name="realCostRange"
                label={i18n('entities.costEstimates.fields.realCostRange')}      
              />
              <InputRangeFormItem
                name="cumulativeRealCostRange"
                label={i18n('entities.costEstimates.fields.cumulativeRealCostRange')}      
              />
              <InputRangeFormItem
                name="managementReserveRange"
                label={i18n('entities.costEstimates.fields.managementReserveRange')}      
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

export default CostEstimatesListFilter;