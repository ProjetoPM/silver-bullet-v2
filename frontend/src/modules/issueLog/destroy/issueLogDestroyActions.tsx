import listActions from 'src/modules/issueLog/list/issueLogListActions';
import IssueLogService from 'src/modules/issueLog/issueLogService';
import Errors from 'src/modules/shared/error/errors';
import { i18n } from 'src/i18n';
import { getHistory } from 'src/modules/store';
import Message from 'src/view/shared/message';

const prefix = 'ISSUELOG_DESTROY';

const issueLogDestroyActions = {
  DESTROY_STARTED: `${prefix}_DESTROY_STARTED`,
  DESTROY_SUCCESS: `${prefix}_DESTROY_SUCCESS`,
  DESTROY_ERROR: `${prefix}_DESTROY_ERROR`,

  DESTROY_ALL_STARTED: `${prefix}_DESTROY_ALL_STARTED`,
  DESTROY_ALL_SUCCESS: `${prefix}_DESTROY_ALL_SUCCESS`,
  DESTROY_ALL_ERROR: `${prefix}_DESTROY_ALL_ERROR`,

  doDestroy: (id) => async (dispatch) => {
    try {
      dispatch({
        type: issueLogDestroyActions.DESTROY_STARTED,
      });

      await IssueLogService.destroyAll([id]);

      dispatch({
        type: issueLogDestroyActions.DESTROY_SUCCESS,
      });

      Message.success(
        i18n('entities.issueLog.destroy.success'),
      );

      dispatch(listActions.doFetchCurrentFilter());

      getHistory().push('/issue-log');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: issueLogDestroyActions.DESTROY_ERROR,
      });
    }
  },

  doDestroyAll: (ids) => async (dispatch) => {
    try {
      dispatch({
        type: issueLogDestroyActions.DESTROY_ALL_STARTED,
      });

      await IssueLogService.destroyAll(ids);

      dispatch({
        type: issueLogDestroyActions.DESTROY_ALL_SUCCESS,
      });

      if (listActions) {
        dispatch(listActions.doClearAllSelected());
        dispatch(listActions.doFetchCurrentFilter());
      }

      Message.success(
        i18n('entities.issueLog.destroyAll.success'),
      );

      getHistory().push('/issue-log');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: issueLogDestroyActions.DESTROY_ALL_ERROR,
      });
    }
  },
};

export default issueLogDestroyActions;
