import listActions from 'src/modules/projectManagementPlan/list/projectManagementPlanListActions';
import ProjectManagementPlanService from 'src/modules/projectManagementPlan/projectManagementPlanService';
import Errors from 'src/modules/shared/error/errors';
import { i18n } from 'src/i18n';
import { getHistory } from 'src/modules/store';
import Message from 'src/view/shared/message';

const prefix = 'PROJECTMANAGEMENTPLAN_DESTROY';

const projectManagementPlanDestroyActions = {
  DESTROY_STARTED: `${prefix}_DESTROY_STARTED`,
  DESTROY_SUCCESS: `${prefix}_DESTROY_SUCCESS`,
  DESTROY_ERROR: `${prefix}_DESTROY_ERROR`,

  DESTROY_ALL_STARTED: `${prefix}_DESTROY_ALL_STARTED`,
  DESTROY_ALL_SUCCESS: `${prefix}_DESTROY_ALL_SUCCESS`,
  DESTROY_ALL_ERROR: `${prefix}_DESTROY_ALL_ERROR`,

  doDestroy: (id) => async (dispatch) => {
    try {
      dispatch({
        type: projectManagementPlanDestroyActions.DESTROY_STARTED,
      });

      await ProjectManagementPlanService.destroyAll([id]);

      dispatch({
        type: projectManagementPlanDestroyActions.DESTROY_SUCCESS,
      });

      Message.success(
        i18n('entities.projectManagementPlan.destroy.success'),
      );

      dispatch(listActions.doFetchCurrentFilter());

      getHistory().push('/project-management-plan');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: projectManagementPlanDestroyActions.DESTROY_ERROR,
      });
    }
  },

  doDestroyAll: (ids) => async (dispatch) => {
    try {
      dispatch({
        type: projectManagementPlanDestroyActions.DESTROY_ALL_STARTED,
      });

      await ProjectManagementPlanService.destroyAll(ids);

      dispatch({
        type: projectManagementPlanDestroyActions.DESTROY_ALL_SUCCESS,
      });

      if (listActions) {
        dispatch(listActions.doClearAllSelected());
        dispatch(listActions.doFetchCurrentFilter());
      }

      Message.success(
        i18n('entities.projectManagementPlan.destroyAll.success'),
      );

      getHistory().push('/project-management-plan');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: projectManagementPlanDestroyActions.DESTROY_ALL_ERROR,
      });
    }
  },
};

export default projectManagementPlanDestroyActions;
