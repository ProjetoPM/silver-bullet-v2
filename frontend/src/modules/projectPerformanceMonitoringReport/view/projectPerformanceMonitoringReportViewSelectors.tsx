import { createSelector } from 'reselect';

const selectRaw = (state) => state.projectPerformanceMonitoringReport.view;

const selectRecord = createSelector(
  [selectRaw],
  (raw) => raw.record,
);

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const projectPerformanceMonitoringReportViewSelectors = {
  selectLoading,
  selectRecord,
  selectRaw,
};

export default projectPerformanceMonitoringReportViewSelectors;
