import {
  faSearch,
  faUndo,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';    
import { i18n } from 'src/i18n';
import actions from 'src/modules/projectManagementPlan/list/projectManagementPlanListActions';
import selectors from 'src/modules/projectManagementPlan/list/projectManagementPlanListSelectors';
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
  scopeManagementPlan: yupFilterSchemas.string(
    i18n('entities.projectManagementPlan.fields.scopeManagementPlan'),
  ),
  requirementsManagementPlan: yupFilterSchemas.string(
    i18n('entities.projectManagementPlan.fields.requirementsManagementPlan'),
  ),
  scheduleManagementPlan: yupFilterSchemas.string(
    i18n('entities.projectManagementPlan.fields.scheduleManagementPlan'),
  ),
  costManagementPlan: yupFilterSchemas.string(
    i18n('entities.projectManagementPlan.fields.costManagementPlan'),
  ),
  qualityManagementPlan: yupFilterSchemas.string(
    i18n('entities.projectManagementPlan.fields.qualityManagementPlan'),
  ),
  resourceManagementPlan: yupFilterSchemas.string(
    i18n('entities.projectManagementPlan.fields.resourceManagementPlan'),
  ),
  communicationsManagementPlan: yupFilterSchemas.string(
    i18n('entities.projectManagementPlan.fields.communicationsManagementPlan'),
  ),
  riskManagementPlan: yupFilterSchemas.string(
    i18n('entities.projectManagementPlan.fields.riskManagementPlan'),
  ),
  procurementManagementPlan: yupFilterSchemas.string(
    i18n('entities.projectManagementPlan.fields.procurementManagementPlan'),
  ),
  stakeholderEngagementPlan: yupFilterSchemas.string(
    i18n('entities.projectManagementPlan.fields.stakeholderEngagementPlan'),
  ),
  scopeBaseline: yupFilterSchemas.string(
    i18n('entities.projectManagementPlan.fields.scopeBaseline'),
  ),
  scheduleBaseline: yupFilterSchemas.string(
    i18n('entities.projectManagementPlan.fields.scheduleBaseline'),
  ),
  costBaseline: yupFilterSchemas.string(
    i18n('entities.projectManagementPlan.fields.costBaseline'),
  ),
  changeManagementPlan: yupFilterSchemas.string(
    i18n('entities.projectManagementPlan.fields.changeManagementPlan'),
  ),
  configurationManagementPlan: yupFilterSchemas.string(
    i18n('entities.projectManagementPlan.fields.configurationManagementPlan'),
  ),
  performanceMeasurementBaseline: yupFilterSchemas.string(
    i18n('entities.projectManagementPlan.fields.performanceMeasurementBaseline'),
  ),
  projectLifeCycle: yupFilterSchemas.string(
    i18n('entities.projectManagementPlan.fields.projectLifeCycle'),
  ),
  developmentApproach: yupFilterSchemas.string(
    i18n('entities.projectManagementPlan.fields.developmentApproach'),
  ),
  managementReviews: yupFilterSchemas.string(
    i18n('entities.projectManagementPlan.fields.managementReviews'),
  ),
});

const emptyValues = {
  scopeManagementPlan: null,
  requirementsManagementPlan: null,
  scheduleManagementPlan: null,
  costManagementPlan: null,
  qualityManagementPlan: null,
  resourceManagementPlan: null,
  communicationsManagementPlan: null,
  riskManagementPlan: null,
  procurementManagementPlan: null,
  stakeholderEngagementPlan: null,
  scopeBaseline: null,
  scheduleBaseline: null,
  costBaseline: null,
  changeManagementPlan: null,
  configurationManagementPlan: null,
  performanceMeasurementBaseline: null,
  projectLifeCycle: null,
  developmentApproach: null,
  managementReviews: null,
}

const previewRenders = {
  scopeManagementPlan: {
    label: i18n('entities.projectManagementPlan.fields.scopeManagementPlan'),
    render: filterRenders.generic(),
  },
  requirementsManagementPlan: {
    label: i18n('entities.projectManagementPlan.fields.requirementsManagementPlan'),
    render: filterRenders.generic(),
  },
  scheduleManagementPlan: {
    label: i18n('entities.projectManagementPlan.fields.scheduleManagementPlan'),
    render: filterRenders.generic(),
  },
  costManagementPlan: {
    label: i18n('entities.projectManagementPlan.fields.costManagementPlan'),
    render: filterRenders.generic(),
  },
  qualityManagementPlan: {
    label: i18n('entities.projectManagementPlan.fields.qualityManagementPlan'),
    render: filterRenders.generic(),
  },
  resourceManagementPlan: {
    label: i18n('entities.projectManagementPlan.fields.resourceManagementPlan'),
    render: filterRenders.generic(),
  },
  communicationsManagementPlan: {
    label: i18n('entities.projectManagementPlan.fields.communicationsManagementPlan'),
    render: filterRenders.generic(),
  },
  riskManagementPlan: {
    label: i18n('entities.projectManagementPlan.fields.riskManagementPlan'),
    render: filterRenders.generic(),
  },
  procurementManagementPlan: {
    label: i18n('entities.projectManagementPlan.fields.procurementManagementPlan'),
    render: filterRenders.generic(),
  },
  stakeholderEngagementPlan: {
    label: i18n('entities.projectManagementPlan.fields.stakeholderEngagementPlan'),
    render: filterRenders.generic(),
  },
  scopeBaseline: {
    label: i18n('entities.projectManagementPlan.fields.scopeBaseline'),
    render: filterRenders.generic(),
  },
  scheduleBaseline: {
    label: i18n('entities.projectManagementPlan.fields.scheduleBaseline'),
    render: filterRenders.generic(),
  },
  costBaseline: {
    label: i18n('entities.projectManagementPlan.fields.costBaseline'),
    render: filterRenders.generic(),
  },
  changeManagementPlan: {
    label: i18n('entities.projectManagementPlan.fields.changeManagementPlan'),
    render: filterRenders.generic(),
  },
  configurationManagementPlan: {
    label: i18n('entities.projectManagementPlan.fields.configurationManagementPlan'),
    render: filterRenders.generic(),
  },
  performanceMeasurementBaseline: {
    label: i18n('entities.projectManagementPlan.fields.performanceMeasurementBaseline'),
    render: filterRenders.generic(),
  },
  projectLifeCycle: {
    label: i18n('entities.projectManagementPlan.fields.projectLifeCycle'),
    render: filterRenders.generic(),
  },
  developmentApproach: {
    label: i18n('entities.projectManagementPlan.fields.developmentApproach'),
    render: filterRenders.generic(),
  },
  managementReviews: {
    label: i18n('entities.projectManagementPlan.fields.managementReviews'),
    render: filterRenders.generic(),
  },
}

function ProjectManagementPlanListFilter(props) {
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
                name="scopeManagementPlan"
                label={i18n('entities.projectManagementPlan.fields.scopeManagementPlan')}      
              />
              <InputFormItem
                name="requirementsManagementPlan"
                label={i18n('entities.projectManagementPlan.fields.requirementsManagementPlan')}      
              />
              <InputFormItem
                name="scheduleManagementPlan"
                label={i18n('entities.projectManagementPlan.fields.scheduleManagementPlan')}      
              />
              <InputFormItem
                name="costManagementPlan"
                label={i18n('entities.projectManagementPlan.fields.costManagementPlan')}      
              />
              <InputFormItem
                name="qualityManagementPlan"
                label={i18n('entities.projectManagementPlan.fields.qualityManagementPlan')}      
              />
              <InputFormItem
                name="resourceManagementPlan"
                label={i18n('entities.projectManagementPlan.fields.resourceManagementPlan')}      
              />
              <InputFormItem
                name="communicationsManagementPlan"
                label={i18n('entities.projectManagementPlan.fields.communicationsManagementPlan')}      
              />
              <InputFormItem
                name="riskManagementPlan"
                label={i18n('entities.projectManagementPlan.fields.riskManagementPlan')}      
              />
              <InputFormItem
                name="procurementManagementPlan"
                label={i18n('entities.projectManagementPlan.fields.procurementManagementPlan')}      
              />
              <InputFormItem
                name="stakeholderEngagementPlan"
                label={i18n('entities.projectManagementPlan.fields.stakeholderEngagementPlan')}      
              />
              <InputFormItem
                name="scopeBaseline"
                label={i18n('entities.projectManagementPlan.fields.scopeBaseline')}      
              />
              <InputFormItem
                name="scheduleBaseline"
                label={i18n('entities.projectManagementPlan.fields.scheduleBaseline')}      
              />
              <InputFormItem
                name="costBaseline"
                label={i18n('entities.projectManagementPlan.fields.costBaseline')}      
              />
              <InputFormItem
                name="changeManagementPlan"
                label={i18n('entities.projectManagementPlan.fields.changeManagementPlan')}      
              />
              <InputFormItem
                name="configurationManagementPlan"
                label={i18n('entities.projectManagementPlan.fields.configurationManagementPlan')}      
              />
              <InputFormItem
                name="performanceMeasurementBaseline"
                label={i18n('entities.projectManagementPlan.fields.performanceMeasurementBaseline')}      
              />
              <InputFormItem
                name="projectLifeCycle"
                label={i18n('entities.projectManagementPlan.fields.projectLifeCycle')}      
              />
              <InputFormItem
                name="developmentApproach"
                label={i18n('entities.projectManagementPlan.fields.developmentApproach')}      
              />
              <InputFormItem
                name="managementReviews"
                label={i18n('entities.projectManagementPlan.fields.managementReviews')}      
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

export default ProjectManagementPlanListFilter;