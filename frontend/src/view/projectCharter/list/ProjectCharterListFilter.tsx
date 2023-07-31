import {
  faSearch,
  faUndo,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';    
import { i18n } from 'src/i18n';
import actions from 'src/modules/projectCharter/list/projectCharterListActions';
import selectors from 'src/modules/projectCharter/list/projectCharterListSelectors';
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
  projectName: yupFilterSchemas.string(
    i18n('entities.projectCharter.fields.projectName'),
  ),
  highLevelProjectDescription: yupFilterSchemas.string(
    i18n('entities.projectCharter.fields.highLevelProjectDescription'),
  ),
  startdateRange: yupFilterSchemas.dateRange(
    i18n('entities.projectCharter.fields.startdateRange'),
  ),
  enddateRange: yupFilterSchemas.dateRange(
    i18n('entities.projectCharter.fields.enddateRange'),
  ),
  projectPurpose: yupFilterSchemas.string(
    i18n('entities.projectCharter.fields.projectPurpose'),
  ),
  measurableProjectObjectives: yupFilterSchemas.string(
    i18n('entities.projectCharter.fields.measurableProjectObjectives'),
  ),
  keyBenefits: yupFilterSchemas.string(
    i18n('entities.projectCharter.fields.keyBenefits'),
  ),
  highlevelRequirements: yupFilterSchemas.string(
    i18n('entities.projectCharter.fields.highlevelRequirements'),
  ),
  boundaries: yupFilterSchemas.string(
    i18n('entities.projectCharter.fields.boundaries'),
  ),
  overallProjectRisk: yupFilterSchemas.string(
    i18n('entities.projectCharter.fields.overallProjectRisk'),
  ),
  summaryMilestoneSchedule: yupFilterSchemas.string(
    i18n('entities.projectCharter.fields.summaryMilestoneSchedule'),
  ),
  preapprovedFinancialResources: yupFilterSchemas.string(
    i18n('entities.projectCharter.fields.preapprovedFinancialResources'),
  ),
  projectApprovalRequirements: yupFilterSchemas.string(
    i18n('entities.projectCharter.fields.projectApprovalRequirements'),
  ),
  successCriteria: yupFilterSchemas.string(
    i18n('entities.projectCharter.fields.successCriteria'),
  ),
  projectExitCriteria: yupFilterSchemas.string(
    i18n('entities.projectCharter.fields.projectExitCriteria'),
  ),
});

const emptyValues = {
  projectName: null,
  highLevelProjectDescription: null,
  startdateRange: [],
  enddateRange: [],
  projectPurpose: null,
  measurableProjectObjectives: null,
  keyBenefits: null,
  highlevelRequirements: null,
  boundaries: null,
  overallProjectRisk: null,
  summaryMilestoneSchedule: null,
  preapprovedFinancialResources: null,
  projectApprovalRequirements: null,
  successCriteria: null,
  projectExitCriteria: null,
}

const previewRenders = {
  projectName: {
    label: i18n('entities.projectCharter.fields.projectName'),
    render: filterRenders.generic(),
  },
  highLevelProjectDescription: {
    label: i18n('entities.projectCharter.fields.highLevelProjectDescription'),
    render: filterRenders.generic(),
  },
  startdateRange: {
    label: i18n('entities.projectCharter.fields.startdateRange'),
    render: filterRenders.dateRange(),
  },
  enddateRange: {
    label: i18n('entities.projectCharter.fields.enddateRange'),
    render: filterRenders.dateRange(),
  },
  projectPurpose: {
    label: i18n('entities.projectCharter.fields.projectPurpose'),
    render: filterRenders.generic(),
  },
  measurableProjectObjectives: {
    label: i18n('entities.projectCharter.fields.measurableProjectObjectives'),
    render: filterRenders.generic(),
  },
  keyBenefits: {
    label: i18n('entities.projectCharter.fields.keyBenefits'),
    render: filterRenders.generic(),
  },
  highlevelRequirements: {
    label: i18n('entities.projectCharter.fields.highlevelRequirements'),
    render: filterRenders.generic(),
  },
  boundaries: {
    label: i18n('entities.projectCharter.fields.boundaries'),
    render: filterRenders.generic(),
  },
  overallProjectRisk: {
    label: i18n('entities.projectCharter.fields.overallProjectRisk'),
    render: filterRenders.generic(),
  },
  summaryMilestoneSchedule: {
    label: i18n('entities.projectCharter.fields.summaryMilestoneSchedule'),
    render: filterRenders.generic(),
  },
  preapprovedFinancialResources: {
    label: i18n('entities.projectCharter.fields.preapprovedFinancialResources'),
    render: filterRenders.generic(),
  },
  projectApprovalRequirements: {
    label: i18n('entities.projectCharter.fields.projectApprovalRequirements'),
    render: filterRenders.generic(),
  },
  successCriteria: {
    label: i18n('entities.projectCharter.fields.successCriteria'),
    render: filterRenders.generic(),
  },
  projectExitCriteria: {
    label: i18n('entities.projectCharter.fields.projectExitCriteria'),
    render: filterRenders.generic(),
  },
}

function ProjectCharterListFilter(props) {
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
                name="projectName"
                label={i18n('entities.projectCharter.fields.projectName')}      
              />
              <InputFormItem
                name="highLevelProjectDescription"
                label={i18n('entities.projectCharter.fields.highLevelProjectDescription')}      
              />
              <DatePickerRangeFormItem
                name="startdateRange"
                label={i18n('entities.projectCharter.fields.startdateRange')}    
              />
              <DatePickerRangeFormItem
                name="enddateRange"
                label={i18n('entities.projectCharter.fields.enddateRange')}    
              />
              <InputFormItem
                name="projectPurpose"
                label={i18n('entities.projectCharter.fields.projectPurpose')}      
              />
              <InputFormItem
                name="measurableProjectObjectives"
                label={i18n('entities.projectCharter.fields.measurableProjectObjectives')}      
              />
              <InputFormItem
                name="keyBenefits"
                label={i18n('entities.projectCharter.fields.keyBenefits')}      
              />
              <InputFormItem
                name="highlevelRequirements"
                label={i18n('entities.projectCharter.fields.highlevelRequirements')}      
              />
              <InputFormItem
                name="boundaries"
                label={i18n('entities.projectCharter.fields.boundaries')}      
              />
              <InputFormItem
                name="overallProjectRisk"
                label={i18n('entities.projectCharter.fields.overallProjectRisk')}      
              />
              <InputFormItem
                name="summaryMilestoneSchedule"
                label={i18n('entities.projectCharter.fields.summaryMilestoneSchedule')}      
              />
              <InputFormItem
                name="preapprovedFinancialResources"
                label={i18n('entities.projectCharter.fields.preapprovedFinancialResources')}      
              />
              <InputFormItem
                name="projectApprovalRequirements"
                label={i18n('entities.projectCharter.fields.projectApprovalRequirements')}      
              />
              <InputFormItem
                name="successCriteria"
                label={i18n('entities.projectCharter.fields.successCriteria')}      
              />
              <InputFormItem
                name="projectExitCriteria"
                label={i18n('entities.projectCharter.fields.projectExitCriteria')}      
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

export default ProjectCharterListFilter;