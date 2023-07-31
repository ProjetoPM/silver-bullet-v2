import IssueLogService from 'src/modules/issueLog/issueLogService';
import Errors from 'src/modules/shared/error/errors';
import { getHistory } from 'src/modules/store';

const prefix = 'ISSUELOG_VIEW';

const issueLogViewActions = {
  FIND_STARTED: `${prefix}_FIND_STARTED`,
  FIND_SUCCESS: `${prefix}_FIND_SUCCESS`,
  FIND_ERROR: `${prefix}_FIND_ERROR`,

  doFind: (id) => async (dispatch) => {
    try {
      dispatch({
        type: issueLogViewActions.FIND_STARTED,
      });

      const record = await IssueLogService.find(id);

      dispatch({
        type: issueLogViewActions.FIND_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: issueLogViewActions.FIND_ERROR,
      });

      getHistory().push('/issue-log');
    }
  },
};

export default issueLogViewActions;
