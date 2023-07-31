import listActions from 'src/modules/projectPerformanceMonitoringReport/list/projectPerformanceMonitoringReportListActions';
import ProjectPerformanceMonitoringReportService from 'src/modules/projectPerformanceMonitoringReport/projectPerformanceMonitoringReportService';
import Errors from 'src/modules/shared/error/errors';
import { i18n } from 'src/i18n';
import { getHistory } from 'src/modules/store';
import Message from 'src/view/shared/message';

const prefix = 'PROJECTPERFORMANCEMONITORINGREPORT_DESTROY';

const projectPerformanceMonitoringReportDestroyActions = {
  DESTROY_STARTED: `${prefix}_DESTROY_STARTED`,
  DESTROY_SUCCESS: `${prefix}_DESTROY_SUCCESS`,
  DESTROY_ERROR: `${prefix}_DESTROY_ERROR`,

  DESTROY_ALL_STARTED: `${prefix}_DESTROY_ALL_STARTED`,
  DESTROY_ALL_SUCCESS: `${prefix}_DESTROY_ALL_SUCCESS`,
  DESTROY_ALL_ERROR: `${prefix}_DESTROY_ALL_ERROR`,

  doDestroy: (id) => async (dispatch) => {
    try {
      dispatch({
        type: projectPerformanceMonitoringReportDestroyActions.DESTROY_STARTED,
      });

      await ProjectPerformanceMonitoringReportService.destroyAll([id]);

      dispatch({
        type: projectPerformanceMonitoringReportDestroyActions.DESTROY_SUCCESS,
      });

      Message.success(
        i18n('entities.projectPerformanceMonitoringReport.destroy.success'),
      );

      dispatch(listActions.doFetchCurrentFilter());

      getHistory().push('/project-performance-monitoring-report');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: projectPerformanceMonitoringReportDestroyActions.DESTROY_ERROR,
      });
    }
  },

  doDestroyAll: (ids) => async (dispatch) => {
    try {
      dispatch({
        type: projectPerformanceMonitoringReportDestroyActions.DESTROY_ALL_STARTED,
      });

      await ProjectPerformanceMonitoringReportService.destroyAll(ids);

      dispatch({
        type: projectPerformanceMonitoringReportDestroyActions.DESTROY_ALL_SUCCESS,
      });

      if (listActions) {
        dispatch(listActions.doClearAllSelected());
        dispatch(listActions.doFetchCurrentFilter());
      }

      Message.success(
        i18n('entities.projectPerformanceMonitoringReport.destroyAll.success'),
      );

      getHistory().push('/project-performance-monitoring-report');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: projectPerformanceMonitoringReportDestroyActions.DESTROY_ALL_ERROR,
      });
    }
  },
};

export default projectPerformanceMonitoringReportDestroyActions;
