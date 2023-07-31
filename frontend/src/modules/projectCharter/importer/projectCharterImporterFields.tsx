import schemas from 'src/modules/shared/yup/yupImporterSchemas';
import { i18n } from 'src/i18n';import moment from 'moment';

export default [
  {
    name: 'projectName',
    label: i18n('entities.projectCharter.fields.projectName'),
    schema: schemas.string(
      i18n('entities.projectCharter.fields.projectName'),
      {},
    ),
  },
  {
    name: 'highLevelProjectDescription',
    label: i18n('entities.projectCharter.fields.highLevelProjectDescription'),
    schema: schemas.string(
      i18n('entities.projectCharter.fields.highLevelProjectDescription'),
      {
        "required": true,
        "min": 5,
        "max": 2000
      },
    ),
  },
  {
    name: 'startdate',
    label: i18n('entities.projectCharter.fields.startdate'),
    schema: schemas.date(
      i18n('entities.projectCharter.fields.startdate'),
      {},
    ),
   render: (value) => value && value instanceof Date ? moment(value).format('YYYY-MM-DD') : value,
  },
  {
    name: 'enddate',
    label: i18n('entities.projectCharter.fields.enddate'),
    schema: schemas.date(
      i18n('entities.projectCharter.fields.enddate'),
      {},
    ),
   render: (value) => value && value instanceof Date ? moment(value).format('YYYY-MM-DD') : value,
  },
  {
    name: 'projectPurpose',
    label: i18n('entities.projectCharter.fields.projectPurpose'),
    schema: schemas.string(
      i18n('entities.projectCharter.fields.projectPurpose'),
      {},
    ),
  },
  {
    name: 'measurableProjectObjectives',
    label: i18n('entities.projectCharter.fields.measurableProjectObjectives'),
    schema: schemas.string(
      i18n('entities.projectCharter.fields.measurableProjectObjectives'),
      {
        "min": 5,
        "max": 2000
      },
    ),
  },
  {
    name: 'keyBenefits',
    label: i18n('entities.projectCharter.fields.keyBenefits'),
    schema: schemas.string(
      i18n('entities.projectCharter.fields.keyBenefits'),
      {},
    ),
  },
  {
    name: 'highlevelRequirements',
    label: i18n('entities.projectCharter.fields.highlevelRequirements'),
    schema: schemas.string(
      i18n('entities.projectCharter.fields.highlevelRequirements'),
      {
        "max": 2000
      },
    ),
  },
  {
    name: 'boundaries',
    label: i18n('entities.projectCharter.fields.boundaries'),
    schema: schemas.string(
      i18n('entities.projectCharter.fields.boundaries'),
      {
        "max": 2000
      },
    ),
  },
  {
    name: 'overallProjectRisk',
    label: i18n('entities.projectCharter.fields.overallProjectRisk'),
    schema: schemas.string(
      i18n('entities.projectCharter.fields.overallProjectRisk'),
      {
        "max": 2000
      },
    ),
  },
  {
    name: 'summaryMilestoneSchedule',
    label: i18n('entities.projectCharter.fields.summaryMilestoneSchedule'),
    schema: schemas.string(
      i18n('entities.projectCharter.fields.summaryMilestoneSchedule'),
      {
        "max": 2000
      },
    ),
  },
  {
    name: 'preapprovedFinancialResources',
    label: i18n('entities.projectCharter.fields.preapprovedFinancialResources'),
    schema: schemas.string(
      i18n('entities.projectCharter.fields.preapprovedFinancialResources'),
      {
        "max": 2000
      },
    ),
  },
  {
    name: 'projectApprovalRequirements',
    label: i18n('entities.projectCharter.fields.projectApprovalRequirements'),
    schema: schemas.string(
      i18n('entities.projectCharter.fields.projectApprovalRequirements'),
      {
        "max": 2000
      },
    ),
  },
  {
    name: 'successCriteria',
    label: i18n('entities.projectCharter.fields.successCriteria'),
    schema: schemas.string(
      i18n('entities.projectCharter.fields.successCriteria'),
      {
        "max": 2000
      },
    ),
  },
  {
    name: 'projectExitCriteria',
    label: i18n('entities.projectCharter.fields.projectExitCriteria'),
    schema: schemas.string(
      i18n('entities.projectCharter.fields.projectExitCriteria'),
      {
        "max": 2000
      },
    ),
  },
];