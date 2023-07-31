import { createSelector } from 'reselect';

const selectRaw = (state) => state.workPerformanceReports.view;

const selectRecord = createSelector(
  [selectRaw],
  (raw) => raw.record,
);

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const workPerformanceReportsViewSelectors = {
  selectLoading,
  selectRecord,
  selectRaw,
};

export default workPerformanceReportsViewSelectors;
