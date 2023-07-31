import ProcurementManagementPlanService from 'src/modules/procurementManagementPlan/procurementManagementPlanService';
import Errors from 'src/modules/shared/error/errors';
import { getHistory } from 'src/modules/store';

const prefix = 'PROCUREMENTMANAGEMENTPLAN_VIEW';

const procurementManagementPlanViewActions = {
  FIND_STARTED: `${prefix}_FIND_STARTED`,
  FIND_SUCCESS: `${prefix}_FIND_SUCCESS`,
  FIND_ERROR: `${prefix}_FIND_ERROR`,

  doFind: (id) => async (dispatch) => {
    try {
      dispatch({
        type: procurementManagementPlanViewActions.FIND_STARTED,
      });

      const record = await ProcurementManagementPlanService.find(id);

      dispatch({
        type: procurementManagementPlanViewActions.FIND_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: procurementManagementPlanViewActions.FIND_ERROR,
      });

      getHistory().push('/procurement-management-plan');
    }
  },
};

export default procurementManagementPlanViewActions;
