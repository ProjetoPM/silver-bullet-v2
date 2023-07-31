import CostEstimatesService from 'src/modules/costEstimates/costEstimatesService';
import Errors from 'src/modules/shared/error/errors';
import { getHistory } from 'src/modules/store';

const prefix = 'COSTESTIMATES_VIEW';

const costEstimatesViewActions = {
  FIND_STARTED: `${prefix}_FIND_STARTED`,
  FIND_SUCCESS: `${prefix}_FIND_SUCCESS`,
  FIND_ERROR: `${prefix}_FIND_ERROR`,

  doFind: (id) => async (dispatch) => {
    try {
      dispatch({
        type: costEstimatesViewActions.FIND_STARTED,
      });

      const record = await CostEstimatesService.find(id);

      dispatch({
        type: costEstimatesViewActions.FIND_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: costEstimatesViewActions.FIND_ERROR,
      });

      getHistory().push('/cost-estimates');
    }
  },
};

export default costEstimatesViewActions;
