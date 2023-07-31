import listActions from 'src/modules/scopeManagementPlan/list/scopeManagementPlanListActions';
import ScopeManagementPlanService from 'src/modules/scopeManagementPlan/scopeManagementPlanService';
import Errors from 'src/modules/shared/error/errors';
import { i18n } from 'src/i18n';
import { getHistory } from 'src/modules/store';
import Message from 'src/view/shared/message';

const prefix = 'SCOPEMANAGEMENTPLAN_DESTROY';

const scopeManagementPlanDestroyActions = {
  DESTROY_STARTED: `${prefix}_DESTROY_STARTED`,
  DESTROY_SUCCESS: `${prefix}_DESTROY_SUCCESS`,
  DESTROY_ERROR: `${prefix}_DESTROY_ERROR`,

  DESTROY_ALL_STARTED: `${prefix}_DESTROY_ALL_STARTED`,
  DESTROY_ALL_SUCCESS: `${prefix}_DESTROY_ALL_SUCCESS`,
  DESTROY_ALL_ERROR: `${prefix}_DESTROY_ALL_ERROR`,

  doDestroy: (id) => async (dispatch) => {
    try {
      dispatch({
        type: scopeManagementPlanDestroyActions.DESTROY_STARTED,
      });

      await ScopeManagementPlanService.destroyAll([id]);

      dispatch({
        type: scopeManagementPlanDestroyActions.DESTROY_SUCCESS,
      });

      Message.success(
        i18n('entities.scopeManagementPlan.destroy.success'),
      );

      dispatch(listActions.doFetchCurrentFilter());

      getHistory().push('/scope-management-plan');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: scopeManagementPlanDestroyActions.DESTROY_ERROR,
      });
    }
  },

  doDestroyAll: (ids) => async (dispatch) => {
    try {
      dispatch({
        type: scopeManagementPlanDestroyActions.DESTROY_ALL_STARTED,
      });

      await ScopeManagementPlanService.destroyAll(ids);

      dispatch({
        type: scopeManagementPlanDestroyActions.DESTROY_ALL_SUCCESS,
      });

      if (listActions) {
        dispatch(listActions.doClearAllSelected());
        dispatch(listActions.doFetchCurrentFilter());
      }

      Message.success(
        i18n('entities.scopeManagementPlan.destroyAll.success'),
      );

      getHistory().push('/scope-management-plan');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: scopeManagementPlanDestroyActions.DESTROY_ALL_ERROR,
      });
    }
  },
};

export default scopeManagementPlanDestroyActions;
