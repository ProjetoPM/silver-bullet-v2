import ProcurementStatementWorkRegisterService from 'src/modules/procurementStatementWorkRegister/procurementStatementWorkRegisterService';
import Errors from 'src/modules/shared/error/errors';
import Message from 'src/view/shared/message';
import { getHistory } from 'src/modules/store';
import { i18n } from 'src/i18n';

const prefix = 'PROCUREMENTSTATEMENTWORKREGISTER_FORM';

const procurementStatementWorkRegisterFormActions = {
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
        type: procurementStatementWorkRegisterFormActions.INIT_STARTED,
      });

      let record = {};

      const isEdit = Boolean(id);

      if (isEdit) {
        record = await ProcurementStatementWorkRegisterService.find(id);
      }

      dispatch({
        type: procurementStatementWorkRegisterFormActions.INIT_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: procurementStatementWorkRegisterFormActions.INIT_ERROR,
      });

      getHistory().push('/procurement-statement-work-register');
    }
  },

  doCreate: (values) => async (dispatch) => {
    try {
      dispatch({
        type: procurementStatementWorkRegisterFormActions.CREATE_STARTED,
      });

      await ProcurementStatementWorkRegisterService.create(values);

      dispatch({
        type: procurementStatementWorkRegisterFormActions.CREATE_SUCCESS,
      });

      Message.success(
        i18n('entities.procurementStatementWorkRegister.create.success'),
      );

      getHistory().push('/procurement-statement-work-register');
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: procurementStatementWorkRegisterFormActions.CREATE_ERROR,
      });
    }
  },

  doUpdate: (id, values) => async (dispatch, getState) => {
    try {
      dispatch({
        type: procurementStatementWorkRegisterFormActions.UPDATE_STARTED,
      });

      await ProcurementStatementWorkRegisterService.update(id, values);

      dispatch({
        type: procurementStatementWorkRegisterFormActions.UPDATE_SUCCESS,
      });

      Message.success(
        i18n('entities.procurementStatementWorkRegister.update.success'),
      );

      getHistory().push('/procurement-statement-work-register');
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: procurementStatementWorkRegisterFormActions.UPDATE_ERROR,
      });
    }
  },
};

export default procurementStatementWorkRegisterFormActions;
