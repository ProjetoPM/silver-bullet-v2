import ProjectCharterService from 'src/modules/projectCharter/projectCharterService';
import Errors from 'src/modules/shared/error/errors';
import { getHistory } from 'src/modules/store';

const prefix = 'PROJECTCHARTER_VIEW';

const projectCharterViewActions = {
  FIND_STARTED: `${prefix}_FIND_STARTED`,
  FIND_SUCCESS: `${prefix}_FIND_SUCCESS`,
  FIND_ERROR: `${prefix}_FIND_ERROR`,

  doFind: (id) => async (dispatch) => {
    try {
      dispatch({
        type: projectCharterViewActions.FIND_STARTED,
      });

      const record = await ProjectCharterService.find(id);

      dispatch({
        type: projectCharterViewActions.FIND_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: projectCharterViewActions.FIND_ERROR,
      });

      getHistory().push('/project-charter');
    }
  },
};

export default projectCharterViewActions;
