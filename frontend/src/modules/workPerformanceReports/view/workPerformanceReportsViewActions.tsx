import WorkPerformanceReportsService from 'src/modules/workPerformanceReports/workPerformanceReportsService';
import Errors from 'src/modules/shared/error/errors';
import { getHistory } from 'src/modules/store';

const prefix = 'WORKPERFORMANCEREPORTS_VIEW';

const workPerformanceReportsViewActions = {
  FIND_STARTED: `${prefix}_FIND_STARTED`,
  FIND_SUCCESS: `${prefix}_FIND_SUCCESS`,
  FIND_ERROR: `${prefix}_FIND_ERROR`,

  doFind: (id) => async (dispatch) => {
    try {
      dispatch({
        type: workPerformanceReportsViewActions.FIND_STARTED,
      });

      const record = await WorkPerformanceReportsService.find(id);

      dispatch({
        type: workPerformanceReportsViewActions.FIND_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: workPerformanceReportsViewActions.FIND_ERROR,
      });

      getHistory().push('/work-performance-reports');
    }
  },
};

export default workPerformanceReportsViewActions;
