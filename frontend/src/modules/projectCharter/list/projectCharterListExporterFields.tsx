import { i18n } from 'src/i18n';
import exporterRenders from 'src/modules/shared/exporter/exporterRenders';

export default [
  {
    name: 'id',
    label: i18n('entities.projectCharter.fields.id'),
  },
  {
    name: 'projectName',
    label: i18n('entities.projectCharter.fields.projectName'),
  },
  {
    name: 'highLevelProjectDescription',
    label: i18n('entities.projectCharter.fields.highLevelProjectDescription'),
  },
  {
    name: 'startdate',
    label: i18n('entities.projectCharter.fields.startdate'),
  },
  {
    name: 'enddate',
    label: i18n('entities.projectCharter.fields.enddate'),
  },
  {
    name: 'projectPurpose',
    label: i18n('entities.projectCharter.fields.projectPurpose'),
  },
  {
    name: 'measurableProjectObjectives',
    label: i18n('entities.projectCharter.fields.measurableProjectObjectives'),
  },
  {
    name: 'keyBenefits',
    label: i18n('entities.projectCharter.fields.keyBenefits'),
  },
  {
    name: 'highlevelRequirements',
    label: i18n('entities.projectCharter.fields.highlevelRequirements'),
  },
  {
    name: 'boundaries',
    label: i18n('entities.projectCharter.fields.boundaries'),
  },
  {
    name: 'overallProjectRisk',
    label: i18n('entities.projectCharter.fields.overallProjectRisk'),
  },
  {
    name: 'summaryMilestoneSchedule',
    label: i18n('entities.projectCharter.fields.summaryMilestoneSchedule'),
  },
  {
    name: 'preapprovedFinancialResources',
    label: i18n('entities.projectCharter.fields.preapprovedFinancialResources'),
  },
  {
    name: 'projectApprovalRequirements',
    label: i18n('entities.projectCharter.fields.projectApprovalRequirements'),
  },
  {
    name: 'successCriteria',
    label: i18n('entities.projectCharter.fields.successCriteria'),
  },
  {
    name: 'projectExitCriteria',
    label: i18n('entities.projectCharter.fields.projectExitCriteria'),
  },
  {
    name: 'createdAt',
    label: i18n('entities.projectCharter.fields.createdAt'),
    render: exporterRenders.datetime(),
  },
  {
    name: 'updatedAt',
    label: i18n('entities.projectCharter.fields.updatedAt'),
    render: exporterRenders.datetime(),
  },
];
