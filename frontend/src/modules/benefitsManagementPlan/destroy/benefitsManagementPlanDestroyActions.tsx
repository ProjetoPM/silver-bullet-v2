import listActions from 'src/modules/benefitsManagementPlan/list/benefitsManagementPlanListActions';
import BenefitsManagementPlanService from 'src/modules/benefitsManagementPlan/benefitsManagementPlanService';
import Errors from 'src/modules/shared/error/errors';
import { i18n } from 'src/i18n';
import { getHistory } from 'src/modules/store';
import Message from 'src/view/shared/message';

const prefix = 'BENEFITSMANAGEMENTPLAN_DESTROY';

const benefitsManagementPlanDestroyActions = {
  DESTROY_STARTED: `${prefix}_DESTROY_STARTED`,
  DESTROY_SUCCESS: `${prefix}_DESTROY_SUCCESS`,
  DESTROY_ERROR: `${prefix}_DESTROY_ERROR`,

  DESTROY_ALL_STARTED: `${prefix}_DESTROY_ALL_STARTED`,
  DESTROY_ALL_SUCCESS: `${prefix}_DESTROY_ALL_SUCCESS`,
  DESTROY_ALL_ERROR: `${prefix}_DESTROY_ALL_ERROR`,

  doDestroy: (id) => async (dispatch) => {
    try {
      dispatch({
        type: benefitsManagementPlanDestroyActions.DESTROY_STARTED,
      });

      await BenefitsManagementPlanService.destroyAll([id]);

      dispatch({
        type: benefitsManagementPlanDestroyActions.DESTROY_SUCCESS,
      });

      Message.success(
        i18n('entities.benefitsManagementPlan.destroy.success'),
      );

      dispatch(listActions.doFetchCurrentFilter());

      getHistory().push('/benefits-management-plan');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: benefitsManagementPlanDestroyActions.DESTROY_ERROR,
      });
    }
  },

  doDestroyAll: (ids) => async (dispatch) => {
    try {
      dispatch({
        type: benefitsManagementPlanDestroyActions.DESTROY_ALL_STARTED,
      });

      await BenefitsManagementPlanService.destroyAll(ids);

      dispatch({
        type: benefitsManagementPlanDestroyActions.DESTROY_ALL_SUCCESS,
      });

      if (listActions) {
        dispatch(listActions.doClearAllSelected());
        dispatch(listActions.doFetchCurrentFilter());
      }

      Message.success(
        i18n('entities.benefitsManagementPlan.destroyAll.success'),
      );

      getHistory().push('/benefits-management-plan');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: benefitsManagementPlanDestroyActions.DESTROY_ALL_ERROR,
      });
    }
  },
};

export default benefitsManagementPlanDestroyActions;
