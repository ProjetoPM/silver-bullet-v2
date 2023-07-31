import CostManagementPlanService from 'src/modules/costManagementPlan/costManagementPlanService';
import Errors from 'src/modules/shared/error/errors';
import { getHistory } from 'src/modules/store';

const prefix = 'COSTMANAGEMENTPLAN_VIEW';

const costManagementPlanViewActions = {
  FIND_STARTED: `${prefix}_FIND_STARTED`,
  FIND_SUCCESS: `${prefix}_FIND_SUCCESS`,
  FIND_ERROR: `${prefix}_FIND_ERROR`,

  doFind: (id) => async (dispatch) => {
    try {
      dispatch({
        type: costManagementPlanViewActions.FIND_STARTED,
      });

      const record = await CostManagementPlanService.find(id);

      dispatch({
        type: costManagementPlanViewActions.FIND_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: costManagementPlanViewActions.FIND_ERROR,
      });

      getHistory().push('/cost-management-plan');
    }
  },
};

export default costManagementPlanViewActions;
