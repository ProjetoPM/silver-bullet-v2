import listActions from 'src/modules/projectScopeStatement/list/projectScopeStatementListActions';
import ProjectScopeStatementService from 'src/modules/projectScopeStatement/projectScopeStatementService';
import Errors from 'src/modules/shared/error/errors';
import { i18n } from 'src/i18n';
import { getHistory } from 'src/modules/store';
import Message from 'src/view/shared/message';

const prefix = 'PROJECTSCOPESTATEMENT_DESTROY';

const projectScopeStatementDestroyActions = {
  DESTROY_STARTED: `${prefix}_DESTROY_STARTED`,
  DESTROY_SUCCESS: `${prefix}_DESTROY_SUCCESS`,
  DESTROY_ERROR: `${prefix}_DESTROY_ERROR`,

  DESTROY_ALL_STARTED: `${prefix}_DESTROY_ALL_STARTED`,
  DESTROY_ALL_SUCCESS: `${prefix}_DESTROY_ALL_SUCCESS`,
  DESTROY_ALL_ERROR: `${prefix}_DESTROY_ALL_ERROR`,

  doDestroy: (id) => async (dispatch) => {
    try {
      dispatch({
        type: projectScopeStatementDestroyActions.DESTROY_STARTED,
      });

      await ProjectScopeStatementService.destroyAll([id]);

      dispatch({
        type: projectScopeStatementDestroyActions.DESTROY_SUCCESS,
      });

      Message.success(
        i18n('entities.projectScopeStatement.destroy.success'),
      );

      dispatch(listActions.doFetchCurrentFilter());

      getHistory().push('/project-scope-statement');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: projectScopeStatementDestroyActions.DESTROY_ERROR,
      });
    }
  },

  doDestroyAll: (ids) => async (dispatch) => {
    try {
      dispatch({
        type: projectScopeStatementDestroyActions.DESTROY_ALL_STARTED,
      });

      await ProjectScopeStatementService.destroyAll(ids);

      dispatch({
        type: projectScopeStatementDestroyActions.DESTROY_ALL_SUCCESS,
      });

      if (listActions) {
        dispatch(listActions.doClearAllSelected());
        dispatch(listActions.doFetchCurrentFilter());
      }

      Message.success(
        i18n('entities.projectScopeStatement.destroyAll.success'),
      );

      getHistory().push('/project-scope-statement');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: projectScopeStatementDestroyActions.DESTROY_ALL_ERROR,
      });
    }
  },
};

export default projectScopeStatementDestroyActions;
