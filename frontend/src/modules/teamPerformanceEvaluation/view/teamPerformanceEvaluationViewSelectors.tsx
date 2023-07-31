import { createSelector } from 'reselect';

const selectRaw = (state) => state.teamPerformanceEvaluation.view;

const selectRecord = createSelector(
  [selectRaw],
  (raw) => raw.record,
);

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const teamPerformanceEvaluationViewSelectors = {
  selectLoading,
  selectRecord,
  selectRaw,
};

export default teamPerformanceEvaluationViewSelectors;
