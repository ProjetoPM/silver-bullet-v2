import LessonLearnedRegisterService from 'src/modules/lessonLearnedRegister/lessonLearnedRegisterService';
import Errors from 'src/modules/shared/error/errors';
import { getHistory } from 'src/modules/store';

const prefix = 'LESSONLEARNEDREGISTER_VIEW';

const lessonLearnedRegisterViewActions = {
  FIND_STARTED: `${prefix}_FIND_STARTED`,
  FIND_SUCCESS: `${prefix}_FIND_SUCCESS`,
  FIND_ERROR: `${prefix}_FIND_ERROR`,

  doFind: (id) => async (dispatch) => {
    try {
      dispatch({
        type: lessonLearnedRegisterViewActions.FIND_STARTED,
      });

      const record = await LessonLearnedRegisterService.find(id);

      dispatch({
        type: lessonLearnedRegisterViewActions.FIND_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: lessonLearnedRegisterViewActions.FIND_ERROR,
      });

      getHistory().push('/lesson-learned-register');
    }
  },
};

export default lessonLearnedRegisterViewActions;
