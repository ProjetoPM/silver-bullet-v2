import { faSave } from '@fortawesome/free-regular-svg-icons';
import {
  faTimes,
  faUndo,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { yupResolver } from '@hookform/resolvers/yup';
import React, { useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { i18n } from 'src/i18n';
import yupFormSchemas from 'src/modules/shared/yup/yupFormSchemas';
import InputFormItem from 'src/view/shared/form/items/InputFormItem';
import moment from 'moment';
import DatePickerFormItem from 'src/view/shared/form/items/DatePickerFormItem';
import * as yup from 'yup';

const schema = yup.object().shape({
  stakeholderWhoIdentified: yupFormSchemas.string(
    i18n('entities.lessonLearnedRegister.fields.stakeholderWhoIdentified'),
    {},
  ),
  identificationDate: yupFormSchemas.date(
    i18n('entities.lessonLearnedRegister.fields.identificationDate'),
    {},
  ),
  situationDescription: yupFormSchemas.string(
    i18n('entities.lessonLearnedRegister.fields.situationDescription'),
    {},
  ),
  category: yupFormSchemas.string(
    i18n('entities.lessonLearnedRegister.fields.category'),
    {},
  ),
  whoCouldBeInterested: yupFormSchemas.string(
    i18n('entities.lessonLearnedRegister.fields.whoCouldBeInterested'),
    {},
  ),
  status: yupFormSchemas.string(
    i18n('entities.lessonLearnedRegister.fields.status'),
    {},
  ),
  impact: yupFormSchemas.string(
    i18n('entities.lessonLearnedRegister.fields.impact'),
    {},
  ),
  recommendations: yupFormSchemas.string(
    i18n('entities.lessonLearnedRegister.fields.recommendations'),
    {},
  ),
  associatedLifeCycleStage: yupFormSchemas.string(
    i18n('entities.lessonLearnedRegister.fields.associatedLifeCycleStage'),
    {},
  ),
  associatedKnowledgeArea: yupFormSchemas.string(
    i18n('entities.lessonLearnedRegister.fields.associatedKnowledgeArea'),
    {},
  ),
});

function LessonLearnedRegisterForm(props) {
  const { saveLoading } = props;

  const [initialValues] = useState(() => {
    const record = props.record || {};

    return {
      stakeholderWhoIdentified: record.stakeholderWhoIdentified,
      identificationDate: record.identificationDate ? moment(record.identificationDate, 'YYYY-MM-DD').toDate() : null,
      situationDescription: record.situationDescription,
      category: record.category,
      whoCouldBeInterested: record.whoCouldBeInterested,
      status: record.status,
      impact: record.impact,
      recommendations: record.recommendations,
      associatedLifeCycleStage: record.associatedLifeCycleStage,
      associatedKnowledgeArea: record.associatedKnowledgeArea,
    };
  });

  const form = useForm({
    resolver: yupResolver(schema),
    mode: 'all',
    defaultValues: initialValues,
  });

  const onSubmit = (values) => {
    props.onSubmit(props.record?.id, values);
  };

  const onReset = () => {
    Object.keys(initialValues).forEach((key) => {
      form.setValue(key, initialValues[key]);
    });
  };

  return (
    <FormProvider {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <div className="w-full sm:w-md md:w-md lg:w-md">
          <InputFormItem
            name="stakeholderWhoIdentified"
            label={i18n('entities.lessonLearnedRegister.fields.stakeholderWhoIdentified')}
          hint={i18n('entities.lessonLearnedRegister.hints.stakeholderWhoIdentified')}
            required={false}
          autoFocus
          />
        </div>
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
          <DatePickerFormItem
            name="identificationDate"
            label={i18n('entities.lessonLearnedRegister.fields.identificationDate')}
          hint={i18n('entities.lessonLearnedRegister.hints.identificationDate')}
            required={false}
          />
        </div>
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
          <InputFormItem
            name="situationDescription"
            label={i18n('entities.lessonLearnedRegister.fields.situationDescription')}
          hint={i18n('entities.lessonLearnedRegister.hints.situationDescription')}
            required={false}
          />
        </div>
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
          <InputFormItem
            name="category"
            label={i18n('entities.lessonLearnedRegister.fields.category')}
          hint={i18n('entities.lessonLearnedRegister.hints.category')}
            required={false}
          />
        </div>
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
          <InputFormItem
            name="whoCouldBeInterested"
            label={i18n('entities.lessonLearnedRegister.fields.whoCouldBeInterested')}
          hint={i18n('entities.lessonLearnedRegister.hints.whoCouldBeInterested')}
            required={false}
          />
        </div>
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
          <InputFormItem
            name="status"
            label={i18n('entities.lessonLearnedRegister.fields.status')}
          hint={i18n('entities.lessonLearnedRegister.hints.status')}
            required={false}
          />
        </div>
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
          <InputFormItem
            name="impact"
            label={i18n('entities.lessonLearnedRegister.fields.impact')}
          hint={i18n('entities.lessonLearnedRegister.hints.impact')}
            required={false}
          />
        </div>
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
          <InputFormItem
            name="recommendations"
            label={i18n('entities.lessonLearnedRegister.fields.recommendations')}
          hint={i18n('entities.lessonLearnedRegister.hints.recommendations')}
            required={false}
          />
        </div>
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
          <InputFormItem
            name="associatedLifeCycleStage"
            label={i18n('entities.lessonLearnedRegister.fields.associatedLifeCycleStage')}
          hint={i18n('entities.lessonLearnedRegister.hints.associatedLifeCycleStage')}
            required={false}
          />
        </div>
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
          <InputFormItem
            name="associatedKnowledgeArea"
            label={i18n('entities.lessonLearnedRegister.fields.associatedKnowledgeArea')}
          hint={i18n('entities.lessonLearnedRegister.hints.associatedKnowledgeArea')}
            required={false}
          />
        </div>

        <div className="pt-4">
          <button
            className="mr-2 mb-2 text-sm disabled:opacity-50 disabled:cursor-default px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600"
            disabled={saveLoading}
            type="button"
            onClick={form.handleSubmit(onSubmit)}
          >
            <FontAwesomeIcon
              className="mr-2"
              icon={faSave}
            />
            {i18n('common.save')}
          </button>

          <button
            disabled={saveLoading}
            onClick={onReset}
            className="mr-2 mb-2 text-sm disabled:opacity-50 disabled:cursor-default px-4 py-2 tracking-wide dark:border-gray-800 dark:bg-gray-800 dark:hover:bg-gray-600 dark:text-white text-gray-700 border border-gray-300 transition-colors duration-200 transform bg-white rounded-md hover:bg-gray-100 focus:outline-none focus:bg-gray-100"
            type="button"
          >
            <FontAwesomeIcon
              className="mr-2"
              icon={faUndo}
            />
            {i18n('common.reset')}
          </button>

          {props.onCancel ? (
            <button
              disabled={saveLoading}
              onClick={() => props.onCancel()}
              className="mr-2 mb-2 text-sm disabled:opacity-50 disabled:cursor-default px-4 py-2 tracking-wide dark:border-gray-800 dark:bg-gray-800 dark:hover:bg-gray-600 dark:text-white text-gray-700 border border-gray-300 transition-colors duration-200 transform bg-white rounded-md hover:bg-gray-100 focus:outline-none focus:bg-gray-100"
              type="button"
            >
              <FontAwesomeIcon
                className="mr-2"
                icon={faTimes}
              />
              {i18n('common.cancel')}
            </button>
          ) : null}
        </div>
      </form>
    </FormProvider>
  );
}

export default LessonLearnedRegisterForm;
