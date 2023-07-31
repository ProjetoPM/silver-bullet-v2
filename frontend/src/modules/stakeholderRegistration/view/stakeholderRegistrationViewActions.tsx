import StakeholderRegistrationService from 'src/modules/stakeholderRegistration/stakeholderRegistrationService';
import Errors from 'src/modules/shared/error/errors';
import { getHistory } from 'src/modules/store';

const prefix = 'STAKEHOLDERREGISTRATION_VIEW';

const stakeholderRegistrationViewActions = {
  FIND_STARTED: `${prefix}_FIND_STARTED`,
  FIND_SUCCESS: `${prefix}_FIND_SUCCESS`,
  FIND_ERROR: `${prefix}_FIND_ERROR`,

  doFind: (id) => async (dispatch) => {
    try {
      dispatch({
        type: stakeholderRegistrationViewActions.FIND_STARTED,
      });

      const record = await StakeholderRegistrationService.find(id);

      dispatch({
        type: stakeholderRegistrationViewActions.FIND_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: stakeholderRegistrationViewActions.FIND_ERROR,
      });

      getHistory().push('/stakeholder-registration');
    }
  },
};

export default stakeholderRegistrationViewActions;
