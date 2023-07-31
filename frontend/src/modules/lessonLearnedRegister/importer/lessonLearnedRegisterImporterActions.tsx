import importerActions from 'src/modules/shared/importer/importerActions';
import selectors from 'src/modules/lessonLearnedRegister/importer/lessonLearnedRegisterImporterSelectors';
import LessonLearnedRegisterService from 'src/modules/lessonLearnedRegister/lessonLearnedRegisterService';
import fields from 'src/modules/lessonLearnedRegister/importer/lessonLearnedRegisterImporterFields';
import { i18n } from 'src/i18n';

const lessonLearnedRegisterImporterActions = importerActions(
  'LESSONLEARNEDREGISTER_IMPORTER',
  selectors,
  LessonLearnedRegisterService.import,
  fields,
  i18n('entities.lessonLearnedRegister.importer.fileName'),
);

export default lessonLearnedRegisterImporterActions;