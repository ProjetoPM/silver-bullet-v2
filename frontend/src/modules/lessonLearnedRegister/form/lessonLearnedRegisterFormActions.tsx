import LessonLearnedRegisterService from 'src/modules/lessonLearnedRegister/lessonLearnedRegisterService';
import Errors from 'src/modules/shared/error/errors';
import Message from 'src/view/shared/message';
import { getHistory } from 'src/modules/store';
import { i18n } from 'src/i18n';

const prefix = 'LESSONLEARNEDREGISTER_FORM';

const lessonLearnedRegisterFormActions = {
  INIT_STARTED: `${prefix}_INIT_STARTED`,
  INIT_SUCCESS: `${prefix}_INIT_SUCCESS`,
  INIT_ERROR: `${prefix}_INIT_ERROR`,

  CREATE_STARTED: `${prefix}_CREATE_STARTED`,
  CREATE_SUCCESS: `${prefix}_CREATE_SUCCESS`,
  CREATE_ERROR: `${prefix}_CREATE_ERROR`,

  UPDATE_STARTED: `${prefix}_UPDATE_STARTED`,
  UPDATE_SUCCESS: `${prefix}_UPDATE_SUCCESS`,
  UPDATE_ERROR: `${prefix}_UPDATE_ERROR`,

  doInit: (id) => async (dispatch) => {
    try {
      dispatch({
        type: lessonLearnedRegisterFormActions.INIT_STARTED,
      });

      let record = {};

      const isEdit = Boolean(id);

      if (isEdit) {
        record = await LessonLearnedRegisterService.find(id);
      }

      dispatch({
        type: lessonLearnedRegisterFormActions.INIT_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: lessonLearnedRegisterFormActions.INIT_ERROR,
      });

      getHistory().push('/lesson-learned-register');
    }
  },

  doCreate: (values) => async (dispatch) => {
    try {
      dispatch({
        type: lessonLearnedRegisterFormActions.CREATE_STARTED,
      });

      await LessonLearnedRegisterService.create(values);

      dispatch({
        type: lessonLearnedRegisterFormActions.CREATE_SUCCESS,
      });

      Message.success(
        i18n('entities.lessonLearnedRegister.create.success'),
      );

      getHistory().push('/lesson-learned-register');
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: lessonLearnedRegisterFormActions.CREATE_ERROR,
      });
    }
  },

  doUpdate: (id, values) => async (dispatch, getState) => {
    try {
      dispatch({
        type: lessonLearnedRegisterFormActions.UPDATE_STARTED,
      });

      await LessonLearnedRegisterService.update(id, values);

      dispatch({
        type: lessonLearnedRegisterFormActions.UPDATE_SUCCESS,
      });

      Message.success(
        i18n('entities.lessonLearnedRegister.update.success'),
      );

      getHistory().push('/lesson-learned-register');
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: lessonLearnedRegisterFormActions.UPDATE_ERROR,
      });
    }
  },
};

export default lessonLearnedRegisterFormActions;
