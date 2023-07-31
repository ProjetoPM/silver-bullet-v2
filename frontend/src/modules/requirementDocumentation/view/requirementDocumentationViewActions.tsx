import RequirementDocumentationService from 'src/modules/requirementDocumentation/requirementDocumentationService';
import Errors from 'src/modules/shared/error/errors';
import { getHistory } from 'src/modules/store';

const prefix = 'REQUIREMENTDOCUMENTATION_VIEW';

const requirementDocumentationViewActions = {
  FIND_STARTED: `${prefix}_FIND_STARTED`,
  FIND_SUCCESS: `${prefix}_FIND_SUCCESS`,
  FIND_ERROR: `${prefix}_FIND_ERROR`,

  doFind: (id) => async (dispatch) => {
    try {
      dispatch({
        type: requirementDocumentationViewActions.FIND_STARTED,
      });

      const record = await RequirementDocumentationService.find(id);

      dispatch({
        type: requirementDocumentationViewActions.FIND_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: requirementDocumentationViewActions.FIND_ERROR,
      });

      getHistory().push('/requirement-documentation');
    }
  },
};

export default requirementDocumentationViewActions;
