import { createSelector } from 'reselect';

const selectRaw = (state) => state.issueLog.view;

const selectRecord = createSelector(
  [selectRaw],
  (raw) => raw.record,
);

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const issueLogViewSelectors = {
  selectLoading,
  selectRecord,
  selectRaw,
};

export default issueLogViewSelectors;
