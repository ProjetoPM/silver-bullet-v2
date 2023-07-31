import ScheduleManagementPlanService from 'src/modules/scheduleManagementPlan/scheduleManagementPlanService';
import Errors from 'src/modules/shared/error/errors';
import { getHistory } from 'src/modules/store';

const prefix = 'SCHEDULEMANAGEMENTPLAN_VIEW';

const scheduleManagementPlanViewActions = {
  FIND_STARTED: `${prefix}_FIND_STARTED`,
  FIND_SUCCESS: `${prefix}_FIND_SUCCESS`,
  FIND_ERROR: `${prefix}_FIND_ERROR`,

  doFind: (id) => async (dispatch) => {
    try {
      dispatch({
        type: scheduleManagementPlanViewActions.FIND_STARTED,
      });

      const record = await ScheduleManagementPlanService.find(id);

      dispatch({
        type: scheduleManagementPlanViewActions.FIND_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: scheduleManagementPlanViewActions.FIND_ERROR,
      });

      getHistory().push('/schedule-management-plan');
    }
  },
};

export default scheduleManagementPlanViewActions;
