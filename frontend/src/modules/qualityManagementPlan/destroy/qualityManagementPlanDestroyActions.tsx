import listActions from 'src/modules/qualityManagementPlan/list/qualityManagementPlanListActions';
import QualityManagementPlanService from 'src/modules/qualityManagementPlan/qualityManagementPlanService';
import Errors from 'src/modules/shared/error/errors';
import { i18n } from 'src/i18n';
import { getHistory } from 'src/modules/store';
import Message from 'src/view/shared/message';

const prefix = 'QUALITYMANAGEMENTPLAN_DESTROY';

const qualityManagementPlanDestroyActions = {
  DESTROY_STARTED: `${prefix}_DESTROY_STARTED`,
  DESTROY_SUCCESS: `${prefix}_DESTROY_SUCCESS`,
  DESTROY_ERROR: `${prefix}_DESTROY_ERROR`,

  DESTROY_ALL_STARTED: `${prefix}_DESTROY_ALL_STARTED`,
  DESTROY_ALL_SUCCESS: `${prefix}_DESTROY_ALL_SUCCESS`,
  DESTROY_ALL_ERROR: `${prefix}_DESTROY_ALL_ERROR`,

  doDestroy: (id) => async (dispatch) => {
    try {
      dispatch({
        type: qualityManagementPlanDestroyActions.DESTROY_STARTED,
      });

      await QualityManagementPlanService.destroyAll([id]);

      dispatch({
        type: qualityManagementPlanDestroyActions.DESTROY_SUCCESS,
      });

      Message.success(
        i18n('entities.qualityManagementPlan.destroy.success'),
      );

      dispatch(listActions.doFetchCurrentFilter());

      getHistory().push('/quality-management-plan');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: qualityManagementPlanDestroyActions.DESTROY_ERROR,
      });
    }
  },

  doDestroyAll: (ids) => async (dispatch) => {
    try {
      dispatch({
        type: qualityManagementPlanDestroyActions.DESTROY_ALL_STARTED,
      });

      await QualityManagementPlanService.destroyAll(ids);

      dispatch({
        type: qualityManagementPlanDestroyActions.DESTROY_ALL_SUCCESS,
      });

      if (listActions) {
        dispatch(listActions.doClearAllSelected());
        dispatch(listActions.doFetchCurrentFilter());
      }

      Message.success(
        i18n('entities.qualityManagementPlan.destroyAll.success'),
      );

      getHistory().push('/quality-management-plan');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: qualityManagementPlanDestroyActions.DESTROY_ALL_ERROR,
      });
    }
  },
};

export default qualityManagementPlanDestroyActions;
