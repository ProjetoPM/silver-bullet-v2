import QualityManagementPlanService from 'src/modules/qualityManagementPlan/qualityManagementPlanService';
import Errors from 'src/modules/shared/error/errors';
import { getHistory } from 'src/modules/store';

const prefix = 'QUALITYMANAGEMENTPLAN_VIEW';

const qualityManagementPlanViewActions = {
  FIND_STARTED: `${prefix}_FIND_STARTED`,
  FIND_SUCCESS: `${prefix}_FIND_SUCCESS`,
  FIND_ERROR: `${prefix}_FIND_ERROR`,

  doFind: (id) => async (dispatch) => {
    try {
      dispatch({
        type: qualityManagementPlanViewActions.FIND_STARTED,
      });

      const record = await QualityManagementPlanService.find(id);

      dispatch({
        type: qualityManagementPlanViewActions.FIND_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: qualityManagementPlanViewActions.FIND_ERROR,
      });

      getHistory().push('/quality-management-plan');
    }
  },
};

export default qualityManagementPlanViewActions;
