import {
  faSearch,
  faUndo,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';    
import { i18n } from 'src/i18n';
import actions from 'src/modules/requirementDocumentation/list/requirementDocumentationListActions';
import selectors from 'src/modules/requirementDocumentation/list/requirementDocumentationListSelectors';
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useForm, FormProvider } from 'react-hook-form';
import yupFilterSchemas from 'src/modules/shared/yup/yupFilterSchemas';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import FilterPreview from 'src/view/shared/filter/FilterPreview';
import filterRenders from 'src/modules/shared/filter/filterRenders';
import InputFormItem from 'src/view/shared/form/items/InputFormItem';
import InputNumberRangeFormItem from 'src/view/shared/form/items/InputNumberRangeFormItem';

const schema = yup.object().shape({
  associatedID: yupFilterSchemas.string(
    i18n('entities.requirementDocumentation.fields.associatedID'),
  ),
  businessNeeds: yupFilterSchemas.string(
    i18n('entities.requirementDocumentation.fields.businessNeeds'),
  ),
  requirementDescription: yupFilterSchemas.string(
    i18n('entities.requirementDocumentation.fields.requirementDescription'),
  ),
  version: yupFilterSchemas.string(
    i18n('entities.requirementDocumentation.fields.version'),
  ),
  phase: yupFilterSchemas.string(
    i18n('entities.requirementDocumentation.fields.phase'),
  ),
  associatedDelivery: yupFilterSchemas.string(
    i18n('entities.requirementDocumentation.fields.associatedDelivery'),
  ),
  type: yupFilterSchemas.string(
    i18n('entities.requirementDocumentation.fields.type'),
  ),
  requester: yupFilterSchemas.string(
    i18n('entities.requirementDocumentation.fields.requester'),
  ),
  complexityRange: yupFilterSchemas.integerRange(
    i18n('entities.requirementDocumentation.fields.complexityRange'),
  ),
  responsible: yupFilterSchemas.string(
    i18n('entities.requirementDocumentation.fields.responsible'),
  ),
  validity: yupFilterSchemas.string(
    i18n('entities.requirementDocumentation.fields.validity'),
  ),
  priority: yupFilterSchemas.string(
    i18n('entities.requirementDocumentation.fields.priority'),
  ),
  acceptanceCriteria: yupFilterSchemas.string(
    i18n('entities.requirementDocumentation.fields.acceptanceCriteria'),
  ),
  supportingDocumentation: yupFilterSchemas.string(
    i18n('entities.requirementDocumentation.fields.supportingDocumentation'),
  ),
  requirementSituation: yupFilterSchemas.string(
    i18n('entities.requirementDocumentation.fields.requirementSituation'),
  ),
});

const emptyValues = {
  associatedID: null,
  businessNeeds: null,
  requirementDescription: null,
  version: null,
  phase: null,
  associatedDelivery: null,
  type: null,
  requester: null,
  complexityRange: [],
  responsible: null,
  validity: null,
  priority: null,
  acceptanceCriteria: null,
  supportingDocumentation: null,
  requirementSituation: null,
}

const previewRenders = {
  associatedID: {
    label: i18n('entities.requirementDocumentation.fields.associatedID'),
    render: filterRenders.generic(),
  },
  businessNeeds: {
    label: i18n('entities.requirementDocumentation.fields.businessNeeds'),
    render: filterRenders.generic(),
  },
  requirementDescription: {
    label: i18n('entities.requirementDocumentation.fields.requirementDescription'),
    render: filterRenders.generic(),
  },
  version: {
    label: i18n('entities.requirementDocumentation.fields.version'),
    render: filterRenders.generic(),
  },
  phase: {
    label: i18n('entities.requirementDocumentation.fields.phase'),
    render: filterRenders.generic(),
  },
  associatedDelivery: {
    label: i18n('entities.requirementDocumentation.fields.associatedDelivery'),
    render: filterRenders.generic(),
  },
  type: {
    label: i18n('entities.requirementDocumentation.fields.type'),
    render: filterRenders.generic(),
  },
  requester: {
    label: i18n('entities.requirementDocumentation.fields.requester'),
    render: filterRenders.generic(),
  },
  complexityRange: {
    label: i18n('entities.requirementDocumentation.fields.complexityRange'),
    render: filterRenders.range(),
  },
  responsible: {
    label: i18n('entities.requirementDocumentation.fields.responsible'),
    render: filterRenders.generic(),
  },
  validity: {
    label: i18n('entities.requirementDocumentation.fields.validity'),
    render: filterRenders.generic(),
  },
  priority: {
    label: i18n('entities.requirementDocumentation.fields.priority'),
    render: filterRenders.generic(),
  },
  acceptanceCriteria: {
    label: i18n('entities.requirementDocumentation.fields.acceptanceCriteria'),
    render: filterRenders.generic(),
  },
  supportingDocumentation: {
    label: i18n('entities.requirementDocumentation.fields.supportingDocumentation'),
    render: filterRenders.generic(),
  },
  requirementSituation: {
    label: i18n('entities.requirementDocumentation.fields.requirementSituation'),
    render: filterRenders.generic(),
  },
}

function RequirementDocumentationListFilter(props) {
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
                name="associatedID"
                label={i18n('entities.requirementDocumentation.fields.associatedID')}      
              />
              <InputFormItem
                name="businessNeeds"
                label={i18n('entities.requirementDocumentation.fields.businessNeeds')}      
              />
              <InputFormItem
                name="requirementDescription"
                label={i18n('entities.requirementDocumentation.fields.requirementDescription')}      
              />
              <InputFormItem
                name="version"
                label={i18n('entities.requirementDocumentation.fields.version')}      
              />
              <InputFormItem
                name="phase"
                label={i18n('entities.requirementDocumentation.fields.phase')}      
              />
              <InputFormItem
                name="associatedDelivery"
                label={i18n('entities.requirementDocumentation.fields.associatedDelivery')}      
              />
              <InputFormItem
                name="type"
                label={i18n('entities.requirementDocumentation.fields.type')}      
              />
              <InputFormItem
                name="requester"
                label={i18n('entities.requirementDocumentation.fields.requester')}      
              />
              <InputNumberRangeFormItem
                name="complexityRange"
                label={i18n('entities.requirementDocumentation.fields.complexityRange')}      
              />
              <InputFormItem
                name="responsible"
                label={i18n('entities.requirementDocumentation.fields.responsible')}      
              />
              <InputFormItem
                name="validity"
                label={i18n('entities.requirementDocumentation.fields.validity')}      
              />
              <InputFormItem
                name="priority"
                label={i18n('entities.requirementDocumentation.fields.priority')}      
              />
              <InputFormItem
                name="acceptanceCriteria"
                label={i18n('entities.requirementDocumentation.fields.acceptanceCriteria')}      
              />
              <InputFormItem
                name="supportingDocumentation"
                label={i18n('entities.requirementDocumentation.fields.supportingDocumentation')}      
              />
              <InputFormItem
                name="requirementSituation"
                label={i18n('entities.requirementDocumentation.fields.requirementSituation')}      
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

export default RequirementDocumentationListFilter;