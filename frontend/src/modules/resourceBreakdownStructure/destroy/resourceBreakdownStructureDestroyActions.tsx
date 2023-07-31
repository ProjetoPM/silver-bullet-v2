import listActions from 'src/modules/resourceBreakdownStructure/list/resourceBreakdownStructureListActions';
import ResourceBreakdownStructureService from 'src/modules/resourceBreakdownStructure/resourceBreakdownStructureService';
import Errors from 'src/modules/shared/error/errors';
import { i18n } from 'src/i18n';
import { getHistory } from 'src/modules/store';
import Message from 'src/view/shared/message';

const prefix = 'RESOURCEBREAKDOWNSTRUCTURE_DESTROY';

const resourceBreakdownStructureDestroyActions = {
  DESTROY_STARTED: `${prefix}_DESTROY_STARTED`,
  DESTROY_SUCCESS: `${prefix}_DESTROY_SUCCESS`,
  DESTROY_ERROR: `${prefix}_DESTROY_ERROR`,

  DESTROY_ALL_STARTED: `${prefix}_DESTROY_ALL_STARTED`,
  DESTROY_ALL_SUCCESS: `${prefix}_DESTROY_ALL_SUCCESS`,
  DESTROY_ALL_ERROR: `${prefix}_DESTROY_ALL_ERROR`,

  doDestroy: (id) => async (dispatch) => {
    try {
      dispatch({
        type: resourceBreakdownStructureDestroyActions.DESTROY_STARTED,
      });

      await ResourceBreakdownStructureService.destroyAll([id]);

      dispatch({
        type: resourceBreakdownStructureDestroyActions.DESTROY_SUCCESS,
      });

      Message.success(
        i18n('entities.resourceBreakdownStructure.destroy.success'),
      );

      dispatch(listActions.doFetchCurrentFilter());

      getHistory().push('/resource-breakdown-structure');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: resourceBreakdownStructureDestroyActions.DESTROY_ERROR,
      });
    }
  },

  doDestroyAll: (ids) => async (dispatch) => {
    try {
      dispatch({
        type: resourceBreakdownStructureDestroyActions.DESTROY_ALL_STARTED,
      });

      await ResourceBreakdownStructureService.destroyAll(ids);

      dispatch({
        type: resourceBreakdownStructureDestroyActions.DESTROY_ALL_SUCCESS,
      });

      if (listActions) {
        dispatch(listActions.doClearAllSelected());
        dispatch(listActions.doFetchCurrentFilter());
      }

      Message.success(
        i18n('entities.resourceBreakdownStructure.destroyAll.success'),
      );

      getHistory().push('/resource-breakdown-structure');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: resourceBreakdownStructureDestroyActions.DESTROY_ALL_ERROR,
      });
    }
  },
};

export default resourceBreakdownStructureDestroyActions;
