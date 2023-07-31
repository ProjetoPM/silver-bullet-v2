import listActions from 'src/modules/workbreakdownStructure/list/workbreakdownStructureListActions';
import WorkbreakdownStructureService from 'src/modules/workbreakdownStructure/workbreakdownStructureService';
import Errors from 'src/modules/shared/error/errors';
import { i18n } from 'src/i18n';
import { getHistory } from 'src/modules/store';
import Message from 'src/view/shared/message';

const prefix = 'WORKBREAKDOWNSTRUCTURE_DESTROY';

const workbreakdownStructureDestroyActions = {
  DESTROY_STARTED: `${prefix}_DESTROY_STARTED`,
  DESTROY_SUCCESS: `${prefix}_DESTROY_SUCCESS`,
  DESTROY_ERROR: `${prefix}_DESTROY_ERROR`,

  DESTROY_ALL_STARTED: `${prefix}_DESTROY_ALL_STARTED`,
  DESTROY_ALL_SUCCESS: `${prefix}_DESTROY_ALL_SUCCESS`,
  DESTROY_ALL_ERROR: `${prefix}_DESTROY_ALL_ERROR`,

  doDestroy: (id) => async (dispatch) => {
    try {
      dispatch({
        type: workbreakdownStructureDestroyActions.DESTROY_STARTED,
      });

      await WorkbreakdownStructureService.destroyAll([id]);

      dispatch({
        type: workbreakdownStructureDestroyActions.DESTROY_SUCCESS,
      });

      Message.success(
        i18n('entities.workbreakdownStructure.destroy.success'),
      );

      dispatch(listActions.doFetchCurrentFilter());

      getHistory().push('/workbreakdown-structure');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: workbreakdownStructureDestroyActions.DESTROY_ERROR,
      });
    }
  },

  doDestroyAll: (ids) => async (dispatch) => {
    try {
      dispatch({
        type: workbreakdownStructureDestroyActions.DESTROY_ALL_STARTED,
      });

      await WorkbreakdownStructureService.destroyAll(ids);

      dispatch({
        type: workbreakdownStructureDestroyActions.DESTROY_ALL_SUCCESS,
      });

      if (listActions) {
        dispatch(listActions.doClearAllSelected());
        dispatch(listActions.doFetchCurrentFilter());
      }

      Message.success(
        i18n('entities.workbreakdownStructure.destroyAll.success'),
      );

      getHistory().push('/workbreakdown-structure');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: workbreakdownStructureDestroyActions.DESTROY_ALL_ERROR,
      });
    }
  },
};

export default workbreakdownStructureDestroyActions;
