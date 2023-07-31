import RiskManagementPlanService from 'src/modules/riskManagementPlan/riskManagementPlanService';
import Errors from 'src/modules/shared/error/errors';
import { getHistory } from 'src/modules/store';

const prefix = 'RISKMANAGEMENTPLAN_VIEW';

const riskManagementPlanViewActions = {
  FIND_STARTED: `${prefix}_FIND_STARTED`,
  FIND_SUCCESS: `${prefix}_FIND_SUCCESS`,
  FIND_ERROR: `${prefix}_FIND_ERROR`,

  doFind: (id) => async (dispatch) => {
    try {
      dispatch({
        type: riskManagementPlanViewActions.FIND_STARTED,
      });

      const record = await RiskManagementPlanService.find(id);

      dispatch({
        type: riskManagementPlanViewActions.FIND_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: riskManagementPlanViewActions.FIND_ERROR,
      });

      getHistory().push('/risk-management-plan');
    }
  },
};

export default riskManagementPlanViewActions;
