import { i18n } from 'src/i18n';
import exporterRenders from 'src/modules/shared/exporter/exporterRenders';

export default [
  {
    name: 'id',
    label: i18n('entities.projectClosure.fields.id'),
  },
  {
    name: 'client',
    label: i18n('entities.projectClosure.fields.client'),
  },
  {
    name: 'dateclosure',
    label: i18n('entities.projectClosure.fields.dateclosure'),
  },
  {
    name: 'mainChangesApproved',
    label: i18n('entities.projectClosure.fields.mainChangesApproved'),
  },
  {
    name: 'mainlessonslearned',
    label: i18n('entities.projectClosure.fields.mainlessonslearned'),
  },
  {
    name: 'mainDeviations',
    label: i18n('entities.projectClosure.fields.mainDeviations'),
  },
  {
    name: 'customerComments',
    label: i18n('entities.projectClosure.fields.customerComments'),
  },
  {
    name: 'sponsorscomments',
    label: i18n('entities.projectClosure.fields.sponsorscomments'),
  },
  {
    name: 'createdAt',
    label: i18n('entities.projectClosure.fields.createdAt'),
    render: exporterRenders.datetime(),
  },
  {
    name: 'updatedAt',
    label: i18n('entities.projectClosure.fields.updatedAt'),
    render: exporterRenders.datetime(),
  },
];
