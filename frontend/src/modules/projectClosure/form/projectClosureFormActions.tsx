import ProjectClosureService from 'src/modules/projectClosure/projectClosureService';
import Errors from 'src/modules/shared/error/errors';
import Message from 'src/view/shared/message';
import { getHistory } from 'src/modules/store';
import { i18n } from 'src/i18n';

const prefix = 'PROJECTCLOSURE_FORM';

const projectClosureFormActions = {
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
        type: projectClosureFormActions.INIT_STARTED,
      });

      let record = {};

      const isEdit = Boolean(id);

      if (isEdit) {
        record = await ProjectClosureService.find(id);
      }

      dispatch({
        type: projectClosureFormActions.INIT_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: projectClosureFormActions.INIT_ERROR,
      });

      getHistory().push('/project-closure');
    }
  },

  doCreate: (values) => async (dispatch) => {
    try {
      dispatch({
        type: projectClosureFormActions.CREATE_STARTED,
      });

      await ProjectClosureService.create(values);

      dispatch({
        type: projectClosureFormActions.CREATE_SUCCESS,
      });

      Message.success(
        i18n('entities.projectClosure.create.success'),
      );

      getHistory().push('/project-closure');
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: projectClosureFormActions.CREATE_ERROR,
      });
    }
  },

  doUpdate: (id, values) => async (dispatch, getState) => {
    try {
      dispatch({
        type: projectClosureFormActions.UPDATE_STARTED,
      });

      await ProjectClosureService.update(id, values);

      dispatch({
        type: projectClosureFormActions.UPDATE_SUCCESS,
      });

      Message.success(
        i18n('entities.projectClosure.update.success'),
      );

      getHistory().push('/project-closure');
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: projectClosureFormActions.UPDATE_ERROR,
      });
    }
  },
};

export default projectClosureFormActions;
