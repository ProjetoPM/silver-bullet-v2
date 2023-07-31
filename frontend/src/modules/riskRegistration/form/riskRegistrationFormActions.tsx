import RiskRegistrationService from 'src/modules/riskRegistration/riskRegistrationService';
import Errors from 'src/modules/shared/error/errors';
import Message from 'src/view/shared/message';
import { getHistory } from 'src/modules/store';
import { i18n } from 'src/i18n';

const prefix = 'RISKREGISTRATION_FORM';

const riskRegistrationFormActions = {
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
        type: riskRegistrationFormActions.INIT_STARTED,
      });

      let record = {};

      const isEdit = Boolean(id);

      if (isEdit) {
        record = await RiskRegistrationService.find(id);
      }

      dispatch({
        type: riskRegistrationFormActions.INIT_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: riskRegistrationFormActions.INIT_ERROR,
      });

      getHistory().push('/risk-registration');
    }
  },

  doCreate: (values) => async (dispatch) => {
    try {
      dispatch({
        type: riskRegistrationFormActions.CREATE_STARTED,
      });

      await RiskRegistrationService.create(values);

      dispatch({
        type: riskRegistrationFormActions.CREATE_SUCCESS,
      });

      Message.success(
        i18n('entities.riskRegistration.create.success'),
      );

      getHistory().push('/risk-registration');
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: riskRegistrationFormActions.CREATE_ERROR,
      });
    }
  },

  doUpdate: (id, values) => async (dispatch, getState) => {
    try {
      dispatch({
        type: riskRegistrationFormActions.UPDATE_STARTED,
      });

      await RiskRegistrationService.update(id, values);

      dispatch({
        type: riskRegistrationFormActions.UPDATE_SUCCESS,
      });

      Message.success(
        i18n('entities.riskRegistration.update.success'),
      );

      getHistory().push('/risk-registration');
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: riskRegistrationFormActions.UPDATE_ERROR,
      });
    }
  },
};

export default riskRegistrationFormActions;
