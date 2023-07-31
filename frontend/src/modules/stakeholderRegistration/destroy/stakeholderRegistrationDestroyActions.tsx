import listActions from 'src/modules/stakeholderRegistration/list/stakeholderRegistrationListActions';
import StakeholderRegistrationService from 'src/modules/stakeholderRegistration/stakeholderRegistrationService';
import Errors from 'src/modules/shared/error/errors';
import { i18n } from 'src/i18n';
import { getHistory } from 'src/modules/store';
import Message from 'src/view/shared/message';

const prefix = 'STAKEHOLDERREGISTRATION_DESTROY';

const stakeholderRegistrationDestroyActions = {
  DESTROY_STARTED: `${prefix}_DESTROY_STARTED`,
  DESTROY_SUCCESS: `${prefix}_DESTROY_SUCCESS`,
  DESTROY_ERROR: `${prefix}_DESTROY_ERROR`,

  DESTROY_ALL_STARTED: `${prefix}_DESTROY_ALL_STARTED`,
  DESTROY_ALL_SUCCESS: `${prefix}_DESTROY_ALL_SUCCESS`,
  DESTROY_ALL_ERROR: `${prefix}_DESTROY_ALL_ERROR`,

  doDestroy: (id) => async (dispatch) => {
    try {
      dispatch({
        type: stakeholderRegistrationDestroyActions.DESTROY_STARTED,
      });

      await StakeholderRegistrationService.destroyAll([id]);

      dispatch({
        type: stakeholderRegistrationDestroyActions.DESTROY_SUCCESS,
      });

      Message.success(
        i18n('entities.stakeholderRegistration.destroy.success'),
      );

      dispatch(listActions.doFetchCurrentFilter());

      getHistory().push('/stakeholder-registration');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: stakeholderRegistrationDestroyActions.DESTROY_ERROR,
      });
    }
  },

  doDestroyAll: (ids) => async (dispatch) => {
    try {
      dispatch({
        type: stakeholderRegistrationDestroyActions.DESTROY_ALL_STARTED,
      });

      await StakeholderRegistrationService.destroyAll(ids);

      dispatch({
        type: stakeholderRegistrationDestroyActions.DESTROY_ALL_SUCCESS,
      });

      if (listActions) {
        dispatch(listActions.doClearAllSelected());
        dispatch(listActions.doFetchCurrentFilter());
      }

      Message.success(
        i18n('entities.stakeholderRegistration.destroyAll.success'),
      );

      getHistory().push('/stakeholder-registration');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: stakeholderRegistrationDestroyActions.DESTROY_ALL_ERROR,
      });
    }
  },
};

export default stakeholderRegistrationDestroyActions;
