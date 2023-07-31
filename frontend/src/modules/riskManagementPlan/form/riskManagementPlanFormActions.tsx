import RiskManagementPlanService from 'src/modules/riskManagementPlan/riskManagementPlanService';
import Errors from 'src/modules/shared/error/errors';
import Message from 'src/view/shared/message';
import { getHistory } from 'src/modules/store';
import { i18n } from 'src/i18n';

const prefix = 'RISKMANAGEMENTPLAN_FORM';

const riskManagementPlanFormActions = {
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
        type: riskManagementPlanFormActions.INIT_STARTED,
      });

      let record = {};

      const isEdit = Boolean(id);

      if (isEdit) {
        record = await RiskManagementPlanService.find(id);
      }

      dispatch({
        type: riskManagementPlanFormActions.INIT_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: riskManagementPlanFormActions.INIT_ERROR,
      });

      getHistory().push('/risk-management-plan');
    }
  },

  doCreate: (values) => async (dispatch) => {
    try {
      dispatch({
        type: riskManagementPlanFormActions.CREATE_STARTED,
      });

      await RiskManagementPlanService.create(values);

      dispatch({
        type: riskManagementPlanFormActions.CREATE_SUCCESS,
      });

      Message.success(
        i18n('entities.riskManagementPlan.create.success'),
      );

      getHistory().push('/risk-management-plan');
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: riskManagementPlanFormActions.CREATE_ERROR,
      });
    }
  },

  doUpdate: (id, values) => async (dispatch, getState) => {
    try {
      dispatch({
        type: riskManagementPlanFormActions.UPDATE_STARTED,
      });

      await RiskManagementPlanService.update(id, values);

      dispatch({
        type: riskManagementPlanFormActions.UPDATE_SUCCESS,
      });

      Message.success(
        i18n('entities.riskManagementPlan.update.success'),
      );

      getHistory().push('/risk-management-plan');
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: riskManagementPlanFormActions.UPDATE_ERROR,
      });
    }
  },
};

export default riskManagementPlanFormActions;
