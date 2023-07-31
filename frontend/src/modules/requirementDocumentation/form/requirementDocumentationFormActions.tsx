import RequirementDocumentationService from 'src/modules/requirementDocumentation/requirementDocumentationService';
import Errors from 'src/modules/shared/error/errors';
import Message from 'src/view/shared/message';
import { getHistory } from 'src/modules/store';
import { i18n } from 'src/i18n';

const prefix = 'REQUIREMENTDOCUMENTATION_FORM';

const requirementDocumentationFormActions = {
  INIT_STARTED: `${prefix}_INIT_STARTED`,
  INIT_SUCCESS: `${prefix}_INIT_SUCCESS`,
  INIT_ERROR: `${prefix}_INIT_ERROR`,

  CREATE_STARTED: `${prefix}_CREATE_STARTED`,
  CREATE_SUCCESS: `${prefix}_CREATE_SUCCESS`,
  CREATE_ERROR: `${prefix}_CREATE_ERROR`,

  UPDATE_STARTED: `${prefix}_UPDATE_STARTED`,
  UPDATE_SUCCESS: `${prefix}_UPDATE_SUCCESS`,
  UPDATE_ERROR: `${prefix}_UPDATE_ERROR`,

  doInit: (id) => async (dispatch) => {
    try {
      dispatch({
        type: requirementDocumentationFormActions.INIT_STARTED,
      });

      let record = {};

      const isEdit = Boolean(id);

      if (isEdit) {
        record = await RequirementDocumentationService.find(id);
      }

      dispatch({
        type: requirementDocumentationFormActions.INIT_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: requirementDocumentationFormActions.INIT_ERROR,
      });

      getHistory().push('/requirement-documentation');
    }
  },

  doCreate: (values) => async (dispatch) => {
    try {
      dispatch({
        type: requirementDocumentationFormActions.CREATE_STARTED,
      });

      await RequirementDocumentationService.create(values);

      dispatch({
        type: requirementDocumentationFormActions.CREATE_SUCCESS,
      });

      Message.success(
        i18n('entities.requirementDocumentation.create.success'),
      );

      getHistory().push('/requirement-documentation');
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: requirementDocumentationFormActions.CREATE_ERROR,
      });
    }
  },

  doUpdate: (id, values) => async (dispatch, getState) => {
    try {
      dispatch({
        type: requirementDocumentationFormActions.UPDATE_STARTED,
      });

      await RequirementDocumentationService.update(id, values);

      dispatch({
        type: requirementDocumentationFormActions.UPDATE_SUCCESS,
      });

      Message.success(
        i18n('entities.requirementDocumentation.update.success'),
      );

      getHistory().push('/requirement-documentation');
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: requirementDocumentationFormActions.UPDATE_ERROR,
      });
    }
  },
};

export default requirementDocumentationFormActions;
