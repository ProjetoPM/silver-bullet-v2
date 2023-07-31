import ProjectCharterService from 'src/modules/projectCharter/projectCharterService';
import Errors from 'src/modules/shared/error/errors';
import Message from 'src/view/shared/message';
import { getHistory } from 'src/modules/store';
import { i18n } from 'src/i18n';

const prefix = 'PROJECTCHARTER_FORM';

const projectCharterFormActions = {
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
        type: projectCharterFormActions.INIT_STARTED,
      });

      let record = {};

      const isEdit = Boolean(id);

      if (isEdit) {
        record = await ProjectCharterService.find(id);
      }

      dispatch({
        type: projectCharterFormActions.INIT_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: projectCharterFormActions.INIT_ERROR,
      });

      getHistory().push('/project-charter');
    }
  },

  doCreate: (values) => async (dispatch) => {
    try {
      dispatch({
        type: projectCharterFormActions.CREATE_STARTED,
      });

      await ProjectCharterService.create(values);

      dispatch({
        type: projectCharterFormActions.CREATE_SUCCESS,
      });

      Message.success(
        i18n('entities.projectCharter.create.success'),
      );

      getHistory().push('/project-charter');
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: projectCharterFormActions.CREATE_ERROR,
      });
    }
  },

  doUpdate: (id, values) => async (dispatch, getState) => {
    try {
      dispatch({
        type: projectCharterFormActions.UPDATE_STARTED,
      });

      await ProjectCharterService.update(id, values);

      dispatch({
        type: projectCharterFormActions.UPDATE_SUCCESS,
      });

      Message.success(
        i18n('entities.projectCharter.update.success'),
      );

      getHistory().push('/project-charter');
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: projectCharterFormActions.UPDATE_ERROR,
      });
    }
  },
};

export default projectCharterFormActions;
