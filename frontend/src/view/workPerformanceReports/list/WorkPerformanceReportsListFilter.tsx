import {
  faSearch,
  faUndo,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';    
import { i18n } from 'src/i18n';
import actions from 'src/modules/workPerformanceReports/list/workPerformanceReportsListActions';
import selectors from 'src/modules/workPerformanceReports/list/workPerformanceReportsListSelectors';
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
  responsible: yupFilterSchemas.string(
    i18n('entities.workPerformanceReports.fields.responsible'),
  ),
  mainActivitiesExecution: yupFilterSchemas.string(
    i18n('entities.workPerformanceReports.fields.mainActivitiesExecution'),
  ),
  upcomingActivitiesPerform: yupFilterSchemas.string(
    i18n('entities.workPerformanceReports.fields.upcomingActivitiesPerform'),
  ),
  generalComments: yupFilterSchemas.string(
    i18n('entities.workPerformanceReports.fields.generalComments'),
  ),
  issues: yupFilterSchemas.string(
    i18n('entities.workPerformanceReports.fields.issues'),
  ),
  changes: yupFilterSchemas.string(
    i18n('entities.workPerformanceReports.fields.changes'),
  ),
  risks: yupFilterSchemas.string(
    i18n('entities.workPerformanceReports.fields.risks'),
  ),
  attentionPoints: yupFilterSchemas.string(
    i18n('entities.workPerformanceReports.fields.attentionPoints'),
  ),
  dateRange: yupFilterSchemas.dateRange(
    i18n('entities.workPerformanceReports.fields.dateRange'),
  ),
});

const emptyValues = {
  responsible: null,
  mainActivitiesExecution: null,
  upcomingActivitiesPerform: null,
  generalComments: null,
  issues: null,
  changes: null,
  risks: null,
  attentionPoints: null,
  dateRange: [],
}

const previewRenders = {
  responsible: {
    label: i18n('entities.workPerformanceReports.fields.responsible'),
    render: filterRenders.generic(),
  },
  mainActivitiesExecution: {
    label: i18n('entities.workPerformanceReports.fields.mainActivitiesExecution'),
    render: filterRenders.generic(),
  },
  upcomingActivitiesPerform: {
    label: i18n('entities.workPerformanceReports.fields.upcomingActivitiesPerform'),
    render: filterRenders.generic(),
  },
  generalComments: {
    label: i18n('entities.workPerformanceReports.fields.generalComments'),
    render: filterRenders.generic(),
  },
  issues: {
    label: i18n('entities.workPerformanceReports.fields.issues'),
    render: filterRenders.generic(),
  },
  changes: {
    label: i18n('entities.workPerformanceReports.fields.changes'),
    render: filterRenders.generic(),
  },
  risks: {
    label: i18n('entities.workPerformanceReports.fields.risks'),
    render: filterRenders.generic(),
  },
  attentionPoints: {
    label: i18n('entities.workPerformanceReports.fields.attentionPoints'),
    render: filterRenders.generic(),
  },
  dateRange: {
    label: i18n('entities.workPerformanceReports.fields.dateRange'),
    render: filterRenders.dateRange(),
  },
}

function WorkPerformanceReportsListFilter(props) {
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
                name="responsible"
                label={i18n('entities.workPerformanceReports.fields.responsible')}      
              />
              <InputFormItem
                name="mainActivitiesExecution"
                label={i18n('entities.workPerformanceReports.fields.mainActivitiesExecution')}      
              />
              <InputFormItem
                name="upcomingActivitiesPerform"
                label={i18n('entities.workPerformanceReports.fields.upcomingActivitiesPerform')}      
              />
              <InputFormItem
                name="generalComments"
                label={i18n('entities.workPerformanceReports.fields.generalComments')}      
              />
              <InputFormItem
                name="issues"
                label={i18n('entities.workPerformanceReports.fields.issues')}      
              />
              <InputFormItem
                name="changes"
                label={i18n('entities.workPerformanceReports.fields.changes')}      
              />
              <InputFormItem
                name="risks"
                label={i18n('entities.workPerformanceReports.fields.risks')}      
              />
              <InputFormItem
                name="attentionPoints"
                label={i18n('entities.workPerformanceReports.fields.attentionPoints')}      
              />
              <DatePickerRangeFormItem
                name="dateRange"
                label={i18n('entities.workPerformanceReports.fields.dateRange')}    
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

export default WorkPerformanceReportsListFilter;