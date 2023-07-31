import {
  faSearch,
  faUndo,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';    
import { i18n } from 'src/i18n';
import actions from 'src/modules/riskRegistration/list/riskRegistrationListActions';
import selectors from 'src/modules/riskRegistration/list/riskRegistrationListSelectors';
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useForm, FormProvider } from 'react-hook-form';
import yupFilterSchemas from 'src/modules/shared/yup/yupFilterSchemas';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import FilterPreview from 'src/view/shared/filter/FilterPreview';
import filterRenders from 'src/modules/shared/filter/filterRenders';
import InputFormItem from 'src/view/shared/form/items/InputFormItem';
import SelectFormItem from 'src/view/shared/form/items/SelectFormItem';
import riskRegistrationEnumerators from 'src/modules/riskRegistration/riskRegistrationEnumerators';
import DatePickerRangeFormItem from 'src/view/shared/form/items/DatePickerRangeFormItem';

const schema = yup.object().shape({
  impactedObjective: yupFilterSchemas.string(
    i18n('entities.riskRegistration.fields.impactedObjective'),
  ),
  priority: yupFilterSchemas.enumerator(
    i18n('entities.riskRegistration.fields.priority'),
  ),
  currentRiskStatus: yupFilterSchemas.string(
    i18n('entities.riskRegistration.fields.currentRiskStatus'),
  ),
  event: yupFilterSchemas.string(
    i18n('entities.riskRegistration.fields.event'),
  ),
  identificationDateRange: yupFilterSchemas.dateRange(
    i18n('entities.riskRegistration.fields.identificationDateRange'),
  ),
  identifier: yupFilterSchemas.string(
    i18n('entities.riskRegistration.fields.identifier'),
  ),
  riskType: yupFilterSchemas.string(
    i18n('entities.riskRegistration.fields.riskType'),
  ),
  lessonsLearned: yupFilterSchemas.string(
    i18n('entities.riskRegistration.fields.lessonsLearned'),
  ),
  riskCategory: yupFilterSchemas.string(
    i18n('entities.riskRegistration.fields.riskCategory'),
  ),
  fallbackPlans: yupFilterSchemas.string(
    i18n('entities.riskRegistration.fields.fallbackPlans'),
  ),
  contingencyPlansOwners: yupFilterSchemas.string(
    i18n('entities.riskRegistration.fields.contingencyPlansOwners'),
  ),
  contingencyPlans: yupFilterSchemas.string(
    i18n('entities.riskRegistration.fields.contingencyPlans'),
  ),
  secondaryRisks: yupFilterSchemas.string(
    i18n('entities.riskRegistration.fields.secondaryRisks'),
  ),
  residualRisks: yupFilterSchemas.string(
    i18n('entities.riskRegistration.fields.residualRisks'),
  ),
  timingInformation: yupFilterSchemas.string(
    i18n('entities.riskRegistration.fields.timingInformation'),
  ),
  potentialRiskOwners: yupFilterSchemas.string(
    i18n('entities.riskRegistration.fields.potentialRiskOwners'),
  ),
  listPotentialRiskResponses: yupFilterSchemas.string(
    i18n('entities.riskRegistration.fields.listPotentialRiskResponses'),
  ),
  riskTriggers: yupFilterSchemas.string(
    i18n('entities.riskRegistration.fields.riskTriggers'),
  ),
  oneOrMoreCauses: yupFilterSchemas.string(
    i18n('entities.riskRegistration.fields.oneOrMoreCauses'),
  ),
  riskStrategy: yupFilterSchemas.string(
    i18n('entities.riskRegistration.fields.riskStrategy'),
  ),
  oneMoreEffectsObjectives: yupFilterSchemas.string(
    i18n('entities.riskRegistration.fields.oneMoreEffectsObjectives'),
  ),
  riskScore: yupFilterSchemas.string(
    i18n('entities.riskRegistration.fields.riskScore'),
  ),
  impact: yupFilterSchemas.string(
    i18n('entities.riskRegistration.fields.impact'),
  ),
  probability: yupFilterSchemas.string(
    i18n('entities.riskRegistration.fields.probability'),
  ),
});

const emptyValues = {
  impactedObjective: null,
  priority: null,
  currentRiskStatus: null,
  event: null,
  identificationDateRange: [],
  identifier: null,
  riskType: null,
  lessonsLearned: null,
  riskCategory: null,
  fallbackPlans: null,
  contingencyPlansOwners: null,
  contingencyPlans: null,
  secondaryRisks: null,
  residualRisks: null,
  timingInformation: null,
  potentialRiskOwners: null,
  listPotentialRiskResponses: null,
  riskTriggers: null,
  oneOrMoreCauses: null,
  riskStrategy: null,
  oneMoreEffectsObjectives: null,
  riskScore: null,
  impact: null,
  probability: null,
}

const previewRenders = {
  impactedObjective: {
    label: i18n('entities.riskRegistration.fields.impactedObjective'),
    render: filterRenders.generic(),
  },
  priority: {
    label: i18n('entities.riskRegistration.fields.priority'),
    render: filterRenders.enumerator('entities.riskRegistration.enumerators.priority',),
  },
  currentRiskStatus: {
    label: i18n('entities.riskRegistration.fields.currentRiskStatus'),
    render: filterRenders.generic(),
  },
  event: {
    label: i18n('entities.riskRegistration.fields.event'),
    render: filterRenders.generic(),
  },
  identificationDateRange: {
    label: i18n('entities.riskRegistration.fields.identificationDateRange'),
    render: filterRenders.dateRange(),
  },
  identifier: {
    label: i18n('entities.riskRegistration.fields.identifier'),
    render: filterRenders.generic(),
  },
  riskType: {
    label: i18n('entities.riskRegistration.fields.riskType'),
    render: filterRenders.generic(),
  },
  lessonsLearned: {
    label: i18n('entities.riskRegistration.fields.lessonsLearned'),
    render: filterRenders.generic(),
  },
  riskCategory: {
    label: i18n('entities.riskRegistration.fields.riskCategory'),
    render: filterRenders.generic(),
  },
  fallbackPlans: {
    label: i18n('entities.riskRegistration.fields.fallbackPlans'),
    render: filterRenders.generic(),
  },
  contingencyPlansOwners: {
    label: i18n('entities.riskRegistration.fields.contingencyPlansOwners'),
    render: filterRenders.generic(),
  },
  contingencyPlans: {
    label: i18n('entities.riskRegistration.fields.contingencyPlans'),
    render: filterRenders.generic(),
  },
  secondaryRisks: {
    label: i18n('entities.riskRegistration.fields.secondaryRisks'),
    render: filterRenders.generic(),
  },
  residualRisks: {
    label: i18n('entities.riskRegistration.fields.residualRisks'),
    render: filterRenders.generic(),
  },
  timingInformation: {
    label: i18n('entities.riskRegistration.fields.timingInformation'),
    render: filterRenders.generic(),
  },
  potentialRiskOwners: {
    label: i18n('entities.riskRegistration.fields.potentialRiskOwners'),
    render: filterRenders.generic(),
  },
  listPotentialRiskResponses: {
    label: i18n('entities.riskRegistration.fields.listPotentialRiskResponses'),
    render: filterRenders.generic(),
  },
  riskTriggers: {
    label: i18n('entities.riskRegistration.fields.riskTriggers'),
    render: filterRenders.generic(),
  },
  oneOrMoreCauses: {
    label: i18n('entities.riskRegistration.fields.oneOrMoreCauses'),
    render: filterRenders.generic(),
  },
  riskStrategy: {
    label: i18n('entities.riskRegistration.fields.riskStrategy'),
    render: filterRenders.generic(),
  },
  oneMoreEffectsObjectives: {
    label: i18n('entities.riskRegistration.fields.oneMoreEffectsObjectives'),
    render: filterRenders.generic(),
  },
  riskScore: {
    label: i18n('entities.riskRegistration.fields.riskScore'),
    render: filterRenders.generic(),
  },
  impact: {
    label: i18n('entities.riskRegistration.fields.impact'),
    render: filterRenders.generic(),
  },
  probability: {
    label: i18n('entities.riskRegistration.fields.probability'),
    render: filterRenders.generic(),
  },
}

function RiskRegistrationListFilter(props) {
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
                name="impactedObjective"
                label={i18n('entities.riskRegistration.fields.impactedObjective')}      
              />
              <SelectFormItem
                  name="priority"
                  label={i18n('entities.riskRegistration.fields.priority')}
                  options={riskRegistrationEnumerators.priority.map(
                    (value) => ({
                      value,
                      label: i18n(
                        `entities.riskRegistration.enumerators.priority.${value}`,
                      ),
                    }),
                  )}
                />
              <InputFormItem
                name="currentRiskStatus"
                label={i18n('entities.riskRegistration.fields.currentRiskStatus')}      
              />
              <InputFormItem
                name="event"
                label={i18n('entities.riskRegistration.fields.event')}      
              />
              <DatePickerRangeFormItem
                name="identificationDateRange"
                label={i18n('entities.riskRegistration.fields.identificationDateRange')}    
              />
              <InputFormItem
                name="identifier"
                label={i18n('entities.riskRegistration.fields.identifier')}      
              />
              <InputFormItem
                name="riskType"
                label={i18n('entities.riskRegistration.fields.riskType')}      
              />
              <InputFormItem
                name="lessonsLearned"
                label={i18n('entities.riskRegistration.fields.lessonsLearned')}      
              />
              <InputFormItem
                name="riskCategory"
                label={i18n('entities.riskRegistration.fields.riskCategory')}      
              />
              <InputFormItem
                name="fallbackPlans"
                label={i18n('entities.riskRegistration.fields.fallbackPlans')}      
              />
              <InputFormItem
                name="contingencyPlansOwners"
                label={i18n('entities.riskRegistration.fields.contingencyPlansOwners')}      
              />
              <InputFormItem
                name="contingencyPlans"
                label={i18n('entities.riskRegistration.fields.contingencyPlans')}      
              />
              <InputFormItem
                name="secondaryRisks"
                label={i18n('entities.riskRegistration.fields.secondaryRisks')}      
              />
              <InputFormItem
                name="residualRisks"
                label={i18n('entities.riskRegistration.fields.residualRisks')}      
              />
              <InputFormItem
                name="timingInformation"
                label={i18n('entities.riskRegistration.fields.timingInformation')}      
              />
              <InputFormItem
                name="potentialRiskOwners"
                label={i18n('entities.riskRegistration.fields.potentialRiskOwners')}      
              />
              <InputFormItem
                name="listPotentialRiskResponses"
                label={i18n('entities.riskRegistration.fields.listPotentialRiskResponses')}      
              />
              <InputFormItem
                name="riskTriggers"
                label={i18n('entities.riskRegistration.fields.riskTriggers')}      
              />
              <InputFormItem
                name="oneOrMoreCauses"
                label={i18n('entities.riskRegistration.fields.oneOrMoreCauses')}      
              />
              <InputFormItem
                name="riskStrategy"
                label={i18n('entities.riskRegistration.fields.riskStrategy')}      
              />
              <InputFormItem
                name="oneMoreEffectsObjectives"
                label={i18n('entities.riskRegistration.fields.oneMoreEffectsObjectives')}      
              />
              <InputFormItem
                name="riskScore"
                label={i18n('entities.riskRegistration.fields.riskScore')}      
              />
              <InputFormItem
                name="impact"
                label={i18n('entities.riskRegistration.fields.impact')}      
              />
              <InputFormItem
                name="probability"
                label={i18n('entities.riskRegistration.fields.probability')}      
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

export default RiskRegistrationListFilter;