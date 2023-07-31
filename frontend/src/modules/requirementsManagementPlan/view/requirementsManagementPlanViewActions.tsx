import RequirementsManagementPlanService from 'src/modules/requirementsManagementPlan/requirementsManagementPlanService';
import Errors from 'src/modules/shared/error/errors';
import { getHistory } from 'src/modules/store';

const prefix = 'REQUIREMENTSMANAGEMENTPLAN_VIEW';

const requirementsManagementPlanViewActions = {
  FIND_STARTED: `${prefix}_FIND_STARTED`,
  FIND_SUCCESS: `${prefix}_FIND_SUCCESS`,
  FIND_ERROR: `${prefix}_FIND_ERROR`,

  doFind: (id) => async (dispatch) => {
    try {
      dispatch({
        type: requirementsManagementPlanViewActions.FIND_STARTED,
      });

      const record = await RequirementsManagementPlanService.find(id);

      dispatch({
        type: requirementsManagementPlanViewActions.FIND_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: requirementsManagementPlanViewActions.FIND_ERROR,
      });

      getHistory().push('/requirements-management-plan');
    }
  },
};

export default requirementsManagementPlanViewActions;
