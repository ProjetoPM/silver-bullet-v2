import CommunicationsManagementPlanService from 'src/modules/communicationsManagementPlan/communicationsManagementPlanService';
import Errors from 'src/modules/shared/error/errors';
import { getHistory } from 'src/modules/store';

const prefix = 'COMMUNICATIONSMANAGEMENTPLAN_VIEW';

const communicationsManagementPlanViewActions = {
  FIND_STARTED: `${prefix}_FIND_STARTED`,
  FIND_SUCCESS: `${prefix}_FIND_SUCCESS`,
  FIND_ERROR: `${prefix}_FIND_ERROR`,

  doFind: (id) => async (dispatch) => {
    try {
      dispatch({
        type: communicationsManagementPlanViewActions.FIND_STARTED,
      });

      const record = await CommunicationsManagementPlanService.find(id);

      dispatch({
        type: communicationsManagementPlanViewActions.FIND_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: communicationsManagementPlanViewActions.FIND_ERROR,
      });

      getHistory().push('/communications-management-plan');
    }
  },
};

export default communicationsManagementPlanViewActions;
