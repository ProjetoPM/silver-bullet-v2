import listActions from 'src/modules/requirementDocumentation/list/requirementDocumentationListActions';
import RequirementDocumentationService from 'src/modules/requirementDocumentation/requirementDocumentationService';
import Errors from 'src/modules/shared/error/errors';
import { i18n } from 'src/i18n';
import { getHistory } from 'src/modules/store';
import Message from 'src/view/shared/message';

const prefix = 'REQUIREMENTDOCUMENTATION_DESTROY';

const requirementDocumentationDestroyActions = {
  DESTROY_STARTED: `${prefix}_DESTROY_STARTED`,
  DESTROY_SUCCESS: `${prefix}_DESTROY_SUCCESS`,
  DESTROY_ERROR: `${prefix}_DESTROY_ERROR`,

  DESTROY_ALL_STARTED: `${prefix}_DESTROY_ALL_STARTED`,
  DESTROY_ALL_SUCCESS: `${prefix}_DESTROY_ALL_SUCCESS`,
  DESTROY_ALL_ERROR: `${prefix}_DESTROY_ALL_ERROR`,

  doDestroy: (id) => async (dispatch) => {
    try {
      dispatch({
        type: requirementDocumentationDestroyActions.DESTROY_STARTED,
      });

      await RequirementDocumentationService.destroyAll([id]);

      dispatch({
        type: requirementDocumentationDestroyActions.DESTROY_SUCCESS,
      });

      Message.success(
        i18n('entities.requirementDocumentation.destroy.success'),
      );

      dispatch(listActions.doFetchCurrentFilter());

      getHistory().push('/requirement-documentation');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: requirementDocumentationDestroyActions.DESTROY_ERROR,
      });
    }
  },

  doDestroyAll: (ids) => async (dispatch) => {
    try {
      dispatch({
        type: requirementDocumentationDestroyActions.DESTROY_ALL_STARTED,
      });

      await RequirementDocumentationService.destroyAll(ids);

      dispatch({
        type: requirementDocumentationDestroyActions.DESTROY_ALL_SUCCESS,
      });

      if (listActions) {
        dispatch(listActions.doClearAllSelected());
        dispatch(listActions.doFetchCurrentFilter());
      }

      Message.success(
        i18n('entities.requirementDocumentation.destroyAll.success'),
      );

      getHistory().push('/requirement-documentation');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: requirementDocumentationDestroyActions.DESTROY_ALL_ERROR,
      });
    }
  },
};

export default requirementDocumentationDestroyActions;
