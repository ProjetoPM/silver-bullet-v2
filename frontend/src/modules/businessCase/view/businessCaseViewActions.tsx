import BusinessCaseService from 'src/modules/businessCase/businessCaseService';
import Errors from 'src/modules/shared/error/errors';
import { getHistory } from 'src/modules/store';

const prefix = 'BUSINESSCASE_VIEW';

const businessCaseViewActions = {
  FIND_STARTED: `${prefix}_FIND_STARTED`,
  FIND_SUCCESS: `${prefix}_FIND_SUCCESS`,
  FIND_ERROR: `${prefix}_FIND_ERROR`,

  doFind: (id) => async (dispatch) => {
    try {
      dispatch({
        type: businessCaseViewActions.FIND_STARTED,
      });

      const record = await BusinessCaseService.find(id);

      dispatch({
        type: businessCaseViewActions.FIND_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: businessCaseViewActions.FIND_ERROR,
      });

      getHistory().push('/business-case');
    }
  },
};

export default businessCaseViewActions;
