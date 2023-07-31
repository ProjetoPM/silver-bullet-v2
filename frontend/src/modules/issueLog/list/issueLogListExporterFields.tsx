import { i18n } from 'src/i18n';
import exporterRenders from 'src/modules/shared/exporter/exporterRenders';

export default [
  {
    name: 'id',
    label: i18n('entities.issueLog.fields.id'),
  },
  {
    name: 'responsibleIdentifying',
    label: i18n('entities.issueLog.fields.responsibleIdentifying'),
  },
  {
    name: 'identificationDate',
    label: i18n('entities.issueLog.fields.identificationDate'),
  },
  {
    name: 'issueDescription',
    label: i18n('entities.issueLog.fields.issueDescription'),
  },
  {
    name: 'issueType',
    label: i18n('entities.issueLog.fields.issueType'),
  },
  {
    name: 'issueResponsible',
    label: i18n('entities.issueLog.fields.issueResponsible'),
  },
  {
    name: 'situation',
    label: i18n('entities.issueLog.fields.situation'),
  },
  {
    name: 'requiredAction',
    label: i18n('entities.issueLog.fields.requiredAction'),
  },
  {
    name: 'comments',
    label: i18n('entities.issueLog.fields.comments'),
  },
  {
    name: 'createdAt',
    label: i18n('entities.issueLog.fields.createdAt'),
    render: exporterRenders.datetime(),
  },
  {
    name: 'updatedAt',
    label: i18n('entities.issueLog.fields.updatedAt'),
    render: exporterRenders.datetime(),
  },
];
