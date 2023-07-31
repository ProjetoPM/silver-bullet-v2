import {
  faSearch,
  faUndo,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';    
import { i18n } from 'src/i18n';
import actions from 'src/modules/lessonLearnedRegister/list/lessonLearnedRegisterListActions';
import selectors from 'src/modules/lessonLearnedRegister/list/lessonLearnedRegisterListSelectors';
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
  stakeholderWhoIdentified: yupFilterSchemas.string(
    i18n('entities.lessonLearnedRegister.fields.stakeholderWhoIdentified'),
  ),
  identificationDateRange: yupFilterSchemas.dateRange(
    i18n('entities.lessonLearnedRegister.fields.identificationDateRange'),
  ),
  situationDescription: yupFilterSchemas.string(
    i18n('entities.lessonLearnedRegister.fields.situationDescription'),
  ),
  category: yupFilterSchemas.string(
    i18n('entities.lessonLearnedRegister.fields.category'),
  ),
  whoCouldBeInterested: yupFilterSchemas.string(
    i18n('entities.lessonLearnedRegister.fields.whoCouldBeInterested'),
  ),
  status: yupFilterSchemas.string(
    i18n('entities.lessonLearnedRegister.fields.status'),
  ),
  impact: yupFilterSchemas.string(
    i18n('entities.lessonLearnedRegister.fields.impact'),
  ),
  recommendations: yupFilterSchemas.string(
    i18n('entities.lessonLearnedRegister.fields.recommendations'),
  ),
  associatedLifeCycleStage: yupFilterSchemas.string(
    i18n('entities.lessonLearnedRegister.fields.associatedLifeCycleStage'),
  ),
  associatedKnowledgeArea: yupFilterSchemas.string(
    i18n('entities.lessonLearnedRegister.fields.associatedKnowledgeArea'),
  ),
});

const emptyValues = {
  stakeholderWhoIdentified: null,
  identificationDateRange: [],
  situationDescription: null,
  category: null,
  whoCouldBeInterested: null,
  status: null,
  impact: null,
  recommendations: null,
  associatedLifeCycleStage: null,
  associatedKnowledgeArea: null,
}

const previewRenders = {
  stakeholderWhoIdentified: {
    label: i18n('entities.lessonLearnedRegister.fields.stakeholderWhoIdentified'),
    render: filterRenders.generic(),
  },
  identificationDateRange: {
    label: i18n('entities.lessonLearnedRegister.fields.identificationDateRange'),
    render: filterRenders.dateRange(),
  },
  situationDescription: {
    label: i18n('entities.lessonLearnedRegister.fields.situationDescription'),
    render: filterRenders.generic(),
  },
  category: {
    label: i18n('entities.lessonLearnedRegister.fields.category'),
    render: filterRenders.generic(),
  },
  whoCouldBeInterested: {
    label: i18n('entities.lessonLearnedRegister.fields.whoCouldBeInterested'),
    render: filterRenders.generic(),
  },
  status: {
    label: i18n('entities.lessonLearnedRegister.fields.status'),
    render: filterRenders.generic(),
  },
  impact: {
    label: i18n('entities.lessonLearnedRegister.fields.impact'),
    render: filterRenders.generic(),
  },
  recommendations: {
    label: i18n('entities.lessonLearnedRegister.fields.recommendations'),
    render: filterRenders.generic(),
  },
  associatedLifeCycleStage: {
    label: i18n('entities.lessonLearnedRegister.fields.associatedLifeCycleStage'),
    render: filterRenders.generic(),
  },
  associatedKnowledgeArea: {
    label: i18n('entities.lessonLearnedRegister.fields.associatedKnowledgeArea'),
    render: filterRenders.generic(),
  },
}

function LessonLearnedRegisterListFilter(props) {
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
                name="stakeholderWhoIdentified"
                label={i18n('entities.lessonLearnedRegister.fields.stakeholderWhoIdentified')}      
              />
              <DatePickerRangeFormItem
                name="identificationDateRange"
                label={i18n('entities.lessonLearnedRegister.fields.identificationDateRange')}    
              />
              <InputFormItem
                name="situationDescription"
                label={i18n('entities.lessonLearnedRegister.fields.situationDescription')}      
              />
              <InputFormItem
                name="category"
                label={i18n('entities.lessonLearnedRegister.fields.category')}      
              />
              <InputFormItem
                name="whoCouldBeInterested"
                label={i18n('entities.lessonLearnedRegister.fields.whoCouldBeInterested')}      
              />
              <InputFormItem
                name="status"
                label={i18n('entities.lessonLearnedRegister.fields.status')}      
              />
              <InputFormItem
                name="impact"
                label={i18n('entities.lessonLearnedRegister.fields.impact')}      
              />
              <InputFormItem
                name="recommendations"
                label={i18n('entities.lessonLearnedRegister.fields.recommendations')}      
              />
              <InputFormItem
                name="associatedLifeCycleStage"
                label={i18n('entities.lessonLearnedRegister.fields.associatedLifeCycleStage')}      
              />
              <InputFormItem
                name="associatedKnowledgeArea"
                label={i18n('entities.lessonLearnedRegister.fields.associatedKnowledgeArea')}      
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

export default LessonLearnedRegisterListFilter;