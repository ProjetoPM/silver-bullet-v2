import ProjectPerformanceMonitoringReportService from 'src/modules/projectPerformanceMonitoringReport/projectPerformanceMonitoringReportService';
import Errors from 'src/modules/shared/error/errors';
import { getHistory } from 'src/modules/store';

const prefix = 'PROJECTPERFORMANCEMONITORINGREPORT_VIEW';

const projectPerformanceMonitoringReportViewActions = {
  FIND_STARTED: `${prefix}_FIND_STARTED`,
  FIND_SUCCESS: `${prefix}_FIND_SUCCESS`,
  FIND_ERROR: `${prefix}_FIND_ERROR`,

  doFind: (id) => async (dispatch) => {
    try {
      dispatch({
        type: projectPerformanceMonitoringReportViewActions.FIND_STARTED,
      });

      const record = await ProjectPerformanceMonitoringReportService.find(id);

      dispatch({
        type: projectPerformanceMonitoringReportViewActions.FIND_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: projectPerformanceMonitoringReportViewActions.FIND_ERROR,
      });

      getHistory().push('/project-performance-monitoring-report');
    }
  },
};

export default projectPerformanceMonitoringReportViewActions;
