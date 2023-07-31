import ProjectScopeStatementService from 'src/modules/projectScopeStatement/projectScopeStatementService';
import Errors from 'src/modules/shared/error/errors';
import Message from 'src/view/shared/message';
import { getHistory } from 'src/modules/store';
import { i18n } from 'src/i18n';

const prefix = 'PROJECTSCOPESTATEMENT_FORM';

const projectScopeStatementFormActions = {
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
        type: projectScopeStatementFormActions.INIT_STARTED,
      });

      let record = {};

      const isEdit = Boolean(id);

      if (isEdit) {
        record = await ProjectScopeStatementService.find(id);
      }

      dispatch({
        type: projectScopeStatementFormActions.INIT_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: projectScopeStatementFormActions.INIT_ERROR,
      });

      getHistory().push('/project-scope-statement');
    }
  },

  doCreate: (values) => async (dispatch) => {
    try {
      dispatch({
        type: projectScopeStatementFormActions.CREATE_STARTED,
      });

      await ProjectScopeStatementService.create(values);

      dispatch({
        type: projectScopeStatementFormActions.CREATE_SUCCESS,
      });

      Message.success(
        i18n('entities.projectScopeStatement.create.success'),
      );

      getHistory().push('/project-scope-statement');
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: projectScopeStatementFormActions.CREATE_ERROR,
      });
    }
  },

  doUpdate: (id, values) => async (dispatch, getState) => {
    try {
      dispatch({
        type: projectScopeStatementFormActions.UPDATE_STARTED,
      });

      await ProjectScopeStatementService.update(id, values);

      dispatch({
        type: projectScopeStatementFormActions.UPDATE_SUCCESS,
      });

      Message.success(
        i18n('entities.projectScopeStatement.update.success'),
      );

      getHistory().push('/project-scope-statement');
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: projectScopeStatementFormActions.UPDATE_ERROR,
      });
    }
  },
};

export default projectScopeStatementFormActions;
