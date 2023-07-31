import listActions from 'src/modules/stakeholderCalendars/list/stakeholderCalendarsListActions';
import StakeholderCalendarsService from 'src/modules/stakeholderCalendars/stakeholderCalendarsService';
import Errors from 'src/modules/shared/error/errors';
import { i18n } from 'src/i18n';
import { getHistory } from 'src/modules/store';
import Message from 'src/view/shared/message';

const prefix = 'STAKEHOLDERCALENDARS_DESTROY';

const stakeholderCalendarsDestroyActions = {
  DESTROY_STARTED: `${prefix}_DESTROY_STARTED`,
  DESTROY_SUCCESS: `${prefix}_DESTROY_SUCCESS`,
  DESTROY_ERROR: `${prefix}_DESTROY_ERROR`,

  DESTROY_ALL_STARTED: `${prefix}_DESTROY_ALL_STARTED`,
  DESTROY_ALL_SUCCESS: `${prefix}_DESTROY_ALL_SUCCESS`,
  DESTROY_ALL_ERROR: `${prefix}_DESTROY_ALL_ERROR`,

  doDestroy: (id) => async (dispatch) => {
    try {
      dispatch({
        type: stakeholderCalendarsDestroyActions.DESTROY_STARTED,
      });

      await StakeholderCalendarsService.destroyAll([id]);

      dispatch({
        type: stakeholderCalendarsDestroyActions.DESTROY_SUCCESS,
      });

      Message.success(
        i18n('entities.stakeholderCalendars.destroy.success'),
      );

      dispatch(listActions.doFetchCurrentFilter());

      getHistory().push('/stakeholder-calendars');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: stakeholderCalendarsDestroyActions.DESTROY_ERROR,
      });
    }
  },

  doDestroyAll: (ids) => async (dispatch) => {
    try {
      dispatch({
        type: stakeholderCalendarsDestroyActions.DESTROY_ALL_STARTED,
      });

      await StakeholderCalendarsService.destroyAll(ids);

      dispatch({
        type: stakeholderCalendarsDestroyActions.DESTROY_ALL_SUCCESS,
      });

      if (listActions) {
        dispatch(listActions.doClearAllSelected());
        dispatch(listActions.doFetchCurrentFilter());
      }

      Message.success(
        i18n('entities.stakeholderCalendars.destroyAll.success'),
      );

      getHistory().push('/stakeholder-calendars');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: stakeholderCalendarsDestroyActions.DESTROY_ALL_ERROR,
      });
    }
  },
};

export default stakeholderCalendarsDestroyActions;
