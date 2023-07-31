import ActivityDurationEstimatesService from 'src/modules/activityDurationEstimates/activityDurationEstimatesService';
import Errors from 'src/modules/shared/error/errors';
import Message from 'src/view/shared/message';
import { getHistory } from 'src/modules/store';
import { i18n } from 'src/i18n';

const prefix = 'ACTIVITYDURATIONESTIMATES_FORM';

const activityDurationEstimatesFormActions = {
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
        type: activityDurationEstimatesFormActions.INIT_STARTED,
      });

      let record = {};

      const isEdit = Boolean(id);

      if (isEdit) {
        record = await ActivityDurationEstimatesService.find(id);
      }

      dispatch({
        type: activityDurationEstimatesFormActions.INIT_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: activityDurationEstimatesFormActions.INIT_ERROR,
      });

      getHistory().push('/activity-duration-estimates');
    }
  },

  doCreate: (values) => async (dispatch) => {
    try {
      dispatch({
        type: activityDurationEstimatesFormActions.CREATE_STARTED,
      });

      await ActivityDurationEstimatesService.create(values);

      dispatch({
        type: activityDurationEstimatesFormActions.CREATE_SUCCESS,
      });

      Message.success(
        i18n('entities.activityDurationEstimates.create.success'),
      );

      getHistory().push('/activity-duration-estimates');
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: activityDurationEstimatesFormActions.CREATE_ERROR,
      });
    }
  },

  doUpdate: (id, values) => async (dispatch, getState) => {
    try {
      dispatch({
        type: activityDurationEstimatesFormActions.UPDATE_STARTED,
      });

      await ActivityDurationEstimatesService.update(id, values);

      dispatch({
        type: activityDurationEstimatesFormActions.UPDATE_SUCCESS,
      });

      Message.success(
        i18n('entities.activityDurationEstimates.update.success'),
      );

      getHistory().push('/activity-duration-estimates');
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: activityDurationEstimatesFormActions.UPDATE_ERROR,
      });
    }
  },
};

export default activityDurationEstimatesFormActions;
