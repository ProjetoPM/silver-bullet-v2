import listActions from 'src/modules/resource/list/resourceListActions';
import ResourceService from 'src/modules/resource/resourceService';
import Errors from 'src/modules/shared/error/errors';
import { i18n } from 'src/i18n';
import { getHistory } from 'src/modules/store';
import Message from 'src/view/shared/message';

const prefix = 'RESOURCE_DESTROY';

const resourceDestroyActions = {
  DESTROY_STARTED: `${prefix}_DESTROY_STARTED`,
  DESTROY_SUCCESS: `${prefix}_DESTROY_SUCCESS`,
  DESTROY_ERROR: `${prefix}_DESTROY_ERROR`,

  DESTROY_ALL_STARTED: `${prefix}_DESTROY_ALL_STARTED`,
  DESTROY_ALL_SUCCESS: `${prefix}_DESTROY_ALL_SUCCESS`,
  DESTROY_ALL_ERROR: `${prefix}_DESTROY_ALL_ERROR`,

  doDestroy: (id) => async (dispatch) => {
    try {
      dispatch({
        type: resourceDestroyActions.DESTROY_STARTED,
      });

      await ResourceService.destroyAll([id]);

      dispatch({
        type: resourceDestroyActions.DESTROY_SUCCESS,
      });

      Message.success(
        i18n('entities.resource.destroy.success'),
      );

      dispatch(listActions.doFetchCurrentFilter());

      getHistory().push('/resource');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: resourceDestroyActions.DESTROY_ERROR,
      });
    }
  },

  doDestroyAll: (ids) => async (dispatch) => {
    try {
      dispatch({
        type: resourceDestroyActions.DESTROY_ALL_STARTED,
      });

      await ResourceService.destroyAll(ids);

      dispatch({
        type: resourceDestroyActions.DESTROY_ALL_SUCCESS,
      });

      if (listActions) {
        dispatch(listActions.doClearAllSelected());
        dispatch(listActions.doFetchCurrentFilter());
      }

      Message.success(
        i18n('entities.resource.destroyAll.success'),
      );

      getHistory().push('/resource');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: resourceDestroyActions.DESTROY_ALL_ERROR,
      });
    }
  },
};

export default resourceDestroyActions;
