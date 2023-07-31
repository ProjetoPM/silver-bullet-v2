import ActivityDurationEstimatesService from 'src/modules/activityDurationEstimates/activityDurationEstimatesService';
import Errors from 'src/modules/shared/error/errors';
import { getHistory } from 'src/modules/store';

const prefix = 'ACTIVITYDURATIONESTIMATES_VIEW';

const activityDurationEstimatesViewActions = {
  FIND_STARTED: `${prefix}_FIND_STARTED`,
  FIND_SUCCESS: `${prefix}_FIND_SUCCESS`,
  FIND_ERROR: `${prefix}_FIND_ERROR`,

  doFind: (id) => async (dispatch) => {
    try {
      dispatch({
        type: activityDurationEstimatesViewActions.FIND_STARTED,
      });

      const record = await ActivityDurationEstimatesService.find(id);

      dispatch({
        type: activityDurationEstimatesViewActions.FIND_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: activityDurationEstimatesViewActions.FIND_ERROR,
      });

      getHistory().push('/activity-duration-estimates');
    }
  },
};

export default activityDurationEstimatesViewActions;
