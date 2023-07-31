import BenefitsManagementPlanService from 'src/modules/benefitsManagementPlan/benefitsManagementPlanService';
import Errors from 'src/modules/shared/error/errors';
import Message from 'src/view/shared/message';
import { getHistory } from 'src/modules/store';
import { i18n } from 'src/i18n';

const prefix = 'BENEFITSMANAGEMENTPLAN_FORM';

const benefitsManagementPlanFormActions = {
  INIT_STARTED: `${prefix}_INIT_STARTED`,
  INIT_SUCCESS: `${prefix}_INIT_SUCCESS`,
  INIT_ERROR: `${prefix}_INIT_ERROR`,

  CREATE_STARTED: `${prefix}_CREATE_STARTED`,
  CREATE_SUCCESS: `${prefix}_CREATE_SUCCESS`,
  CREATE_ERROR: `${prefix}_CREATE_ERROR`,

  UPDATE_STARTED: `${prefix}_UPDATE_STARTED`,
  UPDATE_SUCCESS: `${prefix}_UPDATE_SUCCESS`,
  UPDATE_ERROR: `${prefix}_UPDATE_ERROR`,

  doInit: (id) => async (dispatch) => {
    try {
      dispatch({
        type: benefitsManagementPlanFormActions.INIT_STARTED,
      });

      let record = {};

      const isEdit = Boolean(id);

      if (isEdit) {
        record = await BenefitsManagementPlanService.find(id);
      }

      dispatch({
        type: benefitsManagementPlanFormActions.INIT_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: benefitsManagementPlanFormActions.INIT_ERROR,
      });

      getHistory().push('/benefits-management-plan');
    }
  },

  doCreate: (values) => async (dispatch) => {
    try {
      dispatch({
        type: benefitsManagementPlanFormActions.CREATE_STARTED,
      });

      await BenefitsManagementPlanService.create(values);

      dispatch({
        type: benefitsManagementPlanFormActions.CREATE_SUCCESS,
      });

      Message.success(
        i18n('entities.benefitsManagementPlan.create.success'),
      );

      getHistory().push('/benefits-management-plan');
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: benefitsManagementPlanFormActions.CREATE_ERROR,
      });
    }
  },

  doUpdate: (id, values) => async (dispatch, getState) => {
    try {
      dispatch({
        type: benefitsManagementPlanFormActions.UPDATE_STARTED,
      });

      await BenefitsManagementPlanService.update(id, values);

      dispatch({
        type: benefitsManagementPlanFormActions.UPDATE_SUCCESS,
      });

      Message.success(
        i18n('entities.benefitsManagementPlan.update.success'),
      );

      getHistory().push('/benefits-management-plan');
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: benefitsManagementPlanFormActions.UPDATE_ERROR,
      });
    }
  },
};

export default benefitsManagementPlanFormActions;
