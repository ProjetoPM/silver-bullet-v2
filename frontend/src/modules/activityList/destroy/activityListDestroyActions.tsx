import listActions from 'src/modules/activityList/list/activityListListActions';
import ActivityListService from 'src/modules/activityList/activityListService';
import Errors from 'src/modules/shared/error/errors';
import { i18n } from 'src/i18n';
import { getHistory } from 'src/modules/store';
import Message from 'src/view/shared/message';

const prefix = 'ACTIVITYLIST_DESTROY';

const activityListDestroyActions = {
  DESTROY_STARTED: `${prefix}_DESTROY_STARTED`,
  DESTROY_SUCCESS: `${prefix}_DESTROY_SUCCESS`,
  DESTROY_ERROR: `${prefix}_DESTROY_ERROR`,

  DESTROY_ALL_STARTED: `${prefix}_DESTROY_ALL_STARTED`,
  DESTROY_ALL_SUCCESS: `${prefix}_DESTROY_ALL_SUCCESS`,
  DESTROY_ALL_ERROR: `${prefix}_DESTROY_ALL_ERROR`,

  doDestroy: (id) => async (dispatch) => {
    try {
      dispatch({
        type: activityListDestroyActions.DESTROY_STARTED,
      });

      await ActivityListService.destroyAll([id]);

      dispatch({
        type: activityListDestroyActions.DESTROY_SUCCESS,
      });

      Message.success(
        i18n('entities.activityList.destroy.success'),
      );

      dispatch(listActions.doFetchCurrentFilter());

      getHistory().push('/activity-list');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: activityListDestroyActions.DESTROY_ERROR,
      });
    }
  },

  doDestroyAll: (ids) => async (dispatch) => {
    try {
      dispatch({
        type: activityListDestroyActions.DESTROY_ALL_STARTED,
      });

      await ActivityListService.destroyAll(ids);

      dispatch({
        type: activityListDestroyActions.DESTROY_ALL_SUCCESS,
      });

      if (listActions) {
        dispatch(listActions.doClearAllSelected());
        dispatch(listActions.doFetchCurrentFilter());
      }

      Message.success(
        i18n('entities.activityList.destroyAll.success'),
      );

      getHistory().push('/activity-list');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: activityListDestroyActions.DESTROY_ALL_ERROR,
      });
    }
  },
};

export default activityListDestroyActions;
