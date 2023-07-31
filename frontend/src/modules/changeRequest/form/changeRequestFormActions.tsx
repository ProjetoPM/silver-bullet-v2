import ChangeRequestService from 'src/modules/changeRequest/changeRequestService';
import Errors from 'src/modules/shared/error/errors';
import Message from 'src/view/shared/message';
import { getHistory } from 'src/modules/store';
import { i18n } from 'src/i18n';

const prefix = 'CHANGEREQUEST_FORM';

const changeRequestFormActions = {
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
        type: changeRequestFormActions.INIT_STARTED,
      });

      let record = {};

      const isEdit = Boolean(id);

      if (isEdit) {
        record = await ChangeRequestService.find(id);
      }

      dispatch({
        type: changeRequestFormActions.INIT_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: changeRequestFormActions.INIT_ERROR,
      });

      getHistory().push('/change-request');
    }
  },

  doCreate: (values) => async (dispatch) => {
    try {
      dispatch({
        type: changeRequestFormActions.CREATE_STARTED,
      });

      await ChangeRequestService.create(values);

      dispatch({
        type: changeRequestFormActions.CREATE_SUCCESS,
      });

      Message.success(
        i18n('entities.changeRequest.create.success'),
      );

      getHistory().push('/change-request');
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: changeRequestFormActions.CREATE_ERROR,
      });
    }
  },

  doUpdate: (id, values) => async (dispatch, getState) => {
    try {
      dispatch({
        type: changeRequestFormActions.UPDATE_STARTED,
      });

      await ChangeRequestService.update(id, values);

      dispatch({
        type: changeRequestFormActions.UPDATE_SUCCESS,
      });

      Message.success(
        i18n('entities.changeRequest.update.success'),
      );

      getHistory().push('/change-request');
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: changeRequestFormActions.UPDATE_ERROR,
      });
    }
  },
};

export default changeRequestFormActions;
