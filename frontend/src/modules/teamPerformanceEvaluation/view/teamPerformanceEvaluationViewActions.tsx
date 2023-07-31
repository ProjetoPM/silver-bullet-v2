import TeamPerformanceEvaluationService from 'src/modules/teamPerformanceEvaluation/teamPerformanceEvaluationService';
import Errors from 'src/modules/shared/error/errors';
import { getHistory } from 'src/modules/store';

const prefix = 'TEAMPERFORMANCEEVALUATION_VIEW';

const teamPerformanceEvaluationViewActions = {
  FIND_STARTED: `${prefix}_FIND_STARTED`,
  FIND_SUCCESS: `${prefix}_FIND_SUCCESS`,
  FIND_ERROR: `${prefix}_FIND_ERROR`,

  doFind: (id) => async (dispatch) => {
    try {
      dispatch({
        type: teamPerformanceEvaluationViewActions.FIND_STARTED,
      });

      const record = await TeamPerformanceEvaluationService.find(id);

      dispatch({
        type: teamPerformanceEvaluationViewActions.FIND_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: teamPerformanceEvaluationViewActions.FIND_ERROR,
      });

      getHistory().push('/team-performance-evaluation');
    }
  },
};

export default teamPerformanceEvaluationViewActions;
