import listActions from 'src/modules/resourceRequirements/list/resourceRequirementsListActions';
import ResourceRequirementsService from 'src/modules/resourceRequirements/resourceRequirementsService';
import Errors from 'src/modules/shared/error/errors';
import { i18n } from 'src/i18n';
import { getHistory } from 'src/modules/store';
import Message from 'src/view/shared/message';

const prefix = 'RESOURCEREQUIREMENTS_DESTROY';

const resourceRequirementsDestroyActions = {
  DESTROY_STARTED: `${prefix}_DESTROY_STARTED`,
  DESTROY_SUCCESS: `${prefix}_DESTROY_SUCCESS`,
  DESTROY_ERROR: `${prefix}_DESTROY_ERROR`,

  DESTROY_ALL_STARTED: `${prefix}_DESTROY_ALL_STARTED`,
  DESTROY_ALL_SUCCESS: `${prefix}_DESTROY_ALL_SUCCESS`,
  DESTROY_ALL_ERROR: `${prefix}_DESTROY_ALL_ERROR`,

  doDestroy: (id) => async (dispatch) => {
    try {
      dispatch({
        type: resourceRequirementsDestroyActions.DESTROY_STARTED,
      });

      await ResourceRequirementsService.destroyAll([id]);

      dispatch({
        type: resourceRequirementsDestroyActions.DESTROY_SUCCESS,
      });

      Message.success(
        i18n('entities.resourceRequirements.destroy.success'),
      );

      dispatch(listActions.doFetchCurrentFilter());

      getHistory().push('/resource-requirements');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: resourceRequirementsDestroyActions.DESTROY_ERROR,
      });
    }
  },

  doDestroyAll: (ids) => async (dispatch) => {
    try {
      dispatch({
        type: resourceRequirementsDestroyActions.DESTROY_ALL_STARTED,
      });

      await ResourceRequirementsService.destroyAll(ids);

      dispatch({
        type: resourceRequirementsDestroyActions.DESTROY_ALL_SUCCESS,
      });

      if (listActions) {
        dispatch(listActions.doClearAllSelected());
        dispatch(listActions.doFetchCurrentFilter());
      }

      Message.success(
        i18n('entities.resourceRequirements.destroyAll.success'),
      );

      getHistory().push('/resource-requirements');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: resourceRequirementsDestroyActions.DESTROY_ALL_ERROR,
      });
    }
  },
};

export default resourceRequirementsDestroyActions;
