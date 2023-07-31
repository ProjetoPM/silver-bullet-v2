import {
  faSearch,
  faUndo,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';    
import { i18n } from 'src/i18n';
import actions from 'src/modules/riskManagementPlan/list/riskManagementPlanListActions';
import selectors from 'src/modules/riskManagementPlan/list/riskManagementPlanListSelectors';
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
  methodology: yupFilterSchemas.string(
    i18n('entities.riskManagementPlan.fields.methodology'),
  ),
  rolesResponsibilities: yupFilterSchemas.string(
    i18n('entities.riskManagementPlan.fields.rolesResponsibilities'),
  ),
  probabilityImpactMatrix: yupFilterSchemas.string(
    i18n('entities.riskManagementPlan.fields.probabilityImpactMatrix'),
  ),
  riskCategories: yupFilterSchemas.string(
    i18n('entities.riskManagementPlan.fields.riskCategories'),
  ),
  riskStrategy: yupFilterSchemas.string(
    i18n('entities.riskManagementPlan.fields.riskStrategy'),
  ),
  tracking: yupFilterSchemas.string(
    i18n('entities.riskManagementPlan.fields.tracking'),
  ),
  funding: yupFilterSchemas.string(
    i18n('entities.riskManagementPlan.fields.funding'),
  ),
  timing: yupFilterSchemas.string(
    i18n('entities.riskManagementPlan.fields.timing'),
  ),
  stakeholderRiskAppetite: yupFilterSchemas.string(
    i18n('entities.riskManagementPlan.fields.stakeholderRiskAppetite'),
  ),
  definitionsRiskProbabilityImpacts: yupFilterSchemas.string(
    i18n('entities.riskManagementPlan.fields.definitionsRiskProbabilityImpacts'),
  ),
  reportingFormats: yupFilterSchemas.string(
    i18n('entities.riskManagementPlan.fields.reportingFormats'),
  ),
});

const emptyValues = {
  methodology: null,
  rolesResponsibilities: null,
  probabilityImpactMatrix: null,
  riskCategories: null,
  riskStrategy: null,
  tracking: null,
  funding: null,
  timing: null,
  stakeholderRiskAppetite: null,
  definitionsRiskProbabilityImpacts: null,
  reportingFormats: null,
}

const previewRenders = {
  methodology: {
    label: i18n('entities.riskManagementPlan.fields.methodology'),
    render: filterRenders.generic(),
  },
  rolesResponsibilities: {
    label: i18n('entities.riskManagementPlan.fields.rolesResponsibilities'),
    render: filterRenders.generic(),
  },
  probabilityImpactMatrix: {
    label: i18n('entities.riskManagementPlan.fields.probabilityImpactMatrix'),
    render: filterRenders.generic(),
  },
  riskCategories: {
    label: i18n('entities.riskManagementPlan.fields.riskCategories'),
    render: filterRenders.generic(),
  },
  riskStrategy: {
    label: i18n('entities.riskManagementPlan.fields.riskStrategy'),
    render: filterRenders.generic(),
  },
  tracking: {
    label: i18n('entities.riskManagementPlan.fields.tracking'),
    render: filterRenders.generic(),
  },
  funding: {
    label: i18n('entities.riskManagementPlan.fields.funding'),
    render: filterRenders.generic(),
  },
  timing: {
    label: i18n('entities.riskManagementPlan.fields.timing'),
    render: filterRenders.generic(),
  },
  stakeholderRiskAppetite: {
    label: i18n('entities.riskManagementPlan.fields.stakeholderRiskAppetite'),
    render: filterRenders.generic(),
  },
  definitionsRiskProbabilityImpacts: {
    label: i18n('entities.riskManagementPlan.fields.definitionsRiskProbabilityImpacts'),
    render: filterRenders.generic(),
  },
  reportingFormats: {
    label: i18n('entities.riskManagementPlan.fields.reportingFormats'),
    render: filterRenders.generic(),
  },
}

function RiskManagementPlanListFilter(props) {
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
                name="methodology"
                label={i18n('entities.riskManagementPlan.fields.methodology')}      
              />
              <InputFormItem
                name="rolesResponsibilities"
                label={i18n('entities.riskManagementPlan.fields.rolesResponsibilities')}      
              />
              <InputFormItem
                name="probabilityImpactMatrix"
                label={i18n('entities.riskManagementPlan.fields.probabilityImpactMatrix')}      
              />
              <InputFormItem
                name="riskCategories"
                label={i18n('entities.riskManagementPlan.fields.riskCategories')}      
              />
              <InputFormItem
                name="riskStrategy"
                label={i18n('entities.riskManagementPlan.fields.riskStrategy')}      
              />
              <InputFormItem
                name="tracking"
                label={i18n('entities.riskManagementPlan.fields.tracking')}      
              />
              <InputFormItem
                name="funding"
                label={i18n('entities.riskManagementPlan.fields.funding')}      
              />
              <InputFormItem
                name="timing"
                label={i18n('entities.riskManagementPlan.fields.timing')}      
              />
              <InputFormItem
                name="stakeholderRiskAppetite"
                label={i18n('entities.riskManagementPlan.fields.stakeholderRiskAppetite')}      
              />
              <InputFormItem
                name="definitionsRiskProbabilityImpacts"
                label={i18n('entities.riskManagementPlan.fields.definitionsRiskProbabilityImpacts')}      
              />
              <InputFormItem
                name="reportingFormats"
                label={i18n('entities.riskManagementPlan.fields.reportingFormats')}      
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

export default RiskManagementPlanListFilter;