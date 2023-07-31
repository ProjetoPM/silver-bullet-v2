import listActions from 'src/modules/closedProcurementDocumentation/list/closedProcurementDocumentationListActions';
import ClosedProcurementDocumentationService from 'src/modules/closedProcurementDocumentation/closedProcurementDocumentationService';
import Errors from 'src/modules/shared/error/errors';
import { i18n } from 'src/i18n';
import { getHistory } from 'src/modules/store';
import Message from 'src/view/shared/message';

const prefix = 'CLOSEDPROCUREMENTDOCUMENTATION_DESTROY';

const closedProcurementDocumentationDestroyActions = {
  DESTROY_STARTED: `${prefix}_DESTROY_STARTED`,
  DESTROY_SUCCESS: `${prefix}_DESTROY_SUCCESS`,
  DESTROY_ERROR: `${prefix}_DESTROY_ERROR`,

  DESTROY_ALL_STARTED: `${prefix}_DESTROY_ALL_STARTED`,
  DESTROY_ALL_SUCCESS: `${prefix}_DESTROY_ALL_SUCCESS`,
  DESTROY_ALL_ERROR: `${prefix}_DESTROY_ALL_ERROR`,

  doDestroy: (id) => async (dispatch) => {
    try {
      dispatch({
        type: closedProcurementDocumentationDestroyActions.DESTROY_STARTED,
      });

      await ClosedProcurementDocumentationService.destroyAll([id]);

      dispatch({
        type: closedProcurementDocumentationDestroyActions.DESTROY_SUCCESS,
      });

      Message.success(
        i18n('entities.closedProcurementDocumentation.destroy.success'),
      );

      dispatch(listActions.doFetchCurrentFilter());

      getHistory().push('/closed-procurement-documentation');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: closedProcurementDocumentationDestroyActions.DESTROY_ERROR,
      });
    }
  },

  doDestroyAll: (ids) => async (dispatch) => {
    try {
      dispatch({
        type: closedProcurementDocumentationDestroyActions.DESTROY_ALL_STARTED,
      });

      await ClosedProcurementDocumentationService.destroyAll(ids);

      dispatch({
        type: closedProcurementDocumentationDestroyActions.DESTROY_ALL_SUCCESS,
      });

      if (listActions) {
        dispatch(listActions.doClearAllSelected());
        dispatch(listActions.doFetchCurrentFilter());
      }

      Message.success(
        i18n('entities.closedProcurementDocumentation.destroyAll.success'),
      );

      getHistory().push('/closed-procurement-documentation');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: closedProcurementDocumentationDestroyActions.DESTROY_ALL_ERROR,
      });
    }
  },
};

export default closedProcurementDocumentationDestroyActions;
