import listActions from 'src/modules/scheduleNetworkDiagram/list/scheduleNetworkDiagramListActions';
import ScheduleNetworkDiagramService from 'src/modules/scheduleNetworkDiagram/scheduleNetworkDiagramService';
import Errors from 'src/modules/shared/error/errors';
import { i18n } from 'src/i18n';
import { getHistory } from 'src/modules/store';
import Message from 'src/view/shared/message';

const prefix = 'SCHEDULENETWORKDIAGRAM_DESTROY';

const scheduleNetworkDiagramDestroyActions = {
  DESTROY_STARTED: `${prefix}_DESTROY_STARTED`,
  DESTROY_SUCCESS: `${prefix}_DESTROY_SUCCESS`,
  DESTROY_ERROR: `${prefix}_DESTROY_ERROR`,

  DESTROY_ALL_STARTED: `${prefix}_DESTROY_ALL_STARTED`,
  DESTROY_ALL_SUCCESS: `${prefix}_DESTROY_ALL_SUCCESS`,
  DESTROY_ALL_ERROR: `${prefix}_DESTROY_ALL_ERROR`,

  doDestroy: (id) => async (dispatch) => {
    try {
      dispatch({
        type: scheduleNetworkDiagramDestroyActions.DESTROY_STARTED,
      });

      await ScheduleNetworkDiagramService.destroyAll([id]);

      dispatch({
        type: scheduleNetworkDiagramDestroyActions.DESTROY_SUCCESS,
      });

      Message.success(
        i18n('entities.scheduleNetworkDiagram.destroy.success'),
      );

      dispatch(listActions.doFetchCurrentFilter());

      getHistory().push('/schedule-network-diagram');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: scheduleNetworkDiagramDestroyActions.DESTROY_ERROR,
      });
    }
  },

  doDestroyAll: (ids) => async (dispatch) => {
    try {
      dispatch({
        type: scheduleNetworkDiagramDestroyActions.DESTROY_ALL_STARTED,
      });

      await ScheduleNetworkDiagramService.destroyAll(ids);

      dispatch({
        type: scheduleNetworkDiagramDestroyActions.DESTROY_ALL_SUCCESS,
      });

      if (listActions) {
        dispatch(listActions.doClearAllSelected());
        dispatch(listActions.doFetchCurrentFilter());
      }

      Message.success(
        i18n('entities.scheduleNetworkDiagram.destroyAll.success'),
      );

      getHistory().push('/schedule-network-diagram');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: scheduleNetworkDiagramDestroyActions.DESTROY_ALL_ERROR,
      });
    }
  },
};

export default scheduleNetworkDiagramDestroyActions;
