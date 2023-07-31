import listActions from 'src/modules/costEstimates/list/costEstimatesListActions';
import CostEstimatesService from 'src/modules/costEstimates/costEstimatesService';
import Errors from 'src/modules/shared/error/errors';
import { i18n } from 'src/i18n';
import { getHistory } from 'src/modules/store';
import Message from 'src/view/shared/message';

const prefix = 'COSTESTIMATES_DESTROY';

const costEstimatesDestroyActions = {
  DESTROY_STARTED: `${prefix}_DESTROY_STARTED`,
  DESTROY_SUCCESS: `${prefix}_DESTROY_SUCCESS`,
  DESTROY_ERROR: `${prefix}_DESTROY_ERROR`,

  DESTROY_ALL_STARTED: `${prefix}_DESTROY_ALL_STARTED`,
  DESTROY_ALL_SUCCESS: `${prefix}_DESTROY_ALL_SUCCESS`,
  DESTROY_ALL_ERROR: `${prefix}_DESTROY_ALL_ERROR`,

  doDestroy: (id) => async (dispatch) => {
    try {
      dispatch({
        type: costEstimatesDestroyActions.DESTROY_STARTED,
      });

      await CostEstimatesService.destroyAll([id]);

      dispatch({
        type: costEstimatesDestroyActions.DESTROY_SUCCESS,
      });

      Message.success(
        i18n('entities.costEstimates.destroy.success'),
      );

      dispatch(listActions.doFetchCurrentFilter());

      getHistory().push('/cost-estimates');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: costEstimatesDestroyActions.DESTROY_ERROR,
      });
    }
  },

  doDestroyAll: (ids) => async (dispatch) => {
    try {
      dispatch({
        type: costEstimatesDestroyActions.DESTROY_ALL_STARTED,
      });

      await CostEstimatesService.destroyAll(ids);

      dispatch({
        type: costEstimatesDestroyActions.DESTROY_ALL_SUCCESS,
      });

      if (listActions) {
        dispatch(listActions.doClearAllSelected());
        dispatch(listActions.doFetchCurrentFilter());
      }

      Message.success(
        i18n('entities.costEstimates.destroyAll.success'),
      );

      getHistory().push('/cost-estimates');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: costEstimatesDestroyActions.DESTROY_ALL_ERROR,
      });
    }
  },
};

export default costEstimatesDestroyActions;
