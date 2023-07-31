import listActions from 'src/modules/assumptionLog/list/assumptionLogListActions';
import AssumptionLogService from 'src/modules/assumptionLog/assumptionLogService';
import Errors from 'src/modules/shared/error/errors';
import { i18n } from 'src/i18n';
import { getHistory } from 'src/modules/store';
import Message from 'src/view/shared/message';

const prefix = 'ASSUMPTIONLOG_DESTROY';

const assumptionLogDestroyActions = {
  DESTROY_STARTED: `${prefix}_DESTROY_STARTED`,
  DESTROY_SUCCESS: `${prefix}_DESTROY_SUCCESS`,
  DESTROY_ERROR: `${prefix}_DESTROY_ERROR`,

  DESTROY_ALL_STARTED: `${prefix}_DESTROY_ALL_STARTED`,
  DESTROY_ALL_SUCCESS: `${prefix}_DESTROY_ALL_SUCCESS`,
  DESTROY_ALL_ERROR: `${prefix}_DESTROY_ALL_ERROR`,

  doDestroy: (id) => async (dispatch) => {
    try {
      dispatch({
        type: assumptionLogDestroyActions.DESTROY_STARTED,
      });

      await AssumptionLogService.destroyAll([id]);

      dispatch({
        type: assumptionLogDestroyActions.DESTROY_SUCCESS,
      });

      Message.success(
        i18n('entities.assumptionLog.destroy.success'),
      );

      dispatch(listActions.doFetchCurrentFilter());

      getHistory().push('/assumption-log');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: assumptionLogDestroyActions.DESTROY_ERROR,
      });
    }
  },

  doDestroyAll: (ids) => async (dispatch) => {
    try {
      dispatch({
        type: assumptionLogDestroyActions.DESTROY_ALL_STARTED,
      });

      await AssumptionLogService.destroyAll(ids);

      dispatch({
        type: assumptionLogDestroyActions.DESTROY_ALL_SUCCESS,
      });

      if (listActions) {
        dispatch(listActions.doClearAllSelected());
        dispatch(listActions.doFetchCurrentFilter());
      }

      Message.success(
        i18n('entities.assumptionLog.destroyAll.success'),
      );

      getHistory().push('/assumption-log');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: assumptionLogDestroyActions.DESTROY_ALL_ERROR,
      });
    }
  },
};

export default assumptionLogDestroyActions;
