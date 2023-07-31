import ClosedProcurementDocumentationService from 'src/modules/closedProcurementDocumentation/closedProcurementDocumentationService';
import Errors from 'src/modules/shared/error/errors';
import Message from 'src/view/shared/message';
import { getHistory } from 'src/modules/store';
import { i18n } from 'src/i18n';

const prefix = 'CLOSEDPROCUREMENTDOCUMENTATION_FORM';

const closedProcurementDocumentationFormActions = {
  INIT_STARTED: `${prefix}_INIT_STARTED`,
  INIT_SUCCESS: `${prefix}_INIT_SUCCESS`,
  INIT_ERROR: `${prefix}_INIT_ERROR`,

  CREATE_STARTED: `${prefix}_CREATE_STARTED`,
  CREATE_SUCCESS: `${prefix}_CREATE_SUCCESS`,
  CREATE_ERROR: `${prefix}_CREATE_ERROR`,

  UPDATE_STARTED: `${prefix}_UPDATE_STARTED`,
  UPDATE_SUCCESS: `${prefix}_UPDATE_SUCCESS`,
  UPDATE_ERROR: `${prefix}_UPDATE_ERROR`,

  doInit: (id) => async (dispatch) => {
    try {
      dispatch({
        type: closedProcurementDocumentationFormActions.INIT_STARTED,
      });

      let record = {};

      const isEdit = Boolean(id);

      if (isEdit) {
        record = await ClosedProcurementDocumentationService.find(id);
      }

      dispatch({
        type: closedProcurementDocumentationFormActions.INIT_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: closedProcurementDocumentationFormActions.INIT_ERROR,
      });

      getHistory().push('/closed-procurement-documentation');
    }
  },

  doCreate: (values) => async (dispatch) => {
    try {
      dispatch({
        type: closedProcurementDocumentationFormActions.CREATE_STARTED,
      });

      await ClosedProcurementDocumentationService.create(values);

      dispatch({
        type: closedProcurementDocumentationFormActions.CREATE_SUCCESS,
      });

      Message.success(
        i18n('entities.closedProcurementDocumentation.create.success'),
      );

      getHistory().push('/closed-procurement-documentation');
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: closedProcurementDocumentationFormActions.CREATE_ERROR,
      });
    }
  },

  doUpdate: (id, values) => async (dispatch, getState) => {
    try {
      dispatch({
        type: closedProcurementDocumentationFormActions.UPDATE_STARTED,
      });

      await ClosedProcurementDocumentationService.update(id, values);

      dispatch({
        type: closedProcurementDocumentationFormActions.UPDATE_SUCCESS,
      });

      Message.success(
        i18n('entities.closedProcurementDocumentation.update.success'),
      );

      getHistory().push('/closed-procurement-documentation');
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: closedProcurementDocumentationFormActions.UPDATE_ERROR,
      });
    }
  },
};

export default closedProcurementDocumentationFormActions;
