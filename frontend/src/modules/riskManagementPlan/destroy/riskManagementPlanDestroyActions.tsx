import listActions from 'src/modules/riskManagementPlan/list/riskManagementPlanListActions';
import RiskManagementPlanService from 'src/modules/riskManagementPlan/riskManagementPlanService';
import Errors from 'src/modules/shared/error/errors';
import { i18n } from 'src/i18n';
import { getHistory } from 'src/modules/store';
import Message from 'src/view/shared/message';

const prefix = 'RISKMANAGEMENTPLAN_DESTROY';

const riskManagementPlanDestroyActions = {
  DESTROY_STARTED: `${prefix}_DESTROY_STARTED`,
  DESTROY_SUCCESS: `${prefix}_DESTROY_SUCCESS`,
  DESTROY_ERROR: `${prefix}_DESTROY_ERROR`,

  DESTROY_ALL_STARTED: `${prefix}_DESTROY_ALL_STARTED`,
  DESTROY_ALL_SUCCESS: `${prefix}_DESTROY_ALL_SUCCESS`,
  DESTROY_ALL_ERROR: `${prefix}_DESTROY_ALL_ERROR`,

  doDestroy: (id) => async (dispatch) => {
    try {
      dispatch({
        type: riskManagementPlanDestroyActions.DESTROY_STARTED,
      });

      await RiskManagementPlanService.destroyAll([id]);

      dispatch({
        type: riskManagementPlanDestroyActions.DESTROY_SUCCESS,
      });

      Message.success(
        i18n('entities.riskManagementPlan.destroy.success'),
      );

      dispatch(listActions.doFetchCurrentFilter());

      getHistory().push('/risk-management-plan');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: riskManagementPlanDestroyActions.DESTROY_ERROR,
      });
    }
  },

  doDestroyAll: (ids) => async (dispatch) => {
    try {
      dispatch({
        type: riskManagementPlanDestroyActions.DESTROY_ALL_STARTED,
      });

      await RiskManagementPlanService.destroyAll(ids);

      dispatch({
        type: riskManagementPlanDestroyActions.DESTROY_ALL_SUCCESS,
      });

      if (listActions) {
        dispatch(listActions.doClearAllSelected());
        dispatch(listActions.doFetchCurrentFilter());
      }

      Message.success(
        i18n('entities.riskManagementPlan.destroyAll.success'),
      );

      getHistory().push('/risk-management-plan');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: riskManagementPlanDestroyActions.DESTROY_ALL_ERROR,
      });
    }
  },
};

export default riskManagementPlanDestroyActions;
