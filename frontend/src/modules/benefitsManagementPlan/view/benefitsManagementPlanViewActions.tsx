import BenefitsManagementPlanService from 'src/modules/benefitsManagementPlan/benefitsManagementPlanService';
import Errors from 'src/modules/shared/error/errors';
import { getHistory } from 'src/modules/store';

const prefix = 'BENEFITSMANAGEMENTPLAN_VIEW';

const benefitsManagementPlanViewActions = {
  FIND_STARTED: `${prefix}_FIND_STARTED`,
  FIND_SUCCESS: `${prefix}_FIND_SUCCESS`,
  FIND_ERROR: `${prefix}_FIND_ERROR`,

  doFind: (id) => async (dispatch) => {
    try {
      dispatch({
        type: benefitsManagementPlanViewActions.FIND_STARTED,
      });

      const record = await BenefitsManagementPlanService.find(id);

      dispatch({
        type: benefitsManagementPlanViewActions.FIND_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: benefitsManagementPlanViewActions.FIND_ERROR,
      });

      getHistory().push('/benefits-management-plan');
    }
  },
};

export default benefitsManagementPlanViewActions;
