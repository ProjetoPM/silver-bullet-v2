import RiskRegistrationService from 'src/modules/riskRegistration/riskRegistrationService';
import Errors from 'src/modules/shared/error/errors';
import { getHistory } from 'src/modules/store';

const prefix = 'RISKREGISTRATION_VIEW';

const riskRegistrationViewActions = {
  FIND_STARTED: `${prefix}_FIND_STARTED`,
  FIND_SUCCESS: `${prefix}_FIND_SUCCESS`,
  FIND_ERROR: `${prefix}_FIND_ERROR`,

  doFind: (id) => async (dispatch) => {
    try {
      dispatch({
        type: riskRegistrationViewActions.FIND_STARTED,
      });

      const record = await RiskRegistrationService.find(id);

      dispatch({
        type: riskRegistrationViewActions.FIND_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: riskRegistrationViewActions.FIND_ERROR,
      });

      getHistory().push('/risk-registration');
    }
  },
};

export default riskRegistrationViewActions;
