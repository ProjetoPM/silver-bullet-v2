import { i18n } from 'src/i18n';
import exporterRenders from 'src/modules/shared/exporter/exporterRenders';

export default [
  {
    name: 'id',
    label: i18n('entities.projectScopeStatement.fields.id'),
  },
  {
    name: 'productScopeDescription',
    label: i18n('entities.projectScopeStatement.fields.productScopeDescription'),
  },
  {
    name: 'acceptanceCriteria',
    label: i18n('entities.projectScopeStatement.fields.acceptanceCriteria'),
  },
  {
    name: 'deliverables',
    label: i18n('entities.projectScopeStatement.fields.deliverables'),
  },
  {
    name: 'projectExclusions',
    label: i18n('entities.projectScopeStatement.fields.projectExclusions'),
  },
  {
    name: 'createdAt',
    label: i18n('entities.projectScopeStatement.fields.createdAt'),
    render: exporterRenders.datetime(),
  },
  {
    name: 'updatedAt',
    label: i18n('entities.projectScopeStatement.fields.updatedAt'),
    render: exporterRenders.datetime(),
  },
];
