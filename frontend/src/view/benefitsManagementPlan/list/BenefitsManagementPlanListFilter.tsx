import {
  faSearch,
  faUndo,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';    
import { i18n } from 'src/i18n';
import actions from 'src/modules/benefitsManagementPlan/list/benefitsManagementPlanListActions';
import selectors from 'src/modules/benefitsManagementPlan/list/benefitsManagementPlanListSelectors';
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
  targetBenefits: yupFilterSchemas.string(
    i18n('entities.benefitsManagementPlan.fields.targetBenefits'),
  ),
  strategicAlignment: yupFilterSchemas.string(
    i18n('entities.benefitsManagementPlan.fields.strategicAlignment'),
  ),
  scheduleforBenefits: yupFilterSchemas.string(
    i18n('entities.benefitsManagementPlan.fields.scheduleforBenefits'),
  ),
  benefitsOwner: yupFilterSchemas.string(
    i18n('entities.benefitsManagementPlan.fields.benefitsOwner'),
  ),
  indicators: yupFilterSchemas.string(
    i18n('entities.benefitsManagementPlan.fields.indicators'),
  ),
  premises: yupFilterSchemas.string(
    i18n('entities.benefitsManagementPlan.fields.premises'),
  ),
  risks: yupFilterSchemas.string(
    i18n('entities.benefitsManagementPlan.fields.risks'),
  ),
});

const emptyValues = {
  targetBenefits: null,
  strategicAlignment: null,
  scheduleforBenefits: null,
  benefitsOwner: null,
  indicators: null,
  premises: null,
  risks: null,
}

const previewRenders = {
  targetBenefits: {
    label: i18n('entities.benefitsManagementPlan.fields.targetBenefits'),
    render: filterRenders.generic(),
  },
  strategicAlignment: {
    label: i18n('entities.benefitsManagementPlan.fields.strategicAlignment'),
    render: filterRenders.generic(),
  },
  scheduleforBenefits: {
    label: i18n('entities.benefitsManagementPlan.fields.scheduleforBenefits'),
    render: filterRenders.generic(),
  },
  benefitsOwner: {
    label: i18n('entities.benefitsManagementPlan.fields.benefitsOwner'),
    render: filterRenders.generic(),
  },
  indicators: {
    label: i18n('entities.benefitsManagementPlan.fields.indicators'),
    render: filterRenders.generic(),
  },
  premises: {
    label: i18n('entities.benefitsManagementPlan.fields.premises'),
    render: filterRenders.generic(),
  },
  risks: {
    label: i18n('entities.benefitsManagementPlan.fields.risks'),
    render: filterRenders.generic(),
  },
}

function BenefitsManagementPlanListFilter(props) {
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
                name="targetBenefits"
                label={i18n('entities.benefitsManagementPlan.fields.targetBenefits')}      
              />
              <InputFormItem
                name="strategicAlignment"
                label={i18n('entities.benefitsManagementPlan.fields.strategicAlignment')}      
              />
              <InputFormItem
                name="scheduleforBenefits"
                label={i18n('entities.benefitsManagementPlan.fields.scheduleforBenefits')}      
              />
              <InputFormItem
                name="benefitsOwner"
                label={i18n('entities.benefitsManagementPlan.fields.benefitsOwner')}      
              />
              <InputFormItem
                name="indicators"
                label={i18n('entities.benefitsManagementPlan.fields.indicators')}      
              />
              <InputFormItem
                name="premises"
                label={i18n('entities.benefitsManagementPlan.fields.premises')}      
              />
              <InputFormItem
                name="risks"
                label={i18n('entities.benefitsManagementPlan.fields.risks')}      
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

export default BenefitsManagementPlanListFilter;