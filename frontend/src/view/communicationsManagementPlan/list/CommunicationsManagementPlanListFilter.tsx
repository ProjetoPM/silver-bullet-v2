import {
  faSearch,
  faUndo,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';    
import { i18n } from 'src/i18n';
import actions from 'src/modules/communicationsManagementPlan/list/communicationsManagementPlanListActions';
import selectors from 'src/modules/communicationsManagementPlan/list/communicationsManagementPlanListSelectors';
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
  type: yupFilterSchemas.string(
    i18n('entities.communicationsManagementPlan.fields.type'),
  ),
  nome: yupFilterSchemas.string(
    i18n('entities.communicationsManagementPlan.fields.nome'),
  ),
  content: yupFilterSchemas.string(
    i18n('entities.communicationsManagementPlan.fields.content'),
  ),
  distributionReason: yupFilterSchemas.string(
    i18n('entities.communicationsManagementPlan.fields.distributionReason'),
  ),
  language: yupFilterSchemas.string(
    i18n('entities.communicationsManagementPlan.fields.language'),
  ),
  channel: yupFilterSchemas.string(
    i18n('entities.communicationsManagementPlan.fields.channel'),
  ),
  documentFormat: yupFilterSchemas.string(
    i18n('entities.communicationsManagementPlan.fields.documentFormat'),
  ),
  method: yupFilterSchemas.string(
    i18n('entities.communicationsManagementPlan.fields.method'),
  ),
  frequency: yupFilterSchemas.string(
    i18n('entities.communicationsManagementPlan.fields.frequency'),
  ),
  allocatedResources: yupFilterSchemas.string(
    i18n('entities.communicationsManagementPlan.fields.allocatedResources'),
  ),
  format: yupFilterSchemas.string(
    i18n('entities.communicationsManagementPlan.fields.format'),
  ),
  local: yupFilterSchemas.string(
    i18n('entities.communicationsManagementPlan.fields.local'),
  ),
});

const emptyValues = {
  type: null,
  nome: null,
  content: null,
  distributionReason: null,
  language: null,
  channel: null,
  documentFormat: null,
  method: null,
  frequency: null,
  allocatedResources: null,
  format: null,
  local: null,
}

const previewRenders = {
  type: {
    label: i18n('entities.communicationsManagementPlan.fields.type'),
    render: filterRenders.generic(),
  },
  nome: {
    label: i18n('entities.communicationsManagementPlan.fields.nome'),
    render: filterRenders.generic(),
  },
  content: {
    label: i18n('entities.communicationsManagementPlan.fields.content'),
    render: filterRenders.generic(),
  },
  distributionReason: {
    label: i18n('entities.communicationsManagementPlan.fields.distributionReason'),
    render: filterRenders.generic(),
  },
  language: {
    label: i18n('entities.communicationsManagementPlan.fields.language'),
    render: filterRenders.generic(),
  },
  channel: {
    label: i18n('entities.communicationsManagementPlan.fields.channel'),
    render: filterRenders.generic(),
  },
  documentFormat: {
    label: i18n('entities.communicationsManagementPlan.fields.documentFormat'),
    render: filterRenders.generic(),
  },
  method: {
    label: i18n('entities.communicationsManagementPlan.fields.method'),
    render: filterRenders.generic(),
  },
  frequency: {
    label: i18n('entities.communicationsManagementPlan.fields.frequency'),
    render: filterRenders.generic(),
  },
  allocatedResources: {
    label: i18n('entities.communicationsManagementPlan.fields.allocatedResources'),
    render: filterRenders.generic(),
  },
  format: {
    label: i18n('entities.communicationsManagementPlan.fields.format'),
    render: filterRenders.generic(),
  },
  local: {
    label: i18n('entities.communicationsManagementPlan.fields.local'),
    render: filterRenders.generic(),
  },
}

function CommunicationsManagementPlanListFilter(props) {
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
                name="type"
                label={i18n('entities.communicationsManagementPlan.fields.type')}      
              />
              <InputFormItem
                name="nome"
                label={i18n('entities.communicationsManagementPlan.fields.nome')}      
              />
              <InputFormItem
                name="content"
                label={i18n('entities.communicationsManagementPlan.fields.content')}      
              />
              <InputFormItem
                name="distributionReason"
                label={i18n('entities.communicationsManagementPlan.fields.distributionReason')}      
              />
              <InputFormItem
                name="language"
                label={i18n('entities.communicationsManagementPlan.fields.language')}      
              />
              <InputFormItem
                name="channel"
                label={i18n('entities.communicationsManagementPlan.fields.channel')}      
              />
              <InputFormItem
                name="documentFormat"
                label={i18n('entities.communicationsManagementPlan.fields.documentFormat')}      
              />
              <InputFormItem
                name="method"
                label={i18n('entities.communicationsManagementPlan.fields.method')}      
              />
              <InputFormItem
                name="frequency"
                label={i18n('entities.communicationsManagementPlan.fields.frequency')}      
              />
              <InputFormItem
                name="allocatedResources"
                label={i18n('entities.communicationsManagementPlan.fields.allocatedResources')}      
              />
              <InputFormItem
                name="format"
                label={i18n('entities.communicationsManagementPlan.fields.format')}      
              />
              <InputFormItem
                name="local"
                label={i18n('entities.communicationsManagementPlan.fields.local')}      
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

export default CommunicationsManagementPlanListFilter;