import ResourceService from 'src/modules/resource/resourceService';
import Errors from 'src/modules/shared/error/errors';
import { getHistory } from 'src/modules/store';

const prefix = 'RESOURCE_VIEW';

const resourceViewActions = {
  FIND_STARTED: `${prefix}_FIND_STARTED`,
  FIND_SUCCESS: `${prefix}_FIND_SUCCESS`,
  FIND_ERROR: `${prefix}_FIND_ERROR`,

  doFind: (id) => async (dispatch) => {
    try {
      dispatch({
        type: resourceViewActions.FIND_STARTED,
      });

      const record = await ResourceService.find(id);

      dispatch({
        type: resourceViewActions.FIND_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: resourceViewActions.FIND_ERROR,
      });

      getHistory().push('/resource');
    }
  },
};

export default resourceViewActions;
