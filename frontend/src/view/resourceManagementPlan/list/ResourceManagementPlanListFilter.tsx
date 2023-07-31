import {
  faSearch,
  faUndo,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';    
import { i18n } from 'src/i18n';
import actions from 'src/modules/resourceManagementPlan/list/resourceManagementPlanListActions';
import selectors from 'src/modules/resourceManagementPlan/list/resourceManagementPlanListSelectors';
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
  rolesResponsibilities: yupFilterSchemas.string(
    i18n('entities.resourceManagementPlan.fields.rolesResponsibilities'),
  ),
  projectOrganizationCharts: yupFilterSchemas.string(
    i18n('entities.resourceManagementPlan.fields.projectOrganizationCharts'),
  ),
  teamDevelopment: yupFilterSchemas.string(
    i18n('entities.resourceManagementPlan.fields.teamDevelopment'),
  ),
  identificationResources: yupFilterSchemas.string(
    i18n('entities.resourceManagementPlan.fields.identificationResources'),
  ),
  projectResourceManagement: yupFilterSchemas.string(
    i18n('entities.resourceManagementPlan.fields.projectResourceManagement'),
  ),
  training: yupFilterSchemas.string(
    i18n('entities.resourceManagementPlan.fields.training'),
  ),
  resourceControl: yupFilterSchemas.string(
    i18n('entities.resourceManagementPlan.fields.resourceControl'),
  ),
  recognitionPlan: yupFilterSchemas.string(
    i18n('entities.resourceManagementPlan.fields.recognitionPlan'),
  ),
});

const emptyValues = {
  rolesResponsibilities: null,
  projectOrganizationCharts: null,
  teamDevelopment: null,
  identificationResources: null,
  projectResourceManagement: null,
  training: null,
  resourceControl: null,
  recognitionPlan: null,
}

const previewRenders = {
  rolesResponsibilities: {
    label: i18n('entities.resourceManagementPlan.fields.rolesResponsibilities'),
    render: filterRenders.generic(),
  },
  projectOrganizationCharts: {
    label: i18n('entities.resourceManagementPlan.fields.projectOrganizationCharts'),
    render: filterRenders.generic(),
  },
  teamDevelopment: {
    label: i18n('entities.resourceManagementPlan.fields.teamDevelopment'),
    render: filterRenders.generic(),
  },
  identificationResources: {
    label: i18n('entities.resourceManagementPlan.fields.identificationResources'),
    render: filterRenders.generic(),
  },
  projectResourceManagement: {
    label: i18n('entities.resourceManagementPlan.fields.projectResourceManagement'),
    render: filterRenders.generic(),
  },
  training: {
    label: i18n('entities.resourceManagementPlan.fields.training'),
    render: filterRenders.generic(),
  },
  resourceControl: {
    label: i18n('entities.resourceManagementPlan.fields.resourceControl'),
    render: filterRenders.generic(),
  },
  recognitionPlan: {
    label: i18n('entities.resourceManagementPlan.fields.recognitionPlan'),
    render: filterRenders.generic(),
  },
}

function ResourceManagementPlanListFilter(props) {
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
                name="rolesResponsibilities"
                label={i18n('entities.resourceManagementPlan.fields.rolesResponsibilities')}      
              />
              <InputFormItem
                name="projectOrganizationCharts"
                label={i18n('entities.resourceManagementPlan.fields.projectOrganizationCharts')}      
              />
              <InputFormItem
                name="teamDevelopment"
                label={i18n('entities.resourceManagementPlan.fields.teamDevelopment')}      
              />
              <InputFormItem
                name="identificationResources"
                label={i18n('entities.resourceManagementPlan.fields.identificationResources')}      
              />
              <InputFormItem
                name="projectResourceManagement"
                label={i18n('entities.resourceManagementPlan.fields.projectResourceManagement')}      
              />
              <InputFormItem
                name="training"
                label={i18n('entities.resourceManagementPlan.fields.training')}      
              />
              <InputFormItem
                name="resourceControl"
                label={i18n('entities.resourceManagementPlan.fields.resourceControl')}      
              />
              <InputFormItem
                name="recognitionPlan"
                label={i18n('entities.resourceManagementPlan.fields.recognitionPlan')}      
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

export default ResourceManagementPlanListFilter;