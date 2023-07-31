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
import SelectFormItem from 'src/view/shared/form/items/SelectFormItem';
import changeRequestEnumerators from 'src/modules/changeRequest/changeRequestEnumerators';
import moment from 'moment';
import DatePickerFormItem from 'src/view/shared/form/items/DatePickerFormItem';
import * as yup from 'yup';

const schema = yup.object().shape({
  requester: yupFormSchemas.string(
    i18n('entities.changeRequest.fields.requester'),
    {},
  ),
  requestIdentificationNumber: yupFormSchemas.string(
    i18n('entities.changeRequest.fields.requestIdentificationNumber'),
    {},
  ),
  typeChange: yupFormSchemas.enumerator(
    i18n('entities.changeRequest.fields.typeChange'),
    {
      "options": changeRequestEnumerators.typeChange
    },
  ),
  statusSituation: yupFormSchemas.enumerator(
    i18n('entities.changeRequest.fields.statusSituation'),
    {
      "options": changeRequestEnumerators.statusSituation
    },
  ),
  requestDate: yupFormSchemas.date(
    i18n('entities.changeRequest.fields.requestDate'),
    {},
  ),
  dateCCB: yupFormSchemas.date(
    i18n('entities.changeRequest.fields.dateCCB'),
    {},
  ),
  descriptionChange: yupFormSchemas.string(
    i18n('entities.changeRequest.fields.descriptionChange'),
    {},
  ),
  impactedKnowledgeAreas: yupFormSchemas.string(
    i18n('entities.changeRequest.fields.impactedKnowledgeAreas'),
    {},
  ),
  impactedDeliveriesDocuments: yupFormSchemas.string(
    i18n('entities.changeRequest.fields.impactedDeliveriesDocuments'),
    {},
  ),
  justification: yupFormSchemas.string(
    i18n('entities.changeRequest.fields.justification'),
    {},
  ),
  additionalComments: yupFormSchemas.string(
    i18n('entities.changeRequest.fields.additionalComments'),
    {},
  ),
  opinionCCB: yupFormSchemas.string(
    i18n('entities.changeRequest.fields.opinionCCB'),
    {},
  ),
  opinionProjectManager: yupFormSchemas.string(
    i18n('entities.changeRequest.fields.opinionProjectManager'),
    {},
  ),
});

function ChangeRequestForm(props) {
  const { saveLoading } = props;

  const [initialValues] = useState(() => {
    const record = props.record || {};

    return {
      requester: record.requester,
      requestIdentificationNumber: record.requestIdentificationNumber,
      typeChange: record.typeChange,
      statusSituation: record.statusSituation,
      requestDate: record.requestDate ? moment(record.requestDate, 'YYYY-MM-DD').toDate() : null,
      dateCCB: record.dateCCB ? moment(record.dateCCB, 'YYYY-MM-DD').toDate() : null,
      descriptionChange: record.descriptionChange,
      impactedKnowledgeAreas: record.impactedKnowledgeAreas,
      impactedDeliveriesDocuments: record.impactedDeliveriesDocuments,
      justification: record.justification,
      additionalComments: record.additionalComments,
      opinionCCB: record.opinionCCB,
      opinionProjectManager: record.opinionProjectManager,
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
            name="requester"
            label={i18n('entities.changeRequest.fields.requester')}
            required={false}
          autoFocus
          />
        </div>
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
          <InputFormItem
            name="requestIdentificationNumber"
            label={i18n('entities.changeRequest.fields.requestIdentificationNumber')}
            required={false}
          />
        </div>
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
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
            required={false}
          />
        </div>
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
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
            required={false}
          />
        </div>
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
          <DatePickerFormItem
            name="requestDate"
            label={i18n('entities.changeRequest.fields.requestDate')}
            required={false}
          />
        </div>
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
          <DatePickerFormItem
            name="dateCCB"
            label={i18n('entities.changeRequest.fields.dateCCB')}
            required={false}
          />
        </div>
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
          <InputFormItem
            name="descriptionChange"
            label={i18n('entities.changeRequest.fields.descriptionChange')}
            required={false}
          />
        </div>
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
          <InputFormItem
            name="impactedKnowledgeAreas"
            label={i18n('entities.changeRequest.fields.impactedKnowledgeAreas')}
            required={false}
          />
        </div>
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
          <InputFormItem
            name="impactedDeliveriesDocuments"
            label={i18n('entities.changeRequest.fields.impactedDeliveriesDocuments')}
            required={false}
          />
        </div>
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
          <InputFormItem
            name="justification"
            label={i18n('entities.changeRequest.fields.justification')}
            required={false}
          />
        </div>
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
          <InputFormItem
            name="additionalComments"
            label={i18n('entities.changeRequest.fields.additionalComments')}
            required={false}
          />
        </div>
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
          <InputFormItem
            name="opinionCCB"
            label={i18n('entities.changeRequest.fields.opinionCCB')}
            required={false}
          />
        </div>
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
          <InputFormItem
            name="opinionProjectManager"
            label={i18n('entities.changeRequest.fields.opinionProjectManager')}
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

export default ChangeRequestForm;
