import listActions from 'src/modules/lessonLearnedRegister/list/lessonLearnedRegisterListActions';
import LessonLearnedRegisterService from 'src/modules/lessonLearnedRegister/lessonLearnedRegisterService';
import Errors from 'src/modules/shared/error/errors';
import { i18n } from 'src/i18n';
import { getHistory } from 'src/modules/store';
import Message from 'src/view/shared/message';

const prefix = 'LESSONLEARNEDREGISTER_DESTROY';

const lessonLearnedRegisterDestroyActions = {
  DESTROY_STARTED: `${prefix}_DESTROY_STARTED`,
  DESTROY_SUCCESS: `${prefix}_DESTROY_SUCCESS`,
  DESTROY_ERROR: `${prefix}_DESTROY_ERROR`,

  DESTROY_ALL_STARTED: `${prefix}_DESTROY_ALL_STARTED`,
  DESTROY_ALL_SUCCESS: `${prefix}_DESTROY_ALL_SUCCESS`,
  DESTROY_ALL_ERROR: `${prefix}_DESTROY_ALL_ERROR`,

  doDestroy: (id) => async (dispatch) => {
    try {
      dispatch({
        type: lessonLearnedRegisterDestroyActions.DESTROY_STARTED,
      });

      await LessonLearnedRegisterService.destroyAll([id]);

      dispatch({
        type: lessonLearnedRegisterDestroyActions.DESTROY_SUCCESS,
      });

      Message.success(
        i18n('entities.lessonLearnedRegister.destroy.success'),
      );

      dispatch(listActions.doFetchCurrentFilter());

      getHistory().push('/lesson-learned-register');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: lessonLearnedRegisterDestroyActions.DESTROY_ERROR,
      });
    }
  },

  doDestroyAll: (ids) => async (dispatch) => {
    try {
      dispatch({
        type: lessonLearnedRegisterDestroyActions.DESTROY_ALL_STARTED,
      });

      await LessonLearnedRegisterService.destroyAll(ids);

      dispatch({
        type: lessonLearnedRegisterDestroyActions.DESTROY_ALL_SUCCESS,
      });

      if (listActions) {
        dispatch(listActions.doClearAllSelected());
        dispatch(listActions.doFetchCurrentFilter());
      }

      Message.success(
        i18n('entities.lessonLearnedRegister.destroyAll.success'),
      );

      getHistory().push('/lesson-learned-register');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: lessonLearnedRegisterDestroyActions.DESTROY_ALL_ERROR,
      });
    }
  },
};

export default lessonLearnedRegisterDestroyActions;