import { createSelector } from 'reselect';

const selectRaw = (state) => state.projectPerformanceMonitoringReport.destroy;

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const projectPerformanceMonitoringReportDestroySelectors = {
  selectLoading,
};

export default projectPerformanceMonitoringReportDestroySelectors;
