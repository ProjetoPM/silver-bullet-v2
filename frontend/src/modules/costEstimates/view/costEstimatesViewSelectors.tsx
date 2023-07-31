import { createSelector } from 'reselect';

const selectRaw = (state) => state.costEstimates.view;

const selectRecord = createSelector(
  [selectRaw],
  (raw) => raw.record,
);

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const costEstimatesViewSelectors = {
  selectLoading,
  selectRecord,
  selectRaw,
};

export default costEstimatesViewSelectors;
