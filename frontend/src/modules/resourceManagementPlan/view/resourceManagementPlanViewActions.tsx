import ResourceManagementPlanService from 'src/modules/resourceManagementPlan/resourceManagementPlanService';
import Errors from 'src/modules/shared/error/errors';
import { getHistory } from 'src/modules/store';

const prefix = 'RESOURCEMANAGEMENTPLAN_VIEW';

const resourceManagementPlanViewActions = {
  FIND_STARTED: `${prefix}_FIND_STARTED`,
  FIND_SUCCESS: `${prefix}_FIND_SUCCESS`,
  FIND_ERROR: `${prefix}_FIND_ERROR`,

  doFind: (id) => async (dispatch) => {
    try {
      dispatch({
        type: resourceManagementPlanViewActions.FIND_STARTED,
      });

      const record = await ResourceManagementPlanService.find(id);

      dispatch({
        type: resourceManagementPlanViewActions.FIND_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: resourceManagementPlanViewActions.FIND_ERROR,
      });

      getHistory().push('/resource-management-plan');
    }
  },
};

export default resourceManagementPlanViewActions;
