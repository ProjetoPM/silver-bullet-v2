import ChangeRequestService from 'src/modules/changeRequest/changeRequestService';
import Errors from 'src/modules/shared/error/errors';
import { getHistory } from 'src/modules/store';

const prefix = 'CHANGEREQUEST_VIEW';

const changeRequestViewActions = {
  FIND_STARTED: `${prefix}_FIND_STARTED`,
  FIND_SUCCESS: `${prefix}_FIND_SUCCESS`,
  FIND_ERROR: `${prefix}_FIND_ERROR`,

  doFind: (id) => async (dispatch) => {
    try {
      dispatch({
        type: changeRequestViewActions.FIND_STARTED,
      });

      const record = await ChangeRequestService.find(id);

      dispatch({
        type: changeRequestViewActions.FIND_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: changeRequestViewActions.FIND_ERROR,
      });

      getHistory().push('/change-request');
    }
  },
};

export default changeRequestViewActions;
