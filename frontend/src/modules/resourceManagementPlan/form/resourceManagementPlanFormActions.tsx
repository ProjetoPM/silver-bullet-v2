import ResourceManagementPlanService from 'src/modules/resourceManagementPlan/resourceManagementPlanService';
import Errors from 'src/modules/shared/error/errors';
import Message from 'src/view/shared/message';
import { getHistory } from 'src/modules/store';
import { i18n } from 'src/i18n';

const prefix = 'RESOURCEMANAGEMENTPLAN_FORM';

const resourceManagementPlanFormActions = {
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
        type: resourceManagementPlanFormActions.INIT_STARTED,
      });

      let record = {};

      const isEdit = Boolean(id);

      if (isEdit) {
        record = await ResourceManagementPlanService.find(id);
      }

      dispatch({
        type: resourceManagementPlanFormActions.INIT_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: resourceManagementPlanFormActions.INIT_ERROR,
      });

      getHistory().push('/resource-management-plan');
    }
  },

  doCreate: (values) => async (dispatch) => {
    try {
      dispatch({
        type: resourceManagementPlanFormActions.CREATE_STARTED,
      });

      await ResourceManagementPlanService.create(values);

      dispatch({
        type: resourceManagementPlanFormActions.CREATE_SUCCESS,
      });

      Message.success(
        i18n('entities.resourceManagementPlan.create.success'),
      );

      getHistory().push('/resource-management-plan');
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: resourceManagementPlanFormActions.CREATE_ERROR,
      });
    }
  },

  doUpdate: (id, values) => async (dispatch, getState) => {
    try {
      dispatch({
        type: resourceManagementPlanFormActions.UPDATE_STARTED,
      });

      await ResourceManagementPlanService.update(id, values);

      dispatch({
        type: resourceManagementPlanFormActions.UPDATE_SUCCESS,
      });

      Message.success(
        i18n('entities.resourceManagementPlan.update.success'),
      );

      getHistory().push('/resource-management-plan');
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: resourceManagementPlanFormActions.UPDATE_ERROR,
      });
    }
  },
};

export default resourceManagementPlanFormActions;
