import WorkbreakdownStructureService from 'src/modules/workbreakdownStructure/workbreakdownStructureService';
import Errors from 'src/modules/shared/error/errors';
import { getHistory } from 'src/modules/store';

const prefix = 'WORKBREAKDOWNSTRUCTURE_VIEW';

const workbreakdownStructureViewActions = {
  FIND_STARTED: `${prefix}_FIND_STARTED`,
  FIND_SUCCESS: `${prefix}_FIND_SUCCESS`,
  FIND_ERROR: `${prefix}_FIND_ERROR`,

  doFind: (id) => async (dispatch) => {
    try {
      dispatch({
        type: workbreakdownStructureViewActions.FIND_STARTED,
      });

      const record = await WorkbreakdownStructureService.find(id);

      dispatch({
        type: workbreakdownStructureViewActions.FIND_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: workbreakdownStructureViewActions.FIND_ERROR,
      });

      getHistory().push('/workbreakdown-structure');
    }
  },
};

export default workbreakdownStructureViewActions;
