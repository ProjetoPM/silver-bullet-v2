import ProjectManagementPlanService from 'src/modules/projectManagementPlan/projectManagementPlanService';
import Errors from 'src/modules/shared/error/errors';
import Message from 'src/view/shared/message';
import { getHistory } from 'src/modules/store';
import { i18n } from 'src/i18n';

const prefix = 'PROJECTMANAGEMENTPLAN_FORM';

const projectManagementPlanFormActions = {
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
        type: projectManagementPlanFormActions.INIT_STARTED,
      });

      let record = {};

      const isEdit = Boolean(id);

      if (isEdit) {
        record = await ProjectManagementPlanService.find(id);
      }

      dispatch({
        type: projectManagementPlanFormActions.INIT_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: projectManagementPlanFormActions.INIT_ERROR,
      });

      getHistory().push('/project-management-plan');
    }
  },

  doCreate: (values) => async (dispatch) => {
    try {
      dispatch({
        type: projectManagementPlanFormActions.CREATE_STARTED,
      });

      await ProjectManagementPlanService.create(values);

      dispatch({
        type: projectManagementPlanFormActions.CREATE_SUCCESS,
      });

      Message.success(
        i18n('entities.projectManagementPlan.create.success'),
      );

      getHistory().push('/project-management-plan');
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: projectManagementPlanFormActions.CREATE_ERROR,
      });
    }
  },

  doUpdate: (id, values) => async (dispatch, getState) => {
    try {
      dispatch({
        type: projectManagementPlanFormActions.UPDATE_STARTED,
      });

      await ProjectManagementPlanService.update(id, values);

      dispatch({
        type: projectManagementPlanFormActions.UPDATE_SUCCESS,
      });

      Message.success(
        i18n('entities.projectManagementPlan.update.success'),
      );

      getHistory().push('/project-management-plan');
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: projectManagementPlanFormActions.UPDATE_ERROR,
      });
    }
  },
};

export default projectManagementPlanFormActions;
