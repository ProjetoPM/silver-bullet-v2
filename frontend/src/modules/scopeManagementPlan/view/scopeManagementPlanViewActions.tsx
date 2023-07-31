import ScopeManagementPlanService from 'src/modules/scopeManagementPlan/scopeManagementPlanService';
import Errors from 'src/modules/shared/error/errors';
import { getHistory } from 'src/modules/store';

const prefix = 'SCOPEMANAGEMENTPLAN_VIEW';

const scopeManagementPlanViewActions = {
  FIND_STARTED: `${prefix}_FIND_STARTED`,
  FIND_SUCCESS: `${prefix}_FIND_SUCCESS`,
  FIND_ERROR: `${prefix}_FIND_ERROR`,

  doFind: (id) => async (dispatch) => {
    try {
      dispatch({
        type: scopeManagementPlanViewActions.FIND_STARTED,
      });

      const record = await ScopeManagementPlanService.find(id);

      dispatch({
        type: scopeManagementPlanViewActions.FIND_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: scopeManagementPlanViewActions.FIND_ERROR,
      });

      getHistory().push('/scope-management-plan');
    }
  },
};

export default scopeManagementPlanViewActions;
