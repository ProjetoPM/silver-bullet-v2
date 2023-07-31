import CostEstimatesService from 'src/modules/costEstimates/costEstimatesService';
import Errors from 'src/modules/shared/error/errors';
import Message from 'src/view/shared/message';
import { getHistory } from 'src/modules/store';
import { i18n } from 'src/i18n';

const prefix = 'COSTESTIMATES_FORM';

const costEstimatesFormActions = {
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
        type: costEstimatesFormActions.INIT_STARTED,
      });

      let record = {};

      const isEdit = Boolean(id);

      if (isEdit) {
        record = await CostEstimatesService.find(id);
      }

      dispatch({
        type: costEstimatesFormActions.INIT_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: costEstimatesFormActions.INIT_ERROR,
      });

      getHistory().push('/cost-estimates');
    }
  },

  doCreate: (values) => async (dispatch) => {
    try {
      dispatch({
        type: costEstimatesFormActions.CREATE_STARTED,
      });

      await CostEstimatesService.create(values);

      dispatch({
        type: costEstimatesFormActions.CREATE_SUCCESS,
      });

      Message.success(
        i18n('entities.costEstimates.create.success'),
      );

      getHistory().push('/cost-estimates');
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: costEstimatesFormActions.CREATE_ERROR,
      });
    }
  },

  doUpdate: (id, values) => async (dispatch, getState) => {
    try {
      dispatch({
        type: costEstimatesFormActions.UPDATE_STARTED,
      });

      await CostEstimatesService.update(id, values);

      dispatch({
        type: costEstimatesFormActions.UPDATE_SUCCESS,
      });

      Message.success(
        i18n('entities.costEstimates.update.success'),
      );

      getHistory().push('/cost-estimates');
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: costEstimatesFormActions.UPDATE_ERROR,
      });
    }
  },
};

export default costEstimatesFormActions;
