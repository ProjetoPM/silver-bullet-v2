import { createSelector } from 'reselect';

const selectRaw = (state) => state.teamPerformanceEvaluation.destroy;

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const teamPerformanceEvaluationDestroySelectors = {
  selectLoading,
};

export default teamPerformanceEvaluationDestroySelectors;
