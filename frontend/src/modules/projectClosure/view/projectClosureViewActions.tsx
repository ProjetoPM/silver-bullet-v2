import ProjectClosureService from 'src/modules/projectClosure/projectClosureService';
import Errors from 'src/modules/shared/error/errors';
import { getHistory } from 'src/modules/store';

const prefix = 'PROJECTCLOSURE_VIEW';

const projectClosureViewActions = {
  FIND_STARTED: `${prefix}_FIND_STARTED`,
  FIND_SUCCESS: `${prefix}_FIND_SUCCESS`,
  FIND_ERROR: `${prefix}_FIND_ERROR`,

  doFind: (id) => async (dispatch) => {
    try {
      dispatch({
        type: projectClosureViewActions.FIND_STARTED,
      });

      const record = await ProjectClosureService.find(id);

      dispatch({
        type: projectClosureViewActions.FIND_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: projectClosureViewActions.FIND_ERROR,
      });

      getHistory().push('/project-closure');
    }
  },
};

export default projectClosureViewActions;
