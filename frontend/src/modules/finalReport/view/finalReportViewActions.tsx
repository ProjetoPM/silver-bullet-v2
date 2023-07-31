import FinalReportService from 'src/modules/finalReport/finalReportService';
import Errors from 'src/modules/shared/error/errors';
import { getHistory } from 'src/modules/store';

const prefix = 'FINALREPORT_VIEW';

const finalReportViewActions = {
  FIND_STARTED: `${prefix}_FIND_STARTED`,
  FIND_SUCCESS: `${prefix}_FIND_SUCCESS`,
  FIND_ERROR: `${prefix}_FIND_ERROR`,

  doFind: (id) => async (dispatch) => {
    try {
      dispatch({
        type: finalReportViewActions.FIND_STARTED,
      });

      const record = await FinalReportService.find(id);

      dispatch({
        type: finalReportViewActions.FIND_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: finalReportViewActions.FIND_ERROR,
      });

      getHistory().push('/final-report');
    }
  },
};

export default finalReportViewActions;
