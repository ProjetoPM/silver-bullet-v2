import ProcurementManagementPlanService from 'src/modules/procurementManagementPlan/procurementManagementPlanService';
import Errors from 'src/modules/shared/error/errors';
import Message from 'src/view/shared/message';
import { getHistory } from 'src/modules/store';
import { i18n } from 'src/i18n';

const prefix = 'PROCUREMENTMANAGEMENTPLAN_FORM';

const procurementManagementPlanFormActions = {
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
        type: procurementManagementPlanFormActions.INIT_STARTED,
      });

      let record = {};

      const isEdit = Boolean(id);

      if (isEdit) {
        record = await ProcurementManagementPlanService.find(id);
      }

      dispatch({
        type: procurementManagementPlanFormActions.INIT_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: procurementManagementPlanFormActions.INIT_ERROR,
      });

      getHistory().push('/procurement-management-plan');
    }
  },

  doCreate: (values) => async (dispatch) => {
    try {
      dispatch({
        type: procurementManagementPlanFormActions.CREATE_STARTED,
      });

      await ProcurementManagementPlanService.create(values);

      dispatch({
        type: procurementManagementPlanFormActions.CREATE_SUCCESS,
      });

      Message.success(
        i18n('entities.procurementManagementPlan.create.success'),
      );

      getHistory().push('/procurement-management-plan');
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: procurementManagementPlanFormActions.CREATE_ERROR,
      });
    }
  },

  doUpdate: (id, values) => async (dispatch, getState) => {
    try {
      dispatch({
        type: procurementManagementPlanFormActions.UPDATE_STARTED,
      });

      await ProcurementManagementPlanService.update(id, values);

      dispatch({
        type: procurementManagementPlanFormActions.UPDATE_SUCCESS,
      });

      Message.success(
        i18n('entities.procurementManagementPlan.update.success'),
      );

      getHistory().push('/procurement-management-plan');
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: procurementManagementPlanFormActions.UPDATE_ERROR,
      });
    }
  },
};

export default procurementManagementPlanFormActions;
