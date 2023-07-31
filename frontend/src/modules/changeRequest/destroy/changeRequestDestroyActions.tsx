import listActions from 'src/modules/changeRequest/list/changeRequestListActions';
import ChangeRequestService from 'src/modules/changeRequest/changeRequestService';
import Errors from 'src/modules/shared/error/errors';
import { i18n } from 'src/i18n';
import { getHistory } from 'src/modules/store';
import Message from 'src/view/shared/message';

const prefix = 'CHANGEREQUEST_DESTROY';

const changeRequestDestroyActions = {
  DESTROY_STARTED: `${prefix}_DESTROY_STARTED`,
  DESTROY_SUCCESS: `${prefix}_DESTROY_SUCCESS`,
  DESTROY_ERROR: `${prefix}_DESTROY_ERROR`,

  DESTROY_ALL_STARTED: `${prefix}_DESTROY_ALL_STARTED`,
  DESTROY_ALL_SUCCESS: `${prefix}_DESTROY_ALL_SUCCESS`,
  DESTROY_ALL_ERROR: `${prefix}_DESTROY_ALL_ERROR`,

  doDestroy: (id) => async (dispatch) => {
    try {
      dispatch({
        type: changeRequestDestroyActions.DESTROY_STARTED,
      });

      await ChangeRequestService.destroyAll([id]);

      dispatch({
        type: changeRequestDestroyActions.DESTROY_SUCCESS,
      });

      Message.success(
        i18n('entities.changeRequest.destroy.success'),
      );

      dispatch(listActions.doFetchCurrentFilter());

      getHistory().push('/change-request');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: changeRequestDestroyActions.DESTROY_ERROR,
      });
    }
  },

  doDestroyAll: (ids) => async (dispatch) => {
    try {
      dispatch({
        type: changeRequestDestroyActions.DESTROY_ALL_STARTED,
      });

      await ChangeRequestService.destroyAll(ids);

      dispatch({
        type: changeRequestDestroyActions.DESTROY_ALL_SUCCESS,
      });

      if (listActions) {
        dispatch(listActions.doClearAllSelected());
        dispatch(listActions.doFetchCurrentFilter());
      }

      Message.success(
        i18n('entities.changeRequest.destroyAll.success'),
      );

      getHistory().push('/change-request');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: changeRequestDestroyActions.DESTROY_ALL_ERROR,
      });
    }
  },
};

export default changeRequestDestroyActions;
