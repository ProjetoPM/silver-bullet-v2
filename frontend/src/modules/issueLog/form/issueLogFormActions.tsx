import IssueLogService from 'src/modules/issueLog/issueLogService';
import Errors from 'src/modules/shared/error/errors';
import Message from 'src/view/shared/message';
import { getHistory } from 'src/modules/store';
import { i18n } from 'src/i18n';

const prefix = 'ISSUELOG_FORM';

const issueLogFormActions = {
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
        type: issueLogFormActions.INIT_STARTED,
      });

      let record = {};

      const isEdit = Boolean(id);

      if (isEdit) {
        record = await IssueLogService.find(id);
      }

      dispatch({
        type: issueLogFormActions.INIT_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: issueLogFormActions.INIT_ERROR,
      });

      getHistory().push('/issue-log');
    }
  },

  doCreate: (values) => async (dispatch) => {
    try {
      dispatch({
        type: issueLogFormActions.CREATE_STARTED,
      });

      await IssueLogService.create(values);

      dispatch({
        type: issueLogFormActions.CREATE_SUCCESS,
      });

      Message.success(
        i18n('entities.issueLog.create.success'),
      );

      getHistory().push('/issue-log');
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: issueLogFormActions.CREATE_ERROR,
      });
    }
  },

  doUpdate: (id, values) => async (dispatch, getState) => {
    try {
      dispatch({
        type: issueLogFormActions.UPDATE_STARTED,
      });

      await IssueLogService.update(id, values);

      dispatch({
        type: issueLogFormActions.UPDATE_SUCCESS,
      });

      Message.success(
        i18n('entities.issueLog.update.success'),
      );

      getHistory().push('/issue-log');
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: issueLogFormActions.UPDATE_ERROR,
      });
    }
  },
};

export default issueLogFormActions;
