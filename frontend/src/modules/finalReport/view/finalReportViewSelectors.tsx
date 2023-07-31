import { createSelector } from 'reselect';

const selectRaw = (state) => state.finalReport.view;

const selectRecord = createSelector(
  [selectRaw],
  (raw) => raw.record,
);

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const finalReportViewSelectors = {
  selectLoading,
  selectRecord,
  selectRaw,
};

export default finalReportViewSelectors;
