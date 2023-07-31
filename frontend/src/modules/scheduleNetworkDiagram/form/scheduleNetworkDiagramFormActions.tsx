import ScheduleNetworkDiagramService from 'src/modules/scheduleNetworkDiagram/scheduleNetworkDiagramService';
import Errors from 'src/modules/shared/error/errors';
import Message from 'src/view/shared/message';
import { getHistory } from 'src/modules/store';
import { i18n } from 'src/i18n';

const prefix = 'SCHEDULENETWORKDIAGRAM_FORM';

const scheduleNetworkDiagramFormActions = {
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
        type: scheduleNetworkDiagramFormActions.INIT_STARTED,
      });

      let record = {};

      const isEdit = Boolean(id);

      if (isEdit) {
        record = await ScheduleNetworkDiagramService.find(id);
      }

      dispatch({
        type: scheduleNetworkDiagramFormActions.INIT_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: scheduleNetworkDiagramFormActions.INIT_ERROR,
      });

      getHistory().push('/schedule-network-diagram');
    }
  },

  doCreate: (values) => async (dispatch) => {
    try {
      dispatch({
        type: scheduleNetworkDiagramFormActions.CREATE_STARTED,
      });

      await ScheduleNetworkDiagramService.create(values);

      dispatch({
        type: scheduleNetworkDiagramFormActions.CREATE_SUCCESS,
      });

      Message.success(
        i18n('entities.scheduleNetworkDiagram.create.success'),
      );

      getHistory().push('/schedule-network-diagram');
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: scheduleNetworkDiagramFormActions.CREATE_ERROR,
      });
    }
  },

  doUpdate: (id, values) => async (dispatch, getState) => {
    try {
      dispatch({
        type: scheduleNetworkDiagramFormActions.UPDATE_STARTED,
      });

      await ScheduleNetworkDiagramService.update(id, values);

      dispatch({
        type: scheduleNetworkDiagramFormActions.UPDATE_SUCCESS,
      });

      Message.success(
        i18n('entities.scheduleNetworkDiagram.update.success'),
      );

      getHistory().push('/schedule-network-diagram');
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: scheduleNetworkDiagramFormActions.UPDATE_ERROR,
      });
    }
  },
};

export default scheduleNetworkDiagramFormActions;
