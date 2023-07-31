import ResourceBreakdownStructureService from 'src/modules/resourceBreakdownStructure/resourceBreakdownStructureService';
import Errors from 'src/modules/shared/error/errors';
import Message from 'src/view/shared/message';
import { getHistory } from 'src/modules/store';
import { i18n } from 'src/i18n';

const prefix = 'RESOURCEBREAKDOWNSTRUCTURE_FORM';

const resourceBreakdownStructureFormActions = {
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
        type: resourceBreakdownStructureFormActions.INIT_STARTED,
      });

      let record = {};

      const isEdit = Boolean(id);

      if (isEdit) {
        record = await ResourceBreakdownStructureService.find(id);
      }

      dispatch({
        type: resourceBreakdownStructureFormActions.INIT_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: resourceBreakdownStructureFormActions.INIT_ERROR,
      });

      getHistory().push('/resource-breakdown-structure');
    }
  },

  doCreate: (values) => async (dispatch) => {
    try {
      dispatch({
        type: resourceBreakdownStructureFormActions.CREATE_STARTED,
      });

      await ResourceBreakdownStructureService.create(values);

      dispatch({
        type: resourceBreakdownStructureFormActions.CREATE_SUCCESS,
      });

      Message.success(
        i18n('entities.resourceBreakdownStructure.create.success'),
      );

      getHistory().push('/resource-breakdown-structure');
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: resourceBreakdownStructureFormActions.CREATE_ERROR,
      });
    }
  },

  doUpdate: (id, values) => async (dispatch, getState) => {
    try {
      dispatch({
        type: resourceBreakdownStructureFormActions.UPDATE_STARTED,
      });

      await ResourceBreakdownStructureService.update(id, values);

      dispatch({
        type: resourceBreakdownStructureFormActions.UPDATE_SUCCESS,
      });

      Message.success(
        i18n('entities.resourceBreakdownStructure.update.success'),
      );

      getHistory().push('/resource-breakdown-structure');
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: resourceBreakdownStructureFormActions.UPDATE_ERROR,
      });
    }
  },
};

export default resourceBreakdownStructureFormActions;
