import listActions from 'src/modules/procurementStatementWorkRegister/list/procurementStatementWorkRegisterListActions';
import ProcurementStatementWorkRegisterService from 'src/modules/procurementStatementWorkRegister/procurementStatementWorkRegisterService';
import Errors from 'src/modules/shared/error/errors';
import { i18n } from 'src/i18n';
import { getHistory } from 'src/modules/store';
import Message from 'src/view/shared/message';

const prefix = 'PROCUREMENTSTATEMENTWORKREGISTER_DESTROY';

const procurementStatementWorkRegisterDestroyActions = {
  DESTROY_STARTED: `${prefix}_DESTROY_STARTED`,
  DESTROY_SUCCESS: `${prefix}_DESTROY_SUCCESS`,
  DESTROY_ERROR: `${prefix}_DESTROY_ERROR`,

  DESTROY_ALL_STARTED: `${prefix}_DESTROY_ALL_STARTED`,
  DESTROY_ALL_SUCCESS: `${prefix}_DESTROY_ALL_SUCCESS`,
  DESTROY_ALL_ERROR: `${prefix}_DESTROY_ALL_ERROR`,

  doDestroy: (id) => async (dispatch) => {
    try {
      dispatch({
        type: procurementStatementWorkRegisterDestroyActions.DESTROY_STARTED,
      });

      await ProcurementStatementWorkRegisterService.destroyAll([id]);

      dispatch({
        type: procurementStatementWorkRegisterDestroyActions.DESTROY_SUCCESS,
      });

      Message.success(
        i18n('entities.procurementStatementWorkRegister.destroy.success'),
      );

      dispatch(listActions.doFetchCurrentFilter());

      getHistory().push('/procurement-statement-work-register');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: procurementStatementWorkRegisterDestroyActions.DESTROY_ERROR,
      });
    }
  },

  doDestroyAll: (ids) => async (dispatch) => {
    try {
      dispatch({
        type: procurementStatementWorkRegisterDestroyActions.DESTROY_ALL_STARTED,
      });

      await ProcurementStatementWorkRegisterService.destroyAll(ids);

      dispatch({
        type: procurementStatementWorkRegisterDestroyActions.DESTROY_ALL_SUCCESS,
      });

      if (listActions) {
        dispatch(listActions.doClearAllSelected());
        dispatch(listActions.doFetchCurrentFilter());
      }

      Message.success(
        i18n('entities.procurementStatementWorkRegister.destroyAll.success'),
      );

      getHistory().push('/procurement-statement-work-register');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: procurementStatementWorkRegisterDestroyActions.DESTROY_ALL_ERROR,
      });
    }
  },
};

export default procurementStatementWorkRegisterDestroyActions;
