import ProjectScopeStatementService from 'src/modules/projectScopeStatement/projectScopeStatementService';
import Errors from 'src/modules/shared/error/errors';
import { getHistory } from 'src/modules/store';

const prefix = 'PROJECTSCOPESTATEMENT_VIEW';

const projectScopeStatementViewActions = {
  FIND_STARTED: `${prefix}_FIND_STARTED`,
  FIND_SUCCESS: `${prefix}_FIND_SUCCESS`,
  FIND_ERROR: `${prefix}_FIND_ERROR`,

  doFind: (id) => async (dispatch) => {
    try {
      dispatch({
        type: projectScopeStatementViewActions.FIND_STARTED,
      });

      const record = await ProjectScopeStatementService.find(id);

      dispatch({
        type: projectScopeStatementViewActions.FIND_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: projectScopeStatementViewActions.FIND_ERROR,
      });

      getHistory().push('/project-scope-statement');
    }
  },
};

export default projectScopeStatementViewActions;
