import {
  faSearch,
  faUndo,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';    
import { i18n } from 'src/i18n';
import actions from 'src/modules/projectPerformanceMonitoringReport/list/projectPerformanceMonitoringReportListActions';
import selectors from 'src/modules/projectPerformanceMonitoringReport/list/projectPerformanceMonitoringReportListSelectors';
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
  currentPerformanceAnalysis: yupFilterSchemas.string(
    i18n('entities.projectPerformanceMonitoringReport.fields.currentPerformanceAnalysis'),
  ),
  forecastsAsPlanned: yupFilterSchemas.string(
    i18n('entities.projectPerformanceMonitoringReport.fields.forecastsAsPlanned'),
  ),
  forecastsConsideringCurrentlyPerformance: yupFilterSchemas.string(
    i18n('entities.projectPerformanceMonitoringReport.fields.forecastsConsideringCurrentlyPerformance'),
  ),
  currentRiskSituation: yupFilterSchemas.string(
    i18n('entities.projectPerformanceMonitoringReport.fields.currentRiskSituation'),
  ),
  currentStatusIssues: yupFilterSchemas.string(
    i18n('entities.projectPerformanceMonitoringReport.fields.currentStatusIssues'),
  ),
  workCompletedDuringPeriod: yupFilterSchemas.string(
    i18n('entities.projectPerformanceMonitoringReport.fields.workCompletedDuringPeriod'),
  ),
  workToBeCompletedNextPeriod: yupFilterSchemas.string(
    i18n('entities.projectPerformanceMonitoringReport.fields.workToBeCompletedNextPeriod'),
  ),
  summaryChangesApprovedInThePeriod: yupFilterSchemas.string(
    i18n('entities.projectPerformanceMonitoringReport.fields.summaryChangesApprovedInThePeriod'),
  ),
  earnedValueManagement: yupFilterSchemas.string(
    i18n('entities.projectPerformanceMonitoringReport.fields.earnedValueManagement'),
  ),
  otherRelevantInformation: yupFilterSchemas.string(
    i18n('entities.projectPerformanceMonitoringReport.fields.otherRelevantInformation'),
  ),
  dateReportRange: yupFilterSchemas.dateRange(
    i18n('entities.projectPerformanceMonitoringReport.fields.dateReportRange'),
  ),
});

const emptyValues = {
  currentPerformanceAnalysis: null,
  forecastsAsPlanned: null,
  forecastsConsideringCurrentlyPerformance: null,
  currentRiskSituation: null,
  currentStatusIssues: null,
  workCompletedDuringPeriod: null,
  workToBeCompletedNextPeriod: null,
  summaryChangesApprovedInThePeriod: null,
  earnedValueManagement: null,
  otherRelevantInformation: null,
  dateReportRange: [],
}

const previewRenders = {
  currentPerformanceAnalysis: {
    label: i18n('entities.projectPerformanceMonitoringReport.fields.currentPerformanceAnalysis'),
    render: filterRenders.generic(),
  },
  forecastsAsPlanned: {
    label: i18n('entities.projectPerformanceMonitoringReport.fields.forecastsAsPlanned'),
    render: filterRenders.generic(),
  },
  forecastsConsideringCurrentlyPerformance: {
    label: i18n('entities.projectPerformanceMonitoringReport.fields.forecastsConsideringCurrentlyPerformance'),
    render: filterRenders.generic(),
  },
  currentRiskSituation: {
    label: i18n('entities.projectPerformanceMonitoringReport.fields.currentRiskSituation'),
    render: filterRenders.generic(),
  },
  currentStatusIssues: {
    label: i18n('entities.projectPerformanceMonitoringReport.fields.currentStatusIssues'),
    render: filterRenders.generic(),
  },
  workCompletedDuringPeriod: {
    label: i18n('entities.projectPerformanceMonitoringReport.fields.workCompletedDuringPeriod'),
    render: filterRenders.generic(),
  },
  workToBeCompletedNextPeriod: {
    label: i18n('entities.projectPerformanceMonitoringReport.fields.workToBeCompletedNextPeriod'),
    render: filterRenders.generic(),
  },
  summaryChangesApprovedInThePeriod: {
    label: i18n('entities.projectPerformanceMonitoringReport.fields.summaryChangesApprovedInThePeriod'),
    render: filterRenders.generic(),
  },
  earnedValueManagement: {
    label: i18n('entities.projectPerformanceMonitoringReport.fields.earnedValueManagement'),
    render: filterRenders.generic(),
  },
  otherRelevantInformation: {
    label: i18n('entities.projectPerformanceMonitoringReport.fields.otherRelevantInformation'),
    render: filterRenders.generic(),
  },
  dateReportRange: {
    label: i18n('entities.projectPerformanceMonitoringReport.fields.dateReportRange'),
    render: filterRenders.dateRange(),
  },
}

function ProjectPerformanceMonitoringReportListFilter(props) {
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
                name="currentPerformanceAnalysis"
                label={i18n('entities.projectPerformanceMonitoringReport.fields.currentPerformanceAnalysis')}      
              />
              <InputFormItem
                name="forecastsAsPlanned"
                label={i18n('entities.projectPerformanceMonitoringReport.fields.forecastsAsPlanned')}      
              />
              <InputFormItem
                name="forecastsConsideringCurrentlyPerformance"
                label={i18n('entities.projectPerformanceMonitoringReport.fields.forecastsConsideringCurrentlyPerformance')}      
              />
              <InputFormItem
                name="currentRiskSituation"
                label={i18n('entities.projectPerformanceMonitoringReport.fields.currentRiskSituation')}      
              />
              <InputFormItem
                name="currentStatusIssues"
                label={i18n('entities.projectPerformanceMonitoringReport.fields.currentStatusIssues')}      
              />
              <InputFormItem
                name="workCompletedDuringPeriod"
                label={i18n('entities.projectPerformanceMonitoringReport.fields.workCompletedDuringPeriod')}      
              />
              <InputFormItem
                name="workToBeCompletedNextPeriod"
                label={i18n('entities.projectPerformanceMonitoringReport.fields.workToBeCompletedNextPeriod')}      
              />
              <InputFormItem
                name="summaryChangesApprovedInThePeriod"
                label={i18n('entities.projectPerformanceMonitoringReport.fields.summaryChangesApprovedInThePeriod')}      
              />
              <InputFormItem
                name="earnedValueManagement"
                label={i18n('entities.projectPerformanceMonitoringReport.fields.earnedValueManagement')}      
              />
              <InputFormItem
                name="otherRelevantInformation"
                label={i18n('entities.projectPerformanceMonitoringReport.fields.otherRelevantInformation')}      
              />
              <DatePickerRangeFormItem
                name="dateReportRange"
                label={i18n('entities.projectPerformanceMonitoringReport.fields.dateReportRange')}    
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

export default ProjectPerformanceMonitoringReportListFilter;