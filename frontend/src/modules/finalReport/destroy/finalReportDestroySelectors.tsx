import { createSelector } from 'reselect';

const selectRaw = (state) => state.finalReport.destroy;

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const finalReportDestroySelectors = {
  selectLoading,
};

export default finalReportDestroySelectors;
