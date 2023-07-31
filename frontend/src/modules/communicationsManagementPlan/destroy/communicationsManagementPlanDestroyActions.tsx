import listActions from 'src/modules/communicationsManagementPlan/list/communicationsManagementPlanListActions';
import CommunicationsManagementPlanService from 'src/modules/communicationsManagementPlan/communicationsManagementPlanService';
import Errors from 'src/modules/shared/error/errors';
import { i18n } from 'src/i18n';
import { getHistory } from 'src/modules/store';
import Message from 'src/view/shared/message';

const prefix = 'COMMUNICATIONSMANAGEMENTPLAN_DESTROY';

const communicationsManagementPlanDestroyActions = {
  DESTROY_STARTED: `${prefix}_DESTROY_STARTED`,
  DESTROY_SUCCESS: `${prefix}_DESTROY_SUCCESS`,
  DESTROY_ERROR: `${prefix}_DESTROY_ERROR`,

  DESTROY_ALL_STARTED: `${prefix}_DESTROY_ALL_STARTED`,
  DESTROY_ALL_SUCCESS: `${prefix}_DESTROY_ALL_SUCCESS`,
  DESTROY_ALL_ERROR: `${prefix}_DESTROY_ALL_ERROR`,

  doDestroy: (id) => async (dispatch) => {
    try {
      dispatch({
        type: communicationsManagementPlanDestroyActions.DESTROY_STARTED,
      });

      await CommunicationsManagementPlanService.destroyAll([id]);

      dispatch({
        type: communicationsManagementPlanDestroyActions.DESTROY_SUCCESS,
      });

      Message.success(
        i18n('entities.communicationsManagementPlan.destroy.success'),
      );

      dispatch(listActions.doFetchCurrentFilter());

      getHistory().push('/communications-management-plan');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: communicationsManagementPlanDestroyActions.DESTROY_ERROR,
      });
    }
  },

  doDestroyAll: (ids) => async (dispatch) => {
    try {
      dispatch({
        type: communicationsManagementPlanDestroyActions.DESTROY_ALL_STARTED,
      });

      await CommunicationsManagementPlanService.destroyAll(ids);

      dispatch({
        type: communicationsManagementPlanDestroyActions.DESTROY_ALL_SUCCESS,
      });

      if (listActions) {
        dispatch(listActions.doClearAllSelected());
        dispatch(listActions.doFetchCurrentFilter());
      }

      Message.success(
        i18n('entities.communicationsManagementPlan.destroyAll.success'),
      );

      getHistory().push('/communications-management-plan');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: communicationsManagementPlanDestroyActions.DESTROY_ALL_ERROR,
      });
    }
  },
};

export default communicationsManagementPlanDestroyActions;
