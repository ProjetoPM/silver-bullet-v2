import { i18n } from 'src/i18n';
import exporterRenders from 'src/modules/shared/exporter/exporterRenders';

export default [
  {
    name: 'id',
    label: i18n('entities.businessCase.fields.id'),
  },
  {
    name: 'businessNeeds',
    label: i18n('entities.businessCase.fields.businessNeeds'),
  },
  {
    name: 'situationAnalysis',
    label: i18n('entities.businessCase.fields.situationAnalysis'),
  },
  {
    name: 'recommendation',
    label: i18n('entities.businessCase.fields.recommendation'),
  },
  {
    name: 'evaluation',
    label: i18n('entities.businessCase.fields.evaluation'),
  },
  {
    name: 'createdAt',
    label: i18n('entities.businessCase.fields.createdAt'),
    render: exporterRenders.datetime(),
  },
  {
    name: 'updatedAt',
    label: i18n('entities.businessCase.fields.updatedAt'),
    render: exporterRenders.datetime(),
  },
];
