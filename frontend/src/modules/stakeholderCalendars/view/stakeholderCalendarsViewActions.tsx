import StakeholderCalendarsService from 'src/modules/stakeholderCalendars/stakeholderCalendarsService';
import Errors from 'src/modules/shared/error/errors';
import { getHistory } from 'src/modules/store';

const prefix = 'STAKEHOLDERCALENDARS_VIEW';

const stakeholderCalendarsViewActions = {
  FIND_STARTED: `${prefix}_FIND_STARTED`,
  FIND_SUCCESS: `${prefix}_FIND_SUCCESS`,
  FIND_ERROR: `${prefix}_FIND_ERROR`,

  doFind: (id) => async (dispatch) => {
    try {
      dispatch({
        type: stakeholderCalendarsViewActions.FIND_STARTED,
      });

      const record = await StakeholderCalendarsService.find(id);

      dispatch({
        type: stakeholderCalendarsViewActions.FIND_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: stakeholderCalendarsViewActions.FIND_ERROR,
      });

      getHistory().push('/stakeholder-calendars');
    }
  },
};

export default stakeholderCalendarsViewActions;
