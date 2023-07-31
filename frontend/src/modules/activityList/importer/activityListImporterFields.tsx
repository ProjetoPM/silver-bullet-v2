import schemas from 'src/modules/shared/yup/yupImporterSchemas';
import { i18n } from 'src/i18n';

export default [
  {
    name: 'activityLabel',
    label: i18n('entities.activityList.fields.activityLabel'),
    schema: schemas.string(
      i18n('entities.activityList.fields.activityLabel'),
      {},
    ),
  },
  {
    name: 'milestone',
    label: i18n('entities.activityList.fields.milestone'),
    schema: schemas.string(
      i18n('entities.activityList.fields.milestone'),
      {},
    ),
  },
  {
    name: 'activityName',
    label: i18n('entities.activityList.fields.activityName'),
    schema: schemas.string(
      i18n('entities.activityList.fields.activityName'),
      {},
    ),
  },
  {
    name: 'projectPhase',
    label: i18n('entities.activityList.fields.projectPhase'),
    schema: schemas.string(
      i18n('entities.activityList.fields.projectPhase'),
      {},
    ),
  },
  {
    name: 'wBSId',
    label: i18n('entities.activityList.fields.wBSId'),
    schema: schemas.string(
      i18n('entities.activityList.fields.wBSId'),
      {},
    ),
  },
  {
    name: 'activityDescription',
    label: i18n('entities.activityList.fields.activityDescription'),
    schema: schemas.string(
      i18n('entities.activityList.fields.activityDescription'),
      {},
    ),
  },
];