import {
  faSearch,
  faUndo,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';    
import { i18n } from 'src/i18n';
import actions from 'src/modules/stakeholderRegistration/list/stakeholderRegistrationListActions';
import selectors from 'src/modules/stakeholderRegistration/list/stakeholderRegistrationListSelectors';
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
import stakeholderRegistrationEnumerators from 'src/modules/stakeholderRegistration/stakeholderRegistrationEnumerators';

const schema = yup.object().shape({
  nome: yupFilterSchemas.string(
    i18n('entities.stakeholderRegistration.fields.nome'),
  ),
  tipo: yupFilterSchemas.enumerator(
    i18n('entities.stakeholderRegistration.fields.tipo'),
  ),
  mainRoleintheProject: yupFilterSchemas.enumerator(
    i18n('entities.stakeholderRegistration.fields.mainRoleintheProject'),
  ),
  organization: yupFilterSchemas.string(
    i18n('entities.stakeholderRegistration.fields.organization'),
  ),
  positioninOrganization: yupFilterSchemas.string(
    i18n('entities.stakeholderRegistration.fields.positioninOrganization'),
  ),
  email: yupFilterSchemas.string(
    i18n('entities.stakeholderRegistration.fields.email'),
  ),
  mainProjectResponsibility: yupFilterSchemas.string(
    i18n('entities.stakeholderRegistration.fields.mainProjectResponsibility'),
  ),
  phone: yupFilterSchemas.string(
    i18n('entities.stakeholderRegistration.fields.phone'),
  ),
  workplace: yupFilterSchemas.string(
    i18n('entities.stakeholderRegistration.fields.workplace'),
  ),
  essentialRequirements: yupFilterSchemas.string(
    i18n('entities.stakeholderRegistration.fields.essentialRequirements'),
  ),
  mainExpectations: yupFilterSchemas.string(
    i18n('entities.stakeholderRegistration.fields.mainExpectations'),
  ),
  phaseofGreaterInterest: yupFilterSchemas.string(
    i18n('entities.stakeholderRegistration.fields.phaseofGreaterInterest'),
  ),
  observations: yupFilterSchemas.string(
    i18n('entities.stakeholderRegistration.fields.observations'),
  ),
});

const emptyValues = {
  nome: null,
  tipo: null,
  mainRoleintheProject: null,
  organization: null,
  positioninOrganization: null,
  email: null,
  mainProjectResponsibility: null,
  phone: null,
  workplace: null,
  essentialRequirements: null,
  mainExpectations: null,
  phaseofGreaterInterest: null,
  observations: null,
}

const previewRenders = {
  nome: {
    label: i18n('entities.stakeholderRegistration.fields.nome'),
    render: filterRenders.generic(),
  },
  tipo: {
    label: i18n('entities.stakeholderRegistration.fields.tipo'),
    render: filterRenders.enumerator('entities.stakeholderRegistration.enumerators.tipo',),
  },
  mainRoleintheProject: {
    label: i18n('entities.stakeholderRegistration.fields.mainRoleintheProject'),
    render: filterRenders.enumerator('entities.stakeholderRegistration.enumerators.mainRoleintheProject',),
  },
  organization: {
    label: i18n('entities.stakeholderRegistration.fields.organization'),
    render: filterRenders.generic(),
  },
  positioninOrganization: {
    label: i18n('entities.stakeholderRegistration.fields.positioninOrganization'),
    render: filterRenders.generic(),
  },
  email: {
    label: i18n('entities.stakeholderRegistration.fields.email'),
    render: filterRenders.generic(),
  },
  mainProjectResponsibility: {
    label: i18n('entities.stakeholderRegistration.fields.mainProjectResponsibility'),
    render: filterRenders.generic(),
  },
  phone: {
    label: i18n('entities.stakeholderRegistration.fields.phone'),
    render: filterRenders.generic(),
  },
  workplace: {
    label: i18n('entities.stakeholderRegistration.fields.workplace'),
    render: filterRenders.generic(),
  },
  essentialRequirements: {
    label: i18n('entities.stakeholderRegistration.fields.essentialRequirements'),
    render: filterRenders.generic(),
  },
  mainExpectations: {
    label: i18n('entities.stakeholderRegistration.fields.mainExpectations'),
    render: filterRenders.generic(),
  },
  phaseofGreaterInterest: {
    label: i18n('entities.stakeholderRegistration.fields.phaseofGreaterInterest'),
    render: filterRenders.generic(),
  },
  observations: {
    label: i18n('entities.stakeholderRegistration.fields.observations'),
    render: filterRenders.generic(),
  },
}

function StakeholderRegistrationListFilter(props) {
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
                name="nome"
                label={i18n('entities.stakeholderRegistration.fields.nome')}      
              />
              <SelectFormItem
                  name="tipo"
                  label={i18n('entities.stakeholderRegistration.fields.tipo')}
                  options={stakeholderRegistrationEnumerators.tipo.map(
                    (value) => ({
                      value,
                      label: i18n(
                        `entities.stakeholderRegistration.enumerators.tipo.${value}`,
                      ),
                    }),
                  )}
                />
              <SelectFormItem
                  name="mainRoleintheProject"
                  label={i18n('entities.stakeholderRegistration.fields.mainRoleintheProject')}
                  options={stakeholderRegistrationEnumerators.mainRoleintheProject.map(
                    (value) => ({
                      value,
                      label: i18n(
                        `entities.stakeholderRegistration.enumerators.mainRoleintheProject.${value}`,
                      ),
                    }),
                  )}
                />
              <InputFormItem
                name="organization"
                label={i18n('entities.stakeholderRegistration.fields.organization')}      
              />
              <InputFormItem
                name="positioninOrganization"
                label={i18n('entities.stakeholderRegistration.fields.positioninOrganization')}      
              />
              <InputFormItem
                name="email"
                label={i18n('entities.stakeholderRegistration.fields.email')}      
              />
              <InputFormItem
                name="mainProjectResponsibility"
                label={i18n('entities.stakeholderRegistration.fields.mainProjectResponsibility')}      
              />
              <InputFormItem
                name="phone"
                label={i18n('entities.stakeholderRegistration.fields.phone')}      
              />
              <InputFormItem
                name="workplace"
                label={i18n('entities.stakeholderRegistration.fields.workplace')}      
              />
              <InputFormItem
                name="essentialRequirements"
                label={i18n('entities.stakeholderRegistration.fields.essentialRequirements')}      
              />
              <InputFormItem
                name="mainExpectations"
                label={i18n('entities.stakeholderRegistration.fields.mainExpectations')}      
              />
              <InputFormItem
                name="phaseofGreaterInterest"
                label={i18n('entities.stakeholderRegistration.fields.phaseofGreaterInterest')}      
              />
              <InputFormItem
                name="observations"
                label={i18n('entities.stakeholderRegistration.fields.observations')}      
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

export default StakeholderRegistrationListFilter;