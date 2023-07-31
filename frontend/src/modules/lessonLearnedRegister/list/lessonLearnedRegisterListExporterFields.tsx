import { i18n } from 'src/i18n';
import exporterRenders from 'src/modules/shared/exporter/exporterRenders';

export default [
  {
    name: 'id',
    label: i18n('entities.lessonLearnedRegister.fields.id'),
  },
  {
    name: 'stakeholderWhoIdentified',
    label: i18n('entities.lessonLearnedRegister.fields.stakeholderWhoIdentified'),
  },
  {
    name: 'identificationDate',
    label: i18n('entities.lessonLearnedRegister.fields.identificationDate'),
  },
  {
    name: 'situationDescription',
    label: i18n('entities.lessonLearnedRegister.fields.situationDescription'),
  },
  {
    name: 'category',
    label: i18n('entities.lessonLearnedRegister.fields.category'),
  },
  {
    name: 'whoCouldBeInterested',
    label: i18n('entities.lessonLearnedRegister.fields.whoCouldBeInterested'),
  },
  {
    name: 'status',
    label: i18n('entities.lessonLearnedRegister.fields.status'),
  },
  {
    name: 'impact',
    label: i18n('entities.lessonLearnedRegister.fields.impact'),
  },
  {
    name: 'recommendations',
    label: i18n('entities.lessonLearnedRegister.fields.recommendations'),
  },
  {
    name: 'associatedLifeCycleStage',
    label: i18n('entities.lessonLearnedRegister.fields.associatedLifeCycleStage'),
  },
  {
    name: 'associatedKnowledgeArea',
    label: i18n('entities.lessonLearnedRegister.fields.associatedKnowledgeArea'),
  },
  {
    name: 'createdAt',
    label: i18n('entities.lessonLearnedRegister.fields.createdAt'),
    render: exporterRenders.datetime(),
  },
  {
    name: 'updatedAt',
    label: i18n('entities.lessonLearnedRegister.fields.updatedAt'),
    render: exporterRenders.datetime(),
  },
];
