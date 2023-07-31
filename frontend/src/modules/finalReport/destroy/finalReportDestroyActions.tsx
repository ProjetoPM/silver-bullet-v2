import listActions from 'src/modules/finalReport/list/finalReportListActions';
import FinalReportService from 'src/modules/finalReport/finalReportService';
import Errors from 'src/modules/shared/error/errors';
import { i18n } from 'src/i18n';
import { getHistory } from 'src/modules/store';
import Message from 'src/view/shared/message';

const prefix = 'FINALREPORT_DESTROY';

const finalReportDestroyActions = {
  DESTROY_STARTED: `${prefix}_DESTROY_STARTED`,
  DESTROY_SUCCESS: `${prefix}_DESTROY_SUCCESS`,
  DESTROY_ERROR: `${prefix}_DESTROY_ERROR`,

  DESTROY_ALL_STARTED: `${prefix}_DESTROY_ALL_STARTED`,
  DESTROY_ALL_SUCCESS: `${prefix}_DESTROY_ALL_SUCCESS`,
  DESTROY_ALL_ERROR: `${prefix}_DESTROY_ALL_ERROR`,

  doDestroy: (id) => async (dispatch) => {
    try {
      dispatch({
        type: finalReportDestroyActions.DESTROY_STARTED,
      });

      await FinalReportService.destroyAll([id]);

      dispatch({
        type: finalReportDestroyActions.DESTROY_SUCCESS,
      });

      Message.success(
        i18n('entities.finalReport.destroy.success'),
      );

      dispatch(listActions.doFetchCurrentFilter());

      getHistory().push('/final-report');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: finalReportDestroyActions.DESTROY_ERROR,
      });
    }
  },

  doDestroyAll: (ids) => async (dispatch) => {
    try {
      dispatch({
        type: finalReportDestroyActions.DESTROY_ALL_STARTED,
      });

      await FinalReportService.destroyAll(ids);

      dispatch({
        type: finalReportDestroyActions.DESTROY_ALL_SUCCESS,
      });

      if (listActions) {
        dispatch(listActions.doClearAllSelected());
        dispatch(listActions.doFetchCurrentFilter());
      }

      Message.success(
        i18n('entities.finalReport.destroyAll.success'),
      );

      getHistory().push('/final-report');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: finalReportDestroyActions.DESTROY_ALL_ERROR,
      });
    }
  },
};

export default finalReportDestroyActions;
