import QualityChecklistService from 'src/modules/qualityChecklist/qualityChecklistService';
import Errors from 'src/modules/shared/error/errors';
import { getHistory } from 'src/modules/store';

const prefix = 'QUALITYCHECKLIST_VIEW';

const qualityChecklistViewActions = {
  FIND_STARTED: `${prefix}_FIND_STARTED`,
  FIND_SUCCESS: `${prefix}_FIND_SUCCESS`,
  FIND_ERROR: `${prefix}_FIND_ERROR`,

  doFind: (id) => async (dispatch) => {
    try {
      dispatch({
        type: qualityChecklistViewActions.FIND_STARTED,
      });

      const record = await QualityChecklistService.find(id);

      dispatch({
        type: qualityChecklistViewActions.FIND_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: qualityChecklistViewActions.FIND_ERROR,
      });

      getHistory().push('/quality-checklist');
    }
  },
};

export default qualityChecklistViewActions;
