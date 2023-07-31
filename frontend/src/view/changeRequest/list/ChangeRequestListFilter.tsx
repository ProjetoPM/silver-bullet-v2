import {
  faSearch,
  faUndo,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';    
import { i18n } from 'src/i18n';
import actions from 'src/modules/changeRequest/list/changeRequestListActions';
import selectors from 'src/modules/changeRequest/list/changeRequestListSelectors';
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
import changeRequestEnumerators from 'src/modules/changeRequest/changeRequestEnumerators';
import DatePickerRangeFormItem from 'src/view/shared/form/items/DatePickerRangeFormItem';

const schema = yup.object().shape({
  requester: yupFilterSchemas.string(
    i18n('entities.changeRequest.fields.requester'),
  ),
  requestIdentificationNumber: yupFilterSchemas.string(
    i18n('entities.changeRequest.fields.requestIdentificationNumber'),
  ),
  typeChange: yupFilterSchemas.enumerator(
    i18n('entities.changeRequest.fields.typeChange'),
  ),
  statusSituation: yupFilterSchemas.enumerator(
    i18n('entities.changeRequest.fields.statusSituation'),
  ),
  requestDateRange: yupFilterSchemas.dateRange(
    i18n('entities.changeRequest.fields.requestDateRange'),
  ),
  dateCCBRange: yupFilterSchemas.dateRange(
    i18n('entities.changeRequest.fields.dateCCBRange'),
  ),
  descriptionChange: yupFilterSchemas.string(
    i18n('entities.changeRequest.fields.descriptionChange'),
  ),
  impactedKnowledgeAreas: yupFilterSchemas.string(
    i18n('entities.changeRequest.fields.impactedKnowledgeAreas'),
  ),
  impactedDeliveriesDocuments: yupFilterSchemas.string(
    i18n('entities.changeRequest.fields.impactedDeliveriesDocuments'),
  ),
  justification: yupFilterSchemas.string(
    i18n('entities.changeRequest.fields.justification'),
  ),
  additionalComments: yupFilterSchemas.string(
    i18n('entities.changeRequest.fields.additionalComments'),
  ),
  opinionCCB: yupFilterSchemas.string(
    i18n('entities.changeRequest.fields.opinionCCB'),
  ),
  opinionProjectManager: yupFilterSchemas.string(
    i18n('entities.changeRequest.fields.opinionProjectManager'),
  ),
});

const emptyValues = {
  requester: null,
  requestIdentificationNumber: null,
  typeChange: null,
  statusSituation: null,
  requestDateRange: [],
  dateCCBRange: [],
  descriptionChange: null,
  impactedKnowledgeAreas: null,
  impactedDeliveriesDocuments: null,
  justification: null,
  additionalComments: null,
  opinionCCB: null,
  opinionProjectManager: null,
}

const previewRenders = {
  requester: {
    label: i18n('entities.changeRequest.fields.requester'),
    render: filterRenders.generic(),
  },
  requestIdentificationNumber: {
    label: i18n('entities.changeRequest.fields.requestIdentificationNumber'),
    render: filterRenders.generic(),
  },
  typeChange: {
    label: i18n('entities.changeRequest.fields.typeChange'),
    render: filterRenders.enumerator('entities.changeRequest.enumerators.typeChange',),
  },
  statusSituation: {
    label: i18n('entities.changeRequest.fields.statusSituation'),
    render: filterRenders.enumerator('entities.changeRequest.enumerators.statusSituation',),
  },
  requestDateRange: {
    label: i18n('entities.changeRequest.fields.requestDateRange'),
    render: filterRenders.dateRange(),
  },
  dateCCBRange: {
    label: i18n('entities.changeRequest.fields.dateCCBRange'),
    render: filterRenders.dateRange(),
  },
  descriptionChange: {
    label: i18n('entities.changeRequest.fields.descriptionChange'),
    render: filterRenders.generic(),
  },
  impactedKnowledgeAreas: {
    label: i18n('entities.changeRequest.fields.impactedKnowledgeAreas'),
    render: filterRenders.generic(),
  },
  impactedDeliveriesDocuments: {
    label: i18n('entities.changeRequest.fields.impactedDeliveriesDocuments'),
    render: filterRenders.generic(),
  },
  justification: {
    label: i18n('entities.changeRequest.fields.justification'),
    render: filterRenders.generic(),
  },
  additionalComments: {
    label: i18n('entities.changeRequest.fields.additionalComments'),
    render: filterRenders.generic(),
  },
  opinionCCB: {
    label: i18n('entities.changeRequest.fields.opinionCCB'),
    render: filterRenders.generic(),
  },
  opinionProjectManager: {
    label: i18n('entities.changeRequest.fields.opinionProjectManager'),
    render: filterRenders.generic(),
  },
}

function ChangeRequestListFilter(props) {
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
                name="requester"
                label={i18n('entities.changeRequest.fields.requester')}      
              />
              <InputFormItem
                name="requestIdentificationNumber"
                label={i18n('entities.changeRequest.fields.requestIdentificationNumber')}      
              />
              <SelectFormItem
                  name="typeChange"
                  label={i18n('entities.changeRequest.fields.typeChange')}
                  options={changeRequestEnumerators.typeChange.map(
                    (value) => ({
                      value,
                      label: i18n(
                        `entities.changeRequest.enumerators.typeChange.${value}`,
                      ),
                    }),
                  )}
                />
              <SelectFormItem
                  name="statusSituation"
                  label={i18n('entities.changeRequest.fields.statusSituation')}
                  options={changeRequestEnumerators.statusSituation.map(
                    (value) => ({
                      value,
                      label: i18n(
                        `entities.changeRequest.enumerators.statusSituation.${value}`,
                      ),
                    }),
                  )}
                />
              <DatePickerRangeFormItem
                name="requestDateRange"
                label={i18n('entities.changeRequest.fields.requestDateRange')}    
              />
              <DatePickerRangeFormItem
                name="dateCCBRange"
                label={i18n('entities.changeRequest.fields.dateCCBRange')}    
              />
              <InputFormItem
                name="descriptionChange"
                label={i18n('entities.changeRequest.fields.descriptionChange')}      
              />
              <InputFormItem
                name="impactedKnowledgeAreas"
                label={i18n('entities.changeRequest.fields.impactedKnowledgeAreas')}      
              />
              <InputFormItem
                name="impactedDeliveriesDocuments"
                label={i18n('entities.changeRequest.fields.impactedDeliveriesDocuments')}      
              />
              <InputFormItem
                name="justification"
                label={i18n('entities.changeRequest.fields.justification')}      
              />
              <InputFormItem
                name="additionalComments"
                label={i18n('entities.changeRequest.fields.additionalComments')}      
              />
              <InputFormItem
                name="opinionCCB"
                label={i18n('entities.changeRequest.fields.opinionCCB')}      
              />
              <InputFormItem
                name="opinionProjectManager"
                label={i18n('entities.changeRequest.fields.opinionProjectManager')}      
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

export default ChangeRequestListFilter;