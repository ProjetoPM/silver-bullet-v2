import AssumptionLogService from 'src/modules/assumptionLog/assumptionLogService';
import Errors from 'src/modules/shared/error/errors';
import { getHistory } from 'src/modules/store';

const prefix = 'ASSUMPTIONLOG_VIEW';

const assumptionLogViewActions = {
  FIND_STARTED: `${prefix}_FIND_STARTED`,
  FIND_SUCCESS: `${prefix}_FIND_SUCCESS`,
  FIND_ERROR: `${prefix}_FIND_ERROR`,

  doFind: (id) => async (dispatch) => {
    try {
      dispatch({
        type: assumptionLogViewActions.FIND_STARTED,
      });

      const record = await AssumptionLogService.find(id);

      dispatch({
        type: assumptionLogViewActions.FIND_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: assumptionLogViewActions.FIND_ERROR,
      });

      getHistory().push('/assumption-log');
    }
  },
};

export default assumptionLogViewActions;
