import {
  faSearch,
  faUndo,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';    
import { i18n } from 'src/i18n';
import actions from 'src/modules/projectClosure/list/projectClosureListActions';
import selectors from 'src/modules/projectClosure/list/projectClosureListSelectors';
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useForm, FormProvider } from 'react-hook-form';
import yupFilterSchemas from 'src/modules/shared/yup/yupFilterSchemas';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import FilterPreview from 'src/view/shared/filter/FilterPreview';
import filterRenders from 'src/modules/shared/filter/filterRenders';
import InputFormItem from 'src/view/shared/form/items/InputFormItem';
import DatePickerRangeFormItem from 'src/view/shared/form/items/DatePickerRangeFormItem';

const schema = yup.object().shape({
  client: yupFilterSchemas.string(
    i18n('entities.projectClosure.fields.client'),
  ),
  dateclosureRange: yupFilterSchemas.dateRange(
    i18n('entities.projectClosure.fields.dateclosureRange'),
  ),
  mainChangesApproved: yupFilterSchemas.string(
    i18n('entities.projectClosure.fields.mainChangesApproved'),
  ),
  mainlessonslearned: yupFilterSchemas.string(
    i18n('entities.projectClosure.fields.mainlessonslearned'),
  ),
  mainDeviations: yupFilterSchemas.string(
    i18n('entities.projectClosure.fields.mainDeviations'),
  ),
  customerComments: yupFilterSchemas.string(
    i18n('entities.projectClosure.fields.customerComments'),
  ),
  sponsorscomments: yupFilterSchemas.string(
    i18n('entities.projectClosure.fields.sponsorscomments'),
  ),
});

const emptyValues = {
  client: null,
  dateclosureRange: [],
  mainChangesApproved: null,
  mainlessonslearned: null,
  mainDeviations: null,
  customerComments: null,
  sponsorscomments: null,
}

const previewRenders = {
  client: {
    label: i18n('entities.projectClosure.fields.client'),
    render: filterRenders.generic(),
  },
  dateclosureRange: {
    label: i18n('entities.projectClosure.fields.dateclosureRange'),
    render: filterRenders.dateRange(),
  },
  mainChangesApproved: {
    label: i18n('entities.projectClosure.fields.mainChangesApproved'),
    render: filterRenders.generic(),
  },
  mainlessonslearned: {
    label: i18n('entities.projectClosure.fields.mainlessonslearned'),
    render: filterRenders.generic(),
  },
  mainDeviations: {
    label: i18n('entities.projectClosure.fields.mainDeviations'),
    render: filterRenders.generic(),
  },
  customerComments: {
    label: i18n('entities.projectClosure.fields.customerComments'),
    render: filterRenders.generic(),
  },
  sponsorscomments: {
    label: i18n('entities.projectClosure.fields.sponsorscomments'),
    render: filterRenders.generic(),
  },
}

function ProjectClosureListFilter(props) {
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
                name="client"
                label={i18n('entities.projectClosure.fields.client')}      
              />
              <DatePickerRangeFormItem
                name="dateclosureRange"
                label={i18n('entities.projectClosure.fields.dateclosureRange')}    
              />
              <InputFormItem
                name="mainChangesApproved"
                label={i18n('entities.projectClosure.fields.mainChangesApproved')}      
              />
              <InputFormItem
                name="mainlessonslearned"
                label={i18n('entities.projectClosure.fields.mainlessonslearned')}      
              />
              <InputFormItem
                name="mainDeviations"
                label={i18n('entities.projectClosure.fields.mainDeviations')}      
              />
              <InputFormItem
                name="customerComments"
                label={i18n('entities.projectClosure.fields.customerComments')}      
              />
              <InputFormItem
                name="sponsorscomments"
                label={i18n('entities.projectClosure.fields.sponsorscomments')}      
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

export default ProjectClosureListFilter;