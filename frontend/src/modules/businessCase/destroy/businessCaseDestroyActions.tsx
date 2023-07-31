import listActions from 'src/modules/businessCase/list/businessCaseListActions';
import BusinessCaseService from 'src/modules/businessCase/businessCaseService';
import Errors from 'src/modules/shared/error/errors';
import { i18n } from 'src/i18n';
import { getHistory } from 'src/modules/store';
import Message from 'src/view/shared/message';

const prefix = 'BUSINESSCASE_DESTROY';

const businessCaseDestroyActions = {
  DESTROY_STARTED: `${prefix}_DESTROY_STARTED`,
  DESTROY_SUCCESS: `${prefix}_DESTROY_SUCCESS`,
  DESTROY_ERROR: `${prefix}_DESTROY_ERROR`,

  DESTROY_ALL_STARTED: `${prefix}_DESTROY_ALL_STARTED`,
  DESTROY_ALL_SUCCESS: `${prefix}_DESTROY_ALL_SUCCESS`,
  DESTROY_ALL_ERROR: `${prefix}_DESTROY_ALL_ERROR`,

  doDestroy: (id) => async (dispatch) => {
    try {
      dispatch({
        type: businessCaseDestroyActions.DESTROY_STARTED,
      });

      await BusinessCaseService.destroyAll([id]);

      dispatch({
        type: businessCaseDestroyActions.DESTROY_SUCCESS,
      });

      Message.success(
        i18n('entities.businessCase.destroy.success'),
      );

      dispatch(listActions.doFetchCurrentFilter());

      getHistory().push('/business-case');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: businessCaseDestroyActions.DESTROY_ERROR,
      });
    }
  },

  doDestroyAll: (ids) => async (dispatch) => {
    try {
      dispatch({
        type: businessCaseDestroyActions.DESTROY_ALL_STARTED,
      });

      await BusinessCaseService.destroyAll(ids);

      dispatch({
        type: businessCaseDestroyActions.DESTROY_ALL_SUCCESS,
      });

      if (listActions) {
        dispatch(listActions.doClearAllSelected());
        dispatch(listActions.doFetchCurrentFilter());
      }

      Message.success(
        i18n('entities.businessCase.destroyAll.success'),
      );

      getHistory().push('/business-case');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: businessCaseDestroyActions.DESTROY_ALL_ERROR,
      });
    }
  },
};

export default businessCaseDestroyActions;
