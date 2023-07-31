import ClosedProcurementDocumentationService from 'src/modules/closedProcurementDocumentation/closedProcurementDocumentationService';
import Errors from 'src/modules/shared/error/errors';
import { getHistory } from 'src/modules/store';

const prefix = 'CLOSEDPROCUREMENTDOCUMENTATION_VIEW';

const closedProcurementDocumentationViewActions = {
  FIND_STARTED: `${prefix}_FIND_STARTED`,
  FIND_SUCCESS: `${prefix}_FIND_SUCCESS`,
  FIND_ERROR: `${prefix}_FIND_ERROR`,

  doFind: (id) => async (dispatch) => {
    try {
      dispatch({
        type: closedProcurementDocumentationViewActions.FIND_STARTED,
      });

      const record = await ClosedProcurementDocumentationService.find(id);

      dispatch({
        type: closedProcurementDocumentationViewActions.FIND_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: closedProcurementDocumentationViewActions.FIND_ERROR,
      });

      getHistory().push('/closed-procurement-documentation');
    }
  },
};

export default closedProcurementDocumentationViewActions;
