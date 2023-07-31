import listActions from 'src/modules/scheduleManagementPlan/list/scheduleManagementPlanListActions';
import ScheduleManagementPlanService from 'src/modules/scheduleManagementPlan/scheduleManagementPlanService';
import Errors from 'src/modules/shared/error/errors';
import { i18n } from 'src/i18n';
import { getHistory } from 'src/modules/store';
import Message from 'src/view/shared/message';

const prefix = 'SCHEDULEMANAGEMENTPLAN_DESTROY';

const scheduleManagementPlanDestroyActions = {
  DESTROY_STARTED: `${prefix}_DESTROY_STARTED`,
  DESTROY_SUCCESS: `${prefix}_DESTROY_SUCCESS`,
  DESTROY_ERROR: `${prefix}_DESTROY_ERROR`,

  DESTROY_ALL_STARTED: `${prefix}_DESTROY_ALL_STARTED`,
  DESTROY_ALL_SUCCESS: `${prefix}_DESTROY_ALL_SUCCESS`,
  DESTROY_ALL_ERROR: `${prefix}_DESTROY_ALL_ERROR`,

  doDestroy: (id) => async (dispatch) => {
    try {
      dispatch({
        type: scheduleManagementPlanDestroyActions.DESTROY_STARTED,
      });

      await ScheduleManagementPlanService.destroyAll([id]);

      dispatch({
        type: scheduleManagementPlanDestroyActions.DESTROY_SUCCESS,
      });

      Message.success(
        i18n('entities.scheduleManagementPlan.destroy.success'),
      );

      dispatch(listActions.doFetchCurrentFilter());

      getHistory().push('/schedule-management-plan');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: scheduleManagementPlanDestroyActions.DESTROY_ERROR,
      });
    }
  },

  doDestroyAll: (ids) => async (dispatch) => {
    try {
      dispatch({
        type: scheduleManagementPlanDestroyActions.DESTROY_ALL_STARTED,
      });

      await ScheduleManagementPlanService.destroyAll(ids);

      dispatch({
        type: scheduleManagementPlanDestroyActions.DESTROY_ALL_SUCCESS,
      });

      if (listActions) {
        dispatch(listActions.doClearAllSelected());
        dispatch(listActions.doFetchCurrentFilter());
      }

      Message.success(
        i18n('entities.scheduleManagementPlan.destroyAll.success'),
      );

      getHistory().push('/schedule-management-plan');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: scheduleManagementPlanDestroyActions.DESTROY_ALL_ERROR,
      });
    }
  },
};

export default scheduleManagementPlanDestroyActions;
