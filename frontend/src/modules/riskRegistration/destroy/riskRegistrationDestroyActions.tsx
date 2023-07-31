import listActions from 'src/modules/riskRegistration/list/riskRegistrationListActions';
import RiskRegistrationService from 'src/modules/riskRegistration/riskRegistrationService';
import Errors from 'src/modules/shared/error/errors';
import { i18n } from 'src/i18n';
import { getHistory } from 'src/modules/store';
import Message from 'src/view/shared/message';

const prefix = 'RISKREGISTRATION_DESTROY';

const riskRegistrationDestroyActions = {
  DESTROY_STARTED: `${prefix}_DESTROY_STARTED`,
  DESTROY_SUCCESS: `${prefix}_DESTROY_SUCCESS`,
  DESTROY_ERROR: `${prefix}_DESTROY_ERROR`,

  DESTROY_ALL_STARTED: `${prefix}_DESTROY_ALL_STARTED`,
  DESTROY_ALL_SUCCESS: `${prefix}_DESTROY_ALL_SUCCESS`,
  DESTROY_ALL_ERROR: `${prefix}_DESTROY_ALL_ERROR`,

  doDestroy: (id) => async (dispatch) => {
    try {
      dispatch({
        type: riskRegistrationDestroyActions.DESTROY_STARTED,
      });

      await RiskRegistrationService.destroyAll([id]);

      dispatch({
        type: riskRegistrationDestroyActions.DESTROY_SUCCESS,
      });

      Message.success(
        i18n('entities.riskRegistration.destroy.success'),
      );

      dispatch(listActions.doFetchCurrentFilter());

      getHistory().push('/risk-registration');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: riskRegistrationDestroyActions.DESTROY_ERROR,
      });
    }
  },

  doDestroyAll: (ids) => async (dispatch) => {
    try {
      dispatch({
        type: riskRegistrationDestroyActions.DESTROY_ALL_STARTED,
      });

      await RiskRegistrationService.destroyAll(ids);

      dispatch({
        type: riskRegistrationDestroyActions.DESTROY_ALL_SUCCESS,
      });

      if (listActions) {
        dispatch(listActions.doClearAllSelected());
        dispatch(listActions.doFetchCurrentFilter());
      }

      Message.success(
        i18n('entities.riskRegistration.destroyAll.success'),
      );

      getHistory().push('/risk-registration');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: riskRegistrationDestroyActions.DESTROY_ALL_ERROR,
      });
    }
  },
};

export default riskRegistrationDestroyActions;
