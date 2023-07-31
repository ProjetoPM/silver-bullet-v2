import schemas from 'src/modules/shared/yup/yupImporterSchemas';
import { i18n } from 'src/i18n';import moment from 'moment';

export default [
  {
    name: 'stakeholderWhoIdentified',
    label: i18n('entities.lessonLearnedRegister.fields.stakeholderWhoIdentified'),
    schema: schemas.string(
      i18n('entities.lessonLearnedRegister.fields.stakeholderWhoIdentified'),
      {},
    ),
  },
  {
    name: 'identificationDate',
    label: i18n('entities.lessonLearnedRegister.fields.identificationDate'),
    schema: schemas.date(
      i18n('entities.lessonLearnedRegister.fields.identificationDate'),
      {},
    ),
   render: (value) => value && value instanceof Date ? moment(value).format('YYYY-MM-DD') : value,
  },
  {
    name: 'situationDescription',
    label: i18n('entities.lessonLearnedRegister.fields.situationDescription'),
    schema: schemas.string(
      i18n('entities.lessonLearnedRegister.fields.situationDescription'),
      {},
    ),
  },
  {
    name: 'category',
    label: i18n('entities.lessonLearnedRegister.fields.category'),
    schema: schemas.string(
      i18n('entities.lessonLearnedRegister.fields.category'),
      {},
    ),
  },
  {
    name: 'whoCouldBeInterested',
    label: i18n('entities.lessonLearnedRegister.fields.whoCouldBeInterested'),
    schema: schemas.string(
      i18n('entities.lessonLearnedRegister.fields.whoCouldBeInterested'),
      {},
    ),
  },
  {
    name: 'status',
    label: i18n('entities.lessonLearnedRegister.fields.status'),
    schema: schemas.string(
      i18n('entities.lessonLearnedRegister.fields.status'),
      {},
    ),
  },
  {
    name: 'impact',
    label: i18n('entities.lessonLearnedRegister.fields.impact'),
    schema: schemas.string(
      i18n('entities.lessonLearnedRegister.fields.impact'),
      {},
    ),
  },
  {
    name: 'recommendations',
    label: i18n('entities.lessonLearnedRegister.fields.recommendations'),
    schema: schemas.string(
      i18n('entities.lessonLearnedRegister.fields.recommendations'),
      {},
    ),
  },
  {
    name: 'associatedLifeCycleStage',
    label: i18n('entities.lessonLearnedRegister.fields.associatedLifeCycleStage'),
    schema: schemas.string(
      i18n('entities.lessonLearnedRegister.fields.associatedLifeCycleStage'),
      {},
    ),
  },
  {
    name: 'associatedKnowledgeArea',
    label: i18n('entities.lessonLearnedRegister.fields.associatedKnowledgeArea'),
    schema: schemas.string(
      i18n('entities.lessonLearnedRegister.fields.associatedKnowledgeArea'),
      {},
    ),
  },
];