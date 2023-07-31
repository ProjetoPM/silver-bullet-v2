import ScheduleNetworkDiagramService from 'src/modules/scheduleNetworkDiagram/scheduleNetworkDiagramService';
import Errors from 'src/modules/shared/error/errors';
import { getHistory } from 'src/modules/store';

const prefix = 'SCHEDULENETWORKDIAGRAM_VIEW';

const scheduleNetworkDiagramViewActions = {
  FIND_STARTED: `${prefix}_FIND_STARTED`,
  FIND_SUCCESS: `${prefix}_FIND_SUCCESS`,
  FIND_ERROR: `${prefix}_FIND_ERROR`,

  doFind: (id) => async (dispatch) => {
    try {
      dispatch({
        type: scheduleNetworkDiagramViewActions.FIND_STARTED,
      });

      const record = await ScheduleNetworkDiagramService.find(id);

      dispatch({
        type: scheduleNetworkDiagramViewActions.FIND_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: scheduleNetworkDiagramViewActions.FIND_ERROR,
      });

      getHistory().push('/schedule-network-diagram');
    }
  },
};

export default scheduleNetworkDiagramViewActions;
