import listActions from 'src/modules/projectCharter/list/projectCharterListActions';
import ProjectCharterService from 'src/modules/projectCharter/projectCharterService';
import Errors from 'src/modules/shared/error/errors';
import { i18n } from 'src/i18n';
import { getHistory } from 'src/modules/store';
import Message from 'src/view/shared/message';

const prefix = 'PROJECTCHARTER_DESTROY';

const projectCharterDestroyActions = {
  DESTROY_STARTED: `${prefix}_DESTROY_STARTED`,
  DESTROY_SUCCESS: `${prefix}_DESTROY_SUCCESS`,
  DESTROY_ERROR: `${prefix}_DESTROY_ERROR`,

  DESTROY_ALL_STARTED: `${prefix}_DESTROY_ALL_STARTED`,
  DESTROY_ALL_SUCCESS: `${prefix}_DESTROY_ALL_SUCCESS`,
  DESTROY_ALL_ERROR: `${prefix}_DESTROY_ALL_ERROR`,

  doDestroy: (id) => async (dispatch) => {
    try {
      dispatch({
        type: projectCharterDestroyActions.DESTROY_STARTED,
      });

      await ProjectCharterService.destroyAll([id]);

      dispatch({
        type: projectCharterDestroyActions.DESTROY_SUCCESS,
      });

      Message.success(
        i18n('entities.projectCharter.destroy.success'),
      );

      dispatch(listActions.doFetchCurrentFilter());

      getHistory().push('/project-charter');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: projectCharterDestroyActions.DESTROY_ERROR,
      });
    }
  },

  doDestroyAll: (ids) => async (dispatch) => {
    try {
      dispatch({
        type: projectCharterDestroyActions.DESTROY_ALL_STARTED,
      });

      await ProjectCharterService.destroyAll(ids);

      dispatch({
        type: projectCharterDestroyActions.DESTROY_ALL_SUCCESS,
      });

      if (listActions) {
        dispatch(listActions.doClearAllSelected());
        dispatch(listActions.doFetchCurrentFilter());
      }

      Message.success(
        i18n('entities.projectCharter.destroyAll.success'),
      );

      getHistory().push('/project-charter');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: projectCharterDestroyActions.DESTROY_ALL_ERROR,
      });
    }
  },
};

export default projectCharterDestroyActions;
