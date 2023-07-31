import ResourceBreakdownStructureService from 'src/modules/resourceBreakdownStructure/resourceBreakdownStructureService';
import Errors from 'src/modules/shared/error/errors';
import { getHistory } from 'src/modules/store';

const prefix = 'RESOURCEBREAKDOWNSTRUCTURE_VIEW';

const resourceBreakdownStructureViewActions = {
  FIND_STARTED: `${prefix}_FIND_STARTED`,
  FIND_SUCCESS: `${prefix}_FIND_SUCCESS`,
  FIND_ERROR: `${prefix}_FIND_ERROR`,

  doFind: (id) => async (dispatch) => {
    try {
      dispatch({
        type: resourceBreakdownStructureViewActions.FIND_STARTED,
      });

      const record = await ResourceBreakdownStructureService.find(id);

      dispatch({
        type: resourceBreakdownStructureViewActions.FIND_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: resourceBreakdownStructureViewActions.FIND_ERROR,
      });

      getHistory().push('/resource-breakdown-structure');
    }
  },
};

export default resourceBreakdownStructureViewActions;
