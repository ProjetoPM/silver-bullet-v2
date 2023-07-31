import listActions from 'src/modules/activityDurationEstimates/list/activityDurationEstimatesListActions';
import ActivityDurationEstimatesService from 'src/modules/activityDurationEstimates/activityDurationEstimatesService';
import Errors from 'src/modules/shared/error/errors';
import { i18n } from 'src/i18n';
import { getHistory } from 'src/modules/store';
import Message from 'src/view/shared/message';

const prefix = 'ACTIVITYDURATIONESTIMATES_DESTROY';

const activityDurationEstimatesDestroyActions = {
  DESTROY_STARTED: `${prefix}_DESTROY_STARTED`,
  DESTROY_SUCCESS: `${prefix}_DESTROY_SUCCESS`,
  DESTROY_ERROR: `${prefix}_DESTROY_ERROR`,

  DESTROY_ALL_STARTED: `${prefix}_DESTROY_ALL_STARTED`,
  DESTROY_ALL_SUCCESS: `${prefix}_DESTROY_ALL_SUCCESS`,
  DESTROY_ALL_ERROR: `${prefix}_DESTROY_ALL_ERROR`,

  doDestroy: (id) => async (dispatch) => {
    try {
      dispatch({
        type: activityDurationEstimatesDestroyActions.DESTROY_STARTED,
      });

      await ActivityDurationEstimatesService.destroyAll([id]);

      dispatch({
        type: activityDurationEstimatesDestroyActions.DESTROY_SUCCESS,
      });

      Message.success(
        i18n('entities.activityDurationEstimates.destroy.success'),
      );

      dispatch(listActions.doFetchCurrentFilter());

      getHistory().push('/activity-duration-estimates');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: activityDurationEstimatesDestroyActions.DESTROY_ERROR,
      });
    }
  },

  doDestroyAll: (ids) => async (dispatch) => {
    try {
      dispatch({
        type: activityDurationEstimatesDestroyActions.DESTROY_ALL_STARTED,
      });

      await ActivityDurationEstimatesService.destroyAll(ids);

      dispatch({
        type: activityDurationEstimatesDestroyActions.DESTROY_ALL_SUCCESS,
      });

      if (listActions) {
        dispatch(listActions.doClearAllSelected());
        dispatch(listActions.doFetchCurrentFilter());
      }

      Message.success(
        i18n('entities.activityDurationEstimates.destroyAll.success'),
      );

      getHistory().push('/activity-duration-estimates');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: activityDurationEstimatesDestroyActions.DESTROY_ALL_ERROR,
      });
    }
  },
};

export default activityDurationEstimatesDestroyActions;
