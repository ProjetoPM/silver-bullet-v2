import TeamPerformanceEvaluationService from 'src/modules/teamPerformanceEvaluation/teamPerformanceEvaluationService';
import Errors from 'src/modules/shared/error/errors';
import Message from 'src/view/shared/message';
import { getHistory } from 'src/modules/store';
import { i18n } from 'src/i18n';

const prefix = 'TEAMPERFORMANCEEVALUATION_FORM';

const teamPerformanceEvaluationFormActions = {
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
        type: teamPerformanceEvaluationFormActions.INIT_STARTED,
      });

      let record = {};

      const isEdit = Boolean(id);

      if (isEdit) {
        record = await TeamPerformanceEvaluationService.find(id);
      }

      dispatch({
        type: teamPerformanceEvaluationFormActions.INIT_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: teamPerformanceEvaluationFormActions.INIT_ERROR,
      });

      getHistory().push('/team-performance-evaluation');
    }
  },

  doCreate: (values) => async (dispatch) => {
    try {
      dispatch({
        type: teamPerformanceEvaluationFormActions.CREATE_STARTED,
      });

      await TeamPerformanceEvaluationService.create(values);

      dispatch({
        type: teamPerformanceEvaluationFormActions.CREATE_SUCCESS,
      });

      Message.success(
        i18n('entities.teamPerformanceEvaluation.create.success'),
      );

      getHistory().push('/team-performance-evaluation');
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: teamPerformanceEvaluationFormActions.CREATE_ERROR,
      });
    }
  },

  doUpdate: (id, values) => async (dispatch, getState) => {
    try {
      dispatch({
        type: teamPerformanceEvaluationFormActions.UPDATE_STARTED,
      });

      await TeamPerformanceEvaluationService.update(id, values);

      dispatch({
        type: teamPerformanceEvaluationFormActions.UPDATE_SUCCESS,
      });

      Message.success(
        i18n('entities.teamPerformanceEvaluation.update.success'),
      );

      getHistory().push('/team-performance-evaluation');
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: teamPerformanceEvaluationFormActions.UPDATE_ERROR,
      });
    }
  },
};

export default teamPerformanceEvaluationFormActions;
