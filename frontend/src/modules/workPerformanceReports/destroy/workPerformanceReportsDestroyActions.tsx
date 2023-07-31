import listActions from 'src/modules/workPerformanceReports/list/workPerformanceReportsListActions';
import WorkPerformanceReportsService from 'src/modules/workPerformanceReports/workPerformanceReportsService';
import Errors from 'src/modules/shared/error/errors';
import { i18n } from 'src/i18n';
import { getHistory } from 'src/modules/store';
import Message from 'src/view/shared/message';

const prefix = 'WORKPERFORMANCEREPORTS_DESTROY';

const workPerformanceReportsDestroyActions = {
  DESTROY_STARTED: `${prefix}_DESTROY_STARTED`,
  DESTROY_SUCCESS: `${prefix}_DESTROY_SUCCESS`,
  DESTROY_ERROR: `${prefix}_DESTROY_ERROR`,

  DESTROY_ALL_STARTED: `${prefix}_DESTROY_ALL_STARTED`,
  DESTROY_ALL_SUCCESS: `${prefix}_DESTROY_ALL_SUCCESS`,
  DESTROY_ALL_ERROR: `${prefix}_DESTROY_ALL_ERROR`,

  doDestroy: (id) => async (dispatch) => {
    try {
      dispatch({
        type: workPerformanceReportsDestroyActions.DESTROY_STARTED,
      });

      await WorkPerformanceReportsService.destroyAll([id]);

      dispatch({
        type: workPerformanceReportsDestroyActions.DESTROY_SUCCESS,
      });

      Message.success(
        i18n('entities.workPerformanceReports.destroy.success'),
      );

      dispatch(listActions.doFetchCurrentFilter());

      getHistory().push('/work-performance-reports');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: workPerformanceReportsDestroyActions.DESTROY_ERROR,
      });
    }
  },

  doDestroyAll: (ids) => async (dispatch) => {
    try {
      dispatch({
        type: workPerformanceReportsDestroyActions.DESTROY_ALL_STARTED,
      });

      await WorkPerformanceReportsService.destroyAll(ids);

      dispatch({
        type: workPerformanceReportsDestroyActions.DESTROY_ALL_SUCCESS,
      });

      if (listActions) {
        dispatch(listActions.doClearAllSelected());
        dispatch(listActions.doFetchCurrentFilter());
      }

      Message.success(
        i18n('entities.workPerformanceReports.destroyAll.success'),
      );

      getHistory().push('/work-performance-reports');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: workPerformanceReportsDestroyActions.DESTROY_ALL_ERROR,
      });
    }
  },
};

export default workPerformanceReportsDestroyActions;
