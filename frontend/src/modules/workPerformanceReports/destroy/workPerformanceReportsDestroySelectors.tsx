import { createSelector } from 'reselect';

const selectRaw = (state) => state.workPerformanceReports.destroy;

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const workPerformanceReportsDestroySelectors = {
  selectLoading,
};

export default workPerformanceReportsDestroySelectors;
