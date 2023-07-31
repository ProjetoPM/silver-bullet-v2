import listActions from 'src/modules/resourceManagementPlan/list/resourceManagementPlanListActions';
import ResourceManagementPlanService from 'src/modules/resourceManagementPlan/resourceManagementPlanService';
import Errors from 'src/modules/shared/error/errors';
import { i18n } from 'src/i18n';
import { getHistory } from 'src/modules/store';
import Message from 'src/view/shared/message';

const prefix = 'RESOURCEMANAGEMENTPLAN_DESTROY';

const resourceManagementPlanDestroyActions = {
  DESTROY_STARTED: `${prefix}_DESTROY_STARTED`,
  DESTROY_SUCCESS: `${prefix}_DESTROY_SUCCESS`,
  DESTROY_ERROR: `${prefix}_DESTROY_ERROR`,

  DESTROY_ALL_STARTED: `${prefix}_DESTROY_ALL_STARTED`,
  DESTROY_ALL_SUCCESS: `${prefix}_DESTROY_ALL_SUCCESS`,
  DESTROY_ALL_ERROR: `${prefix}_DESTROY_ALL_ERROR`,

  doDestroy: (id) => async (dispatch) => {
    try {
      dispatch({
        type: resourceManagementPlanDestroyActions.DESTROY_STARTED,
      });

      await ResourceManagementPlanService.destroyAll([id]);

      dispatch({
        type: resourceManagementPlanDestroyActions.DESTROY_SUCCESS,
      });

      Message.success(
        i18n('entities.resourceManagementPlan.destroy.success'),
      );

      dispatch(listActions.doFetchCurrentFilter());

      getHistory().push('/resource-management-plan');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: resourceManagementPlanDestroyActions.DESTROY_ERROR,
      });
    }
  },

  doDestroyAll: (ids) => async (dispatch) => {
    try {
      dispatch({
        type: resourceManagementPlanDestroyActions.DESTROY_ALL_STARTED,
      });

      await ResourceManagementPlanService.destroyAll(ids);

      dispatch({
        type: resourceManagementPlanDestroyActions.DESTROY_ALL_SUCCESS,
      });

      if (listActions) {
        dispatch(listActions.doClearAllSelected());
        dispatch(listActions.doFetchCurrentFilter());
      }

      Message.success(
        i18n('entities.resourceManagementPlan.destroyAll.success'),
      );

      getHistory().push('/resource-management-plan');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: resourceManagementPlanDestroyActions.DESTROY_ALL_ERROR,
      });
    }
  },
};

export default resourceManagementPlanDestroyActions;
