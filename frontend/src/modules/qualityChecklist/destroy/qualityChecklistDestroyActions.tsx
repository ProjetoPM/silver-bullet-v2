import listActions from 'src/modules/qualityChecklist/list/qualityChecklistListActions';
import QualityChecklistService from 'src/modules/qualityChecklist/qualityChecklistService';
import Errors from 'src/modules/shared/error/errors';
import { i18n } from 'src/i18n';
import { getHistory } from 'src/modules/store';
import Message from 'src/view/shared/message';

const prefix = 'QUALITYCHECKLIST_DESTROY';

const qualityChecklistDestroyActions = {
  DESTROY_STARTED: `${prefix}_DESTROY_STARTED`,
  DESTROY_SUCCESS: `${prefix}_DESTROY_SUCCESS`,
  DESTROY_ERROR: `${prefix}_DESTROY_ERROR`,

  DESTROY_ALL_STARTED: `${prefix}_DESTROY_ALL_STARTED`,
  DESTROY_ALL_SUCCESS: `${prefix}_DESTROY_ALL_SUCCESS`,
  DESTROY_ALL_ERROR: `${prefix}_DESTROY_ALL_ERROR`,

  doDestroy: (id) => async (dispatch) => {
    try {
      dispatch({
        type: qualityChecklistDestroyActions.DESTROY_STARTED,
      });

      await QualityChecklistService.destroyAll([id]);

      dispatch({
        type: qualityChecklistDestroyActions.DESTROY_SUCCESS,
      });

      Message.success(
        i18n('entities.qualityChecklist.destroy.success'),
      );

      dispatch(listActions.doFetchCurrentFilter());

      getHistory().push('/quality-checklist');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: qualityChecklistDestroyActions.DESTROY_ERROR,
      });
    }
  },

  doDestroyAll: (ids) => async (dispatch) => {
    try {
      dispatch({
        type: qualityChecklistDestroyActions.DESTROY_ALL_STARTED,
      });

      await QualityChecklistService.destroyAll(ids);

      dispatch({
        type: qualityChecklistDestroyActions.DESTROY_ALL_SUCCESS,
      });

      if (listActions) {
        dispatch(listActions.doClearAllSelected());
        dispatch(listActions.doFetchCurrentFilter());
      }

      Message.success(
        i18n('entities.qualityChecklist.destroyAll.success'),
      );

      getHistory().push('/quality-checklist');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: qualityChecklistDestroyActions.DESTROY_ALL_ERROR,
      });
    }
  },
};

export default qualityChecklistDestroyActions;
