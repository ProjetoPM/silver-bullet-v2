import ResourceRequirementsService from 'src/modules/resourceRequirements/resourceRequirementsService';
import Errors from 'src/modules/shared/error/errors';
import { getHistory } from 'src/modules/store';

const prefix = 'RESOURCEREQUIREMENTS_VIEW';

const resourceRequirementsViewActions = {
  FIND_STARTED: `${prefix}_FIND_STARTED`,
  FIND_SUCCESS: `${prefix}_FIND_SUCCESS`,
  FIND_ERROR: `${prefix}_FIND_ERROR`,

  doFind: (id) => async (dispatch) => {
    try {
      dispatch({
        type: resourceRequirementsViewActions.FIND_STARTED,
      });

      const record = await ResourceRequirementsService.find(id);

      dispatch({
        type: resourceRequirementsViewActions.FIND_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: resourceRequirementsViewActions.FIND_ERROR,
      });

      getHistory().push('/resource-requirements');
    }
  },
};

export default resourceRequirementsViewActions;
